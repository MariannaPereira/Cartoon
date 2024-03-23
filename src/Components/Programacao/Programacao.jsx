import React, {useState} from "react";
import Dexter from "./ImagemProgramacao/dexter.png"
import VacaFrango from "./ImagemProgramacao/vacafrango.png"
import Du from "./ImagemProgramacao/du.png"
import Coragem from "./ImagemProgramacao/coragem.png"
import Jorel from "./ImagemProgramacao/jorel.png"
import Monica from "./ImagemProgramacao/monica.png"
import Steven from "./ImagemProgramacao/steven.png"
import BillyEMandy from "./ImagemProgramacao/billy.png"
import * as S from "./ProgramacaoStyle.jsx"





function Programacao(){
    const [desenhos, setDesenhos] = useState ([
        {nome: "O LABORATÓRIO DE DEXTER", hora: "07:00h", imagem: Dexter, desenhosManha: true },
        {nome: "A VACA E O FRANGO" , hora:"08:00h", imagem: VacaFrango, desenhosManha: true },
        {nome: "DU, DUDU E EDU" , hora: "09:00h", imagem: Du, desenhosManha: true},
        {nome: "CORAGEM, O CÃO COVARDE", hora: "10:00h", imagem: Coragem, desenhosManha: true},
        {nome: "IRMÃO DO JOREL", hora: "11:00h", imagem: Jorel, desenhosManha: true },
        {nome: "TURMA DA MÔNICA JOVEM", hora: "12:00h", imagem: Monica, desenhosManha: false},
        {nome: "STEVEN UNIVERSO", hora: "13:00h", imagem: Steven, desenhosManha: false},
        {nome: "BILLY E MANDY", hora: "14:00h", imagem: BillyEMandy, desenhosManha: false}
    ])

const desenhosAntesMeioDia = desenhos.filter((item)=> item.desenhosManha === true)

    return(
        <S.ConteudoProgramacao>

        <S.SectionProgramacao>
           {desenhos.map((item)=>(
            <S.Div>
            <h3>{item.nome}</h3>
            <h3>{item.hora}</h3>
            <img src={item.imagem} alt=""/>
            </S.Div>
           ))}
        </S.SectionProgramacao>


        </S.ConteudoProgramacao>
    )
}

export default Programacao


