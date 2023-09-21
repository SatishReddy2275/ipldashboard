import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchData
  return (
    <li className={`match-card ${matchStatus}`}>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
