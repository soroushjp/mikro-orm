(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(290)),i={title:"Installation & Usage"},s=[{value:"Entity Discovery in TypeScript",id:"entity-discovery-in-typescript",children:[]},{value:"Setting up the Commandline Tool",id:"setting-up-the-commandline-tool",children:[]},{value:"Request Context",id:"request-context",children:[]}],c={rightToc:s},l="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"First install the module via ",Object(r.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," and do not forget to install the database driver as well:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ yarn add mikro-orm mongodb # for mongo\n$ yarn add mikro-orm mysql2  # for mysql/mariadb\n$ yarn add mikro-orm mariadb # for mysql/mariadb\n$ yarn add mikro-orm pg      # for postgresql\n$ yarn add mikro-orm sqlite3 # for sqlite\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npm i -s mikro-orm mongodb # for mongo\n$ npm i -s mikro-orm mysql2  # for mysql/mariadb\n$ npm i -s mikro-orm mariadb # for mysql/mariadb\n$ npm i -s mikro-orm pg      # for postgresql\n$ npm i -s mikro-orm sqlite3 # for sqlite\n")),Object(r.b)("p",null,"Next you will need to enable support for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/decorators.html"}),"decorators"),"\nin ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," via:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"experimentalDecorators": true\n')),Object(r.b)("p",null,"Then call ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  clientUrl: '...', // defaults to 'mongodb://localhost:27017' for mongodb driver\n  baseDir: __dirname, // defaults to `process.cwd()`\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Read more about all the possible configuration options in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration"}),"Advanced Configuration")," section.")),Object(r.b)("p",null,"You can also provide paths where you store your entities via ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirs")," array. Internally\nit uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sindresorhus/globby"}),Object(r.b)("inlineCode",{parentName:"a"},"globby"))," so you can use\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sindresorhus/globby#globbing-patterns"}),"globbing patterns"),". "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/app/**/entities'],\n  // ...\n});\n")),Object(r.b)("p",null,"You should provide list of directories, not paths to entities directly. If you want to do that\ninstead, you should use ",Object(r.b)("inlineCode",{parentName:"p"},"entities")," array and use ",Object(r.b)("inlineCode",{parentName:"p"},"globby")," manually:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import globby from 'globby';\n\nconst orm = await MikroORM.init({\n  entities: await globby('./dist/app/**/entities/*.js').map(require),\n  // ...\n});\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can pass additional options to the underlying driver (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"mysql2"),") via ",Object(r.b)("inlineCode",{parentName:"p"},"driverOptions"),".\nThe object will be deeply merged, overriding all internally used options.")),Object(r.b)("h2",{id:"entity-discovery-in-typescript"},"Entity Discovery in TypeScript"),Object(r.b)("p",null,"Internally, ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM")," uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/metadata-providers"}),Object(r.b)("inlineCode",{parentName:"a"},"ts-morph")," to perform analysis")," of source files\nof entities to sniff types of all properties. This process can be slow if your project contains lots\nof files. To speed up the discovery process a bit, you can provide more accurate paths where your\nentity source files are: "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/entities'], // path to your JS entities (dist), relative to `baseDir`\n  entitiesDirsTs: ['./src/entities'], // path to your TS entities (source), relative to `baseDir`\n  // ...\n});\n")),Object(r.b)("p",null,"You can also use different ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/metadata-providers"}),"metadata provider")," or even write custom one:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ReflectMetadataProvider")," that uses ",Object(r.b)("inlineCode",{parentName:"li"},"reflect-metadata")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"ts-morph")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JavaScriptMetadataProvider")," that allows you to manually provide the entity schema (mainly for Vanilla JS)")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  metadataProvider: ReflectMetadataProvider,\n  // ...\n});\n")),Object(r.b)("h2",{id:"setting-up-the-commandline-tool"},"Setting up the Commandline Tool"),Object(r.b)("p",null,"MikroORM ships with a number of command line tools that are very helpful during development,\nlike Schema Generator and Entity Generator. You can call this command from the NPM binary\ndirectory or use ",Object(r.b)("inlineCode",{parentName:"p"},"npx"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ node node_modules/.bin/mikro-orm\n$ npx mikro-orm\n\n# or when installed globally\n$ mikro-orm\n")),Object(r.b)("p",null,"For CLI to be able to access your database, you will need to create ",Object(r.b)("inlineCode",{parentName:"p"},"mikro-orm.config.js")," file that\nexports your ORM configuration. TypeScript is also supported, just enable ",Object(r.b)("inlineCode",{parentName:"p"},"useTsNode")," flag in your\n",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file. There you can also set up array of possible paths to ",Object(r.b)("inlineCode",{parentName:"p"},"mikro-orm.config")," file,\nas well as use different file name:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"./package.json"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "your-app",\n  "dependencies": { ... },\n  "mikro-orm": {\n    "useTsNode": true,\n    "configPaths": [\n      "./src/mikro-orm.config.ts",\n      "./dist/mikro-orm.config.js"\n    ]\n  }\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"./src/mikro-orm.config.ts"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// usually you will reexport existing configuration from somewhere else\nimport { CONFIG } from './config';\nexport = CONFIG.orm;\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can also use different names for this file, simply rename it in the ",Object(r.b)("inlineCode",{parentName:"p"},"configPaths")," array\nyour in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),". You can also use ",Object(r.b)("inlineCode",{parentName:"p"},"MIKRO_ORM_CLI")," environment variable with the path\nto override ",Object(r.b)("inlineCode",{parentName:"p"},"configPaths")," value.")),Object(r.b)("p",null,"Now you should be able to start using the CLI. All available commands are listed in the CLI help:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"Usage: mikro-orm <command> [options]\n\nCommands:\n  mikro-orm cache:clear        Clear metadata cache\n  mikro-orm generate-entities  Generate entities based on current database schema\n  mikro-orm schema:create      Create database schema based on current metadata\n  mikro-orm schema:drop        Drop database schema based on current metadata\n  mikro-orm schema:update      Update database schema based on current metadata\n\nOptions:\n  -v, --version  Show version number                                   [boolean]\n  -h, --help     Show help                                             [boolean]\n\nExamples:\n  mikro-orm schema:update --run  Runs schema synchronization\n")),Object(r.b)("h2",{id:"request-context"},"Request Context"),Object(r.b)("p",null,"Then you will need to fork Entity Manager for each request so their identity maps will not\ncollide. To do so, use the ",Object(r.b)("inlineCode",{parentName:"p"},"RequestContext")," helper:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const app = express();\n\napp.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),Object(r.b)("p",null,"More info about ",Object(r.b)("inlineCode",{parentName:"p"},"RequestContext")," is described ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/identity-map#request-context"}),"here"),"."),Object(r.b)("p",null,"Now you can start ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/defining-entities"}),"defining your entities")," (in one of the ",Object(r.b)("inlineCode",{parentName:"p"},"entitiesDirs")," folders)."))}p.isMDXComponent=!0},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),b=a,m=p[s+"."+b]||p[b]||l[b]||r;return n?o.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(m,Object.assign({},{ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);