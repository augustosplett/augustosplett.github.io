import Title from '../title/Title'
import Section from '../section/Section'
import ContactMenu from '@/components/contactMenu/ContactMenu'

export default function Contact(){
    return(

    <Section>
        <Title>
        .contact
        </Title>
        <p>
        Please reach me on:
        </p>
        <ContactMenu />
    </Section>
    )
}