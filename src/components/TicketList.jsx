// los parámetros de tickets, onUpdate estaban entre llaves,  
// cuando se haga el llamado a la api podría volver a poner las llanes
function TicketList(tickets, onUpdate) {
  return (
    <div>
      <h2>Tickets de Soporte</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p><strong>Status:</strong> {ticket.status}</p>
            <button onClick={() => onUpdate(index, { status: 'closed' })}>
              Cerrar Ticket
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
