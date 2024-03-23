import Warner from "./ImagensFooter/warner.png"
import GitHub from "./ImagensFooter/git.png"
import Linkedin from "./ImagensFooter/linkedin.png"
import * as S from "./FooterStyle"

function Footer(){
    return(
        <footer>

            <S.StyleSection>
                <img src={Warner} alt=""/>
                <S.UL>
                    <li>Sobre nós</li>
                    <li>Produtos</li>
                    <li>Personagens</li>
                </S.UL>

                <S.Div>
                    <img src={GitHub} alt=""/>
                    <img src={Linkedin} alt=""/>
                </S.Div>
            </S.StyleSection>

            <S.SegundaSection>
                <p>© 2024 Cartoon Network</p>
            </S.SegundaSection>
        </footer>
    )
}

export default Footer