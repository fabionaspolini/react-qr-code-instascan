import React, { Component } from "react";
import "./App.css";
import { Cameras, Scanner } from "react-instascan-new";
// import { Cameras, Scanner } from "./components/react-instascan/src";

class App extends Component {

  constructor() {
    super();
    this.state = {
      code: ""
    }

    this.video = React.createRef();
  }

  componentDidMount() {
    this.initScanner();
  }

  initScanner() {
  }

  onScan = (code) => {
    this.setState({code: "Scan: " + code});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header2">
          <p>QR Code: {this.state.code}</p>
          <Cameras>
            {cameras => (
              <div>
                <Scanner camera={cameras[cameras.length - 1]} onScan={this.onScan} options={{mirror: false}}>
                  <video style={{ width: "80%" }}></video>
                </Scanner>
              </div>
            )}
          </Cameras>
        </header>
      </div>
      );
    }
}

export default App;
