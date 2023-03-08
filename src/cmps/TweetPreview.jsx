

export const TweetPreview = ({ tweet, CreatedByUser }) => {


    return (
        <section className="tweet-preview flex column">
            <header className="flex space-between">
                <div className="sub1 flex">
                    <img src={CreatedByUser.profileImg} alt="" />
                    <div className="user-name flex column">
                        <span>{CreatedByUser.firstName} {CreatedByUser.lastName}</span>
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
                <h3>stats-need to add</h3>
            </section>

            {/* <section  >

            </section> */}

        </section>
    )

}