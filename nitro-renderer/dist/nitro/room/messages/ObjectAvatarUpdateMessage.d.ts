import { IVector3D } from '../../../api';
import { ObjectMoveUpdateMessage } from './ObjectMoveUpdateMessage';
export declare class ObjectAvatarUpdateMessage extends ObjectMoveUpdateMessage {
    private _headDirection;
    private _canStandUp;
    private _baseY;
    constructor(location: IVector3D, targetLocation: IVector3D, direction: IVector3D, headDirection: number, canStandUp: boolean, baseY: number);
    get headDirection(): number;
    get canStandUp(): boolean;
    get baseY(): number;
}
