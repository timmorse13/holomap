import React from 'react';


function Profile(){
return(
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Profile Page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home Page</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div className="card bg-dark text-white" >
  <div className="card-body">
  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://pbs.twimg.com/profile_images/1284600130168070144/dRh7O4Kj_400x400.jpg" alt="Admin" class="rounded-circle width"/>
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                    </div>
    </div>
    <h4 className="card-title">Wookie Man 420</h4>
    <p className="card-text">I like stars with wars.</p>
    <a href="#" className="btn btn-primary">Edit Avatar</a>
  </div>
</div>


<form action="/action_page.php" className="was-validated">
  <div className="form-group">
    <label for="uname">Username:</label>
    <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="form-group form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" required/> I agree on blabla.
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Check this checkbox to continue.</div>
    </label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


    

        
</div>
)
}

export default Profile;
