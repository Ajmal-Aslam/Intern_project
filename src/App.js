import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Popup from './Components/Popup/Popup';
import Signup from './Components/Signup/Signup';
import { Routes, Route, Link } from 'react-router-dom';
import Program from './Components/Program/Program';
import Whyus from './Components/Whyus/Whyus';
import Plans from './Components/Plans/Plans';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  const [state, setState] = useState(false);

  const popups = () => {
    setState(!state);
  };

  return (
    <div>
      <Routes>

        <Route path="/" element={<Header />} />
        <Route path="/Sign_In" element={<Popup />} />
        <Route path="/Sign_Up" element={<Signup />} />

        <Route path="/pgm" element={<Program />} />
        <Route path="/why" element={<Whyus />} />
        <Route path="/plan" element={<Plans />} />
        <Route path="/test" element={<Testimonial />} />

      </Routes>
      {/* <Header popups={popups} /> */}
      {/* {state && <Header />} */}

      {state && <Popup />}

      {state && <Signup />}


    </div>

  );
}

export default App;
