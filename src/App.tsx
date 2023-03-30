import "./App.css";
import React from "react";
import DownloadButton from "./Components/DownloadButton"
import ExtensionButton from "./Components/ExtensionButton"
import GitButton from "./Components/GitButton";
import Application from "./media/ProfilePage.gif";
import Extension from "./media/cBoomDownload.gif";

import { Grid, Box } from '@mui/material';

function App() {
    return (
        <div className="content" data-testid="main">
            <h1> Download Chess Boom </h1>
            <Grid container textAlign={"center"} spacing={1} marginTop={3} marginBottom={8}>
                <Grid item xs={6}>
                    <p>
                        Chess Boom is an application intended for new chess players to take their chess games to the next level!
                    </p>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: { xs: 50, md: 300 },
                            marginTop: "10px"
                        }}
                        alt={"App"}
                        src={Application}
                    />
                </Grid>
                <Grid item xs={6}>
                    <p>
                        Use our Google Chrome extension to download your game summary and start improving your play!
                    </p>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: { xs: 50, md: 300 },
                            marginTop: "10px"
                        }}
                        alt={"Extension"}
                        src={Extension}
                    />
                </Grid>
                <Grid item xs={6} marginTop={3}>
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
                </Grid>
                <Grid item xs={6} marginTop={3}>
                    <div
                        style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ExtensionButton />
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
                            Click here to get the Chess Boom extension!
                        </p>
                    </div>
                </Grid>
            </Grid> 

            <Grid container textAlign={"center"}>
                <Grid item xs={12} >
                    <p>
                        The Chess Boom app will introduce you to new techniques and provide intuitive advice to new/experienced chess players.
                    </p>
                    <p>
                        We also support different variations of chess, like Atomic Chess. 
                    </p>
                    <p>
                        Don't hestitate to start your journey with Chess Boom!
                    </p>
                    <div
                        style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <GitButton />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
