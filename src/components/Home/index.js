import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamData: []}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const teamUrl = 'https://apis.ccbp.in/ipl'
    const option = {
      method: 'GET',
    }
    const response = await fetch(teamUrl, option)
    const data = await response.json()
    const updatedTeamData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamData: updatedTeamData})
  }

  render() {
    const {teamData} = this.state
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
        <ul className="team-ul">
          {teamData.map(each => (
            <TeamCard teamDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
