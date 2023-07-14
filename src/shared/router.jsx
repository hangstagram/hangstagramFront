import { BrowserRouter,Route, Routes } from "react-router-dom";
import Upload from "./Pages/Upload"
import Home from "./Pages/Home";




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