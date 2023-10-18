import { store } from '@/features/app/store';
import '@/styles/globals.css'
import { useEffect } from 'react';
import "react-phone-input-2/lib/style.css";
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.css");
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
    </>
  )
}
