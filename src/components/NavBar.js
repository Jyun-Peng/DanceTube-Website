import react from 'react';

const apiKey = 'AIzaSyCl5DdVbd-MVUsF25q0D20rMOtgwn6Rs_Y';
function getVideo(keyword, time) {
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keyword}
    &publishedAfter=${time}-01-01T00:00:00Z&publishedBefore=${time}-12-31T23:59:59Z&key=${apiKey}`;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function NavBar() {
    return (
        <header className="flex justify-between">
            <h3 className="text-white bold">DanceTube</h3>
            <div className="flex">
                <div className="text-white" onClick={() => getVideo('locking', '2020')}>
                    style
                </div>
            </div>
        </header>
    );
}

export default NavBar;
