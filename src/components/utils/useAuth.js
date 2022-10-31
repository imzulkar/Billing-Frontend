import { useState } from "react";
import interceptor from "../utils/interceptor";
import { getAccessToken } from "../utils/localstorage";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  interceptor
    .post("user/token/verify/", {
      token: getAccessToken(),
    })
    .then((res) => {
      setLoggedIn(true);
      setLoading(false);
    })
    .catch((err) => {
      //   interceptor
      //     .post("user/token/refresh/", {
      //       refresh: getRefreshToken(),
      //     })
      //     .then((res) => {
      //       const { access, refresh } = res.data;
      //       setTokens(access, refresh);
      //       setLoggedIn(true);
      //       setLoading(false);
      //     })
      //     .catch((err) => {
      //       removeTokens();
      //       setLoggedIn(false);
      //       setLoading(false);
      //     });
      console.log(err);
    });

  return { loggedIn, loading };
};

export default useAuth;
