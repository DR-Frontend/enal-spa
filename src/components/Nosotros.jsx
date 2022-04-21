import Image1 from "../assets/imgs/anc4.png"
import img1 from "../assets/imgs/galeria1.png"
import img2 from "../assets/imgs/galeria2.png"
import img3 from "../assets/imgs/galeria3.png"
import img4 from "../assets/imgs/galeria4.png"
import img5 from "../assets/imgs/galeria5.png"
import img6 from "../assets/imgs/galeria6.png"
import img7 from "../assets/imgs/galeria7.png"
import img8 from "../assets/imgs/galeria8.png"
import img9 from "../assets/imgs/galeria9.png"
import img10 from "../assets/imgs/galeria10.png"
import img11 from "../assets/imgs/galeria11.png"
import cli1 from "../assets/imgs/cliente_altos.png"
import cli2 from "../assets/imgs/cliente_bellescene.png"
import cli3 from "../assets/imgs/cliente_burguerbar.png"
import cli4 from "../assets/imgs/cliente_cruzazul.png"
import cli5 from "../assets/imgs/cliente_jagermeifter.png"
import cli6 from "../assets/imgs/cliente_plazacarso.png"
import cli7 from "../assets/imgs/cliente_santafe.png"
import cli8 from "../assets/imgs/cliente_shayamichan.png"
import cli9 from "../assets/imgs/cliente_tecmonterrey.png"

const Nosotros = ()=>(
   <div id="nosotros" className="nosotros">
      <div className="nosotros__desc">
         <div className="nosotros__desc-img">
            <img src={Image1} alt="Enal" />
         </div>
         <div className="nosotros__desc-txt">
            <h2 className="nosotros__title">NOSOTROS : ENAL</h2><br/>
            <p>Somos una empresa que además de producir a gran escala anuncios y espectaculares, se une contigo y con tu proyecto para dar inicio a tu negocio o remodelarlo.<br/>
            Le damos vida a anuncios mediante tus ideas, las creamos y realizamos mediante el neón, acrílico y aluminio.<br/>
            Tenemos un equipo especializado para apoyarte y asesorarte en diseño gráfico, iluminación y desarrollo web</p>
         </div>
      </div>
      <div className="nosotros__gallery">
         <img src={img1} alt="" />
         <img src={img2} alt="" />
         <img src={img3} alt="" />
         <img src={img4} alt="" />
         <img src={img5} alt="" />
         <img src={img6} alt="" />
         <img src={img7} alt="" />
         <img src={img8} alt="" />
         <img src={img9} alt="" />
         <img src={img10} alt="" />
         <img src={img11} alt="" />
      </div>
      <div className="nosotros__clients">
         <h2 className="nosotros__title">NUESTROS CLIENTES</h2><br/>
         <div className="nosotros__clients-list">
            <img src={cli1} alt="" />
            <img src={cli2} alt="" />
            <img src={cli3} alt="" />
            <img src={cli4} alt="" />
            <img src={cli5} alt="" />
            <img src={cli6} alt="" />
            <img src={cli7} alt="" />
            <img src={cli8} alt="" />
            <img src={cli9} alt="" />
         </div>
      </div>
   </div>
)

export default Nosotros