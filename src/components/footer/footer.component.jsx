import React from "react";

const FooterPanel = () => {
    return (
        <div>
            <div className="py-2 text-center footer-style">© SangMean Hong &nbsp; {new Date().getFullYear()}</div>
        </div>
    );
};

export default FooterPanel;