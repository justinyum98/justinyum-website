import React from 'react';
import PropTypes from 'prop-types';
import useForm from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';

function ContactForm({ onSubmit }) {
  const {
    register, handleSubmit, errors,
  } = useForm();

  const onSubmitClick = (data, e) => {
    e.target.reset();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitClick)}>
      <Grid container direction="row" justify="center" alignItems="baseline" spacing={4}>
        <Grid item xs={11} md={7}>
          <TextField
            name="fullName"
            label="Full Name"
            required
            variant="filled"
            fullWidth
            size="medium"
            inputRef={register({
              required: true,
            })}
            error={!!errors.fullName}
            helperText={
              errors.fullName && 'Input is required.'
            }
          />
        </Grid>
        <Grid item xs={11} md={7}>
          <TextField
            name="emailAddress"
            label="Email Address"
            required
            variant="filled"
            fullWidth
            size="medium"
            inputRef={register({
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
            error={!!errors.emailAddress}
            helperText={
              errors.emailAddress && 'Valid email address is required.'
            }
          />
        </Grid>
        <Grid item xs={11} md={7}>
          <TextField
            name="message"
            label="Message"
            multiline
            rows="3"
            rowsMax="5"
            required
            variant="filled"
            fullWidth
            size="medium"
            inputRef={register({
              required: true,
            })}
            error={!!errors.message}
            helperText={
              errors.message && 'Input is required.'
            }
          />
        </Grid>
        <Grid item xs={11} md={7}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

ContactForm.defaultProps = {
  onSubmit: undefined,
};

export default ContactForm;
