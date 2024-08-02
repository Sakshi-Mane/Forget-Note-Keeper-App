import React from "react";


const d = new Date();

function Footer() {
    return (
        <footer className="footer">
            <p>copyright © {d.getFullYear()}</p>
        </footer>
    );
}
export default Footer;