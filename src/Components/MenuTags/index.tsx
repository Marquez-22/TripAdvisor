import { Container } from "../Container"
import { SubMenu } from "../SubMenu"
import { Text } from "../Text"

type MenuTagsType = "MenuTagsType"

interface MenuTagsProps {
    styleTemplate?: MenuTagsType


}

export const MenuTags = ({ styleTemplate = "MenuTagsType" }: MenuTagsProps) => {
    return (<>
        <div className={`MenuTags ${styleTemplate}`}>
            <Container>
                <Text>Inicio</Text>
                <Text>Cucuta</Text>
                <Text>Hoteles</Text>
                <Text>Cosas que hacer</Text>
                <Text>Restaurantes</Text>
                <Text>Vuelos</Text>
                <Text>Casas de Vacaciones</Text>
                <Text>Historias de Viajes</Text>
                <Text>Cruceros</Text>
                <Text>Alquiler de Autos</Text>
                <SubMenu />
            </Container>

        </div>

    </>)
}