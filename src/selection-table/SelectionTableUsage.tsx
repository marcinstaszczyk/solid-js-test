import { Component, createSignal, Signal } from "solid-js";
import { SelectionItem, SelectionTable } from "./SelectionTable";

const SelectionTableUsage: Component = () => {
    const array: SelectionItem[] = Array.from({length: 10000}, (_, i) => {
        const [selected, setSelected]: Signal<boolean> = createSignal(false, { internal: true });

        return ({
            value: `Program ${i}`,
            selected,
            setSelected
        });
    })

    const [list, setList] = createSignal<SelectionItem[]>(array);

    return (
        <SelectionTable list={list()}></SelectionTable>
    );
}

export default SelectionTableUsage;
