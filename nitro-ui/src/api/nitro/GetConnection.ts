import { IConnection } from '@nitro-rp/renderer';
import { GetCommunication } from './GetCommunication';

export function GetConnection(): IConnection
{
    return GetCommunication()?.connection;
}
