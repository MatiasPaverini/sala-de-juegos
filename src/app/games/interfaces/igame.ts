export interface IGame {

    gameName: string;
    gameScore: string;
    playerName: string;

    save(): void;
    start(): void;
}
