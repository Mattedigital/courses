import React from 'react';

class CssVariables extends React.Component {
  componentDidMount() {
    const inputs = document.querySelectorAll('.controls input');
    inputs.forEach(input => input.addEventListener('change', this.handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', this.handleUpdate));
  }
  componentWillUnmount() {
    const inputs = document.querySelectorAll('.controls input');
    inputs.forEach(input => input.removeEventListener('change', this.handleUpdate));
    inputs.forEach(input => input.removeEventListener('mousemove', this.handleUpdate));
  }
  handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
  render() {
    return (
      <div className="container">
        <div className="controls">
          <label htmlFor="spacing">Spacing:
            <input id="spacing" type="range" name="spacing" min="10" max="200" defaultValue="10" data-sizing="px" />
          </label>
          <label htmlFor="blur">Blur:
            <input id="blur" type="range" name="blur" min="0" max="25" defaultValue="10" data-sizing="px" />
          </label>
          <label htmlFor="base">Base Color:
            <input id="base" type="color" name="base" defaultValue="#ffc600" />
          </label>
        </div>
        <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" alt="change this through CSS variables" />
      </div>
    );
  }
}

export default CssVariables;
