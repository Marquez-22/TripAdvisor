import { ReactNode } from "react"
import { Title } from "../Title"
import { Text } from "../Text"
import { CircleHearts } from "../CircleHearst"

type ImgTitleTextType = "ImgTitleText1" | "ImgTitleText2" | "ImgTitleText3"
interface ImgTitleTextProps {
    styleTemplate?: ImgTitleTextType
    img: string
    title: string
    text: string
}

export const ImgTitleText = ({ title, text, img, styleTemplate = "ImgTitleText1" }: ImgTitleTextProps) => {
    return (<>
        <div className={`ImgTitleText ${styleTemplate}`}>
            <div className="contentHeartsImg">
                <div className="hearts">
                    <CircleHearts />
                </div>
                <img src={img} className="TouriSites">

                </img>
            </div>


            <div className="content">
                <Title styleTemplate="Title1">
                    {title}
                </Title>
                <Text styleTemplate="text">
                    {text}
                </Text>
            </div>

        </div>

    </>)
}