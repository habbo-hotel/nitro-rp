import { IMessageDataWrapper } from '../../../../../api';
export declare class Triggerable {
    private _stuffTypeSelectionEnabled;
    private _furniLimit;
    private _stuffIds;
    private _id;
    private _stringParam;
    private _intParams;
    private _stuffTypeId;
    private _stuffTypeSelectionCode;
    constructor(wrapper: IMessageDataWrapper);
    getBoolean(index: number): boolean;
    get stuffTypeSelectionEnabled(): boolean;
    get stuffTypeSelectionCode(): number;
    set stuffTypeSelectionCode(k: number);
    get maximumItemSelectionCount(): number;
    get selectedItems(): number[];
    get id(): number;
    get stringData(): string;
    get intData(): number[];
    get code(): number;
    get spriteId(): number;
}
