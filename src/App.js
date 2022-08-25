import './App.css';
import Header from './component/header/header.js';
import Footer from './component/footer/footer.js';  
import List from './pages/employees/list';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <div className='content'>
        <List />       
       </div>
       <Footer/>
      
    </div>
  )
}

export default App;
