import { useState } from "react"

const Form = () => {
  const [inputText, setInputText] = useState('')
  return (
    <section className="justify-self-center pb-10 flex">
      <div className="row">
      <textarea
        placeholder="Write something" 
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        name="textarea" 
        className="border-2 border-gray-500 w-96  font-upright shadowed-buttons text-xl text-white p-2"
        >
        
      </textarea>
      <div className="row justify-self-center space-x-28 pt-4 text-3xl font-upright">
        <button className="shadowed-buttons text-white border-2 border-black border-2 p-2 rounded">Upload Image</button>
        <button className="shadowed-buttons text-white border-2 border-black border-2 p-2 rounded">Download Image</button>
      </div>
      </div>
    </section>
  )
}

export default Form