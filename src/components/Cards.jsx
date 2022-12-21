import {Subtitle} from './Subtitle'
import {Text} from './Text'
import {Image} from './Image'

export function Cards() {
    return(
        <div>
            <div>
                <Subtitle texto="Git" />
                <Text content="O Git é um sistema para controlar versão de códigos e é usado pela grande maioria das pessoas desenvolvedoras atualmente. Isso significa dizer que usando o git a gente pode esquecer o medo de perder alcuma alteração
                que a gente fez no nosso código. Ou se a gente precisar trabalhar em equipe fica super fácil de identificar quem mexeu em cada linha de código ou como resolver conflitos se as pessoas mexerem nas mesmas linhas."/>
                <Image link="https://c.tenor.com/zcBnwpK04MUAAAAC/thinking-issa-rae.gif" />
            </div>

            <div>
                <Subtitle texto="HTML" />
                <Text content="HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa: Linguagem de Marcação de Hipertexto, é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML."/>
                <Image link="https://media.tenor.com/xS_tROyeTWoAAAAd/10.gif" />
            </div>

            <div>
                <Subtitle texto="CSS" />
                <Text content="CSS é a sigla para o termo em inglês Cascading Style Sheets que, traduzido para o português, significa Folha de Estilo em Cascatas. O CSS é utilizado com as linguagens de marcação HTML ou XHTML"/>
                <Image link="https://media.tenor.com/GxjCdYluvgQAAAAC/css-css-magic.gif" />
            </div>

            <div>
                <Subtitle texto="JavaScript" />
                <Text content="JavaScript é uma linguagem de programação utilizada para desenvolvimento web. É a linguagem que dá dinamismo e insere itens mais “complexos” em um site, fornecendo uma experiência melhor ao usuário. "/>
                <Image link="https://media.tenor.com/kHAQm22XApAAAAAM/js-bird-javascript-bird.gif" />
            </div>
        </div>
    )
}