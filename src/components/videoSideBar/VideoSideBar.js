import React, {useState}from 'react';
import './VideoSideBar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';


function VideoSideBar({likes, shares, messages}) {

    const [liked, setLiked] = useState(false);
    const [likesCurrent, setLikes] = useState(likes);

    const handelLikePress = () => {
        if(liked){
            setLikes(likesCurrent - 1);
            setLiked(false);
        } else {
            setLikes(likesCurrent + 1);
            setLiked(true);
        };
    };

    return (
        <div className="videoSideBar">
            <div className="videoSideBar__button">
                {liked ? (
                    <FavoriteIcon 
                        fontSize="large"
                        onClick={handelLikePress}
                    />
                ) : (
                    <FavoriteBorderIcon 
                        fontSize="large"
                        onClick={handelLikePress}
                    />
                )}
                <p>{likesCurrent}</p>
            </div>
            <div className="videoSideBar__button">
                <MessageIcon fontSize="large"/>
                <p>{messages}</p>
            </div>
            <div className="videoSideBar__button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    );
};

export default VideoSideBar
