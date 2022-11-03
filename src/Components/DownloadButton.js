"use strict";
exports.__esModule = true;
var React = require("react");
var Stack_1 = require("@mui/material/Stack");
var Button_1 = require("@mui/material/Button");
function DownloadButton() {
    return (<Stack_1["default"] spacing={2} direction="row">
            <Button_1["default"] id="downloadBtn" variant="contained" style={{ backgroundColor: "#6AC1FF" }} data-testid="downloadButton">
                DOWNLOAD
            </Button_1["default"]>
        </Stack_1["default"]>);
}
exports["default"] = DownloadButton;
