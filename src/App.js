import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Area from './components/Area';

function App() {
  return (<>
   <Navbar title ='ram' Home = 'shyam'  />
   <div className='container'>
   <Area />
   </div>
  
    </>);
}

export default App;
