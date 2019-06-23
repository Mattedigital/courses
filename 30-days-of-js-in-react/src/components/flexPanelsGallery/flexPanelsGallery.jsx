import React from 'react';

class Clock extends React.Component {
  componentDidMount() {
    this.panels = document.querySelectorAll('.panel');
    this.panels.forEach(item => item.addEventListener('click', this.toggleOpen, false));
    this.panels.forEach(item => item.addEventListener('transitionend', this.toggleActive, false));
  }
  toggleOpen() {
    this.classList.toggle('open');
  }
  toggleActive(event) {
    if (event.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }
  render() {
    return (
      <div className="panels">
        <div className="panel panel1">
          <p>Hey</p>
          <p>Lets</p>
          <p>Dance</p>
        </div>
        <div className="panel panel2">
          <p>Give</p>
          <p>Take</p>
          <p>Receive</p>
        </div>
        <div className="panel panel3">
          <p>Experience</p>
          <p>It</p>
          <p>Today</p>
        </div>
        <div className="panel panel4">
          <p>Give</p>
          <p>All</p>
          <p>You can</p>
        </div>
        <div className="panel panel5">
          <p>Life</p>
          <p>In</p>
          <p>Motion</p>
        </div>
      </div>
    );
  }
}

export default Clock;
