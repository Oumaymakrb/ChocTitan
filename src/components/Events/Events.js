import React  from 'react';
import Bootcamp from './Bootcamp';
import Hackathon from './Hackathon';
import './style.css';

const Events = () =>{
    window.onscroll = function() {
        var element = document.querySelector('.animated');
        var position = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('slideIn');
        }
    };
    return ( 
    <div id='events'>
        
        <div className='head'> 
            <div className='gd'>GDSC <span className='event'>Events </span></div> 
        
        </div>
        <div className='boddy-h'>
            <Hackathon />
            
        </div>

        <div className='boddy-b'>
             <Bootcamp />
        </div>
   
    </div>
    
    );
}

export default Events;