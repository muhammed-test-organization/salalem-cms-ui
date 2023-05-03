import {Meta, Story} from "@storybook/react";

const React = import("react");
import { action } from '@storybook/addon-actions';
import {LOSQuestion} from "../src/LOSQuestion/LOSQuestion";
import Container from "../src/Container";
import Cell from "../src/Cell";
import {ILOSQuestion} from "../src/LOSQuestion/LOSQuestion.interface";

export default {
  component: LOSQuestion,
  title: 'LOS/LOS Question',
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    onDeleteClick: {
      table: {
        disable: true
      }
    },
    onEditClick: {
      table: {
        disable: true
      }
    },
  }
} as Meta;

const Template: Story<ILOSQuestion> = (args) => (
    <Container>
      <Cell style={{width: '1200px'}}>
        <LOSQuestion {...args}/>
      </Cell>
    </Container>
)

const answers = [
  {
    index: 1,
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>',
  },
  {
    index: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    isCorrect: true
  },
  {
    index: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    index: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
]

const defaultLoss = [
  {
    index: 1,
    title: 'Title 1',
    description: 'Description 1',
    label: 'Label 1',
  }, {
    index: 2,
    title: 'Title 2',
    description: 'Description 2',
    label: 'Label 2',
  }, {
    index: 3,
    title: 'Title 3',
    description: 'Description 3',
    label: 'Label 3',
  }, {
    index: 2,
    title: 'Title 2',
    description: 'Description 2',
    label: 'Label 2',
  }, {
    index: 3,
    title: 'Title 3',
    description: 'Description 3',
    label: 'Label 3',
  }
]

export const ControllableLOSQuestion = Template.bind({})

ControllableLOSQuestion.args = {
  LOS: defaultLoss,
  answers,
  difficultyIcon:'hard',
  difficultyLabel:'Hard',
  LOSLabel:'LOS:',
  question:'<p>Lorem ipsum dolor sit ame</p>',
  questionPrefix:'Q:',
  extraData:'Used in 30 components'
}


export const InfoDialogExample = () => <LOSQuestion
    onEditClick={action('Edit')}
    onDeleteClick={action('Edit')}
    LOS={defaultLoss}
    answers={answers}
    difficultyIcon={'hard'}
    difficultyLabel={'Hard'}
    LOSLabel={'LOS:'}
    question={'<p>Lorem ipsum dolor sit ame</p>'}
    questionPrefix={'Q:'}
    extraData={'Used in 30 components'}
/>
