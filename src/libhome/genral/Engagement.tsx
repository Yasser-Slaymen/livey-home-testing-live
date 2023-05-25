import LiveLearning from "../custom/LiveLearning"
import LiveShoppingHome from "../custom/LiveShoppingHome"
import LiveSports from "../custom/LiveSports"
import GameShows from "../custom/GameShows"
import ReadyFor from "../custom/ReadyFor"
export default function Engagement(){
    return(
        <section>
            <ReadyFor/>
            <LiveLearning/>
            <LiveShoppingHome/>
            <LiveSports/>
            <GameShows/>
        </section>
    )
}