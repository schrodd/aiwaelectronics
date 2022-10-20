import Head from "next/head"
import ThreeSixty from "../../components/ThreeSixty"

export default function threeSixty(){
  return (
    <>
      <Head>
        <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no" />
      </Head>
      <ThreeSixty sku='AW-T2008' top/>
    </>
  )
}