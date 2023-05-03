import React from 'react';
import Container from "../src/Container";
import Cell from "../src/Cell";
import {IProgressBar, ProgressBar} from "../src/ProgressBar/ProgressBar";
import {Meta, Story} from "@storybook/react";


export default {
  component: ProgressBar,
  title: 'General Components/ProgressBar',
  argTypes: {
    valueNextToBar: {
      table: {
        disable: true,
      }
    },
    ref: {
      table: {
        disable: true,
      }
    },
    containerClassName: {
      table: {
        disable: true,
      }
    },
    labelColor: {
      table: {
        disable: true,
      }
    },
    small: {
      table: {
        disable: true,
      }
    },
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      }
    },
    target: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      }
    },
    progressColor: {
      control: {
        type: 'color',
      }
    }
  }
} as Meta;

const Template: Story<IProgressBar> = (args) => (
    <Container>
      <Cell style={{width: '350px'}}>
        <ProgressBar {...args} />
      </Cell>
    </Container>
)

export const ControllableProgressBar = Template.bind({})

ControllableProgressBar.args = {
  value: 50,
  target: 70,
  targetTitle: 'Target Title',
  direction: 'left',
  valuePosition: 'left',
  progressColor: 'green',
}

export const StaticProgressBar = () => (
    <Container>
      <Cell style={{width: 350}}>
        <ProgressBar value={30} target={50} direction="left" />
      </Cell>
    </Container>
);