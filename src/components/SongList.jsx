import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
    const items = 5;

    return (
        <div className="song-list">
            {songsArray
                .filter((currentValue, index) => index < items)
                .map((currentSongObj, index) =>
                    <SongItem
                        key={index + 1}
                        index={index}
                        {...currentSongObj}
                    />
                )}

            <p className="song-list__see-more">Ver Mais</p>
        </div>
    )
}
export default SongList;