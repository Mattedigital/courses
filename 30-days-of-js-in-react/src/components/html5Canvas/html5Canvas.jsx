import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawing: false,
      // lastX: 0,
      // lastY: 0,
    };
  }
  componentDidMount() {
    this.canvasSpec();
    this.canvasListeners();
  }
  canvasSpec() {
    this.canvas = document.querySelector('#draw');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = 'round';
    this.ctx.lineCap = 'round';
  }
  canvasListeners() {
    this.canvas.addEventListener('mousemove', this.draw);
    this.canvas.addEventListener('mousedown', () => this.setState(() => ({
      isDrawing: true,
    })));
    this.canvas.addEventListener('mouseup', () => this.setState(() => ({
      isDrawing: false,
    })));
    this.canvas.addEventListener('mouseout', () => this.setState(() => ({
      isDrawing: false,
    })));
    console.log(this.state.isDrawing);
  }
  // eslint-disable-next-line
  draw(event) {
    // for some reason this is bound to the canvas element and not the scope of this class?
    // eslint-disable-next-line
    if (!this.state.isDrawing) return;
  }
  render() {
    return (
      <canvas id="draw" />
    );
  }
}

export default Canvas;
