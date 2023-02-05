import { Wrapper } from "./Wrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/vehicles");
      const data = await response.json();
      setVehicles(data);
    })();
  }, []);
  
  const del = async (id) => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
    await fetch(`http://localhost:8000/vehicle/${id}`, {
      method: "DELETE"
    });
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
    }
  };

    return (<Wrapper>
          <div className="pt-3 pb-2 mb-3 border-bottom">
            <Link to={'/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
          </div>
          <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Doors</th>
                <th scope="col">Vehicle type</th>
                <th scope="col">Plate</th>
                <th scope="col">People</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => {
                return <tr key={vehicle.id}>
                          <td>{vehicle.id}</td>
                          <td>{vehicle.brand}</td>
                          <td>{vehicle.model}</td>
                          <td>{vehicle.dors}</td>
                          <td>{vehicle.vehicle_type}</td>
                          <td>{vehicle.plate}</td>
                          <td>{vehicle.people}</td>
                          <td><Link to={'/create'} className="btn btn-primary">Edit</Link></td>
                          <td><button class="btn btn-danger" onClick={e =>del(vehicle.id)}>Delete</button></td>
                       </tr>
                  }
                )
              } 
            </tbody>
          </table>
        </div>
      </Wrapper>
    );
    }