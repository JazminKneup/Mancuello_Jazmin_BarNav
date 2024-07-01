import React, { useContext } from 'react';
import UserContext from './UserContext';
import './Form.css';

const Form = () => {
  const { name, setName } = useContext(UserContext);

  const inputHandler = (e) => {
    setName(e.target.value); // Actualiza el nombre en tiempo real
  };

  return (
    <div className="form">
      <label htmlFor="name">Your name:</label>
      <input
        type="text"
        id="name"
        className="form-control"
        onChange={inputHandler}
        value={name}
      />
    </div>
  );
};

export default Form;