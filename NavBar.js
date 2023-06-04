class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <link rel="stylesheet" href="./NavBar.css" />
                <div className="home-dropdown dropdown"><a id="home-link" href="index.html"><button className="home-dropbtn dropbtn">Home</button></a></div>
                <div className="passwd-dropdown dropdown">
                    <button className="passwd-dropbtn dropbtn">Passwords</button>
                    <div className="passwd-content dropdown-content">
                        <a href="passwdWork.html">How do Passwords Work?</a>
                        <a href="passwdCrack.html">How are Passwords Cracked?</a>
                        <a href="passwdProtect.html">How can Passwords be Protected?</a>
                    </div>
                </div>
                <div className="malware-dropdown dropdown">
                    <button className="malware-dropbtn dropbtn">Malware</button>
                    <div className="malware-content dropdown-content">
                        <a href="malwareWhat.html">What is Malware?</a>
                        <a href="malwareProtect.html">How can We Protect Against Malware</a>
                    </div>
                </div>
                <div className="phishing-dropdown dropdown">
                    <button className="phishing-dropbtn dropbtn">Phishing</button>
                    <div className="phishing-content dropdown-content">
                        <a href="phishingWhat.html">What are Phishing Attacks?</a>
                        <a href="phishingProtect.html">How can We Protect Against Phishing Attacks</a>
                    </div>
                </div>
            </div>
        );
    }
}