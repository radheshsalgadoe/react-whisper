import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Form from "./components/Form"
import Greeting from "./components/Greeting"
import Preview from "./components/Preview"

const App = () => {
  
  const [inputText, setInputText] = useState(""); // State for shared input text
  const [uploadedImage, setUploadedImage] = useState(null);
  const previewRef = useRef();

  const downloadPreview = async () => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current, {
        useCORS: true,
      });
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "preview.png";
      link.click();
    }
  };

  return (
    <>
      <Greeting/>
      <Form 
        inputText = { inputText } 
        setInputText = { setInputText }
        setUploadedImage={setUploadedImage}
        downloadPreview={downloadPreview} // Pass the function
      />
      <Preview 
        inputText = { inputText }
        uploadedImage={uploadedImage}
        ref={previewRef} // Pass the ref to target Preview
      />
    </>
  )
}

export default App