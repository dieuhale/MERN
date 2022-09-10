import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewAllProducts from "./components/ViewAllProducts";
import ViewOneProduct from "./components/ViewOneProduct";
import EditProduct from "./components/EditProduct";
 
function App() {
 return (
   <BrowserRouter>
     <div className="App">
    
       <Routes>
         <Route path="/" element={<ViewAllProducts />} />
         <Route path="/:id" element={<ViewOneProduct />} />
         <Route path="/edit/:id" element={<EditProduct />} />
         
       </Routes>
     </div>
   </BrowserRouter>
 );
}
 
export default App;
