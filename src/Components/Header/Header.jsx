import callImg from '../../../public/assets/kingClean (31).png';
import mailImg from '../../../public/assets/kingClean (30).png';
import './Header.css';
import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate=useNavigate();
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light px-0" expand="lg">
      <div className="container-fluid p-0">
        <a className="navbar-brand" href="#">
          <span className='king'> KING </span><span className='sol'>Solutions</span>
        </a>
        <div className="d-flex align-items-center">
          <div className="call-container d-flex flex-column align-items-center me-4">
            <div className="d-flex align-items-center">
              <div className="call-icon rounded-circle d-flex justify-content-center align-items-center me-2">
                <img src={callImg} alt="Call Icon" width="20" height="20" />
              </div>
              <div>
                <span className="call-text">Call Us Now</span>
                <a className="nav-link" href="tel:13003429334">
                  13003429334
                </a>
              </div>
            </div>
          </div>
          <a className="nav-link d-flex align-items-center" href="mailto:kingsolutions@gmail.com">
            <div className="mail-icon rounded-circle d-flex justify-content-center align-items-center me-2">
              <img src={mailImg} alt="Mail Icon" width="20" height="20" />
            </div>
            kingsolutions@gmail.com
          </a>
          <button className="btn btn-success ms-4" onClick={()=>navigate('/formpage')}>Get A Quote</button>
        </div>
      </div>
    </Navbar>
  );
}
