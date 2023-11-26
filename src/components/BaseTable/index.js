import { Table } from "react-bootstrap";

export const BaseTable = ({ files }) => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {files?.map(({ file, lines }) =>
            lines?.map(({ text, number, hex }, id) => (
              <tr key={id}>
                <td>{file}</td>
                <td>{text}</td>
                <td>{number}</td>
                <td>{hex}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};
