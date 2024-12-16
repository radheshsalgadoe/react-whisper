import Form from "./components/Form"
import Greeting from "./components/Greeting"
import Preview from "./components/Preview"

const App = () => {
  return (
    <>
      <Greeting/>
      <Form/>
      <Preview inputText={Form.inputText}/>
    </>
  )
}

export default App