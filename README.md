# Dockerinização de uma aplicação React + Laravel

Será necessário configurar um arquivo de hosts em sua maquina caso queira, acessar com alias exemplo todolist.local e alterar nos arquivos .conf

```sh

> sudo vim /etc/hosts
```

```sh
 127.0.0.1 todolist.local api.todolist.local
```

Após subir os containers, não esqueça de rodar as mirations


```sh

> docker exec -it api-todolist bash
> php artisan migrate
```
