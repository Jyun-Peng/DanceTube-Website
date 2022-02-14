import data from './data.json';

const api_key = process.env.REACT_APP_API_KEY;

async function searchVideoList(keyword, time = null, maxResults = 5, setData, setFetchState) {
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${keyword}&${
        time && `publishedAfter=${time}-01-01T00:00:00Z&publishedBefore=${time}-12-31T23:59:59Z`
    }&type=video&key=${api_key}`;

    // fetch(URL)
    //     .then((response) => {
    //         // if (response.ok) return response.json();
    //         throw new Error('daily quota exceeded!');
    //     })
    //     .then((data) => {
    //         console.log('VideoList fetched successfully.');
    //         setData(data.items);
    //     })
    //     .catch((error) => {
    //         // If fails, set default video
    //         console.log(error);
    //         setFetchState({ message: error.message, ok: false });
    //     });

    // demo data
    // console.log('Start searching!');
    setData(data[keyword].items);
}

async function getVideo(videoId, setData, setFetchState) {
    const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${api_key}`;
    // fetch(URL)
    //     .then((response) => {
    //         // if (response.ok) return response.json();
    //         throw new Error('daily quota exceeded!');
    //     })
    //     .then((data) => {
    //         console.log('Video info fetched sucessfully.');
    //         setData(data.items[0]);
    //     })
    //     .catch((error) => {
    //         // If fails, set default video
    //         console.log(error);
    //         setFetchState({ message: error.message, ok: false });
    //     });

    //demo data
    // console.log('Start searching!');
    setData(data.singleVideo.items[0]);
}

export { searchVideoList, getVideo };
