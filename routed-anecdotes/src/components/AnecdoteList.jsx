import PropTypes, { number, string } from 'prop-types';
import { Link } from 'react-router-dom';

const AnecdoteList = ({ anecdotes }) => {
    return (
    <div>
        <h2>Anecdotes</h2>
        <ul>
            {anecdotes.map(anecdote => 
                <li key={anecdote.id} >
                    <Link to={`/anecdotes/${anecdote.id}`} >
                        {anecdote.content}
                    </Link>
                </li>
            )}
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
