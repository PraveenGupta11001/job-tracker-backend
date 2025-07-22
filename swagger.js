import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Job Application Tracker API',
    description: 'API documentation for your project.',
  },
  host: 'localhost:5000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/index.js'];  // or your main route file

swaggerAutogen()(outputFile, endpointsFiles, doc);
