import { ReactNode } from "react"

type TitleType = "Title" | "Title1" 
interface TitleProps {
    styleTemplate?: TitleType
    children?: ReactNode

}

export const Title = ({  children = "", styleTemplate = "Title" }: TitleProps) => {
    return (<>
        <div className={`Title ${styleTemplate}`}>
            {children}
        </div>
    </>)
}