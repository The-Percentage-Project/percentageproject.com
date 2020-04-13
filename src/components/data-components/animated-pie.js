import {VictoryAnimation, VictoryLabel, VictoryPie} from 'victory';
import React, { Component } from 'react';
import { Row, Col, NavLink} from 'reactstrap';
import Fade from 'react-reveal';

class AnimatedPie extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        percent: 0, 
        data: this.getData(0), 
        text: "",
        name: this.props.name, 
        dataset: this.props.dataset,
      };
    }
  
    componentDidMount() {
      let percent = 0; 
      let interval = 0;
      let index = 0;
      var text = "";

      //on an interval of every second (minimum to allow animation)
      this.setStateInterval = window.setInterval(() => {
        //check if the element is in the viewport, if not, set percent to 0
        if (this.elementInViewport2(document.getElementById(this.state.name))){
          index = parseInt(interval/5) % this.state.dataset.length;
          percent = this.state.dataset[index].val;
          text = this.state.dataset[index].text;
        }
        else
        {
          percent = 0;
        }
        //update the state accordingly
        this.setState({
          percent: percent, 
          data: this.getData(percent), 
          text: text
        });
        interval = interval + 1;
      }, 1000);
    }
  
    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
    }
  
    getData(percent) {
      return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }

    //checks if the pie chart is in the viewport
    elementInViewport2(el) {
      var top = el.offsetTop;
      var left = el.offsetLeft;
      var width = el.offsetWidth;
      var height = el.offsetHeight;

      while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
      }
    
      return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
      );
    }

    render() {
      var name = this.state.name; 
      return (
        <Row>
          <Col md={5}> 
          <VictoryAnimation duration={3000} data={this.state}>
                {(newProps) => {
                  return (
                    <div style={{paddingTop: "15vh"}}>
                    <Fade duration={3000}>
                    <h2>{newProps.text}</h2>
                    </Fade>
                    </div>
                  );
                }}
          </VictoryAnimation>
          </Col>
          <Col md={7}>
          <div id={name}>
            <svg viewBox="0 0 400 400" width="100%" height="100%">
              <VictoryPie
                standalone={false}
                animate={{ duration: 1000 }}
                width={400} height={400}
                data={this.state.data}
                innerRadius={120}
                labels={() => null}
                style={{
                  data: { fill: ({ datum }) => {
                    var ratio = datum.y/50;
                    const color = "rgb("+ 0*ratio +"," + 25*ratio +  "," + 94*ratio + ")";
                    return datum.x === 1 ? color : "transparent";
                  }
                  }
                }}
              />
              <VictoryAnimation duration={1000} data={this.state}>
                {(newProps) => {
                  return (
                    <VictoryLabel
                      textAnchor="middle" verticalAnchor="middle"
                      x={200} y={200}
                      text={`${Math.round(newProps.percent)}%`}
                      style={{fontSize: 45, fill: "rgba(255, 255, 255, 0.7)"}}
                    />
                  );
                }}
              </VictoryAnimation>
            </svg>
          </div>
          </Col>
        </Row>
      );
    }
  }

export default AnimatedPie;