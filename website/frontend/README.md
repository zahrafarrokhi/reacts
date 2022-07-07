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
[Next.Js + MUI v5 tutorial](https://dev.to/hajhosein/nextjs-mui-v5-tutorial-2k35)

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
#### eslint config
```jsx
{
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended", "plugin:react/recommended", "next",
		"next/core-web-vitals", "airbnb"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"react/react-in-jsx-scopre": "off"
	}
}


```

#### Install Tailwind CSS with Next.js
[Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
```jsx
// install
npm install -D tailwindcss postcss autoprefixer
// create postcss.config.js
npx tailwindcss init -p
```
###### tailwind.config.js
```jsx
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

###### Add the Tailwind directives to your CSS
```jsx
// globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

###### Start using Tailwind in your project
```jsx
// index.js
export default function Home() {
  return (
 <h1 className="text-3xl font-bold underline ">
                   Hello world!
  </h1>
  )
}

```

##### add fonts
```jsx
1_puplic/fonts
2_styles/_fonts.scss
3_styles/globals.scss
@import "fonts";
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;

  font-family: "IRANSansMobile" !important;
  @screen md {
    font-family: "IRANSans" !important;
  }
}
```
```jsx
4_
// tailwind.config.js
 extend: {
      fontFamily: {
        iranSansWeb: 'iranSansWeb',
        iranSansMobile: 'iranSansMobile',
        iranSansLight: 'iranSansLight',
        iranSansBold: 'iranSansBold',
        hack: 'HACK',
        hackwin: 'HACKWIN',
        anonymice: 'anonymice',
        anonymiceWin: 'anonymice-win',
      },}
```
```jsx
// test
//index.js
<h1 className="text-3xl font-bold underline bg-secondary font-['hackwin']">
                   Hello world!
</h1>
// console.log
.font-\[\'hackwin\'\] {
    font-family: 'hackwin';
}
```

##### add ar config
```jsx
// next.config.js 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,	  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['ar'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'ar',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    // ],
  },

}	

module.exports = nextConfig

//  
// pages/_document.js
// Done! (with install mui)

```

##### globals.scss
```jsx
#__next {
  height: 100%;
  width: 100vw;
}
```

#### add svg config
```jsx
npm i @svgr/webpack
```
```jsx
// next.config.js 
/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['ar'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'ar',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    // ],
  },
  exclude: /\.svg$/,
  poweredByHeader: false,
  inlineImageLimit: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
        // test: /\.(js|ts)x?$/,
      },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },

};

module.exports = nextConfig;

```

#### layout
`pages/_app.js`

[layout nextjs](https://nextjs.org/docs/basic-features/layouts#per-page-layouts)

```jsx
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

```
`index.js`
```jsx
import Head from "next/head";
import LoginLayout from "../components/LoginLayout";

export default function Home() {
  return <div className="flex flex-col items-center  h-full justify-center">
    <h1>Layout</h1>
  </div>;
}

//getLayout
Home.getLayout = (page) => <LoginLayout > {page}</LoginLayout>;

```

`components/LoginLayout.jsx`

```jsx
//flex
//imrc
import React from 'react';
//sfc
const LoginLayout = (props) => {
  const { children } = props;
  return ( 
// flex flex-col w(center) => items-center 
// flex flex-col h(center) => justify-center dosent work then => h-full justify-center
//min-h-screen	=> min-height: 100vh;
//overflow-y-auto overflow-x-hidden
//bg-background
    <div className="flex flex-col items-center  h-full justify-center min-h-screen  overflow-y-auto overflow-x-hidden bg-background  ">
   {/* // flex flex-col  w-[80%] h-[33rem] or h-auto desktop relative mobile absoulte*/}

      <div className="flex flex-col w-[80%] h-[33rem]  bg-white drop-shadow-lg rounded-[16px] border-[#f4f5f8] absolute top-[15%] left-[5%] right-[5%] md:relative md:top-[0] md:left-0 md:right-0">
       {children}
      </div>
   </div>    
   );
}
 
export default LoginLayout;

```
![layout](./screenshots/Layout.png)

### add back icons to layout

```jsx
1- npm i react-icons
2- npm i @mui/icons-material
3- import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
4- const { children, backlink } = props;
5-  <ArrowBackRoundedIcon  className={backlink ? "" : "hidden"}  />
6- Utilities for styling the fill of SVG elements.=> fill-darkgray
7- 
//index.js
//props => backlink
//getLayout
Home.getLayout = (page) => <LoginLayout backlink> {page}</LoginLayout>;         
         
       

```
### add router link
```jsx
1-import { useRouter } from "next/dist/client/router";
2-const router = useRouter();
3- <ArrowBackRoundedIcon  className={backlink ? "" : "hidden"}  onClick={() => router.back()} />
```
### login
`http://localhost:3000/auth/login`
###### state
```jsx
//state
 // ToggleButtonGroup,ToggleButton,InputLabel
  const [state, setState] = useState("email");
  // TextField
  const [value, setValue] = useState();
```
### button (mui)
```jsx
import { Button } from "@mui/material";
//1
//w-full sm:w-auto
  <div className="w-full sm:w-auto">
        <Button
          variant="contained"
          className="w-full sm:w-auto py-3 px-18 sm:px-32"
          onClick={() =>submit()}
        >
          مرحله بعد
        </Button>
 </div>
 //2 w-[240px] md:w-[400px]
  <div className="flex flex-col mb-12">
        <Button
          variant="contained"
          className="w-[240px] md:w-[400px] h-[3.5em] rounded-[10px] p-3 text-[15px] bg-primary"
          color="primary"
          onClick={submit}
        >
          مرحله‌ بعد
        </Button>
 </div>
 // add bg-primary to className  or lib/theme.js define primary
//tailwind.config.js
//  corePlugins: { 
  //    preflight: false, 
  //  },

```
##### point (btn)
[point](https://tailwindcss.com/docs/preflight)
```jsx
1. add bg-primary or lib/theme.js define primary
//tailwind.config.js
2.  corePlugins: { 
     preflight: false, 
   },
```

###### mui (login page)
```jsx
ToggleButtonGroup,
ToggleButton,
InputLabel
TextField
```

#### utils (login page)
```jsx
// Whatever was not a number ([^\d]), replace it with an empty string.
export const preventLettersTyping = (x) => x.replace(/[^\d]/g, '')
// arabic & persion
export const persianToEnglishDigits = (digit) => String(digit)
  .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
  .replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));


```
![login](./screenshots/login.png)