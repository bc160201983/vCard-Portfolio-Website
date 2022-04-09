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
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/vcard-b7a06.appspot.com/o/Screenshot%202022-04-09%20213143.png?alt=media&token=dc0b9747-6827-46b7-91a9-96d3f8767387"
          />
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
