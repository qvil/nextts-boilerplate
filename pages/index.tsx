import { NextPage } from "next";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

interface IHomeProps {}

const Home: NextPage<IHomeProps> = () => {
  return <Title>Hello Next.ts boilerplate</Title>;
};

export default Home;
