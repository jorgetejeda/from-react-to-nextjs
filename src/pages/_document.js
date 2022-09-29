import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        {/* 
          https://www.simicart.com/manifest-generator.html 
          Link para generar de manera visual nuestro manifest
        */}
        <link rel="manifest" href="/manifest.json" />
        {/* 
          dangerouslySetInnerHTML es una propiedad que remplaza innerHtml, significa
          que vas agregar codigo que puede afectar tu html, con esta propiedad podemos
          evitar exponer a los usuarios de un ataque 'cross-site scripting (xss)' 
        */}
        <script
          dangerouslySetInnerHTML={{
            // Aqui generalmente agregamos script proveidos por otras paginas
            // Por ejemplo: google analytics
            __html: `console.log('Hello from header using script with dangerouslySetInnerHTML property')`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
