import { Container, ContainerProps } from "@chakra-ui/react";

function CustomContainer({ ...rest }: ContainerProps) {
  return (
    <Container maxW="800px" {...rest}>
      {rest.children}
    </Container>
  );
}

export default CustomContainer;
