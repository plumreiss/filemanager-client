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

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row className="justify-content-center">
          {state.error && (
            <Alert variant="danger">
              {state.error === "Request failed with status code 404"
                ? "File not found"
                : "An unexpected error occurred"}
            </Alert>
          )}
          {state.isLoading && <Spinner data-testid="spinner" />}
          {state.files.length > 0 && <BaseTable files={state.files} />}
        </Row>
      </Container>
    </>
  );
}

export default App;
