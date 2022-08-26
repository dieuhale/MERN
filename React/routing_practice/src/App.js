import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import HomeWithId from "./components/HomeWithId";
import HelloPage from "./components/HelloPage";
import ColorPage from "./components/ColorPage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>

       
       <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/:id" element={<HomeWithId />} />
         <Route path="/:thisWord" element={<HelloPage />} />
         <Route path="/:cWord/:wColor/:bgColor" element={<ColorPage />} />
         
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
