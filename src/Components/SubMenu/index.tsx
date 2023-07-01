import { Ellipsis } from "@/SVG/ellipsis"
import { Text } from "../Text"
import { useState } from "react"


type SubMenuType = "SubMenuType"

interface SubMenuProps {
    styleTemplate?: SubMenuType


}

export const SubMenu = ({ styleTemplate = "SubMenuType" }: SubMenuProps) => {
    const [active, setActive] = useState(false)
    const onToggleActive = () => {
        setActive(pre=>!pre)
    }
    const ListOpctions = ["Visitas Turisticas", "Agregar un lugar ", "Foro de Viajes", "Aerolineas", "Centro de Ayuda"]


    return (<>
        <div className={`SubMenu ${styleTemplate} ${active?"active":""}`}>
           <div onClick={onToggleActive}>
           <Ellipsis />
           </div>
            
            <div  className="contentOptions">
            {
                ListOpctions.map((element, index) => {
                    return <>
                        <div key={index} className="itemOptions">
                            <Text
                                styleTemplate="text"
                            >{element}</Text>
                        </div>

                    </>


                })
            }
            </div>


        </div>
    </>)
}