import React, { useState } from "react";
import "./UserForm.css";
import { generateId } from "./UsersId";

const UserForm = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateId();
    const newUser = { id, ...state };
    setData((oldArray) => [...oldArray, newUser]);
    setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={(e) => setState({ ...state, firstName: e.target.value })}
          placeholder="First name"
        /><br />
        <input
          value={state.lastName}
          onChange={(e) => setState({ ...state, lastName: e.target.value })}
          placeholder="Last name"
          type="text"
          name="lastName"
        /><br />
        <input
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          placeholder="Email address"
          type="email"
          name="email"
        /><br />
        <input
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
          placeholder="Password"
          type="password"
          name="password"
        /><br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            data&&data.map((item,idx)=>{
              return(
                <tr  key={idx}>
                <td>{idx+1}</td>
                  <td>{item?.firstName}</td>
                  <td>{item?.lastName}</td>
                  <td>{item?.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default UserForm;
