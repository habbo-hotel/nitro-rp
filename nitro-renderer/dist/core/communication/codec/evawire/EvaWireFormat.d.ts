import { IBinaryWriter, ICodec, IConnection, IMessageDataWrapper } from '../../../../api';
export declare class EvaWireFormat implements ICodec {
    encode(header: number, messages: any[]): IBinaryWriter;
    decode(connection: IConnection): IMessageDataWrapper[];
}
