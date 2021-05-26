import { Route, Switch } from "react-router-dom";
import TablePage from "./pages/TableTodo";
import TodoPage from "./pages/TodoPage";
import Layout from "./layout/layout"

function App() {
  return (

    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <TodoPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
      </Switch>
    </Layout>



  );
}

export default App;
