/** @jsx createElement */
//

import { createElement } from 'create-element'
import {
  Button,
  Container,
  Row
} from 'reactstrap'
import SignupCard from './signup-card'

const HELP_LINK = 'https://medium.com/zenypass-fr/tagged/aide-zenypass'

export interface SignupPageProps {
  onSubmit: (event: Event) => void
  onLangSelect: (lang: string) => void
  buttonDisabled: boolean
  lang: string
  error: string
}

export default function SignupPage ({
  onSubmit,
  onLangSelect,
  buttonDisabled,
  lang,
  error
}: SignupPageProps) {
  return (
    <Container className='bg-light'>
      <Row>
        <SignupCard
          onSubmit={onSubmit}
          onLangSelect={onLangSelect}
          lang={lang}
          error={error}
          buttonDisabled={buttonDisabled}
        />
      </Row>
      <Row className='d-flex justify-content-center mt-2'>
        <a href={HELP_LINK} className='text-center mt-2'>
          <small>Aide en ligne </small>
        </a>
      </Row>
      <Row className='d-flex justify-content-center mt-2'>
        <div className='py-4 text-center'>
          <p>
            <small>Vous avez déja un compte ?</small>
          </p>
          <Button type='submit' onSubmit={onSubmit} color='info'>
            Connexion
          </Button>
        </div>
      </Row>
    </Container>
  )
}
