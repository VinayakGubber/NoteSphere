import React, { useState } from "react";
import { useSelector } from "react-redux";

const UploadNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [files, setFiles] = useState("");

  const user = useSelector((state) => state.user.userId);
  const userId = user._id;

  const SubmitFile = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(); // ✅ We create an object with identifier named formData
      // ✅ In the below we append the KEY:VALUE pairs into it
      formData.append("title", setTitle);
      formData.append("description", setDescription);
      formData.append("tags", setTags);
      formData.append("files", setFiles);
      formData.append("userId", userId);

      console.log("");

      const result = await axios.post(
        "http://localhost:7088/notes/upload",
        formData, // ✅ We post the formData object from above to the server
        {
          // ✅ This is to tell the server that the incoming data is in the form of key:value pairs where the value can be text or any file like a Profile image
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      alert("Notes uploaded Successfully");
    } catch (error) {
      console.log("Failed to submit file : ", error);
    }
  };

  return (
    <form
      onSubmit={SubmitFile}
      className="p-5lg:justify-center mx-auto flex h-full w-full flex-col items-center justify-start"
    >
      <div className="m-0 items-center pb-[2vh] text-center text-3xl font-bold text-[#094166]">
        Upload Your Notes
      </div>

      {/* Title Input */}
      <div className="relative w-full max-w-[90%] sm:max-w-[550px]">
        <div className="mb-5">
          <input
            type="text"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Description Input */}
      <div className="relative w-full max-w-[90%] sm:max-w-[550px]">
        <div className="mb-5">
          <input
            type="text"
            placeholder="Description"
            required
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tags Input */}
      <div className="relative w-full max-w-[90%] sm:max-w-[550px]">
        <div className="mb-5">
          <input
            type="text"
            placeholder="Tags"
            required
            onChange={(e) => setTags(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* File Upload */}
      <div className="flex w-full max-w-[90%] items-center justify-center sm:max-w-[550px]">
        <label
          htmlFor="dropzone-file"
          onChange={(e) => setFiles(e.target.value)}
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to Upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">PDF</p>
            <input
              type="file"
              accept="application/pdf"
              required
              id="dropzone-file"
              className="hidden"
            />
          </div>
        </label>
      </div>

      {/* Upload Button - Moved Below Dropzone */}
      <div className="mt-5 w-full max-w-[90%] sm:max-w-[550px]">
        <button className="w-full rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700">
          Upload
        </button>
      </div>
    </form>
  );
};

export default UploadNote;
