import { Link, useParams } from "react-router-dom"
import Player from "../components/player"
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
    const { id } = useParams();

    const obj = songsArray.filter(
        (currentSongObj) => currentSongObj.id === Number(id)
    );

    const artistId = artistArray.filter(
        (currentArtistObj) => currentArtistObj.name === obj[0].artist
    ).id;

    return (
        <div type="song" >
            <div className="song__container">
                <div className="song__image-container">
                    <img
                        src={obj[0].image} alt={`Imagem da musica ${obj[0].name}`}
                    />
                </div>
            </div>

            <div className="song__bar">
                <div className="song__artist-image">
                    <Link to={`/artist/${artistId}`}>
                        <img
                            width={75}
                            height={75}
                            src={""} alt={""} />
                    </Link>
                </div>

                <Player />

                <div>
                    <p className="song__name">Do Job</p>
                    <p>MC Tuto</p>
                </div>
            </div>
        </div>
    )
}
export default Song