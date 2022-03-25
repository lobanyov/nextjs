import { Button, Heading } from "../components";

export default function Home() {
  return (
    <>
      <Heading level={1}>Welcome!</Heading>
      <Button appearance='primary' arrowDirection='right'>Click me!</Button>
      <Button appearance='ghost' arrowDirection='down'>Click me!</Button>
    </>
  );
}
