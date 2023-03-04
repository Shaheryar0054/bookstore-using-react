import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired, // Add this line
};

export default Book;
