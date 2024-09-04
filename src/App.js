import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import 'bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="primary" isDisabled=""/>
        <Button variant="success" isDisabled=""/>
        <Button variant="warning" isDisabled=""/>
        <Button variant="error" isDisabled="disabled"/>
      </header>
    </div>
  );
}

export default App;
