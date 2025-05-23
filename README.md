# Sistema de turnos Shake-Shack

## Instalcion de dependencias
```
npm install
```
## Ejecucion:
```
nodemon app.js
```
### El proyecto trabaja con el servicio pm2 
```
# pm2 start app.js
```

### Descripcioon:
La aplicación está desarrollada bajo una arquitectura monolítica e integra dos componentes principales: una API REST y un servicio de WebSocket. La API permite la comunicación con otra aplicación externa e independiente, la cual se encarga de enviar los nombres de los clientes. Por otro lado, el WebSocket permite actualizar en tiempo real la tabla de turnos, mostrando siempre la información actualizada sin necesidad de recargar la página.

En paralelo, desde el front-end, se implementa una lógica independiente que elimina automáticamente los nombres de los clientes de la lista una vez transcurrido un tiempo determinado, manteniendo así la interfaz limpia y actualizada según las necesidades del usuario. 
