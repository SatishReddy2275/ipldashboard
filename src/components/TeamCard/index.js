import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {teamImageUrl, name, id} = teamDetails
  return (
    <div className="team-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <h1 className="team-head">{name}</h1>
      </Link>
    </div>
  )
}

export default TeamCard
