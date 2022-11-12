import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';


export const Fav = () => {
    const dispatch=useDispatch()
    const selected = useSelector(state => state.movieRed.Fav)
    return (
        <div>
            <h1>fav</h1>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {selected.map((item)=>(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.url} style={{ width: "14rem" }} />
                <Card.Body>
                    <Card.Title>Title:{item.name}</Card.Title>

                      <Button onClick={()=>dispatch({type:"Remove-Fav",data:item })} >Remove</Button>
                </Card.Body>
            </Card>

                ))}
            </div>
        </div>
    );
};

