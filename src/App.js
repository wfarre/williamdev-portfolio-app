import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './styles/App.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Header />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer className='footer'>
        <p>Coded by William Farré with ReactJS</p>
      </footer>
     
    </div>
  );
}

export default App;
