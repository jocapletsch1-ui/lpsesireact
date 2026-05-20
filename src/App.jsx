import s from './App.module.css'
import image1 from "/download-removebg-preview.png"
import image2 from "/t2Vqlb0V-removebg-preview (1).png"
import image3 from "/IMG_20240927_124847-removebg-preview.png"
import image4 from "/goldmrolympiasandowstatue3dmodel001-removebg-preview.png"
import image5 from "/Arnold-Schwarzenegger-Profile0-removebg-preview.png"
import image6 from "/abh0m90io2y31-removebg-preview.png"
import image7 from "/ronnie-coleman-chx8h827eibwekvp-removebg-preview.png"
function App() {
  
//js

  return (
    <>
    <nav>
        <a className={s.navItems} href="#s1">
            <img src={image1} alt="Troféu"/>
            <span className="navWords">Campeões Olympia</span>
        </a>

        <a className="{s.navItems}" href="#s2">
            <img src={image2} alt="Golden Era"/>
            <span className="navWords">The Best</span>
        </a>
        
        <a className={s.navItems} href="#s3">
            <img src={image3} alt="Winners"/>
            <span className="navWords">Vencedores do Olympia</span>
        </a>

        <a className={s.navItems} href="#s4">
            <img src={image4} alt="Enaltecidos"/>
            <span className={s.navItems}>Imortalizados</span>
        </a>
    </nav>

    <main>
        <section id="s1" className={s.s1}>
            <h1 className={s.titulo}>Campeões Olympia</h1>
            <h2>As exceções da regra.</h2>
            <a className={s.botao} href="#s4">Oque é Mr. Olympia?</a>
        </section>

        <section id="s2" className={s.s2}>

                <div className={s.divi}>
                    <h1 className={s.theones}>The ones</h1>
                </div>

                <div className={s.cardsContainer}>

                    <div className={s.card}>
                        <h2>Arnold Schwarzenegger</h2>
                        <div className={s.arnoldImg}>
                            <img className={s.arnold} src={image5} alt=""/>
                        </div>
                        <div>
                            <p>Físico clássico e estético, com peitoral enorme, bíceps marcantes, costas largas e cintura relativamente fina. Tinha presença de palco carismática e poses muito expressivas, passando imagem de confiança e simetria.</p>
                        </div>
                    </div>


                    <div className={s.card}>
                            <h2>Ronnie Coleman</h2>
                        <img src={image7} alt=""/>
                        <div>

                            <p>Shape equilibrado e atlético, conhecido pelos ombros arredondados, braços proporcionais e aparência densa sem perder fluidez. Transmitia intensidade no palco e tinha um visual considerado.</p>
                        </div>
                    </div>

                    <div className={s.card}>
                            <h2>Kevin Levrone</h2>
                        <img src={image6} alt=""/>
                        <div>

                            <p>Físico extremamente massivo e definido, com costas gigantescas, pernas volumosas e aparência quase sobre-humana. Ficou famoso pela combinação de tamanho absurdo.</p>
                        </div>
                    </div>

                </div>

            </section>

        <section id="s3" className={s.s3}>
            <div className={s.vid}>
                <iframe  width="100%" height="450" src="https://www.youtube.com/embed/MHPmV1wEsjs?si=d0lwSjuB3FzGJ2Se" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className={s.borda}></div>    
            </div>
            


            <div className={s.carrosselContainer}>
                <div className={s.carrossel}>
                       
                </div>
            </div>
        </section>

        <section id="s4" className={s.s4}>
            </section>
    </main>    
    
    <footer>
        <a href="https://www.facebook.com" target="_blank">
            <img src="../assets/icons/facebook.png" alt="facebook"/>
        </a>
        <a href="https://www.instagram.com" target="_blank">
            <img src="../assets/icons/instagram.png" alt="instagram"/>s
        </a>
        <a href="https://www.linkedin.com" target="_blank">
            <img src="../assets/icons/linkedin.png" alt="linkedin"/>
        </a>
    </footer>
    </>
    
  )
}

export default App
