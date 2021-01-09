import React from 'react';
import { Redirect } from 'react-router-dom';

const NotFound: React.FC = () => {
  return <Redirect to="/home?page=about" />;
}

export default NotFound;