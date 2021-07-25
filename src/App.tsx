import "./App.css";
import { Route, Switch } from "react-router-dom";
import Madisonpage from "./pages/madisonpage";
import Homepage from "./pages/homepage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/madison" component={Madisonpage} />
    </Switch>
  );
}

export default App;
