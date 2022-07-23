import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';
import User from '../User/User';

const ProtectedRoute = ({path, element}) => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <User />;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
