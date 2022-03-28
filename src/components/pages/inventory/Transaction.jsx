import { useState } from "react"

export default function Transaction() {
    const [search, setSearch] = useState('')

    return(
        <>
        <div className='flex-container'>
        <form>
            <input type='text' />
            <button type='submit'> Search </button>
        </form>
        </div>
        </>
    )
}