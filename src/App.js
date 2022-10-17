import "./App.css";
import Avatar from '@mui/material/Avatar';

import Stack from '@mui/material/Stack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Avatar alt="Greg Arnold" src="http://localhost:3001/img/profile_pic.jpg" sx={{ width: 130, height: 130}} />
        <img />
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
            Linkedin
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
