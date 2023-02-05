import { Wrapper } from "./Wrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const People = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/person");
      const data = await response.json();
      setPeople(data);
    })();
  }, []);
  
  const del = async (id) => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
    await fetch(`http://localhost:8000/person/${id}`, {
      method: "DELETE"
    });
    setPeople(people.filter((vehicle) => vehicle.id !== id));
    }
  };

    return (<Wrapper>
          <div className="pt-3 pb-2 mb-3 border-bottom">
            <Link to={'/people/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
          </div>
          <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">LastName</th>
                <th scope="col">Date of birth</th>
                <th scope="col">Identification number</th>
                <th scope="col">Profession</th>
                <th scope="col">Married</th>
                <th scope="col">Monthly income</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => {
                return <tr key={person.id}>
                          <td>{person.id}</td>
                          <td>{person.name}</td>
                          <td>{person.last_name}</td>
                          <td>{person.identification}</td>
                          <td>{person.married}</td>
                          <td>{person.monthly_income}</td>
                          <td><Link to={'/people/create'} className="btn btn-primary">Edit</Link></td>
                          <td><button class="btn btn-danger" onClick={e =>del(person.id)}>Delete</button></td>
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