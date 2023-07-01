
import { Container } from "../Container"
import { FooterInterno } from "../FooterInterno"
import { InputSelect } from "../InputSelect"
import { Text } from "../Text"
type FooterType = "Footer1" | "Footer2" | "Footer3"
interface FooterProps {
    styleTemplate?: FooterType


}

export const Footer = ({ styleTemplate = "Footer1" }: FooterProps) => {
    return (<>
        <div className={`Footer ${styleTemplate}`}>
            <Container>
                <FooterInterno />
                <div className="columna2">

                    <InputSelect styleTemplate="InputSelect1"

                        placeholder="Forma de Pago"
                    />
                </div>
                <div className="columna3">

                    <InputSelect styleTemplate="InputSelect1"

                        placeholder="Pais"
                    />
                </div>
            </Container>
        </div>

    </>)
}