import AboutProject from './components/AboutProject';
import AboutUs from './components/AboutUs';
import Play from './components/Play';
import NavigationBar from './components/NavigationBar';
import './App.css';
import {Route, Routes} from "react-router-dom";
function App() {

  //Routing
  return (
    <div className='App'>
      <NavigationBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Play />} />
            <Route path="Play" element={<Play />} />
            <Route path="AboutProject" element={<AboutProject />} />
            <Route path="AboutUs" element={<AboutUs />} />
         </Routes>
        </div>
    </div>
  );
}

export default App;
