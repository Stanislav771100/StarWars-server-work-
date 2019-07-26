
// import './Registration.scss'
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './People.css'

class People extends Component {
  constructor (props) {
    super(props)
    this.state = {
      people: [],
      redirectToPlanets : false,
      redirectToStarships: false,
    }
    this.getPeople = this.getPeople.bind(this)
  }

  getPeople () {
    return axios.get('https://swapi.co/api/people/')
      .then((response) => {
        
        let people = response.data.results
        people.forEach(element => {
          element.showMore = false
        });
        this.setState({ people })
        
      }
      
      )
      
  }
  

  componentDidMount () {
    this.getPeople()
  }
  redirectToPlanets = () => {
    this.setState({redirectToPlanets : true})
  }
    redirectToStarships = () => {
    this.setState({redirectToStarships : true})
  }
  showMore = (index) => {
    let people = this.state.people
    people[index].showMore = !people[index].showMore
    
    this.setState({showMore: !this.state.showMore})
    
  }
  render () {
    if(this.state.redirectToPlanets){
        return <Redirect to='/Planets' />
      } else if(this.state.redirectToStarships){
        return <Redirect to='/Starships' />
      } else{
    return (
      <div className='main' >
        <div className='header'>
          <h1>Star Wars</h1>
          <p>A long time ago in a galaxy far far away...</p>
          <nav>
            <div onClick={this.redirectToPlanets} className='planets'>planets</div>
            <div onClick={this.redirectToStarships} className='starship'>starship</div>
          </nav>
        </div>
        <div>
          {
            this.state.people.map((p, index) => {
              

              return (<div className='list-name' key={p.url}>
                <h2 className="show-elem"  onClick={() => {this.showMore(index)}}>{p.name}</h2>
               
                {p.showMore &&  <h3>height: {p.height}, mass: {p.mass}, gender: {p.gender}, skin_color: {p.skin_color}</h3>}
              </div>
              )
            })}

        </div>
      </div>
    )}
  }
}

export default People
