# FILEMANAGER - CLIENT

## How to run the project

- Install dependencies `yarn install`
- Run the project `yarn start`

### Docker support
- Build the image with

  `docker build . -t filemanager-client`

- And then run project

  `docker run --name filemanager-client -p3000:30000 -d filemanager-client`

- To stop project

  `docker stop filemanager-client`

- To run the container created above

  `docker start filemanager-client`

## How to run tests?

- To run tests:

  `yarn test` or `npm run test`

## Filter files
#### (query params):
- fileName (optional): Name of the file to search for.

Example: `http://localhost:3000/?fileName=test2.csv`
