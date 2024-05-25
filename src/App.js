import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedComponent from "./ProtectedComponent";

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Auth0 Authentication</h1>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}

      {isAuthenticated && (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      )}

      {isAuthenticated && <ProtectedComponent />}
    </div>
  );
};

export default App;
