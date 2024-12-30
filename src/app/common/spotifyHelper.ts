import { IPlaylist } from '../interfaces/IPlaylist';
import { IUsuario } from '../interfaces/IUsuario';

export function SpotifyUserParaUsuario( user: SpotifyApi.CurrentUsersProfileResponse ): IUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imageUrl: user.images.pop().url,
  };
}

export function SpotifyPlaylistParaPlaylist( playlist: SpotifyApi.PlaylistObjectSimplified ): IPlaylist {
  return {
    id: playlist.id,
    nome: playlist.name,
    imagemUrl: playlist.images.pop().url,
  };
}