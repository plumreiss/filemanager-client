import { Header } from "./components/Header";
import { BaseTable } from "./components/BaseTable";
import { Alert, Container, Row, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFileList } from "./redux/fileSlice";
import { useSelector } from "react-redux";

function App() {
  const dispath = useDispatch();
  const state = useSelector((state) => state.files);

  useEffect(() => {
    (() => {
      dispath(fetchFileList());
    })();
  }, [dispath]);

  let errorMessage = "An unexpected error ocurred";
  if (state.error === "Request failed with status code 404") {
    errorMessage = "No files found";
  } else if (state.error === "Request failed with status code 403") {
    errorMessage = "File is not correctly formatted";
  } else {
    errorMessage = "An unexpected error occurred";
  }

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row className="justify-content-center">
          {state.error && <Alert variant="danger">{errorMessage}</Alert>}
          {state.isLoading && <Spinner data-testid="spinner" />}
          {state.files.length > 0 && <BaseTable files={state.files} />}
        </Row>
      </Container>
    </>
  );
}

export default App;
