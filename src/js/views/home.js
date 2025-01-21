import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Home = () => {

	const urlApiGet = "https://playground.4geeks.com/contact/agendas/jaimito";

	const [contacto, setContacto] = useState([]);

	const Card = (props) =>{
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
									<h5 className="card-title">{props.name}</h5>
									<p className="card-text">{props.address}</p>
									<p className="card-text"><small className="text-body-secondary">{props.phone}</small></p>
									<p className="card-text"><small className="text-body-secondary">{props.email}</small></p>
								</div>
								</div>
							</div>
						</div>
					</div>
		);
	}

	const fetchAgenda = async () =>{
		try {
			const response = await fetch(urlApiGet);
			const data = await response.json();
			setContacto(data.contacts);
			console.log(data);
	
		} catch (error) {
			console.log("Error",error);
		}
	};

	useEffect(()=>{
		fetchAgenda();
	},[]);

	return(<>
		
			{
				contacto.map(item=> <Card name={item.name} address={item.address} phone={item.phone} email={item.email}/>)
			}
		</>
	);
};
