import React from 'react';

import './styles.css'
function Infoclima(props){

    const { data } = props


    const infoDate = (dTime) => {
        let months = [ "Janeiro", "Fevereiro", "Março", "Abriu", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let days = [ "Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

        let day = days[dTime.getDay()];
        let date = dTime.getDate();
        let month = months[dTime.getMonth()];
        let year = dTime.getFullYear();

        return `${day}, ${date} ${month} ${year} `

    }
    return(
        <div className="container-info">
            <div className="container-card">
                <div className="info-city">
                Clima em {data.name}
                </div>
            
            
            <span className="date-info">
                 {infoDate(new Date())}
            </span>
            <span className="graus-info">
                { Math.floor(data.main.temp - 273.15)}
            <sup>o</sup>
            </span>
        
            <span className="description-cli">
                {data.weather[0].description}
            </span>
            </div>

            <div className="detalhes-cli">
                <div className="secaone-cli">
                    <table>
                        <tr>
                            <td>
                                <h3>Alto/Baixo</h3>
                            </td>
        
                            <td>
                                <span>
                                    {Math.floor(data.main.temp_max - 273.15)}/{""}
                                    {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup> C
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h3>Umidade</h3>
                            </td>
        
                            <td>
                                <span>
                                    {data.main.humidity} %
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h3>Pressão</h3>
                            </td>
        
                            <td>
                                <span>
                                    {data.main.pressure} hpa
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h3>Visibility</h3>
                            </td>
        
                            <td>
                                <span>
                                    {data.visibility / 1000} km
                                </span>
                            </td>
                        </tr>

                    </table>
                </div>
            
                <div className="secaotwo-cli">
                    <table>
                        <tr>
                            <td>
                                <h3>Vento</h3>
                            </td>
        
                            <td>
                                <span>
                                    {Math.floor((data.wind.speed * 18) / 5)} km/hr
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h3>Direção do vento</h3>
                            </td>
        
                            <td>
                                <span>
                                     {data.wind.deg}<sup>o</sup>grous
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h3>Nascer do sol</h3>
                            </td>
        
                            <td>
                                <span>
                                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h3>Pôr do sol</h3>
                            </td>
        
                            <td>
                                <span>
                                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                </span>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Infoclima;