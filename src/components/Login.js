import { useNavigate } from "react-router-dom";
import "../components/Login.css";

function Login() {
  let navigate = useNavigate();

  return (
    <div className="log">
      <form className="login_form" action="#">
        <div className="login_input">
          <input type="text" />
          <input type="password" />
        </div>
      </form>
    </div>
  );
}

export default Login;
