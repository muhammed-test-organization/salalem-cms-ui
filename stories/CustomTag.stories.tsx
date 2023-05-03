import React from 'react';
import {CustomTag} from '../src/CustomTag/CustomTag';
import Container from "../src/Container";
import Cell from "../src/Cell";

export default {
  component: CustomTag,
  title: 'General Components/CustomTag',
};

export const TagExamples = () => (
    <Container>
      <Cell style={{width: '350px'}}>
        <CustomTag label="SHARE" bgcolor="lightGreen" />
      </Cell>
    </Container>
)
