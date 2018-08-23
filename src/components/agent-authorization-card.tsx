/** @jsx createElement */
//

import { createElement } from 'create-element'
import {
  Button,
  CardTitle,
  CardBody,
  CardFooter,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap'
import ConnexionCard from './connexion-card'

export default function ({
  onSubmit,
  onLangSelect,
  error,
  lang,
  buttonDisabled
}) {
  return (
    <ConnexionCard >
      <CardTitle className='text-center pt-4'>
        Autoriser l'accès à mon compte ZenyPass
      </CardTitle>
      <CardBody className='mt-2'>
        <small>
          <ol>
            <li>
              Connectez-vous d'abord à ZenyPass à partir d'un navigateur déjà
              autorisé: par exemple, celui à partir duquel vous avez créé votre
              compte, ou tout autre que vous avez autorisé depuis.
              <br />
              <ul>
                <li>
                  Ouvrez le menu en haut à droite, puis sélectionnez l'entrée
                  <span className='text-info'>
                    {' '}
                    Autorisations&nbsp;d'accès
                  </span>.
                </li>
                <li>
                  Générez un nouveau jeton d'autorisation avec le bouton{' '}
                  <span className='text-info'>
                    {' '}
                    Ajouter&nbsp;un&nbsp;nouvel&nbsp;accès
                  </span>.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Copier le jeton d'autorisation dans le champ ci-dessous puis
              validez la demande d'autorisation d'accès avec le bouton
              <div className='text-info'>Autoriser.</div>
            </li>
          </ol>
        </small>
        <InputGroup size='sm'>
          <InputGroupAddon addonType='prepend'>
            <i className='fa fa-key fa-flip-vertical pt-2 pr-2' />
          </InputGroupAddon>
          <Input placeholder="jeton d'autorisation" />
        </InputGroup>
      </CardBody>
      <CardFooter className='border-0 bg-white d-flex justify-content-end'>
        <Button className='mr-2' type='button' color='outline-info'>
          Annuler
        </Button>
        <Button
          type='submit'
          form='ConnexionForm'
          color='info'
          disabled={buttonDisabled}
        >
          Accepter
        </Button>
      </CardFooter>
    </ConnexionCard>
  )
}
