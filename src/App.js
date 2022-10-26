
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Tellafriend from "./components/Tellafriend";


import Warning from "./components/Warning";

function App() {
  return (
    <>
      <div className='App'>
        <div className='warning'>
            <Warning titulo='Free Delivery over $100. Gift with Purchase over $150'/>
        </div>
        <div className='contenedor-header'>
            <Header />
        </div>
        <div>
           <Tellafriend esHeader={ false } />
        </div>
        <div>
          <Slider />
        </div>
      </div>         
      
    </>
  );
}

export default App;
