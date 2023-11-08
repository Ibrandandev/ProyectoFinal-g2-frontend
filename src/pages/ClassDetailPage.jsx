import React from 'react';
import data from "../data/clases.json";
import "../css/classDetail.css"

const ClassDetailpage = () => {
    return (
    <div>
        {
            console.log(data)
        }
        
        <img className=' d-block img-spinning' src={data[0].img} alt="" />

        <div className="container text-white">

            {/* <div className="row mt-5 ">
                <div className="">
                    <img className='mx-auto d-block h-75 ' src={data[0].img} alt="" />
                </div>
            </div> */}
            
            <div className="mt-4 d-flex justify-content-between align-items-center">
                <h1 className='fontTitulos display-3'><strong>{data[0].nombre}</strong></h1>
                <button className="btn btn-cursos w-50 mx-2" type="button" >Registrarse</button>
            </div>
            <hr/>
            <div className='row datos my-3'>
                <div className='col-12 col-lg-3 col-md-6'>
                    <h5><i class="fa fa-caret-square-o-right fs-3" aria-hidden="true"></i> {data[0].categoria}</h5>
                </div>
                <div className='col-12 col-lg-3 col-md-6'>
                    <h5><i class="fa fa-user-circle-o fs-3" aria-hidden="true"></i> Profe: {data[0].profesor}</h5>
                </div>
                <div className='col-12 col-lg-3 col-md-6'>
                    <h5><i class="fa fa-clock-o fs-3" aria-hidden="true"></i> {data[0].horario}</h5>
                </div>
                <div className='col-12 col-lg-3 col-md-6'>
                    <h5><i class="fa fa-calendar fs-3" aria-hidden="true"></i> {data[0].fecha}</h5>
                </div>
            </div>
            <hr />
            <p className='fs-5'>{data[0].descripcion}</p>

            
        </div>
    </div>

)
}

export default ClassDetailpage;