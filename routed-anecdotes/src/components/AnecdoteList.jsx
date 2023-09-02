import PropTypes, { number, string } from 'prop-types';

const AnecdoteList = ({ anecdotes }) => {
    return (
    <div>
        <h2>Anecdotes</h2>
        <ul>
            {anecdotes.map(anecdote => <li key={anecdote.id} >{anecdote.content}</li>)}
        </ul>
    </div>
    )
}

export default AnecdoteList

AnecdoteList.propTypes = {
    anecdotes: PropTypes.arrayOf(
        PropTypes.shape({
            content: string,
            author: string,
            info: string,
            votes: number,
            id: number
        })
    )
}
