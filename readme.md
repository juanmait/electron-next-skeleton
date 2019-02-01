# Electron + Next.js + Typescript + Prettier/TSLint + Jest

**Original**: You can read more about this concept [here](https://leo.im/2017/electron-next).

Forked from the official [electron-next-skeleton][original]. This is an up to
date *boilerplate/example/template* to develop [Electron] apps rendered with
[ReactJS] written in [Typescript] by using the awesome dev framework [NextJS].
It also integrates great tools like [tslint], [prettier] and [jest].

## Get Started

```bash
yarn install
yarn start
```

--------------------------------------------------------------------------------

<details><summary>Electron takes forever to install?? 😒</summary>
<p>

+ **On Windows**: go to the [electron's releases page][electron-releases] and
download the version listed on the `package.json` file (something like:
`electron-v4.0.3-win32-x64.zip`). Also download the `SHASUMS256.txt` for that
version and rename it like: `SHASUMS256.txt-4.0.3`. Then copy those files into
`$LOCALAPPDATA/electron/Cache` and run `yarn install` again. Now the
`electron-download` process should install electron from there instead of github.
+ **On Linux**: Should be the same, only changing the electron's cache
directory, and downloading the proper build for you linux distribution from the
releases page) The cache dir on linux should be at `$HOME/.electron` or
`$HOME/.cache/electron`.

</p>
</details>

<details><summary>Recommended vscode extensions/plugins</summary>
<p>

This project works better with the following vscode extension:

+ **On Windows**: go to the [electron's releases page][electron-releases] and
download the version listed on the `package.json` file (something like:
`electron-v4.0.3-win32-x64.zip`). Also download the `SHASUMS256.txt` for that
version and rename it like: `SHASUMS256.txt-4.0.3`. Then copy those files into
`$LOCALAPPDATA/electron/Cache` and run `yarn install` again. Now the
`electron-download` process should install electron from there instead of github.
+ **On Linux**: Should be the same, only changing the electron's cache
directory, and downloading the proper build for you linux distribution from the
releases page) The cache dir in linux should be at `$HOME/.electron` or
`$HOME/.cache/electron`.

</p>
</details>


--------------------------------------------------------------------------------

## Other package scripts

```bash
$ yarn test # run all your test with jest
$ yarn checkTslint # check for conflicts between tslint and prettier config
$ yarn lint # run tslint on all the src code
$ yarn fix # auto fix all your files using prettier-tslint
```


<!-- tools -->
[original]:https://github.com/leo/electron-next-skeleton
[typescript]:https://www.typescriptlang.org/
[reactjs]:https://reactjs.org/
[electron]:https://electronjs.org/
[tslint]:https://palantir.github.io/tslint/
[prettier]:https://prettier.io/
[nextjs]:https://nextjs.org/
[electron-releases]:https://github.com/electron/electron/releases
[ts-node]:https://github.com/TypeStrong/ts-node
[jest]:https://jestjs.io/

<!-- vscode extensions -->
[code-runner]:https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
[prettier]:https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-typescript-tslint-plugin]:https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
[jest-snapshot-language-support]:https://marketplace.visualstudio.com/items?itemName=tlent.jest-snapshot-language-support
