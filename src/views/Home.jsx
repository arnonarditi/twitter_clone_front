import { TweetList } from '../cmps/TweetList'
import {AddTweet} from '../cmps/AddTweet'

export const Home = (props) => {
    // const tweets=useSelector()

    return (
        <section className="home grow flex">
            <section className="tweets-container grow flex column">     
                <AddTweet></AddTweet>
                <TweetList></TweetList>   
            </section>

            <section className="side-container">
                <h2>Side</h2>
            </section>
        </section>
    )
}