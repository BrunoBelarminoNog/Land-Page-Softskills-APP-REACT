import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import { FaAngleDoubleDown, FaAngleDoubleUp, FaAngleDoubleLeft} from 'react-icons/fa'


import "../styles/pages/future.css"

import spaceImg from "../images/pixeltrue-space-discovery-1.svg"
import timeImg from "../images/pixeltrue-time-management-1.svg"

function Index() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            setTimeout(
                () => {
                    const id = hash.replace('#', '');
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 0);
        }
    }, [hash]);

    return (
        <div id="page-future">

            <main>


                <div className="content-button">
                    <Link to="/referencias" className="button-navigation button-navigation-lateral">
                        <FaAngleDoubleLeft size={24} />
                    </Link>
                </div>

                <div className="page-future-firstmain-img">
                    <img src={ timeImg} alt="" />
                </div>

                <div className="page-future-firstmain-content">
                    <h1>Olhe para o futuro!</h1>
                    <img src={timeImg} alt="" />
                    <p>
                        Esteja aberto a mudanças, principalmente naquelas que seus colegas sugerem.
                        <br />
                        Pode ser que você tenha dificuldade de aceitar novas ideias quando já tem certeza do que fazer, mas uma mente aberta é muito mais criativa.
                        <br />
                        A partir do momento que você aceitar uma ideia que é melhor que a sua, você evolui automaticamente.
                        </p>

                    <Link to="/ofuturo#future-second-main" className="next-content">
                        Aprenda com o passado,<br /> não viva nele!
                            <FaAngleDoubleDown size={34} />
                    </Link>
                </div>


            </main>

            <main id="future-second-main">

                

                <div className="page-future-second-content">

                    <Link to="/ofuturo" className="button-navigation">
                        <FaAngleDoubleUp size={24} />
                    </Link>


                    <h2>Fique com essas dicas</h2>
                    <div>
                        <div>
                        <p>
                            Os erros do passado não devem mandar em você, eles não podem te convencer de que você vai errar para sempre. Mas sim ensinar a você como não agir novamente.
                        </p>
                        </div>
                        <div>
                        <p>
                            Sabia que na Pixar, eles consideram o fracasso importante? É claro que eles não buscam o fracasso, mas tentam aprender quando ele acontece, para construir algo maior no futuro.
                        </p>
                        </div>
                        <div>
                        <p>
                            Se um dia você fez um deploy que acabou saindo com problemas, descubra o que aconteceu de errado e mude isso na próxima vez. Isso aumentará sua criatividade em desenvolvimento de software.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="page-future-secondmain-img">
                    <img src={spaceImg} alt="" />
                </div>

            </main>



        </div>
    )
}


export default Index;