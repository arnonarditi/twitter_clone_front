import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import routes from './routes';
import './assets/scss/main.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffectUpdate } from './customHooks/useEffectUpdate';
import { loadLoggedinUser,loadUsers } from './store/actions/user.action'
import { loadTweets } from './store/actions/tweet.action';
import { AppHeader } from './cmps/AppHeader';


function App() {

  const loggedinUser = useSelector(state => state.userModule.loggedinUser)
  const dispatch = useDispatch()

  useEffect(() => {
    // after setloggedinuser its possible to dispatch loadTweets-inside his action is takin
    dispatch(loadLoggedinUser())
    dispatch(loadUsers())
  }, [])

  useEffectUpdate(() => {
    dispatch(loadTweets())
   
  }, [loggedinUser])

  return (
    <Router>
      <div className="main-app flex column">
        {loggedinUser? <AppHeader/>:'' }
        <Routes>
          {routes.map(route => {
            if (route.children) {
              return <Route key={route.path} path={route.path} element={route.component} >
                {route.children.map(route => <Route key={route.path} path={route.path} element={route.component} > </Route>)}
              </Route>
            }
            return <Route key={route.path} path={route.path} element={route.component} > </Route>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
