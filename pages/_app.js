import { AppProvider } from "../components/Context";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
