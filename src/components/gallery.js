import PropTypes from 'prop-types';
import React from 'react';
import {Row, Col} from 'reactstrap';
import '../css/art_gallery.css'

class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    setCustomTags (i) {
        return (
            i.tags.map((t) => {
                return (<div
                        key={t.value}
                        style={customTagStyle}>
                        {t.title}
                        </div>);
            })
        );
    }

    render () {
        var images =
        this.state.images.map((i) => {
            var source = ""; 
            if (i.source)
            {
                source= <a className="info" href= {i.source} target="_blank">source</a>
            }
            return (
            <Col md={i.width}>
                <div style= {{
                    backgroundImage: "url("+i.src+")", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center",
                    height: "50vh",
                    marginTop: "15px",
                    marginBottom: "15px",
                    }}>
                    <div className="hovereffect">
                        <div className="overlay">  
                            {i.caption} <br/>
                            <a className="info" href={i.src} target="_blank">view</a>
                            {source}
                        </div>
                    </div>
                </div>
            </Col>
            )
        });


        return (
            <div className = "art-gallery">
                <Row>
                    {images}
                </Row>
            </div>
        );
    }
}

Gallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    height: "40vh",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "5vh",
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};



export default Gallery;

