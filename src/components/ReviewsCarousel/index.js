// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onLeftProfile = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  onRightProfile = () => {
    const {reviewsList} = this.props
    const {id} = this.state
    if (id < reviewsList.length - 1) {
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[id]
    console.log(reviewsList[id])
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img className="image1" alt={username} src={imgUrl} />
        <div className="container1">
          <button type="button" className="b1" data-testid="leftArrow">
            <img
              className="image2"
              alt="left arrow"
              onClick={this.onLeftProfile}
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          <p className="p1">{username}</p>

          <button type="button" className="b1" data-testid="rightArrow">
            <img
              className="image2"
              onClick={this.onRightProfile}
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
        <p>{companyName}</p>
        <p className="p2">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
