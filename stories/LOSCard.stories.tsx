import React from 'react';
import { action } from '@storybook/addon-actions';
import {LOSCard} from "../src/LOSCard/LOSCard";
import {Meta, Story} from "@storybook/react";
import {ILOSCard} from "../src/LOSCard/LOSCard.interface";
import Container from "../src/Container";
import Cell from "../src/Cell";

export default {
  component: LOSCard,
  title: 'LOS/LOS Card',
} as Meta;

const Template: Story<ILOSCard> = (args) => (
    <Container>
        <Cell style={{width: '290px'}}>
          <LOSCard {...args}/>
        </Cell>
    </Container>
)


const menuItems = [
  { value: 'Show detailed progress', onClick: () => console.log('Show detailed progress clicked') },
  { value: 'Unroll', onClick: () => console.log('Unroll clicked') },
  { value: 'Send reminder', onClick: () => console.log('Send reminder clicked') },
  { value: 'Extend due date', onClick: () => console.log('Extend due date clicked') },
];

const courseCardProps = {
  id: '1',
  image: 'https://placekitten.com/280/190',
  title: 'The Complete Ethical Hacking Course: Beginner to busi..',
  onTitleClick: action('onTitleClick'),
  startDateLabel: 'From',
  endDateLabel: 'To',
  showMoreButton: true,
  vendor: 'Salalem',
  vendorIcon: 'https://placekitten.com/40/40',
  questions: '30 Questions',
  difficultyLabel: 'Hard',
  startDate: '24/05/2022',
  endDate: '24/05/2023',
  statistic: [
    {
      value: 70,
      label: 'Enrolled',
    },
    {
      value: 53,
      label: 'Performed',
    },
    {
      value: 23,
      label: 'Absence',
    },
  ],
  menuItems,
  progress: 25,
  showProgress: false,
};

export const ControllableLOSCard = Template.bind({})

ControllableLOSCard.args = {
  ...courseCardProps
}

export const LOSCardExample = () => {

  return (
      <div style={{ width: 290 }}>
        <LOSCard index={0} difficulty='hard' state={"live"} {...courseCardProps}  />
      </div>
  );
};