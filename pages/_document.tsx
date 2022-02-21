import NextDocument from 'next/document';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
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
