import React, { useState } from 'react';
import Infoclima from '../Infoclima';
import './styles.css';

function ClimaCidade(){

    
    const API_KEY = "5da54eb1b460b5e3da05ddabd3b39fd6";

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
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade.cidade}&appid=${API_KEY}`
          )
          .then((response) => response.json())
          .then((data) => data);

          setClimainfo({data: data});
       }
       
    }


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "cidade"){
            setCidade({...cidade, cidade:value})
        }
        console.log(cidade.cidade)
    };

    return(
        <div className="clima-app">
            <h2>Previsão do tempo em sua cidade</h2>
            <br/>
            
            <form>
                <input type="text" name="cidade" placeholder="Digite a sua cidade" onChange={e => handleChange(e)} />
                <button onClick={(e) => dataClima(e) }> Pesquisar </button>
            </form>
        
            {climainfo.data && 
            <div>
                <Infoclima data={climainfo.data} />
            </div>}
        </div>
    );
}
   


export default ClimaCidade;