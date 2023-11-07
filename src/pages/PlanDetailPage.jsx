import React from "react";
import data from "../data/planes.json";
import "../css/planDetail.css";
import emailjs from '@emailjs/browser';

const PlanDetailPage = () => {
    // const [formValues, setFormValues] = useState({nombre:"", destinatario:"", plan:""});
    // const handleChange = (e) => {
    //     setFormValues({...formValues, [e.target.id]:e.target.value})
    // }
    // const templateParams = {
    //     nombre: "lucia",
    //     destinatario: formValues.destinatario,
    //     plan: formValues.plan,
    // };

    // const sendEmail = (e) =>{
    //     e.preventDefault()
    //     emailjs.send('service_s77z5hs','template_z6ovm7l', templateParams, 'kPRDVZfVG6hM9voQ-')
    //     .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //     }, (err) => {
    //     console.log('FAILED...', err);
    //     });
    //     }
    return (
        <div>
            {console.log(data)}

            <div className="container text-white">
                
                <div className="row mt-4 ">
                    <div className="col-5">
                        <img src={data[0].img} alt="" />
                    </div>
                    <div className="col-7">
                        <div className="d-flex justify-content-between rowTitulo ">
                            <h1 className="rowTitulo mx-2">{data[0].nombre}</h1>
                            <h2 className="rowTitulo align-self-center mx-5">$ {data[0].precio}</h2>
                        </div>
                        <div>
                            <h5 className="mt-2 mx-3">{data[0].duracion}</h5>
                        </div>
                        <div>
                            <ul className="mt-5 mx-2">
                                {data[0].beneficios.map((beneficio)=>{
                                    return <li key={crypto.randomUUID()}><i className="fa fa-check" aria-hidden="true"></i> {beneficio}</li>
                                })}
                                {/* <li><i className="fa fa-check" aria-hidden="true"></i> {data[0].beneficio1}</li>
                                <li><i className="fa fa-check" aria-hidden="true"></i> {data[0].beneficio2}</li>
                                <li><i className="fa fa-check" aria-hidden="true"></i> {data[0].beneficio3}</li>
                                <li><i className="fa fa-check" aria-hidden="true"></i> {data[0].beneficio4}</li>
                                <li><i className="fa fa-check" aria-hidden="true"></i> {data[0].beneficio5}</li> */}
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="mt-4">
                    <h2>Información Personal</h2>
                <form className="row g-3">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="validationDefault01" className="form-label"></label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Nombre" required/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="validationDefault02" className="form-label"></label>
                            <input type="text" className="form-control" id="validationDefault02" placeholder="Apellido" required/>
                        </div>
                        {/* </div>
                        <div className="row"> */}
                        <div className="col-6">
                            <label htmlFor="validationDefaultUsername" className="form-label"></label>
                            <div className="input-group">
                            <span className="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="email" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" placeholder="Correo" required/>
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="validationDefault03" className="form-label"></label>
                            <input type="text" className="form-control" id="validationDefault03" placeholder="Numero de teléfono" required/>
                        </div>
                        <div className="col mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ingrese aquí su consulta..."></textarea>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="invalidCheck2" required/>
                                <label className="form-check-label" htmlFor="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <div className="col-12 mb-5 d-flex justify-content-end">
                            <button className="btn btn-cursos" type="submit">Submit form</button>
                        </div>
                    </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default PlanDetailPage;