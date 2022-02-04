import { useState } from "react";
import { fetchApi } from "../../utils/fetchApi";


const ArtistSearch = () => {
  const [artist, setArtist] = useState("");
  const [topTenList, setTopTenList] = useState(null);
  const [artistName, setartistName] = useState('')

  const fetchArtist = () => {
    fetchApi("GET", "search", artist).then((res) => {
    //   console.log(res.response.hits)
      setTopTenList(res.response.hits)
    

    })
    
    setartistName(artist)
    
  };


  return (
    <div className="flex w-full min-h-screen flex-1 flex-col items-center justify-center px-20 text-center">
      <h1> Artist Search Page </h1>
      
      <input
        onChange={(e) => setArtist(e.target.value)}
        className="border-[1px] border-black rounded-2 px-2 text-center mt-3"
        type="text"
        id="search"
        placeholder="Enter Artist Name"
      />
      <button
        onClick={fetchArtist}
        className="flex text-white rounded-md border-2 border-green-600 bg-red-500 hover:text-red-500 hover:bg-white  text-center items-center justify-center px-2 mt-5"
      >
        Search
      </button>
      <div>
        <h3>{artistName}</h3>
        {topTenList !== 'undefined' && topTenList !== null && (
          <ul className="grid grid-cols-3">
            {topTenList.map((top, index) => (
                <li key={index}>
                 <img src={top.result.header_image_thumbnail_url} />
              <h3>{top.result.full_title}</h3>
                </li>
               
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ArtistSearch;

// export async function getServerSideProps() {
//     const data = await fetchApi('GET', 'search', 'Method Man')
//     const artist = data.response.hits

//     return ({
//       props: {
//         artist: artist
//       }
//     })
//   }
