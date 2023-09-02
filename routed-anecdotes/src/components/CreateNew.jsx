import PropTypes from 'prop-types';
import { useFrom } from "../hooks/useForm";

const CreateNew = ({addNew}) => {
    const content = useFrom('text')
    const author = useFrom('text')
    const info = useFrom('text')

    const handleSubmit = (e) => {
      e.preventDefault()
      addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input {...content} />
          </div>
          <div>
            author
            <input {...author} />
          </div>
          <div>
            url for more info
            <input {...info} />
          </div>
          <button>create</button>
        </form>
      </div>
    )
  
}

export default CreateNew

CreateNew.propTypes = {
    addNew: PropTypes.func,
}