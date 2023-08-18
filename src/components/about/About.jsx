import Title from '../title/Title'
import Section from '../section/Section'
import Paragraph from '../paragraph/Paragraph'

export default function About(){
    return(
        <div style={{marginTop:10 + 'vh'}}>
            <Section> 
                <Title>
                .about
                </Title>
                <Paragraph>
                    Hello there! I&apos;m thrilled to share my journey with you. Over the past six dynamic years in the technology industry, I&apos;ve gained valuable experience that showcases my adaptability and eagerness to learn. I&apos;ve had the opportunity to explore diverse sectors like finance, services, and outsourcing companies, allowing me to seamlessly embrace new challenges and technologies.
                </Paragraph>
                <Paragraph>
                    My real passion lies in problem-solving and coding. As a junior enthusiast, I&apos;m currently immersed in the world of JavaScript, React, NextJS, and C#. With each line of code, I&apos;m taking strides towards becoming a skilled developer. While my journey is still in its early stages, I&apos;m armed with a toolkit of determination and a willingness to dive deep into projects, absorbing every learning opportunity along the way.
                </Paragraph>
                <Paragraph>
                    Thank you for joining me on this exciting path of growth and development. Through my portfolio, you&apos;ll witness not only my projects but also my unwavering commitment to evolving as a developer. Let&apos;s embrace the coding adventures ahead and turn aspirations into accomplishments, one line of code at a time!
                </Paragraph>
            </Section>
        </div>
    )
}