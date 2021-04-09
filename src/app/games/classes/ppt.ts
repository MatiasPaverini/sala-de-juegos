import { GamesService} from "../games.service"
import { Game } from "./game";

export class Ppt extends Game{
    
    constructor(private gameService: GamesService) {
        super();
    }

    public getGameName(): string {
        return this._gameName;
    }

    public setGameName(gameName: string): void {
        this._gameName = gameName;
    }

    public getGameScore(): string {
        return this._gameScore;
    }

    public setGameScore(gameScore: string): void {
        this._gameScore = gameScore;
    }

    public getPlayerName(): string {
        return this._playerName;
    }

    public setPlayerName(playerName: string): void {
        this._playerName = playerName;
    }
    
    public save(): void {
        this.gameService.save(this);
    }
    
    public start(playerName: string): void {
        this.setGameName('ppt');
        this.setGameScore('0');
        this.setPlayerName(playerName);
    }


}
