## Istallation guide

### bun
The default way of installing bun on windows is by using\
`powershell -c "irm bun.sh/install.ps1 | iex"`\
however this is currenytly blocked by our IT deptartment so we have to install it via npm\
`npm install -g bun`

⚠️ this command will install bun globally ⚠️

verify if bun is installed correclty by running\
`bun -v`\
as of writing this the version I'm using is `1.1.34`

### Elysia
In order to get the server started simply\
`bun run dev`

## Stress Testing
### Artillery
in order to install artillery use:\
`bun install artillery@latest`

after succesful installation you can run\
`npx artillery dino`
to verify 


### Autocannon

you can run autocannon against any endpoint by simply executing\
`npx autocannon http://localhost:3000/curricula/c22fc3c4-7e2b-43af-bf1d-c641b7218ffa`

