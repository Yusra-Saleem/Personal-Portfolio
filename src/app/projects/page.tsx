import React from 'react';
import Image from 'next/image';
import styles from '@/styles/projects.module.css'
import { BiCaretRightSquare } from "react-icons/bi";
import Link from 'next/link';

function Projects() {
  return (
    <div className={styles.projectPage}>
      <div className={styles.recentProjects}>
        <div className={styles.projectTop}>
          <h5>My Portfolio</h5>
          <h2>Review my <span>latest </span> Projects</h2>

        </div>

        <div className={styles.projectContainer}>
          <Link href="https://e-commerce-website-by-yusra-saleem.vercel.app/">
            <div className={styles.mainProject}>
              <div className={styles.project}>
                <Image src={"/images/project-1.png"} alt="" width={500} height={300} className={styles.img} />
              </div>
            </div>
          </Link>
          <Link href="https://3legant-website.vercel.app/">
            <div className={styles.mainProjectst}>
              <div className={styles.project}>
                <Image src={"/images/project-2.png"} alt="" width={500} height={300} className={styles.img} />
              </div>
            </div>
          </Link>
          <Link href="https://yusra-saleem.vercel.app/">
            <div className={styles.mainProjectst}>
              <div className={styles.project}>
                <Image src={"/images/project-3.png"} alt="" width={500} height={300} className={styles.img} />
              </div>
            </div>
          </Link>

          <Link href="https://3legant-website.vercel.app/">
            <div className={styles.mainProjectst}>
              <div className={styles.project}>
                <Image src={"/images/project-2.png"} alt="" width={500} height={300} className={styles.img} />
              </div>
            </div>
          </Link>
          <Link href="https://yusra-saleem.vercel.app/">
            <div className={styles.mainProjectst}>
              <div className={styles.project}>
                <Image src={"/images/project-3.png"} alt="" width={500} height={300} className={styles.img} />
              </div>
            </div>
          </Link>
          <Link href="https://e-commerce-website-by-yusra-saleem.vercel.app/">
            <div className={styles.mainProjectst}>
              <div className={styles.project}>
                <Image src={"/images/project-1.png"} alt="" width={500} height={300} className={styles.img} />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.homBtn}>
          <Link href="https://github.com/Yusra-Saleem?tab=repositories" className={styles.work}>
            Explore All Projects <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="#a66cc9" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M14 6L20 12L14 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </Link>
        </div>
      </div>
      <div className={styles.clientSay}>
        <div className={styles.clientTop}>
          <h5>Testimonials</h5>
          <h2>What <span>People </span> say about me</h2>

          <div className={styles.clientdetails}>
            <div className={styles.testCard}>
              <div className={styles.testTop}>
                <div className={styles.testHead}>
                  <h4>Maria Tasleem</h4>
                </div>

                <div className={styles.testLogo}>
                  <Image src={"/images/client.png"} alt="" width={200} height={200} className={styles.clientImg} />
                </div>



              </div>
              <div className={styles.testBtn}>
                <BiCaretRightSquare />
                <p>Yusra did a fantastic job on the resume builder. The clear structure simplifies adding and organizing information, and the professional templates enhance the design. Her focus on user experience is impressive. she&#39;s the best choice for creating your resume.</p>
              </div>
              </div>

              <div className={styles.testCard}>
                <div className={styles.testTop}>
                  <div className={styles.testHead}>
                    <h4> Madiha -Khan</h4>
                  </div>

                  <div className={styles.testLogo}>
                    <Image src={"/images/client.png"} alt="" width={200} height={200} className={styles.clientImg} />
                  </div>



                </div>
                <div className={styles.testBtn}>
                  <BiCaretRightSquare />

                  <p>Yusra Saleem is a pro at transforming complex ideas into clean, efficient code. Detail-oriented and innovative, she consistently delivers quality solutions that are robust, reliable, and exceed expectations.</p>
                </div>
              </div>

              <div className={styles.testCard}>
                <div className={styles.testTop}>
                  <div className={styles.testHead}>
                    <h4>Amraha Anwar</h4>
                  </div>

                  <div className={styles.testLogo}>
                    <Image src={"/images/client.png"} alt="" width={200} height={200} className={styles.clientImg} />
                  </div>



                </div>
                <div className={styles.testBtn}>
                  <BiCaretRightSquare />
                  <p>Yusra Saleem is dedicated, hardworking, and always ready to help others. Her web development skills and excellent communication make her the go-to person for taking your business to the next level. Highly recommended!</p>
                </div>
              </div>

              <div className={styles.testCard}>
                <div className={styles.testTop}>
                  <div className={styles.testHead}>
                    <h4>Harmain Bashir</h4>
                  </div>

                  <div className={styles.testLogo}>
                    <Image src={"/images/client.png"} alt="" width={200} height={200} className={styles.clientImg} />
                  </div>



                </div>
                <div className={styles.testBtn}>
                  <BiCaretRightSquare />
                  <p>Yusra is a skilled coder with a strong programming foundation. Detail-oriented and efficient, she excels at problem-solving and produces clean code. Her passion for coding and dedication to learning make her a valuable asset to any team.</p>
                </div>
              </div>
             



            </div>


          </div>
        </div>


      </div>

      )
}

      export default Projects
