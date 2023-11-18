
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className='d-flex align-items-center justify-content-center w-100 flex-column' style={{height:'100vh'}}>
     <div className='d-flex align-items-center justify-content-center w-100 flex-column p-5 rounded' style={{backgroundColor:'white'}}> 
      <h1 style={{color:"blue"}}>Counter Application</h1>
      <Counter/>
      </div>
    </div>
  );
}

export default App;
