import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private firestore: AngularFirestore) { }

  private collection: string = "games";

  /**
   * save
   */
  public save(game) {
    return this.firestore.collection(this.collection).add(game);
  }


  public getGames() {
    return this.firestore.collection(this.collection).snapshotChanges();
  }

}
