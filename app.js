import React from 'react';
import ReactDOM from 'react-dom';
import { kickSample,snareSample,clapSample,rimSample,closedHatSample,openCloseHatSample,openHatSample,cowBellSample,keys1Sample,keys2Sample,bass1Sample,bass2Sample,vox1Sample,shakerSample,crashSample,chimesSample } from './samples';
const { render } = ReactDOM;
const { Component } = React;

const app = document.querySelector('#app');

class DrumPads extends Component {

    kick = () => {
        kickSample.currentTime = 0;
        kickSample.play();
    }
    snare = () => {
        snareSample.currentTime = 0;
        snareSample.play();
    }
    clap = () => {
        clapSample.currentTime = 0;
        clapSample.play();
    }
    rim = () => {
        rimSample.currentTime = 0;
        rimSample.play();
    }
    closedHat = () => {
        closedHatSample.currentTime = 0;
        closedHatSample.play();
    }
    openCloseHat = () => {
        openCloseHatSample.currentTime = 0;
        openCloseHatSample.play()
    }
    openHat = () => {
        openHatSample.currentTime = 0;
        openHatSample.play();
    }
    hatClose = () => {
        openHatSample.pause()
    }
    shaker = () => {
        shakerSample.currentTime = 0;
        shakerSample.play();
    }
    keys1 = () => {
        keys2Sample.pause();
        keys1Sample.currentTime = 0;
        keys1Sample.play()
    }
    keys2 = () => {
        keys1Sample.pause();
        keys2Sample.currentTime = 0;
        keys2Sample.play();
    }
    bass1 = () => {
        bass2Sample.pause();
        bass1Sample.currentTime = 0;
        bass1Sample.play();
    }
    bass2 = () => {
        bass1Sample.pause()
        bass2Sample.currentTime = 0;
        bass2Sample.play();
    }
    vox1 = () => {
        vox1Sample.currentTime = 0;
        vox1Sample.play();
    }
    crash = () => {
        crashSample.currentTime = 0;
        crashSample.play();
    }
    cowBell = () => {
        cowBellSample.currentTime = 0;
        cowBellSample.play();
    }
    chimes = () => {
        chimesSample.currentTime = 0;
        chimesSample.play();
    }
    render() {
        return (
            <div className='drumMachine'>
                <div className='drumPad' onMouseDown={ this.vox1 }>Vox 1</div>
                <div className='drumPad' onMouseDown={ this.crash }>Crash</div>
                <div className='drumPad' onMouseDown={ this.cowBell }>808 Cow Bell</div>
                <div className='drumPad' onMouseDown={ this.chimes }>Chimes</div>
                <div className='drumPad' onMouseDown={ this.keys1 }>Sample 1</div>
                <div className='drumPad' onMouseDown={ this.keys2 }>Sample 2</div>
                <div className='drumPad' onMouseDown={ this.bass1 }>Bass 1</div>
                <div className='drumPad' onMouseDown={ this.bass2 }>Bass 2</div>
                <div className='drumPad' onMouseDown={ this.shaker }>Shaker</div>
                <div className='drumPad' onMouseDown={ this.openCloseHat }>Open/Closed HH</div>
                <div className='drumPad' onMouseDown={ this.closedHat }>Closed HH</div>
                <div className='drumPad' onMouseDown={ this.openHat } onMouseUp={ this.hatClose }>Open HH</div>
                <div className='drumPad' onMouseDown={ this.kick }>Kick</div>
                <div className='drumPad' onTouchStart={ this.rim } onMouseDown={ this.rim }>Rim</div>
                <div className='drumPad' onTouchStart={ this.snare } onMouseDown={ this.snare }>Snare</div>
                <div className='drumPad' onTouchStart={ this.clap } onMouseDown={ this.clap }>Clap</div>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1>drumMachine.JS</h1>
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