import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import LevelThree from '../Planet/Levelthree';
import API from '../../utils/Api';
import { Carousel } from 'react-bootstrap';

function Characsel({ characters }) {
    return (
        <div>
            <Carousel>
                {characters ? (
                    characters.map((character) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={`/${character.image}`}
                                    // alt={item.alt}
                                />
                                <Carousel.Caption>
                                    <h3>{character.name}</h3>
                                    <p>{character.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
						// 					key = { character.name }
                        // name = { character.name }
                        // image = { character.image }
                        // description = { character.description }
                        // birth_year = { character.birth_year }
										
									);
								})
							)  : (<div></div>)
							}
            </Carousel>

        </div>
    )
    }
export default Characsel;