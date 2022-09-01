
function Intro() {
    return (
        <div id="intro" className="intro">
            <div className="quote">
                <h2>CREATING SIMPLE DESIGNS THAT WORKS</h2>
                <p>I am a passionate person, who loves to be immersed and engaged with creativity and logic.</p>
            </div>
            <div className="about">
                <h2>About Me</h2>
                <p>Just this year I got two certificates from FreeCodeCamp that proves my skill in Responsive Design and Javascript Algorithms.</p>
                <p>Click picture to be redirected to the certificate</p>
                <div className="certs">
                    <div>
                        <a href="https://www.freecodecamp.org/certification/johnglennandrade/responsive-web-design" target="_blank">
                            <img src="../../public/resources/certs/jscert.PNG" alt="jscert" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.freecodecamp.org/certification/johnglennandrade/javascript-algorithms-and-data-structures" target="_blank">
                            <img src="../../public/resources/certs/rwdcert.PNG" alt="rwdcert" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;
