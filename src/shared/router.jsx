import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Homemain";
import Upload from "../pages/Upload/Uploadmain";
import Login from "../pages/Login";
import Register from "../pages/Register";





const Router =()=>{

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/upload" element={<Upload/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    )
    
}

export default Router