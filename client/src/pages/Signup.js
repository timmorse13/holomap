import React, { useState} from "react";

function SignupForm() {

  const [signupState, setSignupState] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const signupUser = (e) => {
    e.preventDefault();
    // console.log(signupInputState);
    if(signupState.username===''){
      alert('Please enter a username');
      return;
    }
    if(signupState.email===''){
      alert('Please enter an email');
      return;
    }
    if(signupState.password===''){
      alert('Please enter an password');
      return;
    }
    if(signupState.confirmPassword===''){
      alert('Please re-enter your password');
      return;
    }
    if(signupState.password !== signupState.confirmPassword){
      alert('Please make sure your passwords match')
      return;
    }

    let newUserInfo = {
      username: signupState.username,
      password: signupState.password,
      email: signupState.email,
    }

    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newUserInfo),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      return response.json();
    }).then((data) => {
        console.log(data);
        loginUser(data);
    });
  }

  function loginUser(userInfo) {
    console.log('Logging new user!');
    console.log(userInfo);
    fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      console.log(response);
      if(response.status === 422 || response.status === 400){
        alert('Failed to login!');
      } else if (response.status === 200){
        console.log('User logged in!');
        document.location.replace('/profile');
      }
      return response;
    }).then((data) => {
      return data;
    });
  }


  return (
            <div className="d-flex justify-content-center align-items-center flex-column mb-1">
                <h3 className="mt-3">Sign Up</h3>
                <form className="form d-flex justify-content-center align-items-center flex-column mb-1">
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="text-center"
                        onChange={(e) => {
                            setSignupState({
                                ...signupState,
                                username: e.target.value
                            })
                        }}
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        className="text-center"
                        onChange={(e) => {
                            setSignupState({
                                ...signupState,
                                email: e.target.value
                            })
                        }}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="text-center"
                        onChange={(e) => {
                            setSignupState({
                                ...signupState,
                                password: e.target.value
                            })
                        }}
                    />
                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        className="text-center"
                        onChange={(e) => {
                            setSignupState({
                                ...signupState,
                                confirmPassword: e.target.value
                            })
                        }}
                    />
                    <button className="mb-3 mt-2 btn btn-outline-warning" onClick={signupUser}>Sign Up</button>
                </form>
            </div>
  );
}

export default SignupForm;