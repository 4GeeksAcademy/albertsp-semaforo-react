import { useState } from "react";

export default function TrafficLight() {

    const [color, setColor] = useState(null);

    return(
        <div className="contenedor-principal">
            <button 
            onClick={() => setColor("red")}
            style={{backgroundColor: color === "red" ? "red" : "gray"}}
            >
                Rojo
            </button>

            <button 
            onClick={() => setColor("yellow")}
            style={{backgroundColor: color === "yellow" ? "yellow" : "gray"}}
            >
                Amarillo
            </button>

            <button 
            onClick={() => setColor("green")}
            style={{backgroundColor: color === "green" ? "green" : "gray"}}
            >
                Verde
            </button>


        </div>
    )
}