import { ChordModel } from "../Models/ChordModel";

const database: ChordModel[] = [
  {
    id: 1,
    artist: "Paris Saint-Germain",
    name: "France",
  },
  {
    id: 2,
    artist: "Manchester United",
    name: "England",
  },
  {
    id: 3,
    artist: "Bayern Munich",
    name: "Germain",
  },
]

export const findChordById = async (id: number):Promise<ChordModel | undefined> => {
    return database.find( Chord => Chord.id === id);
}
