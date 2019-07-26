/* eslint-disable jsx-a11y/anchor-is-valid */
// import './Registration.scss'
import React, { Component } from 'react'
import axios from 'axios'
import './People.css'
import { Redirect } from 'react-router-dom'

class Planets extends Component {
  constructor (props) {
    super(props)
    this.state = {
      planets: [],
      redirectToPeople : false,
      redirectToStarships: false
    }
    this.getPlanets = this.getPlanets.bind(this)
  }

  getPlanets () {
    return axios.get('https://swapi.co/api/planets/')
      .then((response) => {
        
        this.setState({ planets: response.data.results })
      })
  }

  componentDidMount () {
    this.getPlanets()
  }
  redirectToPeople = () => {
    this.setState({redirectToPeople : true})
  }
    redirectToStarships = () => {
    this.setState({redirectToStarships : true})
  }
  render () {
    if(this.state.redirectToPeople){
      return <Redirect to='/' />
    } else if(this.state.redirectToStarships){
      return <Redirect to='/Starships' />
    } else{
    return (
      <div className='main' >
        <div className='header'>
          <h1>Star Wars</h1>
          <p>A long time ago in a galaxy far far away...</p>
          <nav>
            <div onClick={this.redirectToPeople}  className='planets'>people</div>
            <div onClick={this.redirectToStarships}  className='starship'>starship</div>
          </nav>
        </div>
        <div>
          {
            this.state.planets.map((p) => {
              console.log(p)

              return (<div className='list-name' key={p.url}>
                <h2>{p.name}</h2>
                <h3>height: {p.height}, mass: {p.mass}, gender: {p.gender}, skin_color: {p.skin_color}</h3>
              </div>
              )
            })}

        </div>
      </div>
    )}
  }
}

export default Planets
