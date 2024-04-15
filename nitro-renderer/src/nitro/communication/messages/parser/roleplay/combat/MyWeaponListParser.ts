import { IMessageDataWrapper, IMessageParser } from "../../../../../../api";

export interface MyWeaponData {
    uniqueName: string;
    displayName: string;
    equipEffect: number;
}

export class MyWeaponListParser implements IMessageParser {
    private _weapons: MyWeaponData[];
    private _

    public flush(): boolean {
        this._weapons = [];
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean {
        if (!wrapper) return false;

        this._weapons = [];

        while (true) {
            try {
                const weaponStr = wrapper.readString().split(';')
                this._weapons.push({
                    uniqueName: weaponStr[0],
                    displayName: weaponStr[1],
                    equipEffect: Number(weaponStr[2]),
                })
            } catch (e) {
                break;
            }
        }

        return true;
    }

    public get data(): MyWeaponData[] {
        return this._weapons;
    }
}
