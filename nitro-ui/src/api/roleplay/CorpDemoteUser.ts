import { CorpDemoteUserComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function CorpDemoteUser(username: string): void
{
    SendMessageComposer(new CorpDemoteUserComposer(username));
}
