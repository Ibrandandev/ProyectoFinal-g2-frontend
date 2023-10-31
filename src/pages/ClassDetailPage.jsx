import React from 'react';
import data from "../data/clases.json";
import "../css/classDetail.css"

const ClassDetailpage = () => {
    return (
    
    <div>
        {
            console.log(data)
        }
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                <h2>{data[0].nombre}</h2>
                <p>{data[0].categoria}</p>
                </div>
            </div>
        </div>
    </div>

)
}

export default ClassDetailpage