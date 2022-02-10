import data from './data.json';

const apiKey = 'AIzaSyCl5DdVbd-MVUsF25q0D20rMOtgwn6Rs_Y';

async function searchVideoList(keyword, time = null, maxResults = 5, setState) {
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${keyword}&${
        time && `publishedAfter=${time}-01-01T00:00:00Z&publishedBefore=${time}-12-31T23:59:59Z`
    }&type=video&key=${apiKey}`;

    // fetch(URL)
    //     .then((response) => {
    //         if (response.ok) return response.json();
    //         throw new Error('Something went wrong when fetching videoList.');
    //     })
    //     .then((data) => {
    //         console.log('VideoList fetched successfully.');
    //         setState(data.items);
    //     })
    //     .catch((error) => {
    //         // If fails, set default video
    //         console.log(error);
    //     });

    // test
    console.log('Start searching!');
    setState(data[keyword].items);
}

async function getVideo(videoId, setState) {
    const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${apiKey}`;
    // fetch(URL)
    //     .then((response) => {
    //         if (response.ok) return response.json();
    //         throw new Error('Something went wrong when fetching video info.');
    //     })
    //     .then((data) => {
    //         console.log('Video info fetched sucessfully.');
    //         setState(data.items[0]);
    //     })
    //     .catch((error) => {
    //         // If fails, set default video
    //         console.log(error);
    //     });

    console.log('Start searching!');
    setState(data.singleVideo.items[0]);
}

export { searchVideoList, getVideo };
