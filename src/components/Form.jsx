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
    <section className="
      justify-self-center 
      pb-10 
      flex
      ">
      <div className="row">
      <textarea
        placeholder="Write something" 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        name="textarea" 
        className="
          border-2 
          border-gray-500 
          font-upright 
          
          text-xl 
         
          p-2  
          hover:animate-pulse
          size-full"
      >
        
      </textarea>
      <div 
        className="
          row 
          justify-self-center 
          pt-4 
          text-3xl 
          font-upright"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          ref = {fileInputRef}
        />
        <button className="
          shadowed-buttons 
          text-white
          text-3xl 
          border-2 
          border-black 
          border-2 
          p-2 
          rounded
          bg-white 
          hover:animate-pulse"
          onClick={() => fileInputRef.current.click()}
        >Upload Image</button>
        <button className="
          shadowed-buttons 
          text-white 
          border-2 
          border-black 
          border-2 
          p-2 
          rounded 
          bg-white
          hover:animate-pulse"
          onClick={downloadPreview} // Trigger download
        >Download Image</button>
      </div>
      </div>
    </section>
  )
}

export default Form