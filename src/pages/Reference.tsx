import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom'
import { FaAngleDoubleDown, FaAngleDoubleUp} from 'react-icons/fa'


import referenceImg from "../images/pixeltrue-vision-1.svg"
import movieImg from "../images/movie.png";
import museumImg from "../images/museum.png";
import musicImg from "../images/music.png";

import "../styles/pages/reference.css"

function Index() {
    const { hash} = useLocation();

    console.log(hash)

    useEffect(() => {
        if (hash === '') {
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        } else {
            setTimeout(
                () => {
                    const id = hash.replace('#', '');
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({behavior:'smooth'});
                    }
                }, 0 );
        }
    }, [hash]);

    return (
        <div>
            <div id="page-reference">

                <main>

                    <div className="content-img">
                        <img src={referenceImg} alt="Ideia" />
                    </div>

                    <div className="content-wrapper">
                        <h1>Busque por referências</h1>
                        <p>Nada é original, e tudo que existe foi construído em cima do que veio antes.<br/>
                        Ou seja, nenhum software traz um recurso totalmente novo, e sim uma mistura daqueles programas preferidos do programador.</p>

                        <Link to="/referencias#content-reference" className="next-content">
                            Conecte-se com outras referências!
                            <FaAngleDoubleDown size={34}/>
                        </Link>

                    </div>

                    
                </main>

                <main>
                    
                    <div id="content-reference">

                        <Link to="/referencias">
                            <FaAngleDoubleUp size={24}/>
                        </Link>

                        <div className="cards">
                            <div className="card">
                                <img src={movieImg} alt="Assista filmes"/>
                                <h2>Assista filmes</h2>
                                <p>Fique sempre de olho no catálogo daquele seu serviço de streaming preferido! Fique antenado nas novidades, e também nos filmes antigos que estão cheios de inspirações.</p>
                            </div>
                            <div className="card">
                                <img src={musicImg} alt="Escute músicas" />
                                <h2>Escute músicas</h2>
                                <p>
                                    Que tal experimentar novos estilos de músicas além do que está acostumado(a) a ouvir? Novos sons podem trazer novas idéias!
                                </p>
                            </div>
                            <div className="card">
                                <img src={museumImg} alt="Visite museus"/>
                                <h2>Visite museus</h2>
                                <p>Quando foi a última vez que visitou um museu? Além de aprender coisas novas, em museus vivemos verdadeiras experiências de irmesão com as artes plásticas. Impossível não ficar inspirado.</p>
                            </div>
                        </div>


                        <Link to="/referencias">
                            <FaAngleDoubleDown />
                        </Link>
                    </div>
                </main>

            </div>
        </div>
    )
}


export default Index;