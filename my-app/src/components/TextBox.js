import React , {useState} from "react";
import Alert from "./Alert";
export default function TextBox(props) {
  const [text , setText] = useState("")
  let isDisabled = text.length === 0;
  const style = {
    color : 'white'
  }
  const onClickUpperCase = () =>{
    setText(text.toUpperCase());
    props.showAlert('Converted to UpperCase','success')
  }
  const onClickLowerCase = () =>{
    setText(text.toLowerCase())
    props.showAlert('Converted to LowerCase','success')
  }
  const onChangeHandler = (event) =>{
          // console.log(event.target.value)
          setText(event.target.value);
          // console.log(text);
  }
  // const wordCount = () =>{
  //   if(text.length){
  //     if(text.endsWith(" ")){
  //       return text.split(" ").length - 1;
  //     }
  //     return text.split(" ").length;
  //   }
  //   return 0;
  // }
  const onClickRemove = () =>{
    props.showAlert('Extra Spaces Removed','success')
    setText(text.replace(/\s+/g, ' ').trim())
  }
  return (
    <>
    <div>
      <Alert alert={alert}/>
      <div className="mb-3 my-3">
      <h2 style={props.mode === 'bg-dark' ? style : null}>{props.heading}</h2>
        <textarea
          style={{color:`${props.mode === 'bg-dark' ? 'white' : 'black'}`,backgroundColor:`${props.mode === 'bg-dark' ? '#414141' : 'white'} `}}
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Enter your Text"
          value={text}
          onChange={onChangeHandler}
          rows="10"
        ></textarea>
      </div>
      <button className={`btn btn-primary mx-2 my-1`} onClick={onClickUpperCase} 
      style={props.mode === 'bg-dark' ? props.btnStyle :  props.mode === 'bg-primary' ? {backgroundColor:'black' , color:'white'} : null} disabled={isDisabled}>Convert Text to Uppercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={onClickLowerCase} style={  props.mode === 'bg-dark' ? props.btnStyle: props.mode === 'bg-primary' ? {backgroundColor:'black' , color:'white'} : null} disabled={isDisabled}>Convert Text to Lowercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={onClickRemove} style={props.mode === 'bg-dark' ? props.btnStyle : props.mode === 'bg-primary' ? {backgroundColor:'black' , color:'white'} : null} disabled={isDisabled}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2  style={props.mode === 'bg-dark' ? style : null}>Summary of Your Text</h2>
      <p  style={props.mode === 'bg-dark' ? style : null}>Number of Words <strong> {text.split(' ').filter((element) => element.length !== 0).length} </strong>and Number of Characters <strong>{text.length}</strong></p>
      <p  style={props.mode === 'bg-dark' ? style : null}>Reading Time: <strong>{(text.split(' ').filter((element) => element.length !== 0).length *0.008).toFixed(2)}</strong> minutes</p>
    </div>
    <div className="container">
      <h2  style={props.mode === 'bg-dark' ? style : null}>Preview</h2>
      <p  style={props.mode === 'bg-dark' ? style : null}>{text}</p>
    </div>
    </>
  );
}
