import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';


function App() {
  return (
    <div className="logo">
    <Logo></Logo>
    <Header/>
    <Footer title="TNI" website="www.google.com" 
    address="Bangkok" postcode={10250} isOpen/>
    </div>
  );
}

export default App;
