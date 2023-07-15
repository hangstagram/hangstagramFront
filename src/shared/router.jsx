import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Upload from "../pages/Upload";





const Router =()=>{

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/upload" element={<Upload/>}/>
        </Routes>
        </BrowserRouter>
    )
    
}

export default Router