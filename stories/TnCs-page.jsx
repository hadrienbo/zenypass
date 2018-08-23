//
/** @jsx createElement */
import { createElement } from 'create-element'
import { storiesOf } from '@storybook/react'
import { BasicPage, TnCsCard } from 'components'
import { action } from '@storybook/addon-actions'
import preventDefault from './helpers/prevent-default-action'

const attrs = {
  onSubmit: preventDefault('SUBMIT'),
  onLangSelect: action('LANG_SELECT')
}

storiesOf('TnCsPage', module)
  .add('default', () => (
    <BasicPage>
      <TnCsCard {...attrs} />
    </BasicPage>
  ))
  .add('disabled', () => (
    <BasicPage>
      <TnCsCard buttonDisabled {...attrs} />
    </BasicPage>
  ))
