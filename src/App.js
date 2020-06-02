import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrumPad from './components/DrumPad';
import Controls from './components/Controls';

const sounds = {
  latinSounds: [
    { id: "BadCow", letter: "q", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/31[kb]badcow.aif.mp3" },
    { id: "HiBongo", letter: "w", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/19[kb]hibongo.aif.mp3" },
    { id: "HiTimbale", letter: "e", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/20[kb]hitimbale.aif.mp3" },
    { id: "LectroPerc", letter: "a", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/23[kb]lectroperc.aif.mp3" },
    { id: "HouseWistle", letter: "s", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/9[kb]housewhistle.aif.mp3" },
    { id: "CowBell", letter: "d", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/16[kb]cowbell808.aif.mp3" },
    { id: "Agogo", letter: "z", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/30[kb]808agogo.aif.mp3" },
    { id: "Conga", letter: "x", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/23[kb]conga_clean.aif.mp3" },
    { id: "NiceCow", letter: "c", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/25[kb]nicecow.aif.mp3" }
  ],

  africanSounds: [
    { id: "AfricanPeLo", letter: "q", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/90[kb]african-pe-lo.wav.mp3" },
    { id: "Bobble", letter: "w", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/32[kb]blobble.aif.mp3" },
    { id: "Crikis", letter: "e", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/65[kb]crikix.aif.mp3" },
    { id: "Gungru", letter: "a", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/107[kb]gungru5.aif.mp3" },
    { id: "Shekere", letter: "s", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/116[kb]shekere1.aif.mp3" },
    { id: "SteelDrum", letter: "d", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/79[kb]steeldrum.aif.mp3" },
    { id: "WaveDrum", letter: "z", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/362[kb]wavedrum2.aif.mp3" },
    { id: "EthnoWhat", letter: "x", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/67[kb]ethnowhat.aif.mp3" },
    { id: "PipeChimes", letter: "c", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/118[kb]pipechimes.aif.mp3" }
  ],

  changeSound: false
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: {},
      sound1: false,
      name: "Latin Sounds",
      power: false
    }
  }

  componentDidMount() {
    this.setState({
      sounds: sounds
    });
  }

  handlerKeys = (event) => {
    let letter = event.key.toUpperCase();
    let sound = this.searchSound(letter, this.state.sound1);
    if (sound.id != "" && this.state.power) {
      let x = document.getElementById(letter);
      x.setAttribute("src", sound.src);
      x.play();
      this.updateText(sound.id)
    }
  }

  handlerClick = (event) => {
    let letter = event.target.innerText;
    let sound = this.searchSound(letter, this.state.sound1);
    if (sound.id != "" && this.state.power) {
      let x = document.getElementById(letter);
      x.setAttribute("src", sound.src);
      x.play();
      this.updateText(sound.id)
    }
  }

  searchSound = (letter, sound1) => {
    let sound = {};
    let src = "";
    let id = "";
    if (sound1) {
      Object.values(this.state.sounds.africanSounds).map((africanSound) => {
        if (letter === africanSound.letter.toUpperCase()) {
          id = africanSound.id;
          src = africanSound.src;
          sound = {
            id: id,
            src: src
          }
          return sound;
        }
      })
    } else {
      Object.values(this.state.sounds.latinSounds).map((latinSound) => {
        if (letter === latinSound.letter.toUpperCase()) {
          id = latinSound.id;
          src = latinSound.src;
          sound = {
            id: id,
            src: src
          }
          return sound;
        }
      })
    }

    sound = {
      id: id,
      src: src
    }
    return sound;
  }

  updateText = (xText) => {
    document.getElementById('display').innerText = xText;
  }

  changeVolume = (e) => {
    let porcentaje = (parseFloat(e.target.value) * 100).toFixed(0);
    let volume = 'Volume ' + porcentaje;
    console.log(e)
    this.updateText(volume);
  }

  onOff = (e) => {
    if (this.state.power) {
      document.getElementById('onOff').innerText = 'Power Off'
      this.setState({
        power: false
      })
    } else {
      document.getElementById('onOff').innerText = 'Power On'
      this.setState({
        power: true
      })
    }
  }

  changeSound = (e) => {
    let name;
    let sound1;
    if (this.state.sound1) {
      sound1 = false;
      name = "Latin Sounds";
    } else {
      sound1 = true;
      name = "African Sounds"
    }
    this.setState({
      sound1: sound1,
      name: name
    })
  }

  render() {
    return (
      <div className='container-all'>
        <div className='container-drum shadow p-3 mb-5 rounded'>
          <DrumPad
            handlerKeys={(e) => this.handlerKeys(e)}
            handlerClick={(e) => this.handlerClick(e)}
            sounds={this.state.sounds}
          />
          <Controls
            onOff={(e) => this.onOff(e)}
            changeSound={(e) => this.changeSound(e)}
            changeVolume={(e) => this.changeVolume(e)}
            name={this.state.name}
          />
          <footer>by Tatiana Ochoa Bautista</footer>
        </div>
      </div>
    );
  }

}

export default App;
