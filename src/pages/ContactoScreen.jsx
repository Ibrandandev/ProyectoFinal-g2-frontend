import React, { useState } from "react";
import "../css/contacto.css"
import emailjs from '@emailjs/browser';




const ContactoScreen = () => {
    const [formValues, setFormValues] = useState({nombre:"", destinatario:"", plan:""});
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.id]:e.target.value})
    }
    const templateParams = {
        nombre: "lucia",
        destinatario: formValues.destinatario,
        plan: formValues.plan,
    };

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.send('service_s77z5hs','template_z6ovm7l', templateParams, 'kPRDVZfVG6hM9voQ-')
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
        console.log('FAILED...', err);
        });
        }
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
                <form className="col-8" onSubmit={sendEmail}>
                    <div className="my-3 ">
                        <label htmlFor="destinatario" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="destinatario" placeholder="name@example.com" onChange={handleChange} value={formValues.destinatario}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="plan" className="form-label">Dejanos tu duda!</label>
                    <textarea className="form-control" id="plan" rows="3" onChange={handleChange} value={formValues.plan}></textarea>
                    </div>
                    <div className="d-flex col-12 justify-content-end">
                        <button className="btn btn-primary " type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactoScreen;
