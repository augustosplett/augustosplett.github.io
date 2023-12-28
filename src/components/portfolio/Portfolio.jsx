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
            path = "https://image.ibb.co/b8UJBc/administration_architecture_big_ben_221166.jpg"
            caption= "London Phone"
          />
        </Section>
    )
}