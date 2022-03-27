export default function Search ({search, setSearch}) {
  
    return(
        <>
            <label htmlFor="search">Search: </label>
            <input type="text" name="" id="search" onChange={(e) => {setSearch(e.target.value)}}/>
            <input type="submit" value="Search" />
        </>
    )
}