FROM python:3.6
LABEL maintainer 'Maykerops'

RUN useradd www && \
    mkdir /app && \
    mkdir /log && \
    chown www /log

USER www
VOLUME /log
WORKDIR /app
EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/python"]
CMD ["run.py"]

#docker container run -it -v $(pwd):/app -p 80:8000 --name python-server-curso quarto-build
#foi preciso fazer o mapeamento do meu diretorio atual com $(pwd) apotando para /app que é o workdir