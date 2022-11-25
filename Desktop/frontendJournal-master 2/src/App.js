import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import Blogs from './components/pages/Blogs';
import Navbar from './components/navbar'
import Home from './components/pages/Home';
import { News } from './components/pages/News';
import Art from './components/pages/Art';
// import AboutUs from './components/pages/AboutUs';
// import ContactUs from './components/pages/ContactUs';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='blogs' element={<Blogs/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='news' element={<News/>}></Route>
        <Route path='art' element={<Art/>}></Route>
        {/* <Route path='aboutUs' element={<AboutUs/>}></Route> */}
        {/* <Route path='contactUs' element={<ContactUs/>}></Route> */}
      </Routes>
    </Router>

    </>
  );
}

export default App;
