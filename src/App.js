import './App.css';
import Home from './Layouts/Home';
import Navbar from './Layouts/Navbar';

function App() {
  return (
    <div className="App font-poppins bg-black">
      <Navbar />
      
      <div className='overflow-hidden bg-white pt-16 xl:pt-0'>
        <Home />
      </div>

      <></>
    </div>
  );
}

export default App;
