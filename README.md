# Deuslink Software Test Frontend

this project is a test for Deuslink Software which consist in create a view fro task and use the CRUD from the project https://github.com/orjuela45/Deuslink-Software-test-backend with. This was developed in react with vite

# Installation

1. Clone the repository with the command
```
git clone https://github.com/orjuela45/Deuslink-Software-test-frontend.git
```
2. Go to the folder
```
cd Deuslink-Software-test-frontend
```
3. Install the dependencies
```
npm install
```
4. In the file src\helpers\httpRequest.ts change the value of baseURL depending if you are going the local server o let that URL if you want to use production

the following steps launch the project depending if you want to launch in dev mode or production

# Launch in develop

1. Run the next command to launch as a develop mode
```
npm run dev
```

# Launch in develop

1. Execute the command to build the application
```
npm run build
```
2. Go to the directory /dist
3. Using http-server (https://www.npmjs.com/package/http-server) execute the next command
```
http-serve -o
```

Once the project is launch, you can use it with the url that the terminal give you

## Note

- I deploy this project in netlify, the link is: https://645aba64a65b9f40a3ae1bc0--joyful-pie-940e9d.netlify.app