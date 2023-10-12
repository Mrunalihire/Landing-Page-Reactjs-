import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="logo">
            <h1>Startup 3</h1>
          </div>
          <nav className="navigation">
            <div className="nav-link overview">Overview</div>
            <div className="nav-link prices">Prices</div>
            <div className="nav-link blog">Blog</div>
            <div className="nav-link feedback">Feedback</div>
            <div className="nav-link purchase">Purchase</div>
          </nav>
        </div>
        <div className="main-content">
          <div className="info-panel">
            <h2 className="page-title">Generate Awesome Web Pages</h2>
            <div className="info-text">
              <p>The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.</p>
            </div>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="login-form">
            <div className="content-box">
              <h1 className="signup-title">Sign Up Now</h1>
              <div className="input-box">
                <input type="email" placeholder="Your email" id="email" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Your password" id="password" />
              </div>
              <div className="terms">
                <div className="checkmark">
                  <input type="checkbox" />
                </div>
                <span>I agree to the Terms of Service.</span>
              </div>
              <div className="social-login">
                <button className="twitter-login" style={{ backgroundColor: '#482BE7' }}>Sign In</button>
                <div className="separator">
                  <div className="line"></div>
                  <div className="or">or</div>
                  <div className="line"></div>
                </div>
                <button className="twitter-login">Login via Twitter</button>
              </div>
              <div className="question">
                <p>Do you have an Account? <a href="#">Sign In</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

