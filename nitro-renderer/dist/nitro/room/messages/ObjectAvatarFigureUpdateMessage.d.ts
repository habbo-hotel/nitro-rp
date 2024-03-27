import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarFigureUpdateMessage extends ObjectStateUpdateMessage {
    private _figure;
    private _gender;
    private _subType;
    private _isRiding;
    constructor(figure: string, gender?: string, subType?: string, isRiding?: boolean);
    get figure(): string;
    get gender(): string;
    get subType(): string;
    get isRiding(): boolean;
}
