import React from 'react';
import data from "../data/clases.json";
import "../css/classDetail.css"

const ClassDetailpage = () => {
    return (
    
    <div>
        {
            console.log(data)
        }
        <div className="container text-white">
            <div className="row d-flex mt-5">
                <div className="col-6">
                    <img className='justify-content-end' src={data[0].img} alt="" />
                </div>
                <div className="col-6">
                    <div class="d-grid gap-2">
                        <button class="btn btn-cursos" type="button" >Registrarse</button>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <h1><strong>{data[0].nombre}</strong></h1>
                    <hr/>
                    <div className='datos my-3'>
                        <h5><i class="fa fa-caret-square-o-right" aria-hidden="true"></i> {data[0].categoria}</h5>
                        <h5><i class="fa fa-clock-o" aria-hidden="true"></i> {data[0].horario}</h5>
                        <h5><i class="fa fa-user-circle-o" aria-hidden="true"></i> Profe: {data[0].profesor}</h5>
                    </div>
                    <hr />
                    <p>{data[0].descripcion}</p>

                </div>
            </div>
        </div>
    </div>

)
}

export default ClassDetailpage