import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Body from "./Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Feed";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
