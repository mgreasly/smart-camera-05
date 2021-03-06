import { Component } from 'preact';
import Webcam from 'react-webcam';
import Fab from 'preact-material-components-mgr/Fab';
import 'preact-material-components-mgr/Fab/style.css';

class CameraPage extends Component {
  capture = () => { 
    const image = this.webcam.getScreenshot(); 
  } 

  render() {
    return (
      <div class="camera-page">
        <h1>Take a picture to analyse...</h1>
        <div class="webcam">
          <Webcam key={this.props.deviceId} audioSource="" videoSource={this.state.deviceId} audio={false} ref={webcam => { if (webcam) this.webcam = webcam; }} screenshotFormat="image/jpeg" />
        </div>
        <div class="footer">
          <div class="camera-buttons">
            <Fab ripple={true} onclick={this.capture}><Fab.Icon>camera</Fab.Icon></Fab>
          </div>
        </div>
      </div>
    );
  }
}

export default CameraPage;