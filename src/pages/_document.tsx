import NextDocument from 'next/document';
import { Html } from 'next/document';
import { Head } from 'next/document';
import { Main } from 'next/document';
import { NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <title>Typeify</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=block" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300&display=block" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
