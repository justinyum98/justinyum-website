import React from 'react';
import PropTypes from 'prop-types';

function Project({ project }) {
  return (
    <div>
      {project}
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    repo: PropTypes.string,
  }),
};

Project.defaultProps = {
  project: {
    name: '(Name of the project)',
    role: '(My role in this project)',
    date: '(Month Year - Month Year)',
    description: '(Description)',
    repo: '(Github repo)',
  },
};

export default Project;
