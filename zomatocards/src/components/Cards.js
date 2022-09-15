import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


const Cards = ({ data }) => {
    return (
        <>
            {
                data.map((element, k) => {
                    return (
                        <>
                            <Card style={{ width: '22rem',border:"none" }} className="hove mb-4">
                                <Card.Img variant="top" className='cd' src={element.imgdata} />
                                <style type="text/css">
                                    {`
                                .btn-book {
                                background-color: #24014E;
                                color: white;
                                }
                                .btn-book:hover {
                                background-color: #24014E;
                                }
                            `}
                            </style>
                                <div className="card_body">
                                    <div className='info'>
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{element.rname}</h4>
                                        
                                        <span className = 'purple'><Button as="input" type="button" value="Book" variant='book' />{' '}
                                        
                                        </span>
                                        
                                    </div>
                                    </div>

                                    <div className="lower_data d-flex  justify-content-between">
                                        <h5>{element.address}</h5>
                                    </div>
                                    

                                    <div className="extra"></div>
                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        
                                    </div>
                                   
                                </div>

                            </Card>
                        </>
                    )
                })

            }

        </>
    )
}
export default Cards;