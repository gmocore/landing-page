import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from './pages/Contact'
import './App.css';

function App() {
  return (
 
    <Router>
    <div>
      <NavBar />
 

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route path="/about" component={About}>
        </Route>
        <Route path="/contact" component={Contact}>
          {/* <Contact /> */}
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
