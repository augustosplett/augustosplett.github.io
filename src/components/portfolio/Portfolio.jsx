import Title from '../title/Title'
import Section from '../section/Section'
import PolaroidPhoto from '../polaroidPhoto/PolaroidPhoto'

export default function Portfolio(){
    return(
        <Section>
          <Title>
            .portfolio
          </Title>
          <PolaroidPhoto
            path = "/img/memory-game.png"
            caption= "Memory Game"
            link = 'https://augustosplett.github.io/jogo-da-memoria/'
          />
        </Section>
    )
}