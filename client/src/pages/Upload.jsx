import React from "react";
import UploadNote from "../components/UploadNote";

const Upload = () => {
  return (
    <div className="flex h-heightWithoutNavbar items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black">
      <UploadNote />
    </div>
  );
};

export default Upload;
