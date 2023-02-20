import React from 'react'
import { Container, Row, Col, Card, Icon, CardTitle, Carousel, Button, Tabs, Tab, Parallax } from 'react-materialize'
import { news } from '../shared/MovieNews'
export default function News() {
    return (
        <div className="new">

            <Tabs
                className="tab-demo z-depth-1"
                scope="tabs-22"
            >
                <Tab
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="Daily News"
                >

                    <Container>
                        {news.map((anew) => (
                            <section>
                                <h3>{anew.title}</h3>
                                <p>{anew.time}</p>
                                <img src={anew.image} alt="nothing" />
                                <p>{anew.description}</p>
                            </section>

                        ))}

                    </Container>

                </Tab>
            </Tabs>
        </div>
    )
}
