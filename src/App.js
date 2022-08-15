import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Class1 from "./pages/Class1";
import Class2 from "./pages/Class2";
import Home from "./pages/Home";
import GraduationLayout from "./pages/Layout";

function App() {
    return (
        <div className="App">
        <BrowserRouter>
          <GraduationLayout/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/class1" element={<Class1 />}></Route>
                    <Route path="/class2" element={<Class2 />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
