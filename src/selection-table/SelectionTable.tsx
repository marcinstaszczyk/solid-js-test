import { Accessor, Component, For, Setter } from "solid-js";
import Slider from "../slider/Slider";

export type SelectionItem = {
    value: string,
    selected: Accessor<boolean>
    setSelected: Setter<boolean>
}

type SelectionTableProps = { list: SelectionItem[] }

export const SelectionTable: Component<SelectionTableProps> =
    (props: SelectionTableProps) => {

        const viewportList = () => props.list.slice(0, 20);

        const toggleSingle = (index: number) => {
            props.list[index].setSelected((selected: boolean) => !selected);
        }

        const switchAll = (event: MouseEvent, value: boolean) => {
            event.preventDefault();
            props.list.forEach((item: SelectionItem) => item.setSelected(value));
        }

        return (<>
            <a href="." onClick={(event: MouseEvent) => switchAll(event, true)}>Select all</a>
            &nbsp;/&nbsp;
            <a href="." onClick={(event: MouseEvent ) => switchAll(event, false)}>Unselect all</a>
            <div class="flex flex-col">
                <For each={viewportList()}>{(item, index) =>
                    <div>
                        <Slider checked={item.selected()} clicked={() => toggleSingle(index())}></Slider>
                        {item.value}
                    </div>
                }</For>
            </div>
        </>);
    }
