import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useState } from 'react';

function App() {
  const [steps, setSteps] = useState(0);

  const handleIncreseStep = () => {
    setSteps(steps + 1);
  }
  return (
    <div className="App" style={{ border: "2px solid coral", margin: "5px", padding: "5px" }}>
      <h3>My steps: {steps}</h3>
      <button onClick={handleIncreseStep}>Walk</button>
      <Device name='appelo' price='24500' steps={steps}></Device>
    </div>
  );
}

export default App;
