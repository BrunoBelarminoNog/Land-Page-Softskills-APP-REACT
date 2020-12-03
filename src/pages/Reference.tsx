import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom'
import { FaAngleDoubleDown, FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleDoubleUp, FaExternalLinkAlt} from 'react-icons/fa'


import referenceImg from "../images/pixeltrue-vision-1.svg"
import movieImg from "../images/movie.png";
import museumImg from "../images/museum.png";
import musicImg from "../images/music.png";
import womanLaptop from "../images/WomanLaptop.svg"

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

                    <div className="content-button">
                        <Link to="/" className="button-navigation button-navigation-lateral">
                            <FaAngleDoubleLeft size={24} />
                        </Link>
                    </div>

                    <div className="content-wrapper">
                        <h1>Busque por referências</h1>
                        <p>Nada é original, e tudo que existe foi construído em cima do que veio antes.
                        Ou seja, nenhum software traz um recurso totalmente novo, e sim uma mistura daqueles programas preferidos do programador.<br/>
                        E aqui quero te deixar uma dica: além de buscar referências diretas em outros programas e no GitHub, pare e olhe mais à sua volta e absorva referências de todos os lugares.
                        </p>

                        <Link to="/referencias#main-content-reference" className="next-content button-reference">
                            Conecte-se com o mundo além de sua bolha!
                            <FaAngleDoubleDown size={34}/>
                        </Link>

                    </div>

                    
                </main>

                <main id="main-content-reference">
                    
                    <div id="content-reference">

                        <Link to="/referencias" className="button-navigation">
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


                        <Link to="/referencias#main-content-reference-sites" className="button-navigation">
                            <FaAngleDoubleDown size={24}/>
                        </Link>
                    </div>
                </main>

                <main id="main-content-reference-sites">

                    <div id="content-reference-sites">

                        <Link to="/referencias#main-content-reference" className="button-navigation">
                            <FaAngleDoubleUp size={24} />
                        </Link>

                        <div className="div-reference-sites">
                            <div className="div-reference-sites-img">
                                <img src={womanLaptop} alt="Mulher usando notebook"/>
                            </div>

                            <div className="div-reference-sites-content">
                                <h2>Inspire-se na internet!</h2>
                                <p>Uma listinha de alguns sites inspiradores para a turma do front-end  (para os backs também!)</p>
                                <ul>
                                    <li><a href="https://medium.com/" target="_blanck">Medium <FaExternalLinkAlt className="link-external"/></a></li>
                                    <li className="link-left"><a href="https://design.google/" target="_blanck">Google Design <FaExternalLinkAlt className="link-external" /></a></li>
                                    <li><a href="https://br.pinterest.com/" target="_blanck">Pinterest <FaExternalLinkAlt className="link-external" /></a></li>
                                    <li className="link-left"><a href="https://www.behance.net/" target="_blanck">Behance <FaExternalLinkAlt className="link-external" /></a></li>
                                    <li><a href="https://github.com/" target="_blanck">GitHub <FaExternalLinkAlt className="link-external" /></a></li>
                                    <li className="link-left"><a href="https://www.youtube.com/channel/UCFuIUoyHB12qpYa8Jpxoxow" target="_blanck">Código Fonte TV <FaExternalLinkAlt className="link-external" /></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg" target="_blanck">Rocketseat <FaExternalLinkAlt className="link-external"/></a></li>
                                    <li className="link-left"><a href="https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw" target="_blanck">Filipe Deschamps <FaExternalLinkAlt className="link-external" /></a></li>
                                </ul>

                            </div>
                        </div>


                        <Link to="/referencias#main-content-reference-sites" className="next-content ">
                            Vamos conversar sobre o futuro<FaAngleDoubleRight size={24} />
                        </Link>
                    </div>
                    
                </main>

            </div>
        </div>
    )
}


export default Index;