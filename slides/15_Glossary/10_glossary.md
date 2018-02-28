# Glossary
--
| 
|--|--
| package.json | summary of the package, contains all metadata and scripts 
| scripts | custom scripts, to be run with `npm run myscript` 
| dependencies | dependencies required to run the application
| devDepedencies | dependencies required to develop the app (tools)
| peerDependencies | only used for libraries: dependencies the library is counting on you for to install

--
# FUC

## frequently used commands
--
| 
|--|--
| npm start | run the application, start the entry file OR custom script is defined in scripts 
| npm test | runs the test command in package.json or custom script in scripts
| npm run build | runs the custom defined script with name 'build'
--
| 
|--|--
| npm link | creates a symlink from a local package folder
| npm link myPackage | effectively links myPackage to the current package
--
| 
|--|--
| npm publish | publish the package to the current configured register (default npmjs.org)
| npm adduser | create a new account on the registry
| npm login | login with an existing user