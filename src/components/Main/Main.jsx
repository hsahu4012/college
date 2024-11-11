import React from 'react'
import './Main.css'
import gif from '../../assets/gif.webp'
function Main() {
  return (
    <div className='main'>
      <div className="desc">
        <h2>About Our College</h2>
        <h1>GITA AUtonomOUS College</h1>
        <p>GITA AUtonomOUS College, Bhubaneswar, embodies a profound dedication to education and research, setting a benchmark in academic excellence and intellectual growth. Every initiative at GITA is carefully designed to nurture curiosity and critical thinking, empowering students to go beyond textbooks and explore real-world applications. Through a blend of rigorous coursework, innovative teaching methods, and hands-on project involvement, GITA inspires students to actively engage with their learning, transforming them into self-driven, adaptable thinkers.
          Research at GITA goes hand-in-hand with education, encouraging students and faculty alike to push the boundaries of knowledge in their fields. With state-of-the-art facilities and a forward-thinking approach, GITA provides the tools, mentorship, and opportunities necessary for pioneering research. This commitment drives the college community to stay ahead of emerging technologies, engage with societal challenges, and contribute meaningfully to industry and academia alike. GITA l s dedication is not only to educate but to foster a CUItUre of discovery, resilience, and passion that fuels lifelong learning and impactful innovation.
        </p><br /><br />
        <h2>About Conference</h2>
        <h1>ICAlQC-2024</h1>
        <p>The International Conference on Artificial Intelligence and Quantum Computing (ICAlQC-2024) is a prestigious IEEE conference aimed at fostering collaboration and innovation at the intersection of Artificial Intelligence and Quantum Computing. As these fields converge to revolutionize industries, ICAlQC-2024 offers a platform for academics, researchers, industry professionals, and practitioners worldwide to present their pioneering work and explore the synergies between Al and quantum technologies.
          The scope of ICAlQC-2024 spans foundational theory, experimental research, applied sciences, and engineering in both Al and quantum computing, with a fOCUS on novel applications and methodologies. The conference will address the latest advancements, future challenges, and transformative impacts on fields ranging from computation and data analysis to communication and cybersecurity.

        </p>
        <div className="buttons">
          <div className="btn"><a href="#">Read The Tracks</a></div>
          <div className="btn"><a href="#">Call For Paper</a></div>
        </div>
      </div>

      <div className="side-img">
        <img src={gif} alt="" />
        <div className="buttons">
        <div className="btn"><a href="#">Submit Your Paper</a></div>
        </div>
      </div>
    </div>
  )
}

export default Main
