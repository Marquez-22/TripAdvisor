import { ButtonAlertas } from "../Buttons/Template/Alertas"
import { ButtonCarrito } from "../Buttons/Template/Carrito"
import { ButtonOpinion } from "../Buttons/Template/Opinion"
import { ButtonViajes } from "../Buttons/Template/Viajes"
import { Container } from "../Container"
import { InputSearch } from "../InputSearch"
import { Logo } from "../Logo"

type LogoIconsType = "LogoIconsType"

interface LogoIconsProps {
    styleTemplate?: LogoIconsType

}

export const LogoIcons = ({ styleTemplate = "LogoIconsType" }: LogoIconsProps) => {
    return (<>
        <div className={`LogoIcons ${styleTemplate}`}>
            
      <Container>
            <Logo/>
            <InputSearch />
            <ButtonOpinion />
            <ButtonViajes />
            <ButtonAlertas />
            <ButtonCarrito />
            </Container>
        </div>
    </>)
}