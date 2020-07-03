# GitHub Action ENV variable issue investigation

This is a demo repository for the following Support ticket: https://github.community/t/environment-variables-not-working-with-js-project/17955

___

## Steps to reproduce

1. Clone this repo to your local machine.
2. Create an `.env` file in the project root as follows:
```bash
EXAMPLE_A=hello
EXAMPLE_B=world
EXAMPLE_C=!
```
3. `npm install`
4. `npm run build`
5. Inspect the `dist/main.js` file, you should see a `console.log("hello world!")` at the end of the file.
6. Go to the [releases page](https://github.com/breadadams/gh-action-env-trial/releases) and check the `main.js` files in the release assets, you will see that the env variables aren't extracted correctly.


## Screenshots

`dist/main.js` from local build:

![image](https://user-images.githubusercontent.com/5795227/86467209-4a8ea480-bd35-11ea-994e-2ceef7d23e70.png)

`dist/main.js` from GitHub action build:

![image](https://user-images.githubusercontent.com/5795227/86467128-216e1400-bd35-11ea-9dcb-602788bda976.png)