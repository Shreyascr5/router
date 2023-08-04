import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const Navigate = useNavigate();
  function login(){
    localStorage.setItem('login',true);
    Navigate('/');
  }
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      Navigate('/');
    }
  });
  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Password" />
      <button onClick={login}>Login</button>
    </>
  );
  }
