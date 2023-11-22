class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <link rel="stylesheet" href="../assets/NavBar.css" />
                <div className="home-dropdown dropdown"><a id="home-link" href="../index.html"><button className="home-dropbtn dropbtn">Home</button></a></div>
                <div className="passwd-dropdown dropdown">
                    <button className="passwd-dropbtn dropbtn">Passwords</button>
                    <div className="passwd-content dropdown-content">
                        <a href="../passwords/passwdWork.html">How do Passwords Work?</a>
                        <a href="../passwords/passwdCrack.html">How are Passwords Cracked?</a>
                        <a href="../passwords/passwdProtect.html">How can Passwords be Protected?</a>
                    </div>
                </div>
                <div className="malware-dropdown dropdown">
                    <button className="malware-dropbtn dropbtn">Malware</button>
                    <div className="malware-content dropdown-content">
                        <a href="../malware/malwareWhat.html">What is Malware?</a>
                        <a href="../malware/malwareProtect.html">How can we Protect Against Malware?</a>
                    </div>
                </div>
                <div className="phishing-dropdown dropdown">
                    <button className="phishing-dropbtn dropbtn">Phishing</button>
                    <div className="phishing-content dropdown-content">
                        <a href="../phishing/phishingWhat.html">What are Phishing Attacks?</a>
                        <a href="../phishing/phishingProtect.html">How can we Protect Against Phishing Attacks?</a>
                    </div>
                </div>
            </div>
        );
    }
}