import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components"
import SendIcon from '@material-ui/icons/Send';

export const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_45glgvg', 'template_618obgq', form.current, 'KJYp9oQqydHGE5fAr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container>
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send Message" />
      </form>
  </Container>
  );
};

export default ContactUs

const Container = styled.div`
  text-align: left;
  margin: 1rem;

  h1 {
    margin: 2rem 0;
  }

  label {
    display: block;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: .5rem;
    margin-bottom: 1rem;
    border: 1px solid gray;
    border-radius: .3rem;
    outline: none;
  }

  textarea {
    width: 100%;
    border-radius: .3rem;
    height: 10rem;
    outline: none;
    border: 1px solid gray;
    padding: .5rem;
  }

  input[type="submit"]{
    width: unset;
    padding: .4rem 1.4rem;
    margin-top: 1rem;
    font-weight: bold;
    border-radius: .3rem;
    border: 1px solid gray;
    cursor: pointer;

    &:hover {
      background: gray;
      color: white;
    }
  }

  @media (min-width: 768px) {
    width: 500px;
    margin: 4rem auto;
  }
`
