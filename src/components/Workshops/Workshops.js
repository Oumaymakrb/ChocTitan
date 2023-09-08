import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from 'react-bootstrap';
import WorkshopCard from './WorkshopCard';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper";
import './style.scss';
import WorkshopModal from './WorkshopModal';

import { workshops_data } from '../../utils/data';

export default function Workshops() {
    const [show, setShow] = useState(false);
    const [data,setData] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showModal = (data) =>{
        setData(data)
        handleShow()
    }
    return (
        <div className='workshops' id='workshops'>
        <WorkshopModal show={show} handleClose={()=>handleClose()} data={data} />
        <Container>
            <h2 className='text-center mb-5'>Workshops</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                  }}
                modules={[Autoplay, Pagination]}
            >
            {workshops_data?.map(
                (el, index)=> 
                    <SwiperSlide key={index}>
                        <WorkshopCard data={el} showModal={(_)=>showModal(_)}/>
                    </SwiperSlide>
                )
            }
            </Swiper>
        </Container>
        </div>
    )
}
