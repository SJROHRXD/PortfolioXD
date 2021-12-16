import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container';

export default function Meat() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
    return (
        <div>
            <Container>
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>SNewZ</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                                <div className='imageClass'>
                                    <img src="/images/imagetest.png" alt="website design"/>
                                </div>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Gist: RegEx</Accordion.Header>
                            <Accordion.Body>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            <div className='imageClass'>
                                    <img src="/images/imagetest.png" alt="website design"/>
                                </div>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Zapplicant</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            <div className='imageClass'>
                                    <img src="/images/imagetest.png" alt="website design"/>
                                </div>
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
}