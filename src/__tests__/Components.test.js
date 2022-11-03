"use strict";
exports.__esModule = true;
var react_1 = require("@testing-library/react");
var Topnav_1 = require("../Components/Topnav");
var DownloadButton_1 = require("../Components/DownloadButton");
test("renders Navbar", function () {
    (0, react_1.render)(<Topnav_1["default"] />);
    var navbar = react_1.screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
});
test("renders DownloadButton", function () {
    (0, react_1.render)(<DownloadButton_1["default"] />);
    var downloadButton = react_1.screen.getByTestId("downloadButton");
    expect(downloadButton).toBeInTheDocument();
});
