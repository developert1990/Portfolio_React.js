import React from 'react'
import first_testimonial from '../../assets/img/testimonials/testimonial(Abraham).jpg'
import second_testimonial from '../../assets/img/testimonials/people face.jpg';

const Testimonials = () => {
    return (
        <div id="testimonials" className="testimonials">
            <div className="section__container">
                <div className="testimonial__title">
                    <h1>Testimonials</h1>
                    <h3>See what they say about me</h3>
                </div>
                <div className="testimonials">
                    <div className="testimonial">
                        <img src={first_testimonial} alt="People" className="testimonial__avata" />
                        <div className="testimonial__speech-bubble">
                            <p>Sangmean is a very comfortable around people. He does not hesitate to learn and enjoys acquiring new knowledge. He has a greate passion for coding. Above all, he has excellent problem-solving skills</p>
                            <p className="name">
                                <a href="https://www.linkedin.com/in/abraham-sohn-b35b5aa8/" target="_blank" rel="noopener noreferrer">

                                    Abraham (Jungsu) Sohn
                                </a>
                                    / Skyplan Services Ltd
                            </p>
                        </div>
                    </div>

                    <div className="testimonial">
                        <img src={second_testimonial} alt="People" className="testimonial__avata" />
                        <div className="testimonial__speech-bubble">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est soluta rerum eligendi
                            perferendis
                            unde incidunt voluptate tempora dolore odit voluptatibus.</p>
                            <p className="name">Hong / Google</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
