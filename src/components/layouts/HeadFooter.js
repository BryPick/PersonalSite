import React from 'react';

function HeadFooter() {
    return (
        <div id="head-footer">
            <p id="footer-text">© {(new Date().getFullYear())} Bryan Pickering</p>
        </div>
    );
}

export default HeadFooter;