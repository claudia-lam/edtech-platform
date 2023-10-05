import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesList from '../Platform/routes-nav/RoutesList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          {/* <Navigation /> */}
          <RoutesList />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
