import { useDispatch } from "react-redux"
import { updateTweet } from "../store/actions/tweet.action"

export const TweetPreview = ({ tweet, creator, loggedinUser }) => {

    const dispatch = useDispatch()
    // prepare to send to sql server those arguments
    const toggleLike = (loggedId, tweetId) => {
        const cloneTweet = structuredClone(tweet)
        const idx = cloneTweet.likes.findIndex(l => l === loggedId)
        if (idx === -1)cloneTweet.likes.push(loggedId)
        else  cloneTweet.likes.splice(idx, 1)

        dispatch(updateTweet(cloneTweet))
    }

    return (
        <section className="tweet-preview flex column">
            <header className="flex space-between">
                <div className="sub1 flex">
                    <img src={creator.profileImg} alt="" />
                    <div className="user-name flex column">
                        <span>{creator.firstName} {creator.lastName}</span>
                        <span>{tweet.createdAt}</span>
                    </div>
                </div>
            </header>
            {/* tweet content */}
            <span>{tweet.content}</span>
            {/* tweet image */}
            {tweet.imgUrl &&
                <img className="tweet-img" src={tweet.imgUrl} alt="" />}
            {/* tweet stats */}
            <section className="tweet-stats flex end">
                <span>Likes: {tweet.likes.length}</span>
                <span>Comments: {tweet.replies.length}</span>
            </section>

            <section className="actions-bar flex align-center space-between" >
                <div>  <button>comment</button> </div>
                <div>  <button>Retweet</button> </div>
                <div>  <button onClick={() => toggleLike(loggedinUser._id, tweet._id)}>
                    {tweet.likes.includes(loggedinUser._id) ? 'Unlike' : 'Like'} </button> </div>
                <div>  <button>Save</button></div>
            </section>

        </section>
    )

}