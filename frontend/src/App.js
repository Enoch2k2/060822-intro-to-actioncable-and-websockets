import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Errors from './components/errors/Errors';
import Navbar from './components/navigation/Navbar';
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import Home from './components/static/Home';

const App = () => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then(resp => resp.json())
      .then(data => {
        if(!data.errors) {
          loginUser(data)
        }
      })
  }, [])
  

  const loginUser = user => {
    setUser(user);
    setLoggedIn(true);
    setLoading(false);
  }

  const logoutUser = () => {
    fetch("/logout", {
      method: "DELETE"
    })
      .then(() => {
        setUser({});
        setLoggedIn(false);
      })
  }

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Router>
      <Navbar loggedIn={ loggedIn } user={ user } logoutUser={ logoutUser } />
      <Errors errors={ errors } />
      <Routes>
        <Route path="/" element={ loggedIn ? <Dashboard user={ user } /> : <Home /> } />
        <Route path="/login" element={ <Login setErrors={ setErrors } loginUser={ loginUser } /> } />
        <Route path="/signup" element={ <Signup setErrors={ setErrors } loginUser={ loginUser } /> } />
      </Routes>
    </Router>
  );
}

export default App;
