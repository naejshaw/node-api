import { ChordlistModel } from "../Models/ChordlistModel";
import { SongsChordsModel } from "../Models/SongsChordsModel";

const database: ChordlistModel[] = [
    {
      id: 1,
      name: "Lionel Messi",
      artist: "TG",
      songsChords:
        {
          song: "Song1",
          chords: "C G Am F"
          },
      },
]
// Create
export const createChordlist = async (Chordlist: ChordlistModel) => {
  database.push(Chordlist);
}
// Read
export const findAllChordlists = async ():Promise<ChordlistModel[]> => {
    return database;
}
// Read
export const findChordlistById = async (id: number):Promise<ChordlistModel | undefined> => {
    return database.find( Chordlist => Chordlist.id === id);
}
// Update
export const findAndModifyChordlist = async (id:number, songsChords: SongsChordsModel):Promise<ChordlistModel> => {
    const ChordlistIndex = database.findIndex(Chordlist => Chordlist.id === id);
    if(ChordlistIndex !== -1) {
        database[ChordlistIndex].songsChords = songsChords;
    }

    return database[ChordlistIndex]
}
// Delete
export const deleteChordlistById = async (id:number) => {
    const index = database.findIndex( Chordlist => Chordlist.id === id);
    if(index !== -1) {
        database.splice(index, 1);
        return true
    }
    return false
}