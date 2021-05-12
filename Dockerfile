FROM ubuntu:19.10 as ubuntu

RUN apt-get update

RUN apt-get -y install curl nginx

Run curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get -y install nodejs

WORKDIR "/nabila-edina-foreign-exchange-currency"

COPY . .

EXPOSE 80

CMD ["npm", "start"]
