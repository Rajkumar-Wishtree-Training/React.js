import React from "react";

function Alert(props) {
  // const capitalize = (word) => {
  //   console.log(word);
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // };
  return (
    <div style={{height : '60px'}}>
   {
      props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{props.alert.type}</strong>{" "}  
          <strong>{props.alert.msg}</strong>
        </div>
      )
   }
    </div>
  );
}

export default Alert;
