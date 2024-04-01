import { PoliceCuffComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../..';

export function PoliceCuffUser(username: string): void
{
    SendMessageComposer(new PoliceCuffComposer(username));
}
