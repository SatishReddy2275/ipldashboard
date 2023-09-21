import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home/index'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
