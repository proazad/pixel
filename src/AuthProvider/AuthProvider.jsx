import PropTypes from "prop-types";
import { createContext } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value="addedValue">{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
