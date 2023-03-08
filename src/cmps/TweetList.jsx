import { TweetPreview } from "./TweetPreview"
import { useSelector } from "react-redux"

export const TweetList = ({ tweets }) => {
    const loggedinUser = useSelector(state => state.userModule.loggedinUser)
    const users = useSelector(state => state.userModule.users)

    const getCreatedByUser = (byId) => {
        return users.find(u => u._id === byId)
     }

    return (
        <section className="tweet-list grow flex column ">
            {tweets.map(tweet =>
                <TweetPreview key={tweet._id} tweet={tweet} CreatedByUser={getCreatedByUser(tweet.createdBy)} />
            )
            }
        </section>
    )
}