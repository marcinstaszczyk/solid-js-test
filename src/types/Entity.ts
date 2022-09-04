import {FieldId} from "./Field";
import {Accessor, createSignal, Setter} from "solid-js";

export class Entity {

    fields: Record<FieldId, Accessor<string | undefined>> = {};
    fieldSetters: Record<FieldId, Setter<string | undefined>> = {};

    constructor(
        public readonly id: string
    ) {
    }

    getValue(fieldId: FieldId): Accessor<string | undefined> {
        this.initFieldIfNotExists(fieldId);
        return this.fields[fieldId];
    }

    setValue(fieldId: FieldId, value: string): void {
        this.initFieldIfNotExists(fieldId);
        this.fieldSetters[fieldId](value);
    }

    withValue(fieldId: FieldId, value: string): Entity {
        this.setValue(fieldId, value);
        return this;
    }

    private initFieldIfNotExists(fieldId: FieldId): void {
        if (!this.fields[fieldId]) {
            [this.fields[fieldId], this.fieldSetters[fieldId]] = createSignal<string>();
        }
    }

}
