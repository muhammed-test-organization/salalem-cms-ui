import {Meta, Story} from "@storybook/react";
const React = import("react");
import Container from "../src/Container";
import Cell from "../src/Cell";
import { LinesAccordion } from '../src/LinesAccordion/LinesAccordion';
import { Layers } from "@material-ui/icons";
import {ILinesAccordion} from "../src/LinesAccordion/ILinesAccordion.interface";

export default {
  component: LinesAccordion,
  title: 'Content View/LinesAccordion',
  argTypes: {
    highlightOpen: {
      table: {
        disable: true
      }
    },
    isFirstOpen: {
      table: {
        disable: true
      }
    },
    onCloseFirst: {
      table: {
        disable: true
      }
    },
  }
} as Meta;

const content3 = [
  {
    icon: <Layers />,
    title: 'Lecture 7: introduction',
    isDone: true,
  },
  {
    icon: <Layers />,
    title: 'Lecture 8: What inside this course',
  },
  {
    title: 'Lecture 9: Structure',
  },
]

const content1 = [
  {
    icon: <Layers />,
    title: 'Lecture 4: introduction',
    isDone: true,
    content: content3,
  },
  {
    title: 'Lecture 5: What inside this course',
    isDone: true,
    content: content3,
  },
  {
    title: 'Lecture 6: Structure',
    content: content3,
  },
]

const content = [
  {
    icon: <Layers />,
    title: 'Lecture 1: introduction',
    isDone: true,
    content: content1
  },
  {
    title: 'Lecture 2: What inside this course Lecture 2: What inside this course Lecture 2: What inside this course Lecture 2: What inside this course',
    isDone: true,
    content: content1
  },
  {
    title: 'Lecture 3: Structure Lecture 3: Structure Lecture 3: Structure Lecture 3: Structure Lecture 3: Structure Lecture 3: Structure Lecture 3: Structure Lecture 3: Structure ',
    extraData: <div>30 Questions sd asdas d asd s</div>,
  },
];

const Template: Story<ILinesAccordion> = (args) => (
    <Container>
        <Cell style={{width: '800px'}}>
            <LinesAccordion {...args} />
        </Cell>
    </Container>
)

export const ControllableLinesAccordion = Template.bind({})

ControllableLinesAccordion.args = {
  content: content
}
export const LinesAccordionExample = () => <LinesAccordion content={content} />
