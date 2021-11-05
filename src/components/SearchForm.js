import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('')
  React.useEffect(() => {
    searchValue.current.focus()
  },[])
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handeSubmit = (e) => {
    e.preventDefault(  )
  }
 
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handeSubmit}>
        <div className="form-control">
          <label htmlFor="name"> search for your favourite cocktail</label>
          <input type="text"id='name' ref ={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
