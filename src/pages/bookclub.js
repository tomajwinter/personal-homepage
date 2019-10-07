import React from 'react'
import Layout from '../components/layout'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

class ReadingList extends React.Component {

  render() {
    console.log(this.props.book)
    return (
      <Layout location={this.props.location}>
        <h1>Bookclub</h1>
        <h2>Release It! by Michael T. Nygard</h2>
        <strong>Chapter 1 - Living in Production</strong>
        <ul>
          <li>There's a reference in the preface to the 'five nines', which in availability terms is 99.999%. This amounts to just over 5 minutes a _year_ of downtime.</li>
          <li>Software design as taught is often idealistic, discussing what software _should_ do, rather than dwelling on the things it _shouldn't_.</li>
          <li>Often software teams end up learning for the test - getting good at passing internal review and QA procedures. The work focuses on passing the test.</li>
          <li>It draws a parallel with "design for manufacturability" ("design for production"). Don't have designers and fabricators living in different worlds</li>
          <li>The scale of systems is only increasing, we've had a billion user social network.</li>
          <li>Reliable systems, operating at low cost and high quality, map directly to operational cost. There is a real financial imperative to getting systems right.</li>
          <li>"During that hectic rush of a development project, you can easily make decisions that optimize development cost at the expense of operational cost"</li>
          <li>Early decisions often make the biggest and most irrevocable impact on systems. "These early decisions about the system boundary
          and decomposition into subsytems get crystalized into the team structure, funding allocation, program management structure even time sheet codes...
          it's a terrible irony that these very early decisions are also the least informed"</li>
          <li>The author is a proponent of Agile development. "Since production is the only place to learn how the software will respond to real-world stimuli. I advocate any approach that begins the learning process as soon as possible"</li>
          <li>There are two different types of 'architect'. The author differentiates between the ivory-tower architect and the pragmatic architect
          who cares about memory usage CPU requirements etc</li>
          <li>"Software delivers its value in production. The development project, testing, integration and planning...everything before production is a prelude"</li>
        </ul>
      </Layout>
    )
  }
}

export default ReadingList

