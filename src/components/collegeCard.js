import React, { useState } from 'react';
import college1 from './college_01.jpg';
import college2 from './college_02.jpg';
import Star from './star'
const CollegeCard = (props) => {
    console.log(props);
    return (
        <div className="child">

            <div className="card">
                <img src={props.id % 2 === 0 ? college1 : college2} width="100%" />
                <div className="imageText">
                    <div className="tag1">{props.tags[0]}</div>
                    <div className="tag2">{props.tags[1]}</div>
                    <p className="ranking"> #{props.ranking}</p>
                </div>
                <div className="promotedContainer">
                    <div className="promoted">
                        Promoted
                    </div>
                </div>
                <div className="ratingText">
                    <span className="ratingOut">{props.rating}</span>/5<br /> Very Good
                </div>
                <div className="collegeDetails">
                    <div className="collegeDetailsLeft">
                        <div style={{ display: 'flex' }}>
                            <p style={{ fontSize: '15px', marginRight: '10px' }}>{props.college_name}</p>
                            <Star
                                rating={props.rating} />
                        </div>
                        <p className="nearestPlace">{props.nearest_place[0]} | <span style={{ color: 'gray' }}>{props.nearest_place[1]}</span></p>
                        <p className="nearestPlace"><span style={{ color: '#1DB9C3' }}>93% Match:
                        </span> {props.famous_nearest_places.split(' ')[0] + " "}
                            <span style={{ color: 'gray' }}>{props.famous_nearest_places.split(' ')[1] + " " +
                                props.famous_nearest_places.split(' ')[2] + " " +
                                props.famous_nearest_places.split(' ')[3]
                            }
                            </span>
                            <span>{props.famous_nearest_places.split(' ')[4] + " "}</span>
                            <span>{props.famous_nearest_places.split(' ')[5] + " "}</span>
                            <span style={{ color: 'gray' }}>{props.famous_nearest_places.split(' ')[6] + " " +
                                props.famous_nearest_places.split(' ')[7] + " " +
                                props.famous_nearest_places.split(' ')[8]
                            }
                            </span>
                            {/* <span>{props.famous_nearest_places.split(' ')[2]}</span> */}
                        </p>

                    </div>
                    <div className="collegeDetailsRight">
                        <div className="price-container">
                            <p className="originalFees">₹{props.original_fees}</p>
                            <p class="card-price">{props.discount + '%'}</p>
                        </div>
                        <p className="discountedFees">₹ {props.discounted_fees}</p>
                        <p className="feesCycle">{props.fees_cycle}</p>
                    </div>
                </div>
                <div className="bottomCard">
                    <p className="offertext">{props.offertext}</p>
                    <p className="amenities">{props.amenties[0] + ' ' + props.amenties[1]}</p>
                </div>
            </div>


        </div >
    )
}

export default CollegeCard;