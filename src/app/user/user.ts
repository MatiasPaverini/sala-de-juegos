export class User {

    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _ppt: number;
    private _tictactoe: number;
    private _memotest: number;

    // private _

    constructor(firstName, lastName, email) {

    }
    public get_firstName(): string {
        return this._firstName;
    }

    public set_firstName(firstName: string): void {
        this._firstName = firstName;
    }

    public get_lastName(): string {
        return this._lastName;
    }

    public set_lastName(lastName: string): void {
        this._lastName = lastName;
    }

    public get_email(): string {
        return this._email;
    }

    public set_email(email: string): void {
        this._email = email;
    }

    public get_ppt(): number {
        return this._ppt;
    }

    public set_ppt(_ppt: number): void {
        this._ppt = _ppt;
    }

    public get_tictactoe(): number {
        return this._tictactoe;
    }

    public set_tictactoe(_tictactoe: number): void {
        this._tictactoe = _tictactoe;
    }

    public get_memotest(): number {
        return this._memotest;
    }

    public set_memotest(_memotest: number): void {
        this._memotest = _memotest;
    }




}
