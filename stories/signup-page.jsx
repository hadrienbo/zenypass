//
/** @jsx createElement */
import { createElement } from 'create-element'
import { storiesOf } from '@storybook/react'
import { SignupPage } from 'components'
import { action } from '@storybook/addon-actions'
import preventDefault from './helpers/prevent-default-action'

const attrs = {
  onSubmit: preventDefault('SUBMIT'),
  onLangSelect: action('LANG_SELECT')
}

storiesOf('SignupPage', module)
  .add('default', () => (
    <SignupPage buttonDisabled {...attrs} />
  ))
  .add('error', () => (
    <SignupPage error='erreur' buttonDisabled {...attrs} />
  ))
  .add('valid', () => (
    <SignupPage {...attrs} />
  ))
/*
SignupPage({
  error: 'erreur',
  buttonDisabled: true,
  ...attrs
})
*/
