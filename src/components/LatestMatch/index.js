import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="latest-match-container">
        <div className="first-row">
          <p className="head-1">{competingTeam}</p>
          <p className="head-2">{date}</p>
          <p className="para-details">{venue}</p>
          <p className="para-details">{result}</p>
        </div>
        <div className="competing-img-container">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-img"
          />
        </div>
        <div className="third-row">
          <div className="match-item">
            <p className="match-label">First Innings</p>
            <p className="match-value">{firstInnings}</p>
          </div>
          <div className="match-item">
            <p className="match-label">Second Innings</p>
            <p className="match-value">{secondInnings}</p>
          </div>
          <div className="match-item">
            <p className="match-label">Man Of The Match</p>
            <p className="match-value">{manOfTheMatch}</p>
          </div>
          <div className="match-item">
            <p className="match-label">Umpires</p>
            <p className="match-value">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
