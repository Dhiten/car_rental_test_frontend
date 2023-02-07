import { Vehicles } from "./components/Vehicles";
import { VehiclesCreate } from "./components/VehiclesCreate";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { People } from "./components/People";
import { PeopleCreate } from "./components/PeopleCreate";
import { CreateRental } from "./components/CreateRental";
import { Rental } from "./components/Rentals";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Vehicles/>} />
      <Route path="/create" element={<VehiclesCreate/>} />
      <Route path="/people" element={<People/>}/>
      <Route path="/people/create" element={<PeopleCreate/>}/>
      <Route path="/rentals" element={<Rental/>}/>
      <Route path="/rentals/create" element={<CreateRental/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
