import React from "react";
import "../css/contacto.css"

const ContactoScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-white">
                    <h1>Contacto Screen</h1>
                </div>
            </div>
            <div className="row mt-5 justify-content-center">
                <div className="col-8 text-white ">
                    <h5 className="formulario">Tenes alguna duda? Contáctanos!</h5>
                </div>
            </div>
            <div className="row justify-content-center text-white ">
                <div className="col-8">
                    <div className="my-3 ">
                        <label for="exampleFormControlInput1" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Dejanos tu duda!</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="d-flex col-12 justify-content-end">
                        <button class="btn btn-primary " type="submit">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactoScreen;
