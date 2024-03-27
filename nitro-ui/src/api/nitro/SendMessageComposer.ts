import { IMessageComposer } from '@nitro-rp/renderer';
import { GetConnection } from './GetConnection';

export const SendMessageComposer = (event: IMessageComposer<unknown[]>) => GetConnection().send(event);
