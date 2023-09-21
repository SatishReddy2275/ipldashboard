import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {teamImageUrl, name, id} = teamDetails
  return (
    <li className="team-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="team-head">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
