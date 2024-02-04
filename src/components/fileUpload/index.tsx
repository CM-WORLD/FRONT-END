import React, { useState } from "react";

function FileUploadPreview() {
  const [filesPreview, setFilesPreview] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const previewFiles = [];

    Array.from(files).forEach((file: any) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previewFiles.push(reader.result);
        setFilesPreview([...previewFiles]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="container mx-auto py-0">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="px-0 py-6">
          <div className="p-6 mb-4 bg-gray-50 border-dashed border-2 border-gray-300 rounded-lg text-center cursor-pointer mx-auto">
            <input
              id="upload"
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            <label htmlFor="upload" className="cursor-pointer">
              {/* SVG and Text here */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-gray-700 mx-auto mb-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                Upload picture
              </h5>
              <p className="font-normal text-sm text-gray-400">
                Choose photo size should be less than 2mb and in JPG, PNG, or
                GIF format.
              </p>
            </label>
          </div>
          <div className="flex items-center justify-center border border-gray-200">
            <div className="grid grid-cols-3 gap-4">
              {filesPreview.map((file, index) => (
                <img
                  key={index}
                  src={file}
                  alt={`preview ${index}`}
                  className="max-h-48 rounded-lg "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileUploadPreview;
