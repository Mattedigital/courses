import React from 'react';
import Behance from '../../media/svg/behance.svg';
import srcA from '../../media/images/placeholder01.gif';
import srcB from '../../media/images/placeholder02.jpg';
import srcC from '../../media/images/placeholder03.jpeg';

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likesCount: 0 };
    this.onLike = this.onLike.bind(this);
  }
  onLike() {
    const newLikesCount = this.state.likesCount + 1;
    this.setState({ likesCount: newLikesCount });
  }
  render() {
    return (
      <div>
        <h5>Tester text</h5>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
        <div className="inline-img" />
        <img src={srcA} alt="srcA" />
        <img src={srcB} alt="srcB" />
        <img src={srcC} alt="srcC" />
        <Behance className="icon" />
      </div>
    );
  }
}

export default ExampleComponent;
