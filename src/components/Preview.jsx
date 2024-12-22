import { useRef } from "react"
import React from "react"

const Preview = React.forwardRef(({ inputText, uploadedImage }, ref) => {
  
  return (
    <section ref ={ref} className="pb-20">
        <div 
        className="
        flex 
        items-center 
        justify-center 
        bg-gray-100 
        w-[650px] 
        h-[650px]
        justify-self-center 
        overflow-hidden"
        style={{
          backgroundImage: uploadedImage ? `url(${uploadedImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        >
          <h1 
          className="
          font-upright 
          shadowed-greeting 
          text-7xl 
          text-center 
          text-white 
          text-wrap 
          break-words">
            {inputText.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
          </h1>
        </div>
    </section>
  )
})

export default Preview