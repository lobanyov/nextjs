import { Button, Heading, Paragraph, Tag } from '../components';

export default function Home() {
  return (
    <>
      <Heading level={1}>Welcome!</Heading>
      <Button appearance='primary' arrowDirection='right'>Click me!</Button>
      <Button appearance='ghost' arrowDirection='down'>Click me!</Button>
      <Paragraph size='M'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolores iure quis consequatur! Eveniet nihil, vitae quas ratione quae commodi asperiores modi similique, ipsa perferendis sapiente, magnam harum facilis. Qui.
      </Paragraph>
      <Tag color='gray' href='#'>Some tag text</Tag>
    </>
  );
}
