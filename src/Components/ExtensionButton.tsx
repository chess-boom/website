import Button from "@mui/material/Button";

export default function ExtensionButton() {
    return (
            <Button
                id="extensionBtn"
                variant="contained"
                size="large"
                style={{ backgroundColor: "#c9ab91", color: "black", fontWeight: "500" }}
                data-testid="extensionButton"
                href="https://chrome.google.com/webstore/detail/chess-boom/jilmifjbgbjckgcfegpkkihlgfhdjgnp"
                target={"_blank"}
                aria-label="Link to Extension"
                
            >
                EXTENSION
            </Button>
    );
}
