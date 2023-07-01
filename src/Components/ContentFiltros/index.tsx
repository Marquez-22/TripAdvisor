import { ReactNode } from "react"
import { Title } from "../Title"
import { Text } from "../Text"
import { List } from "../List"
import { ImgTitleText } from "../ImgTitleText"
import { InputCheckbox } from "../InputCheckbox"

type ContentFiltrosType = "ContentFiltros1" | "ContentFiltros2" | "ContentFiltros3"
interface ContentFiltrosProps {
    styleTemplate?: ContentFiltrosType
}

export const ContentFiltros = ({ styleTemplate = "ContentFiltros1" }: ContentFiltrosProps) => {
    return (<>
        <div className={`ContentFiltros1 ${styleTemplate}`}>
            <div className="columna1">
                <Title styleTemplate="Title1">
                    Tipos de Categoria
                </Title>
                <Text styleTemplate="text5">
                    Atracciones
                    <br />
                    Tours
                    <br />
                    Escapada de un dia
                </Text>
                <Text styleTemplate="text6">
                    Mostrar Menos
                </Text>
                <List
                    title="Actividades al aire libre"
                >
                    <InputCheckbox>Tours ecologico</InputCheckbox>
                    <InputCheckbox>tour de naturaleza y vida silvestre</InputCheckbox>
                </List>
            </div>
            <div className="columna2">

                <ImgTitleText
                    img="/img/img2.jpg"
                    title="1) Visita Pamplona"
                    text="Tours culturales •Tours ecológicos"
                />
            </div>


        </div>


    </>)
}