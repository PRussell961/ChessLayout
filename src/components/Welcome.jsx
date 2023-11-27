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
                <h1>Big BraAIn</h1>
                <h2> This web app allows you to play chess against an online opponent anywhere any time.</h2>
                </div>
            </div>             
        </div>
        
        </>
    );
}

export default Welcome;