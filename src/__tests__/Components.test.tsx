import { render, screen } from "@testing-library/react";
import DownloadButton from "../Components/DownloadButton";
import ExtensionButton from "../Components/ExtensionButton";
import GitButton from "../Components/GitButton";

test("renders DownloadButton", () => {
    render(<DownloadButton />);
    const downloadButton = screen.getByTestId("downloadButton");
    expect(downloadButton).toBeInTheDocument();
});

test("renders ExtensionButton", () => {
    render(<ExtensionButton />);
    const extensionButton = screen.getByTestId("extensionButton");
    expect(extensionButton).toBeInTheDocument();
});

test("renders GitButton", () => {
    render(<GitButton />);
    const gitButton = screen.getByTestId("gitButton");
    expect(gitButton).toBeInTheDocument();
});
