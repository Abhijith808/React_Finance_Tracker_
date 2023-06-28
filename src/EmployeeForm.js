import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    office: '',
    salary: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/employees', employee);
      console.log(response.data);
      // Handle success or redirect
      alert('Form submitted successfully');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <section className="text-center text-lg-start">
      <div className="container py-5 h-100" style={{ backgroundColor: 'black' }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '2rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={require("./Register.jpg")}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '2rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">
                          <img
                            src={require("./logo.jpg")}
                            className="card-img-top"
                            alt="Card 1"
                            height="100"
                            width="200"
                            style={{ borderRadius: '2rem 0 2 0rem' }}
                          />
                        </span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Enter Employee Data
                      </h5>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-outline mb-4">
                            <label htmlFor="inputName">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName"
                              name="name"
                              placeholder="Name"
                              value={employee.name}
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label htmlFor="inputPosition">Position</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPosition"
                              name="position"
                              placeholder="Position"
                              value={employee.position}
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label htmlFor="inputOffice">Office</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputOffice"
                              name="office"
                              placeholder="Office"
                              value={employee.office}
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label htmlFor="inputSalary">Salary</label>
                            <input
                              type="number"
                              className="form-control"
                              id="inputSalary"
                              name="salary"
                              placeholder="Salary"
                              required
                              value={employee.salary}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="form-outline mb-4 p-3"
                            style={{ border: '1px solid #808080', borderRadius: '15px' }}
                          >
                            <div className="mt-4">
                              <h5>Entered Data:</h5>
                              <p>Name: {employee.name}</p>
                              <p>Position: {employee.position}</p>
                              <p>Office: {employee.office}</p>
                              <p>Salary: {employee.salary}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="pt-1 mb-4">
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployeeForm;
