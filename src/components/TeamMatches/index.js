import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: {}}

  componentDidMount() {
    this.getTeamMatches()
  }

  getFormattedData = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    id: data.id,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    date: data.date,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    umpires: data.umpires,
    venue: data.venue,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const matchUrl = `https://apis.ccbp.in/ipl/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(matchUrl, options)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(each =>
        this.getFormattedData(each),
      ),
    }

    this.setState({teamMatchesData: formattedData})
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatch} = teamMatchesData
    console.log(latestMatch)

    return (
      <div className="responsive-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch detailsRecentMatch={latestMatch} />
      </div>
    )
  }

  getClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'KKR':
        return 'kkr'
      case 'MI':
        return 'mi'
      case 'KXP':
        return 'kxp'
      case 'RCB':
        return 'rcb'
      case 'CSK':
        return 'csk'
      case 'SRH':
        return 'srh'
      case 'DD':
        return 'dd'
      case 'RR':
        return 'rr'
      default:
        return ''
    }
  }

  render() {
    const bgClassname = `team-match-container ${this.getClassName()}`
    return <div className={bgClassname}>{this.renderTeamMatches()}</div>
  }
}

export default TeamMatches
