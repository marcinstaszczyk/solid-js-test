import { Component, For } from "solid-js";
import { Entity } from "../types/Entity";
import { Field } from "../types/Field";

export const Table: Component = () => {
    const data: Entity[] = Array.from({ length: 100 }, (_, i: number) => createEntity(i))

    return (
        <div
            class="border border-gray-400 overflow-hidden"
            style="height: 500px; width: 500px; margin: 10px; overflow: hidden">
            <For each={data}>
                {(entity: Entity) => (
                    <div style="display: flex; width: 100%">
                        <div>{entity.getValue(NAME.id)}</div>
                        <div>{entity.getValue(AGE.id)}</div>
                        <div>{entity.getValue(TECHNOLOGIES.id)}</div>
                        <div>{entity.getValue(START_DATE.id)}</div>
                    </div>
                )}
            </For>
        </div>
    );
}

const NAME = new Field('name');
const AGE = new Field('age');


const TECHNOLOGIES = new Field('technologies');
const START_DATE = new Field('start_date');

const FIELDS = [
    NAME,
    AGE,
    TECHNOLOGIES,
    START_DATE
] as const;

const dateFormat = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'short' });

function createEntity(id: number): Entity {
    ++id;

    const date = new Date(new Date().getTime() - 24 * 60 * 60_000 * id);

    return new Entity(`entity${id}`)
        .withValue(NAME.id, `Person ${id}`)
        .withValue(AGE.id, Math.floor(18 + Math.random() * 20) + '')
        .withValue(TECHNOLOGIES.id, 'Typescript, SolidJS')
        .withValue(START_DATE.id, dateFormat.format(date));
}
