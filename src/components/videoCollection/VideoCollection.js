import React, { useEffect, useState } from 'react';
import Video from '../video/Video';
import axios from '../../utils/Axios';
import './VideoCollection.css';

function VideoCollection() {
    const [tiktoks, setTiktoks] = useState([])
    useEffect(() => {
        async function fetchData(){
            await axios.get('/collect/tiktok').then(res => {
                setTiktoks(res.data);
            });
        };
        fetchData();
    }, []);

    return (
        <div className="videoCollection">
            {tiktoks.map(({url, channel, description, song, likes, shares, messages}) => 
                    <Video 
                        url={url}
                        channel={channel}
                        description={description}
                        song={song}
                        likes={parseInt(likes)}
                        shares={parseInt(shares)}
                        messages={parseInt(messages)}     
                    />
                )
            }
        </div>
    )
}

export default VideoCollection
