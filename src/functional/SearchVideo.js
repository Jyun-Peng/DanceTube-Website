const apiKey = 'AIzaSyCl5DdVbd-MVUsF25q0D20rMOtgwn6Rs_Y';

function searchVideo(keyword, time = null, setState) {
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keyword}
    &${
        time && `publishedAfter=${time}-01-01T00:00:00Z&publishedBefore=${time}-12-31T23:59:59Z`
    }&type=video&key=${apiKey}`;
    console.log(URL);

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            setState(data.items);
        });
}

export { searchVideo };
