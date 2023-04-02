import Button from "@mui/material/Button";

export default function DownloadButton() {
    return (
        <Button
            id="downloadBtn"
            variant="contained"
            size="large"
            style={{ backgroundColor: "#6AC1FF" }}
            data-testid="downloadButton"
            aria-label="Download Chess Boom"
        >
            DOWNLOAD
        </Button>
    );
}
