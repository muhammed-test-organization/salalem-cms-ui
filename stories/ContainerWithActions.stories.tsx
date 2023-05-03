const React = import("react");
import { action } from '@storybook/addon-actions';
import {ContainerWithActions, IContainerWithActions} from "../src/ContainerWithActions/ContainerWithActions";
import Container from "../src/Container";
import Cell from "../src/Cell";
import {Meta, Story} from "@storybook/react";

export default {
  title: 'General Components/Container With Actions',
  component: ContainerWithActions,
    argTypes: {
      className: {
          table: {
              disable: true,
          }
      },
      onAdd: {
          table: {
              disable: true,
          }
      },
      onDelete: {
          table: {
              disable: true,
          }
      },
    }
} as Meta;

const Template: Story<IContainerWithActions> = (args) => (
    <Container>
        <Cell style={{width: '800px'}}>
            <ContainerWithActions {...args} >
                <div>Children</div>
            </ContainerWithActions>
        </Cell>
    </Container>
)

export const ControllableContainerWithActions = Template.bind({})

ControllableContainerWithActions.args = {
    title: 'Title',
    insideButtons: false,
    disableButtons: false,
}

export const ContainerWithActionsExample = () => {
  return(
      <Container>
          <Cell style={{width: '800px'}}>
              <ContainerWithActions title={'Container With Actions'}  onAdd={action('Add Clicked')} onDelete={action('Delete Clicked')} insideButtons={false}>
                  <div>Children</div>
              </ContainerWithActions>
          </Cell>
      </Container>
  )
}
