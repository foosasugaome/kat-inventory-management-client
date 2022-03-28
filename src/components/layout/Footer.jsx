import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <>
        <Link to='/about'> About </Link> |
        <Link to='/'> Contact </Link>
        </>
    )
}