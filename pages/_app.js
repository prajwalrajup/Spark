import "@styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

function Application({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
