import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {count: 0, commentsList: [], name: '', comment: ''}

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  addToList = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }
  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }
  deleteItem = id => {
    const filteredList = this.state.commentsList.filter(each => {
      return each.id !== id
    })
    this.setState(prevState => ({
      commentsList: filteredList,
      count: prevState.count - 1,
    }))
  }
  render() {
    const {commentsList, count, name, comment} = this.state
    return (
      <div>
        <h1 className="head">Comments</h1>
        <form className="bg-container" onSubmit={this.addToList}>
          <div className="top-comments-con">
            <p className="label-ele">Say Something about 4.O technologies</p>

            <input
              className="input-ele"
              placeholder="Your Name"
              onChange={this.changeName}
              value={name}
            />
            <br />

            <textarea
              placeholder="Your Comment"
              className="text-area"
              onChange={this.changeComment}
              value={comment}
            ></textarea>
            <br />
            <button className="button">Add Comment</button>
          </div>
          <div className="top-image-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comment-image"
              alt="comments"
            />
          </div>
        </form>
        <hr className="hori-line" />
        <div>
          <p className="comment-para">
            <span className="count-comment">{count}</span> comments
          </p>
          <ul className="unordered-list">
            {commentsList.map(each => {
              return (
                <CommentItem
                  eachComment={each}
                  initialContainerBackgroundClassNames={
                    initialContainerBackgroundClassNames
                  }
                  toggleLike={this.toggleLike}
                  deleteItem={this.deleteItem}
                  key={each.id}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
