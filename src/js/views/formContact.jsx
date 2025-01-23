import React,{useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const FormContact = ()=> {

    const {store, actions} = useContext(Context);


    return <>
            <h1 className="display-3 text-center fw-bold mb-5">Add a new contact</h1>
        
            <div className="col-6 mx-auto">
                <div className="mb-3">
                    <label for="nameForm" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="nameForm" aria-describedby="emailHelp" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <label for="emailForm" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailForm" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label for="phoneForm" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="phoneForm" placeholder="Enter phone"/>
                </div>
                <div className="mb-3">
                    <label for="addressForm" className="form-label">Adress</label>
                    <input type="text" className="form-control" id="addressForm" placeholder="Enter address"/>
                </div>
                <Link to="/">
                <button type="submit" className="btn btn-primary col-12"
                    onClick={()=>{
                        store.nuevoContacto.name = document.querySelector("#nameForm").value;
                        store.nuevoContacto.email = document.querySelector("#emailForm").value;
                        store.nuevoContacto.phone = document.querySelector("#phoneForm").value;
                        store.nuevoContacto.address = document.querySelector("#addressForm").value;

                        //console.log(store.nuevoContacto)
                        actions.saveContacts();
                        actions.fetchAgenda();
                    }}
                >save</button>
                </Link>
                <Link to="/">
                    <span>get back to contacts</span>
                </Link>
            </div>
        
        {console.log(store.contacto)}
    </>
}

export default FormContact;