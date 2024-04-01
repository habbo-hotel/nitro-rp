import { IMessageComposer } from "../../../../../../api";

export class PoliceCuffComposer implements IMessageComposer<ConstructorParameters<typeof PoliceCuffComposer>>
{
    private _data: ConstructorParameters<typeof PoliceCuffComposer>;

    constructor(username: string)
    {
        this._data = [username];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}