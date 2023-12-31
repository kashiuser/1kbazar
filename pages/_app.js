import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import "../components/sidebar/sidenav.css";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
