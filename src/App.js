import './App.css';
import Header from './component/header/Header';
import Router from './router/Router';
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Footer from './component/footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Router path={'/'}>
        <Home/>
      </Router>
      <Router path={'/about'}>
        <About/>
      </Router>
      <Router path={'/contact-us'}>
        <ContactUs/>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
