import { Wrapper } from "./Wrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Rental = () => {
  const [relationships, setRelationships] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/vehicle_person");
      const data = await response.json();
      setRelationships(data);
    })();
  }, []);


    return (<Wrapper>
          <div className="pt-3 pb-2 mb-3 border-bottom">
            <Link to={'/rentals/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
          </div>
          <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Person</th>
                <th scope="col">Vehicle</th>
                <th scope="col">Date</th>
                <th scope="col">Active</th>
              </tr>
            </thead>
            <tbody>
              {relationships.map((relationship) => {
                return <tr key={relationship.id}>
                          <td>{relationship.id}</td>
                          <td>{relationship.person_id}</td>
                          <td>{relationship.vehicle_id}</td>
                          <td>{relationship.date}</td>
                          <td>{relationship.active ? "Yes" : "No"}</td>
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