import React from "react";
import Button from 'react-bootstrap/Button';

// projects
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_league from '../../assets/img/projects/leagueOfLegend.png';
import L_simpleMovie from '../../assets/img/projects/simplemovie.png';
import L_covid from '../../assets/img/projects/covid-19-tracker.png';
import L_simpleChat from '../../assets/img/projects/simplechat.png';
import L_gitSearch from '../../assets/img/projects/git-search.png';

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_Sass from "../../assets/img/skills/sass-1.svg";
import L_Mysql from "../../assets/img/skills/mysql.png";
import L_Socket from "../../assets/img/skills/socket_io.png";
import L_Material_ui from "../../assets/img/skills/material-ui-1.svg";
import L_Bootstrap from "../../assets/img/skills/bootstrap-4.svg";
import L_HighCharts from '../../assets/img/skills/highcharts.png';

import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";


import { Fade, Slide, Zoom, LightSpeed, Rotate } from 'react-reveal';

const TimeLine = () => {

    return (
        <div className="container bootstrap snippets bootdeys projects-page" id="projects">
            <h1 className="projects__top__title">Projects</h1>
            <div className="middle-container">
                <div className="timeline-centered timeline-sm">
                    <article className="timeline-entry">
                        <Slide right>
                            <div className="timeline-entry-inner">
                                <time datetime="2014-01-10T03:45" className="timeline-time"><span>12:45 AM</span><span>Today</span></time>
                                <div className="timeline-icon bg-violet"><i className="fa fa-exclamation"></i></div>
                                <div className="timeline-label">

                                    <h4 className="timeline-title">Creating Bigger</h4>
                                    <img style={{ width: '100%' }} src={L_league} alt="league" />
                                    <div>
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="0"
                                                    className="p-2 text-center accordian-main"
                                                >
                                                    PROJECT DETAILS
                                            </Accordion.Toggle>

                                                <Accordion.Collapse eventKey="0" className="text-left">
                                                    <Card.Body>
                                                        <h5>Description:</h5><p className="timeline-desc"> An app that detects face in a picture.</p> <hr />
                                                        <h5>Features:</h5>
                                                        <ul className="list-styles pt-1">
                                                            <li>Register new user</li>
                                                            <li>Signin exiting user</li>
                                                            <li>Keep tracks of entries for each user</li>
                                                        </ul>
                                                        <hr />
                                                        <h5>Tech used:</h5>
                                                        <ul>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image>{" "}
                                                            React
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Node.js
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Express
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_POSTGRESQL} alt="PostgreSQL" rounded className="image-style1 m-1" ></Image>{" "}
                                                            PostgreSQL
                                                            </span>
                                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>

                                    <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <Button

                                            className="timeline-button"
                                            variant="outline-warning"
                                            href="https://leagueoflegend.netlify.app/"
                                            target="_blank"
                                        >
                                            SEE LIVE
                                    </Button>
                                        <Button

                                            className="timeline-button"
                                            variant="outline-warning"
                                            href="https://github.com/jadenHong/leagueoflegends-app"
                                            target="_blank"
                                        >
                                            SOURCE CODE
                                    </Button>
                                    </div>


                                </div>
                            </div>
                        </Slide>
                    </article>
                    <article className="timeline-entry left-aligned">
                        <Slide left>
                            <div className="timeline-entry-inner">
                                <time datetime="2014-01-10T03:45" className="timeline-time"><span>9:15 AM</span><span>Today</span></time>
                                <div className="timeline-icon bg-green"><i className="fa fa-group"></i></div>
                                <div className="timeline-label bg-green">
                                    <h4 className="timeline-title">Github Search</h4>

                                    <img style={{ width: '100%' }} src={L_gitSearch} alt="league" />
                                    <div>
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="0"
                                                    className="p-2 text-center accordian-main"
                                                >
                                                    PROJECT DETAILS
                                            </Accordion.Toggle>

                                                <Accordion.Collapse eventKey="0" className="text-left github">
                                                    <Card.Body>
                                                        <h5>Description:</h5><p className="timeline-desc"> Search Github Users</p> <hr />
                                                        <h5>Features:</h5>
                                                        <ul className="list-styles pt-1">
                                                            <li>Search Gibhub users</li>
                                                            <li>check repositories and followers and so on</li>
                                                            <li>Sign in, Sign up</li>
                                                        </ul>
                                                        <hr />
                                                        <h5>Tech used:</h5>
                                                        <ul>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image>{" "}
                                                            React
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Node.js
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Express
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Sass} alt="sass" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Sass
                                                            </span>
                                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>

                                    <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <Button

                                            className="timeline-button"
                                            variant="outline-warning"
                                            href="https://git-search-hong.netlify.app/"
                                            target="_blank"
                                        >
                                            SEE LIVE
                                    </Button>
                                        {/* <Button
                                            variant="outline-warning"
                                            href=""
                                            target="_blank"
                                        >
                                            SOURCE CODE
                                    </Button> */}
                                    </div>

                                </div>
                            </div>
                        </Slide>
                    </article>
                    <article className="timeline-entry">

                        <Fade left>
                            <div className="timeline-entry-inner">
                                <time datetime="2014-01-09T13:22" className="timeline-time"><span>In the works</span><span>10/03/2020</span></time>
                                <div className="timeline-icon bg-orange"><i className="fa fa-paper-plane"></i></div>
                                <div className="timeline-label bg-orange">
                                    <h4 className="timeline-title">League Of Legends</h4>

                                    <img style={{ width: '100%' }} src={L_league} alt="league" />
                                    <div>
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="0"
                                                    className="p-2 text-center accordian-main"
                                                >
                                                    PROJECT DETAILS
                                            </Accordion.Toggle>

                                                <Accordion.Collapse eventKey="0" className="text-left league">
                                                    <Card.Body>
                                                        <h5>Description:</h5> <p className="timeline-desc">Explor player's information</p> <hr />
                                                        <h5>Features:</h5>
                                                        <ul className="list-styles pt-1">
                                                            <li>Register new user</li>
                                                            <li>Signin exiting user</li>
                                                            <li>Find user's rank by continent</li>
                                                            <li>Champion's detail with description and images</li>
                                                            <li>Match histories and more details</li>
                                                        </ul>
                                                        <hr />
                                                        <h5>Tech used:</h5>
                                                        <ul>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image>{" "}
                                                            React
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Node.js
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Express
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Bootstrap} alt="Bootstrap" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Bootstrap
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Material_ui} alt="Material-ui" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Material-ui
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Sass} alt="SASS" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Sass
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Socket} alt="socket" rounded className="image-style1 m-1" ></Image>{" "}
                                                            socket-io
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Mysql} alt="mysql" rounded className="image-style1 m-1" ></Image>{" "}
                                                            MySql
                                                            </span>
                                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>

                                    <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <Button

                                            className="timeline-button"
                                            variant="outline-warning"
                                            href="https://leagueoflegend.netlify.app/"
                                            target="_blank"
                                        >
                                            SEE LIVE
                                    </Button>
                                        <Button

                                            className="timeline-button"
                                            variant="outline-warning"
                                            href="https://github.com/jadenHong/leagueoflegends-app"
                                            target="_blank"
                                        >
                                            SOURCE CODE
                                    </Button>
                                    </div>

                                </div>
                            </div>

                        </Fade>
                    </article>





                    {/* 계속 추가 할 수 있음 */}


                    {/* covid-19 tracker 부분 */}

                    <article class="timeline-entry left-aligned">

                        <Zoom left>
                            <div className="timeline-entry-inner">
                                <time datetime="2014-01-09T13:22" className="timeline-time"><span>4:20 AM</span><span>08/11/2020</span></time>
                                <div className="timeline-icon bg-blue"><i className="fa fa-paper-plane"></i></div>
                                <div className="timeline-label bg-blue">
                                    <h4 className="timeline-title">COVID-19 Tracker</h4>

                                    <img style={{ width: '100%' }} src={L_covid} alt="covid" />
                                    <div>
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="0"
                                                    className="p-2 text-center accordian-main"
                                                >
                                                    PROJECT DETAILS
                                            </Accordion.Toggle>

                                                <Accordion.Collapse eventKey="0" className="text-left covid">
                                                    <Card.Body>
                                                        <h5>Description:</h5><p className="timeline-desc"> An app that monitor and track the status of the world's COVID-19</p> <hr />
                                                        <h5>Features:</h5>
                                                        <ul className="list-styles pt-1">
                                                            <li>Track COVID-19 each country</li>
                                                            <li>Deaths, Recoveries, New Cases</li>
                                                            <li>Keep following precautionary rules</li>
                                                        </ul>
                                                        <hr />
                                                        <h5>Tech used:</h5>
                                                        <ul>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image>{" "}
                                                            React
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Bootstrap} alt="Bootstrap" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Bootstrap
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Material_ui} alt="Material-ui" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Material-ui
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_CSS3} alt="css" rounded className="image-style1 m-1" ></Image>{" "}
                                                            CSS
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_HighCharts} alt="highcharts" rounded className="image-style1 m-1" ></Image>{" "}
                                                            HighCharts
                                                            </span>
                                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>

                                    <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <Button

                                            className="timeline-button"
                                            variant="outline-warning"
                                            href="https://covid-19-hong.netlify.app"
                                            target="_blank"
                                        >
                                            SEE LIVE
                                    </Button>
                                        <Button

                                            className="timeline-button"
                                            variant="outline-warning"
                                            href="https://github.com/jadenHong/COVID-19"
                                            target="_blank"
                                        >
                                            SOURCE CODE
                                    </Button>
                                    </div>

                                </div>
                            </div>

                        </Zoom>
                    </article>

                    {/* 채팅 앱 부분 */}
                    <article class="timeline-entry">
                        <LightSpeed left>
                            <div className="timeline-entry-inner">
                                <time datetime="2014-01-09T13:22" className="timeline-time"><span>10:20 PM</span><span>07/15/2020</span></time>
                                <div className="timeline-icon bg-grey"><i className="fa fa-paper-plane"></i></div>
                                <div className="timeline-label bg-grey">
                                    <h4 className="timeline-title">Chat</h4>

                                    <img style={{ width: '100%' }} src={L_simpleChat} alt="league" />
                                    <div>
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="0"
                                                    className="p-2 text-center accordian-main"
                                                >
                                                    PROJECT DETAILS
                                            </Accordion.Toggle>

                                                <Accordion.Collapse eventKey="0" className="text-left simplechat">
                                                    <Card.Body>
                                                        <h5>Description:</h5><p className="timeline-desc"> An Chatting application</p> <hr />
                                                        <h5>Features</h5>
                                                        <ul className="list-styles pt-1">
                                                            <li>Signin exiting user</li>
                                                            <li>Choose icon</li>
                                                            <li>Send text, video, photo</li>
                                                        </ul>
                                                        <hr />
                                                        <h5>Technology Used</h5>
                                                        <ul>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image>{" "}
                                                            React
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Node.js
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Express
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Socket} alt="PostgreSQL" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Socket-io
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_CSS3} alt="PostgreSQL" rounded className="image-style1 m-1" ></Image>{" "}
                                                            CSS
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Mysql} alt="mysql" rounded className="image-style1 m-1" ></Image>{" "}
                                                            MySql
                                                            </span>
                                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>

                                    <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <Button
                                            className="timeline-button"
                                            variant="outline-danger"
                                            href="https://simplechat-app.netlify.app"
                                            target="_blank"
                                        >
                                            SEE LIVE
                                    </Button>
                                    </div>

                                </div>
                            </div>

                        </LightSpeed>
                    </article>

                    {/* 심플 영화 부분 */}
                    <article class="timeline-entry left-aligned">

                        <Rotate left>
                            <div className="timeline-entry-inner">
                                <time datetime="2014-01-09T13:22" className="timeline-time"><span>8:20 PM</span><span>07/03/2020</span></time>
                                <div className="timeline-icon bg-green"><i className="fa fa-paper-plane"></i></div>
                                <div className="timeline-label bg-green">
                                    <h4 className="timeline-title">Simple Movie</h4>

                                    <img style={{ width: '100%' }} src={L_simpleMovie} alt="league" />
                                    <div>
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="0"
                                                    className="p-2 text-center accordian-main"
                                                >
                                                    PROJECT DETAILS
                                            </Accordion.Toggle>

                                                <Accordion.Collapse eventKey="0" className="text-left simplemovie">
                                                    <Card.Body>
                                                        <h5 >Description:</h5> <p className="timeline-desc">An movie app with multiple functions</p><hr />
                                                        <h5>Features</h5>
                                                        <ul className="list-styles pt-1">
                                                            <li>Register new user</li>
                                                            <li>Signin exiting user</li>
                                                            <li>Weather information you live in</li>
                                                            <li>Movie information</li>
                                                            <li>Bulletin Service</li>
                                                        </ul>
                                                        <hr />
                                                        <h5>Technology Used</h5>
                                                        <ul>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image>{" "}
                                                            React
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Node.js
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Express
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Sass} alt="PostgreSQL" rounded className="image-style1 m-1" ></Image>{" "}
                                                            Sass
                                                            </span>
                                                            </li>
                                                            <li>
                                                                <span className="p-2">
                                                                    <Image src={L_Mysql} alt="PostgreSQL" rounded className="image-style1 m-1" ></Image>{" "}
                                                            MYSQL
                                                            </span>
                                                            </li>
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>

                                    <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <Button
                                            className="timeline-button"
                                            variant="outline-warning"
                                            href="https://simplemovie.netlify.app"
                                            target="_blank"
                                        >
                                            SEE LIVE
                                    </Button>
                                        <Button
                                            className="timeline-button"
                                            variant="outline-warning"
                                            href="https://github.com/jadenHong/movie-app-view"
                                            target="_blank"
                                        >
                                            SOURCE CODE
                                    </Button>
                                    </div>

                                </div>
                            </div>

                        </Rotate>
                    </article>


                    <article class="timeline-entry">


                        <div class="timeline-entry-inner">
                            <time datetime="2014-01-09T13:22" class="timeline-time"><span>8:20 PM</span><span>04/03/2013</span></time>
                            <div class="timeline-icon bg-orange"><i class="fa fa-paper-plane"></i></div>
                            <div class="timeline-label bg-orange"><h4 class="timeline-title">Daily Feeds</h4>

                                <p>Parsley amaranth tigernut silver beet maize fennel spinach ricebean black-eyed. Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial.</p></div>
                        </div>

                    </article>


                    {/* 클래스 네임 lfet-aligned 나 right-aligned 로 좌우를 정한다. */}
                    <article class="timeline-entry left-aligned">
                        <div class="timeline-entry-inner">
                            <time datetime="2014-01-09T13:22" class="timeline-time"><span>8:20 PM</span><span>04/03/2013</span></time>
                            <div class="timeline-icon bg-orange"><i class="fa fa-paper-plane"></i></div>
                            <div class="timeline-label bg-orange"><h4 class="timeline-title">Daily Feeds</h4>

                                <p>Parsley amaranth tigernut silver beet maize fennel spinach ricebean black-eyed. Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial.</p></div>
                        </div>

                        {/* 마지막에 더하기 표시 */}
                        <div class="timeline-entry-inner">
                            <div class="timeline-icon"><i class="fa fa-plus"></i></div>
                        </div>
                    </article>




                </div>
            </div>
        </div>
    );
};

export default TimeLine;
























