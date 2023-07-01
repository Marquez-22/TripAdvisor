
import { InputSelect } from "../InputSelect"
import { Text } from "../Text"
type FooterInternoType = "FooterInterno" | "FooterInterno2" | "FooterInterno3"
interface FooterInternoProps {
    styleTemplate?: FooterInternoType
}

export const FooterInterno = ({ styleTemplate = "FooterInterno" }: FooterInternoProps) => {
    return (<>
        <div className={`FooterInterno ${styleTemplate}`}>
            <div className="clmn1">
                <img src="/img/logo2.png" className="logo"></img>
            </div>
            <div className="clmn2">
                <div className="derechosreservados">
                    <Text styleTemplate="text2">
                        © 2023 Tripadvisor LLC Todos los derechos reservados
                    </Text>
                </div>
                <Text styleTemplate="text3">
                    <div className="textline">

                        <span>  Condiciones de uso</span>
                        <span> Declaración de privacidad y de cookies</span>

                        <span> Consentimiento de cookie</span>

                        <span>Mapa del sitio </span>

                        <span> Cómo funciona el sitio</span>

                        <span> Contáctanos</span>
                    </div>
                </Text>

            </div>

            <div className="clmn3">
                <Text styleTemplate="text2">
                    Esta es la versión de nuestro sitio web destinada a quienes hablen español en Colombia. Si eres residente de otro país o región, selecciona la versión correcta de Tripadvisor para tu país o región en el menú desplegable. más
                </Text>

            </div>



        </div>

    </>)
}