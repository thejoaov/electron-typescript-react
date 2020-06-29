import { createGlobalStyle } from 'styled-components'

import githubBg from '../assets/github-bg.svg'

export default createGlobalStyle`
  html, body {
    width: 100%;
    height: 1080px;
    flex:1;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
  }

  webview {
    display: block;   /* iframes are inline by default */
    border: none;     /* Reset default border */
    height: 80vh;     /* Viewport-relative units */
    width: 95vw;
  }

  body {
    background: #f0f0f5 url(${githubBg}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    width:100%;
    height:100%;
    flex:1;
  }

`
