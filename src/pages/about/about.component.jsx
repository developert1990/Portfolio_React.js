import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../../assets/img/profile/Hong_Profile.jpg";
import SAITICON from '../../assets/img/education/saitLogo.png';
import UNIVERSITY_ICON from '../../assets/img/education/gyungsangUniversity.png';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


const About = () => {
    const initialOptions = {
        title: {
            text: "My Abilities",
            style: {
                color: ' #eee7e7',
            }
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        credits: { enabled: false },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}, {point.y:.1f}%',
                    color: ' #eee7e7',
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },
        xAxis: { type: 'category' },
        yAxis: {
            title: {
                text: 'Total percent my skills',

            }

        },
        legend: { enabled: false },
        series: [
            {
                name: "SKILL",
                colorByPoint: true,
                data: [
                    {
                        name: "Java",
                        y: 70.00,
                    },
                    {
                        name: "HTML",
                        y: 90.00,
                    },
                    {
                        name: "CSS",
                        y: 85.00,
                    },
                    {
                        name: "JavaScript",
                        y: 90.58,
                    },
                    {
                        name: "React",
                        y: 92.08,
                    },
                    {
                        name: "Node.js",
                        y: 70.00,
                    },
                    {
                        name: "TypeScript",
                        y: 40.00,
                    },
                    {
                        name: "SQL",
                        y: 65.62,
                    },
                    {
                        name: "UI/UX",
                        y: 42.62,
                    }
                ]
            }
        ],

    };


    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={initialOptions} />

                <Container >
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                <div className="about__introduction">
                                    Hi there! I am <strong>&nbsp;Sangmean Hong. </strong>
                                Write as many codes as I can. Make as many dreams as I can, I am a front-end developer who believes that code can change someone's world.<br />
                                The rapid growth in information Technology is reflected by the complex programming advancements made in many industries.<br /> The programmers working on self-driving vehicles in the automotive industry demonstrate the impact on society of continuous advancements through problem solving and programming. A string interest in new technology and my desire to learn were deciding factors in my education and career choice.<br />
                                I look forward to the opportunity to demonstrate my skills and contribute to the success of my employer by making significant contributions to all projects assigned to me.
                                </div>
                                <Col className="d-flex justify-content-center flex-wrap about__buttons">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2 button" variant="outline-primary">
                                                Let's talk
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1kFDGUioDflDiZk0nLZ2ZL7JDqOft65pT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2 button" variant="outline-warning">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/jadenHong" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2 button" variant="outline-danger">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/sangmean-hong/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2 button" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <div className="about__jobs">
                    <div className="job">
                        <img src={SAITICON} alt="sait" className="job__logo" />
                        <div className="job__description">
                            <p className="job__name">Southern Alberta Institute of Technology</p>
                            <p className="job__period">2020 Jan ~ </p>
                        </div>
                    </div>
                    <div className="job">
                        <img src={UNIVERSITY_ICON} alt="gyungsang" className="job__logo" />
                        <div className="job__description">
                            <p className="job__name">GyeongSang National University</p>
                            <p className="job__period">2009 Mar ~ 2018 Feb</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;