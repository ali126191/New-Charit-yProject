import React, { Component } from "react"

export default class Offer extends Component {
  render() {
    const { title, text, text2, iframe } = this.props
    return (
      <>
        <div className="cultural-preservation">
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
