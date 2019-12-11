(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(1),r=n(9),o=(n(0),n(290)),a={title:"Using EntityRepository instead of EntityManager",sidebar_label:"Entity Repository"},l=[{value:"Custom Repository",id:"custom-repository",children:[]},{value:"EntityRepository<T> API",id:"entityrepositoryt-api",children:[]}],b={rightToc:l},p="wrapper";function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"More convenient way of fetching entities from database is by using ",Object(o.b)("inlineCode",{parentName:"p"},"EntityRepository"),", that\ncarries the entity name so you do not have to pass it to every ",Object(o.b)("inlineCode",{parentName:"p"},"find")," and ",Object(o.b)("inlineCode",{parentName:"p"},"findOne")," calls:"),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const booksRepository = orm.em.getRepository(Book);\n\n// with sorting, limit and offset parameters, populating author references\nconst books = await booksRepository.find({ author: '...' }, ['author'], { title: QueryOrder.DESC }, 2, 1);\n\n// or with options object\nconst books = await booksRepository.find({ author: '...' }, { \n  populate: ['author'],\n  limit: 1,\n  offset: 2,\n  sort: { title: QueryOrder.DESC },\n});\n\nconsole.log(books); // Book[]\n")),Object(o.b)("h2",{id:"custom-repository"},"Custom Repository"),Object(o.b)("p",null,"To use custom repository, just extend ",Object(o.b)("inlineCode",{parentName:"p"},"EntityRepository<T>")," class:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"@Repository(Author)\nexport class CustomAuthorRepository extends EntityRepository<Author> {\n\n  // your custom methods...\n  public findAndUpdate(...) {\n    // ...\n  }\n\n}\n")),Object(o.b)("p",null,"You can also omit the ",Object(o.b)("inlineCode",{parentName:"p"},"@Repository")," decorator and register your repository in ",Object(o.b)("inlineCode",{parentName:"p"},"@Entity"),"\ndecorator instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity({ customRepository: () => CustomAuthorRepository })\nexport class Author extends IdEntity<Author> {\n  // ...\n}\n")),Object(o.b)("p",null,"Note that we need to pass that repository reference inside a callback so we will not run\ninto circular dependency issues when using entity references inside that repository."),Object(o.b)("p",null,"Now you can access your custom repository via ",Object(o.b)("inlineCode",{parentName:"p"},"em.getRepository()")," method."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also register custom base repository (for all entities where you do not specify\n",Object(o.b)("inlineCode",{parentName:"p"},"customRepository"),") globally, via ",Object(o.b)("inlineCode",{parentName:"p"},"MikroORM.init({ entityRepository: CustomBaseRepository })"),".")),Object(o.b)("p",null,"For more examples, take a look at\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"}),Object(o.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"}),Object(o.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."),Object(o.b)("h2",{id:"entityrepositoryt-api"},"EntityRepository\\<T",">"," API"),Object(o.b)("h4",{id:"findwhere-filterqueryt-options-findoptions-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"find(where: FilterQuery<T>, options?: FindOptions): Promise<T[]>")),Object(o.b)("p",null,"Returns array of entities found for given condition. You can specify ",Object(o.b)("inlineCode",{parentName:"p"},"FindOptions")," to request\npopulation of referenced entities or control the pagination:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"export interface FindOptions {\n  populate?: string[];\n  orderBy?: { [k: string]: QueryOrder };\n  limit?: number;\n  offset?: number;\n}\n")),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"find(where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(o.b)("p",null,"Same as previous ",Object(o.b)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",Object(o.b)("inlineCode",{parentName:"p"},"populate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"orderBy"),", ",Object(o.b)("inlineCode",{parentName:"p"},"limit"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findandcountwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"findAndCount(where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(o.b)("p",null,"Combination of ",Object(o.b)("inlineCode",{parentName:"p"},"find")," and ",Object(o.b)("inlineCode",{parentName:"p"},"count")," methods. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findalloptions-findoptions-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"findAll(options?: FindOptions): Promise<T[]>")),Object(o.b)("p",null,"Returns all entities for given type. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findallpopulate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"findAll(populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(o.b)("p",null,"Same as previous ",Object(o.b)("inlineCode",{parentName:"p"},"findAll")," method, just with dedicated parameters for ",Object(o.b)("inlineCode",{parentName:"p"},"populate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"orderBy"),", ",Object(o.b)("inlineCode",{parentName:"p"},"limit"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findonewhere-filterqueryt--string-populate-string-promiset--null"},Object(o.b)("inlineCode",{parentName:"h4"},"findOne(where: FilterQuery<T> | string, populate?: string[]): Promise<T | null>")),Object(o.b)("p",null,"Finds an entity by given ",Object(o.b)("inlineCode",{parentName:"p"},"where")," condition. You can use primary key as ",Object(o.b)("inlineCode",{parentName:"p"},"where")," value, then\nif the entity is already managed, no database call will be made. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findoneorfailwhere-filterqueryt--string-populate-string-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"findOneOrFail(where: FilterQuery<T> | string, populate?: string[]): Promise<T>")),Object(o.b)("p",null,"Just like ",Object(o.b)("inlineCode",{parentName:"p"},"findOne"),", but throws when entity not found, so it always resolves to given entity.\nYou can customize the error either globally via ",Object(o.b)("inlineCode",{parentName:"p"},"findOneOrFailHandler")," option, or locally via\n",Object(o.b)("inlineCode",{parentName:"p"},"failHandler")," option in ",Object(o.b)("inlineCode",{parentName:"p"},"findOneOrFail")," call."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"mergedata-entitydatat-t"},Object(o.b)("inlineCode",{parentName:"h4"},"merge(data: EntityData<T>): T")),Object(o.b)("p",null,"Adds given entity to current Identity Map. After merging, entity becomes managed.\nThis is useful when you want to work with cached entities. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"getreferenceid-string-t"},Object(o.b)("inlineCode",{parentName:"h4"},"getReference(id: string): T")),Object(o.b)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually\nloading it, if the entity is not yet loaded."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"countwhere-filterqueryt-promisenumber"},Object(o.b)("inlineCode",{parentName:"h4"},"count(where?: FilterQuery<T>): Promise<number>")),Object(o.b)("p",null,"Gets count of entities matching the ",Object(o.b)("inlineCode",{parentName:"p"},"where")," condition. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"persistentity-anyentity--anyentity-flush-boolean-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"persist(entity: AnyEntity | AnyEntity[], flush?: boolean): Promise<void>")),Object(o.b)("p",null,"Tells the EntityManager to make an instance managed and persistent. The entity will be\nentered into the database at or before transaction commit or as a result of the flush\noperation. You can control immediate flushing via ",Object(o.b)("inlineCode",{parentName:"p"},"flush")," parameter and via ",Object(o.b)("inlineCode",{parentName:"p"},"autoFlush"),"\nconfiguration option. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"persistandflushentity-anyentity--anyentity-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: AnyEntity | AnyEntity[]): Promise<void>")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"persist")," & ",Object(o.b)("inlineCode",{parentName:"p"},"flush"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"persistlaterentity-anyentity--anyentity-void"},Object(o.b)("inlineCode",{parentName:"h4"},"persistLater(entity: AnyEntity | AnyEntity[]): void")),Object(o.b)("p",null,"Shortcut for just ",Object(o.b)("inlineCode",{parentName:"p"},"persist"),", without flushing. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"flush-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),Object(o.b)("p",null,"Flushes all changes to objects that have been queued up to now to the database."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"removewhere-anyentity--filterqueryt-flush-boolean-promisenumber"},Object(o.b)("inlineCode",{parentName:"h4"},"remove(where: AnyEntity | FilterQuery<T>, flush?: boolean): Promise<number>")),Object(o.b)("p",null,"When provided entity instance as ",Object(o.b)("inlineCode",{parentName:"p"},"where")," value, then it calls ",Object(o.b)("inlineCode",{parentName:"p"},"removeEntity(entity, flush)"),",\notherwise it fires delete query with given ",Object(o.b)("inlineCode",{parentName:"p"},"where")," condition. "),Object(o.b)("p",null,"This method fires ",Object(o.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks only if you provide entity instance.  "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"removeandflushentity-anyentity-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: AnyEntity): Promise<void>")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"removeEntity")," & ",Object(o.b)("inlineCode",{parentName:"p"},"flush"),"."),Object(o.b)("p",null,"This method fires ",Object(o.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"removelaterentity-anyentity-void"},Object(o.b)("inlineCode",{parentName:"h4"},"removeLater(entity: AnyEntity): void")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"removeEntity")," without flushing. "),Object(o.b)("p",null,"This method fires ",Object(o.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"canpopulateproperty-string-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"canPopulate(property: string): boolean")),Object(o.b)("p",null,"Returns whether given entity has given property which can be populated (is reference or\ncollection)."),Object(o.b)("hr",null))}s.isMDXComponent=!0},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));var i=n(0),r=n.n(i),o=r.a.createContext({}),a=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=a(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,b=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["components","mdxType","originalType","parentName"]),s=a(n),c=i,d=s[l+"."+c]||s[c]||p[c]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},b,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},b))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[b]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);