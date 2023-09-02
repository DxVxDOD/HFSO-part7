import { useParams } from 'react-router-dom'
import PropTypes, { number, string } from 'prop-types';

const Anecdote = ({ anecdotes, notification }) => {

    const id = useParams().id
    const anecdote = anecdotes.find(a => a.id === Number(id))

  return (
    <>
    <h2>{anecdote.content}</h2>
    <p>Author: {anecdote.author}</p>
    <p>Url: {anecdote.info}</p>
    {notification}
    </>
  )
}

export default Anecdote

Anecdote.propTypes = {
    anecdotes: PropTypes.arrayOf(
        PropTypes.shape({
            content: string,
            author: string,
            info: string,
            votes: number,
            id: number
        })
    ),
    notification: string
}
