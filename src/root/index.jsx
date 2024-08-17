import React from "react";
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import HomePages from "../pages/HomePages";


const Root = () => {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path='' element={<HomePages/>} />

           
               <Route path='/' element={<Navigate to={'/home'}/>} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}
export default Root