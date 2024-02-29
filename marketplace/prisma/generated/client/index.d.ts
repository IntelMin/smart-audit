
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SellContract
 * 
 */
export type SellContract = $Result.DefaultSelection<Prisma.$SellContractPayload>
/**
 * Model BuyContract
 * 
 */
export type BuyContract = $Result.DefaultSelection<Prisma.$BuyContractPayload>

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.sellContract`: Exposes CRUD operations for the **SellContract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SellContracts
    * const sellContracts = await prisma.sellContract.findMany()
    * ```
    */
  get sellContract(): Prisma.SellContractDelegate<ExtArgs>;

  /**
   * `prisma.buyContract`: Exposes CRUD operations for the **BuyContract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BuyContracts
    * const buyContracts = await prisma.buyContract.findMany()
    * ```
    */
  get buyContract(): Prisma.BuyContractDelegate<ExtArgs>;
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
    User: 'User',
    SellContract: 'SellContract',
    BuyContract: 'BuyContract'
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
      modelProps: 'audit_requests' | 'bounties' | 'contract' | 'user' | 'sellContract' | 'buyContract'
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
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SellContract: {
        payload: Prisma.$SellContractPayload<ExtArgs>
        fields: Prisma.SellContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellContractFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellContractFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellContractPayload>
          }
          findFirst: {
            args: Prisma.SellContractFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellContractFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellContractPayload>
          }
          findMany: {
            args: Prisma.SellContractFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellContractPayload>[]
          }
          create: {
            args: Prisma.SellContractCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellContractPayload>
          }
          createMany: {
            args: Prisma.SellContractCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SellContractDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellContractPayload>
          }
          update: {
            args: Prisma.SellContractUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellContractPayload>
          }
          deleteMany: {
            args: Prisma.SellContractDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SellContractUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SellContractUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SellContractPayload>
          }
          aggregate: {
            args: Prisma.SellContractAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSellContract>
          }
          groupBy: {
            args: Prisma.SellContractGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SellContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellContractCountArgs<ExtArgs>,
            result: $Utils.Optional<SellContractCountAggregateOutputType> | number
          }
        }
      }
      BuyContract: {
        payload: Prisma.$BuyContractPayload<ExtArgs>
        fields: Prisma.BuyContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuyContractFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuyContractFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyContractPayload>
          }
          findFirst: {
            args: Prisma.BuyContractFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuyContractFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyContractPayload>
          }
          findMany: {
            args: Prisma.BuyContractFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyContractPayload>[]
          }
          create: {
            args: Prisma.BuyContractCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyContractPayload>
          }
          createMany: {
            args: Prisma.BuyContractCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BuyContractDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyContractPayload>
          }
          update: {
            args: Prisma.BuyContractUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyContractPayload>
          }
          deleteMany: {
            args: Prisma.BuyContractDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BuyContractUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BuyContractUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyContractPayload>
          }
          aggregate: {
            args: Prisma.BuyContractAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBuyContract>
          }
          groupBy: {
            args: Prisma.BuyContractGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BuyContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuyContractCountArgs<ExtArgs>,
            result: $Utils.Optional<BuyContractCountAggregateOutputType> | number
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    contract: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    contract: number[]
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    wallet: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    wallet: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    wallet: number
    contract: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    contract?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    contract?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    wallet?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    wallet?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    wallet?: true
    contract?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    wallet: string
    contract: number[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallet?: boolean
    contract?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    wallet?: boolean
    contract?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      wallet: string
      contract: number[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly wallet: FieldRef<"User", 'String'>
    readonly contract: FieldRef<"User", 'Int[]'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model SellContract
   */

  export type AggregateSellContract = {
    _count: SellContractCountAggregateOutputType | null
    _avg: SellContractAvgAggregateOutputType | null
    _sum: SellContractSumAggregateOutputType | null
    _min: SellContractMinAggregateOutputType | null
    _max: SellContractMaxAggregateOutputType | null
  }

  export type SellContractAvgAggregateOutputType = {
    id: number | null
  }

  export type SellContractSumAggregateOutputType = {
    id: number | null
  }

  export type SellContractMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: string | null
    contract: string | null
    description: string | null
    code: string | null
    address: string | null
  }

  export type SellContractMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: string | null
    contract: string | null
    description: string | null
    code: string | null
    address: string | null
  }

  export type SellContractCountAggregateOutputType = {
    id: number
    name: number
    price: number
    contract: number
    description: number
    code: number
    address: number
    _all: number
  }


  export type SellContractAvgAggregateInputType = {
    id?: true
  }

  export type SellContractSumAggregateInputType = {
    id?: true
  }

  export type SellContractMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    contract?: true
    description?: true
    code?: true
    address?: true
  }

  export type SellContractMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    contract?: true
    description?: true
    code?: true
    address?: true
  }

  export type SellContractCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    contract?: true
    description?: true
    code?: true
    address?: true
    _all?: true
  }

  export type SellContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellContract to aggregate.
     */
    where?: SellContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellContracts to fetch.
     */
    orderBy?: SellContractOrderByWithRelationInput | SellContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SellContracts
    **/
    _count?: true | SellContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellContractMaxAggregateInputType
  }

  export type GetSellContractAggregateType<T extends SellContractAggregateArgs> = {
        [P in keyof T & keyof AggregateSellContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellContract[P]>
      : GetScalarType<T[P], AggregateSellContract[P]>
  }




  export type SellContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellContractWhereInput
    orderBy?: SellContractOrderByWithAggregationInput | SellContractOrderByWithAggregationInput[]
    by: SellContractScalarFieldEnum[] | SellContractScalarFieldEnum
    having?: SellContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellContractCountAggregateInputType | true
    _avg?: SellContractAvgAggregateInputType
    _sum?: SellContractSumAggregateInputType
    _min?: SellContractMinAggregateInputType
    _max?: SellContractMaxAggregateInputType
  }

  export type SellContractGroupByOutputType = {
    id: number
    name: string
    price: string
    contract: string
    description: string
    code: string
    address: string
    _count: SellContractCountAggregateOutputType | null
    _avg: SellContractAvgAggregateOutputType | null
    _sum: SellContractSumAggregateOutputType | null
    _min: SellContractMinAggregateOutputType | null
    _max: SellContractMaxAggregateOutputType | null
  }

  type GetSellContractGroupByPayload<T extends SellContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellContractGroupByOutputType[P]>
            : GetScalarType<T[P], SellContractGroupByOutputType[P]>
        }
      >
    >


  export type SellContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    contract?: boolean
    description?: boolean
    code?: boolean
    address?: boolean
  }, ExtArgs["result"]["sellContract"]>

  export type SellContractSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    contract?: boolean
    description?: boolean
    code?: boolean
    address?: boolean
  }


  export type $SellContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SellContract"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: string
      contract: string
      description: string
      code: string
      address: string
    }, ExtArgs["result"]["sellContract"]>
    composites: {}
  }


  type SellContractGetPayload<S extends boolean | null | undefined | SellContractDefaultArgs> = $Result.GetResult<Prisma.$SellContractPayload, S>

  type SellContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SellContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SellContractCountAggregateInputType | true
    }

  export interface SellContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SellContract'], meta: { name: 'SellContract' } }
    /**
     * Find zero or one SellContract that matches the filter.
     * @param {SellContractFindUniqueArgs} args - Arguments to find a SellContract
     * @example
     * // Get one SellContract
     * const sellContract = await prisma.sellContract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SellContractFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SellContractFindUniqueArgs<ExtArgs>>
    ): Prisma__SellContractClient<$Result.GetResult<Prisma.$SellContractPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SellContract that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SellContractFindUniqueOrThrowArgs} args - Arguments to find a SellContract
     * @example
     * // Get one SellContract
     * const sellContract = await prisma.sellContract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SellContractFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SellContractFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SellContractClient<$Result.GetResult<Prisma.$SellContractPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SellContract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellContractFindFirstArgs} args - Arguments to find a SellContract
     * @example
     * // Get one SellContract
     * const sellContract = await prisma.sellContract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SellContractFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SellContractFindFirstArgs<ExtArgs>>
    ): Prisma__SellContractClient<$Result.GetResult<Prisma.$SellContractPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SellContract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellContractFindFirstOrThrowArgs} args - Arguments to find a SellContract
     * @example
     * // Get one SellContract
     * const sellContract = await prisma.sellContract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SellContractFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SellContractFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SellContractClient<$Result.GetResult<Prisma.$SellContractPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SellContracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellContractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SellContracts
     * const sellContracts = await prisma.sellContract.findMany()
     * 
     * // Get first 10 SellContracts
     * const sellContracts = await prisma.sellContract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellContractWithIdOnly = await prisma.sellContract.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SellContractFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SellContractFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellContractPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SellContract.
     * @param {SellContractCreateArgs} args - Arguments to create a SellContract.
     * @example
     * // Create one SellContract
     * const SellContract = await prisma.sellContract.create({
     *   data: {
     *     // ... data to create a SellContract
     *   }
     * })
     * 
    **/
    create<T extends SellContractCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SellContractCreateArgs<ExtArgs>>
    ): Prisma__SellContractClient<$Result.GetResult<Prisma.$SellContractPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SellContracts.
     *     @param {SellContractCreateManyArgs} args - Arguments to create many SellContracts.
     *     @example
     *     // Create many SellContracts
     *     const sellContract = await prisma.sellContract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SellContractCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SellContractCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SellContract.
     * @param {SellContractDeleteArgs} args - Arguments to delete one SellContract.
     * @example
     * // Delete one SellContract
     * const SellContract = await prisma.sellContract.delete({
     *   where: {
     *     // ... filter to delete one SellContract
     *   }
     * })
     * 
    **/
    delete<T extends SellContractDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SellContractDeleteArgs<ExtArgs>>
    ): Prisma__SellContractClient<$Result.GetResult<Prisma.$SellContractPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SellContract.
     * @param {SellContractUpdateArgs} args - Arguments to update one SellContract.
     * @example
     * // Update one SellContract
     * const sellContract = await prisma.sellContract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SellContractUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SellContractUpdateArgs<ExtArgs>>
    ): Prisma__SellContractClient<$Result.GetResult<Prisma.$SellContractPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SellContracts.
     * @param {SellContractDeleteManyArgs} args - Arguments to filter SellContracts to delete.
     * @example
     * // Delete a few SellContracts
     * const { count } = await prisma.sellContract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SellContractDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SellContractDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SellContracts
     * const sellContract = await prisma.sellContract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SellContractUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SellContractUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SellContract.
     * @param {SellContractUpsertArgs} args - Arguments to update or create a SellContract.
     * @example
     * // Update or create a SellContract
     * const sellContract = await prisma.sellContract.upsert({
     *   create: {
     *     // ... data to create a SellContract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SellContract we want to update
     *   }
     * })
    **/
    upsert<T extends SellContractUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SellContractUpsertArgs<ExtArgs>>
    ): Prisma__SellContractClient<$Result.GetResult<Prisma.$SellContractPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SellContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellContractCountArgs} args - Arguments to filter SellContracts to count.
     * @example
     * // Count the number of SellContracts
     * const count = await prisma.sellContract.count({
     *   where: {
     *     // ... the filter for the SellContracts we want to count
     *   }
     * })
    **/
    count<T extends SellContractCountArgs>(
      args?: Subset<T, SellContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SellContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellContractAggregateArgs>(args: Subset<T, SellContractAggregateArgs>): Prisma.PrismaPromise<GetSellContractAggregateType<T>>

    /**
     * Group by SellContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellContractGroupByArgs} args - Group by arguments.
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
      T extends SellContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellContractGroupByArgs['orderBy'] }
        : { orderBy?: SellContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SellContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SellContract model
   */
  readonly fields: SellContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SellContract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SellContract model
   */ 
  interface SellContractFieldRefs {
    readonly id: FieldRef<"SellContract", 'Int'>
    readonly name: FieldRef<"SellContract", 'String'>
    readonly price: FieldRef<"SellContract", 'String'>
    readonly contract: FieldRef<"SellContract", 'String'>
    readonly description: FieldRef<"SellContract", 'String'>
    readonly code: FieldRef<"SellContract", 'String'>
    readonly address: FieldRef<"SellContract", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SellContract findUnique
   */
  export type SellContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellContract
     */
    select?: SellContractSelect<ExtArgs> | null
    /**
     * Filter, which SellContract to fetch.
     */
    where: SellContractWhereUniqueInput
  }


  /**
   * SellContract findUniqueOrThrow
   */
  export type SellContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellContract
     */
    select?: SellContractSelect<ExtArgs> | null
    /**
     * Filter, which SellContract to fetch.
     */
    where: SellContractWhereUniqueInput
  }


  /**
   * SellContract findFirst
   */
  export type SellContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellContract
     */
    select?: SellContractSelect<ExtArgs> | null
    /**
     * Filter, which SellContract to fetch.
     */
    where?: SellContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellContracts to fetch.
     */
    orderBy?: SellContractOrderByWithRelationInput | SellContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellContracts.
     */
    cursor?: SellContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellContracts.
     */
    distinct?: SellContractScalarFieldEnum | SellContractScalarFieldEnum[]
  }


  /**
   * SellContract findFirstOrThrow
   */
  export type SellContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellContract
     */
    select?: SellContractSelect<ExtArgs> | null
    /**
     * Filter, which SellContract to fetch.
     */
    where?: SellContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellContracts to fetch.
     */
    orderBy?: SellContractOrderByWithRelationInput | SellContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellContracts.
     */
    cursor?: SellContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellContracts.
     */
    distinct?: SellContractScalarFieldEnum | SellContractScalarFieldEnum[]
  }


  /**
   * SellContract findMany
   */
  export type SellContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellContract
     */
    select?: SellContractSelect<ExtArgs> | null
    /**
     * Filter, which SellContracts to fetch.
     */
    where?: SellContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellContracts to fetch.
     */
    orderBy?: SellContractOrderByWithRelationInput | SellContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SellContracts.
     */
    cursor?: SellContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellContracts.
     */
    skip?: number
    distinct?: SellContractScalarFieldEnum | SellContractScalarFieldEnum[]
  }


  /**
   * SellContract create
   */
  export type SellContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellContract
     */
    select?: SellContractSelect<ExtArgs> | null
    /**
     * The data needed to create a SellContract.
     */
    data: XOR<SellContractCreateInput, SellContractUncheckedCreateInput>
  }


  /**
   * SellContract createMany
   */
  export type SellContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SellContracts.
     */
    data: SellContractCreateManyInput | SellContractCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SellContract update
   */
  export type SellContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellContract
     */
    select?: SellContractSelect<ExtArgs> | null
    /**
     * The data needed to update a SellContract.
     */
    data: XOR<SellContractUpdateInput, SellContractUncheckedUpdateInput>
    /**
     * Choose, which SellContract to update.
     */
    where: SellContractWhereUniqueInput
  }


  /**
   * SellContract updateMany
   */
  export type SellContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SellContracts.
     */
    data: XOR<SellContractUpdateManyMutationInput, SellContractUncheckedUpdateManyInput>
    /**
     * Filter which SellContracts to update
     */
    where?: SellContractWhereInput
  }


  /**
   * SellContract upsert
   */
  export type SellContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellContract
     */
    select?: SellContractSelect<ExtArgs> | null
    /**
     * The filter to search for the SellContract to update in case it exists.
     */
    where: SellContractWhereUniqueInput
    /**
     * In case the SellContract found by the `where` argument doesn't exist, create a new SellContract with this data.
     */
    create: XOR<SellContractCreateInput, SellContractUncheckedCreateInput>
    /**
     * In case the SellContract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellContractUpdateInput, SellContractUncheckedUpdateInput>
  }


  /**
   * SellContract delete
   */
  export type SellContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellContract
     */
    select?: SellContractSelect<ExtArgs> | null
    /**
     * Filter which SellContract to delete.
     */
    where: SellContractWhereUniqueInput
  }


  /**
   * SellContract deleteMany
   */
  export type SellContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellContracts to delete
     */
    where?: SellContractWhereInput
  }


  /**
   * SellContract without action
   */
  export type SellContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellContract
     */
    select?: SellContractSelect<ExtArgs> | null
  }



  /**
   * Model BuyContract
   */

  export type AggregateBuyContract = {
    _count: BuyContractCountAggregateOutputType | null
    _avg: BuyContractAvgAggregateOutputType | null
    _sum: BuyContractSumAggregateOutputType | null
    _min: BuyContractMinAggregateOutputType | null
    _max: BuyContractMaxAggregateOutputType | null
  }

  export type BuyContractAvgAggregateOutputType = {
    id: number | null
  }

  export type BuyContractSumAggregateOutputType = {
    id: number | null
  }

  export type BuyContractMinAggregateOutputType = {
    id: number | null
    contractInfo: string | null
  }

  export type BuyContractMaxAggregateOutputType = {
    id: number | null
    contractInfo: string | null
  }

  export type BuyContractCountAggregateOutputType = {
    id: number
    contractInfo: number
    _all: number
  }


  export type BuyContractAvgAggregateInputType = {
    id?: true
  }

  export type BuyContractSumAggregateInputType = {
    id?: true
  }

  export type BuyContractMinAggregateInputType = {
    id?: true
    contractInfo?: true
  }

  export type BuyContractMaxAggregateInputType = {
    id?: true
    contractInfo?: true
  }

  export type BuyContractCountAggregateInputType = {
    id?: true
    contractInfo?: true
    _all?: true
  }

  export type BuyContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuyContract to aggregate.
     */
    where?: BuyContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyContracts to fetch.
     */
    orderBy?: BuyContractOrderByWithRelationInput | BuyContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuyContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BuyContracts
    **/
    _count?: true | BuyContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuyContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuyContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuyContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuyContractMaxAggregateInputType
  }

  export type GetBuyContractAggregateType<T extends BuyContractAggregateArgs> = {
        [P in keyof T & keyof AggregateBuyContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuyContract[P]>
      : GetScalarType<T[P], AggregateBuyContract[P]>
  }




  export type BuyContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuyContractWhereInput
    orderBy?: BuyContractOrderByWithAggregationInput | BuyContractOrderByWithAggregationInput[]
    by: BuyContractScalarFieldEnum[] | BuyContractScalarFieldEnum
    having?: BuyContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuyContractCountAggregateInputType | true
    _avg?: BuyContractAvgAggregateInputType
    _sum?: BuyContractSumAggregateInputType
    _min?: BuyContractMinAggregateInputType
    _max?: BuyContractMaxAggregateInputType
  }

  export type BuyContractGroupByOutputType = {
    id: number
    contractInfo: string
    _count: BuyContractCountAggregateOutputType | null
    _avg: BuyContractAvgAggregateOutputType | null
    _sum: BuyContractSumAggregateOutputType | null
    _min: BuyContractMinAggregateOutputType | null
    _max: BuyContractMaxAggregateOutputType | null
  }

  type GetBuyContractGroupByPayload<T extends BuyContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuyContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuyContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuyContractGroupByOutputType[P]>
            : GetScalarType<T[P], BuyContractGroupByOutputType[P]>
        }
      >
    >


  export type BuyContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractInfo?: boolean
  }, ExtArgs["result"]["buyContract"]>

  export type BuyContractSelectScalar = {
    id?: boolean
    contractInfo?: boolean
  }


  export type $BuyContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BuyContract"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contractInfo: string
    }, ExtArgs["result"]["buyContract"]>
    composites: {}
  }


  type BuyContractGetPayload<S extends boolean | null | undefined | BuyContractDefaultArgs> = $Result.GetResult<Prisma.$BuyContractPayload, S>

  type BuyContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BuyContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BuyContractCountAggregateInputType | true
    }

  export interface BuyContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BuyContract'], meta: { name: 'BuyContract' } }
    /**
     * Find zero or one BuyContract that matches the filter.
     * @param {BuyContractFindUniqueArgs} args - Arguments to find a BuyContract
     * @example
     * // Get one BuyContract
     * const buyContract = await prisma.buyContract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BuyContractFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BuyContractFindUniqueArgs<ExtArgs>>
    ): Prisma__BuyContractClient<$Result.GetResult<Prisma.$BuyContractPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BuyContract that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BuyContractFindUniqueOrThrowArgs} args - Arguments to find a BuyContract
     * @example
     * // Get one BuyContract
     * const buyContract = await prisma.buyContract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BuyContractFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyContractFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BuyContractClient<$Result.GetResult<Prisma.$BuyContractPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BuyContract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyContractFindFirstArgs} args - Arguments to find a BuyContract
     * @example
     * // Get one BuyContract
     * const buyContract = await prisma.buyContract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BuyContractFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyContractFindFirstArgs<ExtArgs>>
    ): Prisma__BuyContractClient<$Result.GetResult<Prisma.$BuyContractPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BuyContract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyContractFindFirstOrThrowArgs} args - Arguments to find a BuyContract
     * @example
     * // Get one BuyContract
     * const buyContract = await prisma.buyContract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BuyContractFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyContractFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BuyContractClient<$Result.GetResult<Prisma.$BuyContractPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BuyContracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyContractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BuyContracts
     * const buyContracts = await prisma.buyContract.findMany()
     * 
     * // Get first 10 BuyContracts
     * const buyContracts = await prisma.buyContract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buyContractWithIdOnly = await prisma.buyContract.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BuyContractFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyContractFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyContractPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BuyContract.
     * @param {BuyContractCreateArgs} args - Arguments to create a BuyContract.
     * @example
     * // Create one BuyContract
     * const BuyContract = await prisma.buyContract.create({
     *   data: {
     *     // ... data to create a BuyContract
     *   }
     * })
     * 
    **/
    create<T extends BuyContractCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BuyContractCreateArgs<ExtArgs>>
    ): Prisma__BuyContractClient<$Result.GetResult<Prisma.$BuyContractPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BuyContracts.
     *     @param {BuyContractCreateManyArgs} args - Arguments to create many BuyContracts.
     *     @example
     *     // Create many BuyContracts
     *     const buyContract = await prisma.buyContract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BuyContractCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyContractCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BuyContract.
     * @param {BuyContractDeleteArgs} args - Arguments to delete one BuyContract.
     * @example
     * // Delete one BuyContract
     * const BuyContract = await prisma.buyContract.delete({
     *   where: {
     *     // ... filter to delete one BuyContract
     *   }
     * })
     * 
    **/
    delete<T extends BuyContractDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BuyContractDeleteArgs<ExtArgs>>
    ): Prisma__BuyContractClient<$Result.GetResult<Prisma.$BuyContractPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BuyContract.
     * @param {BuyContractUpdateArgs} args - Arguments to update one BuyContract.
     * @example
     * // Update one BuyContract
     * const buyContract = await prisma.buyContract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BuyContractUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BuyContractUpdateArgs<ExtArgs>>
    ): Prisma__BuyContractClient<$Result.GetResult<Prisma.$BuyContractPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BuyContracts.
     * @param {BuyContractDeleteManyArgs} args - Arguments to filter BuyContracts to delete.
     * @example
     * // Delete a few BuyContracts
     * const { count } = await prisma.buyContract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BuyContractDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyContractDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuyContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BuyContracts
     * const buyContract = await prisma.buyContract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BuyContractUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BuyContractUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BuyContract.
     * @param {BuyContractUpsertArgs} args - Arguments to update or create a BuyContract.
     * @example
     * // Update or create a BuyContract
     * const buyContract = await prisma.buyContract.upsert({
     *   create: {
     *     // ... data to create a BuyContract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BuyContract we want to update
     *   }
     * })
    **/
    upsert<T extends BuyContractUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BuyContractUpsertArgs<ExtArgs>>
    ): Prisma__BuyContractClient<$Result.GetResult<Prisma.$BuyContractPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BuyContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyContractCountArgs} args - Arguments to filter BuyContracts to count.
     * @example
     * // Count the number of BuyContracts
     * const count = await prisma.buyContract.count({
     *   where: {
     *     // ... the filter for the BuyContracts we want to count
     *   }
     * })
    **/
    count<T extends BuyContractCountArgs>(
      args?: Subset<T, BuyContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuyContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BuyContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuyContractAggregateArgs>(args: Subset<T, BuyContractAggregateArgs>): Prisma.PrismaPromise<GetBuyContractAggregateType<T>>

    /**
     * Group by BuyContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyContractGroupByArgs} args - Group by arguments.
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
      T extends BuyContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuyContractGroupByArgs['orderBy'] }
        : { orderBy?: BuyContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuyContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuyContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BuyContract model
   */
  readonly fields: BuyContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BuyContract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuyContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BuyContract model
   */ 
  interface BuyContractFieldRefs {
    readonly id: FieldRef<"BuyContract", 'Int'>
    readonly contractInfo: FieldRef<"BuyContract", 'String'>
  }
    

  // Custom InputTypes

  /**
   * BuyContract findUnique
   */
  export type BuyContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyContract
     */
    select?: BuyContractSelect<ExtArgs> | null
    /**
     * Filter, which BuyContract to fetch.
     */
    where: BuyContractWhereUniqueInput
  }


  /**
   * BuyContract findUniqueOrThrow
   */
  export type BuyContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyContract
     */
    select?: BuyContractSelect<ExtArgs> | null
    /**
     * Filter, which BuyContract to fetch.
     */
    where: BuyContractWhereUniqueInput
  }


  /**
   * BuyContract findFirst
   */
  export type BuyContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyContract
     */
    select?: BuyContractSelect<ExtArgs> | null
    /**
     * Filter, which BuyContract to fetch.
     */
    where?: BuyContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyContracts to fetch.
     */
    orderBy?: BuyContractOrderByWithRelationInput | BuyContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuyContracts.
     */
    cursor?: BuyContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuyContracts.
     */
    distinct?: BuyContractScalarFieldEnum | BuyContractScalarFieldEnum[]
  }


  /**
   * BuyContract findFirstOrThrow
   */
  export type BuyContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyContract
     */
    select?: BuyContractSelect<ExtArgs> | null
    /**
     * Filter, which BuyContract to fetch.
     */
    where?: BuyContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyContracts to fetch.
     */
    orderBy?: BuyContractOrderByWithRelationInput | BuyContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuyContracts.
     */
    cursor?: BuyContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuyContracts.
     */
    distinct?: BuyContractScalarFieldEnum | BuyContractScalarFieldEnum[]
  }


  /**
   * BuyContract findMany
   */
  export type BuyContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyContract
     */
    select?: BuyContractSelect<ExtArgs> | null
    /**
     * Filter, which BuyContracts to fetch.
     */
    where?: BuyContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuyContracts to fetch.
     */
    orderBy?: BuyContractOrderByWithRelationInput | BuyContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BuyContracts.
     */
    cursor?: BuyContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuyContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuyContracts.
     */
    skip?: number
    distinct?: BuyContractScalarFieldEnum | BuyContractScalarFieldEnum[]
  }


  /**
   * BuyContract create
   */
  export type BuyContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyContract
     */
    select?: BuyContractSelect<ExtArgs> | null
    /**
     * The data needed to create a BuyContract.
     */
    data: XOR<BuyContractCreateInput, BuyContractUncheckedCreateInput>
  }


  /**
   * BuyContract createMany
   */
  export type BuyContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BuyContracts.
     */
    data: BuyContractCreateManyInput | BuyContractCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BuyContract update
   */
  export type BuyContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyContract
     */
    select?: BuyContractSelect<ExtArgs> | null
    /**
     * The data needed to update a BuyContract.
     */
    data: XOR<BuyContractUpdateInput, BuyContractUncheckedUpdateInput>
    /**
     * Choose, which BuyContract to update.
     */
    where: BuyContractWhereUniqueInput
  }


  /**
   * BuyContract updateMany
   */
  export type BuyContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BuyContracts.
     */
    data: XOR<BuyContractUpdateManyMutationInput, BuyContractUncheckedUpdateManyInput>
    /**
     * Filter which BuyContracts to update
     */
    where?: BuyContractWhereInput
  }


  /**
   * BuyContract upsert
   */
  export type BuyContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyContract
     */
    select?: BuyContractSelect<ExtArgs> | null
    /**
     * The filter to search for the BuyContract to update in case it exists.
     */
    where: BuyContractWhereUniqueInput
    /**
     * In case the BuyContract found by the `where` argument doesn't exist, create a new BuyContract with this data.
     */
    create: XOR<BuyContractCreateInput, BuyContractUncheckedCreateInput>
    /**
     * In case the BuyContract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuyContractUpdateInput, BuyContractUncheckedUpdateInput>
  }


  /**
   * BuyContract delete
   */
  export type BuyContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyContract
     */
    select?: BuyContractSelect<ExtArgs> | null
    /**
     * Filter which BuyContract to delete.
     */
    where: BuyContractWhereUniqueInput
  }


  /**
   * BuyContract deleteMany
   */
  export type BuyContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuyContracts to delete
     */
    where?: BuyContractWhereInput
  }


  /**
   * BuyContract without action
   */
  export type BuyContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyContract
     */
    select?: BuyContractSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    wallet: 'wallet',
    contract: 'contract'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SellContractScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    contract: 'contract',
    description: 'description',
    code: 'code',
    address: 'address'
  };

  export type SellContractScalarFieldEnum = (typeof SellContractScalarFieldEnum)[keyof typeof SellContractScalarFieldEnum]


  export const BuyContractScalarFieldEnum: {
    id: 'id',
    contractInfo: 'contractInfo'
  };

  export type BuyContractScalarFieldEnum = (typeof BuyContractScalarFieldEnum)[keyof typeof BuyContractScalarFieldEnum]


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

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    wallet?: StringFilter<"User"> | string
    contract?: IntNullableListFilter<"User">
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    wallet?: SortOrder
    contract?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    wallet?: StringFilter<"User"> | string
    contract?: IntNullableListFilter<"User">
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    wallet?: SortOrder
    contract?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    wallet?: StringWithAggregatesFilter<"User"> | string
    contract?: IntNullableListFilter<"User">
  }

  export type SellContractWhereInput = {
    AND?: SellContractWhereInput | SellContractWhereInput[]
    OR?: SellContractWhereInput[]
    NOT?: SellContractWhereInput | SellContractWhereInput[]
    id?: IntFilter<"SellContract"> | number
    name?: StringFilter<"SellContract"> | string
    price?: StringFilter<"SellContract"> | string
    contract?: StringFilter<"SellContract"> | string
    description?: StringFilter<"SellContract"> | string
    code?: StringFilter<"SellContract"> | string
    address?: StringFilter<"SellContract"> | string
  }

  export type SellContractOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    code?: SortOrder
    address?: SortOrder
  }

  export type SellContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SellContractWhereInput | SellContractWhereInput[]
    OR?: SellContractWhereInput[]
    NOT?: SellContractWhereInput | SellContractWhereInput[]
    name?: StringFilter<"SellContract"> | string
    price?: StringFilter<"SellContract"> | string
    contract?: StringFilter<"SellContract"> | string
    description?: StringFilter<"SellContract"> | string
    code?: StringFilter<"SellContract"> | string
    address?: StringFilter<"SellContract"> | string
  }, "id">

  export type SellContractOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    code?: SortOrder
    address?: SortOrder
    _count?: SellContractCountOrderByAggregateInput
    _avg?: SellContractAvgOrderByAggregateInput
    _max?: SellContractMaxOrderByAggregateInput
    _min?: SellContractMinOrderByAggregateInput
    _sum?: SellContractSumOrderByAggregateInput
  }

  export type SellContractScalarWhereWithAggregatesInput = {
    AND?: SellContractScalarWhereWithAggregatesInput | SellContractScalarWhereWithAggregatesInput[]
    OR?: SellContractScalarWhereWithAggregatesInput[]
    NOT?: SellContractScalarWhereWithAggregatesInput | SellContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SellContract"> | number
    name?: StringWithAggregatesFilter<"SellContract"> | string
    price?: StringWithAggregatesFilter<"SellContract"> | string
    contract?: StringWithAggregatesFilter<"SellContract"> | string
    description?: StringWithAggregatesFilter<"SellContract"> | string
    code?: StringWithAggregatesFilter<"SellContract"> | string
    address?: StringWithAggregatesFilter<"SellContract"> | string
  }

  export type BuyContractWhereInput = {
    AND?: BuyContractWhereInput | BuyContractWhereInput[]
    OR?: BuyContractWhereInput[]
    NOT?: BuyContractWhereInput | BuyContractWhereInput[]
    id?: IntFilter<"BuyContract"> | number
    contractInfo?: StringFilter<"BuyContract"> | string
  }

  export type BuyContractOrderByWithRelationInput = {
    id?: SortOrder
    contractInfo?: SortOrder
  }

  export type BuyContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BuyContractWhereInput | BuyContractWhereInput[]
    OR?: BuyContractWhereInput[]
    NOT?: BuyContractWhereInput | BuyContractWhereInput[]
    contractInfo?: StringFilter<"BuyContract"> | string
  }, "id">

  export type BuyContractOrderByWithAggregationInput = {
    id?: SortOrder
    contractInfo?: SortOrder
    _count?: BuyContractCountOrderByAggregateInput
    _avg?: BuyContractAvgOrderByAggregateInput
    _max?: BuyContractMaxOrderByAggregateInput
    _min?: BuyContractMinOrderByAggregateInput
    _sum?: BuyContractSumOrderByAggregateInput
  }

  export type BuyContractScalarWhereWithAggregatesInput = {
    AND?: BuyContractScalarWhereWithAggregatesInput | BuyContractScalarWhereWithAggregatesInput[]
    OR?: BuyContractScalarWhereWithAggregatesInput[]
    NOT?: BuyContractScalarWhereWithAggregatesInput | BuyContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BuyContract"> | number
    contractInfo?: StringWithAggregatesFilter<"BuyContract"> | string
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

  export type UserCreateInput = {
    wallet: string
    contract?: UserCreatecontractInput | number[]
  }

  export type UserUncheckedCreateInput = {
    id?: number
    wallet: string
    contract?: UserCreatecontractInput | number[]
  }

  export type UserUpdateInput = {
    wallet?: StringFieldUpdateOperationsInput | string
    contract?: UserUpdatecontractInput | number[]
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wallet?: StringFieldUpdateOperationsInput | string
    contract?: UserUpdatecontractInput | number[]
  }

  export type UserCreateManyInput = {
    id?: number
    wallet: string
    contract?: UserCreatecontractInput | number[]
  }

  export type UserUpdateManyMutationInput = {
    wallet?: StringFieldUpdateOperationsInput | string
    contract?: UserUpdatecontractInput | number[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    wallet?: StringFieldUpdateOperationsInput | string
    contract?: UserUpdatecontractInput | number[]
  }

  export type SellContractCreateInput = {
    name: string
    price: string
    contract: string
    description: string
    code: string
    address: string
  }

  export type SellContractUncheckedCreateInput = {
    id?: number
    name: string
    price: string
    contract: string
    description: string
    code: string
    address: string
  }

  export type SellContractUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type SellContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type SellContractCreateManyInput = {
    id?: number
    name: string
    price: string
    contract: string
    description: string
    code: string
    address: string
  }

  export type SellContractUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type SellContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type BuyContractCreateInput = {
    contractInfo: string
  }

  export type BuyContractUncheckedCreateInput = {
    id?: number
    contractInfo: string
  }

  export type BuyContractUpdateInput = {
    contractInfo?: StringFieldUpdateOperationsInput | string
  }

  export type BuyContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractInfo?: StringFieldUpdateOperationsInput | string
  }

  export type BuyContractCreateManyInput = {
    id?: number
    contractInfo: string
  }

  export type BuyContractUpdateManyMutationInput = {
    contractInfo?: StringFieldUpdateOperationsInput | string
  }

  export type BuyContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractInfo?: StringFieldUpdateOperationsInput | string
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

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
    contract?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    contract?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    contract?: SortOrder
  }

  export type SellContractCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    code?: SortOrder
    address?: SortOrder
  }

  export type SellContractAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SellContractMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    code?: SortOrder
    address?: SortOrder
  }

  export type SellContractMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    code?: SortOrder
    address?: SortOrder
  }

  export type SellContractSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BuyContractCountOrderByAggregateInput = {
    id?: SortOrder
    contractInfo?: SortOrder
  }

  export type BuyContractAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BuyContractMaxOrderByAggregateInput = {
    id?: SortOrder
    contractInfo?: SortOrder
  }

  export type BuyContractMinOrderByAggregateInput = {
    id?: SortOrder
    contractInfo?: SortOrder
  }

  export type BuyContractSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserCreatecontractInput = {
    set: number[]
  }

  export type UserUpdatecontractInput = {
    set?: number[]
    push?: number | number[]
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



  /**
   * Aliases for legacy arg types
   */
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
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SellContractDefaultArgs instead
     */
    export type SellContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SellContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuyContractDefaultArgs instead
     */
    export type BuyContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuyContractDefaultArgs<ExtArgs>

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