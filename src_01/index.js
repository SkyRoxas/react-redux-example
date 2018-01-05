const target = document.querySelector('#root')

// Dynamic Routing
// import React from 'react'
//import {render} from 'react-dom'
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// const App = () => (<div>
//   <nav>
//     <Link to="/dashboard">Dashboard</Link>
//   </nav>
//   <div>
//     <Route path="/dashboard" component={Dashboard}/>
//   </div>
// </div>)
// const Dashboard = () => {
//   return <h1>hello</h1>
// }
// ReactDOM.render(
//   <Router>
//     <App/>
//   </Router>,
//   target
// )

// Nested Routing
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Home = () => (<div>
  <h2>Home</h2>
</div>)

const About = () => (<div>
  <h2>About</h2>
</div>)

const Topics = ({match}) => (
  <div>
    <ul>
      <li><Link to ={`${match.url}/view1/test1`}>view1</Link></li>
      <li><Link to ={`${match.url}/view2/test2`}>view2</Link></li>
    </ul>
    <Route exact path={`${match.url}`} render={() =>(<h3>select view</h3>)}/>
    <Route path={`${match.url}/:topicId/:test`} component={Topic}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{console.log(match)}</h3>
  </div>
)

const Menu = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/topics">Topics</Link>
    </li>
  </ul>
)

const BasicExample = () => (
  <Router>
    <div>
      <Menu/>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

ReactDOM.render(<BasicExample/>, target)
