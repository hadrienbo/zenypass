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

export default function SigninCard ({
  onSubmit,
  onLangSelect,
  error,
  lang,
  buttonDisabled
}) {
  return (
    <ConnexionCard>
      <CardTitle className='text-center pt-4'>
        Connexion à votre compte ZenyPass
      </CardTitle>
      <CardBody className='mt-2'>
        <Form id='ConnexionForm' onSubmit={onSubmit}>
          <EmailFormGroup />
          <PasswordFormGroup error={error} />
          <small>{error}</small>
        </Form>
      </CardBody>
      <CardFooter className='border-0 bg-white d-flex justify-content-between '>
        <LangDropdown onSelect={onLangSelect}/>
        <Button
          type='submit'
          form='ConnexionForm'
          color='info'
          disabled={buttonDisabled}
        >
          Connexion
        </Button>
      </CardFooter>
    </ConnexionCard>
  )
}
