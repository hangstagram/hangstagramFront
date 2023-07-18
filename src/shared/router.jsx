import { BrowserRouter,Route, Routes } from "react-router-dom";
import Upload from "../pages/Upload/Uploadmain";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Homemain from "../pages/Home/Homemain";





const Router =()=>{

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homemain/>}/>
            <Route path="/upload" element={<Upload/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    )
    
}

export default Router