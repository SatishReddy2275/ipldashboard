/* eslint-disable react/no-unknown-property */
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const teamUrl = 'https://apis.ccbp.in/ipl'
    const response = await fetch(teamUrl)
    const data = await response.json()
    const updatedTeamData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamData: updatedTeamData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamData} = this.state
    return (
      <ul className="team-ul">
        {teamData.map(each => (
          <TeamCard teamDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="dash-board-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="logo-head">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeamsList()}
      </div>
    )
  }
}

export default Home
