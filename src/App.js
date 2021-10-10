import {GlobalStyle} from './GlobalStyles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthRoute from './routes/AuthRoute';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";


function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login toast={toast} />
          </Route>
          <AuthRoute exact path="/dashboard">
            <Dashboard toast={toast} />
          </AuthRoute>
          <Route path="*">
            <div>404 Not found </div>
          </Route>

        </Switch>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
