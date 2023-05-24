import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from 'react-stars'
import {  Navigate } from 'react-router-dom'


const MovieCard = ({movie}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>{movie.description} </Card.Text>
  <Card.Text>{movie.rate}</Card.Text>
  <ReactStars
  size={30}
  half={false}
  edit={false}
  count={5}
  value={movie.rate}  
  />
   <Button  onClick ={() => Navigate(`../Trailer/${movie.id}`)}>
           Watch trailer
          </Button>
<Button  onClick={() => Navigate (`../Pages/Description/${movie.id}`)}>
      Description
    </Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard