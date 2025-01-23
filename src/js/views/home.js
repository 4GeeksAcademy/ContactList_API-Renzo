import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Context } from "../store/appContext.js"


export const Home = () => {

	const {store,actions} = useContext(Context);

	const Card = ({contacto}) =>{
		return(
					<div className="d-flex justify-content-center">
						<div className="card mb-3 col-8" >
							<div className="row g-0">
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
						</div>
					</div>
		);
	}

	return <div>
			{
				store.contacto.map(item=> <Card key={item.id} contacto={item}/>)
			}

		</div>
	
};
