// pages/contact.js

import ContactForm from '@/components/contactForm';
import MainLayout from '@/components/layouts/MainLayout'

const ContactPage = () => {
  return (
    <MainLayout
    pageName={"Education"}
    > 
        <div>
        <h1>Fale Conosco</h1>
        <ContactForm />
        </div>
    </MainLayout>

  );
};

export default ContactPage;
