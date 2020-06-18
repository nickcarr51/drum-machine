import React from 'react';
import ReactDOM from 'react-dom';

const { render } = ReactDOM;
const { Component } = React;

import kick from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/Decap_Sampler_Kick.mp3';
import snare from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/decap_snare.mp3';
import clap from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/clap.mp3'
import rim from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/rim.mp3'
const kickSample = new Audio(kick);
const snareSample = new Audio(snare);
const clapSample = new Audio(clap);
const rimSample = new Audio(rim);

const app = document.querySelector('#app');

class DrumPads extends Component {

    kick = () => {
        kickSample.play();
    }
    snare = () => {
        snareSample.play();
    }
    clap = () => {
        clapSample.play();
    }
    rim = () => {
        rimSample.play();
    }
    render() {
        return (
            <div className='drumMachine'>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad'></div>
                <div className='drumPad' onClick={ this.kick }>Kick</div>
                <div className='drumPad' onClick={ this.rim }>Rim</div>
                <div className='drumPad' onClick={ this.snare }>Snare</div>
                <div className='drumPad' onClick={ this.clap }>Clap</div>
            </div>
        )
    }
}



class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1>MPC</h1>
                <hr/>
                <DrumPads />
            </div>
        )
    }
}

render(
    <App />,
    app
)