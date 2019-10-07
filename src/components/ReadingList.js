import React from 'react'
import { Link } from 'gatsby'

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
        by {author}.
      </li>
    )
  }

  render() {
    return (
      <div>
        <h2>Bookclub</h2>
        <ul>
          <Link to="/bookclub">
            {this.linkItem(
              'https://pragprog.com/book/mnee/release-it',
              'Release It!',
              'Michael T. Nygard'
            )}
          </Link>
          {this.linkItem(
            'https://www.poodr.com/',
            'Practical Object-Oriented Design',
            'Sandi Metz'
          )}
          {this.linkItem(
            'https://dataintensive.net/',
            'Designing Data Intensive Applications',
            'Martin Kleppmann'
          )}
          {this.linkItem(
            'https://www.manning.com/books/grokking-algorithms',
            'Grokking Algorithms',
            'Aditya Y. Bhargava'
          )}
          {this.linkItem(
            'http://shop.oreilly.com/product/0636920028529.do',
            'Doing Data Science',
            "Cathy O'Neil & Rachel Schutt"
          )}
        </ul>
      </div>
    )
  }
}

export default ReadingList
