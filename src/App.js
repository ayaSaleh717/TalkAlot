import './App.css';
import About from './components/About/About';
import Blog from './components/Blogi/Blog';
import Btn from './components/Btn/Btn';
import Connact from './components/Connact/Connact';
import FeedBack from './components/FeedBack/FeedBack';
import SocialLinks from './components/FeedBack/SocialLinks';
import Header from './components/Heder/Header';
import Home from './components/Home/Home';
import Visit from './components/Visitor-Count/Visit';
import Video from './components/video/Video';
import Why from './components/why/Why';

function App() {

//  var myID = document.getElementById("myID");

// var myScrollFunc = function () {
//     var y = window.scrollY;
//     if (y >= 800) {
//         myID.className = "bottomMenu show"
//     } else {
//         myID.className = "bottomMenu hide"
//     }
// };

// window.addEventListener("scroll", myScrollFunc);
  
  return (
    <div className="App">
       
            <Header />
            <Home /> 
            <Why />
            <Video />
         <FeedBack />
             {/* <Video />      */}
           
            {/* <Btn /> */}
          
            {/* <SocialLinks /> */}
            {/* <Visit /> */}


           
           {/* <Blog /> */}
{/* 
            <footer className='footer_' >
              <Visit />
            </footer>
             */}
      
     
    </div>
  );
}

export default App;
