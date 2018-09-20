import React, { Component } from 'react';

const K_WIDTH = 20;
const K_HEIGHT = 20;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  border: '5px solid',
  borderRadius: K_HEIGHT,
  // backgroundColor: 'white',
  color: '#3f51b5',
  fontSize: 7,
  fontWeight: 'bold',
  padding: 4
};

class CircleMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  changeColor = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    let borderColor = this.props.borderColor || '#f44336';
    let backgroundColor;

    if (this.state.active === true) {
      backgroundColor = 'yellow';
    } else backgroundColor = 'orange';

    return (
      <div
        style={{
          ...greatPlaceStyle,
          borderColor: borderColor,
          backgroundColor: backgroundColor
        }}
        onClick={e => this.changeColor()}
        onMouseLeave={this.props.onMouseLeave}
      >
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default CircleMarker;
