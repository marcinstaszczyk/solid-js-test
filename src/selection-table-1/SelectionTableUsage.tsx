import { Component, createSignal } from "solid-js";
import { SelectionItem, SelectionTable } from "./SelectionTable";

const SelectionTableUsage: Component = () => {
    const [list, setList] = createSignal<SelectionItem[]>(Array.from({length: 100}, (_, i) => ({
        value: `Program ${i}`,
        selected: false
    })));

    return (
        <SelectionTable list={list()} changed={(list: SelectionItem[]) => setList(list)}></SelectionTable>
    );
}

export default SelectionTableUsage;
