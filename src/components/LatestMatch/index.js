import './index.css'

const LatestMatch = props => {
  const {detailsRecentMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    date,
    result,
    manOfTheMatch,
    umpires,
    venue,
  } = detailsRecentMatch
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
          alt={competingTeam}
          className="competing-img"
        />
      </div>
      <div className="third-row">
        <p className="innings">
          First Innings <br />
          {firstInnings}
        </p>
        <p className="innings">
          Second Innings <br />
          {secondInnings}
        </p>
        <p className="innings">
          Man Of The Match <br />
          {manOfTheMatch}
        </p>
        <p className="innings">
          Umpires
          <br />
          {umpires}
        </p>
      </div>
    </div>
  )
}

export default LatestMatch
