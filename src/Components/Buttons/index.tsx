import { ReactNode } from "react"

type ButtonType = "btn1" | "btn2"|"btn3"
interface ButtonProps {
    styleTemplate?: ButtonType
    children: ReactNode

}

export const Button = ({ children, styleTemplate = "btn1" }: ButtonProps) => {
    return (<>
        <button className={`btn ${styleTemplate}`}>
            {children}

        </button>

    </>)
}