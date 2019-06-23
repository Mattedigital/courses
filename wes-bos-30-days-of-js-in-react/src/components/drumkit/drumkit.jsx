import React from 'react';
import ShortId from 'shortid';

import boom from '../../media/sounds/boom.wav';
import clap from '../../media/sounds/clap.wav';
import hihat from '../../media/sounds/hihat.wav';
import kick from '../../media/sounds/kick.wav';
import openhat from '../../media/sounds/openhat.wav';
import ride from '../../media/sounds/ride.wav';
import snare from '../../media/sounds/snare.wav';
import tink from '../../media/sounds/tink.wav';
import tom from '../../media/sounds/tom.wav';

const sounds = [
  {
    letter: 'A',
    key: 65,
    phonetic: 'clap',
    sound: clap,
  },
  {
    letter: 'S',
    key: 83,
    phonetic: 'hihat',
    sound: hihat,
  },
  {
    letter: 'D',
    key: 68,
    phonetic: 'kick',
    sound: kick,
  },
  {
    letter: 'F',
    key: 70,
    phonetic: 'openhat',
    sound: openhat,
  },
  {
    letter: 'G',
    key: 71,
    phonetic: 'boom',
    sound: boom,
  },
  {
    letter: 'H',
    key: 72,
    phonetic: 'ride',
    sound: ride,
  },
  {
    letter: 'J',
    key: 74,
    phonetic: 'snare',
    sound: snare,
  },
  {
    letter: 'K',
    key: 75,
    phonetic: 'tom',
    sound: tom,
  },
  {
    letter: 'L',
    key: 76,
    phonetic: 'tink',
    sound: tink,
  },
];

class DrumKit extends React.Component {
  componentWillMount() {
    window.addEventListener('keydown', this.playSound, false);
  }
  componentDidMount() {
    this.keys = document.querySelectorAll('.key');
    this.keys.forEach(item => item.addEventListener('transitionend', this.removeTransition, false));
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.playSound, false);
    this.keys.forEach(item => item.removeEventListener('transitionend', this.removeTransition, false));
  }
  playSound(event) {
    this.audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    this.key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!this.audio) return;
    this.audio.currentTime = 0;
    this.audio.play();
    this.key.classList.add('playing');
  }
  removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  render() {
    const soundButtons = sounds.map(val => (
      <button data-key={val.key} className="key" key={`sound-button-${ShortId.generate()}`}>
        <kbd>{val.letter}</kbd>
        <span className="sound">{val.phonetic}</span>
      </button>
    ));

    const soundBytes = sounds.map(val => (
      <audio data-key={val.key} src={val.sound} key={`soundbyte-${ShortId.generate()}`}>
        <track kind="captions" />
      </audio>
    ));
    return (
      <div className="drumKit">
        <div className="keys">{soundButtons}</div>
        {soundBytes}
      </div>
    );
  }
}

export default DrumKit;
