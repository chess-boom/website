import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function DownloadButton() {
    return (
        <Stack spacing={2} direction="row">
            <Button
                id="downloadBtn"
                variant="contained"
                style={{ backgroundColor: "#6AC1FF" }}
                data-testid="downloadButton"
            >
                DOWNLOAD
            </Button>
        </Stack>
    );
}
