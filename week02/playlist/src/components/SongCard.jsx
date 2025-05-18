export const SongCard = ({
    albumImage,
    releaseDate,
    artist,
    title,
    lyricist,
    composer,
    ClickOpen
}) => {
    

    return (
        <section 
            onClick={ClickOpen}
            className="ph:w-60 ph:p-3 ph:m-3 ph:text-sm dt:w-100 dt:p-6 dt:m-5 dt:text-base bg-gray-800 rounded-lg shadow"
        >
            <img 
                src={albumImage} 
                alt={`${title} 앨범 커버`} 
                className="w-full rounded mb-4"
            />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <hr className="my-4"/>
            <p>🎤 가수 : {artist}</p>
            <p className="text-gray-200">📝 작사가: {lyricist}</p>
            <p className="text-gray-200">🎼 작곡가: {composer}</p>
            <p className="text-gray-400 text-sm mt-2">📅 발매일: {releaseDate}</p>
            
        </section>
    )
}
