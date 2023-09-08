import React from 'react'

function Bootcamp() {
  return (
    <div>
        <div className='title-bootcamp  '>Bootcamp</div>
        <div className='h2'>Accelerate your tech career with our immersive <br></br>IT bootcamp and comprehensive career support</div>
        <table className='animated'>
            <tr >
                <td className="small-col white "> 
                    <span className='event-title-span'>Intensive learning environment</span>  <br></br> 
                    IT bootcamps are designed to provide an immersive, intensive learning experience that can accelerate your career in technology. You'll be surrounded by other motivated learners
                    <span className='event-title-span'>  <br></br> <br></br>Specialized skills</span> <br></br> It's focus on specific skills or technologies that are in high demand in the job market, such as web development, data science, or cybersecurity. By focusing on a specific area, you can gainknowledge and skills 
                </td>
               
                <td className="large-col">
                    <div className="card">
                        <a href="/">
                            <img src={process.env.PUBLIC_URL + "/media/images/boot.png"} className='card-img-top' alt='mo'/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Comming soon ...</h5>
                            <p className="card-text">Check out our up comming bootcamps</p>
                            <a href="/" className="btn btn-primary">click for More</a>
                        </div>
                    </div>
                </td>
            </tr>
            </table>
    </div>
  )
}

export default Bootcamp