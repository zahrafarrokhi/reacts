### install 
```jsx
npx create-next-app frontend
npm run dev

```
![structureProject](./screenshots/structureProject.png)

#### Installing mui
[mui](https://mui.com/material-ui/getting-started/installation/)
```jsx
cd frontend 

npm install @mui/material @emotion/react @emotion/styled @emotion/server @emotion/cache

* @mui/material
* @emotion/react
* @emotion/server
* @emotion/styled
* @emotion/cache
```
#### How to use Material-UI with Next.js ?
[material-ui-with-next-js](https://www.geeksforgeeks.org/how-to-use-material-ui-with-next-js/)

##### Step 1: Create a custom file /pages/_document.js 
##### Step 2: Create an lib folder, add theme.js and createEmotionCache.js 
```jsx
// theme.js 
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
  
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});
  
export default theme;
//createEmotionCache.js
import createCache from '@emotion/cache';
  
export default function createEmotionCache() {
    return createCache({ key: 'css', prepend: true });
}
```
##### Step 3: Update the file /pages/_app.js 
#### import '../styles/globals.scss'; (npm i sass)
```jsx
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
```
##### Step 4: Update the file /pages/index.js 
```jsx
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">
						Next.js!</a> integrated with{" "}
					<a href="https://mui.com/">Material-UI!</a>
				</h1>
				<p className={styles.description}>
					Get started by editing{" "}
					<code className={styles.code}>
						pages/index.js</code>
				</p>

			</main>
		</div>
	);
}

```

##### Steps to run the application: To run the app, type the following command in the terminal.
```jsx
npm run dev

out => Welcome to Next.js! integrated with Material-UI!
```
