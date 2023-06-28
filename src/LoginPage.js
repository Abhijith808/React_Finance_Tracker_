import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [loginError, setLoginError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    setLoginError(false); // Reset login error on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/login', user);
      console.log(response.data);
      // Handle success or redirect
      alert('Login successful');
    } catch (error) {
      console.error(error);
      setLoginError(true);
      // Handle error
    }
  };

  return (
    <section className="vh-1000 bg-image" style={{ height: "100%", backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
      <div className="mask d-flex align-items-center h-1000 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-200">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Log In</h2>

                  <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="inputPassword">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        name="password"
                        placeholder="Password"
                        required
                        value={user.password}
                        onChange={handleChange}
                      />
                    </div>

                    {loginError && (
                      <div className="alert alert-danger" role="alert">
                        Invalid email or password. Please try again.
                      </div>
                    )}

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Don't have an account?<a href="SignUpPage" to="/SignUpPage" className="btn btn-outline-light btn-rounded" style={{ color: 'black', textDecoration: 'none' }}>
                  Sign up here</a></p>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
