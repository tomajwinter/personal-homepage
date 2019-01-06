import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

class ReadingList extends React.Component {
  linkItem = (url, title, author) => {
    return (
      <li>
        <a href={url} target="_blank">
          {title}
        </a>{' '}
        by {author}
      </li>
    )
  }

  render() {
    return (
      <div>
        <h2>2019 Reading</h2>
        <ul>
          {this.linkItem(
            'https://dataintensive.net/',
            'Designing Data Intensive Applications',
            'Martin Kleppmann'
          )}
          {this.linkItem(
            'http://shop.oreilly.com/product/0636920028529.do',
            'Doing Data Science',
            "Cathy O'Neil & Rachel Schutt"
          )}
          {this.linkItem(
            'https://weaponsofmathdestructionbook.com/',
            'Weapons of Math Destruction ',
            "Cathy O'Neil"
          )}
          {this.linkItem(
            'https://automatetheboringstuff.com/',
            'Automate the Boring Stuff',
            'Al Sweigart'
          )}
          {this.linkItem(
            'http://bwlampson.site/33-Hints/Acrobat.pdf',
            'Hints for Computer System Design',
            'Butler W. Lampson'
          )}
        </ul>
      </div>
    )
  }
}

export default ReadingList
