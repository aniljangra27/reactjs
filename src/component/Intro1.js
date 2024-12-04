function Intro1(props) {
    return (
            <div className="blog-post-intro">
                <h2>{props.heading}</h2>
                <div>
                    <p>{props.paraph}</p>
                    <p className="link">Read more...</p>
                </div>
            </div>
        );
    };
    
    export default Intro1;