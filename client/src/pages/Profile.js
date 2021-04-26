import React from 'react';
import SignupButton from '../components/SignupButton';
import LoginButton from '../components/LoginButton';
// import SignupForm from '../components/Signup';
// import LoginForm from '../components/Login';


function Profile(){

  const logout = () => {
    console.log('Logging out user!');
    fetch('/api/users/logout',{
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' }
    }).then((response)=>{
        
        return response;
    }).then((data)=>{
        document.location.replace('/profile');
        return data;
    });
}

// const checkLoggedIn = () => {
//   fetch('/api/users/check', {
//     method: 'GET',
//     body: JSON.stringify({}),
//     headers: { 'Content-Type': 'application/json' }
//   }).then((response) => {
//     return response;
//   })
// } 

return (
<div>
{/* nav bar  */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Profile</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
{/* Profile Image Card */}



  <div className="card bg-dark text-white" >
    <div className="card-body">
    <div className="d-flex flex-column align-items-center text-center">
            <img src="" alt="Admin" className="img-fluid img-thumbnail"/>
            <div className="file btn btn-lg btn-primary">
                Change Photo
              <input type="file" name="file"/>
            </div>

            <div className="mt-3">
              <h4>Wookie Man 420</h4>
              <p className="text-secondary mb-1">Jedi Master</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
              <button className="align-center mb-3" onClick={logout}>Log Out</button>
            </div>
      </div>
    </div>
        <SignupButton></SignupButton>
        <LoginButton></LoginButton>
  </div>

{/* Form Area */}
<form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Edit Information</button>
  </div>
</form>

    

        
</div>

        

)}

export default Profile;
