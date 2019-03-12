import React, { Component } from "react"
import "./Temple.css"


class Temple extends Component {

  render() {
    return (
      <>
        <h2>HINDU TEMPLE IN MISSISSAUGA</h2>
        <p>
          SVHM is different from other the other temples and mandir’s in and
          around Toronto, Richmond Hill, Brampton, and Mississauga as it is more
          family oriented and transparent. The temple does not fund any external
          political groups and adheres to CRA policies for non profit
          organizations.{" "}
        </p>
        <hr />
        <div className="testimonial">
          <p>
            "Immigrating from Northern India in 2016, I did not find a facility
            in Toronto that provided a place where I can pray, mediate, practice
            yoga, and meet other Canadian-Tibetans like myself. Then I
            discovered SVHM, which has been instrumental in my journey of
            transitioning into the Canadian lifestyle, helping me establish
            myself in the GTA, build a network of quality peers who share my
            values, and where I can peacefully pray."
          </p>
          <div className="bottom">
            <img
              src="https://shrivitthal.com/wp-content/uploads/2018/02/25497478040_140ce47f31_k.jpg"
              alt=""
            />
            <div className="name">
              <h4>TSERING WANGCHUK</h4>
              <h6>Tibetan-Canadian</h6>
            </div>
          </div>
          <hr />
          <p>
            SVHM also does not discriminate – you do not need to be a “Hindu” or
            “Indian” to attend any event. We have numerous deities from other
            religions such as Sikhism, Christianity, Islam, Buddhism, to name a
            few . Shri Vitthal truly caters to the needs of every segment in
            Toronto! Our extraordinary temple is a vital part of the GTA that
            enriches not only the attending devotees but also the community as a
            whole. All donations go back to the mandir to enhance services to
            our community.
          </p>
        </div>

        <article className="temple-explanation">
          <p>
            A temple is what you want it to be. For the devotee it is the place
            where god lives. For the connoisseur of art, the sculpture and
            paintings make a temple a living museum. For a dancer the figures
            carved on the walls are the foundation of her art. For a musician or
            a poet the deity is both inspiration and the final audience. You
            don’t have to enter a temple to pray. You can go there to appreciate
            the many aspects of India’s rich and iridescent culture.
          </p>
        </article>
      </>
    )
  }
}

export default Temple