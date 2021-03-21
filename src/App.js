import "./App.sass";
import Cases from "./components/Cases";
import SingleCase from "./components/SingleCase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Cases} />
          <Route path="/case/:id" component={SingleCase} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
