import { gql } from 'apollo-boost';

const SEND_CONTACT_INFO = gql`
  mutation SendContactInfo($fullName: String!, $emailAddress: String!, $message: String!) {
    sendContactInfo(fullName: $fullName, emailAddress: $emailAddress, message: $message) {
      fullName
      emailAddress
      message
    }
  }
`;

export {
  SEND_CONTACT_INFO,
};
