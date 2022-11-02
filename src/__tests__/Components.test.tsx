import { render, screen } from "@testing-library/react";
import Topnav from "../Components/Topnav";
import DownloadButton from "../Components/DownloadButton";

test("renders Navbar", () => {
    render(<Topnav />);
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
});

test("renders DownloadButton", () => {
    render(<DownloadButton />);
    const downloadButton = screen.getByTestId("downloadButton");
    expect(downloadButton).toBeInTheDocument();
});
