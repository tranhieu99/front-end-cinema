import React from 'react';
import { Link } from 'react-router-dom';

const Example = ({movie_name}) => {
  return (
    <ul class="breadcrumb-single">
        <li><Link to="/">Home | </Link></li>
        <li active>{movie_name}</li>
    </ul>
  );
};

export default Example;
