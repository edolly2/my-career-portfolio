import ContactForm from '../_components/ContactForm';
import styled from 'styled-components';

const ContactPageContent = styled.div`
  height: 100%;
  width: 100%;
`;
const ContactPage = () => {
  return (
    <ContactPageContent>
      <ContactForm />
    </ContactPageContent>
  );
};

export default ContactPage;
