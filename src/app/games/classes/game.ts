export abstract class Game {


    constructor() {

    }

    protected _gameName: string;
    protected _gameScore: string;
    protected _playerName: string;

    abstract save(): void;
    abstract start(playerName: string): void;

}
