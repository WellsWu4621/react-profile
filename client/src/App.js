import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <Router>
      <div>
        <Appbar />
        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
