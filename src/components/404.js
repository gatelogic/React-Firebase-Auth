import React from "react";
import { Card, Alert } from "react-bootstrap";

export default function UnknownPage() {
  return (
    <Card>
      <Card.Body>
        <Alert variant="danger">Error 404.</Alert>
      </Card.Body>
    </Card>
  );
}
