import '../App.css';
import emojiData from './emoji.json';
import { useEffect, useState } from 'react';

function Emoji() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const newData = emojiData.filter((emoji) => {
            return emoji.description.toLowerCase().includes(search.toLowerCase());
        });
        setData(newData);
    }, [search]);

    return (
        <div className="App">
            <h1 className="App-header">
                Search for emoji and its description
            </h1>

            <div>
                <input type="text"
                    placeholder="Type to search"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <div>
                    {
                        data.map((emoji) => (
                            <div>
                                <h2>{emoji.description} {emoji.emoji} </h2>
                                {
                                    emoji.tags.map((tag) => <span>{tag} </span>)
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Emoji;
