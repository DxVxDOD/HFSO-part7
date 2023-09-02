import { Link } from "react-router-dom"

const Menu = () => {
    const padding = {
      paddingRight: 5
    }

    return (
      <>
        <Link to='/anecdotes' style={padding} >Anecdotes</Link>
        <Link to='/create-new' style={padding} >Create new</Link>
        <Link to='/about' style={padding} >About</Link>
      </>
    )
}

export default Menu