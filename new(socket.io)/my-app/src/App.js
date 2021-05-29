
import './App.css';
import LayOut from './layout/LayOut';

import { Route, Switch } from "react-router-dom";
import TodoPage from './pages/TodoPage';
import TestPage from './pages/TestPage';





function App() {



  return (
    <>

      <LayOut>
        <Switch>
          <Route path='/' exact={true}>
            <TodoPage />
          </Route>
          <Route path='/test'>
            <TestPage/>
          </Route>
        </Switch>
      </LayOut>


    </>
  );
}

export default App;
