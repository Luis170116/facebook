

import React from "react";
/**
 * Julysa
 * @param {*} param0 
 */
const ClimaLocalidad=({nombretitulo,des,fecha})=> {
    const mensaje = des>""


    return (
        <div className="climaLocalidad">
            <h3> TITULO PUBLICACION: {nombretitulo}</h3>
            <p>FECHA:{fecha}</p>
            <span> DESCRIPCION: {des}</span>
            <br/>
            
            
        </div>
    )
}
    
    
export default  ClimaLocalidad;

