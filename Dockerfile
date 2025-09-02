FROM node:alpine

COPY . .
RUN chmod +x script.sh
RUN cp -a ./script.sh /usr/local/bin/script.sh

RUN npm install 

COPY ../* ./

CMD ["node", "index.js"]
