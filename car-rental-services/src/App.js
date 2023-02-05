import { Vehicles } from "./components/Vehicles";
import { VehiclesCreate } from "./components/VehiclesCreate";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Vehicles/>} />
      <Route path="/create" element={<VehiclesCreate/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
