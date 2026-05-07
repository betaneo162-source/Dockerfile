FROM ubuntu:22.04
RUN apt update && apt install -y gcc nodejs npm
COPY neo1.c /app/
COPY server.js /app/
COPY package.json /app/
WORKDIR /app
RUN gcc -pthread -O3 -o bgmi-killer neo1.c
RUN npm install
EXPOSE 5001
CMD ["node", "server.js"]
