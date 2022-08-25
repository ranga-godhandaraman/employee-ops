import './App.css';
import Header from './component/header/header.js';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <div className='content'>
        <div>Employee list</div>
        <div>Add Employee</div>
        <div>Edit Employee</div>
      </div>
      <div className='footer'>copyright rangabashyam@gmail.com</div>
    </div>
  )
}

export default App;
