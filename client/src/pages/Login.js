import React, { useState, useEffect } from 'react';

function LoginForm() {
    const [loginState, setLoginState] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {}, [loginState]);

    function loginUser() {
        console.log('Logging in user.');
        console.log(loginState);
        fetch('/api/users/login', {
            method: "POST",
            body: JSON.stringify(loginState),
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            console.log(response);
            if (response.status === 422 || response.status === 400) {
                alert("Failed to login!");
            } else if (response.status === 200) {
                console.log('User logged in!');
                document.location.replace('/profile');
            }
            return response;
        }).then((data) => {
            return data;
        });
    }

    return (
        <div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h3 className="mt-3">Login</h3>
                        <form className="form d-flex justify-content-center align-items-center flex-column mb-1">
                            <input 
                                name="username" 
                                type="text" 
                                placeholder="Email" 
                                className="text-center"
                                onChange={(e) => {
                                    setLoginState({
                                        ...loginState,
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
                                    setLoginState({
                                        ...loginState,
                                        password: e.target.value
                                    })
                                }}
                            />
                            <button onClick={(e) => {
                                e.preventDefault();
                                loginUser();
                            }} className="mb-3 mt-2">Login</button>
                        </form>
                    </div>
        </div>
    );

}

export default LoginForm;