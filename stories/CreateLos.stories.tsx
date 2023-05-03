const React = import("react");
import { action } from '@storybook/addon-actions';
import { CreateLos } from "../src/CreateLos/CreateLos";
import Container from "../src/Container";
import Cell from "../src/Cell";

export default {
  title: 'LOS/Create Los',
  component: CreateLos,
}

export const CreateLosExample = () => {
  return(
      <Container>
          <Cell>
                <CreateLos
                    lang="en"
                    onAdd={(values) => {
                        action('onAdd click, check console for values')
                        console.info({values})
                    }}
                    onDelete={() => {
                        action('onDelete click')
                    }}
                />
          </Cell>
      </Container>
  )
}
