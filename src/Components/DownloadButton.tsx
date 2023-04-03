import Button from "@mui/material/Button";

export default function DownloadButton() {
    return (
        <Button
            id="downloadBtn"
            variant="contained"
            size="large"
            style={{ backgroundColor: "#6AC1FF" }}
            data-testid="downloadButton"
            href="https://github.com/chess-boom/app/releases"
            target={"_blank"}
            rel="noreferrer"
            aria-label="Download Chess Boom"
        >
            DOWNLOAD
        </Button>
    );
}
