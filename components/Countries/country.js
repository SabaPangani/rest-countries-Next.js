import { Card, Image, CardBody, Stack, Heading } from "@chakra-ui/react";

function country(props) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={props.img} alt={props.alt} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default country;
