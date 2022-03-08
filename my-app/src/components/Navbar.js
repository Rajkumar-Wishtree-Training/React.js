// import react , {useEffect} from "react";

import propTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  // useEffect(()=>{
  //      setInterval(()=>{
  //        document.title = 'Install our APP';
  //      },2000);
  //      setInterval(()=>{
  //        document.title = 'Rate US of Facebook';
  //      },3000)
  // },[])
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>TextUtils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
      </ul>
      <div className="bg-primary rounded mx-2" style={{height : '30px' , width: '30px' , cursor:'pointer'}} onClick={() => props.togleMode('bg-primary')} ></div>
      <div className="bg-warning rounded mx-2" style={{height : '30px' , width: '30px' , cursor: 'pointer'}} onClick={() => props.togleMode('bg-warning')} ></div>
      <div className="bg-danger rounded mx-2" style={{height : '30px' , width: '30px' ,  cursor:'pointer'}} onClick={() => props.togleMode('bg-danger')} ></div>
      <div className="bg-success rounded mx-2" style={{height : '30px' , width: '30px' , cursor : 'pointer'}} onClick={() => props.togleMode('bg-success')} ></div>
      <div className="bg-light rounded mx-2" style={{height : '30px' , width: '30px' , cursor : 'pointer' , border : '1px solid black'}} onClick={() => props.togleMode('bg-light')} ></div>
      <div className="bg-dark rounded mx-2" style={{height : '30px' , width: '30px' , cursor : 'pointer' , border : '1px solid white'}} onClick={() => props.togleMode('bg-dark')} ></div>
    </div>
  </div>
</nav>
    </div>
  );
}
Navbar.propTypes = {
  title: propTypes.string.isRequired,
  // about: propTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "HET",
  // about: "About",
};
