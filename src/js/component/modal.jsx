import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Modal = ({id}) =>{


    return(

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Estás seguro???</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Si lo eliminas, no irá a acapulco!</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Que vaya a acapulco!</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                        onClick={()=>{
                            //actions.deleteContacts(contacto.id);
                            //actions.fetchAgenda();
                            console.log("Modal el id es "+id);
                        }} 
                    >No te vayas chavo!</button>
                </div>
                </div>
            </div>
        </div>

    );
}

export default Modal;