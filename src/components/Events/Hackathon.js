import React from 'react'

function hackathon() {
  return (
    <div>
        <div className='title-hack'>Hackathon</div>
             <div className='h1'>The main goal of a Hackathon is to come <br></br>up with an innovative idea </div>
             <table className='animated'>
                 <tr >
                    <td className="small-col"> <span className='event-title-span'>Collaborative problem-solving</span>  <br></br>By bringing togethering together diverse individuals to leve diverse individuals to leverage each other's strengths for developing innovative solutions  
                        <span className='event-title-span'>  <br></br> <br></br>Intense focus and productivity </span> <br></br>  Hackathons foster intense focus, productivity, and camaraderie through time-limited events that motivate participants to work efficiently towards a common goal. 
                    </td>
                  

                    <td className="large-col">
                        <div className="card">
                            <a href="/#">
                                <img src={process.env.PUBLIC_URL + "/media/images/hack.png"} className='card-img-top' alt='mo'/>
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">Comming soon ...</h5>
                                <p className="card-text">Check out our up comming hackathons</p>
                                <a href="/#" className="btn btn-primary">click for More</a>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
    </div>
  )
}

export default hackathon