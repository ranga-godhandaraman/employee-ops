import './App.css';
import Header from './component/header/header.js';
import Footer from './component/footer/footer.js';  

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <div className='content'>
       <div>Employee list</div>
        <div>Add Employee</div>
        <div>Edit Employee</div>
       </div>
       <Footer/>
      
    </div>
  )
}

export default App;
