//
/** @jsx createElement */
import { createElement } from 'create-element'
import { storiesOf } from '@storybook/react'
import { ConnexionCard } from 'components'
import { action } from '@storybook/addon-actions'
import preventDefault from './helpers/prevent-default-action'

const attrs = {
  onSubmit: preventDefault('SUBMIT'),
  onLangSelect: action('LANG_SELECT')
}

storiesOf('ConnexionCard', module)
  .add('signup', () => (
    <ConnexionCard signup {...attrs} />
  ))
  .add('signin', () => (
    <ConnexionCard {...attrs} />
  ))
