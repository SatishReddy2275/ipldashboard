/* eslint-disable react/no-unknown-property */
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchesData: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const matchUrl = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(matchUrl)
    const fetchedData = await response.json()

    const updatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: {
        id: fetchedData.latest_match_details.id,
        competingTeam: fetchedData.latest_match_details.competing_team,
        competingTeamLogo: fetchedData.latest_match_details.competing_team_logo,
        date: fetchedData.latest_match_details.date,
        firstInnings: fetchedData.latest_match_details.first_innings,
        manOfTheMatch: fetchedData.latest_match_details.man_of_the_match,
        matchStatus: fetchedData.latest_match_details.match_status,
        result: fetchedData.latest_match_details.result,
        secondInnings: fetchedData.latest_match_details.second_innings,
        umpires: fetchedData.latest_match_details.umpires,
        venue: fetchedData.latest_match_details.venue,
      },
      recentMatches: fetchedData.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }

    this.setState({matchesData: updatedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesData

    return (
      <div className="responsive-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
        {this.renderRecentMatchList()}
      </div>
    )
  }

  renderRecentMatchList = () => {
    const {matchesData} = this.state
    const {recentMatches} = matchesData
    return (
      <ul className="recent-match-ul">
        {recentMatches.map(eachMatch => (
          <MatchCard matchData={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

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
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dd'
      case 'RR':
        return 'rr'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const bgClassname = `team-match-container ${this.getClassName()}`
    return (
      <div className={bgClassname}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
