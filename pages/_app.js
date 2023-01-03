import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider, ProtectRoutes } from "../context/authContext";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProtectRoutes>
        <Component {...pageProps} />
      </ProtectRoutes>
      <ToastContainer />
    </AuthProvider>
  );
}

export default MyApp;
