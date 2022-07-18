import styled from 'styled-components';
const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 70vh;
  /* align-items: center; */
  justify-content: center;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* width: 25vw; */
  /* height: 50vw; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Label = styled.label``;
const Input = styled.input``;
const TextArea = styled.textarea`
  resize: none;
`;
const ContactForm = () => {
  return (
    <FormWrapper>
      <Form>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' name='name' id='name' required />
        <Label htmlFor='email'>Email</Label>
        <Input type='email' name='email' id='email' required />
        <Label htmlFor='message'>Message</Label>
        <TextArea name='message' id='message' cols='30' rows='10' required />
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
