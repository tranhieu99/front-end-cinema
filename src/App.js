import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/Navbar'
import SignIn from './page/Auth/SignIn'
import SignUp from './page/Auth/SignUp'
import Profile from './page/User/Profile'
import Admin from './page/User/Admin'
import AddStaff from './page/User/AddStaff'
import StaffInfo from './page/User/StaffInfo'
import FilmAdmin from './page/FilmAdmin/FilmAdmin'
import Home from './page/Home'
export default function App() {

  return (
    <Router>
      <div className = "site-wrapper">
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/profile/:username" exact>
            <Profile />
          </Route>
          <Route path="/profile/edit/:username" exact>
            <Profile />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
            <Route path = "/admin" exact>
              <Admin />
            </Route>
            <Route path = "/admin/add-staff" exact>
              <AddStaff />
            </Route>
            <Route path = "/admin/staff-info" exact>
              <StaffInfo />
            </Route>
            <Route path = "/admin/admin-film" exact>
              <FilmAdmin />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}