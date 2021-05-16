import "./App.css";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
