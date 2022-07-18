import styled from 'styled-components';
const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 45vh;
  /* align-items: center; */
  justify-content: center;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* width: 25vw; */
  /* height: 50vw; */
  /* padding: 20px 50px; */
  background-color: green;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 0 30px 0;
  box-shadow: 0px 0px 20px rgba(85, 85, 85, 0.5);
`;

const FormTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 30px 0;
  background-color: blue;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;
  padding: 20px 0;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;
const Input = styled.input`
  padding: 2px 0 2px 5px;
  border-radius: 6px;
  border: none;
  margin: 0 5px;
  &::placeholder {
    color: rgb(175, 175, 175);
  }
`;
const TextArea = styled.textarea`
  resize: none;
  padding: 2px 0 2px 5px;
  border-radius: 6px;
  border: none;
  width: 100%;
  &::placeholder {
    color: rgb(175, 175, 175);
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  /* align-items: flex-end; */
`;

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 0 20px;
  /* align-items: flex-end; */
`;
const ContactForm = () => {
  return (
    <FormWrapper>
      <Form>
        <FormTitle>I Would Love to Hear From You!</FormTitle>
        <InputGroup>
          <InputWrapper>
            <Label htmlFor='name'>Name</Label>
            <Input
              type='text'
              name='name'
              id='name'
              placeholder='John Doe'
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='Example@email.com'
              required
            />
          </InputWrapper>
        </InputGroup>
        <TextAreaWrapper>
          <Label htmlFor='message'>Message</Label>
          <TextArea
            name='message'
            id='message'
            cols='40'
            rows='10'
            placeholder='Your Thoughts...'
            required
          />
        </TextAreaWrapper>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
