import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
    const [items, setItems] = useState(5);
    return (
        <div className="song-list">
            {songsArray
                .filter((currentValue, index) => index < items)
                .map((currentSongObj, index) =>
                    <SongItem
                        key={index}
                        index={index}
                        {...currentSongObj}
                    />
                )}

            <p className="song-list__see-more"
                onClick={() => setItems(items + 5)}>
                Ver Mais
            </p>
        </div>
    )
}
export default SongList;