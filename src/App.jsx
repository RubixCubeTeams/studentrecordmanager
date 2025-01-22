import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../src/pages/home";
import Admin from "../src/pages/Admin";
import Signup from "../src/pages/signup";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Signup />} />
        <Route path="/Admin" element={<Admin/>} />
       <Route path="/home" element={<Home />} />
      
     </Routes>
    </div>
  );
}

export default App;

