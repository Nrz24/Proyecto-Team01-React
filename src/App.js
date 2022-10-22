
import "./App.css";
import Header from "./components/Header";
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
      </div>         
      
    </>
  );
}

export default App;
