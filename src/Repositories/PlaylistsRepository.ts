import { PlaylistModel } from "../Models/PlaylistModel";
import fs from 'fs/promises'

export const findAllPlaylists = async ():Promise<PlaylistModel[]> => {
    const data= await fs.readFile("./src/Data/playlists.json", "utf-8")
    const Playlists: PlaylistModel[] = JSON.parse(data)
    return Playlists;
}

export const findPlaylistById = async (id: number):Promise<PlaylistModel | undefined> => {
    const data= await fs.readFile("./src/Data/playlists.json", "utf-8")
    const Playlists: PlaylistModel[] = JSON.parse(data)
    return Playlists.find( Playlist => Playlist.id === id);
}
