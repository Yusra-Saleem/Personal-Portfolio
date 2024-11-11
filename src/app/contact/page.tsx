import styles from '@/styles/contact.module.css'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
export default function ContactPage() {
  return (
    <div className={styles.contact}>
       {/* Video Background */}
       <video className={"videoBackground"} autoPlay loop muted>
                <source src="/about-bg.mp4" type="video/mp4" />
                Your browser does not support the animation.
            </video>

        <h2>Contact <span> Me</span> </h2>

        <div className={styles.info}>
          <h4>Email: <span> yusrasaleem679@gmail.com</span> </h4>
          <h4>Contact: <span> +92310-2983718</span> </h4>
          <h4>Adress: <span> khayaban-e-Muhammad society malir , karachi</span> </h4>

          <div className={styles.iconButtons}>
                            <Link href="https://www.linkedin.com/in/yusrasaleem-developer" aria-label="LinkedIn"><FaLinkedin className={styles.icon} /></Link>
                            <Link href="https://github.com/Yusra-Saleem" aria-label="GitHub"><FaGithub className={styles.icon} /></Link>
                            <Link href="https://www.instagram.com/yusra_saleem_official" aria-label="Instagram"><FaInstagram className={styles.icon} /></Link>
                            <Link href="https://www.facebook.com/YusraSaleem72" aria-label="Facebook"><FaFacebook className={styles.icon} /></Link>
                        </div>
          
        </div>

      <div className={styles.contTop}>
        <h2> Drop a Message <span>Anytime</span></h2>
        <p>Looking forward to connecting! Whether it&#39;s a project or just a quick hello, I&#39;m here</p>
      </div>

      <div className={styles.mainCont}>
        <form action="#" className={styles.form}>
          <div className={styles.contInput}>
            <input type="text" placeholder="First Name" required  className={styles.input} />
            <input type="text" placeholder="Last Name" required  className={styles.input} />
          </div>
          <div className={styles.contInput}>
            <input type="text" placeholder="Email" required className={styles.input} />
            <input type="text" placeholder="Phone Number" required className={styles.input} />
          </div>
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Type your Message"
            className={styles.textarea}
          ></textarea>

          <input type="submit" value="send Message" className={styles.sub}/>
        </form>
      </div>
    </div>
  )
}
