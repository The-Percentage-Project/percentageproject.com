import React, { Component } from 'react';
import Fade from 'react-reveal';
import {Button} from 'react-bootstrap';
import Gallery from './gallery';
import photos from '../public/static/photos_2019/photos';

class HomeGallery extends Component {
  render() {
    console.log(photos)

    return (
    <div>
    <section id = "art-traditional">
    <div className = "dark-container" style={{minHeight:"100vh"}}>            
        <div className="center-row" style={{paddingBottom:"3%"}}>
            <div className= "art-header">
                <Fade bottom duration={5000}>
                    <div style= {{paddingBottom:"5vh"}}>
                    <h2>
                    Our Gallery
                    </h2>
                    <a href={process.env.PUBLIC_URL + "/#/gallery"}>
                        <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}> 
                        <h4>View Full Gallery</h4>
                        </Button>
                    </a>
                    </div>
                </Fade>
            </div>
        </div>
    <Gallery images={photos.slice(0, 6)}/>

    </div>
    </section>
    </div>
    );
  }
}

export default HomeGallery;
