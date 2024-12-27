export const environment = {
    production: true,
  };
  
export const spotifyConfiguration = {
  clientId: '6281a482670a43c69c01e5737ca900e6',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUr: 'http://localhot:4200/login',
  scopes: [
    'user-read-currently-playing',    // musica tocando agora.
    'user-read-recently-played',      // ler musicas tocadas recentemente.
    'user-read-playback-state',       // ler estado do player do usuario.
    'user-top-read',                  // top artistas e musicas do usuario.
    'user-modify-playback-state',     // alterar do player do usuario.
    'user-library-read',              // ler biblioteca dos usuario.
    'playlist-read-private',          // ler playlists privadas.
    'playlist-read-collaborative',    // ler playlists colaborativas.
  ],
};