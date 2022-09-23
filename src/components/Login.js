import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  let navigate = useNavigate();

  return (
    <div className="log">
      <header className="welcome-header">
        <img src="images/whitelogo.png" />
        <h1 className="welcome-header__title">Welcome to dizplus</h1>
        <p className="welcome-header__text">
          if you have Dizplus Account, <br />
          log in with your email or phone number.
        </p>
      </header>

      <form id="log-form">
        <input type="text" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <input
          type="submit"
          onClick={() => {
            navigate("/main");
          }}
        />
        <a href="#">Find Kokoa Acoount or Password</a>
      </form>
    </div>
  );
}

export default Login;
