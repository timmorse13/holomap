import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function Login() {
//   const adminUser = {
//     email: "admin@admin.com",
//     password: "admin123"
//   }

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');

  const Login = (details) => {
    console.log(details);

    if (details.email && details.password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.assign('/home');
        } else {
            alert(response.statusText);
        }
    //   console.log("Logged in");
    //   setUser({
    //     username: details.username,
    //     email: details.email
    //   });
    }
  }

  const Logout = () => {
    setUser({ username:"", email:"" });
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className = "welcome">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login ={Login} error={error} />
      )}
    </div>
  );
}

export default Login;