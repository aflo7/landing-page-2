import './App.css';
import logo from './assets/jpb-logo.webp';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok
} from 'react-icons/fa';
import optimized from './assets/Optimized.webp';

function App() {
  return (
    <>
      <div style={{ width: '1200px' }}>
        <nav>
          <img src={logo} alt="jpb-professional-marketing" height="120px" />
          <div
            className="rightHeader"
            style={{ display: 'flex', gap: '30px', alignItems: 'center' }}
          >
            <div>Home</div>
            <div>Digital Marketing Solutions</div>
            <div>Current Clients</div>
            <div>Blog</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </div>
        </nav>

        <div id="headerImg">
          <div className="local-wrapper">
            <h1 style={{ color: 'white' }}>
              Local, Personal, Relationship-Based Solutions
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p
                style={{
                  backgroundColor: 'rgb(50,53,64)',
                  width: 'fit-content',
                  padding: '5px 30px',
                  borderRadius: '20px',
                  color: 'white'
                }}
              >
                &quot;We help local businesses succeed!&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="adobe-stock">
          <div
            style={{
              padding: '60px',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ display: 'flex', gap: '20px' }}>
              <div
                style={{
                  border: '2px solid white',
                  borderRadius: '20px',
                  textTransform: 'uppercase'
                }}
                className="our-services"
              >
                Our services
              </div>
              <div
                style={{
                  border: '2px solid white',
                  borderRadius: '20px',
                  textTransform: 'uppercase'
                }}
                className="meet-our-team"
              >
                Meet our team
              </div>
            </div>
            <div className="icon-wrapper">
              <FaFacebookF id="reactIcon" />
              <FaInstagram id="reactIcon" />
              <FaTwitter id="reactIcon" />
              <FaLinkedinIn id="reactIcon" />
              <FaTiktok id="reactIcon" />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '1'
            }}
          >
            <img src={optimized} alt="optimized" style={{ width: '550px' }} />
            <div
              style={{
                backgroundColor: 'rgb(102,102,102)',
                color: 'white',
                padding: '100px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '500px',
                marginLeft: '-40px',
                marginTop: '60px'
              }}
            >
              <div style={{ fontSize: '2rem' }}>
                Welcome to <strong>JPB Marketing</strong>
              </div>
              <p style={{ color: 'lightgray' }}>
                JPB Professional Marketing is a full service marketing and media
                company that provides local, personal, relationship based
                solutions for our clients and their advertising needs. The JPB
                Mission is to help local businesses succeed. We help local
                businesses stand their ground against national and regional
                companies that are outmaneuvering them online, particularly in
                mobile search. In many cases as the primary and only marketing
                department for our clients, we level the playing field by giving
                local businesses the tools to succeed.{' '}
              </p>
              <div
                style={{
                  border: '2px solid white',
                  borderRadius: '20px',
                  width: 'fit-content',
                  textTransform: 'uppercase'
                }}
                className="learn-more"
              >
                Learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
