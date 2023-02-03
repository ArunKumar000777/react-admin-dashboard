import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import SinglePage from "./pages/singlePage/SinglePage";
import New from "./pages/new/New";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userInputs, productInputs } from "./formSource";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div className={darkMode ? 'app dark' : 'app'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>} />
                        <Route path="login" element={<Login />} />
                    </Route>
                    <Route path="users">
                        <Route index element={<List />} />
                        <Route path=":userId" element={<SinglePage />} />
                        <Route path="new" element={<New inputs={userInputs} title={'Add New User'}/>} />
                    </Route>
                    <Route path="products">
                        <Route index element={<List />} />
                        <Route path=":productId" element={<SinglePage />} />
                        <Route path="new" element={<New inputs={productInputs}  title={'Add New Product'}/>} />
                    </Route>
                    <Route path="*" element={<h3>page does not exists</h3>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
