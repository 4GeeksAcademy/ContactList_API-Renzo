import React,{useContext, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

const UpdateContact = ()=> {

    const {store, actions} = useContext(Context);

    const location = useLocation();
    const id = location.state.id;
    const [name, setName] = useState(location.state.name);
    const [phone, setPhone] = useState(location.state.phone);
    const [address, setAddress] = useState(location.state.address);
    const [email, setEmail] = useState(location.state.email);

    return <>
            <h1 className="display-3 text-center fw-bold mb-5">Add a new contact</h1>
        
            <div className="col-6 mx-auto">
                <div className="mb-3">
                    <label for="nameForm" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="nameForm" aria-describedby="emailHelp" placeholder="Full name"
                        value={name || ""} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="emailForm" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailForm" aria-describedby="emailHelp" placeholder="Enter email"
                        value={email || ""}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="phoneForm" className="form-label">Phone</label>
                    <input value={phone || ""} type="number" className="form-control" id="phoneForm" placeholder="Enter phone"
                        onChange={(e)=> setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="addressForm" className="form-label">Adress</label>
                    <input value={address || ""} type="text" className="form-control" id="addressForm" placeholder="Enter address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <Link to="/">
                    <button type="submit" className="btn btn-warning col-12 mt-3"
                        onClick={()=>{

                            store.nuevoContacto.name = document.querySelector("#nameForm").value;
                            store.nuevoContacto.email = document.querySelector("#emailForm").value;
                            store.nuevoContacto.phone = document.querySelector("#phoneForm").value;
                            store.nuevoContacto.address = document.querySelector("#addressForm").value;

                            //console.log(store.nuevoContacto);
                            
                            actions.updateContacts(id);
                            actions.fetchAgenda();
                            
                        }}
                    >update</button>
                </Link>
                <Link to="/">
                    <span>get back to contacts</span>
                </Link>
            </div>
    </>
}

export default UpdateContact;