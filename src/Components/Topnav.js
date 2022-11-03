"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Container_1 = require("react-bootstrap/Container");
var Nav_1 = require("react-bootstrap/Nav");
var Navbar_1 = require("react-bootstrap/Navbar");
function Topnav() {
    return (<>
            <Navbar_1["default"] bg="dark" data-testid="navbar">
                <Container_1["default"]>
                    <Navbar_1["default"].Brand>Navbar</Navbar_1["default"].Brand>
                    <Nav_1["default"] className="me-auto">
                        <Nav_1["default"].Link>Home</Nav_1["default"].Link>
                        <Nav_1["default"].Link>Features</Nav_1["default"].Link>
                        <Nav_1["default"].Link>Pricing</Nav_1["default"].Link>
                    </Nav_1["default"]>
                </Container_1["default"]>
            </Navbar_1["default"]>
        </>);
}
exports["default"] = Topnav;
