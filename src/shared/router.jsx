import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Upload from "../Pages/Upload"

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