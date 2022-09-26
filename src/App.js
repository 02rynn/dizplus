import logo from "./logo.svg";
import "./App.css";
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login.js";
import Main from "./components/Main.js";
import Join from "./components/Join.js";
import Subscribe from "./components/Subscribe";
import Settings from "./components/Settings";
import Search from "./components/Search";

function App() {
  let navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className="logo_container">
                <div className="logo_img">
                  <img className="logo_app" src="images/whitelogo.png" />
                </div>
                <p className="script">
                  이 모든 이야기가 여기에 <br />
                  지금 스트리밍 중
                </p>

                <div className="login_buttons">
                  <button
                    onClick={() => {
                      navigate("/join");
                    }}
                    className="subscribe"
                  >
                    구독하기
                  </button>
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="login"
                  >
                    로그인하기
                  </button>
                </div>
              </div>
            </div>
          }
        ></Route>
        <Route path="/join" element={<Join />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
