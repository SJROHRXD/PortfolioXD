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
                        <Accordion.Header><a href="https://sjrohrxd.github.io/SNEWZ/">SNewZ</a></Accordion.Header>
                            <Accordion.Body>
                            SNewZ is a web-app that uses both a news API and a stock price API to provide up-to-date information 
                            and the most recent stock prices. Search for a company by its ticker symbol.
                            Snooze through the morning - you can find all you need on stocks right here.<br></br>
                            <a href="https://sjrohrxd.github.io/SNEWZ/">Live Site</a>
                                <div className='imageClass'>
                                    <img src="/images/SNEWZLOGO.png" alt="SNewZ Logo"/>
                                </div>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><a href="https://gist.github.com/ebfb3f319a9dd019adbb426712b0ff8b">Gist: RegEx</a></Accordion.Header>
                            <Accordion.Body>
                            A GitHub Gist on regular expressions and how to use RegEx to match an email address.
                            <div className='imageClass'>
                                    <img src="/images/CODINGSTUFF.jpg" alt="Vague Code"/>
                                </div>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><a href="https://github.com/SJROHRXD/Froject">Zapplicant</a></Accordion.Header>
                            <Accordion.Body>
                            Zapplicant is a web application designed for hiring managers and HR professionals 
                            with the aim of managing job applicants in a visually intuitive manner.
                            It allows the user to enter, modify, filter and rate potential employees based on the results of their interviews.<br></br>
                            <a href="https://zapplicant.herokuapp.com/applicant">Live Site</a>
                            <div className='imageClass' id="nav3">
                                    <img src="/images/ZAPPLOGO.png" alt="Zapplicant Logo"/>
                                </div>
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
}