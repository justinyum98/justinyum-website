import React from 'react';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/react-hooks';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ContactForm from '../ContactForm';
import { SEND_CONTACT_INFO } from '../../graphql/mutations';

export default function Contact() {
  const { enqueueSnackbar } = useSnackbar();

  const stackSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const [sendContactInfo] = useMutation(SEND_CONTACT_INFO, {
    ignoreResults: true,
    onCompleted: () => stackSnackbar('Successfully sent message!', 'success'),
    onError: ({ message }) => stackSnackbar(`Error: ${message}`, 'error'),
  });

  const onSubmit = ({ fullName, emailAddress, message }) => {
    sendContactInfo({
      variables: {
        fullName,
        emailAddress,
        message,
      },
    });
    stackSnackbar('Sending message...', 'default');
  };

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box>
          <Typography variant="h2">
            Contact Me
          </Typography>
        </Box>
        <Box mb={4}>
          <Typography variant="subtitle1" align="center">
            Have any questions?
            <br />
            Want to work together?
            <br />
            Just want to chat?
            <br />
            Shoot me a message!
          </Typography>
        </Box>
      </Box>
      <ContactForm onSubmit={onSubmit} />
    </div>
  );
}
