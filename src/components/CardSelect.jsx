import { Select, Heading } from '@chakra-ui/react';

export const CardSelect = ({ title, arr }) => {
  return (
    <div>
      <Heading size="md" marginBottom={5}>
        {title}
      </Heading>
      <Select placeholder="Seleccione">
        {arr.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
    </div>
  );
};
