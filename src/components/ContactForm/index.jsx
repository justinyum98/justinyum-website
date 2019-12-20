import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import useForm from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { SEND_CONTACT_INFO } from '../../graphql/mutations';

function ContactForm() {
  const [sendContactInfo] = useMutation(SEND_CONTACT_INFO);
  const {
    register, handleSubmit, errors,
  } = useForm();

  const onSubmit = ({ fullName, emailAddress, message }) => {
    sendContactInfo({
      variables: {
        fullName,
        emailAddress,
        message,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="fullName"
        label="Full Name"
        required
        variant="filled"
        inputRef={register({
          required: true,
        })}
        error={!!errors.fullName}
        helperText={
          errors.fullName && 'Input is required.'
        }
      />
      <TextField
        name="emailAddress"
        label="Email Address"
        required
        variant="filled"
        inputRef={register({
          required: true,
          pattern: /\S+@\S+\.\S+/,
        })}
        error={!!errors.emailAddress}
        helperText={
          errors.emailAddress && 'Valid email address is required.'
        }
      />
      <TextField
        name="message"
        label="Message"
        required
        variant="filled"
        inputRef={register({
          required: true,
        })}
        error={!!errors.message}
        helperText={
          errors.message && 'Input is required.'
        }
      />
      <Button
        type="submit"
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
