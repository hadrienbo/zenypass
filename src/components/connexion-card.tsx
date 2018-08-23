/** @jsx createElement */
//

import { createElement } from 'create-element'
import { Card } from 'reactstrap'

export default function ConnexionCard ({ children }) {
  return (
    <Card
      body
      outline
      color='info'
      className='d-flex justify-content-center mt-5'
    >
      {children}
    </Card>
  )
}
