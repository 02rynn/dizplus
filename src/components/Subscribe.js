import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Subscribe.css";
import Modal from "react-modal";
import Confetti from "react-confetti";

function Subscribe() {
  let navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="subs-container">
      <div className="join-form__header">
        <div>
          <img id="구독로고" src="images/whitelogo.png" />
        </div>
        <div>
          <button
            className="login_button"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </button>
        </div>
      </div>

      <form className="subs-form">
        <div className="join-form__inputs">
          <h1 style={{ color: "white", marginBottom: "40px" }}>
            Welcome to dizplus
          </h1>

          <input type="text" placeholder="성명" />

          <input
            type="text"
            id="id"
            className="login"
            placeholder=" 이메일 주소를 입력하세요"
          />

          <input
            type="password"
            id="password"
            className="login"
            placeholder=" 비밀번호를 입력하세요"
          />

          <input
            type="password"
            id="password"
            className="login"
            placeholder=" 비밀번호를 다시 한번 입력하세요"
          />

          <div className="checkBoxes">
            <div className="checkbox1">
              <input
                style={{ width: "10px", height: "10px", marginRight: "5px" }}
                type="checkbox"
              />
              <p style={{ color: "white", fontSize: "10px" }}>
                본인은 만 19세 이상이며 디즈니+ 이용약관에 동의합니다.
              </p>
            </div>
            <div className="checkbox2">
              <input
                style={{ width: "10px", height: "10px", marginRight: "5px" }}
                type="checkbox"
              />
              <p style={{ color: "white", fontSize: "10px" }}>
                디즈니+의 개인정보 수집 및 이용에 동의합니다.
              </p>
            </div>
          </div>

          <button
            id="finish"
            onClick={(e) => {
              e.preventDefault();
              setModalIsOpen(true);
            }}
          >
            동의하고 가입하기
          </button>
        </div>
        <Modal
          className="Modal"
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          dizplus의 가족이 되신것을 <br /> 축하드립니다!
          <button
            id="close"
            onClick={() => {
              navigate("/main");
            }}
          >
            창 닫기
          </button>
          <Confetti />
        </Modal>
      </form>
    </div>
  );
}

export default Subscribe;
