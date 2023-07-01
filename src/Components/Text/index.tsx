import { ReactNode } from "react"

type TextType = "text" | "text1" | "text2" | "text3"|"text4"|"text5"|"text6"
interface TextProps {
    styleTemplate?: TextType
    children?: ReactNode

}

export const Text = ({  children = "", styleTemplate = "text" }: TextProps) => {
    return (<>
        <div className={`text ${styleTemplate}`}>
            {children}
        </div>
    </>)
}