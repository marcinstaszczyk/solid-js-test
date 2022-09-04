import { Component, For } from "solid-js";
import Slider from "../slider/Slider";

export type SelectionItem = {
    value: string,
    selected: boolean
}

type SelectionTableProps = { list: SelectionItem[], changed: (list: SelectionItem[]) => void }

export const SelectionTable: Component<SelectionTableProps> =
    (props: SelectionTableProps) => {
        const toggleSingle = (index: number) => {
            const clone = [...props.list];
            clone[index] = { ...clone[index], selected: !clone[index].selected }
            props.changed(clone);
        }

        return (
            <div class="flex flex-col">
                <For each={props.list}>{(item, index) =>
                    <div>
                        <Slider checked={item.selected} clicked={() => toggleSingle(index())}></Slider>
                        {item.value}
                    </div>
                }</For>
            </div>
        );
    }
