import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Context } from "../store/appContext.js"
import Modal from "../component/modal.jsx";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, actions } = useContext(Context);
	const [isUpdate, setIsUpdate] = useState(true);

	const Card = ({contacto}) =>{

		const dataContact = {
			name: contacto.name,
			address: contacto.address,
			phone: contacto.phone,
			email: contacto.email,
			id: contacto.id
		}

		return(
					<div className="d-flex justify-content-center">
						<div className="card col flex-row" >
							<div className="row g-0 col-10">
								<div className="col-md-4 d-flex justify-content-center align-items-center">
									<img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2QB7K2TGLRHFPHKTVY5LL2DZ5Q.jpg" 
										className="img-fluid rounded-circle" style={{objectFit:'cover',height:'150px', width:'150px'}} alt="..."/>
								</div>
								<div className="col-md-8" >
									<div className="card-body">
										<h5 className="card-title">{contacto.name}{contacto.id}</h5>
										<p className="card-text">{contacto.address}</p>
										<p className="card-text"><small className="text-body-secondary">{contacto.phone}</small></p>
										<p className="card-text"><small className="text-body-secondary">{contacto.email}</small></p>
									</div>
								</div>
							</div>
							<div className="col-2 mt-4">
								<Link to="/update" state={dataContact}>
									<i className="fa-solid fa-pencil mx-3"
										onClick={()=>{
											//Actualizar
																						
										}} 
									></i>
								</Link>
								<i className="fa-solid fa-trash mx-3" data-bs-toggle="modal" data-bs-target={"#staticBackdrop-"+contacto.id}></i>
								<Modal id={contacto.id} onDelete={async () => {
									await actions.deleteContacts(contacto.id);
									//await actions.fetchAgenda();
									}}
								/>
							</div>
						</div>
					</div>
		);
	}

	useEffect(()=>{
		actions.fetchAgenda();
	},[])

	return <div className="container">
			{
				store.contacto.map(item=> <Card key={item.id} contacto={item}/>)
			}

		</div>
	
};
