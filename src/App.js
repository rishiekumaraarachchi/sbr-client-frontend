import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import StudentsView from "./component/student/StudentsView";

function App() {
  return (
    <div className="App">
      <Home />
      <StudentsView />
    </div>
  );
}

export default App;
