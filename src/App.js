import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import CreateMentor from "./components/mentor/CreateMentor";
import Mentor from "./components/mentor/Mentor";
import Home from "./components/home/Home";
import CreateStudent from "./components/student/CreateStudent";
import Student from "./components/student/Student";
import FindByMentor from "./components/FindByMentor";
import ChangeMentor from "./components/ChangeMentor";
import AssignMentor from "./components/assignmentor/AssignMentor";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/student">
          <Student />
        </Route>
        <Route exact path="/mentor">
          <Mentor />
        </Route>
        <Route path="/add-mentor">
          <CreateMentor />
        </Route>
        <Route path="/add-student">
          <CreateStudent />
        </Route>
        <Route path="/assign-mentor">
          <AssignMentor />
        </Route>
        <Route path="/change-mentor">
          <ChangeMentor />
        </Route>
        <Route path="/find-by-mentor">
          <FindByMentor />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
