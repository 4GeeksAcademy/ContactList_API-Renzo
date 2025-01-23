import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Context } from "../store/appContext.js"


export const Home = () => {

	const { store, actions } = useContext(Context);

	const Card = ({contacto}) =>{
		return(
					<div className="d-flex justify-content-center">
						<div className="card mb-3 col-8 flex-row" >
							<div className="row g-0 col-10">
								<div className="col-md-4 d-flex justify-content-center align-items-center">
									<img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2QB7K2TGLRHFPHKTVY5LL2DZ5Q.jpg" 
										className="img-fluid rounded-circle" style={{objectFit:'cover',height:'150px', width:'150px'}} alt="..."/>
								</div>
								<div className="col-md-8" >
									<div className="card-body">
										<h5 className="card-title">{contacto.name}</h5>
										<p className="card-text">{contacto.address}</p>
										<p className="card-text"><small className="text-body-secondary">{contacto.phone}</small></p>
										<p className="card-text"><small className="text-body-secondary">{contacto.email}</small></p>
									</div>
								</div>
							</div>
							<div className="col-2 mt-4">
								<i class="fa-solid fa-pencil mx-3"></i>
								<i class="fa-solid fa-trash mx-3" 
									onClick={()=>{
												actions.deleteContacts(contacto.id);
												actions.fetchAgenda();
											}} 
								></i>
							</div>

							<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
									<div class="modal-header">
										<h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">
										<p>Si lo eliminas, no irá a acapulco!</p>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OH! nooo!</button>
										<button type="button" class="btn btn-primary"
											
										>Yes baby!</button>
									</div>
									</div>
								</div>
							</div>

						</div>
					</div>
		);
	}

	useEffect(()=>{
		actions.fetchAgenda();
	},[])

	return <div>
			{
				store.contacto.map(item=> <Card key={item.id} contacto={item}/>)
			}

		</div>
	
};
