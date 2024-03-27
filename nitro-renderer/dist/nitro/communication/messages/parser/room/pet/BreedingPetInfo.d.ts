import { IMessageDataWrapper } from '../../../../../../api';
export declare class BreedingPetInfo {
    private _webId;
    private _name;
    private _level;
    private _figure;
    private _owner;
    constructor(wrapper: IMessageDataWrapper);
    dispose(): void;
    get webId(): number;
    get name(): string;
    get level(): number;
    get figure(): string;
    get owner(): string;
}
