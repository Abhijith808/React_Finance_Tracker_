import React, { useState } from 'react';
import axios from 'axios';

function SignupPage() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    setPasswordMismatch(false); // Reset password mismatch on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (user.password !== user.confirmPassword) {
      setPasswordMismatch(true);
      return; // Stop form submission if password mismatch
    }

    try {
      const response = await axios.post('/signup', user);
      console.log(response.data);
      // Handle success or redirect
      alert('Signup successful');
    } catch (error) {
      console.error(error);
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
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <label htmlFor="inputName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        name="name"
                        placeholder="Name"
                        value={user.name}
                        required
                        onChange={handleChange}
                      />
                    </div>

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

                    <div className="form-outline mb-4">
                      <label htmlFor="inputConfirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputConfirmPassword"
                        name="confirmPassword"
                        required
                        placeholder="Confirm Password"
                        value={user.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>

                    {passwordMismatch && (
                      <div className="alert alert-danger" role="alert">
                        Password and Confirm Password do not match.
                      </div>
                    )}

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Already have an account? <a href="LoginPage" to="/LoginPage" className="btn btn-outline-light btn-rounded" style={{ color: 'black', textDecoration: 'none' }}>Login here!</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div
                className="form-outline mb-4 p-3"
                style={{ border: '1px solid #808080', borderRadius: '15px' }}
              >
                <div className="mt-4">
                  <h5>Entered Data:</h5>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Password: {user.password}</p>
                  <p>Confirm Password: {user.confirmPassword}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
