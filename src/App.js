import logo from "./logo.svg";
import "./App.css";
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login.js";

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
                  <img src="images/whitelogo.png" />
                </div>
                <p className="script">
                  이 모든 이야기가 여기에 <br />
                  지금 스트리밍 중
                </p>

                <div className="login_buttons">
                  <button className="subscribe">구독하기</button>
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
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
