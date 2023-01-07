import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider, ProtectRoutes } from "../context/authContext";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
 import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ProtectRoutes>
          <Component {...pageProps} />
        </ProtectRoutes>
        <ToastContainer />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
