import {useState} from "react";
import {Wrapper} from "./Wrapper";
// import {Dropdown} from "./Dropdown";

export const CreateRental = () => {
    const [person, setPerson] = useState('');
    const [vehicle, setVehicle] = useState('');
    // const [people, setPeople] = useState([]);
    // const [vehicles, setVehicles] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch("http://localhost:8000/person");
    //         const data = await response.json();
    //         setPeople(data);
    //         const response2 = await fetch("http://localhost:8000/vehicles");
    //         const data2 = await response2.json();
    //         setVehicles(data2);
    //         console.log(people, vehicles)
    //     })();

    // });

    const submit = async e => {
        e.preventDefault();
        await fetch('http://localhost:8000/vehicle_person', {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                person_id: person,
                vehicle_id: vehicle,
                date: new Date().toLocaleDateString(),
                active: true
            })
        });
 
    }

    return <Wrapper>
    <div className="container">
        <main>
            <div className="py-5 text-center">
                <h2>Rental form</h2>
            </div>

            <form onSubmit={submit}>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label className="form-label">Person</label>
                        <input type="number" className="form-control"
                               onChange={e => setPerson(e.target.value)}
                        />
                        {/* <Dropdown placeHolder="Select person" options={people} onChange={(value)=>{console.log(value)
                        setPeople(value)}}/> */}
                    </div>

                    <div className="col-sm-6">
                        <label className="form-label">Vehicle</label>
                        <input type="number" className="form-control"
                               onChange={e => setVehicle(e.target.value)}
                        />
                        {/* <Dropdown placeHolder="Select vehicle" options={vehicles} onChange={(value)=>{console.log(value)
                        setVehicle(value)}}/> */}
                    </div>
                </div>
                <hr className="my-4"/>
                <button className="w-100 btn btn-primary btn-lg" type="submit">Rent</button>
            </form>
        </main>
    </div>
    </Wrapper>
}