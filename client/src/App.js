import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import './App.css'
import TopBar from './components/layout/TopBar'
import Widget from './components/chatapp/Widget';
import ProjectsListContainer from './components/projects/ProjectsListContainer';
// import {Redirect} from "react-router";
// import {Provider} from 'react-redux'
// <Route exact path="/signup" component={SignupPage} />
// <Route exact path="/games" component={GamesList} />
// <Route exact path="/games/:id" component={GameDetails} />
// import LoginSignup from './components/LoginSignUp'
import FixedMenuLayout from './components/FixLayout';
class App extends Component {
  render() {
    return (
      
      
      <Router>
        <div>
          <header>
          <FixedMenuLayout />

          </header>
          {/* <nav>
            <TopBar />
          </nav> */}
          <main style={{marginTop:75}}>
            {/* <Route exact path="/test" component={FixedMenuLayout} /> */}
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/projects" component={ProjectsListContainer} />
            <Route exact path="/projects/:id/messages" component={Widget} />
            {/* <Route exact path="/" render={ () => <Redirect to="/login" /> } /> */}
          </main>
        </div>

         {/* </div>  */}
      </Router>
     
    
    )
  }
}
export default App
