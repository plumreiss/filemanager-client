import { Table } from "react-bootstrap";

export const BaseTable = ({ data }) => {
  return (
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
        {data?.map(({ file, lines }) => (
          <tr>
            <td>{file}</td>
            {lines?.map(({ text, number, hex }) => (
              <>
                <td>{text}</td>
                <td>{number}</td>
                <td>{hex}</td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
