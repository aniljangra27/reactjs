import logo from './logo.svg';
// import './App.css';
import Header from './component/Header';
import Article from './component/Article';
import Footer from './component/Footer';
import OtherComp from './component/OtherComp';
import { Route, Routes } from 'react-router';
import Aboutus from './component/Aboutus';
import ReactPlayer from 'react-player';
import Calculator from './component/Calculator';

function App() {
  return (
    <div className="App">
      <Header/>
      <img src={logo} alt="" height={'30px'}/>
        <Routes>
          <Route path='article' element={<Article/>}/>
          <Route path='aboutus' element={ <Aboutus/>}/>
          <Route path='/' element={<OtherComp/>}/>
        </Routes>
        <Calculator/>
        <br></br>
        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' playing={true} muted={true} controls={true}/>
        
      <Footer/>
    </div>
  );
}

export default App;
