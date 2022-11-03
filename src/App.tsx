import "./App.css";
import React from "react";
// import Topnav from './Components/Topnav';
import DownloadButton from "./Components/DownloadButton";

function App() {
    return (
        <div className="content" data-testid="main">
            <h1> Download Chessboom </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <DownloadButton />
            </div>
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <p style={{ fontSize: "small" }}>
                    By downloading and using Chessboom, you agree to the license terms and privacy statement.
                </p>
            </div>
            <p>More about the product.</p>
            <ul>
                <li>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat
                </li>
                <li>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum
                </li>
                <li>I sunt in culpa qui officia deserunt mollit anim id est laborum</li>
                <li>
                    Item Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua
                </li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</li>
            </ul>
        </div>
    );
}

export default App;
