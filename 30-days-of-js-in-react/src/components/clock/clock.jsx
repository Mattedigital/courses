import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsDegrees: 0,
      minutesDegrees: 0,
      hoursDegrees: 0,
      transition: '',
    };
  }
  componentWillMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick() {
    this.now = new Date();
    this.seconds = this.now.getSeconds();
    this.minutes = this.now.getMinutes();
    this.hours = this.now.getHours();
    this.setState(() => ({
      secondsDegrees: ((this.seconds / 60) * 360) + 90,
      minutesDegrees: ((this.minutes / 60) * 360) + 90,
      hoursDegrees: ((this.hours / 12) * 360) + 90,
      transition: this.state.secondsDegrees === 90 ? 'none' : '',
    }));
  }
  render() {
    const styles = {
      seconds: {
        transform: `rotate(${this.state.secondsDegrees}deg)`,
        transition: this.state.transition,
      },
      minutes: {
        transform: `rotate(${this.state.minutesDegrees}deg)`,
        transition: this.state.transition,
      },
      hours: {
        transform: `rotate(${this.state.hoursDegrees}deg)`,
        transition: this.state.transition,
      },
    };
    return (
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand" style={styles.hours} />
          <div className="hand min-hand" style={styles.minutes} />
          <div className="hand second-hand" style={styles.seconds} />
        </div>
      </div>
    );
  }
}

export default Clock;
