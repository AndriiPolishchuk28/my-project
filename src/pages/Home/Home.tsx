import { FC } from "react";

interface Props {
  title: string;
  onClick: () => void;
}

const Home: FC<Props> = ({ title, onClick }) => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default Home;
