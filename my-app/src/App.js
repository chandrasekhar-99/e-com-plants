import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import ThankYouPage from './components/ThankYouPage';
import './App.css';

const  App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/cart" Component={ThankYouPage}/>
      </Routes>
    </Router>
  );
}

export default App;
