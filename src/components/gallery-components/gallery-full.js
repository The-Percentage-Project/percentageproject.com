import React, { Component } from 'react';
import Fade from 'react-reveal';
import {Button} from 'react-bootstrap';
import Gallery from '../gallery';
import duke from '../../public/static/photos_2019/duke.js';
import rutgers from '../../public/static/photos_2019/rutgers.js';
import penn from '../../public/static/photos_2019/penn.js';
import brown from '../../public/static/photos_2019/brown.js';
class FullGallery extends Component {

  render() {
    return (
    <div>
    <section id = "art-traditional">
    <div className = "dark-container" style={{minHeight:"100vh"}}>            
        <div className="center-row" style={{paddingBottom:"3%"}}>
            <div className= "art-header">
                <Fade bottom duration={5000}>
                    <div style= {{paddingBottom:"5vh"}}>
                    <h2 style = {{letterSpacing: "15px"}}>
                    FULL GALLERY
                    </h2>
                    <a href={process.env.PUBLIC_URL + "/"}>
                        <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}> 
                        <h4>Home</h4>
                        </Button>
                    </a>
                    </div>
                </Fade>
            </div>
        </div>
    <div className= "center-row" style={{paddingTop:"10%", paddingBottom:"3%"}}>
    <h2 style = {{letterSpacing: "15px"}}>
                    Brown
    </h2>
    </div>
    <Gallery images={brown}/>

    <div className= "center-row" style={{paddingTop:"10%", paddingBottom:"3%"}}>
    <h2 style = {{letterSpacing: "15px"}}>
                    Duke
    </h2>
    </div>
    <Gallery images={duke}/>

    <div className= "center-row" style={{paddingTop:"10%", paddingBottom: "3%"}}>
    <h2 style = {{letterSpacing: "15px"}}>
                    Penn
    </h2>
    </div>
    <Gallery images={penn}/>

    <div className= "center-row" style={{paddingTop:"10%", paddingBottom:"3%"}}>
    <h2 style = {{letterSpacing: "15px"}}>
                    Rutgers
    </h2>
    </div>
    <Gallery images={rutgers}/>

    </div>
    </section>
    </div>
    );
  }
}

export default FullGallery;
