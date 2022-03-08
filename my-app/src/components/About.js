import React  from "react";

export default function About(props) {
    const myStyle = {
      backgroundColor : "rgb(40 41 37)",
      color : "white"
    };
    // const onChangeTheme = () =>{
    //     console.log("kuch hua")
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             backgroundColor: '#344138',
    //             color:"white",
    //         })
    //     }
    //     else{
    //         setMyStyle({
    //             backgroundColor: 'white',
    //             color : 'black'
    //         })
    //     }
    // }
  return (
    <div>
      {/* {console.log(props.mode)} */}
      <div className="container mt-5">
        <div className="row my-3">
          <div  className="col-sm-6">
            <div  className="card">
              <div style={props.mode === 'dark' ? myStyle : null} className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content. 
                </p>
                <a href="/" style={props.mode === 'dark' ? props.btnStyle : null} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 ">
            <div className="card">
              <div style={props.mode === 'dark' ? myStyle : null} className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" style={props.mode === 'dark' ? props.btnStyle : null} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-sm-6">
            <div className="card">
              <div style={props.mode === 'dark' ? myStyle : null} className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" style={props.mode === 'dark' ? props.btnStyle : null} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div style={props.mode === 'dark' ? myStyle : null} className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" style={props.mode === 'dark' ? props.btnStyle : null} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-sm-6">
            <div className="card">
              <div style={props.mode === 'dark' ? myStyle : null} className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" style={props.mode === 'dark' ? props.btnStyle : null} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div style={props.mode === 'dark' ? myStyle : null} className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" style={props.mode === 'dark' ? props.btnStyle : null} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form-check form-switch mt-3">
        {/* <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={onChangeTheme}
          onClick={props.togleMode}
        />
        <label  style={{'color':`${props.mode === 'dark' ? 'white' : 'black'}`}} className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable Dark Mode
        </label> */}
      </div>
      </div>
     
    </div>
  );
}
