import { Vehicles } from "./components/Vehicles";
import { VehiclesCreate } from "./components/VehiclesCreate";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { People } from "./components/People";
import { PeopleCreate } from "./components/PeopleCreate";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Vehicles/>} />
      <Route path="/create" element={<VehiclesCreate/>} />
      <Route path="/people" element={<People/>}/>
      <Route path="/people/create" element={<PeopleCreate/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
