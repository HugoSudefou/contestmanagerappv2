This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

###Problème lors du build
```bash
Si vous avez un problème regardez si vous avez bien vos variable d'environement a jour

echo $ANDROID_HOME
echo $PATHJAVA_HOME
echo $JAVA_HOME
export JAVA_HOME=CHEMIN DOSSIER JAVA ( ex : /usr/java )
export PATH=CHEMIN DOSSIER BIN JAVA ( ex : ${PATH}:/usr/java/bin )
export ANDROID_HOME= CHEMIN DOSSIER ANDROID SDK ( ex : /home/hugo/Android/Sdk )
export PATH=CHEMIN DOSSIER ANDROID SDK PLATFORM ET TOOLS ( ex : ${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools )
```

