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


const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component, pageProps, emotionCache =
  clientSideEmotionCache,
}) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>

        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>

    </CacheProvider>
  );
}

export default MyApp;