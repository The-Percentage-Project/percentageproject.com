import {VictoryAnimation, VictoryLabel, VictoryTheme,
    VictoryChart, VictoryBar, VictoryAxis} from 'victory';
import React, { Component } from 'react';
import { Row, Col, NavLink} from 'reactstrap';
import Fade from 'react-reveal';

class AnimatedBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        percent: 0, 
        data: [{x: 0, y: 0}], 
        text: this.props.text,
        name: this.props.name, 
        data: this.props.dataset,
        dataset: this.props.dataset,
        colors: this.props.colors, 
        height: this.props.height, 
      };
    }
  
    componentDidMount() {
      var data;
      let interval = 0;

      //on an interval of every second (minimum to allow animation)
      this.setStateInterval = window.setInterval(() => {
        //check if element is in viewport, if not set data to 0
        if (!this.elementInViewport2(document.getElementById(this.state.name))){
          data = this.state.dataset.map((i)=>{
            return {x: i.x, y: 0};
        });
        }
        else
        {
          data = this.state.dataset;
          console.log(this.state.data)
        }
        //update the state accordingly
        this.setState({
          data: data
        });
        interval = interval + 1;
      }, 1500);
    }
  
    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
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

    weightedSum(array1, array2, weight){
        var ctr = 0
        var result = []
        while (ctr < array1.length && ctr < array2.length) 
        {
            result.push(weight * array1[ctr] + (1- weight) * array2[ctr]);
            ctr++;
        }
        return result
    }

    render() {
      var name = this.state.name;
      return (
        <div style={{paddingTop: "5vh", paddingBottom: "5vh"}}>
        <Row>
          <Col md={4}> 
          <VictoryAnimation duration={3000} data={this.state}>
                {(newProps) => {
                  return (
                    <div >
                    <Fade duration={3000}>
                    <h4>{this.state.text}</h4>
                    </Fade>
                    </div>
                  );
                }}
          </VictoryAnimation>
          </Col>
          <Col md={8}>
          <div id={name}>
            <VictoryChart
            domain={{y: [0, 100]}}
            height={this.state.height} 
            width={600}
            animate={{ duration: 1000 }}
            //theme={VictoryTheme.material}            
            padding={{left: 250, bottom: 30, right: 60}}
            domainPadding={{ x: 20 , y: 10}}
            >
                <VictoryBar
                    horizontal
                    barRatio={0.8}
                    labels={({ datum }) => `${Math.round(datum._y)}%`}
                    style={{
                    labels: {fill: "white", fontSize: 20},
                    data: { fill: ({ datum }) => {
                        var ratio = datum._x / this.state.data.length;
                        var result = this.weightedSum(this.state.colors[0], this.state.colors[1], ratio)
                        return "rgb("+ result[0] +"," + result[1] +  "," + result[2] + ")"}}, 
                    }}
                    data={this.state.data}
                />
                <VictoryAxis style={{
                  axis: {stroke: "rgba(255, 255, 255, 0.8)", weight: 10},
                  tickLabels: {fill: "rgba(255, 255, 255, 0.8)", fontSize: 20, padding: 5}
                }}/>
                <VictoryAxis dependentAxis style={{
                  axis: {stroke: "rgba(255, 255, 255, 0.8)", weight: 10},
                  tickLabels: {fill: "rgba(255, 255, 255, 0.8)", fontSize: 20, padding: 5}
                }}/>
            </VictoryChart>


              {/* <VictoryAnimation duration={1000} data={this.state}>
                {(newProps) => {
                  return (
                    <VictoryLabel
                      textAnchor="middle" verticalAnchor="middle"
                      x={200} y={200}
                      text={`${Math.round(newProps.percent)}%`}
                      style={{ fontSize: 45 }}
                    />
                  );
                }}
              </VictoryAnimation> */}
          </div>
          </Col>
        </Row>
        </div>
      );
    }
  }

export default AnimatedBar;