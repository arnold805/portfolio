import "./App.css";
import React from "react";
// import ReactMapGL from 'react-map-gl';
import Avatar from '@mui/material/Avatar';

function App() {

  // for MapGL

  // const [viewport, setViewport] = useState({
  //   latitude: 40.48960915490233,
  //   longitude: -81.44556781445908,
  //   width: '100vw',
  //   height: '100vh',
  //   zoom: 10
  // })

  return (
    <div className="App">
      <header className="App-header">

      {/* <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          markers here
      </ReactMapGL> */}

      <Avatar alt="Greg Arnold" src="img/profile_pic.jpg" sx={{ width: 130, height: 130}} />
        <p>
          <a
            className="App-link"
            href="https://v-for-vehicle.gregarnold.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            V-for-Vehicle
          </a>
        </p>
        <p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/garnold805/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* jsx space method */}
            {/* &nbsp; Linkedin &nbsp; */}
            Linkedin
          </a>
        </p>
        <p>
          <a
            className="App-link"
            href="https://github.com/arnold805"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
        <p>
          <a
            className="App-link"
            href="https://soundcloud.com/g_force805"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoundCloud
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
