import React, {useState} from "react";
import Scooby from "./ImagensMain/scooby.png"
import Ben10 from "./ImagensMain/ben10.png"
import Looney from "./ImagensMain/looney.png"

import Gumball from "./ImagensMain/gumball.png"
import Meninas from "./ImagensMain/meninas.png"
import TomJerry from "./ImagensMain/tomejerry.png"
import * as S from "./MainStyle"
import Programacao from "../Programacao/Programacao.jsx"
//importando a programacao dentro da Main

//Sintaxe do useState
//const [estado, setEstado] = useState ()

//a segunda section utilizaremos o map, map é um metodo que mapeia (percorre) array []



function Main (){
    const [galeria, setGaleria] = useState ([
        Gumball, Meninas, TomJerry 
    ])

    return(
        <main>
            <S.PrimeiraSection>
            <img src={Scooby} alt="Desenho do Scooby-Doo"/>
            <img src={Ben10} alt="Desenho do Ben10"/>
            <img src={Looney} alt="Desenho Looney Tunes"/>
            </S.PrimeiraSection>
            <S.SegundaSection>
                {galeria.map((item)=>(
                    <img src={item} alt=""/>
                ))}
            </S.SegundaSection>
            <Programacao/>
        </main>
    )
}

export default Main