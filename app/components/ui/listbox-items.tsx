import { Listbox, ListboxLabel, ListboxOption } from "./listbox";

export default function ItemsList() {
  return (
    <Listbox name="status" defaultValue="active">
      <ListboxOption value="todos">
        <ListboxLabel>Todos</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="design">
        <ListboxLabel>Design</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="desenvolvimento">
        <ListboxLabel>Desenvolvimento</ListboxLabel>
      </ListboxOption>
    </Listbox>
  );
}
