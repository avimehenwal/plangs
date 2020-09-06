import React, {useRef} from 'react'
import { Button, Container, Form } from "react-bootstrap";

export default function Login() {
  const idRef = useRef()

  function handleSubmit(e) {
    // prevent page from refreshing
    e.preventDefault()
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh'}}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">Login</Button>
        <Button variant="secondary">Create New Id</Button>
      </Form>
    </Container>
  )
}
