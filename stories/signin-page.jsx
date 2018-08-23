//
/** @jsx createElement */
import { createElement } from 'create-element'
import { storiesOf } from '@storybook/react'
import { SigninPage } from 'components'
import { action } from '@storybook/addon-actions'
import preventDefault from './helpers/prevent-default-action'

const attrs = {
  onSubmit: preventDefault('SUBMIT'),
  onLangSelect: action('LANG_SELECT')
}

storiesOf('SigninPage', module)
  .add('default', () => (
    <SigninPage buttonDisabled {...attrs} />
  ))
  .add('error', () => (
    <SigninPage error='erreur' buttonDisabled {...attrs} />
  ))
  .add('valid', () => (
    <SigninPage {...attrs} />
  ))
