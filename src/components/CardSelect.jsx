import { Select, Heading } from '@chakra-ui/react';

export const CardSelect = ({ title, items }) => {
  return (
    <div>
      <Heading size="md" marginBottom={5}>
        {title}
      </Heading>
      <Select placeholder="Seleccione">
        {items.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
    </div>
  );
};
