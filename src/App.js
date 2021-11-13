import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import Explore from './Pages/Explore/Explore';
import BookOrder from './Pages/BookOrder/BookOrder';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/Dashboard/DashBoard';
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/explore">
              <Explore />
            </Route>

            <PrivateRoute exact path="/bookOrder/:id">
              <BookOrder></BookOrder>
            </PrivateRoute>

            <PrivateRoute path="/dashBoard">
              <DashBoard></DashBoard>
            </PrivateRoute>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="*">
              <Error />
            </Route>

          </Switch>
        </Router>
      </AuthProvider >

    </div>
  );
}

export default App;
