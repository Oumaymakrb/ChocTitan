import React from 'react';
import { Card, Badge } from 'react-bootstrap';

export default function WorkshopCard({data,showModal}) {
    const { id, date, title, subtitle, thumbnail } = data

    const shortenDescription = (description) =>{
        const words = description?.split(" ");
        let shortened = words?.slice(0, 13).join(" ");
        
        if (words?.length > 13) {
          shortened += "...";
        }
        return shortened;
    }
    return (
    <Card key={id} style={{overflow:"hidden",cursor:"pointer"}} onClick={()=>showModal(data)}>
        {new Date(date) > new Date() ? <Badge className="workshop__card-tag" bg="success">Upcoming</Badge>: <Badge className="workshop__card-tag" bg="secondary">Past</Badge>}
        <div className='workshop__card-thumbnail' style={{backgroundImage:`url(${thumbnail})`,height:'250px',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <Card.Body>
            <Card.Subtitle className='text-secondary'>{date}</Card.Subtitle>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{shortenDescription(subtitle)}</Card.Text>
        </Card.Body>
    </Card>
    )
}
