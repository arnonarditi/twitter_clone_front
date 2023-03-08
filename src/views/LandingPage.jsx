import { Link } from "react-router-dom"

export const LandingPage=(props)=>{

    return(
        <section className="landing-page  grow">
            <h2>Landing page</h2>
            <Link to={"/home"}>Home</Link>
        </section>
        )
}