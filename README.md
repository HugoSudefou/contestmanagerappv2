This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### Lancer l'appli :

```bash
$ sudo npm install -g ionic cordova
$ git clone {url}
$ cd contestmanagerv2
$ npm i
$ ionic serve
```
### Problème avec node >= 9.5

*Il y a un problème avec nodejs version 9.5 mini et node sass. Il faut max node 8.9

### Problème lors du build

Si vous avez un problème regardez si vous avez bien vos variable d'environement a jour

```bash
$ echo $ANDROID_HOME
$ echo $PATH
$ echo $JAVA_HOME
$ export JAVA_HOME=CHEMIN DOSSIER JAVA ( ex : /usr/java )
$ export PATH=CHEMIN DOSSIER BIN JAVA ( ex : ${PATH}:/usr/java/bin )
$ export ANDROID_HOME= CHEMIN DOSSIER ANDROID SDK ( ex : /home/hugo/Android/Sdk )
$ export PATH=CHEMIN DOSSIER ANDROID SDK PLATFORM ET TOOLS ( ex : ${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools )
```

