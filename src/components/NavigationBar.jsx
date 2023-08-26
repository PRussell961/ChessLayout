import { useImperativeHandle } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

/* Do this better at some point zzz */
const setActive = () => {
  console.log("you just clicked");
};

function NavigationBar() {
  return (
    <>
    <div className="nav-wrap">
    <ul className="nav nav-pills nav-fill">
      <li id="aboutProject" className="nav-item">
        <Link className="nav-link" to="/AboutProject">
          <h3>About Project</h3>
        </Link>
      </li>
      <li id="play" className="nav-item" onClick={setActive}>
        <Link className="nav-link" to="/Play">
          <h3>Play</h3>
        </Link>
      </li>
      <li id="aboutUs"  className="nav-item">
        <Link className="nav-link" to="/AboutUs">
          <h3>About Us</h3>
        </Link>
      </li>
    </ul>
    <br></br>
    </div>
    </>
  );
}

function CustomLink({to,children,...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end:true}) 
  return(
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default NavigationBar;
