// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {id, name, imgUrl} = destinationsList

  return (
    <li className="list-container">
      <div>
        <img src={imgUrl} className="image" alt={name} />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
