import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Classes from "./pages/Classes";
import Direction from "./pages/Direction";
import Home from "./pages/Home";
import Info from "./pages/Info";
import GraduationLayout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Start from "./pages/Start";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <GraduationLayout>
                    <Routes>
                        <Route path="/" element={<Start />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/class1" element={<Classes class={1} />}></Route>
                        <Route path="/class1/*" element={<Info />}></Route>
                        <Route path="/class2" element={<Classes class={2} />}></Route>
                        <Route path="/class2/*" element={<Info />}></Route>
                        <Route path="/direction/*" element={<Direction />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </GraduationLayout>
            </BrowserRouter>
        </div>
    );
}

export default App;
