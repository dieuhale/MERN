import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import EditAuthor from "./components/EditAuthor"
import AuthorPage from "./components/AuthorPage"
import AddNewAuthor from "./components/AddNewAuthor"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
      <Routes>
        <Route path="/" element={<AuthorPage />} />
        <Route path="/new" element={<AddNewAuthor />} />
        <Route path="/edit/:id" element={<EditAuthor />} />
       
      </Routes>
    </div>
  </BrowserRouter>

  );
}

export default App;
