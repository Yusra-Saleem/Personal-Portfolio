import React from 'react'
import styles from '@/styles/About-me.module.css'
import Image from 'next/image'
import { FaCloudDownloadAlt } from 'react-icons/fa'
function Aboutme() {
  return (
    <div className={styles.aboutContainer}>
    <div className={styles.about}>
      <div className={styles.mainAbout}>
        <Image src="/profile.png" alt="image" width={300} height={300} />
      </div>

      <div className={styles.aboutText}>
        <h2>About Me</h2>
        <h3>Turning Ideas into Delightful <span >Digital</span> Realities</h3>
        <p>Hello! I&#39;m Yusra, a web developer with experience in creating engaging digital experiences. Proficient in HTML, CSS, JavaScript, TypeScript, React, and Next.js, I specialize in building responsive websites that prioritize user experience and functionality. With a background in UI/UX design and SEO, I am dedicated to delivering impactful solutions that drive results. I&#39;m always eager to learn and apply new technologies to enhance my projects. Let&#39;s work together to bring your ideas to life!</p>
        <div >
        <h2 >Education &amp; Experience</h2>
        <ul className={styles.aboutli}>
          <li >
            <strong>Governor Sindh Initiative for Generative AI, Web3, Metaverse</strong><br />
            Studying Generative AI, Metaverse, and Web 3.0 (Present)
          </li>
          <li >
            <strong>Techverse51</strong><br />
            Teaching HTML and CSS (Present)
          </li>
          <li >
            <strong>I.Com (Intermediate in Commerce)</strong><br />
            Liaquat govt. college (2024)
          </li>
          <li >
            <strong>Matriculation (matric in Biology)</strong><br />
            Sun Rise Children Academy (2022)
          </li>
          
        </ul>
      </div>
      
      <a href="/cv.pdf" download="Your_CV.pdf">
      <button className={styles.connectbtn}>
        Download CV <FaCloudDownloadAlt className={styles.call} />
      </button>
    </a>
      </div>

     

    </div>
    </div>
  )
}

export default Aboutme
