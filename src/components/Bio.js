import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

class Bio extends React.Component {
  render() {
    return (
      <div>
        <p>
          I'm a software engineer who currently works at{' '}
          <a href="https://www.rocksteadymusicschool.com/" target="_blank">
            Rocksteady Music School
          </a>
          . I previously worked for{' '}
          <a href="https://deliveroo.co.uk" target="_blank">
            Deliveroo
          </a>{' '}
          &{' '}
          <a href="https://kyan.com" target="_blank">
            Kyan
          </a>
          .
        </p>
      </div>
    )
  }
}

export default Bio
