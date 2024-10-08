export interface PlaylistModel{
    id: number;
    name: string;
    gender: string;
    songs:[
        {
            id: number;
            name: string;
            artist: string;
        }
    ];
}