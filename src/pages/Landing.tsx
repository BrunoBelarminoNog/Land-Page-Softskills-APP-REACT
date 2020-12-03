import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'

import "../styles/pages/landing.css"
import landingImg from "../images/pixeltrue-idea-1.svg"

import { Link } from 'react-router-dom';

function Index() {
    return (
        <div>

            <div id="page-index">


                <main>

                    <div className="content-wrapper">
                        <h1>Criatividade no Desenvolvimento de Software</h1>
                        <p>Você sabia que dentre as softskils mais pedidas do mercado, a criatividade é umas das <strong>habilidades mais buscadas</strong> em desenvolvedores? Preocupados com isso, criamos este pequeno manual para te ajudar a desenvolver seu lado criativo!</p>
                        <Link to="/referencias" className="next-content button-initial">
                            CRIE.ative-se!
                            <FaAngleDoubleRight className="next-content-icon" size={40} />
                        </Link>
                    </div>

                    <div className="content-img">
                        <img src={landingImg} alt="Ideia" />
                    </div>

                </main>

            </div>
        </div>
    )
}


export default Index;