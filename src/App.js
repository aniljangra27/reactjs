import logo from './logo.svg';
// import './App.css';
import Header from './component/Header';
import Article from './component/Article';
import Footer from './component/Footer';
import OtherComp from './component/OtherComp';
import { Route, Routes } from 'react-router';
import Aboutus from './component/Aboutus';
import Calculator from './component/Calculator';
import DesertList from './component/advance-react-comp/DesertList';
import SignUpForm from './component/forms/SignUpForm';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <Header/>
      <img src={logo} alt="" height={'30px'}/>
      
        <Routes>
          <Route path='article' element={<Article/>}/>
          <Route path='aboutus' element={ <Aboutus/>}/>
          <Route path='/' element={<OtherComp/>}/>
          <Route path='forms' element={<SignUpForm/>}/>
        </Routes>
        <Calculator/>
        <br></br>
        <DesertList data={desserts}/>
        
      <Footer/>
    </div>
  );
}

export default App;
