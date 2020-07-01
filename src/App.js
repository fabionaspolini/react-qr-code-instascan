import React, { Component } from "react";
import "./App.css";
import { Cameras, Scanner } from "./components/react-instascan";

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
          <button onClick={() => this.setState({code: "AAAAAAAAAAA"})}>Teste</button>

          {/* <div className="preview-container">
            <video id="preview" ref={this.video}></video>
          </div> */}

          {/* <video className="preview-container" style={{ width: 400, height: 400 }} /> */}

          <Cameras>
            {cameras => (
              <div>
                <button onClick={() => this.setState({code: cameras.length})}>Teste</button>
                <Scanner camera={cameras[0]} onScan={this.onScan}>
                  <video style={{ width: 400, height: 400 }} />
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
