// import './Registration.scss'
import React, { Component } from 'react'
import axios from 'axios'
import './People.css'
import { Redirect } from 'react-router-dom'

class Starships extends Component {
  constructor (props) {
    super(props)
    this.state = {
      starship: [],
      redirectToPeople : false,
      redirectToPlanets: false
    }
    this.getPlanets = this.getStarship.bind(this)
  }

  getStarship () {
    return axios.get('https://swapi.co/api/starships/')
      .then((response) => {
      
        this.setState({ starship: response.data.results })
      })
  }

  componentDidMount () {
    this.getStarship()
  }
  redirectToPeople = () => {
    this.setState({redirectToPeople : true})
  }
    redirectToPlanets = () => {
    this.setState({redirectToPlanets : true})
  }
  render () {
    if(this.state.redirectToPlanets){
        return <Redirect to='/Planets' />
      } else if(this.state.redirectToPeople){
        return <Redirect to='/' />
      } else{
    return (
      
      <div className='main' >
        <div className='header'>
          <h1>Star Wars</h1>
          <p>A long time ago in a galaxy far far away...</p>
          <nav>
            <div onClick={this.redirectToPeople} className='planets'>planets</div>
            <div onClick={this.redirectToPlanets} className='starship'>people</div>
          </nav>
        </div>
        <div>
          {
            this.state.starship.map((p) => {
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

export default Starships
