/** @jsx createElement */
//

import { createElement } from 'create-element'
import {Container,
        Row
                    } from 'reactstrap'
const HELP_LINK = 'https://medium.com/zenypass-fr/tagged/aide-zenypass'

export default function BasicPage ({
  onSubmit,
  onLangSelect,
  lang,
  buttonDisabled,
  children
}) {
  return (
    <Container className='bg-light'>
      <Row>{children}</Row>
      <Row className='d-flex justify-content-center mt-2'>
        <a href={HELP_LINK} className='text-center mt-2'>
          <small>Aide en ligne </small>
        </a>
      </Row>
    </Container>
  )
}
