import "./style.scss";
import { IKVideo, IKContext } from 'imagekitio-react';
import { video } from "../../utils/media";

const About = () =>{
    return(
        <div className="about-section container">
            <div className="about" id="about">
                    <div>
                        <IKContext urlEndpoint="https://ik.imagekit.io/c8tuygr88">
                            <IKVideo className="about-vid"
                                path={video}
                                controls={true}
                                autoPlay={true}
                                loop={true}
                                muted={true}
                            />
                        </IKContext>
                    </div> 
                    <div className="about-content">
                        <h2 className="font-weight-bold">
                            About 
                            <span className="text-danger"> G</span>
                            <span className="text-primary">D</span>
                            <span className="text-success">S</span>
                            <span className="text-warning">C</span>
                        </h2>
                        <p> It's a program for university students to learn mobile and web development skills. It is a program that includes workshops, mentorship, and networking opportunities. <br/>
                         Google Developer Student Clubs are university based community groups for students interested in Google developer technologies.<br/>
                         Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome.<br/>
                         By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
                    </div>
                
            </div>
        </div>
    );
};
export default About;