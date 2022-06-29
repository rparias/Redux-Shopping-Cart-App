import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login())
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
