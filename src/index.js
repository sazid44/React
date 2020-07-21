import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import * as serviceWorker from './serviceWorker';
import {Route,Link,BrowserRouter as Router} from '../node_modules/react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css'
const myrouter=(
  <Router>
  <div >
    <ul style={{padding:"0px"}} className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <Link className="nav-link m-2" className={styles.style} to="/">Home</Link>
      <Link className="nav-link m-2"   className={styles.style} to="/about">About</Link>
      <Link  className="nav-link m-2"  className={styles.style} to="/contact">Contact</Link>
      <Link className="nav-link m-2"   className={styles.style} to="/portfolio">Portfolio</Link>
    </ul>
    <Route exact path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/portfolio" component={Portfolio}/>
  </div>
  </Router>
)



ReactDOM.render(
myrouter
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
