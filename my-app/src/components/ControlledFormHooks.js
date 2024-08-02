import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }

  return (
      <div>
          <div>
              <form onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="id-name">Your Name:</label>
                      <input
                          value={name}
                          onChange={
                              (e) => setName(e.target.value)
                          }
                          id="id-name"
                          name="name"
                          type="text"
                      />
                  </div>
                  <div>
                      <label htmlFor="id-category">Query category:</label>
                      <select
                          id="id-category"
                          name="category"
                          value={category}
                          onChange={
                              (e) => setCategory(e.target.value)
                          }
                      >
                          <option>Website issue</option>
                          <option>Order issue</option>
                          <option>General inquiry</option>
                      </select>
                  </div>
                  <div>
                      <label htmlFor="id-comments">Comments:</label>
                      <textarea
                          value={comments}
                          onChange={
                              (e) => setComments(e.target.value)
                          }
                          id="id-comments"
                          name="comments"
                      />
                  </div>
                  <input type="submit" value="Submit" />
              </form>
          </div>
      </div>
  )
}

export default ControlledFormHooks