import profPic from "../images/six.jpg";
import githubLogo from "../images/github_icon.png";
import linkedInLogo from "../images/linkedin_icon.png"

export default function About(){
    return(
        <div className="about-header">
            <img id="portrait" title="Jason Klein" src={profPic} loading="lazy" alt=""></img>
            <h1>Hello there, I'm Jason</h1>
            <h2>Curious, Creative, Lifelong Learner</h2>
            <div className="socials">
                <a target="_blank" rel="noreferrer" href="https://github.com/JoopyJones" >
                    <img id="GitHub" title="GitHub" src={githubLogo} alt=""/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/jasondklein" >
                    <img id="LinkedIn" title="LinkedIn" src={linkedInLogo} alt=""/>
                </a>
            </div>
            <p id="aboutMeParagraph">I'm a software developer who loves to learn and solve problems. <br/><br/>
                               <strong>Skills:</strong> SQL, Java, C, JavaScript, Node.js/Express, HTML/CSS, MOCA <br/>
                                <strong>WMS Skills:</strong> Developing for RedPrairie/JDA/Blue Yonder, MOCA, DDA, Integrator,<br/>
                                            RF, JRXML/RPX reports, PageBuilder
            </p>
            <img id="githubActivity" src="https://ghchart.rshah.org/f78166/joopyjones" alt="joopyjones' Github chart" />
        </div>
    )
}