import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Card, Badge, Spinner } from 'react-bootstrap';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch data from your MongoDB via your Express API
  const fetchMessages = async () => {
    try {
      // Replace this URL with your actual backend endpoint
      const response = await fetch('http://localhost:5000/api/contact');
      const data = await response.json();
      setMessages(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // 2. Handle deleting a message from the database
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await fetch(`http://localhost:5000/api/contact/${id}`, {
          method: 'DELETE',
        });
        // Refresh the list after deleting
        fetchMessages();
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="info" />
      </Container>
    );
  }

  return (
    <Container className="py-5 mt-5">
      <Card className="shadow-sm border-0 bg-dark text-white p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0">Admin Inbox</h2>
          <Badge bg="info">{messages.length} Messages</Badge>
        </div>

        <Table responsive="md" hover variant="dark" className="align-middle">
          <thead className="text-secondary text-uppercase small">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg: any) => (
              <tr key={msg._id}>
                <td className="fw-bold">{msg.name}</td>
                <td>{msg.email}</td>
                <td className="text-truncate" style={{ maxWidth: '300px' }}>
                  {msg.message}
                </td>
                <td className="text-center">
                  <Button 
                    variant="outline-danger" 
                    size="sm" 
                    onClick={() => handleDelete(msg._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {messages.length === 0 && (
          <div className="text-center py-5 text-secondary">
            <p>No messages in the database. 🕸️</p>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default Dashboard;