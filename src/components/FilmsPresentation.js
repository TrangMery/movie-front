import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Container, Carousel, Row, Col, Card, Icon, CardTitle, Button } from 'react-materialize'
FilmsPresentation.propTypes = {
    films: PropTypes
};

/**
 * It takes in an array of films and returns a div with a bunch of divs inside it
 * @returns An array of JSX elements.
 */
export default function FilmsPresentation({ films }) {
    const [film, setFilm] = useState([])
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <Container className="container1">
        <Row>
            {films.map((film) => (
                
                <Col m={4} s={6} > 
                    <Card className="card_below" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                     closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={film.img} reveal waves="light" />}
                        reveal={
                            <div className="reveal_show">
                                <p>{film.year} - {film.nation}</p>
                            </div>}
                        revealIcon={<Icon>more_vert</Icon>}
                        title={film.title}
                    >
                        <p>
                            <Button className="btn-small" onClick={() => { setFilm(film) }} style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                                <Link to={`detail/${film.id}`} style={{ textDecoration: "none" }}>Detail</Link>
                            </Button>

                        </p>
                    </Card>
                </Col>
            ))}
            {/* <div id='detail' className='overlay'>
                <div className='popup'>
                <img src={film.img}/>
                <h2>{film.title}</h2>
                <a className='close' href='#'>&times;</a>
                <div className='content'>
                    {film.info}
                </div>
                </div>
            </div> */}
          </Row>
        </Container>
    );
}
