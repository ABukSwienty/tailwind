import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="DESCRIPTION TAG" />
          <meta name="keywords" content="KEYWORDS TAG" />
          <meta name="author" content="Alexander Buk-Swienty" />
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="h-full bg-red-600 font-vietnam antialiased">
          <div id="overlay" className="relative z-50" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
