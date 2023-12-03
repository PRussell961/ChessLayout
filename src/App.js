import AboutProject from './components/AboutProject';
import AboutUs from './components/AboutUs';
import Play from './components/Play';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
function App() {

  //Routing
  return (
    <>
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>
<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

    <div className='App'>
    <div id='AboutProject'>
        <AboutProject />
      </div>
      <NavigationBar />
      <div id='Welcome'>
        <Welcome /> 
      </div>
            <div id='AboutUs'>
        <AboutUs />
      </div>
      <div className="container">
        <div id='Play'>
          <Play />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
