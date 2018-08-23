//
/** @jsx createElement */
import { createElement } from 'create-element'
import { storiesOf } from '@storybook/react'
import { BasicPage, AgentAuthorizationCard } from 'components'
import { action } from '@storybook/addon-actions'
import preventDefault from './helpers/prevent-default-action'

const attrs = {
  onSubmit: preventDefault('SUBMIT'),
  onLangSelect: action('LANG_SELECT')
}

storiesOf('AgentAuthorizationPage', module)
  .add('default', () => (
    <BasicPage>
      <AgentAuthorizationCard {...attrs} />
    </BasicPage>
  ))
