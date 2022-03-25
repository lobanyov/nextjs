import { Button, Heading } from "../components";

export default function Home() {
  return (
    <>
      <Heading level={1}>Welcome!</Heading>
      <Button appearance='primary'>Click me!</Button>
      <Button appearance='ghost'>Click me!</Button>
    </>
  );
}
