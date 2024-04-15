import { IMessageComposer } from "../../../../../../api";

export class ListMyWeaponsComposer implements IMessageComposer<ConstructorParameters<typeof ListMyWeaponsComposer>>
{
    private _data: ConstructorParameters<typeof ListMyWeaponsComposer>;

    constructor() {
        this._data = [];
    }

    public getMessageArray() {
        return this._data;
    }

    public dispose(): void {
        return;
    }
}