import { IMessageComposer } from '../../../../../api';
export declare class SSOTicketMessageComposer implements IMessageComposer<ConstructorParameters<typeof SSOTicketMessageComposer>> {
    private _data;
    constructor(ticket: string, time: number);
    getMessageArray(): [ticket: string, time: number];
    dispose(): void;
}
