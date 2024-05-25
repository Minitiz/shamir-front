import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const ProtectedComponent = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const callApi = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await axios.get(
          "http://localhost:8080/api/v1/generate",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessage(response.data.message);
      } catch (error) {
        console.error(error);
      }
    };

    callApi();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h2>Protected API Response:</h2>
      <p>{message}</p>
    </div>
  );
};

export default ProtectedComponent;
