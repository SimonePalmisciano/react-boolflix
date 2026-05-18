import { useContext } from "react"
import SearchBar from "./SearchBar"
import { MovieContext } from "../contexts/MovieContext"

function HomePage() {
    const movies = useContext(MovieContext)

    return (
        <>
            <div>
                {JSON.stringify(movies)}
            </div>
        </>
    )
}
export default HomePage