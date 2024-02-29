
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model audit_requests
 * 
 */
export type audit_requests = $Result.DefaultSelection<Prisma.$audit_requestsPayload>
/**
 * Model bounties
 * 
 */
export type bounties = $Result.DefaultSelection<Prisma.$bountiesPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model listedcontracts
 * 
 */
export type listedcontracts = $Result.DefaultSelection<Prisma.$listedcontractsPayload>
/**
 * Model ownedcontracts
 * 
 */
export type ownedcontracts = $Result.DefaultSelection<Prisma.$ownedcontractsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audit_requests
 * const audit_requests = await prisma.audit_requests.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audit_requests
   * const audit_requests = await prisma.audit_requests.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.audit_requests`: Exposes CRUD operations for the **audit_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_requests
    * const audit_requests = await prisma.audit_requests.findMany()
    * ```
    */
  get audit_requests(): Prisma.audit_requestsDelegate<ExtArgs>;

  /**
   * `prisma.bounties`: Exposes CRUD operations for the **bounties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bounties
    * const bounties = await prisma.bounties.findMany()
    * ```
    */
  get bounties(): Prisma.bountiesDelegate<ExtArgs>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.listedcontracts`: Exposes CRUD operations for the **listedcontracts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listedcontracts
    * const listedcontracts = await prisma.listedcontracts.findMany()
    * ```
    */
  get listedcontracts(): Prisma.listedcontractsDelegate<ExtArgs>;

  /**
   * `prisma.ownedcontracts`: Exposes CRUD operations for the **ownedcontracts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ownedcontracts
    * const ownedcontracts = await prisma.ownedcontracts.findMany()
    * ```
    */
  get ownedcontracts(): Prisma.ownedcontractsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    audit_requests: 'audit_requests',
    bounties: 'bounties',
    Contract: 'Contract',
    users: 'users',
    listedcontracts: 'listedcontracts',
    ownedcontracts: 'ownedcontracts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'audit_requests' | 'bounties' | 'contract' | 'users' | 'listedcontracts' | 'ownedcontracts'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      audit_requests: {
        payload: Prisma.$audit_requestsPayload<ExtArgs>
        fields: Prisma.audit_requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_requestsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$audit_requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_requestsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$audit_requestsPayload>
          }
          findFirst: {
            args: Prisma.audit_requestsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$audit_requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_requestsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$audit_requestsPayload>
          }
          findMany: {
            args: Prisma.audit_requestsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$audit_requestsPayload>[]
          }
          create: {
            args: Prisma.audit_requestsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$audit_requestsPayload>
          }
          createMany: {
            args: Prisma.audit_requestsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.audit_requestsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$audit_requestsPayload>
          }
          update: {
            args: Prisma.audit_requestsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$audit_requestsPayload>
          }
          deleteMany: {
            args: Prisma.audit_requestsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.audit_requestsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.audit_requestsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$audit_requestsPayload>
          }
          aggregate: {
            args: Prisma.Audit_requestsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAudit_requests>
          }
          groupBy: {
            args: Prisma.audit_requestsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Audit_requestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_requestsCountArgs<ExtArgs>,
            result: $Utils.Optional<Audit_requestsCountAggregateOutputType> | number
          }
        }
      }
      bounties: {
        payload: Prisma.$bountiesPayload<ExtArgs>
        fields: Prisma.bountiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bountiesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bountiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bountiesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bountiesPayload>
          }
          findFirst: {
            args: Prisma.bountiesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bountiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bountiesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bountiesPayload>
          }
          findMany: {
            args: Prisma.bountiesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bountiesPayload>[]
          }
          create: {
            args: Prisma.bountiesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bountiesPayload>
          }
          createMany: {
            args: Prisma.bountiesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.bountiesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bountiesPayload>
          }
          update: {
            args: Prisma.bountiesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bountiesPayload>
          }
          deleteMany: {
            args: Prisma.bountiesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.bountiesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.bountiesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bountiesPayload>
          }
          aggregate: {
            args: Prisma.BountiesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBounties>
          }
          groupBy: {
            args: Prisma.bountiesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BountiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.bountiesCountArgs<ExtArgs>,
            result: $Utils.Optional<BountiesCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>,
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      listedcontracts: {
        payload: Prisma.$listedcontractsPayload<ExtArgs>
        fields: Prisma.listedcontractsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.listedcontractsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$listedcontractsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.listedcontractsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$listedcontractsPayload>
          }
          findFirst: {
            args: Prisma.listedcontractsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$listedcontractsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.listedcontractsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$listedcontractsPayload>
          }
          findMany: {
            args: Prisma.listedcontractsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$listedcontractsPayload>[]
          }
          create: {
            args: Prisma.listedcontractsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$listedcontractsPayload>
          }
          createMany: {
            args: Prisma.listedcontractsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.listedcontractsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$listedcontractsPayload>
          }
          update: {
            args: Prisma.listedcontractsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$listedcontractsPayload>
          }
          deleteMany: {
            args: Prisma.listedcontractsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.listedcontractsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.listedcontractsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$listedcontractsPayload>
          }
          aggregate: {
            args: Prisma.ListedcontractsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateListedcontracts>
          }
          groupBy: {
            args: Prisma.listedcontractsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ListedcontractsGroupByOutputType>[]
          }
          count: {
            args: Prisma.listedcontractsCountArgs<ExtArgs>,
            result: $Utils.Optional<ListedcontractsCountAggregateOutputType> | number
          }
        }
      }
      ownedcontracts: {
        payload: Prisma.$ownedcontractsPayload<ExtArgs>
        fields: Prisma.ownedcontractsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ownedcontractsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ownedcontractsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ownedcontractsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ownedcontractsPayload>
          }
          findFirst: {
            args: Prisma.ownedcontractsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ownedcontractsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ownedcontractsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ownedcontractsPayload>
          }
          findMany: {
            args: Prisma.ownedcontractsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ownedcontractsPayload>[]
          }
          create: {
            args: Prisma.ownedcontractsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ownedcontractsPayload>
          }
          createMany: {
            args: Prisma.ownedcontractsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ownedcontractsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ownedcontractsPayload>
          }
          update: {
            args: Prisma.ownedcontractsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ownedcontractsPayload>
          }
          deleteMany: {
            args: Prisma.ownedcontractsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ownedcontractsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ownedcontractsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ownedcontractsPayload>
          }
          aggregate: {
            args: Prisma.OwnedcontractsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOwnedcontracts>
          }
          groupBy: {
            args: Prisma.ownedcontractsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OwnedcontractsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ownedcontractsCountArgs<ExtArgs>,
            result: $Utils.Optional<OwnedcontractsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    listedcontracts: number
    ownedcontracts: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listedcontracts?: boolean | UsersCountOutputTypeCountListedcontractsArgs
    ownedcontracts?: boolean | UsersCountOutputTypeCountOwnedcontractsArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountListedcontractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listedcontractsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOwnedcontractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownedcontractsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model audit_requests
   */

  export type AggregateAudit_requests = {
    _count: Audit_requestsCountAggregateOutputType | null
    _avg: Audit_requestsAvgAggregateOutputType | null
    _sum: Audit_requestsSumAggregateOutputType | null
    _min: Audit_requestsMinAggregateOutputType | null
    _max: Audit_requestsMaxAggregateOutputType | null
  }

  export type Audit_requestsAvgAggregateOutputType = {
    request_id: number | null
  }

  export type Audit_requestsSumAggregateOutputType = {
    request_id: number | null
  }

  export type Audit_requestsMinAggregateOutputType = {
    request_id: number | null
    contract: string | null
    status: string | null
    status_log: string | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Audit_requestsMaxAggregateOutputType = {
    request_id: number | null
    contract: string | null
    status: string | null
    status_log: string | null
    created_on: Date | null
    updated_on: Date | null
  }

  export type Audit_requestsCountAggregateOutputType = {
    request_id: number
    contract: number
    status: number
    status_log: number
    created_on: number
    updated_on: number
    _all: number
  }


  export type Audit_requestsAvgAggregateInputType = {
    request_id?: true
  }

  export type Audit_requestsSumAggregateInputType = {
    request_id?: true
  }

  export type Audit_requestsMinAggregateInputType = {
    request_id?: true
    contract?: true
    status?: true
    status_log?: true
    created_on?: true
    updated_on?: true
  }

  export type Audit_requestsMaxAggregateInputType = {
    request_id?: true
    contract?: true
    status?: true
    status_log?: true
    created_on?: true
    updated_on?: true
  }

  export type Audit_requestsCountAggregateInputType = {
    request_id?: true
    contract?: true
    status?: true
    status_log?: true
    created_on?: true
    updated_on?: true
    _all?: true
  }

  export type Audit_requestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_requests to aggregate.
     */
    where?: audit_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_requests to fetch.
     */
    orderBy?: audit_requestsOrderByWithRelationInput | audit_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_requests
    **/
    _count?: true | Audit_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Audit_requestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Audit_requestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_requestsMaxAggregateInputType
  }

  export type GetAudit_requestsAggregateType<T extends Audit_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_requests[P]>
      : GetScalarType<T[P], AggregateAudit_requests[P]>
  }




  export type audit_requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_requestsWhereInput
    orderBy?: audit_requestsOrderByWithAggregationInput | audit_requestsOrderByWithAggregationInput[]
    by: Audit_requestsScalarFieldEnum[] | Audit_requestsScalarFieldEnum
    having?: audit_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_requestsCountAggregateInputType | true
    _avg?: Audit_requestsAvgAggregateInputType
    _sum?: Audit_requestsSumAggregateInputType
    _min?: Audit_requestsMinAggregateInputType
    _max?: Audit_requestsMaxAggregateInputType
  }

  export type Audit_requestsGroupByOutputType = {
    request_id: number
    contract: string
    status: string
    status_log: string | null
    created_on: Date
    updated_on: Date
    _count: Audit_requestsCountAggregateOutputType | null
    _avg: Audit_requestsAvgAggregateOutputType | null
    _sum: Audit_requestsSumAggregateOutputType | null
    _min: Audit_requestsMinAggregateOutputType | null
    _max: Audit_requestsMaxAggregateOutputType | null
  }

  type GetAudit_requestsGroupByPayload<T extends audit_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_requestsGroupByOutputType[P]>
        }
      >
    >


  export type audit_requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    request_id?: boolean
    contract?: boolean
    status?: boolean
    status_log?: boolean
    created_on?: boolean
    updated_on?: boolean
  }, ExtArgs["result"]["audit_requests"]>

  export type audit_requestsSelectScalar = {
    request_id?: boolean
    contract?: boolean
    status?: boolean
    status_log?: boolean
    created_on?: boolean
    updated_on?: boolean
  }


  export type $audit_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_requests"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      request_id: number
      contract: string
      status: string
      status_log: string | null
      created_on: Date
      updated_on: Date
    }, ExtArgs["result"]["audit_requests"]>
    composites: {}
  }


  type audit_requestsGetPayload<S extends boolean | null | undefined | audit_requestsDefaultArgs> = $Result.GetResult<Prisma.$audit_requestsPayload, S>

  type audit_requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<audit_requestsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Audit_requestsCountAggregateInputType | true
    }

  export interface audit_requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_requests'], meta: { name: 'audit_requests' } }
    /**
     * Find zero or one Audit_requests that matches the filter.
     * @param {audit_requestsFindUniqueArgs} args - Arguments to find a Audit_requests
     * @example
     * // Get one Audit_requests
     * const audit_requests = await prisma.audit_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends audit_requestsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, audit_requestsFindUniqueArgs<ExtArgs>>
    ): Prisma__audit_requestsClient<$Result.GetResult<Prisma.$audit_requestsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Audit_requests that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {audit_requestsFindUniqueOrThrowArgs} args - Arguments to find a Audit_requests
     * @example
     * // Get one Audit_requests
     * const audit_requests = await prisma.audit_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends audit_requestsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_requestsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__audit_requestsClient<$Result.GetResult<Prisma.$audit_requestsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Audit_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_requestsFindFirstArgs} args - Arguments to find a Audit_requests
     * @example
     * // Get one Audit_requests
     * const audit_requests = await prisma.audit_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends audit_requestsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_requestsFindFirstArgs<ExtArgs>>
    ): Prisma__audit_requestsClient<$Result.GetResult<Prisma.$audit_requestsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Audit_requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_requestsFindFirstOrThrowArgs} args - Arguments to find a Audit_requests
     * @example
     * // Get one Audit_requests
     * const audit_requests = await prisma.audit_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends audit_requestsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_requestsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__audit_requestsClient<$Result.GetResult<Prisma.$audit_requestsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Audit_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_requestsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_requests
     * const audit_requests = await prisma.audit_requests.findMany()
     * 
     * // Get first 10 Audit_requests
     * const audit_requests = await prisma.audit_requests.findMany({ take: 10 })
     * 
     * // Only select the `request_id`
     * const audit_requestsWithRequest_idOnly = await prisma.audit_requests.findMany({ select: { request_id: true } })
     * 
    **/
    findMany<T extends audit_requestsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_requestsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_requestsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Audit_requests.
     * @param {audit_requestsCreateArgs} args - Arguments to create a Audit_requests.
     * @example
     * // Create one Audit_requests
     * const Audit_requests = await prisma.audit_requests.create({
     *   data: {
     *     // ... data to create a Audit_requests
     *   }
     * })
     * 
    **/
    create<T extends audit_requestsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_requestsCreateArgs<ExtArgs>>
    ): Prisma__audit_requestsClient<$Result.GetResult<Prisma.$audit_requestsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Audit_requests.
     *     @param {audit_requestsCreateManyArgs} args - Arguments to create many Audit_requests.
     *     @example
     *     // Create many Audit_requests
     *     const audit_requests = await prisma.audit_requests.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends audit_requestsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_requestsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Audit_requests.
     * @param {audit_requestsDeleteArgs} args - Arguments to delete one Audit_requests.
     * @example
     * // Delete one Audit_requests
     * const Audit_requests = await prisma.audit_requests.delete({
     *   where: {
     *     // ... filter to delete one Audit_requests
     *   }
     * })
     * 
    **/
    delete<T extends audit_requestsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, audit_requestsDeleteArgs<ExtArgs>>
    ): Prisma__audit_requestsClient<$Result.GetResult<Prisma.$audit_requestsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Audit_requests.
     * @param {audit_requestsUpdateArgs} args - Arguments to update one Audit_requests.
     * @example
     * // Update one Audit_requests
     * const audit_requests = await prisma.audit_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends audit_requestsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_requestsUpdateArgs<ExtArgs>>
    ): Prisma__audit_requestsClient<$Result.GetResult<Prisma.$audit_requestsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Audit_requests.
     * @param {audit_requestsDeleteManyArgs} args - Arguments to filter Audit_requests to delete.
     * @example
     * // Delete a few Audit_requests
     * const { count } = await prisma.audit_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends audit_requestsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_requestsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_requests
     * const audit_requests = await prisma.audit_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends audit_requestsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, audit_requestsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Audit_requests.
     * @param {audit_requestsUpsertArgs} args - Arguments to update or create a Audit_requests.
     * @example
     * // Update or create a Audit_requests
     * const audit_requests = await prisma.audit_requests.upsert({
     *   create: {
     *     // ... data to create a Audit_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_requests we want to update
     *   }
     * })
    **/
    upsert<T extends audit_requestsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, audit_requestsUpsertArgs<ExtArgs>>
    ): Prisma__audit_requestsClient<$Result.GetResult<Prisma.$audit_requestsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Audit_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_requestsCountArgs} args - Arguments to filter Audit_requests to count.
     * @example
     * // Count the number of Audit_requests
     * const count = await prisma.audit_requests.count({
     *   where: {
     *     // ... the filter for the Audit_requests we want to count
     *   }
     * })
    **/
    count<T extends audit_requestsCountArgs>(
      args?: Subset<T, audit_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Audit_requestsAggregateArgs>(args: Subset<T, Audit_requestsAggregateArgs>): Prisma.PrismaPromise<GetAudit_requestsAggregateType<T>>

    /**
     * Group by Audit_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_requestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends audit_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_requestsGroupByArgs['orderBy'] }
        : { orderBy?: audit_requestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, audit_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_requests model
   */
  readonly fields: audit_requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the audit_requests model
   */ 
  interface audit_requestsFieldRefs {
    readonly request_id: FieldRef<"audit_requests", 'Int'>
    readonly contract: FieldRef<"audit_requests", 'String'>
    readonly status: FieldRef<"audit_requests", 'String'>
    readonly status_log: FieldRef<"audit_requests", 'String'>
    readonly created_on: FieldRef<"audit_requests", 'DateTime'>
    readonly updated_on: FieldRef<"audit_requests", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * audit_requests findUnique
   */
  export type audit_requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_requests
     */
    select?: audit_requestsSelect<ExtArgs> | null
    /**
     * Filter, which audit_requests to fetch.
     */
    where: audit_requestsWhereUniqueInput
  }


  /**
   * audit_requests findUniqueOrThrow
   */
  export type audit_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_requests
     */
    select?: audit_requestsSelect<ExtArgs> | null
    /**
     * Filter, which audit_requests to fetch.
     */
    where: audit_requestsWhereUniqueInput
  }


  /**
   * audit_requests findFirst
   */
  export type audit_requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_requests
     */
    select?: audit_requestsSelect<ExtArgs> | null
    /**
     * Filter, which audit_requests to fetch.
     */
    where?: audit_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_requests to fetch.
     */
    orderBy?: audit_requestsOrderByWithRelationInput | audit_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_requests.
     */
    cursor?: audit_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_requests.
     */
    distinct?: Audit_requestsScalarFieldEnum | Audit_requestsScalarFieldEnum[]
  }


  /**
   * audit_requests findFirstOrThrow
   */
  export type audit_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_requests
     */
    select?: audit_requestsSelect<ExtArgs> | null
    /**
     * Filter, which audit_requests to fetch.
     */
    where?: audit_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_requests to fetch.
     */
    orderBy?: audit_requestsOrderByWithRelationInput | audit_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_requests.
     */
    cursor?: audit_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_requests.
     */
    distinct?: Audit_requestsScalarFieldEnum | Audit_requestsScalarFieldEnum[]
  }


  /**
   * audit_requests findMany
   */
  export type audit_requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_requests
     */
    select?: audit_requestsSelect<ExtArgs> | null
    /**
     * Filter, which audit_requests to fetch.
     */
    where?: audit_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_requests to fetch.
     */
    orderBy?: audit_requestsOrderByWithRelationInput | audit_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_requests.
     */
    cursor?: audit_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_requests.
     */
    skip?: number
    distinct?: Audit_requestsScalarFieldEnum | Audit_requestsScalarFieldEnum[]
  }


  /**
   * audit_requests create
   */
  export type audit_requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_requests
     */
    select?: audit_requestsSelect<ExtArgs> | null
    /**
     * The data needed to create a audit_requests.
     */
    data: XOR<audit_requestsCreateInput, audit_requestsUncheckedCreateInput>
  }


  /**
   * audit_requests createMany
   */
  export type audit_requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_requests.
     */
    data: audit_requestsCreateManyInput | audit_requestsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * audit_requests update
   */
  export type audit_requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_requests
     */
    select?: audit_requestsSelect<ExtArgs> | null
    /**
     * The data needed to update a audit_requests.
     */
    data: XOR<audit_requestsUpdateInput, audit_requestsUncheckedUpdateInput>
    /**
     * Choose, which audit_requests to update.
     */
    where: audit_requestsWhereUniqueInput
  }


  /**
   * audit_requests updateMany
   */
  export type audit_requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_requests.
     */
    data: XOR<audit_requestsUpdateManyMutationInput, audit_requestsUncheckedUpdateManyInput>
    /**
     * Filter which audit_requests to update
     */
    where?: audit_requestsWhereInput
  }


  /**
   * audit_requests upsert
   */
  export type audit_requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_requests
     */
    select?: audit_requestsSelect<ExtArgs> | null
    /**
     * The filter to search for the audit_requests to update in case it exists.
     */
    where: audit_requestsWhereUniqueInput
    /**
     * In case the audit_requests found by the `where` argument doesn't exist, create a new audit_requests with this data.
     */
    create: XOR<audit_requestsCreateInput, audit_requestsUncheckedCreateInput>
    /**
     * In case the audit_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_requestsUpdateInput, audit_requestsUncheckedUpdateInput>
  }


  /**
   * audit_requests delete
   */
  export type audit_requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_requests
     */
    select?: audit_requestsSelect<ExtArgs> | null
    /**
     * Filter which audit_requests to delete.
     */
    where: audit_requestsWhereUniqueInput
  }


  /**
   * audit_requests deleteMany
   */
  export type audit_requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_requests to delete
     */
    where?: audit_requestsWhereInput
  }


  /**
   * audit_requests without action
   */
  export type audit_requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_requests
     */
    select?: audit_requestsSelect<ExtArgs> | null
  }



  /**
   * Model bounties
   */

  export type AggregateBounties = {
    _count: BountiesCountAggregateOutputType | null
    _avg: BountiesAvgAggregateOutputType | null
    _sum: BountiesSumAggregateOutputType | null
    _min: BountiesMinAggregateOutputType | null
    _max: BountiesMaxAggregateOutputType | null
  }

  export type BountiesAvgAggregateOutputType = {
    id: number | null
    max_reward: number | null
    vault_tvl: number | null
    med_response_time: number | null
    total_paid_amount: number | null
    rating: number | null
  }

  export type BountiesSumAggregateOutputType = {
    id: number | null
    max_reward: number | null
    vault_tvl: number | null
    med_response_time: number | null
    total_paid_amount: number | null
    rating: number | null
  }

  export type BountiesMinAggregateOutputType = {
    id: number | null
    bounty_id: string | null
    name: string | null
    link: string | null
    max_reward: number | null
    vault_tvl: number | null
    logo: string | null
    date: Date | null
    last_updated_date: Date | null
    response_time_metric_enabled: boolean | null
    med_response_time: number | null
    total_paid_metric_enabled: boolean | null
    total_paid_amount: number | null
    rating: number | null
  }

  export type BountiesMaxAggregateOutputType = {
    id: number | null
    bounty_id: string | null
    name: string | null
    link: string | null
    max_reward: number | null
    vault_tvl: number | null
    logo: string | null
    date: Date | null
    last_updated_date: Date | null
    response_time_metric_enabled: boolean | null
    med_response_time: number | null
    total_paid_metric_enabled: boolean | null
    total_paid_amount: number | null
    rating: number | null
  }

  export type BountiesCountAggregateOutputType = {
    id: number
    bounty_id: number
    name: number
    link: number
    max_reward: number
    vault_tvl: number
    logo: number
    date: number
    last_updated_date: number
    response_time_metric_enabled: number
    med_response_time: number
    total_paid_metric_enabled: number
    total_paid_amount: number
    rating: number
    firm: number
    category_list: number
    language_list: number
    source_code_list: number
    reference_list: number
    _all: number
  }


  export type BountiesAvgAggregateInputType = {
    id?: true
    max_reward?: true
    vault_tvl?: true
    med_response_time?: true
    total_paid_amount?: true
    rating?: true
  }

  export type BountiesSumAggregateInputType = {
    id?: true
    max_reward?: true
    vault_tvl?: true
    med_response_time?: true
    total_paid_amount?: true
    rating?: true
  }

  export type BountiesMinAggregateInputType = {
    id?: true
    bounty_id?: true
    name?: true
    link?: true
    max_reward?: true
    vault_tvl?: true
    logo?: true
    date?: true
    last_updated_date?: true
    response_time_metric_enabled?: true
    med_response_time?: true
    total_paid_metric_enabled?: true
    total_paid_amount?: true
    rating?: true
  }

  export type BountiesMaxAggregateInputType = {
    id?: true
    bounty_id?: true
    name?: true
    link?: true
    max_reward?: true
    vault_tvl?: true
    logo?: true
    date?: true
    last_updated_date?: true
    response_time_metric_enabled?: true
    med_response_time?: true
    total_paid_metric_enabled?: true
    total_paid_amount?: true
    rating?: true
  }

  export type BountiesCountAggregateInputType = {
    id?: true
    bounty_id?: true
    name?: true
    link?: true
    max_reward?: true
    vault_tvl?: true
    logo?: true
    date?: true
    last_updated_date?: true
    response_time_metric_enabled?: true
    med_response_time?: true
    total_paid_metric_enabled?: true
    total_paid_amount?: true
    rating?: true
    firm?: true
    category_list?: true
    language_list?: true
    source_code_list?: true
    reference_list?: true
    _all?: true
  }

  export type BountiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bounties to aggregate.
     */
    where?: bountiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bounties to fetch.
     */
    orderBy?: bountiesOrderByWithRelationInput | bountiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bountiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bounties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bounties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bounties
    **/
    _count?: true | BountiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BountiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BountiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BountiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BountiesMaxAggregateInputType
  }

  export type GetBountiesAggregateType<T extends BountiesAggregateArgs> = {
        [P in keyof T & keyof AggregateBounties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBounties[P]>
      : GetScalarType<T[P], AggregateBounties[P]>
  }




  export type bountiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bountiesWhereInput
    orderBy?: bountiesOrderByWithAggregationInput | bountiesOrderByWithAggregationInput[]
    by: BountiesScalarFieldEnum[] | BountiesScalarFieldEnum
    having?: bountiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BountiesCountAggregateInputType | true
    _avg?: BountiesAvgAggregateInputType
    _sum?: BountiesSumAggregateInputType
    _min?: BountiesMinAggregateInputType
    _max?: BountiesMaxAggregateInputType
  }

  export type BountiesGroupByOutputType = {
    id: number
    bounty_id: string
    name: string
    link: string | null
    max_reward: number | null
    vault_tvl: number | null
    logo: string | null
    date: Date | null
    last_updated_date: Date | null
    response_time_metric_enabled: boolean
    med_response_time: number | null
    total_paid_metric_enabled: boolean
    total_paid_amount: number | null
    rating: number | null
    firm: JsonValue
    category_list: string[]
    language_list: string[]
    source_code_list: string[]
    reference_list: string[]
    _count: BountiesCountAggregateOutputType | null
    _avg: BountiesAvgAggregateOutputType | null
    _sum: BountiesSumAggregateOutputType | null
    _min: BountiesMinAggregateOutputType | null
    _max: BountiesMaxAggregateOutputType | null
  }

  type GetBountiesGroupByPayload<T extends bountiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BountiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BountiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BountiesGroupByOutputType[P]>
            : GetScalarType<T[P], BountiesGroupByOutputType[P]>
        }
      >
    >


  export type bountiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bounty_id?: boolean
    name?: boolean
    link?: boolean
    max_reward?: boolean
    vault_tvl?: boolean
    logo?: boolean
    date?: boolean
    last_updated_date?: boolean
    response_time_metric_enabled?: boolean
    med_response_time?: boolean
    total_paid_metric_enabled?: boolean
    total_paid_amount?: boolean
    rating?: boolean
    firm?: boolean
    category_list?: boolean
    language_list?: boolean
    source_code_list?: boolean
    reference_list?: boolean
  }, ExtArgs["result"]["bounties"]>

  export type bountiesSelectScalar = {
    id?: boolean
    bounty_id?: boolean
    name?: boolean
    link?: boolean
    max_reward?: boolean
    vault_tvl?: boolean
    logo?: boolean
    date?: boolean
    last_updated_date?: boolean
    response_time_metric_enabled?: boolean
    med_response_time?: boolean
    total_paid_metric_enabled?: boolean
    total_paid_amount?: boolean
    rating?: boolean
    firm?: boolean
    category_list?: boolean
    language_list?: boolean
    source_code_list?: boolean
    reference_list?: boolean
  }


  export type $bountiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bounties"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bounty_id: string
      name: string
      link: string | null
      max_reward: number | null
      vault_tvl: number | null
      logo: string | null
      date: Date | null
      last_updated_date: Date | null
      response_time_metric_enabled: boolean
      med_response_time: number | null
      total_paid_metric_enabled: boolean
      total_paid_amount: number | null
      rating: number | null
      firm: Prisma.JsonValue
      category_list: string[]
      language_list: string[]
      source_code_list: string[]
      reference_list: string[]
    }, ExtArgs["result"]["bounties"]>
    composites: {}
  }


  type bountiesGetPayload<S extends boolean | null | undefined | bountiesDefaultArgs> = $Result.GetResult<Prisma.$bountiesPayload, S>

  type bountiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<bountiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BountiesCountAggregateInputType | true
    }

  export interface bountiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bounties'], meta: { name: 'bounties' } }
    /**
     * Find zero or one Bounties that matches the filter.
     * @param {bountiesFindUniqueArgs} args - Arguments to find a Bounties
     * @example
     * // Get one Bounties
     * const bounties = await prisma.bounties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends bountiesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bountiesFindUniqueArgs<ExtArgs>>
    ): Prisma__bountiesClient<$Result.GetResult<Prisma.$bountiesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bounties that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {bountiesFindUniqueOrThrowArgs} args - Arguments to find a Bounties
     * @example
     * // Get one Bounties
     * const bounties = await prisma.bounties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends bountiesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bountiesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__bountiesClient<$Result.GetResult<Prisma.$bountiesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bounties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bountiesFindFirstArgs} args - Arguments to find a Bounties
     * @example
     * // Get one Bounties
     * const bounties = await prisma.bounties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends bountiesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bountiesFindFirstArgs<ExtArgs>>
    ): Prisma__bountiesClient<$Result.GetResult<Prisma.$bountiesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bounties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bountiesFindFirstOrThrowArgs} args - Arguments to find a Bounties
     * @example
     * // Get one Bounties
     * const bounties = await prisma.bounties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends bountiesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bountiesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__bountiesClient<$Result.GetResult<Prisma.$bountiesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bounties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bountiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bounties
     * const bounties = await prisma.bounties.findMany()
     * 
     * // Get first 10 Bounties
     * const bounties = await prisma.bounties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bountiesWithIdOnly = await prisma.bounties.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends bountiesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bountiesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bountiesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bounties.
     * @param {bountiesCreateArgs} args - Arguments to create a Bounties.
     * @example
     * // Create one Bounties
     * const Bounties = await prisma.bounties.create({
     *   data: {
     *     // ... data to create a Bounties
     *   }
     * })
     * 
    **/
    create<T extends bountiesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bountiesCreateArgs<ExtArgs>>
    ): Prisma__bountiesClient<$Result.GetResult<Prisma.$bountiesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bounties.
     *     @param {bountiesCreateManyArgs} args - Arguments to create many Bounties.
     *     @example
     *     // Create many Bounties
     *     const bounties = await prisma.bounties.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends bountiesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bountiesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bounties.
     * @param {bountiesDeleteArgs} args - Arguments to delete one Bounties.
     * @example
     * // Delete one Bounties
     * const Bounties = await prisma.bounties.delete({
     *   where: {
     *     // ... filter to delete one Bounties
     *   }
     * })
     * 
    **/
    delete<T extends bountiesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bountiesDeleteArgs<ExtArgs>>
    ): Prisma__bountiesClient<$Result.GetResult<Prisma.$bountiesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bounties.
     * @param {bountiesUpdateArgs} args - Arguments to update one Bounties.
     * @example
     * // Update one Bounties
     * const bounties = await prisma.bounties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends bountiesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bountiesUpdateArgs<ExtArgs>>
    ): Prisma__bountiesClient<$Result.GetResult<Prisma.$bountiesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bounties.
     * @param {bountiesDeleteManyArgs} args - Arguments to filter Bounties to delete.
     * @example
     * // Delete a few Bounties
     * const { count } = await prisma.bounties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends bountiesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bountiesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bounties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bountiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bounties
     * const bounties = await prisma.bounties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends bountiesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bountiesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bounties.
     * @param {bountiesUpsertArgs} args - Arguments to update or create a Bounties.
     * @example
     * // Update or create a Bounties
     * const bounties = await prisma.bounties.upsert({
     *   create: {
     *     // ... data to create a Bounties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bounties we want to update
     *   }
     * })
    **/
    upsert<T extends bountiesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bountiesUpsertArgs<ExtArgs>>
    ): Prisma__bountiesClient<$Result.GetResult<Prisma.$bountiesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bounties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bountiesCountArgs} args - Arguments to filter Bounties to count.
     * @example
     * // Count the number of Bounties
     * const count = await prisma.bounties.count({
     *   where: {
     *     // ... the filter for the Bounties we want to count
     *   }
     * })
    **/
    count<T extends bountiesCountArgs>(
      args?: Subset<T, bountiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BountiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bounties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BountiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BountiesAggregateArgs>(args: Subset<T, BountiesAggregateArgs>): Prisma.PrismaPromise<GetBountiesAggregateType<T>>

    /**
     * Group by Bounties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bountiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bountiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bountiesGroupByArgs['orderBy'] }
        : { orderBy?: bountiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bountiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBountiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bounties model
   */
  readonly fields: bountiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bounties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bountiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the bounties model
   */ 
  interface bountiesFieldRefs {
    readonly id: FieldRef<"bounties", 'Int'>
    readonly bounty_id: FieldRef<"bounties", 'String'>
    readonly name: FieldRef<"bounties", 'String'>
    readonly link: FieldRef<"bounties", 'String'>
    readonly max_reward: FieldRef<"bounties", 'Int'>
    readonly vault_tvl: FieldRef<"bounties", 'Int'>
    readonly logo: FieldRef<"bounties", 'String'>
    readonly date: FieldRef<"bounties", 'DateTime'>
    readonly last_updated_date: FieldRef<"bounties", 'DateTime'>
    readonly response_time_metric_enabled: FieldRef<"bounties", 'Boolean'>
    readonly med_response_time: FieldRef<"bounties", 'Int'>
    readonly total_paid_metric_enabled: FieldRef<"bounties", 'Boolean'>
    readonly total_paid_amount: FieldRef<"bounties", 'Int'>
    readonly rating: FieldRef<"bounties", 'Float'>
    readonly firm: FieldRef<"bounties", 'Json'>
    readonly category_list: FieldRef<"bounties", 'String[]'>
    readonly language_list: FieldRef<"bounties", 'String[]'>
    readonly source_code_list: FieldRef<"bounties", 'String[]'>
    readonly reference_list: FieldRef<"bounties", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * bounties findUnique
   */
  export type bountiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bounties
     */
    select?: bountiesSelect<ExtArgs> | null
    /**
     * Filter, which bounties to fetch.
     */
    where: bountiesWhereUniqueInput
  }


  /**
   * bounties findUniqueOrThrow
   */
  export type bountiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bounties
     */
    select?: bountiesSelect<ExtArgs> | null
    /**
     * Filter, which bounties to fetch.
     */
    where: bountiesWhereUniqueInput
  }


  /**
   * bounties findFirst
   */
  export type bountiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bounties
     */
    select?: bountiesSelect<ExtArgs> | null
    /**
     * Filter, which bounties to fetch.
     */
    where?: bountiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bounties to fetch.
     */
    orderBy?: bountiesOrderByWithRelationInput | bountiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bounties.
     */
    cursor?: bountiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bounties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bounties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bounties.
     */
    distinct?: BountiesScalarFieldEnum | BountiesScalarFieldEnum[]
  }


  /**
   * bounties findFirstOrThrow
   */
  export type bountiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bounties
     */
    select?: bountiesSelect<ExtArgs> | null
    /**
     * Filter, which bounties to fetch.
     */
    where?: bountiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bounties to fetch.
     */
    orderBy?: bountiesOrderByWithRelationInput | bountiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bounties.
     */
    cursor?: bountiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bounties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bounties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bounties.
     */
    distinct?: BountiesScalarFieldEnum | BountiesScalarFieldEnum[]
  }


  /**
   * bounties findMany
   */
  export type bountiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bounties
     */
    select?: bountiesSelect<ExtArgs> | null
    /**
     * Filter, which bounties to fetch.
     */
    where?: bountiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bounties to fetch.
     */
    orderBy?: bountiesOrderByWithRelationInput | bountiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bounties.
     */
    cursor?: bountiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bounties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bounties.
     */
    skip?: number
    distinct?: BountiesScalarFieldEnum | BountiesScalarFieldEnum[]
  }


  /**
   * bounties create
   */
  export type bountiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bounties
     */
    select?: bountiesSelect<ExtArgs> | null
    /**
     * The data needed to create a bounties.
     */
    data: XOR<bountiesCreateInput, bountiesUncheckedCreateInput>
  }


  /**
   * bounties createMany
   */
  export type bountiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bounties.
     */
    data: bountiesCreateManyInput | bountiesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * bounties update
   */
  export type bountiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bounties
     */
    select?: bountiesSelect<ExtArgs> | null
    /**
     * The data needed to update a bounties.
     */
    data: XOR<bountiesUpdateInput, bountiesUncheckedUpdateInput>
    /**
     * Choose, which bounties to update.
     */
    where: bountiesWhereUniqueInput
  }


  /**
   * bounties updateMany
   */
  export type bountiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bounties.
     */
    data: XOR<bountiesUpdateManyMutationInput, bountiesUncheckedUpdateManyInput>
    /**
     * Filter which bounties to update
     */
    where?: bountiesWhereInput
  }


  /**
   * bounties upsert
   */
  export type bountiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bounties
     */
    select?: bountiesSelect<ExtArgs> | null
    /**
     * The filter to search for the bounties to update in case it exists.
     */
    where: bountiesWhereUniqueInput
    /**
     * In case the bounties found by the `where` argument doesn't exist, create a new bounties with this data.
     */
    create: XOR<bountiesCreateInput, bountiesUncheckedCreateInput>
    /**
     * In case the bounties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bountiesUpdateInput, bountiesUncheckedUpdateInput>
  }


  /**
   * bounties delete
   */
  export type bountiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bounties
     */
    select?: bountiesSelect<ExtArgs> | null
    /**
     * Filter which bounties to delete.
     */
    where: bountiesWhereUniqueInput
  }


  /**
   * bounties deleteMany
   */
  export type bountiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bounties to delete
     */
    where?: bountiesWhereInput
  }


  /**
   * bounties without action
   */
  export type bountiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bounties
     */
    select?: bountiesSelect<ExtArgs> | null
  }



  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
  }

  export type ContractSumAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
    title: string | null
    description: string | null
  }

  export type ContractMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
    title: string | null
    description: string | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    userId: number
    price: number
    title: number
    description: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    id?: true
    userId?: true
    price?: true
  }

  export type ContractSumAggregateInputType = {
    id?: true
    userId?: true
    price?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    title?: true
    description?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    title?: true
    description?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    title?: true
    description?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: number
    userId: number
    price: number
    title: string
    description: string
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    price?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    userId?: boolean
    price?: boolean
    title?: boolean
    description?: boolean
  }


  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      price: number
      title: string
      description: string
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }


  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContractFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contract that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContractFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContractFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
    **/
    create<T extends ContractCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContractCreateArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contracts.
     *     @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     *     @example
     *     // Create many Contracts
     *     const contract = await prisma.contract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContractCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
    **/
    delete<T extends ContractDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContractUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContractDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContractUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
    **/
    upsert<T extends ContractUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contract model
   */ 
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'Int'>
    readonly userId: FieldRef<"Contract", 'Int'>
    readonly price: FieldRef<"Contract", 'Int'>
    readonly title: FieldRef<"Contract", 'String'>
    readonly description: FieldRef<"Contract", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }


  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }


  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
  }


  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }


  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }


  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
  }


  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    address: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    address: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    address: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    address?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    address?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    address?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    address: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    listedcontracts?: boolean | users$listedcontractsArgs<ExtArgs>
    ownedcontracts?: boolean | users$ownedcontractsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    address?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listedcontracts?: boolean | users$listedcontractsArgs<ExtArgs>
    ownedcontracts?: boolean | users$ownedcontractsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      listedcontracts: Prisma.$listedcontractsPayload<ExtArgs>[]
      ownedcontracts: Prisma.$ownedcontractsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    listedcontracts<T extends users$listedcontractsArgs<ExtArgs> = {}>(args?: Subset<T, users$listedcontractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listedcontractsPayload<ExtArgs>, T, 'findMany'> | Null>;

    ownedcontracts<T extends users$ownedcontractsArgs<ExtArgs> = {}>(args?: Subset<T, users$ownedcontractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownedcontractsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly address: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.listedcontracts
   */
  export type users$listedcontractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
    where?: listedcontractsWhereInput
    orderBy?: listedcontractsOrderByWithRelationInput | listedcontractsOrderByWithRelationInput[]
    cursor?: listedcontractsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListedcontractsScalarFieldEnum | ListedcontractsScalarFieldEnum[]
  }


  /**
   * users.ownedcontracts
   */
  export type users$ownedcontractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
    where?: ownedcontractsWhereInput
    orderBy?: ownedcontractsOrderByWithRelationInput | ownedcontractsOrderByWithRelationInput[]
    cursor?: ownedcontractsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnedcontractsScalarFieldEnum | OwnedcontractsScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model listedcontracts
   */

  export type AggregateListedcontracts = {
    _count: ListedcontractsCountAggregateOutputType | null
    _avg: ListedcontractsAvgAggregateOutputType | null
    _sum: ListedcontractsSumAggregateOutputType | null
    _min: ListedcontractsMinAggregateOutputType | null
    _max: ListedcontractsMaxAggregateOutputType | null
  }

  export type ListedcontractsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ListedcontractsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ListedcontractsMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: string | null
    contract: string | null
    description: string | null
    code_hash: string | null
    code: string | null
    address: string | null
    user_id: number | null
  }

  export type ListedcontractsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: string | null
    contract: string | null
    description: string | null
    code_hash: string | null
    code: string | null
    address: string | null
    user_id: number | null
  }

  export type ListedcontractsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    contract: number
    description: number
    code_hash: number
    code: number
    address: number
    user_id: number
    _all: number
  }


  export type ListedcontractsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ListedcontractsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ListedcontractsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    contract?: true
    description?: true
    code_hash?: true
    code?: true
    address?: true
    user_id?: true
  }

  export type ListedcontractsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    contract?: true
    description?: true
    code_hash?: true
    code?: true
    address?: true
    user_id?: true
  }

  export type ListedcontractsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    contract?: true
    description?: true
    code_hash?: true
    code?: true
    address?: true
    user_id?: true
    _all?: true
  }

  export type ListedcontractsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listedcontracts to aggregate.
     */
    where?: listedcontractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listedcontracts to fetch.
     */
    orderBy?: listedcontractsOrderByWithRelationInput | listedcontractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: listedcontractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listedcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listedcontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned listedcontracts
    **/
    _count?: true | ListedcontractsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListedcontractsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListedcontractsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListedcontractsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListedcontractsMaxAggregateInputType
  }

  export type GetListedcontractsAggregateType<T extends ListedcontractsAggregateArgs> = {
        [P in keyof T & keyof AggregateListedcontracts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListedcontracts[P]>
      : GetScalarType<T[P], AggregateListedcontracts[P]>
  }




  export type listedcontractsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listedcontractsWhereInput
    orderBy?: listedcontractsOrderByWithAggregationInput | listedcontractsOrderByWithAggregationInput[]
    by: ListedcontractsScalarFieldEnum[] | ListedcontractsScalarFieldEnum
    having?: listedcontractsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListedcontractsCountAggregateInputType | true
    _avg?: ListedcontractsAvgAggregateInputType
    _sum?: ListedcontractsSumAggregateInputType
    _min?: ListedcontractsMinAggregateInputType
    _max?: ListedcontractsMaxAggregateInputType
  }

  export type ListedcontractsGroupByOutputType = {
    id: number
    name: string
    price: string
    contract: string
    description: string
    code_hash: string
    code: string
    address: string
    user_id: number
    _count: ListedcontractsCountAggregateOutputType | null
    _avg: ListedcontractsAvgAggregateOutputType | null
    _sum: ListedcontractsSumAggregateOutputType | null
    _min: ListedcontractsMinAggregateOutputType | null
    _max: ListedcontractsMaxAggregateOutputType | null
  }

  type GetListedcontractsGroupByPayload<T extends listedcontractsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListedcontractsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListedcontractsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListedcontractsGroupByOutputType[P]>
            : GetScalarType<T[P], ListedcontractsGroupByOutputType[P]>
        }
      >
    >


  export type listedcontractsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    contract?: boolean
    description?: boolean
    code_hash?: boolean
    code?: boolean
    address?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listedcontracts"]>

  export type listedcontractsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    contract?: boolean
    description?: boolean
    code_hash?: boolean
    code?: boolean
    address?: boolean
    user_id?: boolean
  }

  export type listedcontractsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $listedcontractsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "listedcontracts"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: string
      contract: string
      description: string
      code_hash: string
      code: string
      address: string
      user_id: number
    }, ExtArgs["result"]["listedcontracts"]>
    composites: {}
  }


  type listedcontractsGetPayload<S extends boolean | null | undefined | listedcontractsDefaultArgs> = $Result.GetResult<Prisma.$listedcontractsPayload, S>

  type listedcontractsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<listedcontractsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListedcontractsCountAggregateInputType | true
    }

  export interface listedcontractsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['listedcontracts'], meta: { name: 'listedcontracts' } }
    /**
     * Find zero or one Listedcontracts that matches the filter.
     * @param {listedcontractsFindUniqueArgs} args - Arguments to find a Listedcontracts
     * @example
     * // Get one Listedcontracts
     * const listedcontracts = await prisma.listedcontracts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends listedcontractsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, listedcontractsFindUniqueArgs<ExtArgs>>
    ): Prisma__listedcontractsClient<$Result.GetResult<Prisma.$listedcontractsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Listedcontracts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {listedcontractsFindUniqueOrThrowArgs} args - Arguments to find a Listedcontracts
     * @example
     * // Get one Listedcontracts
     * const listedcontracts = await prisma.listedcontracts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends listedcontractsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, listedcontractsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__listedcontractsClient<$Result.GetResult<Prisma.$listedcontractsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Listedcontracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listedcontractsFindFirstArgs} args - Arguments to find a Listedcontracts
     * @example
     * // Get one Listedcontracts
     * const listedcontracts = await prisma.listedcontracts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends listedcontractsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, listedcontractsFindFirstArgs<ExtArgs>>
    ): Prisma__listedcontractsClient<$Result.GetResult<Prisma.$listedcontractsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Listedcontracts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listedcontractsFindFirstOrThrowArgs} args - Arguments to find a Listedcontracts
     * @example
     * // Get one Listedcontracts
     * const listedcontracts = await prisma.listedcontracts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends listedcontractsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, listedcontractsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__listedcontractsClient<$Result.GetResult<Prisma.$listedcontractsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Listedcontracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listedcontractsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listedcontracts
     * const listedcontracts = await prisma.listedcontracts.findMany()
     * 
     * // Get first 10 Listedcontracts
     * const listedcontracts = await prisma.listedcontracts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listedcontractsWithIdOnly = await prisma.listedcontracts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends listedcontractsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, listedcontractsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listedcontractsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Listedcontracts.
     * @param {listedcontractsCreateArgs} args - Arguments to create a Listedcontracts.
     * @example
     * // Create one Listedcontracts
     * const Listedcontracts = await prisma.listedcontracts.create({
     *   data: {
     *     // ... data to create a Listedcontracts
     *   }
     * })
     * 
    **/
    create<T extends listedcontractsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, listedcontractsCreateArgs<ExtArgs>>
    ): Prisma__listedcontractsClient<$Result.GetResult<Prisma.$listedcontractsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Listedcontracts.
     *     @param {listedcontractsCreateManyArgs} args - Arguments to create many Listedcontracts.
     *     @example
     *     // Create many Listedcontracts
     *     const listedcontracts = await prisma.listedcontracts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends listedcontractsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, listedcontractsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Listedcontracts.
     * @param {listedcontractsDeleteArgs} args - Arguments to delete one Listedcontracts.
     * @example
     * // Delete one Listedcontracts
     * const Listedcontracts = await prisma.listedcontracts.delete({
     *   where: {
     *     // ... filter to delete one Listedcontracts
     *   }
     * })
     * 
    **/
    delete<T extends listedcontractsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, listedcontractsDeleteArgs<ExtArgs>>
    ): Prisma__listedcontractsClient<$Result.GetResult<Prisma.$listedcontractsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Listedcontracts.
     * @param {listedcontractsUpdateArgs} args - Arguments to update one Listedcontracts.
     * @example
     * // Update one Listedcontracts
     * const listedcontracts = await prisma.listedcontracts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends listedcontractsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, listedcontractsUpdateArgs<ExtArgs>>
    ): Prisma__listedcontractsClient<$Result.GetResult<Prisma.$listedcontractsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Listedcontracts.
     * @param {listedcontractsDeleteManyArgs} args - Arguments to filter Listedcontracts to delete.
     * @example
     * // Delete a few Listedcontracts
     * const { count } = await prisma.listedcontracts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends listedcontractsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, listedcontractsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listedcontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listedcontractsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listedcontracts
     * const listedcontracts = await prisma.listedcontracts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends listedcontractsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, listedcontractsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Listedcontracts.
     * @param {listedcontractsUpsertArgs} args - Arguments to update or create a Listedcontracts.
     * @example
     * // Update or create a Listedcontracts
     * const listedcontracts = await prisma.listedcontracts.upsert({
     *   create: {
     *     // ... data to create a Listedcontracts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listedcontracts we want to update
     *   }
     * })
    **/
    upsert<T extends listedcontractsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, listedcontractsUpsertArgs<ExtArgs>>
    ): Prisma__listedcontractsClient<$Result.GetResult<Prisma.$listedcontractsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Listedcontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listedcontractsCountArgs} args - Arguments to filter Listedcontracts to count.
     * @example
     * // Count the number of Listedcontracts
     * const count = await prisma.listedcontracts.count({
     *   where: {
     *     // ... the filter for the Listedcontracts we want to count
     *   }
     * })
    **/
    count<T extends listedcontractsCountArgs>(
      args?: Subset<T, listedcontractsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListedcontractsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listedcontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListedcontractsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListedcontractsAggregateArgs>(args: Subset<T, ListedcontractsAggregateArgs>): Prisma.PrismaPromise<GetListedcontractsAggregateType<T>>

    /**
     * Group by Listedcontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listedcontractsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends listedcontractsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: listedcontractsGroupByArgs['orderBy'] }
        : { orderBy?: listedcontractsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, listedcontractsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListedcontractsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the listedcontracts model
   */
  readonly fields: listedcontractsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for listedcontracts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__listedcontractsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the listedcontracts model
   */ 
  interface listedcontractsFieldRefs {
    readonly id: FieldRef<"listedcontracts", 'Int'>
    readonly name: FieldRef<"listedcontracts", 'String'>
    readonly price: FieldRef<"listedcontracts", 'String'>
    readonly contract: FieldRef<"listedcontracts", 'String'>
    readonly description: FieldRef<"listedcontracts", 'String'>
    readonly code_hash: FieldRef<"listedcontracts", 'String'>
    readonly code: FieldRef<"listedcontracts", 'String'>
    readonly address: FieldRef<"listedcontracts", 'String'>
    readonly user_id: FieldRef<"listedcontracts", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * listedcontracts findUnique
   */
  export type listedcontractsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
    /**
     * Filter, which listedcontracts to fetch.
     */
    where: listedcontractsWhereUniqueInput
  }


  /**
   * listedcontracts findUniqueOrThrow
   */
  export type listedcontractsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
    /**
     * Filter, which listedcontracts to fetch.
     */
    where: listedcontractsWhereUniqueInput
  }


  /**
   * listedcontracts findFirst
   */
  export type listedcontractsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
    /**
     * Filter, which listedcontracts to fetch.
     */
    where?: listedcontractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listedcontracts to fetch.
     */
    orderBy?: listedcontractsOrderByWithRelationInput | listedcontractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listedcontracts.
     */
    cursor?: listedcontractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listedcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listedcontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listedcontracts.
     */
    distinct?: ListedcontractsScalarFieldEnum | ListedcontractsScalarFieldEnum[]
  }


  /**
   * listedcontracts findFirstOrThrow
   */
  export type listedcontractsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
    /**
     * Filter, which listedcontracts to fetch.
     */
    where?: listedcontractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listedcontracts to fetch.
     */
    orderBy?: listedcontractsOrderByWithRelationInput | listedcontractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listedcontracts.
     */
    cursor?: listedcontractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listedcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listedcontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listedcontracts.
     */
    distinct?: ListedcontractsScalarFieldEnum | ListedcontractsScalarFieldEnum[]
  }


  /**
   * listedcontracts findMany
   */
  export type listedcontractsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
    /**
     * Filter, which listedcontracts to fetch.
     */
    where?: listedcontractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listedcontracts to fetch.
     */
    orderBy?: listedcontractsOrderByWithRelationInput | listedcontractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing listedcontracts.
     */
    cursor?: listedcontractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listedcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listedcontracts.
     */
    skip?: number
    distinct?: ListedcontractsScalarFieldEnum | ListedcontractsScalarFieldEnum[]
  }


  /**
   * listedcontracts create
   */
  export type listedcontractsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
    /**
     * The data needed to create a listedcontracts.
     */
    data: XOR<listedcontractsCreateInput, listedcontractsUncheckedCreateInput>
  }


  /**
   * listedcontracts createMany
   */
  export type listedcontractsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many listedcontracts.
     */
    data: listedcontractsCreateManyInput | listedcontractsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * listedcontracts update
   */
  export type listedcontractsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
    /**
     * The data needed to update a listedcontracts.
     */
    data: XOR<listedcontractsUpdateInput, listedcontractsUncheckedUpdateInput>
    /**
     * Choose, which listedcontracts to update.
     */
    where: listedcontractsWhereUniqueInput
  }


  /**
   * listedcontracts updateMany
   */
  export type listedcontractsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update listedcontracts.
     */
    data: XOR<listedcontractsUpdateManyMutationInput, listedcontractsUncheckedUpdateManyInput>
    /**
     * Filter which listedcontracts to update
     */
    where?: listedcontractsWhereInput
  }


  /**
   * listedcontracts upsert
   */
  export type listedcontractsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
    /**
     * The filter to search for the listedcontracts to update in case it exists.
     */
    where: listedcontractsWhereUniqueInput
    /**
     * In case the listedcontracts found by the `where` argument doesn't exist, create a new listedcontracts with this data.
     */
    create: XOR<listedcontractsCreateInput, listedcontractsUncheckedCreateInput>
    /**
     * In case the listedcontracts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<listedcontractsUpdateInput, listedcontractsUncheckedUpdateInput>
  }


  /**
   * listedcontracts delete
   */
  export type listedcontractsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
    /**
     * Filter which listedcontracts to delete.
     */
    where: listedcontractsWhereUniqueInput
  }


  /**
   * listedcontracts deleteMany
   */
  export type listedcontractsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listedcontracts to delete
     */
    where?: listedcontractsWhereInput
  }


  /**
   * listedcontracts without action
   */
  export type listedcontractsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listedcontracts
     */
    select?: listedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: listedcontractsInclude<ExtArgs> | null
  }



  /**
   * Model ownedcontracts
   */

  export type AggregateOwnedcontracts = {
    _count: OwnedcontractsCountAggregateOutputType | null
    _avg: OwnedcontractsAvgAggregateOutputType | null
    _sum: OwnedcontractsSumAggregateOutputType | null
    _min: OwnedcontractsMinAggregateOutputType | null
    _max: OwnedcontractsMaxAggregateOutputType | null
  }

  export type OwnedcontractsAvgAggregateOutputType = {
    id: number | null
    contract_id: number | null
    user_id: number | null
  }

  export type OwnedcontractsSumAggregateOutputType = {
    id: number | null
    contract_id: number | null
    user_id: number | null
  }

  export type OwnedcontractsMinAggregateOutputType = {
    id: number | null
    name: string | null
    contract_id: number | null
    user_id: number | null
  }

  export type OwnedcontractsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    contract_id: number | null
    user_id: number | null
  }

  export type OwnedcontractsCountAggregateOutputType = {
    id: number
    name: number
    contract_id: number
    user_id: number
    _all: number
  }


  export type OwnedcontractsAvgAggregateInputType = {
    id?: true
    contract_id?: true
    user_id?: true
  }

  export type OwnedcontractsSumAggregateInputType = {
    id?: true
    contract_id?: true
    user_id?: true
  }

  export type OwnedcontractsMinAggregateInputType = {
    id?: true
    name?: true
    contract_id?: true
    user_id?: true
  }

  export type OwnedcontractsMaxAggregateInputType = {
    id?: true
    name?: true
    contract_id?: true
    user_id?: true
  }

  export type OwnedcontractsCountAggregateInputType = {
    id?: true
    name?: true
    contract_id?: true
    user_id?: true
    _all?: true
  }

  export type OwnedcontractsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ownedcontracts to aggregate.
     */
    where?: ownedcontractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ownedcontracts to fetch.
     */
    orderBy?: ownedcontractsOrderByWithRelationInput | ownedcontractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ownedcontractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ownedcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ownedcontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ownedcontracts
    **/
    _count?: true | OwnedcontractsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnedcontractsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnedcontractsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnedcontractsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnedcontractsMaxAggregateInputType
  }

  export type GetOwnedcontractsAggregateType<T extends OwnedcontractsAggregateArgs> = {
        [P in keyof T & keyof AggregateOwnedcontracts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwnedcontracts[P]>
      : GetScalarType<T[P], AggregateOwnedcontracts[P]>
  }




  export type ownedcontractsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownedcontractsWhereInput
    orderBy?: ownedcontractsOrderByWithAggregationInput | ownedcontractsOrderByWithAggregationInput[]
    by: OwnedcontractsScalarFieldEnum[] | OwnedcontractsScalarFieldEnum
    having?: ownedcontractsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnedcontractsCountAggregateInputType | true
    _avg?: OwnedcontractsAvgAggregateInputType
    _sum?: OwnedcontractsSumAggregateInputType
    _min?: OwnedcontractsMinAggregateInputType
    _max?: OwnedcontractsMaxAggregateInputType
  }

  export type OwnedcontractsGroupByOutputType = {
    id: number
    name: string
    contract_id: number
    user_id: number
    _count: OwnedcontractsCountAggregateOutputType | null
    _avg: OwnedcontractsAvgAggregateOutputType | null
    _sum: OwnedcontractsSumAggregateOutputType | null
    _min: OwnedcontractsMinAggregateOutputType | null
    _max: OwnedcontractsMaxAggregateOutputType | null
  }

  type GetOwnedcontractsGroupByPayload<T extends ownedcontractsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnedcontractsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnedcontractsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnedcontractsGroupByOutputType[P]>
            : GetScalarType<T[P], OwnedcontractsGroupByOutputType[P]>
        }
      >
    >


  export type ownedcontractsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contract_id?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownedcontracts"]>

  export type ownedcontractsSelectScalar = {
    id?: boolean
    name?: boolean
    contract_id?: boolean
    user_id?: boolean
  }

  export type ownedcontractsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $ownedcontractsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ownedcontracts"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      contract_id: number
      user_id: number
    }, ExtArgs["result"]["ownedcontracts"]>
    composites: {}
  }


  type ownedcontractsGetPayload<S extends boolean | null | undefined | ownedcontractsDefaultArgs> = $Result.GetResult<Prisma.$ownedcontractsPayload, S>

  type ownedcontractsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ownedcontractsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OwnedcontractsCountAggregateInputType | true
    }

  export interface ownedcontractsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ownedcontracts'], meta: { name: 'ownedcontracts' } }
    /**
     * Find zero or one Ownedcontracts that matches the filter.
     * @param {ownedcontractsFindUniqueArgs} args - Arguments to find a Ownedcontracts
     * @example
     * // Get one Ownedcontracts
     * const ownedcontracts = await prisma.ownedcontracts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ownedcontractsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ownedcontractsFindUniqueArgs<ExtArgs>>
    ): Prisma__ownedcontractsClient<$Result.GetResult<Prisma.$ownedcontractsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ownedcontracts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ownedcontractsFindUniqueOrThrowArgs} args - Arguments to find a Ownedcontracts
     * @example
     * // Get one Ownedcontracts
     * const ownedcontracts = await prisma.ownedcontracts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ownedcontractsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownedcontractsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ownedcontractsClient<$Result.GetResult<Prisma.$ownedcontractsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ownedcontracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownedcontractsFindFirstArgs} args - Arguments to find a Ownedcontracts
     * @example
     * // Get one Ownedcontracts
     * const ownedcontracts = await prisma.ownedcontracts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ownedcontractsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ownedcontractsFindFirstArgs<ExtArgs>>
    ): Prisma__ownedcontractsClient<$Result.GetResult<Prisma.$ownedcontractsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ownedcontracts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownedcontractsFindFirstOrThrowArgs} args - Arguments to find a Ownedcontracts
     * @example
     * // Get one Ownedcontracts
     * const ownedcontracts = await prisma.ownedcontracts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ownedcontractsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownedcontractsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ownedcontractsClient<$Result.GetResult<Prisma.$ownedcontractsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ownedcontracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownedcontractsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ownedcontracts
     * const ownedcontracts = await prisma.ownedcontracts.findMany()
     * 
     * // Get first 10 Ownedcontracts
     * const ownedcontracts = await prisma.ownedcontracts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownedcontractsWithIdOnly = await prisma.ownedcontracts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ownedcontractsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownedcontractsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownedcontractsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ownedcontracts.
     * @param {ownedcontractsCreateArgs} args - Arguments to create a Ownedcontracts.
     * @example
     * // Create one Ownedcontracts
     * const Ownedcontracts = await prisma.ownedcontracts.create({
     *   data: {
     *     // ... data to create a Ownedcontracts
     *   }
     * })
     * 
    **/
    create<T extends ownedcontractsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ownedcontractsCreateArgs<ExtArgs>>
    ): Prisma__ownedcontractsClient<$Result.GetResult<Prisma.$ownedcontractsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ownedcontracts.
     *     @param {ownedcontractsCreateManyArgs} args - Arguments to create many Ownedcontracts.
     *     @example
     *     // Create many Ownedcontracts
     *     const ownedcontracts = await prisma.ownedcontracts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ownedcontractsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownedcontractsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ownedcontracts.
     * @param {ownedcontractsDeleteArgs} args - Arguments to delete one Ownedcontracts.
     * @example
     * // Delete one Ownedcontracts
     * const Ownedcontracts = await prisma.ownedcontracts.delete({
     *   where: {
     *     // ... filter to delete one Ownedcontracts
     *   }
     * })
     * 
    **/
    delete<T extends ownedcontractsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ownedcontractsDeleteArgs<ExtArgs>>
    ): Prisma__ownedcontractsClient<$Result.GetResult<Prisma.$ownedcontractsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ownedcontracts.
     * @param {ownedcontractsUpdateArgs} args - Arguments to update one Ownedcontracts.
     * @example
     * // Update one Ownedcontracts
     * const ownedcontracts = await prisma.ownedcontracts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ownedcontractsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ownedcontractsUpdateArgs<ExtArgs>>
    ): Prisma__ownedcontractsClient<$Result.GetResult<Prisma.$ownedcontractsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ownedcontracts.
     * @param {ownedcontractsDeleteManyArgs} args - Arguments to filter Ownedcontracts to delete.
     * @example
     * // Delete a few Ownedcontracts
     * const { count } = await prisma.ownedcontracts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ownedcontractsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownedcontractsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ownedcontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownedcontractsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ownedcontracts
     * const ownedcontracts = await prisma.ownedcontracts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ownedcontractsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ownedcontractsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ownedcontracts.
     * @param {ownedcontractsUpsertArgs} args - Arguments to update or create a Ownedcontracts.
     * @example
     * // Update or create a Ownedcontracts
     * const ownedcontracts = await prisma.ownedcontracts.upsert({
     *   create: {
     *     // ... data to create a Ownedcontracts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ownedcontracts we want to update
     *   }
     * })
    **/
    upsert<T extends ownedcontractsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ownedcontractsUpsertArgs<ExtArgs>>
    ): Prisma__ownedcontractsClient<$Result.GetResult<Prisma.$ownedcontractsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ownedcontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownedcontractsCountArgs} args - Arguments to filter Ownedcontracts to count.
     * @example
     * // Count the number of Ownedcontracts
     * const count = await prisma.ownedcontracts.count({
     *   where: {
     *     // ... the filter for the Ownedcontracts we want to count
     *   }
     * })
    **/
    count<T extends ownedcontractsCountArgs>(
      args?: Subset<T, ownedcontractsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnedcontractsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ownedcontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnedcontractsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnedcontractsAggregateArgs>(args: Subset<T, OwnedcontractsAggregateArgs>): Prisma.PrismaPromise<GetOwnedcontractsAggregateType<T>>

    /**
     * Group by Ownedcontracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownedcontractsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ownedcontractsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ownedcontractsGroupByArgs['orderBy'] }
        : { orderBy?: ownedcontractsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ownedcontractsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnedcontractsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ownedcontracts model
   */
  readonly fields: ownedcontractsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ownedcontracts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ownedcontractsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ownedcontracts model
   */ 
  interface ownedcontractsFieldRefs {
    readonly id: FieldRef<"ownedcontracts", 'Int'>
    readonly name: FieldRef<"ownedcontracts", 'String'>
    readonly contract_id: FieldRef<"ownedcontracts", 'Int'>
    readonly user_id: FieldRef<"ownedcontracts", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ownedcontracts findUnique
   */
  export type ownedcontractsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
    /**
     * Filter, which ownedcontracts to fetch.
     */
    where: ownedcontractsWhereUniqueInput
  }


  /**
   * ownedcontracts findUniqueOrThrow
   */
  export type ownedcontractsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
    /**
     * Filter, which ownedcontracts to fetch.
     */
    where: ownedcontractsWhereUniqueInput
  }


  /**
   * ownedcontracts findFirst
   */
  export type ownedcontractsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
    /**
     * Filter, which ownedcontracts to fetch.
     */
    where?: ownedcontractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ownedcontracts to fetch.
     */
    orderBy?: ownedcontractsOrderByWithRelationInput | ownedcontractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ownedcontracts.
     */
    cursor?: ownedcontractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ownedcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ownedcontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ownedcontracts.
     */
    distinct?: OwnedcontractsScalarFieldEnum | OwnedcontractsScalarFieldEnum[]
  }


  /**
   * ownedcontracts findFirstOrThrow
   */
  export type ownedcontractsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
    /**
     * Filter, which ownedcontracts to fetch.
     */
    where?: ownedcontractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ownedcontracts to fetch.
     */
    orderBy?: ownedcontractsOrderByWithRelationInput | ownedcontractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ownedcontracts.
     */
    cursor?: ownedcontractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ownedcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ownedcontracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ownedcontracts.
     */
    distinct?: OwnedcontractsScalarFieldEnum | OwnedcontractsScalarFieldEnum[]
  }


  /**
   * ownedcontracts findMany
   */
  export type ownedcontractsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
    /**
     * Filter, which ownedcontracts to fetch.
     */
    where?: ownedcontractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ownedcontracts to fetch.
     */
    orderBy?: ownedcontractsOrderByWithRelationInput | ownedcontractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ownedcontracts.
     */
    cursor?: ownedcontractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ownedcontracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ownedcontracts.
     */
    skip?: number
    distinct?: OwnedcontractsScalarFieldEnum | OwnedcontractsScalarFieldEnum[]
  }


  /**
   * ownedcontracts create
   */
  export type ownedcontractsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
    /**
     * The data needed to create a ownedcontracts.
     */
    data: XOR<ownedcontractsCreateInput, ownedcontractsUncheckedCreateInput>
  }


  /**
   * ownedcontracts createMany
   */
  export type ownedcontractsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ownedcontracts.
     */
    data: ownedcontractsCreateManyInput | ownedcontractsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ownedcontracts update
   */
  export type ownedcontractsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
    /**
     * The data needed to update a ownedcontracts.
     */
    data: XOR<ownedcontractsUpdateInput, ownedcontractsUncheckedUpdateInput>
    /**
     * Choose, which ownedcontracts to update.
     */
    where: ownedcontractsWhereUniqueInput
  }


  /**
   * ownedcontracts updateMany
   */
  export type ownedcontractsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ownedcontracts.
     */
    data: XOR<ownedcontractsUpdateManyMutationInput, ownedcontractsUncheckedUpdateManyInput>
    /**
     * Filter which ownedcontracts to update
     */
    where?: ownedcontractsWhereInput
  }


  /**
   * ownedcontracts upsert
   */
  export type ownedcontractsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
    /**
     * The filter to search for the ownedcontracts to update in case it exists.
     */
    where: ownedcontractsWhereUniqueInput
    /**
     * In case the ownedcontracts found by the `where` argument doesn't exist, create a new ownedcontracts with this data.
     */
    create: XOR<ownedcontractsCreateInput, ownedcontractsUncheckedCreateInput>
    /**
     * In case the ownedcontracts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ownedcontractsUpdateInput, ownedcontractsUncheckedUpdateInput>
  }


  /**
   * ownedcontracts delete
   */
  export type ownedcontractsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
    /**
     * Filter which ownedcontracts to delete.
     */
    where: ownedcontractsWhereUniqueInput
  }


  /**
   * ownedcontracts deleteMany
   */
  export type ownedcontractsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ownedcontracts to delete
     */
    where?: ownedcontractsWhereInput
  }


  /**
   * ownedcontracts without action
   */
  export type ownedcontractsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ownedcontracts
     */
    select?: ownedcontractsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownedcontractsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Audit_requestsScalarFieldEnum: {
    request_id: 'request_id',
    contract: 'contract',
    status: 'status',
    status_log: 'status_log',
    created_on: 'created_on',
    updated_on: 'updated_on'
  };

  export type Audit_requestsScalarFieldEnum = (typeof Audit_requestsScalarFieldEnum)[keyof typeof Audit_requestsScalarFieldEnum]


  export const BountiesScalarFieldEnum: {
    id: 'id',
    bounty_id: 'bounty_id',
    name: 'name',
    link: 'link',
    max_reward: 'max_reward',
    vault_tvl: 'vault_tvl',
    logo: 'logo',
    date: 'date',
    last_updated_date: 'last_updated_date',
    response_time_metric_enabled: 'response_time_metric_enabled',
    med_response_time: 'med_response_time',
    total_paid_metric_enabled: 'total_paid_metric_enabled',
    total_paid_amount: 'total_paid_amount',
    rating: 'rating',
    firm: 'firm',
    category_list: 'category_list',
    language_list: 'language_list',
    source_code_list: 'source_code_list',
    reference_list: 'reference_list'
  };

  export type BountiesScalarFieldEnum = (typeof BountiesScalarFieldEnum)[keyof typeof BountiesScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    price: 'price',
    title: 'title',
    description: 'description'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    address: 'address'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ListedcontractsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    contract: 'contract',
    description: 'description',
    code_hash: 'code_hash',
    code: 'code',
    address: 'address',
    user_id: 'user_id'
  };

  export type ListedcontractsScalarFieldEnum = (typeof ListedcontractsScalarFieldEnum)[keyof typeof ListedcontractsScalarFieldEnum]


  export const OwnedcontractsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contract_id: 'contract_id',
    user_id: 'user_id'
  };

  export type OwnedcontractsScalarFieldEnum = (typeof OwnedcontractsScalarFieldEnum)[keyof typeof OwnedcontractsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type audit_requestsWhereInput = {
    AND?: audit_requestsWhereInput | audit_requestsWhereInput[]
    OR?: audit_requestsWhereInput[]
    NOT?: audit_requestsWhereInput | audit_requestsWhereInput[]
    request_id?: IntFilter<"audit_requests"> | number
    contract?: StringFilter<"audit_requests"> | string
    status?: StringFilter<"audit_requests"> | string
    status_log?: StringNullableFilter<"audit_requests"> | string | null
    created_on?: DateTimeFilter<"audit_requests"> | Date | string
    updated_on?: DateTimeFilter<"audit_requests"> | Date | string
  }

  export type audit_requestsOrderByWithRelationInput = {
    request_id?: SortOrder
    contract?: SortOrder
    status?: SortOrder
    status_log?: SortOrderInput | SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type audit_requestsWhereUniqueInput = Prisma.AtLeast<{
    request_id?: number
    contract?: string
    AND?: audit_requestsWhereInput | audit_requestsWhereInput[]
    OR?: audit_requestsWhereInput[]
    NOT?: audit_requestsWhereInput | audit_requestsWhereInput[]
    status?: StringFilter<"audit_requests"> | string
    status_log?: StringNullableFilter<"audit_requests"> | string | null
    created_on?: DateTimeFilter<"audit_requests"> | Date | string
    updated_on?: DateTimeFilter<"audit_requests"> | Date | string
  }, "request_id" | "contract">

  export type audit_requestsOrderByWithAggregationInput = {
    request_id?: SortOrder
    contract?: SortOrder
    status?: SortOrder
    status_log?: SortOrderInput | SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
    _count?: audit_requestsCountOrderByAggregateInput
    _avg?: audit_requestsAvgOrderByAggregateInput
    _max?: audit_requestsMaxOrderByAggregateInput
    _min?: audit_requestsMinOrderByAggregateInput
    _sum?: audit_requestsSumOrderByAggregateInput
  }

  export type audit_requestsScalarWhereWithAggregatesInput = {
    AND?: audit_requestsScalarWhereWithAggregatesInput | audit_requestsScalarWhereWithAggregatesInput[]
    OR?: audit_requestsScalarWhereWithAggregatesInput[]
    NOT?: audit_requestsScalarWhereWithAggregatesInput | audit_requestsScalarWhereWithAggregatesInput[]
    request_id?: IntWithAggregatesFilter<"audit_requests"> | number
    contract?: StringWithAggregatesFilter<"audit_requests"> | string
    status?: StringWithAggregatesFilter<"audit_requests"> | string
    status_log?: StringNullableWithAggregatesFilter<"audit_requests"> | string | null
    created_on?: DateTimeWithAggregatesFilter<"audit_requests"> | Date | string
    updated_on?: DateTimeWithAggregatesFilter<"audit_requests"> | Date | string
  }

  export type bountiesWhereInput = {
    AND?: bountiesWhereInput | bountiesWhereInput[]
    OR?: bountiesWhereInput[]
    NOT?: bountiesWhereInput | bountiesWhereInput[]
    id?: IntFilter<"bounties"> | number
    bounty_id?: StringFilter<"bounties"> | string
    name?: StringFilter<"bounties"> | string
    link?: StringNullableFilter<"bounties"> | string | null
    max_reward?: IntNullableFilter<"bounties"> | number | null
    vault_tvl?: IntNullableFilter<"bounties"> | number | null
    logo?: StringNullableFilter<"bounties"> | string | null
    date?: DateTimeNullableFilter<"bounties"> | Date | string | null
    last_updated_date?: DateTimeNullableFilter<"bounties"> | Date | string | null
    response_time_metric_enabled?: BoolFilter<"bounties"> | boolean
    med_response_time?: IntNullableFilter<"bounties"> | number | null
    total_paid_metric_enabled?: BoolFilter<"bounties"> | boolean
    total_paid_amount?: IntNullableFilter<"bounties"> | number | null
    rating?: FloatNullableFilter<"bounties"> | number | null
    firm?: JsonFilter<"bounties">
    category_list?: StringNullableListFilter<"bounties">
    language_list?: StringNullableListFilter<"bounties">
    source_code_list?: StringNullableListFilter<"bounties">
    reference_list?: StringNullableListFilter<"bounties">
  }

  export type bountiesOrderByWithRelationInput = {
    id?: SortOrder
    bounty_id?: SortOrder
    name?: SortOrder
    link?: SortOrderInput | SortOrder
    max_reward?: SortOrderInput | SortOrder
    vault_tvl?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    last_updated_date?: SortOrderInput | SortOrder
    response_time_metric_enabled?: SortOrder
    med_response_time?: SortOrderInput | SortOrder
    total_paid_metric_enabled?: SortOrder
    total_paid_amount?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    firm?: SortOrder
    category_list?: SortOrder
    language_list?: SortOrder
    source_code_list?: SortOrder
    reference_list?: SortOrder
  }

  export type bountiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bountiesWhereInput | bountiesWhereInput[]
    OR?: bountiesWhereInput[]
    NOT?: bountiesWhereInput | bountiesWhereInput[]
    bounty_id?: StringFilter<"bounties"> | string
    name?: StringFilter<"bounties"> | string
    link?: StringNullableFilter<"bounties"> | string | null
    max_reward?: IntNullableFilter<"bounties"> | number | null
    vault_tvl?: IntNullableFilter<"bounties"> | number | null
    logo?: StringNullableFilter<"bounties"> | string | null
    date?: DateTimeNullableFilter<"bounties"> | Date | string | null
    last_updated_date?: DateTimeNullableFilter<"bounties"> | Date | string | null
    response_time_metric_enabled?: BoolFilter<"bounties"> | boolean
    med_response_time?: IntNullableFilter<"bounties"> | number | null
    total_paid_metric_enabled?: BoolFilter<"bounties"> | boolean
    total_paid_amount?: IntNullableFilter<"bounties"> | number | null
    rating?: FloatNullableFilter<"bounties"> | number | null
    firm?: JsonFilter<"bounties">
    category_list?: StringNullableListFilter<"bounties">
    language_list?: StringNullableListFilter<"bounties">
    source_code_list?: StringNullableListFilter<"bounties">
    reference_list?: StringNullableListFilter<"bounties">
  }, "id">

  export type bountiesOrderByWithAggregationInput = {
    id?: SortOrder
    bounty_id?: SortOrder
    name?: SortOrder
    link?: SortOrderInput | SortOrder
    max_reward?: SortOrderInput | SortOrder
    vault_tvl?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    last_updated_date?: SortOrderInput | SortOrder
    response_time_metric_enabled?: SortOrder
    med_response_time?: SortOrderInput | SortOrder
    total_paid_metric_enabled?: SortOrder
    total_paid_amount?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    firm?: SortOrder
    category_list?: SortOrder
    language_list?: SortOrder
    source_code_list?: SortOrder
    reference_list?: SortOrder
    _count?: bountiesCountOrderByAggregateInput
    _avg?: bountiesAvgOrderByAggregateInput
    _max?: bountiesMaxOrderByAggregateInput
    _min?: bountiesMinOrderByAggregateInput
    _sum?: bountiesSumOrderByAggregateInput
  }

  export type bountiesScalarWhereWithAggregatesInput = {
    AND?: bountiesScalarWhereWithAggregatesInput | bountiesScalarWhereWithAggregatesInput[]
    OR?: bountiesScalarWhereWithAggregatesInput[]
    NOT?: bountiesScalarWhereWithAggregatesInput | bountiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bounties"> | number
    bounty_id?: StringWithAggregatesFilter<"bounties"> | string
    name?: StringWithAggregatesFilter<"bounties"> | string
    link?: StringNullableWithAggregatesFilter<"bounties"> | string | null
    max_reward?: IntNullableWithAggregatesFilter<"bounties"> | number | null
    vault_tvl?: IntNullableWithAggregatesFilter<"bounties"> | number | null
    logo?: StringNullableWithAggregatesFilter<"bounties"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"bounties"> | Date | string | null
    last_updated_date?: DateTimeNullableWithAggregatesFilter<"bounties"> | Date | string | null
    response_time_metric_enabled?: BoolWithAggregatesFilter<"bounties"> | boolean
    med_response_time?: IntNullableWithAggregatesFilter<"bounties"> | number | null
    total_paid_metric_enabled?: BoolWithAggregatesFilter<"bounties"> | boolean
    total_paid_amount?: IntNullableWithAggregatesFilter<"bounties"> | number | null
    rating?: FloatNullableWithAggregatesFilter<"bounties"> | number | null
    firm?: JsonWithAggregatesFilter<"bounties">
    category_list?: StringNullableListFilter<"bounties">
    language_list?: StringNullableListFilter<"bounties">
    source_code_list?: StringNullableListFilter<"bounties">
    reference_list?: StringNullableListFilter<"bounties">
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: IntFilter<"Contract"> | number
    userId?: IntFilter<"Contract"> | number
    price?: IntFilter<"Contract"> | number
    title?: StringFilter<"Contract"> | string
    description?: StringFilter<"Contract"> | string
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    userId?: IntFilter<"Contract"> | number
    price?: IntFilter<"Contract"> | number
    title?: StringFilter<"Contract"> | string
    description?: StringFilter<"Contract"> | string
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    title?: SortOrder
    description?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contract"> | number
    userId?: IntWithAggregatesFilter<"Contract"> | number
    price?: IntWithAggregatesFilter<"Contract"> | number
    title?: StringWithAggregatesFilter<"Contract"> | string
    description?: StringWithAggregatesFilter<"Contract"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    address?: StringFilter<"users"> | string
    listedcontracts?: ListedcontractsListRelationFilter
    ownedcontracts?: OwnedcontractsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    listedcontracts?: listedcontractsOrderByRelationAggregateInput
    ownedcontracts?: ownedcontractsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    listedcontracts?: ListedcontractsListRelationFilter
    ownedcontracts?: OwnedcontractsListRelationFilter
  }, "id" | "id" | "address">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    address?: StringWithAggregatesFilter<"users"> | string
  }

  export type listedcontractsWhereInput = {
    AND?: listedcontractsWhereInput | listedcontractsWhereInput[]
    OR?: listedcontractsWhereInput[]
    NOT?: listedcontractsWhereInput | listedcontractsWhereInput[]
    id?: IntFilter<"listedcontracts"> | number
    name?: StringFilter<"listedcontracts"> | string
    price?: StringFilter<"listedcontracts"> | string
    contract?: StringFilter<"listedcontracts"> | string
    description?: StringFilter<"listedcontracts"> | string
    code_hash?: StringFilter<"listedcontracts"> | string
    code?: StringFilter<"listedcontracts"> | string
    address?: StringFilter<"listedcontracts"> | string
    user_id?: IntFilter<"listedcontracts"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type listedcontractsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    code_hash?: SortOrder
    code?: SortOrder
    address?: SortOrder
    user_id?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type listedcontractsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: listedcontractsWhereInput | listedcontractsWhereInput[]
    OR?: listedcontractsWhereInput[]
    NOT?: listedcontractsWhereInput | listedcontractsWhereInput[]
    name?: StringFilter<"listedcontracts"> | string
    price?: StringFilter<"listedcontracts"> | string
    contract?: StringFilter<"listedcontracts"> | string
    description?: StringFilter<"listedcontracts"> | string
    code_hash?: StringFilter<"listedcontracts"> | string
    code?: StringFilter<"listedcontracts"> | string
    address?: StringFilter<"listedcontracts"> | string
    user_id?: IntFilter<"listedcontracts"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }, "id" | "id">

  export type listedcontractsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    code_hash?: SortOrder
    code?: SortOrder
    address?: SortOrder
    user_id?: SortOrder
    _count?: listedcontractsCountOrderByAggregateInput
    _avg?: listedcontractsAvgOrderByAggregateInput
    _max?: listedcontractsMaxOrderByAggregateInput
    _min?: listedcontractsMinOrderByAggregateInput
    _sum?: listedcontractsSumOrderByAggregateInput
  }

  export type listedcontractsScalarWhereWithAggregatesInput = {
    AND?: listedcontractsScalarWhereWithAggregatesInput | listedcontractsScalarWhereWithAggregatesInput[]
    OR?: listedcontractsScalarWhereWithAggregatesInput[]
    NOT?: listedcontractsScalarWhereWithAggregatesInput | listedcontractsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"listedcontracts"> | number
    name?: StringWithAggregatesFilter<"listedcontracts"> | string
    price?: StringWithAggregatesFilter<"listedcontracts"> | string
    contract?: StringWithAggregatesFilter<"listedcontracts"> | string
    description?: StringWithAggregatesFilter<"listedcontracts"> | string
    code_hash?: StringWithAggregatesFilter<"listedcontracts"> | string
    code?: StringWithAggregatesFilter<"listedcontracts"> | string
    address?: StringWithAggregatesFilter<"listedcontracts"> | string
    user_id?: IntWithAggregatesFilter<"listedcontracts"> | number
  }

  export type ownedcontractsWhereInput = {
    AND?: ownedcontractsWhereInput | ownedcontractsWhereInput[]
    OR?: ownedcontractsWhereInput[]
    NOT?: ownedcontractsWhereInput | ownedcontractsWhereInput[]
    id?: IntFilter<"ownedcontracts"> | number
    name?: StringFilter<"ownedcontracts"> | string
    contract_id?: IntFilter<"ownedcontracts"> | number
    user_id?: IntFilter<"ownedcontracts"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type ownedcontractsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contract_id?: SortOrder
    user_id?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type ownedcontractsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_contract_id?: ownedcontractsUser_idContract_idCompoundUniqueInput
    AND?: ownedcontractsWhereInput | ownedcontractsWhereInput[]
    OR?: ownedcontractsWhereInput[]
    NOT?: ownedcontractsWhereInput | ownedcontractsWhereInput[]
    name?: StringFilter<"ownedcontracts"> | string
    contract_id?: IntFilter<"ownedcontracts"> | number
    user_id?: IntFilter<"ownedcontracts"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }, "id" | "id" | "user_id_contract_id">

  export type ownedcontractsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contract_id?: SortOrder
    user_id?: SortOrder
    _count?: ownedcontractsCountOrderByAggregateInput
    _avg?: ownedcontractsAvgOrderByAggregateInput
    _max?: ownedcontractsMaxOrderByAggregateInput
    _min?: ownedcontractsMinOrderByAggregateInput
    _sum?: ownedcontractsSumOrderByAggregateInput
  }

  export type ownedcontractsScalarWhereWithAggregatesInput = {
    AND?: ownedcontractsScalarWhereWithAggregatesInput | ownedcontractsScalarWhereWithAggregatesInput[]
    OR?: ownedcontractsScalarWhereWithAggregatesInput[]
    NOT?: ownedcontractsScalarWhereWithAggregatesInput | ownedcontractsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ownedcontracts"> | number
    name?: StringWithAggregatesFilter<"ownedcontracts"> | string
    contract_id?: IntWithAggregatesFilter<"ownedcontracts"> | number
    user_id?: IntWithAggregatesFilter<"ownedcontracts"> | number
  }

  export type audit_requestsCreateInput = {
    contract: string
    status: string
    status_log?: string | null
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type audit_requestsUncheckedCreateInput = {
    request_id?: number
    contract: string
    status: string
    status_log?: string | null
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type audit_requestsUpdateInput = {
    contract?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    status_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_requestsUncheckedUpdateInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    contract?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    status_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_requestsCreateManyInput = {
    request_id?: number
    contract: string
    status: string
    status_log?: string | null
    created_on?: Date | string
    updated_on?: Date | string
  }

  export type audit_requestsUpdateManyMutationInput = {
    contract?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    status_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_requestsUncheckedUpdateManyInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    contract?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    status_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bountiesCreateInput = {
    bounty_id: string
    name: string
    link?: string | null
    max_reward?: number | null
    vault_tvl?: number | null
    logo?: string | null
    date?: Date | string | null
    last_updated_date?: Date | string | null
    response_time_metric_enabled: boolean
    med_response_time?: number | null
    total_paid_metric_enabled: boolean
    total_paid_amount?: number | null
    rating?: number | null
    firm: JsonNullValueInput | InputJsonValue
    category_list?: bountiesCreatecategory_listInput | string[]
    language_list?: bountiesCreatelanguage_listInput | string[]
    source_code_list?: bountiesCreatesource_code_listInput | string[]
    reference_list?: bountiesCreatereference_listInput | string[]
  }

  export type bountiesUncheckedCreateInput = {
    id?: number
    bounty_id: string
    name: string
    link?: string | null
    max_reward?: number | null
    vault_tvl?: number | null
    logo?: string | null
    date?: Date | string | null
    last_updated_date?: Date | string | null
    response_time_metric_enabled: boolean
    med_response_time?: number | null
    total_paid_metric_enabled: boolean
    total_paid_amount?: number | null
    rating?: number | null
    firm: JsonNullValueInput | InputJsonValue
    category_list?: bountiesCreatecategory_listInput | string[]
    language_list?: bountiesCreatelanguage_listInput | string[]
    source_code_list?: bountiesCreatesource_code_listInput | string[]
    reference_list?: bountiesCreatereference_listInput | string[]
  }

  export type bountiesUpdateInput = {
    bounty_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    max_reward?: NullableIntFieldUpdateOperationsInput | number | null
    vault_tvl?: NullableIntFieldUpdateOperationsInput | number | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response_time_metric_enabled?: BoolFieldUpdateOperationsInput | boolean
    med_response_time?: NullableIntFieldUpdateOperationsInput | number | null
    total_paid_metric_enabled?: BoolFieldUpdateOperationsInput | boolean
    total_paid_amount?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    firm?: JsonNullValueInput | InputJsonValue
    category_list?: bountiesUpdatecategory_listInput | string[]
    language_list?: bountiesUpdatelanguage_listInput | string[]
    source_code_list?: bountiesUpdatesource_code_listInput | string[]
    reference_list?: bountiesUpdatereference_listInput | string[]
  }

  export type bountiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bounty_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    max_reward?: NullableIntFieldUpdateOperationsInput | number | null
    vault_tvl?: NullableIntFieldUpdateOperationsInput | number | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response_time_metric_enabled?: BoolFieldUpdateOperationsInput | boolean
    med_response_time?: NullableIntFieldUpdateOperationsInput | number | null
    total_paid_metric_enabled?: BoolFieldUpdateOperationsInput | boolean
    total_paid_amount?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    firm?: JsonNullValueInput | InputJsonValue
    category_list?: bountiesUpdatecategory_listInput | string[]
    language_list?: bountiesUpdatelanguage_listInput | string[]
    source_code_list?: bountiesUpdatesource_code_listInput | string[]
    reference_list?: bountiesUpdatereference_listInput | string[]
  }

  export type bountiesCreateManyInput = {
    id?: number
    bounty_id: string
    name: string
    link?: string | null
    max_reward?: number | null
    vault_tvl?: number | null
    logo?: string | null
    date?: Date | string | null
    last_updated_date?: Date | string | null
    response_time_metric_enabled: boolean
    med_response_time?: number | null
    total_paid_metric_enabled: boolean
    total_paid_amount?: number | null
    rating?: number | null
    firm: JsonNullValueInput | InputJsonValue
    category_list?: bountiesCreatecategory_listInput | string[]
    language_list?: bountiesCreatelanguage_listInput | string[]
    source_code_list?: bountiesCreatesource_code_listInput | string[]
    reference_list?: bountiesCreatereference_listInput | string[]
  }

  export type bountiesUpdateManyMutationInput = {
    bounty_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    max_reward?: NullableIntFieldUpdateOperationsInput | number | null
    vault_tvl?: NullableIntFieldUpdateOperationsInput | number | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response_time_metric_enabled?: BoolFieldUpdateOperationsInput | boolean
    med_response_time?: NullableIntFieldUpdateOperationsInput | number | null
    total_paid_metric_enabled?: BoolFieldUpdateOperationsInput | boolean
    total_paid_amount?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    firm?: JsonNullValueInput | InputJsonValue
    category_list?: bountiesUpdatecategory_listInput | string[]
    language_list?: bountiesUpdatelanguage_listInput | string[]
    source_code_list?: bountiesUpdatesource_code_listInput | string[]
    reference_list?: bountiesUpdatereference_listInput | string[]
  }

  export type bountiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bounty_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    max_reward?: NullableIntFieldUpdateOperationsInput | number | null
    vault_tvl?: NullableIntFieldUpdateOperationsInput | number | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response_time_metric_enabled?: BoolFieldUpdateOperationsInput | boolean
    med_response_time?: NullableIntFieldUpdateOperationsInput | number | null
    total_paid_metric_enabled?: BoolFieldUpdateOperationsInput | boolean
    total_paid_amount?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    firm?: JsonNullValueInput | InputJsonValue
    category_list?: bountiesUpdatecategory_listInput | string[]
    language_list?: bountiesUpdatelanguage_listInput | string[]
    source_code_list?: bountiesUpdatesource_code_listInput | string[]
    reference_list?: bountiesUpdatereference_listInput | string[]
  }

  export type ContractCreateInput = {
    userId: number
    price: number
    title: string
    description: string
  }

  export type ContractUncheckedCreateInput = {
    id?: number
    userId: number
    price: number
    title: string
    description: string
  }

  export type ContractUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ContractCreateManyInput = {
    id?: number
    userId: number
    price: number
    title: string
    description: string
  }

  export type ContractUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    address: string
    listedcontracts?: listedcontractsCreateNestedManyWithoutUserInput
    ownedcontracts?: ownedcontractsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    address: string
    listedcontracts?: listedcontractsUncheckedCreateNestedManyWithoutUserInput
    ownedcontracts?: ownedcontractsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    listedcontracts?: listedcontractsUpdateManyWithoutUserNestedInput
    ownedcontracts?: ownedcontractsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    listedcontracts?: listedcontractsUncheckedUpdateManyWithoutUserNestedInput
    ownedcontracts?: ownedcontractsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    address: string
  }

  export type usersUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type listedcontractsCreateInput = {
    name: string
    price: string
    contract: string
    description: string
    code_hash: string
    code: string
    address: string
    user: usersCreateNestedOneWithoutListedcontractsInput
  }

  export type listedcontractsUncheckedCreateInput = {
    id?: number
    name: string
    price: string
    contract: string
    description: string
    code_hash: string
    code: string
    address: string
    user_id: number
  }

  export type listedcontractsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code_hash?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutListedcontractsNestedInput
  }

  export type listedcontractsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code_hash?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type listedcontractsCreateManyInput = {
    id?: number
    name: string
    price: string
    contract: string
    description: string
    code_hash: string
    code: string
    address: string
    user_id: number
  }

  export type listedcontractsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code_hash?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type listedcontractsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code_hash?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ownedcontractsCreateInput = {
    name: string
    contract_id: number
    user: usersCreateNestedOneWithoutOwnedcontractsInput
  }

  export type ownedcontractsUncheckedCreateInput = {
    id?: number
    name: string
    contract_id: number
    user_id: number
  }

  export type ownedcontractsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    contract_id?: IntFieldUpdateOperationsInput | number
    user?: usersUpdateOneRequiredWithoutOwnedcontractsNestedInput
  }

  export type ownedcontractsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ownedcontractsCreateManyInput = {
    id?: number
    name: string
    contract_id: number
    user_id: number
  }

  export type ownedcontractsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    contract_id?: IntFieldUpdateOperationsInput | number
  }

  export type ownedcontractsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type audit_requestsCountOrderByAggregateInput = {
    request_id?: SortOrder
    contract?: SortOrder
    status?: SortOrder
    status_log?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type audit_requestsAvgOrderByAggregateInput = {
    request_id?: SortOrder
  }

  export type audit_requestsMaxOrderByAggregateInput = {
    request_id?: SortOrder
    contract?: SortOrder
    status?: SortOrder
    status_log?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type audit_requestsMinOrderByAggregateInput = {
    request_id?: SortOrder
    contract?: SortOrder
    status?: SortOrder
    status_log?: SortOrder
    created_on?: SortOrder
    updated_on?: SortOrder
  }

  export type audit_requestsSumOrderByAggregateInput = {
    request_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type bountiesCountOrderByAggregateInput = {
    id?: SortOrder
    bounty_id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    max_reward?: SortOrder
    vault_tvl?: SortOrder
    logo?: SortOrder
    date?: SortOrder
    last_updated_date?: SortOrder
    response_time_metric_enabled?: SortOrder
    med_response_time?: SortOrder
    total_paid_metric_enabled?: SortOrder
    total_paid_amount?: SortOrder
    rating?: SortOrder
    firm?: SortOrder
    category_list?: SortOrder
    language_list?: SortOrder
    source_code_list?: SortOrder
    reference_list?: SortOrder
  }

  export type bountiesAvgOrderByAggregateInput = {
    id?: SortOrder
    max_reward?: SortOrder
    vault_tvl?: SortOrder
    med_response_time?: SortOrder
    total_paid_amount?: SortOrder
    rating?: SortOrder
  }

  export type bountiesMaxOrderByAggregateInput = {
    id?: SortOrder
    bounty_id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    max_reward?: SortOrder
    vault_tvl?: SortOrder
    logo?: SortOrder
    date?: SortOrder
    last_updated_date?: SortOrder
    response_time_metric_enabled?: SortOrder
    med_response_time?: SortOrder
    total_paid_metric_enabled?: SortOrder
    total_paid_amount?: SortOrder
    rating?: SortOrder
  }

  export type bountiesMinOrderByAggregateInput = {
    id?: SortOrder
    bounty_id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    max_reward?: SortOrder
    vault_tvl?: SortOrder
    logo?: SortOrder
    date?: SortOrder
    last_updated_date?: SortOrder
    response_time_metric_enabled?: SortOrder
    med_response_time?: SortOrder
    total_paid_metric_enabled?: SortOrder
    total_paid_amount?: SortOrder
    rating?: SortOrder
  }

  export type bountiesSumOrderByAggregateInput = {
    id?: SortOrder
    max_reward?: SortOrder
    vault_tvl?: SortOrder
    med_response_time?: SortOrder
    total_paid_amount?: SortOrder
    rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type ListedcontractsListRelationFilter = {
    every?: listedcontractsWhereInput
    some?: listedcontractsWhereInput
    none?: listedcontractsWhereInput
  }

  export type OwnedcontractsListRelationFilter = {
    every?: ownedcontractsWhereInput
    some?: ownedcontractsWhereInput
    none?: ownedcontractsWhereInput
  }

  export type listedcontractsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ownedcontractsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type listedcontractsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    code_hash?: SortOrder
    code?: SortOrder
    address?: SortOrder
    user_id?: SortOrder
  }

  export type listedcontractsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type listedcontractsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    code_hash?: SortOrder
    code?: SortOrder
    address?: SortOrder
    user_id?: SortOrder
  }

  export type listedcontractsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    code_hash?: SortOrder
    code?: SortOrder
    address?: SortOrder
    user_id?: SortOrder
  }

  export type listedcontractsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ownedcontractsUser_idContract_idCompoundUniqueInput = {
    user_id: number
    contract_id: number
  }

  export type ownedcontractsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contract_id?: SortOrder
    user_id?: SortOrder
  }

  export type ownedcontractsAvgOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    user_id?: SortOrder
  }

  export type ownedcontractsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contract_id?: SortOrder
    user_id?: SortOrder
  }

  export type ownedcontractsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contract_id?: SortOrder
    user_id?: SortOrder
  }

  export type ownedcontractsSumOrderByAggregateInput = {
    id?: SortOrder
    contract_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bountiesCreatecategory_listInput = {
    set: string[]
  }

  export type bountiesCreatelanguage_listInput = {
    set: string[]
  }

  export type bountiesCreatesource_code_listInput = {
    set: string[]
  }

  export type bountiesCreatereference_listInput = {
    set: string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bountiesUpdatecategory_listInput = {
    set?: string[]
    push?: string | string[]
  }

  export type bountiesUpdatelanguage_listInput = {
    set?: string[]
    push?: string | string[]
  }

  export type bountiesUpdatesource_code_listInput = {
    set?: string[]
    push?: string | string[]
  }

  export type bountiesUpdatereference_listInput = {
    set?: string[]
    push?: string | string[]
  }

  export type listedcontractsCreateNestedManyWithoutUserInput = {
    create?: XOR<listedcontractsCreateWithoutUserInput, listedcontractsUncheckedCreateWithoutUserInput> | listedcontractsCreateWithoutUserInput[] | listedcontractsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: listedcontractsCreateOrConnectWithoutUserInput | listedcontractsCreateOrConnectWithoutUserInput[]
    createMany?: listedcontractsCreateManyUserInputEnvelope
    connect?: listedcontractsWhereUniqueInput | listedcontractsWhereUniqueInput[]
  }

  export type ownedcontractsCreateNestedManyWithoutUserInput = {
    create?: XOR<ownedcontractsCreateWithoutUserInput, ownedcontractsUncheckedCreateWithoutUserInput> | ownedcontractsCreateWithoutUserInput[] | ownedcontractsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ownedcontractsCreateOrConnectWithoutUserInput | ownedcontractsCreateOrConnectWithoutUserInput[]
    createMany?: ownedcontractsCreateManyUserInputEnvelope
    connect?: ownedcontractsWhereUniqueInput | ownedcontractsWhereUniqueInput[]
  }

  export type listedcontractsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<listedcontractsCreateWithoutUserInput, listedcontractsUncheckedCreateWithoutUserInput> | listedcontractsCreateWithoutUserInput[] | listedcontractsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: listedcontractsCreateOrConnectWithoutUserInput | listedcontractsCreateOrConnectWithoutUserInput[]
    createMany?: listedcontractsCreateManyUserInputEnvelope
    connect?: listedcontractsWhereUniqueInput | listedcontractsWhereUniqueInput[]
  }

  export type ownedcontractsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ownedcontractsCreateWithoutUserInput, ownedcontractsUncheckedCreateWithoutUserInput> | ownedcontractsCreateWithoutUserInput[] | ownedcontractsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ownedcontractsCreateOrConnectWithoutUserInput | ownedcontractsCreateOrConnectWithoutUserInput[]
    createMany?: ownedcontractsCreateManyUserInputEnvelope
    connect?: ownedcontractsWhereUniqueInput | ownedcontractsWhereUniqueInput[]
  }

  export type listedcontractsUpdateManyWithoutUserNestedInput = {
    create?: XOR<listedcontractsCreateWithoutUserInput, listedcontractsUncheckedCreateWithoutUserInput> | listedcontractsCreateWithoutUserInput[] | listedcontractsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: listedcontractsCreateOrConnectWithoutUserInput | listedcontractsCreateOrConnectWithoutUserInput[]
    upsert?: listedcontractsUpsertWithWhereUniqueWithoutUserInput | listedcontractsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: listedcontractsCreateManyUserInputEnvelope
    set?: listedcontractsWhereUniqueInput | listedcontractsWhereUniqueInput[]
    disconnect?: listedcontractsWhereUniqueInput | listedcontractsWhereUniqueInput[]
    delete?: listedcontractsWhereUniqueInput | listedcontractsWhereUniqueInput[]
    connect?: listedcontractsWhereUniqueInput | listedcontractsWhereUniqueInput[]
    update?: listedcontractsUpdateWithWhereUniqueWithoutUserInput | listedcontractsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: listedcontractsUpdateManyWithWhereWithoutUserInput | listedcontractsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: listedcontractsScalarWhereInput | listedcontractsScalarWhereInput[]
  }

  export type ownedcontractsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ownedcontractsCreateWithoutUserInput, ownedcontractsUncheckedCreateWithoutUserInput> | ownedcontractsCreateWithoutUserInput[] | ownedcontractsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ownedcontractsCreateOrConnectWithoutUserInput | ownedcontractsCreateOrConnectWithoutUserInput[]
    upsert?: ownedcontractsUpsertWithWhereUniqueWithoutUserInput | ownedcontractsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ownedcontractsCreateManyUserInputEnvelope
    set?: ownedcontractsWhereUniqueInput | ownedcontractsWhereUniqueInput[]
    disconnect?: ownedcontractsWhereUniqueInput | ownedcontractsWhereUniqueInput[]
    delete?: ownedcontractsWhereUniqueInput | ownedcontractsWhereUniqueInput[]
    connect?: ownedcontractsWhereUniqueInput | ownedcontractsWhereUniqueInput[]
    update?: ownedcontractsUpdateWithWhereUniqueWithoutUserInput | ownedcontractsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ownedcontractsUpdateManyWithWhereWithoutUserInput | ownedcontractsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ownedcontractsScalarWhereInput | ownedcontractsScalarWhereInput[]
  }

  export type listedcontractsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<listedcontractsCreateWithoutUserInput, listedcontractsUncheckedCreateWithoutUserInput> | listedcontractsCreateWithoutUserInput[] | listedcontractsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: listedcontractsCreateOrConnectWithoutUserInput | listedcontractsCreateOrConnectWithoutUserInput[]
    upsert?: listedcontractsUpsertWithWhereUniqueWithoutUserInput | listedcontractsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: listedcontractsCreateManyUserInputEnvelope
    set?: listedcontractsWhereUniqueInput | listedcontractsWhereUniqueInput[]
    disconnect?: listedcontractsWhereUniqueInput | listedcontractsWhereUniqueInput[]
    delete?: listedcontractsWhereUniqueInput | listedcontractsWhereUniqueInput[]
    connect?: listedcontractsWhereUniqueInput | listedcontractsWhereUniqueInput[]
    update?: listedcontractsUpdateWithWhereUniqueWithoutUserInput | listedcontractsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: listedcontractsUpdateManyWithWhereWithoutUserInput | listedcontractsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: listedcontractsScalarWhereInput | listedcontractsScalarWhereInput[]
  }

  export type ownedcontractsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ownedcontractsCreateWithoutUserInput, ownedcontractsUncheckedCreateWithoutUserInput> | ownedcontractsCreateWithoutUserInput[] | ownedcontractsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ownedcontractsCreateOrConnectWithoutUserInput | ownedcontractsCreateOrConnectWithoutUserInput[]
    upsert?: ownedcontractsUpsertWithWhereUniqueWithoutUserInput | ownedcontractsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ownedcontractsCreateManyUserInputEnvelope
    set?: ownedcontractsWhereUniqueInput | ownedcontractsWhereUniqueInput[]
    disconnect?: ownedcontractsWhereUniqueInput | ownedcontractsWhereUniqueInput[]
    delete?: ownedcontractsWhereUniqueInput | ownedcontractsWhereUniqueInput[]
    connect?: ownedcontractsWhereUniqueInput | ownedcontractsWhereUniqueInput[]
    update?: ownedcontractsUpdateWithWhereUniqueWithoutUserInput | ownedcontractsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ownedcontractsUpdateManyWithWhereWithoutUserInput | ownedcontractsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ownedcontractsScalarWhereInput | ownedcontractsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutListedcontractsInput = {
    create?: XOR<usersCreateWithoutListedcontractsInput, usersUncheckedCreateWithoutListedcontractsInput>
    connectOrCreate?: usersCreateOrConnectWithoutListedcontractsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutListedcontractsNestedInput = {
    create?: XOR<usersCreateWithoutListedcontractsInput, usersUncheckedCreateWithoutListedcontractsInput>
    connectOrCreate?: usersCreateOrConnectWithoutListedcontractsInput
    upsert?: usersUpsertWithoutListedcontractsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutListedcontractsInput, usersUpdateWithoutListedcontractsInput>, usersUncheckedUpdateWithoutListedcontractsInput>
  }

  export type usersCreateNestedOneWithoutOwnedcontractsInput = {
    create?: XOR<usersCreateWithoutOwnedcontractsInput, usersUncheckedCreateWithoutOwnedcontractsInput>
    connectOrCreate?: usersCreateOrConnectWithoutOwnedcontractsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutOwnedcontractsNestedInput = {
    create?: XOR<usersCreateWithoutOwnedcontractsInput, usersUncheckedCreateWithoutOwnedcontractsInput>
    connectOrCreate?: usersCreateOrConnectWithoutOwnedcontractsInput
    upsert?: usersUpsertWithoutOwnedcontractsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOwnedcontractsInput, usersUpdateWithoutOwnedcontractsInput>, usersUncheckedUpdateWithoutOwnedcontractsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type listedcontractsCreateWithoutUserInput = {
    name: string
    price: string
    contract: string
    description: string
    code_hash: string
    code: string
    address: string
  }

  export type listedcontractsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    price: string
    contract: string
    description: string
    code_hash: string
    code: string
    address: string
  }

  export type listedcontractsCreateOrConnectWithoutUserInput = {
    where: listedcontractsWhereUniqueInput
    create: XOR<listedcontractsCreateWithoutUserInput, listedcontractsUncheckedCreateWithoutUserInput>
  }

  export type listedcontractsCreateManyUserInputEnvelope = {
    data: listedcontractsCreateManyUserInput | listedcontractsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ownedcontractsCreateWithoutUserInput = {
    name: string
    contract_id: number
  }

  export type ownedcontractsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    contract_id: number
  }

  export type ownedcontractsCreateOrConnectWithoutUserInput = {
    where: ownedcontractsWhereUniqueInput
    create: XOR<ownedcontractsCreateWithoutUserInput, ownedcontractsUncheckedCreateWithoutUserInput>
  }

  export type ownedcontractsCreateManyUserInputEnvelope = {
    data: ownedcontractsCreateManyUserInput | ownedcontractsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type listedcontractsUpsertWithWhereUniqueWithoutUserInput = {
    where: listedcontractsWhereUniqueInput
    update: XOR<listedcontractsUpdateWithoutUserInput, listedcontractsUncheckedUpdateWithoutUserInput>
    create: XOR<listedcontractsCreateWithoutUserInput, listedcontractsUncheckedCreateWithoutUserInput>
  }

  export type listedcontractsUpdateWithWhereUniqueWithoutUserInput = {
    where: listedcontractsWhereUniqueInput
    data: XOR<listedcontractsUpdateWithoutUserInput, listedcontractsUncheckedUpdateWithoutUserInput>
  }

  export type listedcontractsUpdateManyWithWhereWithoutUserInput = {
    where: listedcontractsScalarWhereInput
    data: XOR<listedcontractsUpdateManyMutationInput, listedcontractsUncheckedUpdateManyWithoutUserInput>
  }

  export type listedcontractsScalarWhereInput = {
    AND?: listedcontractsScalarWhereInput | listedcontractsScalarWhereInput[]
    OR?: listedcontractsScalarWhereInput[]
    NOT?: listedcontractsScalarWhereInput | listedcontractsScalarWhereInput[]
    id?: IntFilter<"listedcontracts"> | number
    name?: StringFilter<"listedcontracts"> | string
    price?: StringFilter<"listedcontracts"> | string
    contract?: StringFilter<"listedcontracts"> | string
    description?: StringFilter<"listedcontracts"> | string
    code_hash?: StringFilter<"listedcontracts"> | string
    code?: StringFilter<"listedcontracts"> | string
    address?: StringFilter<"listedcontracts"> | string
    user_id?: IntFilter<"listedcontracts"> | number
  }

  export type ownedcontractsUpsertWithWhereUniqueWithoutUserInput = {
    where: ownedcontractsWhereUniqueInput
    update: XOR<ownedcontractsUpdateWithoutUserInput, ownedcontractsUncheckedUpdateWithoutUserInput>
    create: XOR<ownedcontractsCreateWithoutUserInput, ownedcontractsUncheckedCreateWithoutUserInput>
  }

  export type ownedcontractsUpdateWithWhereUniqueWithoutUserInput = {
    where: ownedcontractsWhereUniqueInput
    data: XOR<ownedcontractsUpdateWithoutUserInput, ownedcontractsUncheckedUpdateWithoutUserInput>
  }

  export type ownedcontractsUpdateManyWithWhereWithoutUserInput = {
    where: ownedcontractsScalarWhereInput
    data: XOR<ownedcontractsUpdateManyMutationInput, ownedcontractsUncheckedUpdateManyWithoutUserInput>
  }

  export type ownedcontractsScalarWhereInput = {
    AND?: ownedcontractsScalarWhereInput | ownedcontractsScalarWhereInput[]
    OR?: ownedcontractsScalarWhereInput[]
    NOT?: ownedcontractsScalarWhereInput | ownedcontractsScalarWhereInput[]
    id?: IntFilter<"ownedcontracts"> | number
    name?: StringFilter<"ownedcontracts"> | string
    contract_id?: IntFilter<"ownedcontracts"> | number
    user_id?: IntFilter<"ownedcontracts"> | number
  }

  export type usersCreateWithoutListedcontractsInput = {
    address: string
    ownedcontracts?: ownedcontractsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutListedcontractsInput = {
    id?: number
    address: string
    ownedcontracts?: ownedcontractsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutListedcontractsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutListedcontractsInput, usersUncheckedCreateWithoutListedcontractsInput>
  }

  export type usersUpsertWithoutListedcontractsInput = {
    update: XOR<usersUpdateWithoutListedcontractsInput, usersUncheckedUpdateWithoutListedcontractsInput>
    create: XOR<usersCreateWithoutListedcontractsInput, usersUncheckedCreateWithoutListedcontractsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutListedcontractsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutListedcontractsInput, usersUncheckedUpdateWithoutListedcontractsInput>
  }

  export type usersUpdateWithoutListedcontractsInput = {
    address?: StringFieldUpdateOperationsInput | string
    ownedcontracts?: ownedcontractsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutListedcontractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    ownedcontracts?: ownedcontractsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutOwnedcontractsInput = {
    address: string
    listedcontracts?: listedcontractsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOwnedcontractsInput = {
    id?: number
    address: string
    listedcontracts?: listedcontractsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOwnedcontractsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOwnedcontractsInput, usersUncheckedCreateWithoutOwnedcontractsInput>
  }

  export type usersUpsertWithoutOwnedcontractsInput = {
    update: XOR<usersUpdateWithoutOwnedcontractsInput, usersUncheckedUpdateWithoutOwnedcontractsInput>
    create: XOR<usersCreateWithoutOwnedcontractsInput, usersUncheckedCreateWithoutOwnedcontractsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOwnedcontractsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOwnedcontractsInput, usersUncheckedUpdateWithoutOwnedcontractsInput>
  }

  export type usersUpdateWithoutOwnedcontractsInput = {
    address?: StringFieldUpdateOperationsInput | string
    listedcontracts?: listedcontractsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOwnedcontractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    listedcontracts?: listedcontractsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type listedcontractsCreateManyUserInput = {
    id?: number
    name: string
    price: string
    contract: string
    description: string
    code_hash: string
    code: string
    address: string
  }

  export type ownedcontractsCreateManyUserInput = {
    id?: number
    name: string
    contract_id: number
  }

  export type listedcontractsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code_hash?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type listedcontractsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code_hash?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type listedcontractsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code_hash?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ownedcontractsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    contract_id?: IntFieldUpdateOperationsInput | number
  }

  export type ownedcontractsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_id?: IntFieldUpdateOperationsInput | number
  }

  export type ownedcontractsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use audit_requestsDefaultArgs instead
     */
    export type audit_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = audit_requestsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use bountiesDefaultArgs instead
     */
    export type bountiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bountiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractDefaultArgs instead
     */
    export type ContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use listedcontractsDefaultArgs instead
     */
    export type listedcontractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = listedcontractsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ownedcontractsDefaultArgs instead
     */
    export type ownedcontractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ownedcontractsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}