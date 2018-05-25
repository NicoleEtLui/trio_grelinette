### TFE - Martin Petit

You can find all the documentation and the explanation on the [wiki](https://github.com/NicoleEtLui/trio_grelinette/wiki) of the project.

Vous pouvez trouver toute la documentation et les explications sur le [wiki](https://github.com/NicoleEtLui/trio_grelinette/wiki) du projet.


#### LOCAL SETUP DEV
##### Docker w/ toolbox
* [to access another folder than C:/Users in docker machine](http://support.divio.com/local-development/docker/how-to-use-a-directory-outside-cusers-with-docker-toolbox-on-windowsdocker-for-windows)
* toolbox doesn't handle well localhost in url, try with the ip of the docker-machine instead

##### Servers
  * `npm run init:server` to instenciate php container server
  * `npm run init:mysql`to instenciate mysql container server
  * `npm run stop` stop both
  * `npm start` launch webpack devserver and start both container if they exists