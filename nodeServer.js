// ----------------------------------------------------------------------------------------------------------------
//const http = require('http');
// const data = [
//   {
//     name: 'nitin',
//     age: '22',
//   },
// ];
// const server = http.createServer((req, res) => {

//   const { method, url } = req;

//   let body = [];

//   let status = 404;

//   const response = {
//     status: 'Failure',
//     data: null,
//   };

//   req
//     .on('data', (chunk) => {
//       body.push(chunk);
//     })
//     .on('end', () => {
//       const request = JSON.parse(body);

//       if (method === 'GET') {
//         if (url === '/') {
//           status = 200;
//           response.status = 'success';
//           response.data = data;
//         } else if (url === '/data') {
//           status = 200;
//           response.status = 'success';
//           response.data = data;
//         } else {
//           status = 404;
//           response.status = 'Failure';
//           response.data = null;
//         }
//       }

//       if (method === 'POST') {
//         if (url === '/data') {
//           if (request.name) {
//             status = 200;
//             response.status = 'success';
//             response.data = `Name is ${request.name}`;
//           } else {
//             status = 400;
//             response.status = 'Failure';
//             response.data = null;
//           }
//         } else {
//           status = 404;
//           response.status = 'Failure';
//           response.data = null;
//         }
//       }

//       res.writeHead(status, {
//         'Context-Type': 'application/json',
//         'X-Powered-By': 'Node.js',
//         Author: 'Nitin Surya',
//       });
//
//       console.log('request --->', request);//
//       console.log('response --->', response);
//
//       res.end(JSON.stringify(response));
//     });
// });
// server.listen(8000, () => console.log(`server is running on 8000`));
