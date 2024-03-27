import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { VoucherRedeemErrorMessageParser } from '../../parser';
export declare class VoucherRedeemErrorMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): VoucherRedeemErrorMessageParser;
}
