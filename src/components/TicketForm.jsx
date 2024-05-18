import { useState } from "react";

function TicketForm (onCreate){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && description) {
          onCreate({ title, description, status: 'open', createdAt: new Date() })
          setTitle('')
          setDescription('')
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Descripción:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit">Crear Ticket</button>
        </form>
      );

}

export default TicketForm