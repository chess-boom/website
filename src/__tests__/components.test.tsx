import React from "react";
import { render, screen } from "@testing-library/react";
import Topnav from "../components/topnav";
import DownloadButton from "../components/downloadButton";

test("renders web components", () => {
    render(<Topnav />);
    render(<DownloadButton />);
    const navbar = screen.getByTestId("navbar");
    const downloadButton = screen.getByTestId("downloadButton");
    expect(navbar).toBeInTheDocument();
    expect(downloadButton).toBeInTheDocument();
});
