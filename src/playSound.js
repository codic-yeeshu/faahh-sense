const {platform} = require('os');
const { exec } = require('child_process');
const path = require('path');
function detectOs(){
  const os = platform();
  console.log(`Detected OS: ${os}`);
}
/**
 *
 * @param {string} pathToTrack
 * @returns {string}
 */
function getSoundPlayerCommand(pathToTrack) {
  const os = platform();
  switch (os) {
    case 'darwin':
      return `afplay ${pathToTrack}`;
    case 'win32':
      return "";
    case 'linux':
      return '';
    default:
      return '';
  }
}

function playSound(){
  const pathToTrack = path.join(__dirname, 'DEMO_TRACKS', 'faahh.mp3');
  console.log(`Path to track: ${pathToTrack}`);
  const playSoundCommand = getSoundPlayerCommand(pathToTrack)
  console.log("Playing FAAAAAHHH sound...");
  exec(playSoundCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error playing sound: ${error}, ${stderr}`);
      return;
    }
    console.log(`Sound played successfully: ${stdout}`);
  });
}

module.exports = {
  detectOs,
  playSound
}