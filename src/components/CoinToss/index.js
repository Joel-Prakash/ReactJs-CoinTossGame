import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    headCount: 0,
    tailCount: 0,
    url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickingButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({count: prevState.count + 1}))
    if (tossResult === 0) {
      this.setState({
        url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState({
        url: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
    }
  }

  render() {
    const {count, headCount, tailCount, url} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={url} className="image" alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickingButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {count}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
