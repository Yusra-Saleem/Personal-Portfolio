
import React from 'react'


function page() {
  return (
    <div>
        {/* Video Background */}
        <video className={"videoBackground"} autoPlay loop muted>
                <source src="/about-video.mp4" type="video/mp4" />
                Your browser does not support the animation.
            </video>

            <div className={"overlay"}>
  <h1>Yusra Saleem</h1>
  <h2>Full Stack Developer</h2>
  <p>
    I love creating modern, responsive, and user-friendly web applications.  I am always striving to improve my skills and build innovative solutions.
  </p>
  
  {/* Button */}
  <a href="/about" className={"button"}>Explore My Work</a>
</div>

    </div>

  )
}

export default page
