import React, { useState } from 'react';
import Infoclima from '../Infoclima';
import './styles.css';


function ClimaCidade(){
    const [ cidade, setCidade ] = useState({
        cidade: "",
    });

    const [climainfo, setClimainfo ] = useState([])



   async function dataClima(e){
       e.preventDefault();
       if(cidade.cidade === ""){
           alert("Add values");
       }else{
          const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade.cidade}&appid=${process.env.REACT_APP_KEY}`
          )
          .then((response) => response.json())
          .then((data) => data)

          setClimainfo({data: data});
       }
       
    }


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "cidade"){
            setCidade({...cidade, cidade:value})
        }

    };

    return(
        <div className="container-box">
            <div className="container-form">
            <form>
                <input
                className="input-box"
                type="text"
                 name="cidade" 
                 placeholder="Digite a sua cidade" 
                 onChange={e => handleChange(e)} />
                <button className="btn-box"onClick={(e) => dataClima(e) }>BUSCAR</button>
            </form>
            </div>
        
            {climainfo.data && 
            <div>
                <Infoclima data={climainfo.data} />
            </div>}
        </div>
    );
}
   


export default ClimaCidade;