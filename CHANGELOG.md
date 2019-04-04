# 2019-04-03

- regenerate `yarn.lock` file
- upgrade dependency versions
  ```
  app-root-path           ^2.1.0  →    ^2.2.1
  @types/react           ^16.8.8  →  ^16.8.12
  @types/react-dom       ^16.8.2  →   ^16.8.3
  electron                ^4.1.0  →    ^4.1.3
  jest                   ^24.5.0  →   ^24.7.0
  next                    ^8.0.3  →    ^8.0.4
  react                  ^16.8.4  →   ^16.8.6
  react-dom              ^16.8.4  →   ^16.8.6
  react-test-renderer    ^16.8.4  →   ^16.8.6
  tslint                 ^5.14.0  →   ^5.15.0
  tslint-react            ^3.6.0  →    ^4.0.0
  typescript           ^3.3.3333  →    ^3.4.1
  ```

# 2019-03-15

## Upgrade versions:

```
@types/jest                        ^23.3.13  ->   ^24.0.11
next                                 ^7.0.2  ->     ^8.0.3
react-icons                          ^3.3.0  ->     ^3.5.0
@types/react                       ^16.7.22  ->    ^16.8.8
@types/react-dom                   ^16.0.11  ->    ^16.8.2
@types/react-test-renderer          ^16.0.3  ->    ^16.8.1
electron                             ^4.0.3  ->     ^4.1.0
jest                                ^24.0.0  ->    ^24.5.0
prettier                            ^1.16.3  ->    ^1.16.4
react                       ^16.8.0-alpha.1  ->    ^16.8.4
react-dom                   ^16.8.0-alpha.1  ->    ^16.8.4
react-test-renderer                 ^16.7.0  ->    ^16.8.4
ts-node                              ^8.0.2  ->     ^8.0.3
tslint                              ^5.12.1  ->    ^5.14.0
tslint-config-prettier              ^1.17.0  ->    ^1.18.0
typescript                           ^3.3.1  ->  ^3.3.3333
```

# 2019-02-01

+ fix syntax error due ts-node not recognizing ES modules
+ remove messed up comments from `tslint.json`
+ complete info about new yarn scripts and tools in the readme
+ complete info about electron install from cache for linux in the readme

# 2019-01-31

+ add jest v24 support.
+ modify file structure to get ride of next pages stuff.
+ add [react-test-renderer] to enable testing of react components.
+ update all dependency versions.
+ add package scripts: `checkTslint`, `lint`, `fix`.
+ add a test example
+ add custom [code-runner] script to run current file with ts-node/jest in visual studio code
+ add [code-runner] and prettier config in the project settings
+ add CHANGELOG file

[react-test-renderer]:https://reactjs.org/docs/test-renderer.html
[code-runner]:https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
