import { Subtitle } from "./Subtitle"
import { Text } from "./Text"
import { Image } from "./Image"

export function Bio() {
    return(
        <div>
            <Subtitle text="Caroline Meira" />
            <Text content="Aluna da Reprograma, estou fazendo transição de carreira vindo da área de Administração, conheci a área de Front end, me identifiquei e tenho estudado desde então para trabalhar a área."/>
            <Image link="https://avatars.githubusercontent.com/u/109229549?s=400&u=f32dd71adb612bd3abf510320fdb5066de5106d9&v=4" />
        </div>
    )
}