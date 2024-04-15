import { IMessageComposer } from "../../../../../../api";

export class EquipWeaponComposer implements IMessageComposer<ConstructorParameters<typeof EquipWeaponComposer>>
{
    private _data: ConstructorParameters<typeof EquipWeaponComposer>;

    constructor(weaponUniqName: string) {
        this._data = [weaponUniqName];
    }

    public getMessageArray() {
        return this._data;
    }

    public dispose(): void {
        return;
    }
}