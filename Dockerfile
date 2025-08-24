# https://www.docker.com/ja-jp/blog/how-to-dockerize-react-app/
FROM node:18

WORKDIR /react-beginner

# TODO: 一旦不要なため、コメントアウト
# COPY package*.json ./

# RUN npm install

CMD ["npm", "start"]
