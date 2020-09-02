import React from 'react'

class Footer extends React.Component {

  render() {
    return ( 
      <footer className="footer">
        <div className="columns">
          <div className="column is-half-mobile is-one-half-desktop logo-aligner">
            <p className="title is-5 has-text-centered white-text">Directly Apply©</p>
          </div>
          <div className="column is-half-mobile is-one-half-desktop" id="socialMedia">
            <a href="https://us.directlyapply.com/signup"><img src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="social media" id="img"/></a>
            <a href="https://us.directlyapply.com/signup"><img src="https://image.flaticon.com/icons/svg/733/733579.svg" alt="social media" id="img"/></a>
            <a href="https://us.directlyapply.com/signup"><img src="https://image.flaticon.com/icons/svg/174/174883.svg" alt="social media" id="img"/></a>
            <a href="https://us.directlyapply.com/signup"><img src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="social media" id="img" /></a>
            <a href="https://us.directlyapply.com/signup"><img src="https://image.flaticon.com/icons/svg/355/355980.svg" alt="social media" id="img"/></a>
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer