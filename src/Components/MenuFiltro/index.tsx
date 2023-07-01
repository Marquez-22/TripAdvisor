import { ChevronRight } from "@/SVG/chevronRight"
import { Text } from "../Text"

type MenuFiltroType = "MenuFiltroType"

interface MenuFiltroProps {
    styleTemplate?: MenuFiltroType


}

export const MenuFiltro = ({ styleTemplate = "MenuFiltroType" }: MenuFiltroProps) => {
    const ListaTexto = ["America del Sur", "Colombia", "Departamento Norte de Santander", "Cucuta", "¿Que hacer en Cucuta?", "Tours de Naturaleza y vida silvestre en Cucuta",]
    return (<>

        <div className={`MenuFiltro ${styleTemplate}`}>
            {
                ListaTexto.map((element, index) => {
                    return <>
                        <div key={index} className="contentText">
                            <Text
                                styleTemplate="text2"
                            >{element}</Text>
                            <ChevronRight />
                        </div>
                    </>
                })
            }



        </div>

    </>)
}