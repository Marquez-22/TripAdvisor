


type HeaderPageType = "HeaderPage1" | "HeaderPage2" | "HeaderPage3"
interface HeaderPageProps {
    styleTemplate?: HeaderPageType


}

export const HeaderPage = ({ styleTemplate = "HeaderPage1" }: HeaderPageProps) => {
    return (<>
        <div className={`HeaderPage ${styleTemplate}`}>
          

        </div>

    </>)
}