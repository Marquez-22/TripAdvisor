type LogoType="logoType"

interface LogoProps{
    styleTemplate?: LogoType

}

export const Logo =({styleTemplate="logoType"}:LogoProps)=>{
    return(<>
    <div className={`logo ${styleTemplate}`}>
        <img src="/img/tripvisorlogo.png"></img>
    </div>
    </>)
}