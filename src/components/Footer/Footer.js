import React from 'react';
import "./style.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div className='footer-component' id='footer'>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Join us on social media to stay connected with us :</span>
        </div>

        <div>
          <a href='https://gdsc.community.dev/ecole-marocaine-des-sciences-de-lingenieur-emsi-rabat/' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon color='secondary' fab icon='google' className='my-custom-icon-class'/>
          </a>
          <a href='https://www.instagram.com/gdsc_emsi_rabat/' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon color='secondary' fab icon='instagram' className='my-custom-icon-class'/>
          </a>
          <a href='https://www.linkedin.com/company/gdsc-emsi-rabat/' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon color='secondary' fab icon='linkedin' className='my-custom-icon-class'/>
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={process.env.PUBLIC_URL + "/media/images/gdsc.ico"} height={'40px'} width={'40px'} alt='gsdc icon' ></img>
                <MDBIcon color='secondary' className='me-3' />
                GDSC EMSI RABAT
              </h6>
              <p>
              It is a program that includes workshops, mentorship, and networking opportunities. 
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='http://hackathon.gdscemsi.com/' className='text-reset' target='_blank' rel="noopener noreferrer">
                  Hackathon
                </a>
              </p>
              <p>
                <a href='http://bootcamp.gdscemsi.com/' className='text-reset' target='_blank' rel="noopener noreferrer">
                  Bootcamp
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                EMSI Rabat
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                soon@gdscemsi.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' />+212 612 34 56 78
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4'>
        
        <div className="team">
        Copyright &copy; <script type="text/JavaScript"> document.write(new Date().getFullYear()); </script>
        All Rights Reserved | Powered by MADROM
          <div className="content">
            <h2>Developers</h2>
            <ul>
                <li>
                  <a href='https://www.linkedin.com/in/moncefajmani/' 
                      className='me-4 text-reset' 
                      target='_blank' rel="noopener noreferrer"
                    >
                      <MDBIcon color='primary' fab icon='linkedin' className='my-custom-icon-class'/>
                      <b>Moncef AJMANI</b>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/redalhorri/' className='me-4 text-reset' 
                    target='_blank' rel="noopener noreferrer">
                    <MDBIcon color='primary' fab icon='linkedin' className='my-custom-icon-class'/>
                    <b>Mohammed Reda LHORRI</b>
                  </a>
                </li>
                 <li>
                  <a href='https://www.linkedin.com/in/abdelilah-bourhou/' className='me-4 text-reset' 
                  target='_blank' rel="noopener noreferrer">
                    <MDBIcon color='primary' fab icon='linkedin' className='my-custom-icon-class'/>
                    <b>Abdelilah BOURHOU</b>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/oumayma-karkoubi-489066233/' className='me-4 text-reset' 
                  target='_blank' rel="noopener noreferrer">
                    <MDBIcon color='primary' fab icon='linkedin' className='my-custom-icon-class'/>
                    <b>Oumayma KARKOUBI</b></a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/doha-maghni-5b7693174/' className='me-4 text-reset' 
                  target='_blank' rel="noopener noreferrer">
                    <MDBIcon color='primary' fab icon='linkedin' className='my-custom-icon-class'/>
                    <b>Doha MAGHNI</b>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/elaassal-elmoukhtar/' className='me-4 text-reset' 
                  target='_blank' rel="noopener noreferrer">
                    <MDBIcon color='primary' fab icon='linkedin' className='my-custom-icon-class'/>
                    <b>EL Moukhtar EL AASSAL</b>
                  </a>
                </li>
            </ul>

            <h2>DevOps</h2>
            <ul>
            <li>
                  <a href='https://github.com/ChocTitans' className='me-4 text-reset' 
                  target='_blank' rel="noopener noreferrer">
                    <MDBIcon color='primary' fab icon='github' className='my-custom-icon-class'/>
                    <b>Hamza BOUBNANE </b>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/laouina-yassine/' className='me-4 text-reset' 
                  target='_blank' rel="noopener noreferrer">
                    <MDBIcon color='primary' fab icon='linkedin' className='my-custom-icon-class'/>
                    <b>Yassine LAOUINA</b>
                  </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </MDBFooter>
    </div>
  );
}
