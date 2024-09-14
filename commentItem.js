import './index.css'

const CommentItem = props => {
  const {
    eachComment,
    initialContainerBackgroundClassNames,
    toggleLike,
    deleteItem,
    key,
  } = props
  const {name, comment, isLike, id} = eachComment
  const col = Math.floor(Math.random() * 7)
  const fir = name[0]
  const imgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const isLiked = () => {
    toggleLike(id)
  }
  const isDeleted = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item">
      <div className="para-con">
        <p className={`para ${initialContainerBackgroundClassNames[col]}`}>
          {fir}
        </p>
        <p className="name">{name}</p>
        <p className="comment1">less than a minute ago</p>
      </div>
      <p className="comment2">{comment}</p>
      <div className="images-con">
        <div className="inner-image-con">
          <img src={imgUrl} className="image" onClick={isLiked} alt="like" />
          <button className="like-button" onClick={isLiked}>
            Like
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          className="image"
          onClick={isDeleted}
          alt="delete"
          data-testid="delete"
        />
      </div>
      <hr className="hori-line2" />
    </li>
  )
}

export default CommentItem
