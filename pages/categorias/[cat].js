import { useRouter } from "next/router"
import CategoryMainBanner from "../../components/CategoryMainBanner"
import { lvTwoCat } from "../../content/categories"
import { products } from "../../content/products"
import NotFound from "../../components/NotFound"
import Head from "next/head"
import CategoryLineSwiper from "../../components/CategoryLineSwiper"
import CategorySwiper from "../../components/CategorySwiper"
import { productGroups } from "../../content/groups"

export default function Category() {
  const url = useRouter()
  const { cat } = url.query
  const category = lvTwoCat.find((e) => e.route === `/categorias/${cat}`)
  if (category === undefined) {
    return <NotFound desc={`No se ha encontrado la categoría "${cat}"`} />
  }
  const prod = products.filter(
    (e) => e.categories.includes(category.id)
  )
  const categoryObj = {
    // Formatea la data para el componente MainBanner
    img: category.img,
    alt: category.name,
    noText: category.noTextOnCategoryBanner,
    text: {
      title: category.name,
      subtitle: category.desc,
      align: category.categoryBannerTextPos ? category.categoryBannerTextPos[1] : "left",
      valign: category.categoryBannerTextPos ? category.categoryBannerTextPos[0] : "center",
    },
  }
  function selectGroup(cat, groups) {
    switch (cat) {
      case 'in-ear':
        return groups.in_ear
      case 'on-ear':
        return groups.on_ear
      case 'notebooks':
        return groups.notebooks
      case 'discontinuos':
        return groups.discontinuos
    }
  }
  let lineArr = []
  if (prod.every(e => e.line)) { // If all products have line assigned
    prod.forEach(e => {
      const line = lineArr.find(f => f == e.line)
      if (!line) {
        lineArr.push(e.line)
      }
    })
  } 

  return (
    <>
      <Head>
        <title>{`${category.name} | Aiwa Electronics`}</title>
      </Head>
      <main id={`categorias ${cat}`}>
        <CategoryMainBanner banner={categoryObj} />
        <section className="swiper-categorias">
          {lineArr.length > 0
            ? lineArr.map((e, i) => {
              const prods = prod.filter(f => e == f.line)
              return <CategoryLineSwiper products={prods} key={i} />
            })
            : <CategorySwiper skus={selectGroup(cat, productGroups)} />
          }
        </section>
      </main>
    </>
  )
}
