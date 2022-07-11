// import '../styles/globals.css'
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
// export default MyApp


//mui
// import '../styles/globals.css'
import '../styles/globals.scss';
// import 'tailwindcss/tailwind.css';
import theme from '../lib/theme';
import createEmotionCache from '../lib/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/system';
import { useStore } from 'react-redux';
import { wrapper } from '../lib/store'


const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component, pageProps, emotionCache =
  clientSideEmotionCache,
}) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const store = useStore();
  return (
    <PersistGate persistor={store.__PERSISTOR} loading={null}>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>

        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>

    </CacheProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp)