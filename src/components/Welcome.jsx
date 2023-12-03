import "../componentcss/Welcome.css"
function Welcome() {
    return (
        <>
        <div id ="welcome-wrap">
            <div id="background">
            <div className="aLayer">
                <iframe id="vid" src="https://www.youtube.com/embed/KWkmsx0jFng?si=ns8L1T25CIVHLhXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="aLayer">
                <h1>SP-14 Red Chess AI</h1>
                <h2> 4850 - Fall 2023</h2>
                <h3>We have deployed an AI and website to play chess with, for more information about everyone who worked on the project scroll down, or check <a href="https://docs.google.com/document/d/1NoXv86S2ZY1o6EXnCng0TqQSBlLwtrJBkd-xM1cECD8/edit">this</a> out for more info on the project.</h3>
                </div>
            </div>             
        </div>      
        </>
    );
}

export default Welcome;