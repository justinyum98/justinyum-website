/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const RouteLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

export default RouteLink;
