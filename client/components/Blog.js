import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getCart, addToCart, removeFromCart, deleteFromCart} from '../store'

const ShoppingCart = (props) => {
    const products = props.products

    return (
        <div className="section text-center">
            <h2 className="title">Made with 🐶 by our team:</h2>
            <div className="team">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card card-profile card-plain">
                            <div className="col-md-5">
                                <div className="card-image">
                                    <a href="https://www.linkedin.com/in/janninechan/">
                                        <img
                                            className="img"
                                            src="../resources/jannine.jpg"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card-content">
                                    <h4 className="card-title">Jannine Chan</h4>
                                    <h6 className="category text-muted">Fullstack Software Engineer</h6>

                                    <p className="card-description">
                                        I want a position that's challenging and combines my varied experiences, analytical skills, and desire to build amazing user experiences as a full stack developer. I am eager to learn and always exploring other new technologies and libraries. </p>

                                    <div className="footer">
                                        <a
                                            href="https://www.linkedin.com/in/janninechan/"
                                            className="btn btn-just-icon btn-simple btn-linkedin"
                                        >
                                            <i className="fa fa-linkedin" />
                                        </a>

                                        <a
                                            href="https://www.instagram.com/butter_where/"
                                            className="btn btn-just-icon btn-simple btn-instagram"
                                        >
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a
                                            href="https://github.com/jn9cn"
                                            className="btn btn-just-icon btn-simple btn-google"
                                        >
                                            <i className="fa fa-github" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card card-profile card-plain">
                            <div className="col-md-5">
                                <div className="card-image">
                                    <a href="https://www.linkedin.com/in/eseite/">
                                        <img
                                            className="img"
                                            src="../resources/elisabeth.jpg"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card-content">
                                    <h4 className="card-title">Elisabeth Seite</h4>
                                    <h6 className="category text-muted">
                                        FullStack Software Engineer
                                    </h6>

                                    <p className="card-description">
                                        I am a world traveler who want to use my abilities to blend logic, problem solving and creativity, and pushed the limit of what's possible. I look forward to discovering new challenges and technologies through fun projects.
                                    </p>

                                    <div className="footer">
                                        <a
                                            href="https://www.linkedin.com/in/eseite/"
                                            className="btn btn-just-icon btn-simple btn-linkedin"
                                        >
                                            <i className="fa fa-linkedin" />
                                        </a>
                                        <a
                                            href="https://github.com/eseite47"
                                            className="btn btn-just-icon btn-simple btn-google"
                                        >
                                            <i className="fa fa-github" />
                                        </a>
                                        <a
                                            href="https://twitter.com/eseite47"
                                            className="btn btn-just-icon btn-simple btn-twitter"
                                        >
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card card-profile card-plain">
                            <div className="col-md-5">
                                <div className="card-image">
                                    <a href="https://www.linkedin.com/in/forrest-wolf/">
                                        <img
                                            className="img"
                                            src="../resources/forrest.jpg"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card-content">
                                    <h4 className="card-title">Forrest Wolf</h4>
                                    <h6 className="category text-muted">FullStack Software Engineer</h6>

                                    <p className="card-description">
                                        Description coming soon!
                                    </p>

                                    <div className="footer">
                                        <a
                                            href="https://www.linkedin.com/in/forrest-wolf/"
                                            className="btn btn-just-icon btn-simple btn-linkedin"
                                        >
                                            <i className="fa fa-linkedin" />
                                        </a>
                                        <a
                                            href="https://github.com/ForrestWeiswolf"
                                            className="btn btn-just-icon btn-simple btn-google"
                                        >
                                            <i className="fa fa-github" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card card-profile card-plain">
                            <div className="col-md-5">
                                <div className="card-image">
                                    <a href="https://www.linkedin.com/in/shawnswyxwang/">
                                        <img
                                            className="img"
                                            src="../resources/shawn.jpg"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card-content">
                                    <h4 className="card-title">Shawn Wang</h4>
                                    <h6 className="category text-muted">FullStack Software Engineer</h6>

                                    <p className="card-description">
                                        I'm a pseudo poetic semi athletic diaphoretic peripatetic sharing the things I find very aesthetic. follow me @swyx
                                    </p>

                                    <div className="footer">
                                        <a
                                            href="https://www.linkedin.com/in/shawnswyxwang/"
                                            className="btn btn-just-icon btn-simple btn-linkedin"
                                        >
                                            <i className="fa fa-linkedin" />
                                        </a>
                                        <a
                                            href="https://twitter.com/swyx"
                                            className="btn btn-just-icon btn-simple btn-twitter"
                                        >
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a
                                            href="https://github.com/sw-yx"
                                            className="btn btn-just-icon btn-simple btn-google"
                                        >
                                            <i className="fa fa-github" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapPropToCart, mapDispatch)(ShoppingCart)