import logo from './logo.svg';
import './App.css';
import Leftside from './components/leftside';
import Rightside from './components/rightside';

function App() {
  return (
    <div className="App">
      <div className='main'>
      <Leftside />
      <Rightside />
      </div>
    </div>
  );
}

export default App;
