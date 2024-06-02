import React from 'react';
import './App.css';
import UserForm from './component/UserForm';
import UserTable from './component/UserTable';

function App() {
  return (
    <div className="App">
     <UserForm/>
     <UserTable/>
    </div>
  );
}
export default App;