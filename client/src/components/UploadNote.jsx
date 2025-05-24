import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UploadNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);
  const user = useSelector((state) => state.user.userData);
  const userId = user?._id;

  const submitFile = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("file", file);
    formData.append("userId", userId);

    try {
      await axios.post("http://localhost:2002/notes/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Notes uploaded successfully");

      // ✅ Clear form
      setTitle("");
      setDescription("");
      setTags("");
      setFile(null);
    } catch (error) {
      console.error("Failed to upload:", error);
      alert("Upload failed. Please try again.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === "application/pdf") {
      setFile(droppedFile);
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-xl rounded-xl bg-white bg-opacity-10 p-6 text-white shadow-lg backdrop-blur-lg">
      <h2 className="mb-6 text-center text-3xl font-bold">Upload Notes</h2>

      <form onSubmit={submitFile} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-box"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-box"
          required
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="input-box"
          required
        />

        <div
          className={`block w-full cursor-pointer rounded-lg border-2 border-dashed ${
            isDragging ? "border-blue-300 bg-opacity-30" : "border-white"
          } bg-white bg-opacity-10 px-4 py-6 text-center transition hover:bg-opacity-20`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          {file ? (
            <p className="text-white">Selected: {file.name}</p>
          ) : (
            <>
              <p className="font-semibold">Click or drag to upload a PDF</p>
              <p className="mt-1 text-xs text-gray-300">
                Only PDF files supported
              </p>
            </>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            id="file-upload"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
            required={!file}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-white bg-opacity-20 px-4 py-2 font-semibold text-white hover:bg-opacity-30"
        >
          Upload
        </button>
      </form>

      {/* Styled input boxes */}
      <style>
        {`
          .input-box {
            width: 100%;
            padding: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            backdrop-filter: blur(10px);
            transition: 0.3s;
          }

          .input-box::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }

          .input-box:focus {
            border-color: white;
            outline: none;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
        `}
      </style>
    </div>
  );
};

export default UploadNote;
