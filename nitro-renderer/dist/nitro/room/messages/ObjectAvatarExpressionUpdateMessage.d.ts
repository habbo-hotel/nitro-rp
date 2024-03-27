import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarExpressionUpdateMessage extends ObjectStateUpdateMessage {
    private _expressionType;
    constructor(expressionType?: number);
    get expressionType(): number;
}
