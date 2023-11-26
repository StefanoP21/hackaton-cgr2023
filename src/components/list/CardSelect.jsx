import { Select, Heading } from '@chakra-ui/react';

export const CardSelect = ({ title, items, onSelect }) => {
  const handleSelect = (item) => {
    onSelect(item.target.value);
  };

  return (
    <div>
      <Heading size="md" marginBottom={5}>
        {title}
      </Heading>
      <Select placeholder="Seleccione" onChange={handleSelect}>
        {items.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
    </div>
  );
};
