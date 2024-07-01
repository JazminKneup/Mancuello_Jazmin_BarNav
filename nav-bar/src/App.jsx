import React, { useState } from 'react';
import './App.css';
import UserContext from './components/UserContext';
import Wrapper from './components/Wrapper';
import Navbar from './components/NavBar';
import FormWrapper from './components/FormWrapper';

function App() {
  const [name, setName] = useState('User');

  return (
    <div className="App bg-light">
      <UserContext.Provider value={{ name, setName }}>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </UserContext.Provider>
    </div>
  );
}

export default App;