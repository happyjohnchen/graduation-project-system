import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Classes from "./pages/Classes";
import Home from "./pages/Home";
import GraduationLayout from "./pages/Layout";

function App() {
    return (
        <div className="App">
        <BrowserRouter>
          <GraduationLayout/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/class1" element={<Classes class={1} />}></Route>
                    <Route path="/class2" element={<Classes class={2} />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
