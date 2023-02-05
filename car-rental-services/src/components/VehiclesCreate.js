import { Wrapper } from "./Wrapper"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const VehiclesCreate = () => {
const [model, setModel] = useState(""); 
const [doors, setDoors] = useState("");
const [vehicle_type, setVehicle_type] = useState("");
const [plate, setPlate] = useState("");
const [brand, setBrand] = useState("");
const [people, setPeople] = useState("");
const navigate = useNavigate();

const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8000/vehicle',
    {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            model,
            brand,
            doors,
            vehicle_type,
            plate
        })
    });

    await navigate(-1);
}

return <Wrapper>
    <form className="mt-3" onSubmit={submit}>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="model" placeholder="Model" 
            onChange={e=> setModel(e.target.value)}/>
            <label htmlFor="brand">Model</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="brand" placeholder="Brand"
            onChange={e=> setBrand(e.target.value)} />
            <label htmlFor="brand">Brand</label>
        </div>
        <div className="form-floating mb-3">
            <input type="number" className="form-control" id="doors" placeholder="Doors" 
            onChange={e=> setDoors(e.target.value)}/>
            <label htmlFor="doors">Doors</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="vehicle_type" placeholder="Vehicle type"
            onChange={e=> setVehicle_type(e.target.value)} />
            <label htmlFor="vehicle_type">Vehicle type</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="plate" placeholder="Plate" 
            onChange={e=> setPlate(e.target.value)}/>
            <label htmlFor="plate">Plate</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="people" placeholder="People" 
            onChange={e=> setPeople(e.target.value)}/>
            <label htmlFor="people">People</label>
        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
    </Wrapper>
}