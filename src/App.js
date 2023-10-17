import './App.css';
import About from './components/About/About';
import Btn from './components/Btn/Btn';
import Connact from './components/Connact/Connact';
import FeedBack from './components/FeedBack/FeedBack';
import SocialLinks from './components/FeedBack/SocialLinks';
import Header from './components/Heder/Header';
import Home from './components/Home/Home';
import Visit from './components/Visitor-Count/Visit';
import Video from './components/video/Video';

function App() {
  
  return (
    <div className="App">
        <main className="first">
            <Header />
            <Home />
            <Video />     
            </main>
            <main className='second'> 
            {/* <Btn /> */}
            <Connact />
            <SocialLinks />
            <Visit />
            
       </main>
       
     
    </div>
  );
}

export default App;