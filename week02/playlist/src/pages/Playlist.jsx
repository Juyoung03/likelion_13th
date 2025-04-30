import albumData from "../data/song.json";
import {SongCard} from "../components/SongCard";

export const Playlist = () => {
  return (
    <div>
      <h1 className="pl-20 mt-10 font-extrabold text-3xl">My Playlist</h1>
      <main className="pl-10 flex w-full m-auto">
      {albumData.songs.map((song, index) => {
        return(
        <SongCard 
          key={index}
          albumImage={song.albumImage}
          releaseDate={song.releaseDate}
          artist={song.artist}
          title={song.title}
          lyricist={song.lyricist}
          composer={song.composer}
        />
        );
      })}
      </main>
    </div>
  );
};

