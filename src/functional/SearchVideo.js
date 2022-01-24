const apiKey = 'AIzaSyCl5DdVbd-MVUsF25q0D20rMOtgwn6Rs_Y';

const video = {
    kind: 'youtube#searchResult',
    etag: '0GLh0v1bDr0cwi0lfgchIuBmcrY',
    id: {
        kind: 'youtube#video',
        videoId: 'upvEOZn4p6g',
    },
    snippet: {
        publishedAt: '2019-01-05T16:10:48Z',
        channelId: 'UCdzMtyEM1mEF2oA_PG9g-vA',
        title: 'Popping Final Battle：政治大學 vs 台灣大學｜181223 College High vol.14 Stage3',
        description:
            'COLLEGE HIGH 全國制霸The best college dance competition ever. Proudly presented by Team SKIP Official Website: ...',
        thumbnails: {
            default: {
                url: 'https://i.ytimg.com/vi/upvEOZn4p6g/default.jpg',
                width: 120,
                height: 90,
            },
            medium: {
                url: 'https://i.ytimg.com/vi/upvEOZn4p6g/mqdefault.jpg',
                width: 320,
                height: 180,
            },
            high: {
                url: 'https://i.ytimg.com/vi/upvEOZn4p6g/hqdefault.jpg',
                width: 480,
                height: 360,
            },
        },
        channelTitle: 'TeamSKIPtv',
        liveBroadcastContent: 'none',
        publishTime: '2019-01-05T16:10:48Z',
    },
};

async function searchVideo(keyword, time = null, setState) {
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${keyword}&${
        time && `publishedAfter=${time}-01-01T00:00:00Z&publishedBefore=${time}-12-31T23:59:59Z`
    }&type=video&key=${apiKey}`;

    fetch(URL)
        .then((response) => {
            if (response.ok) return response.json();
            else throw new Error('Something went wrong');
        })
        .then((data) => {
            console.log(data);
            setState(data.items);
        })
        .catch((error) => {
            // If fails, set default video
            console.log(error);
            setState([video]);
        });
}

export { searchVideo };
