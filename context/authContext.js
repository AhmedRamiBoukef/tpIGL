import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { useEffect, useState, useContext, createContext } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: "",
    user: {},
  });

  const setUserAuthInfo = async ({ token }) => {
    let user;
    if (token) {
      user = await fetch("http://127.0.0.1:8000/user_detail/", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      user = await user.json();
    } else {
      user = null;
    }
    await localStorage.setItem("user", JSON.stringify({ token, user }));
    await setAuthState({
      token,
      user,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () =>
    Boolean(JSON.parse(localStorage.getItem("user"))?.token);

  useEffect(() => {
    const { token, user } = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      setAuthState({ token, user });
    }
  }, []);

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};
const ProtectRoutes = ({ children }) => {
  const [initialRender, setIntitialRender] = useState(false);
  const authContext = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    setIntitialRender(true);
  }, []);
  if (!initialRender) {
    return null;
  }
  return authContext.isUserAuthenticated() && router.pathname === "/"
    ? router.replace("/app") && null
    : !authContext.isUserAuthenticated() && router.pathname !== "/"
    ? router.replace("/") && null
    : children;
};
export { AuthContext, AuthProvider, ProtectRoutes };
