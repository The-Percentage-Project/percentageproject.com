import React, { Component } from 'react';
import '../css/standard.css';
import '../css/parallax.css';
import '../css/blog.css';

class Parallax extends Component {
    constructor(props){
        super(props); 
        this.items = this.props.items;
    }
  
    componentDidMount(){
        var name  = this.items.name;
        console.log(document.getElementById(name).offsetTop)
        window.addEventListener('scroll', function(event) {
            var depth, i, layer, layers, len, movement, topDistance, translate3d;
            topDistance = this.pageYOffset;
            var elem = document.getElementById(name);
            var elementDistance = topDistance;
            if (elem)
            {
              elementDistance = topDistance - document.getElementById(name).offsetTop
            }
            layers = document.querySelectorAll("[data-type='parallax-" + name + "']");
            for (i = 0, len = layers.length; i < len; i++) {
              layer = layers[i];
              depth = layer.getAttribute('data-depth');
              movement = -1 * (topDistance + elementDistance * depth) 
              translate3d = 'translate3d(' + 0 + ',' + movement + 'px, 0)';
              layer.style['-webkit-transform'] = translate3d;
              layer.style['-moz-transform'] = translate3d;
              layer.style['-ms-transform'] = translate3d;
              layer.style['-o-transform'] = translate3d;
              layer.style.transform = translate3d;
            }
        });   
  }
  render() {
    var name = this.items.name;
    var background = this.items.background; 
    var backgroundDepth = this.items.backgrounddepth;
    var layers = this.items.layers.map((i) => {
        return <div className={'layer ' + i.name} data-depth= {i.depth} data-type={'parallax-'+name} style={{ backgroundImage: "url(" + i.image + ")"}}></div>
    });
    return (
    <div>
        <div id={this.items.name} style= {{minHeight: "100vh"}}> 
        <div className= "layer layer-bg" data-depth={backgroundDepth} data-type={'parallax-'+name} style={{backgroundImage: background}}></div>
        {layers}
        {this.props.children}
        </div>
    </div>
    );
  }
}

export default Parallax;
