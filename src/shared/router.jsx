import { BrowserRouter,Route, Routes } from "react-router-dom";
import Upload from "../pages/Upload";




const Router =()=>{

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/upload" element={<Upload/>}/>
        </Routes>
        </BrowserRouter>
    )
    
}

export default Router