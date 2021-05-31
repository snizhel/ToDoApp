
import './App.css';
import LayOut from './layout/LayOut';

import { Route, Switch } from "react-router-dom";
import TodoPage from './pages/TodoPage';
import TestPage from './pages/TestPage';
import { useAuth0 } from '@auth0/auth0-react'
import productApi from './api/productApi';
import ReqLogin from './components/ReqLogin';




function App() {
  const { user
  } = useAuth0();

  function startUp(){
    productApi.addUser(user)
    return <TodoPage user={user} />
  }
  return (
    <>

      <LayOut>
        <Switch>
          <Route path='/' exact={true}>
            {user !== undefined && startUp()}
            {user == undefined && <ReqLogin/>}
          </Route>
          <Route path='/test'>
            <TestPage />
          </Route>
        </Switch>
      </LayOut>


    </>
  );
}

export default App;
