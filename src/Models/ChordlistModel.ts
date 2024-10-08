export interface ChordlistModel{
    id: number;
    artist: string;
    name: string;
    songsChords:
        {
            song: string;
            chords: string;
        }

}