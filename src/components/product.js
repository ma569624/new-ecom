import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Product = () => {
    const [data, setdata] = useState([])
    const [filter, setfilter] = useState(data)
    const [loading, setloading] = useState(false)
    let componentMunt = true;
    useEffect(() => {
        const getproduct = async () => {
            setloading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (componentMunt) {
                setdata(await response.clone());
                setfilter(await response);
                setloading(false);
                console.log("data", filter);
            }
            return () => {
                // componentMunt = false;
            }
        }

        getproduct();
    }, [])

    const Loading = () => {
        if (loading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        {/* <span className="sr-only">Loading...</span> */}
                    </div>
                </div>
            )
        }
    }
    const ShowProduct = () => {
        return (
            <>
                <Row>
                    <Button variant='outline-primary'>All</Button>
                    <Button variant='outline-primary'>Mens</Button>
                    <Button variant='outline-primary'>Jewelery</Button>

                    
                </Row>
                    {
                        filter.map((product) => {
                            <Col xs='3'>
                                <Card className="">
                                    <Card.Body>
                                        <Card.Title>
                                            product.name
                                        </Card.Title>
                                        <span></span>
                                        <span></span>
                                        <Button>More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        })

                    }
            </>
        )
    }
    return (
        <>
            <Container>
                <Row>
                    <Col xs='12'>
                        <h1>Products List</h1>
                    </Col>
                </Row>
                <Row>
                    {loading ? <Loading /> : <ShowProduct />}
                    
                </Row>
            </Container>
        </>
    )
}

export default Product