FROM node:16.13.1
# Add a work directory
WORKDIR /portfolio
# Cache and Install dependenciesn 
COPY . ./
RUN yarn install
RUN npm install -g serve

# add `/app/node_modules/.bin` to $PATH
ENV PATH /portfolio/node_modules/.bin:$PATH

# Place current version into public directory
COPY ./version ./public/.

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3001

CMD [ "serve", "-s", "build" ]
