/** @jsx createElement */
//

import { createElement } from 'create-element'
import {
  Button,
  Container,
  Row
} from 'reactstrap'
import SigninCard from './signin-card'

const HELP_LINK = 'https://medium.com/zenypass-fr/tagged/aide-zenypass'

export interface SigninPageProps {
  onSubmit: (event: Event) => void
  onLangSelect: (lang: string) => void
  lang: string
  error: string
  buttonDisabled: boolean
}

export default function SigninPage ({
  onSubmit,
  onLangSelect,
  lang,
  error,
  buttonDisabled
}: SigninPageProps) {
  return (
    <Container className='bg-light'>
      <Row>
        <SigninCard
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
            <small>Vous n'avez pas encore de compte ?</small>
          </p>
          <Button type='submit' onSubmit={onSubmit} color='info'>
            Créer un compte
          </Button>
        </div>
      </Row>
    </Container>
  )
}
