import Head from "next/head"

export default function HeadThings(){
  return (
    <Head>
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/favicon/site.webmanifest"/>
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#d7282f"/>
      <link rel="shortcut icon" href="/favicon/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#d7282f"/>
      <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"/>
      {/* SEO */}
      <meta name="title" content="Aiwa Electronics"/>
      <meta name="description" content="Encontrá los mejores Parlantes y Torres de Sonido más potentes del mercado. ¡Armá tu fiesta!"/>
      <meta name="keywords" content="parlante, sonido, aiwa, aiwa electronics, torre de sonido, woofer, tweeter"/>
      <meta name="robots" content="index, follow"/>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="English"/>
      
    </Head>
  )
}