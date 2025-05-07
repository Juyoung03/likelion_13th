import albumData from "../data/song.json";
import {SongCard} from "../components/SongCard";
import closeImg from "../assets/close.png";
import { useState, useRef, useEffect } from "react";

export const Playlist = () => {
  const [albumCover, setAlbumCover] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  // 배경 스크롤 안되게게
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

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
          ClickOpen={()=> {
            setModalOpen(true);
            setAlbumCover(song);
          }}
        />
        );
      })}

      {
        modalOpen && albumCover && (
        <div 
          className="bg-[#00000092] w-full h-full fixed top-0 left-0 z-100 flex justify-center items-center" 
          ref={modalBackground} 
          onClick={e => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
            setAlbumCover(null);
          }
          }}
        >
          <div
            className="bg-[#ffffffe7] w-[500px] h-[400px] rounded-lg shadow-lg flex flex-col items-center relative"
          >
            <div className="w-full flex justify-end p-4">
            <img 
              src={closeImg} 
              alt="close" 
              onClick={()=> {
                setModalOpen(false);
                setAlbumCover(null);
              }}
              className="w-[30px] h-[30px] cursor-pointer"
            />
            </div>

            <img 
              src={albumCover.albumImage} 
              alt={`${albumCover.title} 앨범 커버`} 
              className="w-[300px] h-[300px] object-cover rounded-md"
            />
            <p className="mt-1 text-black font-semibold">{albumCover.title}</p>
            
          </div>
        </div>
      )}

      </main>
    </div>
  );
};

