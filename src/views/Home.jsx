import { TweetList } from '../cmps/TweetList'
import { AddTweet } from '../cmps/AddTweet'
import { useSelector } from 'react-redux'

export const Home = (props) => {
    const tweets = useSelector(state => state.tweetModule.tweets)


    if (!tweets) return (<h2>Loading....</h2>)
    return (
        <section className="home grow flex ">
            <section className="tweets-container grow flex column align-center">
                <AddTweet></AddTweet>
                <TweetList tweets={tweets}></TweetList>
            </section>

            <section className="side-container">
                <h2>Side</h2>
            </section>
        </section>
    )
}