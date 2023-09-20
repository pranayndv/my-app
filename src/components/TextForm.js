import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState('');
  const handleOnChange = (event)=>{
    setText(event.target.value)
    // console.log('Change')
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert(' Lowercase Converted.','success ')
  }
  const handleClearClick = ()=>{
    let Bold = document.getElementById('trans')
    Bold.innerText = ''
    let newText = ''
    setText(newText)
  }

  const handleFupperClick = ()=>{
    let newText = text.charAt(0).toUpperCase() + text.slice(1)
    setText(newText)
    props.showAlert(' First letter Uppercase Converted.','success ')
  }
  const handleBoldClick = ()=>{
    let Bold = document.getElementById('trans')
     Bold.innerHTML = '<h3>Bold text</h3>'+ text.bold()
     props.showAlert(' Bold Converted.','success ')
  }
  const handleBlinkClick = ()=>{
    let Bold = document.getElementById('trans')
     Bold.innerHTML = '<h3>Blink text</h3>'+ text.blink()
     props.showAlert(' Blink Converted.','success ')
  }
  const handleItalicClick = ()=>{
    let Bold = document.getElementById('trans')
     Bold.innerHTML = '<h3>Italics text</h3>'+ text.italics()
     props.showAlert(' Italic Converted.','success ')
  }
  const handleCopy = ()=>{
    let text = document.getElementById('my-box')
     text.select()
     navigator.clipboard.writeText(text.value)
     props.showAlert(' Copied','success ')
  }

  const handleStrikeClick = ()=>{
    let Bold = document.getElementById('trans')
     Bold.innerHTML ='<h3>Strike text</h3>'+  text.strike()
     props.showAlert(' Strike Converted.','success ')
  }
  
  const handleUpClick = ()=>{
    // console.log("clicked")
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert(' Uppercase Converted.','success ')
  }
  return (
    <>
    <div className='container ' style={{color: props.mode  === 'dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
            <div className="mb-3">
               <textarea className="form-control " style={{backgroundColor: props.mode  === 'dark'?'grey':'white',color: props.mode  === 'dark'?'white':'black'}}id="my-box" value={text} onChange={handleOnChange} rows="8" placeholder='Enter Text here' ></textarea>
               <button className="btn btn-primary my-2" onClick = {handleUpClick}>To convert UPERCASE</button>
               <button className="btn btn-primary my-2 mx-2" onClick = {handleLoClick}>To convert lowercase</button>
               <button className="btn btn-primary my-2 mx-2" onClick = {handleFupperClick}>To convert FLU</button>
               <button className="btn btn-primary my-2 mx-2" onClick = {handleBoldClick}>To convert bold</button>
               <button className="btn btn-primary my-2 mx-2" onClick = {handleItalicClick}>To convert Italic</button>
               <button className="btn btn-primary my-2 mx-2" onClick = {handleBlinkClick}>To convert Blink</button>
               <button className="btn btn-primary my-2 mx-2" onClick = {handleStrikeClick}>To convert Strike</button>
               <br />
               <button className="btn btn-dark my-2 mx-2" onClick = {handleCopy}>Copy</button>
               <button className="btn btn-secondary my-2 mx-2" onClick = {handleClearClick}>Clear</button>
            </div>
   </div>
   <div className='container' style={{color: props.mode  === 'dark'?'white':'black'}}>
    <p id = "trans"></p>
    <h2>Word Count and Character count.</h2>
    <p>{text.split(' ').length-1} Words</p>
    <p>{text.length} Characters</p>
    <p>{0.008 * text.split(' ').length} Minute Reading speed.</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter Something to preview here."}</p>

   </div>
   </>
  )
}
