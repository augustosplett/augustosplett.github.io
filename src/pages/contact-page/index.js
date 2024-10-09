// pages/contact.js

import ContactForm from '@/components/contactForm';
import MainLayout from '@/components/layouts/MainLayout'

const ContactPage = () => {
  return (
    <MainLayout
    pageName={"Education"}
    > 
    <h1 style={{ fontSize: "2rem" }}>🤳 Send Me A Message </h1>
        <ContactForm />

    </MainLayout>

  );
};

export default ContactPage;
