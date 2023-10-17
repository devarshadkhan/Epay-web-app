import '@/styles/globals.css'
import { useEffect } from 'react';
import "react-phone-input-2/lib/style.css";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.css");
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
       <Component {...pageProps} />
    </>
  )
}
