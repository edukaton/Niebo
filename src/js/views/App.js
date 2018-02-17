import Preact from 'preact'
import { Switch, Route } from 'react-router'

import LandingPage from './LandingPage'
import Course from './Course'

const App = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/course/:id" component={Course} />
  </Switch>
)

export default App
