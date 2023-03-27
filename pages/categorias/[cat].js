import { useRouter } from "next/router";
import MainBanner from "../../components/MainBanner";
import { lvTwoCat } from "../../content/categories";
import { products } from "../../content/products";
import NotFound from "../../components/NotFound";
import Head from "next/head";
import CategoryLineSwiper from "../../components/CategoryLineSwiper";

export default function Category() {
  const url = useRouter();
  const { cat } = url.query;
  const category = lvTwoCat.find((e) => e.route === `/categorias/${cat}`);
  if (category === undefined) {
    return <NotFound desc={`No se ha encontrado la categoría "${cat}"`} />;
  }
  const prod = products.filter(
    (e) => e.categories.includes(category.id) && e.buyLink
  );
  const categoryObj = {
    // Formatea la data para el componente MainBanner
    img: category.img,
    mobileImg: category.mobileImg,
    link: category.route,
    alt: category.name,
    text: {
      title: category.name,
      subtitle: category.desc,
      cta: "",
      align: "left",
      valign: "center",
    },
  };
  let lineArr = []
  if (prod.every(e => e.line)) { // If all products have line assigned
    prod.forEach(e => {
      const line = lineArr.find(f => f == e.line)
      console.log(line)
      if (!line) {
        lineArr.push(e.line)
      }
    })
  } else {
    console.log("no lines");
  }

  return (
    <>
      <Head>
        <title>{`${category.name} | Aiwa Electronics`}</title>
      </Head>
      <main id={`categorias ${cat}`}>
        <MainBanner banner={categoryObj} />
        <section className="swiper-categorias">
          {lineArr && lineArr.map((e,i) => {
            const prods = prod.filter(f => e == f.line)
            return <CategoryLineSwiper products={prods} key={i}/>
          })}
        </section>
      </main>
    </>
  );
}
