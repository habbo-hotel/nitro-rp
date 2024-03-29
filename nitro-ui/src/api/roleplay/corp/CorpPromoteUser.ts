import { CorpDemoteUserComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../..';

export function CorpPromoteUser(username: string): void
{
    SendMessageComposer(new CorpDemoteUserComposer(username));
}
