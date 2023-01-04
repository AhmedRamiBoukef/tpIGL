import { useRouter } from "next/router";
import { useEffect, useState, useContext, createContext } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: "",
  });

  const setUserAuthInfo = ({ token }) => {
    localStorage.setItem("user", JSON.stringify({ token }));
    setAuthState({
      token,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () =>
    Boolean(JSON.parse(localStorage.getItem("user"))?.token);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    if (token) {
      setAuthState({ token });
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
