import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ExtensionButton() {
    return (
        <IconButton
            id="GitBtn"
            size="small"
            data-testid="gitButton"
            style={{ backgroundColor: "white", color: "black" }}
            href="https://github.com/chess-boom"
            target={"_blank"}
            rel="noreferrer"
            aria-label="Chess Boom Git"
        >
            <GitHubIcon />
        </IconButton>
    );
}
