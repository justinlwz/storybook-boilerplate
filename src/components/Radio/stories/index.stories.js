import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'

import { Radio } from '..'
import GlobalStyle from '../../Styles/Global'

const labelPosition = {
	Left: 'left', 
	Right: 'right',
};

storiesOf('Radio', module)
	.addDecorator(withInfo({
		header: false,
		styles: {
			button: {
				topRight: {
					top: 0,
					left: 0,
					right: 'initial',
					borderRadius: '0 0 5px 0',
				},
			}
		},
	}))
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Normal', () => 
		<Fragment>
			<GlobalStyle />
			<Radio 
				label={text('Label Text', 'Choice 1')}
				labelPosition={select('Label Position', labelPosition, 'right')}
				checked={boolean('Checked', false)}
				disabled={boolean('Disabled', false)}
				debug={boolean('Debug', false)}
				onChange={action('changed')}
			/>
		</Fragment>
	)
