/** @jsx createElement */
//

import { createElement } from 'create-element'
import {
  Button,
  CardTitle,
  CardBody,
  CardFooter,
  Form,
  FormFeedback
} from 'reactstrap'
import FormGroup from './form-group'
import LangDropdown from './lang-dropdown'
import ConnexionCard from './connexion-card'
import RecordField from './record-field'

const INFO_LINK = 'https://medium.com/zenypass-fr'

function EmailFormGroup () {
  return (
    <FormGroup>
      <RecordField className='mb-2' type='email' />
    </FormGroup>
  )
}

function PasswordFormGroup ({ error }: { error?: string }) {
  return (
    <FormGroup>
      <RecordField
        className='mb-2'
        type='password'
        icon='fa-lock'
        invalid={!!error}
      />
      <FormFeedback>error</FormFeedback>
    </FormGroup>
  )
}

export default function SignupCard ({
  onSubmit,
  onLangSelect,
  error,
  lang,
  buttonDisabled
}) {
  return (
    <ConnexionCard>
      <CardTitle className='text-center pt-4'>
        Créez votre compte ZenyPass
      </CardTitle>
      <CardBody className='mt-2'>
        <Form id='ConnexionForm'>
          <EmailFormGroup />
          <PasswordFormGroup />
          <PasswordFormGroup error={error} />
          <small>{error}</small>
        </Form>
        <div className='text-center'>
          <div>
            <small>
              Pour plus de sécurité, choisissez un mot de passe exclusif que
              vous n'utilisez pas ailleurs, et assurez-vous de ne pas l'oublier
              ou le perdre. <br />
              <a href={INFO_LINK}>
                {' '}
                <u>Plus d'informations... </u>
              </a>
            </small>
          </div>
        </div>
      </CardBody>
      <CardFooter className='border-0 bg-white d-flex justify-content-between '>
        <LangDropdown onSelect={onLangSelect}/>
        <Button
          type='submit'
          form='ConnexionForm'
          color='info'
          disabled={buttonDisabled}
        >
          Créer un compte
        </Button>
      </CardFooter>
    </ConnexionCard>
  )
}
