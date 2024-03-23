import React from "react";
import * as S from "./HeaderStyle" 
// import * esta resetando todo o css, import tudo como S, vai importar todas as const criadas lá 
// import (*) tudo como S de "./caminho"
import Logo from "../../assets/logo.png"
import Jogos from "../../assets/controle.png"
import Relogio from "../../assets/relogio.png"

function Header(){
    return(
        <S.StyleHeader>
            <img src={Logo} alt="Logo do Cartoon"/>

            <S.StyleSection>
                <S.StyleDiv>
                    <img src={Jogos} alt=""/> 
                    <h2>JOGOS</h2>
                </S.StyleDiv>
                <S.StyleDiv>
                    <img src={Relogio} alt=""/>
                    <h2>PROGRAMAÇÃO</h2>
                </S.StyleDiv>
            </S.StyleSection>
        </S.StyleHeader>
    )
}

export default Header