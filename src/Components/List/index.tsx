
import { Text } from "../Text"

import { ChevronDown } from "../../SVG/chevronDown"
import { ReactNode, useState } from "react"
import { Title } from "../Title"

type ListType = "List1" | "List2" | "List3"
interface ListProps {
    styleTemplate?: ListType
    title: string
    children: ReactNode
}

export const List = ({ title, styleTemplate = "List1", children }: ListProps) => {
    const [active, setactive] = useState(false)
    const ocultar = () => {
        setactive(!active)
    }


    return (<>
        <div className={`List ${styleTemplate} ${active ? "active" : "inactive"}`}

            onClick={ocultar}
        >

            <Title styleTemplate="Title1">
                {title}
            </Title>
            <ChevronDown
            />
            <div className="contenido">
                {children}
            </div>

        </div>

    </>)
}