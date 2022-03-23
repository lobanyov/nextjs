import { languages } from '../configs';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class _Document extends Document {
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(context);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang={languages.ru}>
        <Head/>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default _Document;
