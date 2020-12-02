import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa'


import "../styles/pages/reference.css"

function Index() {
    const { hash } = useLocation();

    console.log(hash)

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
        <div>
            <div id="page-reference">

               

            </div>
        </div>
    )
}


export default Index;