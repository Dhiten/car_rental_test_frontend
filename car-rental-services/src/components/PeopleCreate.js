import { Wrapper } from "./Wrapper"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const PeopleCreate = () => {
const [name, setName] = useState(""); 
const [last_name, setLastName] = useState("");
const [date_of_birth, setDate_of_birth] = useState("");
const [identification, setIdentification] = useState("");
const [profession, setProfession] = useState("");
const [married, setMarried] = useState(false);
const [monthly_income, setMonthly_income] = useState("");
const navigate = useNavigate();

const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8000/person',
    {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name,
            last_name,
            date_of_birth,
            identification,
            profession,
            married,
            monthly_income
        })
    });

    await navigate(-1);
}

return <Wrapper>
    <form className="mt-3" onSubmit={submit}>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="name" placeholder="name" 
            onChange={e=> setName(e.target.value)}/>
            <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="LastName" placeholder="Last Name"
            onChange={e=> setLastName(e.target.value)} />
            <label htmlFor="LastName">Last Name</label>
        </div>
        <div className="form-floating mb-3">
            <input type="date" className="form-control" id="Date_of_birth" placeholder="Date of birth" 
            onChange={e=> {
                let datetemp= new Date(e.target.value);
                let tempo =  [datetemp.getMonth() + 1, datetemp.getDate(), datetemp.getFullYear()].join('/');
                setDate_of_birth(tempo)}}/>
            <label htmlFor="Date_of_birth">Date of birth</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="Identification" placeholder="Identification"
            onChange={e=> setIdentification(e.target.value)} />
            <label htmlFor="Identification">Identification</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="Profession" placeholder="Profession" 
            onChange={e=> setProfession(e.target.value)}/>
            <label htmlFor="Profession">Profession</label>
        </div>
        <div className="form-floating mb-3">
            <input type="bool" className="form-control" id="Married" placeholder="Married" 
            onChange={e=> {let de = e.target.value.toLowerCase() === 'YES' ? true : false;
                setMarried(de)}}/>
            <label htmlFor="Married">Married</label>
        </div>
        <div className="form-floating mb-3">
            <input type="float" className="form-control" id="Monthly_income" placeholder="Monthly_income" 
            onChange={e=> setMonthly_income(e.target.value)}/>
            <label htmlFor="MMonthly_income">Monthly income</label>
        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
    </Wrapper>
}