import React, { Component } from "react"

class Offer extends Component {
  render() {
    const { title, text, text2, iframe } = this.props
    return (
      <>
        <div className="offer">
          <div className="left-side">
            <hr />
            <h4>{title}</h4>
            <p> {text}</p>
            <p>{text2}</p>
          </div>
          {iframe}
        </div>
      </>
    )
  }
}

export default Offer