import logo from './logo.svg';
import './App.css';
import Navbarx from './components/Navbar/Navbar';
import axios from "axios";
import React , { useEffect} from 'react';
import GetUser from './components/GetUser/GetUser';

function App() {

 
  const [post, setPost] = React.useState(null);

  

  React.useEffect(() => {
    console.log("here")
    const fetch = () => {
        console.log("here")
        axios.get('https://reqres.in/api/users').then((response) => {
          setPost(response);
        });
    }
    fetch();
  }, []);
  return (
    <div className="App">
      <Navbarx></Navbarx>
      <header className="App-header">
        <GetUser></GetUser>
      </header>
    </div>
  );
}

export default App;
