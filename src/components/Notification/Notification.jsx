import React from 'react';
import PropTypes from 'prop-types';

export function Notification({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};
