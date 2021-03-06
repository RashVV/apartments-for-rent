import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
//import PuppyList from './PuppyList'

class AllPuppies extends Component {
  // component to list all products


  state = {searchBreed: null}

  handleSearch(e){
    this.setState({searchBreed: e.target.value})
  }

  render() {
    let products = this.props.products
    if (this.state.searchBreed) products = products.filter(product => Object.values(product).join('').toLowerCase().includes(this.state.searchBreed.toLowerCase()) )
  return (
    <div className="blog-posts">
      <div className="main">
          <div className="section">
            <div className="nav nav-bar search-block">
                <h2 className="navbar-header" style = {{ textAlign: 'center' }}>Доступно на данный момент</h2>
                <form className="navbar-form navbar-right" role="search" onSubmit={e => e.preventDefault()}>
                  <div className="form-group form-white">
                  <input name="searchPuppy" type="text" className="form-control" placeholder="Найди свое жилье" onChange={this.handleSearch.bind(this)}/>
                  </div>
                  <button type="submit" className="btn btn-white btn-raised btn-fab btn-fab-mini" ><i className="material-icons">search</i></button>
                </form>
            </div>
            <div className="row">
              { products.map(puppy => {
                  return (
                      <div className="section product" key={puppy.id}>

                          <div className="product-img">
                              <img src={puppy.photos[0]} alt="{puppy.name}" className="card-img"/>
                              <div className="bottom-right">
                                  <i className="material-icons">photo_camera</i>{puppy.photos.length}
                              </div>
                          </div>
                            <div className="card-content">
                              <Link to={"/products/breed/"+ puppy.breed}>
                              <h6 className="category text-info">{puppy.breed}</h6></Link>

                              <h3 className="card-title">{puppy.name}</h3>
                              <h2>{puppy.price}</h2>

                              <p className="card-description">
                                {puppy.description.length < 50 ? puppy.description : puppy.description.slice(0,50) + '...'}
                              </p>
                              <Link className="btn btn-danger btn-round" to={"/products/" + puppy.id}>
                                <i className="material-icons">format_align_left</i> Подробнее
                              </Link>
                          </div>
                  </div>
                  )
                })
              }
            </div>
          </div>

      </div>
    </div>
  )
}}

const mapState = (state, ownProps) => {
  return {
      products: state.product
  }
}

export default connect(mapState)(AllPuppies)
