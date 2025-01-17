import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import Main from './pages/Main/Main';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';




function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
