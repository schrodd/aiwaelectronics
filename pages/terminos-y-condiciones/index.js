import Image from "next/image"
import GppGoodIcon from '@mui/icons-material/GppGood';
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';

export default function tyc(){
  return (
    <main className="terms-and-conditions">
      <Image src='/images/pages/tyc/bg.jpg' alt='background' fill/>
      <div className="wrapper">
        <div className="title">
          <GppGoodIcon/>
          <div className="text">
            <h1>Garantía y Políticas de Devolución</h1>
            <h2>AIWA ELECTRONICS</h2>
          </div>
        </div>
        <p><b>Estimado Cliente / Usuario</b></p>
        <p>Gracias por adquirir nuestros productos. Con el fin de brindarle un servicio personalizado a la altura de sus necesidades, disponemos de un centro de asistencia telefónica y soporte técnico donde atendemos sus requerimientos a través del siguiente número: 0800-444-1212. Por favor, lea cuidadosamente las siguientes políticas para hacer uso del servicio:</p>
        <p>Todos los productos comercializados por AIWA ELECTRONICS cuentan con 6 (seis) meses de garantía contra cualquier defecto de fabricación e imperfección de materiales, contados a partir de su facturación y adquisición como material nuevo por parte del usuario final. Garantía limitada.</p>
        <p>AIWA ELECTRONICS no se hará cargo ante cualquier pérdida causada por daños tales como uso impropio de aplicaciones o configuraciones y no responderá ante cualquier acusación por parte de terceras partes. AIWA ELECTRONICS nunca reembolsará el costo de los productos defectuosos, simplemente reemplazará el producto defectuoso cuando corresponda.</p>
        <p>Si el producto fallado se encuentra discontinuado, AIWA ELECTRONICS reemplazará por un producto equivalente en reemplazo pudiendo tener diferencias con el producto original. En caso de no poder reemplazar con un producto de iguales características se reemplazará con un modelo superior. AIWA ELECTRONICS se reserva todos los derechos de interpretación y modificación de esta política de garantía.</p>
        <h3>Proceso de devolución - Falla hora 0 (DOA)</h3>
        <p>Si experimenta algún inconveniente con su producto, por favor contacte al Centro de Asistencia (0800-444-1212) para recibir asesoría al respecto y establecer la correcta configuración del mismo o gestionar el cambio/devolución según aplique en cada caso. Serán considerados como DOA (Dead On Arrival / Falla de Hora 0) aquellos productos que presenten falla funcional dentro de las 72hs siguientes a la fecha de compra. Para gestionar el cambio, los mismos deben estar completos y en perfectas condiciones, tanto el producto como su caja también. Deberá incluir en la caja una copia de la factura al momento de enviarlo. Aquellos productos que superen el periodo de DOA, deberán cursar el circuito habitual de soporte técnico. No se aceptarán cambios o devoluciones que hayan superado el periodo de DOA, sin excepción. El cliente debe presentar el equipo en el comercio para iniciar la gestión de garantía DOA con factura de compra en carácter obligatorio, o enviarlo a nuestro depósito.</p>
        <h3>Contactos para gestionar una devolución</h3>
        <p><b>AMBA:</b> Se deberá enviar un mail a soporte@totalhome.com.ar solicitando visita.</p>
        <p><b>INTERIOR:</b> Enviar solicitud por mail para autorización de devolución a las casillas soporte@totalhome.com.ar indicando producto, fecha de compra, problema y fotos (si es necesario). En caso de ser aceptados se enviará un mail con las instrucciones de envío.</p>
        <h3>Condiciones que descalifican la garantía de los productos</h3>
        <ol>
          <li>Cualquier defecto causado por un mal uso, instalación incorrecta o mantenimiento que no esté dispuesto en las instrucciones del manual de usuario.</li>
          <li>Cualquier defecto causado por software, virus o el uso indebido de software de terceros.</li>
          <li>Cuando el producto se haya utilizado en condiciones distintas a las normales o se pretendiese utilizar con un fin distinto al que fue diseñado.</li>
          <li>Cualquier destrucción no autorizada o rompiendo el código de barras y/o etiqueta de serial del producto.</li>
          <li>Cualquier producto que el código de barras, serial o tipo de elemento en la tarjeta de garantía es diferente del producto en sí o no se pueda visualizar correctamente.</li>
          <li>Cualquier defecto causado por un uso inadecuado de las condiciones de trabajo más allá de los establecidos por las instrucciones, como temperaturas, condiciones de humedad, potencia o capacidad eléctrica, etc. Las condiciones adecuadas se reflejan en las características de cada producto, en el empaque y en el manual de usuario.</li>
          <li>Cualquier defecto causado por un desastre personal o mantenimiento inadecuado, tales como daños mecánicos, oxidación, daño en el chasis del producto que demuestre manipulación inadecuada.</li>
          <li>Cualquier defecto causado por el transporte o la carga durante el traslado al centro de garantía.</li>
          <li>Cualquier desastre natural o inevitable, como terremotos, incendios, inundaciones, truenos y similares.</li>
          <li>Cualquier daño físico evidente, fisuras, deformación severa por temperatura, evidencia de sobrecargas.</li>
        </ol>
        <h3>Politica de garantía Total Home sobre píxeles defectuosos</h3>
        <p><b>¿Qué es un Píxel?</b></p>
        <p>Un pixel es un punto único en una imagen gráfica. Las pantallas LCD muestran las imágenes dividiendo la pantalla en millones de píxeles, ordenados en líneas y columnas. Los píxeles son colocados a corta distancia, unos con otros, de modo que parecen conectados, para así generar la sensación de continuidad lineal en una imagen o reproducción de video.</p>
        <p><b>¿Cómo está conformado un pixel?</b></p>
        <p>Está conformado por tres sub píxeles: uno rojo, uno verde y uno azul (ver fig.1). La mezcla de estos tres colores a diferente intensidad da lugar a millones de colores que muestran las pantallas.</p>
        <div className="fig">
          <Image src='/images/pages/tyc/px.jpg' width={160} height={160} alt='pixels'/>
          <p><small>Fig. 1</small></p>
        </div>
        <p>Durante el proceso de fabricación de las pantallas LCD, pueden quedar sub píxeles oscuros o brillantes, que no afectan la funcionalidad de la pantalla, aunque pueden llegar a causar en algunas imágenes cierta contaminación visual, que puede llegar a ser visible en ciertas ocasiones, de manera temporal o de manera continua. Sin embargo, esto no se considera como un defecto de fabricación, a menos que el número de sub píxeles o píxeles defectuosos exceda el máximo permitido por las normas internacionales que regulan las políticas y los procesos productivos de pantallas LCD (Norma UNE-EN ISO 13406-2). Por consiguiente, Aiwa Electronics adopta para sus pantallas, la siguiente política de máximo número de pixeles defectuosos, antes de considerar dañado el producto.</p>
        <p><b>DEFECTO TIPO I:</b> Es cuando los tres sub pixeles están encendidos, obteniendo un punto blanco.</p>
        <p><b>DEFECTO TIPO II:</b> Es cuando los tres sub pixeles están apagados, obteniendo un punto negro.</p>
        <p><b>DEFECTO TIPO III:</b> Es cuando algún sub pixel parpadea, está encendido o está apagado, obteniendo puntos de color fijos, intermitentes o apagados.</p>
        <div className="fig table">
          <Image src='/images/pages/tyc/tabla.png' fill alt='tabla pixeles'/>
        </div>
        <p>Ante cualquier duda, puede comunicarse con nosotros al 0800-444-1212, o por mail a soporte@totalhome.com.ar</p>
        <div className="buttons">
          <Link href='/'><button><ArrowBackIcon/>Volver al inicio</button></Link>
          <Link href='/contacto'><button className="main"><CallIcon/>Contactanos</button></Link>
        </div>
      </div>
    </main>
  )
}