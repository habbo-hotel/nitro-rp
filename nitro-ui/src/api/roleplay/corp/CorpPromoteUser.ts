import { CorpPromoteUserComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../..';

export function CorpPromoteUser(username: string): void
{
    SendMessageComposer(new CorpPromoteUserComposer(username));
}
