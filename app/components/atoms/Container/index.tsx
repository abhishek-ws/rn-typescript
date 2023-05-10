import styled from "styled-components/native";

interface ViewProps {
  bgColor?: string;
}

const StyledView = styled.View`
  background-color: ${(props: ViewProps) => props.bgColor};
`;
// TODO: figure out above ts error

interface ContainerProps {
  children: React.ReactNode;
  bgColor: string;
}

const Container = ({ children, bgColor }: ContainerProps) => (
  <StyledView bgColor={bgColor}>{children}</StyledView>
);

Container.defaultProps = {
  bgColor: "#fafafa",
};

export default Container;
