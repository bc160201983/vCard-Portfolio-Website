import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" name="title" content="Muhammad Bilal" />
          <meta property="og:image" content="/ss.png" />
          <meta
            property="og:description"
            content="Muhammad Bilal is a Software Engineer ,who likes building stuff related to web."
          />
          <meta
            name="keywords"
            content="bilalafzaal , Muhammad Bilal, Muhammad Bilal portfolio, software engineer pakistan, frontend software engineer, software engineer pakistan, javascript developer, javascript engineer react developer, react developer portfolio"
          />
          <meta
            name="description"
            content="Muhammad Bilal is a Software Engineer ,who likes building stuff related to web."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
