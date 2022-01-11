import react from 'react';
import { Link } from 'react-router-dom';

function Button({ text, search }) {
    return (
        <Link to={`/style:${search}`}>
            <button className="text-sm bg-main px-3 py-1.5 rounded-full font-bold text-white">{text}</button>
        </Link>
    );
}

export default Button;
