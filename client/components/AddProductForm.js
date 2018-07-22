import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import { fetchProducts } from '../store/product';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
class AddProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        const { children, handleClick, isLoggedIn } = this.props

        return (
            <div>
                <div className="form-group form-file-upload form-file-simple">
                    <input type="text" className="form-control inputFileVisible" placeholder="Заголовок..." />
                    <input type="file" className="inputFileHidden" />
                </div>

                <div className="form-group form-file-upload form-file-multiple">
                    <input type="file" multiple="" className="inputFileHidden" />
                    <div className="input-group">
                        <input type="text" className="form-control inputFileVisible" placeholder="Местоположение*" />
                        <span className="input-group-btn">
                                <button type="button" className="btn btn-fab btn-round btn-primary">
                                    <i className="material-icons">attach_file</i>
                                </button>
                            </span>
                    </div>
                </div>

                <div className="col-md-5 col-sm-8">
                    <form onSubmit={this.handleSubmit}>
                        <div className="fileinput fileinput-new text-center" data-provides="fileinput">
                            <div className="fileinput-new thumbnail img-raised">
                                <img src="../resources/assets/img/image_placeholder.jpg" alt="..." />
                            </div>
                            <div className="fileinput-preview fileinput-exists thumbnail img-raised"></div>
                            <div>
                            <span className="btn btn-raised btn-round btn-default btn-file">
                                <span className="fileinput-new">Select image</span>
                                <span className="fileinput-exists">Change</span>
                                <input type="file" value={this.state.value} onChange={this.handleChange} name="..."/>

                            </span>
                                <input type="submit" value="Submit" />
                                <a href="#pablo" className="btn btn-danger btn-round fileinput-exists"
                                   data-dismiss="fileinput"><i className="fa fa-times"></i> Remove</a>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )

    }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        isLoggedIn: !!state.user.id
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleClick() {
            dispatch(logout())
        },
        fetchData() {
            dispatch(fetchProducts())
        }
    }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(AddProductForm))