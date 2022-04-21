import ImgService1 from "../assets/imgs/anc1.png"
import ImgService2 from "../assets/imgs/anc2.png"
import ImgService3 from "../assets/imgs/anc3.png"

const Main = ()=>(
   <main id="main" className="main">
      <div className="main__wrapp">
         <div className="main__wrapp-service">
            <h2>ANUNCIOS EN ACRÍLICO</h2>
            <p>Fabricados mediante cajas de luz o letras de acuerdo tu logotipo.<br/>
               Las cajas de luz y las letras se realizan conforme a la forma tu logo, se les coloca recorte de vinil o vinil impreso.<br/>
               Para su iluminación utilizamos módulos de leds de 12v. así se ahorra consumo de energía.<br/>
               La iluminación es de forma directa (hacia el frente).</p>
               <a href="#" className="btn">Quiero una Cotización!</a>
         </div>
         <div className="main__wrapp-image">
            <img src={ImgService1} alt="Enal" />
         </div>
         <div className="main__wrapp-service">
            <h2>ANUNCIOS EN ALUMINIO</h2>
            <p>Fabricado mediante cajas de luz, letras o números de acuerdo a tu logotipo.<br/>
            La caja de luz, letras o números; se realizan mediante la forma de tu logotipo.<br/>
            Los anuncios en aluminio siempre son elegantes, dan una perspectiva de seriedad y formalidad.<br/>
            Para una mejor presentación se les ilumina módulos de leds de 12v. para fomentar el ahorro de energía en tu consumo de luz.<br/>
            La iluminación de este anuncio es de forma indirecta (hacia atrás).</p>
            <a href="#" className="btn">Quiero una Cotización!</a>
         </div>
         <div className="main__wrapp-image">
            <img src={ImgService2} alt="Enal" />
         </div>
         <div className="main__wrapp-service">
            <h2>ANUNCIOS EN NEÓN</h2>
            <p>Se fabrica mediante el contorno de letras o logotipos Los anuncios de neón siempre son llamativos.<br/>
            La luz neón hace que se muy especial, ya que con el gas neón y gas argón la iluminación es excelente para el interior o exterior de tu negocio.<br/>
            Para su iluminación únicamente se conecta a un transformador de luz.</p>
            <a href="#" className="btn">Quiero una Cotización!</a>
         </div>
         <div className="main__wrapp-image">
            <img src={ImgService3} alt="Enal" />
         </div>
      </div>
   </main>
)

export default Main