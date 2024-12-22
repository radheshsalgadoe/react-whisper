import { useState, useRef } from "react"

const Form = ({ inputText, setInputText, setUploadedImage, downloadPreview }) => {
  const fileInputRef = useRef(null); // Added useRef hook for file input

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result); // Set the image as a data URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="justify-self-center pb-10 flex">
      <div className="row">
      <textarea
        placeholder="Write something" 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        name="textarea" 
        className="border-2 border-gray-500 w-[650px] font-upright shadowed-buttons text-xl text-white p-2"
        >
        
      </textarea>
      <div className="row justify-self-center space-x-28 pt-4 text-3xl font-upright">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          ref = {fileInputRef}
        />
        <button className="shadowed-buttons text-white border-2 border-black border-2 p-2 rounded"
          onClick={() => fileInputRef.current.click()}
        >Upload Image</button>
        <button className="shadowed-buttons text-white border-2 border-black border-2 p-2 rounded"
          onClick={downloadPreview} // Trigger download
        >Download Image</button>
      </div>
      </div>
    </section>
  )
}

export default Form