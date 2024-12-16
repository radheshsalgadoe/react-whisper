const Preview = (props) => {
  return (
    <section className="pb-20">
        <div className="bg-gray-100 w-96 h-96 justify-self-center">
            <div className="font-upright">
                {props.inputText}
            </div>
        </div>
    </section>
  )
}

export default Preview