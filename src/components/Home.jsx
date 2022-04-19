import Lights from '../assets/video/lights.mp4'

const Home = ()=>(
   <div id="home" className="home">
      <div className="home__title">
         <h1>ESPECIALISTAS EN NEONES Y ANUNCIOS LUMINOSOS</h1>
      </div>
      <video src={Lights} autoPlay loop muted></video>
   </div>
)

export default Home