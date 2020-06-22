const aws = require('aws-sdk');


let s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
console.log(s3);
import kick from 'http://s3://drummachinev1/Decap_Sampler_Kick.mp3';
import snare from 'http://s3://drummachinev1/decap_snare.mp3';
import clap from 'http://s3://drummachinev1/clap.mp3'
import rim from 'http://s3://drummachinev1/rim.mp3'
import closedHat from 'http://s3://drummachinev1/closed_hat.mp3';
import openCloseHat from 'http://s3://drummachinev1/openCloseHat.mp3';
import openHat from 'http://s3://drummachinev1/openHat.mp3';
import cowBell from 'http://s3://drummachinev1/808cowBell.mp3';
import keys1 from 'http://s3://drummachinev1/keys1.mp3';
import keys2 from 'http://s3://drummachinev1/keys2.mp3';
import bass1 from 'http://s3://drummachinev1/bass1.mp3';
import bass2 from 'http://s3://drummachinev1/bass2.mp3';
import vox1 from 'http://s3://drummachinev1/vox1.mp3';
import shaker from 'http://s3://drummachinev1/shaker.mp3';
import crash from 'http://s3://drummachinev1/crash.mp3';
import chimes from 'http://s3://drummachinev1/chimes.mp3';
const kickSample = new Audio(kick);
const snareSample = new Audio(snare);
const clapSample = new Audio(clap);
const rimSample = new Audio(rim);
const closedHatSample = new Audio(closedHat);
const openCloseHatSample = new Audio(openCloseHat);
const openHatSample = new Audio(openHat);
const cowBellSample = new Audio(cowBell);
const keys1Sample = new Audio(keys1);
const keys2Sample = new Audio(keys2);
const bass1Sample = new Audio(bass1);
const bass2Sample = new Audio(bass2);
const vox1Sample = new Audio(vox1);
const shakerSample = new Audio(shaker);
const crashSample = new Audio(crash);
const chimesSample = new Audio(chimes);

export {
    kickSample,
    snareSample,
    clapSample,
    rimSample,
    closedHatSample,
    openCloseHatSample,
    openHatSample,
    cowBellSample,
    keys1Sample,
    keys2Sample,
    bass1Sample,
    bass2Sample,
    vox1Sample,
    shakerSample,
    crashSample,
    chimesSample
}




// import kick from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/Decap_Sampler_Kick.mp3';
// import snare from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/decap_snare.mp3';
// import clap from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/clap.mp3'
// import rim from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/rim.mp3'
// import closedHat from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/closed_hat.mp3';
// import openCloseHat from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/openCloseHat.mp3';
// import openHat from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/openHat.mp3';
// import cowBell from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/808cowBell.mp3';
// import keys1 from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/keys1.mp3';
// import keys2 from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/keys2.mp3';
// import bass1 from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/bass1.mp3';
// import bass2 from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/bass2.mp3';
// import vox1 from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/vox1.mp3';
// import shaker from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/shaker.mp3';
// import crash from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/crash.mp3';
// import chimes from '/Users/Nickcarr/fullstack/practice/drum-machine/dist/chimes.mp3';


    // accessKeyId: process.env.S3_KEY,
    // secretAccessKey: process.env.S3_SECRET