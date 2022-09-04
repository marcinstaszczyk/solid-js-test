export class Field {
    constructor(
        public readonly id: string
    ) {
    }
}

export type FieldId = Field['id'];
