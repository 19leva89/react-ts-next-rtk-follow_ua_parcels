
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Track
 * 
 */
export type Track = $Result.DefaultSelection<Prisma.$TrackPayload>
/**
 * Model ConfirmCode
 * 
 */
export type ConfirmCode = $Result.DefaultSelection<Prisma.$ConfirmCodePayload>
/**
 * Model RecoveryCode
 * 
 */
export type RecoveryCode = $Result.DefaultSelection<Prisma.$RecoveryCodePayload>
/**
 * Model TrackInfo
 * 
 */
export type TrackInfo = $Result.DefaultSelection<Prisma.$TrackInfoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<ExtArgs>;

  /**
   * `prisma.confirmCode`: Exposes CRUD operations for the **ConfirmCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfirmCodes
    * const confirmCodes = await prisma.confirmCode.findMany()
    * ```
    */
  get confirmCode(): Prisma.ConfirmCodeDelegate<ExtArgs>;

  /**
   * `prisma.recoveryCode`: Exposes CRUD operations for the **RecoveryCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecoveryCodes
    * const recoveryCodes = await prisma.recoveryCode.findMany()
    * ```
    */
  get recoveryCode(): Prisma.RecoveryCodeDelegate<ExtArgs>;

  /**
   * `prisma.trackInfo`: Exposes CRUD operations for the **TrackInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackInfos
    * const trackInfos = await prisma.trackInfo.findMany()
    * ```
    */
  get trackInfo(): Prisma.TrackInfoDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    User: 'User',
    Track: 'Track',
    ConfirmCode: 'ConfirmCode',
    RecoveryCode: 'RecoveryCode',
    TrackInfo: 'TrackInfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "track" | "confirmCode" | "recoveryCode" | "trackInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Track: {
        payload: Prisma.$TrackPayload<ExtArgs>
        fields: Prisma.TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findFirst: {
            args: Prisma.TrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findMany: {
            args: Prisma.TrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          create: {
            args: Prisma.TrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          createMany: {
            args: Prisma.TrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          delete: {
            args: Prisma.TrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          update: {
            args: Prisma.TrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          deleteMany: {
            args: Prisma.TrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          aggregate: {
            args: Prisma.TrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrack>
          }
          groupBy: {
            args: Prisma.TrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackCountArgs<ExtArgs>
            result: $Utils.Optional<TrackCountAggregateOutputType> | number
          }
        }
      }
      ConfirmCode: {
        payload: Prisma.$ConfirmCodePayload<ExtArgs>
        fields: Prisma.ConfirmCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfirmCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfirmCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmCodePayload>
          }
          findFirst: {
            args: Prisma.ConfirmCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfirmCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmCodePayload>
          }
          findMany: {
            args: Prisma.ConfirmCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmCodePayload>[]
          }
          create: {
            args: Prisma.ConfirmCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmCodePayload>
          }
          createMany: {
            args: Prisma.ConfirmCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfirmCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmCodePayload>[]
          }
          delete: {
            args: Prisma.ConfirmCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmCodePayload>
          }
          update: {
            args: Prisma.ConfirmCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmCodePayload>
          }
          deleteMany: {
            args: Prisma.ConfirmCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfirmCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConfirmCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmCodePayload>
          }
          aggregate: {
            args: Prisma.ConfirmCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfirmCode>
          }
          groupBy: {
            args: Prisma.ConfirmCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfirmCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfirmCodeCountArgs<ExtArgs>
            result: $Utils.Optional<ConfirmCodeCountAggregateOutputType> | number
          }
        }
      }
      RecoveryCode: {
        payload: Prisma.$RecoveryCodePayload<ExtArgs>
        fields: Prisma.RecoveryCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecoveryCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecoveryCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCodePayload>
          }
          findFirst: {
            args: Prisma.RecoveryCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecoveryCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCodePayload>
          }
          findMany: {
            args: Prisma.RecoveryCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCodePayload>[]
          }
          create: {
            args: Prisma.RecoveryCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCodePayload>
          }
          createMany: {
            args: Prisma.RecoveryCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecoveryCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCodePayload>[]
          }
          delete: {
            args: Prisma.RecoveryCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCodePayload>
          }
          update: {
            args: Prisma.RecoveryCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCodePayload>
          }
          deleteMany: {
            args: Prisma.RecoveryCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecoveryCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecoveryCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCodePayload>
          }
          aggregate: {
            args: Prisma.RecoveryCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecoveryCode>
          }
          groupBy: {
            args: Prisma.RecoveryCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecoveryCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecoveryCodeCountArgs<ExtArgs>
            result: $Utils.Optional<RecoveryCodeCountAggregateOutputType> | number
          }
        }
      }
      TrackInfo: {
        payload: Prisma.$TrackInfoPayload<ExtArgs>
        fields: Prisma.TrackInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackInfoPayload>
          }
          findFirst: {
            args: Prisma.TrackInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackInfoPayload>
          }
          findMany: {
            args: Prisma.TrackInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackInfoPayload>[]
          }
          create: {
            args: Prisma.TrackInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackInfoPayload>
          }
          createMany: {
            args: Prisma.TrackInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackInfoPayload>[]
          }
          delete: {
            args: Prisma.TrackInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackInfoPayload>
          }
          update: {
            args: Prisma.TrackInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackInfoPayload>
          }
          deleteMany: {
            args: Prisma.TrackInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrackInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackInfoPayload>
          }
          aggregate: {
            args: Prisma.TrackInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackInfo>
          }
          groupBy: {
            args: Prisma.TrackInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackInfoCountArgs<ExtArgs>
            result: $Utils.Optional<TrackInfoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'createManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    confirmCodes: number
    recoveryCodes: number
    createdTrack: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    confirmCodes?: boolean | UserCountOutputTypeCountConfirmCodesArgs
    recoveryCodes?: boolean | UserCountOutputTypeCountRecoveryCodesArgs
    createdTrack?: boolean | UserCountOutputTypeCountCreatedTrackArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConfirmCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecoveryCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecoveryCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * Count Type TrackCountOutputType
   */

  export type TrackCountOutputType = {
    TrackInfo: number
  }

  export type TrackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TrackInfo?: boolean | TrackCountOutputTypeCountTrackInfoArgs
  }

  // Custom InputTypes
  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackCountOutputType
     */
    select?: TrackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountTrackInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackInfoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    isConfirmed: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    isConfirmed: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    isConfirmed: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    isConfirmed?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    isConfirmed?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    isConfirmed?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    isConfirmed: boolean
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    isConfirmed?: boolean
    confirmCodes?: boolean | User$confirmCodesArgs<ExtArgs>
    recoveryCodes?: boolean | User$recoveryCodesArgs<ExtArgs>
    createdTrack?: boolean | User$createdTrackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    isConfirmed?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    isConfirmed?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    confirmCodes?: boolean | User$confirmCodesArgs<ExtArgs>
    recoveryCodes?: boolean | User$recoveryCodesArgs<ExtArgs>
    createdTrack?: boolean | User$createdTrackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      confirmCodes: Prisma.$ConfirmCodePayload<ExtArgs>[]
      recoveryCodes: Prisma.$RecoveryCodePayload<ExtArgs>[]
      createdTrack: Prisma.$TrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      isConfirmed: boolean
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    readonly [Symbol.toStringTag]: "PrismaPromise"
    confirmCodes<T extends User$confirmCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$confirmCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "findMany"> | Null>
    recoveryCodes<T extends User$recoveryCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$recoveryCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findMany"> | Null>
    createdTrack<T extends User$createdTrackArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly isConfirmed: FieldRef<"User", 'Boolean'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.confirmCodes
   */
  export type User$confirmCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
    where?: ConfirmCodeWhereInput
    orderBy?: ConfirmCodeOrderByWithRelationInput | ConfirmCodeOrderByWithRelationInput[]
    cursor?: ConfirmCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfirmCodeScalarFieldEnum | ConfirmCodeScalarFieldEnum[]
  }

  /**
   * User.recoveryCodes
   */
  export type User$recoveryCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
    where?: RecoveryCodeWhereInput
    orderBy?: RecoveryCodeOrderByWithRelationInput | RecoveryCodeOrderByWithRelationInput[]
    cursor?: RecoveryCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecoveryCodeScalarFieldEnum | RecoveryCodeScalarFieldEnum[]
  }

  /**
   * User.createdTrack
   */
  export type User$createdTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Track
   */

  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    carrier: number | null
  }

  export type TrackSumAggregateOutputType = {
    carrier: number | null
  }

  export type TrackMinAggregateOutputType = {
    id: string | null
    number: string | null
    carrier: number | null
    name: string | null
    createDate: Date | null
    archived: boolean | null
    userId: string | null
  }

  export type TrackMaxAggregateOutputType = {
    id: string | null
    number: string | null
    carrier: number | null
    name: string | null
    createDate: Date | null
    archived: boolean | null
    userId: string | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    number: number
    carrier: number
    name: number
    createDate: number
    archived: number
    userId: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    carrier?: true
  }

  export type TrackSumAggregateInputType = {
    carrier?: true
  }

  export type TrackMinAggregateInputType = {
    id?: true
    number?: true
    carrier?: true
    name?: true
    createDate?: true
    archived?: true
    userId?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    number?: true
    carrier?: true
    name?: true
    createDate?: true
    archived?: true
    userId?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    number?: true
    carrier?: true
    name?: true
    createDate?: true
    archived?: true
    userId?: true
    _all?: true
  }

  export type TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithAggregationInput | TrackOrderByWithAggregationInput[]
    by: TrackScalarFieldEnum[] | TrackScalarFieldEnum
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }

  export type TrackGroupByOutputType = {
    id: string
    number: string
    carrier: number
    name: string
    createDate: Date
    archived: boolean
    userId: string
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    carrier?: boolean
    name?: boolean
    createDate?: boolean
    archived?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    TrackInfo?: boolean | Track$TrackInfoArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    carrier?: boolean
    name?: boolean
    createDate?: boolean
    archived?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectScalar = {
    id?: boolean
    number?: boolean
    carrier?: boolean
    name?: boolean
    createDate?: boolean
    archived?: boolean
    userId?: boolean
  }

  export type TrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    TrackInfo?: boolean | Track$TrackInfoArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      TrackInfo: Prisma.$TrackInfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      carrier: number
      name: string
      createDate: Date
      archived: boolean
      userId: string
    }, ExtArgs["result"]["track"]>
    composites: {}
  }

  type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = $Result.GetResult<Prisma.$TrackPayload, S>

  type TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track'], meta: { name: 'Track' } }
    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackFindUniqueArgs>(args: SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Track that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackFindFirstArgs>(args?: SelectSubset<T, TrackFindFirstArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackWithIdOnly = await prisma.track.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackFindManyArgs>(args?: SelectSubset<T, TrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
     */
    create<T extends TrackCreateArgs>(args: SelectSubset<T, TrackCreateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tracks.
     * @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackCreateManyArgs>(args?: SelectSubset<T, TrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tracks and returns the data saved in the database.
     * @param {TrackCreateManyAndReturnArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tracks and only return the `id`
     * const trackWithIdOnly = await prisma.track.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
     */
    delete<T extends TrackDeleteArgs>(args: SelectSubset<T, TrackDeleteArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackUpdateArgs>(args: SelectSubset<T, TrackUpdateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackDeleteManyArgs>(args?: SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackUpdateManyArgs>(args: SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
     */
    upsert<T extends TrackUpsertArgs>(args: SelectSubset<T, TrackUpsertArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
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
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track model
   */
  readonly fields: TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    TrackInfo<T extends Track$TrackInfoArgs<ExtArgs> = {}>(args?: Subset<T, Track$TrackInfoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Track model
   */ 
  interface TrackFieldRefs {
    readonly id: FieldRef<"Track", 'String'>
    readonly number: FieldRef<"Track", 'String'>
    readonly carrier: FieldRef<"Track", 'Int'>
    readonly name: FieldRef<"Track", 'String'>
    readonly createDate: FieldRef<"Track", 'DateTime'>
    readonly archived: FieldRef<"Track", 'Boolean'>
    readonly userId: FieldRef<"Track", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Track findUnique
   */
  export type TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findFirst
   */
  export type TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findMany
   */
  export type TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track create
   */
  export type TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }

  /**
   * Track createMany
   */
  export type TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
  }

  /**
   * Track createManyAndReturn
   */
  export type TrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Track update
   */
  export type TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
  }

  /**
   * Track upsert
   */
  export type TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }

  /**
   * Track delete
   */
  export type TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
  }

  /**
   * Track.TrackInfo
   */
  export type Track$TrackInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
    where?: TrackInfoWhereInput
    orderBy?: TrackInfoOrderByWithRelationInput | TrackInfoOrderByWithRelationInput[]
    cursor?: TrackInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackInfoScalarFieldEnum | TrackInfoScalarFieldEnum[]
  }

  /**
   * Track without action
   */
  export type TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
  }


  /**
   * Model ConfirmCode
   */

  export type AggregateConfirmCode = {
    _count: ConfirmCodeCountAggregateOutputType | null
    _min: ConfirmCodeMinAggregateOutputType | null
    _max: ConfirmCodeMaxAggregateOutputType | null
  }

  export type ConfirmCodeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    expiresAt: Date | null
  }

  export type ConfirmCodeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    expiresAt: Date | null
  }

  export type ConfirmCodeCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    expiresAt: number
    _all: number
  }


  export type ConfirmCodeMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    expiresAt?: true
  }

  export type ConfirmCodeMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    expiresAt?: true
  }

  export type ConfirmCodeCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    expiresAt?: true
    _all?: true
  }

  export type ConfirmCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmCode to aggregate.
     */
    where?: ConfirmCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmCodes to fetch.
     */
    orderBy?: ConfirmCodeOrderByWithRelationInput | ConfirmCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfirmCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfirmCodes
    **/
    _count?: true | ConfirmCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfirmCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfirmCodeMaxAggregateInputType
  }

  export type GetConfirmCodeAggregateType<T extends ConfirmCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateConfirmCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfirmCode[P]>
      : GetScalarType<T[P], AggregateConfirmCode[P]>
  }




  export type ConfirmCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmCodeWhereInput
    orderBy?: ConfirmCodeOrderByWithAggregationInput | ConfirmCodeOrderByWithAggregationInput[]
    by: ConfirmCodeScalarFieldEnum[] | ConfirmCodeScalarFieldEnum
    having?: ConfirmCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfirmCodeCountAggregateInputType | true
    _min?: ConfirmCodeMinAggregateInputType
    _max?: ConfirmCodeMaxAggregateInputType
  }

  export type ConfirmCodeGroupByOutputType = {
    id: string
    userId: string
    code: string
    expiresAt: Date
    _count: ConfirmCodeCountAggregateOutputType | null
    _min: ConfirmCodeMinAggregateOutputType | null
    _max: ConfirmCodeMaxAggregateOutputType | null
  }

  type GetConfirmCodeGroupByPayload<T extends ConfirmCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfirmCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfirmCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfirmCodeGroupByOutputType[P]>
            : GetScalarType<T[P], ConfirmCodeGroupByOutputType[P]>
        }
      >
    >


  export type ConfirmCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["confirmCode"]>

  export type ConfirmCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["confirmCode"]>

  export type ConfirmCodeSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    expiresAt?: boolean
  }

  export type ConfirmCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConfirmCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConfirmCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfirmCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      code: string
      expiresAt: Date
    }, ExtArgs["result"]["confirmCode"]>
    composites: {}
  }

  type ConfirmCodeGetPayload<S extends boolean | null | undefined | ConfirmCodeDefaultArgs> = $Result.GetResult<Prisma.$ConfirmCodePayload, S>

  type ConfirmCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConfirmCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConfirmCodeCountAggregateInputType | true
    }

  export interface ConfirmCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfirmCode'], meta: { name: 'ConfirmCode' } }
    /**
     * Find zero or one ConfirmCode that matches the filter.
     * @param {ConfirmCodeFindUniqueArgs} args - Arguments to find a ConfirmCode
     * @example
     * // Get one ConfirmCode
     * const confirmCode = await prisma.confirmCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfirmCodeFindUniqueArgs>(args: SelectSubset<T, ConfirmCodeFindUniqueArgs<ExtArgs>>): Prisma__ConfirmCodeClient<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ConfirmCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConfirmCodeFindUniqueOrThrowArgs} args - Arguments to find a ConfirmCode
     * @example
     * // Get one ConfirmCode
     * const confirmCode = await prisma.confirmCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfirmCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfirmCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfirmCodeClient<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ConfirmCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmCodeFindFirstArgs} args - Arguments to find a ConfirmCode
     * @example
     * // Get one ConfirmCode
     * const confirmCode = await prisma.confirmCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfirmCodeFindFirstArgs>(args?: SelectSubset<T, ConfirmCodeFindFirstArgs<ExtArgs>>): Prisma__ConfirmCodeClient<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ConfirmCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmCodeFindFirstOrThrowArgs} args - Arguments to find a ConfirmCode
     * @example
     * // Get one ConfirmCode
     * const confirmCode = await prisma.confirmCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfirmCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfirmCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfirmCodeClient<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ConfirmCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfirmCodes
     * const confirmCodes = await prisma.confirmCode.findMany()
     * 
     * // Get first 10 ConfirmCodes
     * const confirmCodes = await prisma.confirmCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const confirmCodeWithIdOnly = await prisma.confirmCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfirmCodeFindManyArgs>(args?: SelectSubset<T, ConfirmCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ConfirmCode.
     * @param {ConfirmCodeCreateArgs} args - Arguments to create a ConfirmCode.
     * @example
     * // Create one ConfirmCode
     * const ConfirmCode = await prisma.confirmCode.create({
     *   data: {
     *     // ... data to create a ConfirmCode
     *   }
     * })
     * 
     */
    create<T extends ConfirmCodeCreateArgs>(args: SelectSubset<T, ConfirmCodeCreateArgs<ExtArgs>>): Prisma__ConfirmCodeClient<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ConfirmCodes.
     * @param {ConfirmCodeCreateManyArgs} args - Arguments to create many ConfirmCodes.
     * @example
     * // Create many ConfirmCodes
     * const confirmCode = await prisma.confirmCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfirmCodeCreateManyArgs>(args?: SelectSubset<T, ConfirmCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfirmCodes and returns the data saved in the database.
     * @param {ConfirmCodeCreateManyAndReturnArgs} args - Arguments to create many ConfirmCodes.
     * @example
     * // Create many ConfirmCodes
     * const confirmCode = await prisma.confirmCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfirmCodes and only return the `id`
     * const confirmCodeWithIdOnly = await prisma.confirmCode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfirmCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfirmCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ConfirmCode.
     * @param {ConfirmCodeDeleteArgs} args - Arguments to delete one ConfirmCode.
     * @example
     * // Delete one ConfirmCode
     * const ConfirmCode = await prisma.confirmCode.delete({
     *   where: {
     *     // ... filter to delete one ConfirmCode
     *   }
     * })
     * 
     */
    delete<T extends ConfirmCodeDeleteArgs>(args: SelectSubset<T, ConfirmCodeDeleteArgs<ExtArgs>>): Prisma__ConfirmCodeClient<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ConfirmCode.
     * @param {ConfirmCodeUpdateArgs} args - Arguments to update one ConfirmCode.
     * @example
     * // Update one ConfirmCode
     * const confirmCode = await prisma.confirmCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfirmCodeUpdateArgs>(args: SelectSubset<T, ConfirmCodeUpdateArgs<ExtArgs>>): Prisma__ConfirmCodeClient<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ConfirmCodes.
     * @param {ConfirmCodeDeleteManyArgs} args - Arguments to filter ConfirmCodes to delete.
     * @example
     * // Delete a few ConfirmCodes
     * const { count } = await prisma.confirmCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfirmCodeDeleteManyArgs>(args?: SelectSubset<T, ConfirmCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfirmCodes
     * const confirmCode = await prisma.confirmCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfirmCodeUpdateManyArgs>(args: SelectSubset<T, ConfirmCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConfirmCode.
     * @param {ConfirmCodeUpsertArgs} args - Arguments to update or create a ConfirmCode.
     * @example
     * // Update or create a ConfirmCode
     * const confirmCode = await prisma.confirmCode.upsert({
     *   create: {
     *     // ... data to create a ConfirmCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfirmCode we want to update
     *   }
     * })
     */
    upsert<T extends ConfirmCodeUpsertArgs>(args: SelectSubset<T, ConfirmCodeUpsertArgs<ExtArgs>>): Prisma__ConfirmCodeClient<$Result.GetResult<Prisma.$ConfirmCodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ConfirmCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmCodeCountArgs} args - Arguments to filter ConfirmCodes to count.
     * @example
     * // Count the number of ConfirmCodes
     * const count = await prisma.confirmCode.count({
     *   where: {
     *     // ... the filter for the ConfirmCodes we want to count
     *   }
     * })
    **/
    count<T extends ConfirmCodeCountArgs>(
      args?: Subset<T, ConfirmCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfirmCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfirmCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfirmCodeAggregateArgs>(args: Subset<T, ConfirmCodeAggregateArgs>): Prisma.PrismaPromise<GetConfirmCodeAggregateType<T>>

    /**
     * Group by ConfirmCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmCodeGroupByArgs} args - Group by arguments.
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
      T extends ConfirmCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfirmCodeGroupByArgs['orderBy'] }
        : { orderBy?: ConfirmCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfirmCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfirmCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfirmCode model
   */
  readonly fields: ConfirmCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfirmCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfirmCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConfirmCode model
   */ 
  interface ConfirmCodeFieldRefs {
    readonly id: FieldRef<"ConfirmCode", 'String'>
    readonly userId: FieldRef<"ConfirmCode", 'String'>
    readonly code: FieldRef<"ConfirmCode", 'String'>
    readonly expiresAt: FieldRef<"ConfirmCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConfirmCode findUnique
   */
  export type ConfirmCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmCode to fetch.
     */
    where: ConfirmCodeWhereUniqueInput
  }

  /**
   * ConfirmCode findUniqueOrThrow
   */
  export type ConfirmCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmCode to fetch.
     */
    where: ConfirmCodeWhereUniqueInput
  }

  /**
   * ConfirmCode findFirst
   */
  export type ConfirmCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmCode to fetch.
     */
    where?: ConfirmCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmCodes to fetch.
     */
    orderBy?: ConfirmCodeOrderByWithRelationInput | ConfirmCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmCodes.
     */
    cursor?: ConfirmCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmCodes.
     */
    distinct?: ConfirmCodeScalarFieldEnum | ConfirmCodeScalarFieldEnum[]
  }

  /**
   * ConfirmCode findFirstOrThrow
   */
  export type ConfirmCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmCode to fetch.
     */
    where?: ConfirmCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmCodes to fetch.
     */
    orderBy?: ConfirmCodeOrderByWithRelationInput | ConfirmCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmCodes.
     */
    cursor?: ConfirmCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmCodes.
     */
    distinct?: ConfirmCodeScalarFieldEnum | ConfirmCodeScalarFieldEnum[]
  }

  /**
   * ConfirmCode findMany
   */
  export type ConfirmCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmCodes to fetch.
     */
    where?: ConfirmCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmCodes to fetch.
     */
    orderBy?: ConfirmCodeOrderByWithRelationInput | ConfirmCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfirmCodes.
     */
    cursor?: ConfirmCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmCodes.
     */
    skip?: number
    distinct?: ConfirmCodeScalarFieldEnum | ConfirmCodeScalarFieldEnum[]
  }

  /**
   * ConfirmCode create
   */
  export type ConfirmCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a ConfirmCode.
     */
    data: XOR<ConfirmCodeCreateInput, ConfirmCodeUncheckedCreateInput>
  }

  /**
   * ConfirmCode createMany
   */
  export type ConfirmCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfirmCodes.
     */
    data: ConfirmCodeCreateManyInput | ConfirmCodeCreateManyInput[]
  }

  /**
   * ConfirmCode createManyAndReturn
   */
  export type ConfirmCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ConfirmCodes.
     */
    data: ConfirmCodeCreateManyInput | ConfirmCodeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConfirmCode update
   */
  export type ConfirmCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a ConfirmCode.
     */
    data: XOR<ConfirmCodeUpdateInput, ConfirmCodeUncheckedUpdateInput>
    /**
     * Choose, which ConfirmCode to update.
     */
    where: ConfirmCodeWhereUniqueInput
  }

  /**
   * ConfirmCode updateMany
   */
  export type ConfirmCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfirmCodes.
     */
    data: XOR<ConfirmCodeUpdateManyMutationInput, ConfirmCodeUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmCodes to update
     */
    where?: ConfirmCodeWhereInput
  }

  /**
   * ConfirmCode upsert
   */
  export type ConfirmCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the ConfirmCode to update in case it exists.
     */
    where: ConfirmCodeWhereUniqueInput
    /**
     * In case the ConfirmCode found by the `where` argument doesn't exist, create a new ConfirmCode with this data.
     */
    create: XOR<ConfirmCodeCreateInput, ConfirmCodeUncheckedCreateInput>
    /**
     * In case the ConfirmCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfirmCodeUpdateInput, ConfirmCodeUncheckedUpdateInput>
  }

  /**
   * ConfirmCode delete
   */
  export type ConfirmCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
    /**
     * Filter which ConfirmCode to delete.
     */
    where: ConfirmCodeWhereUniqueInput
  }

  /**
   * ConfirmCode deleteMany
   */
  export type ConfirmCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmCodes to delete
     */
    where?: ConfirmCodeWhereInput
  }

  /**
   * ConfirmCode without action
   */
  export type ConfirmCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmCode
     */
    select?: ConfirmCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmCodeInclude<ExtArgs> | null
  }


  /**
   * Model RecoveryCode
   */

  export type AggregateRecoveryCode = {
    _count: RecoveryCodeCountAggregateOutputType | null
    _min: RecoveryCodeMinAggregateOutputType | null
    _max: RecoveryCodeMaxAggregateOutputType | null
  }

  export type RecoveryCodeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    expiresAt: Date | null
  }

  export type RecoveryCodeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    expiresAt: Date | null
  }

  export type RecoveryCodeCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    expiresAt: number
    _all: number
  }


  export type RecoveryCodeMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    expiresAt?: true
  }

  export type RecoveryCodeMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    expiresAt?: true
  }

  export type RecoveryCodeCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    expiresAt?: true
    _all?: true
  }

  export type RecoveryCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecoveryCode to aggregate.
     */
    where?: RecoveryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryCodes to fetch.
     */
    orderBy?: RecoveryCodeOrderByWithRelationInput | RecoveryCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecoveryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecoveryCodes
    **/
    _count?: true | RecoveryCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecoveryCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecoveryCodeMaxAggregateInputType
  }

  export type GetRecoveryCodeAggregateType<T extends RecoveryCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecoveryCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecoveryCode[P]>
      : GetScalarType<T[P], AggregateRecoveryCode[P]>
  }




  export type RecoveryCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecoveryCodeWhereInput
    orderBy?: RecoveryCodeOrderByWithAggregationInput | RecoveryCodeOrderByWithAggregationInput[]
    by: RecoveryCodeScalarFieldEnum[] | RecoveryCodeScalarFieldEnum
    having?: RecoveryCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecoveryCodeCountAggregateInputType | true
    _min?: RecoveryCodeMinAggregateInputType
    _max?: RecoveryCodeMaxAggregateInputType
  }

  export type RecoveryCodeGroupByOutputType = {
    id: string
    userId: string
    code: string
    expiresAt: Date
    _count: RecoveryCodeCountAggregateOutputType | null
    _min: RecoveryCodeMinAggregateOutputType | null
    _max: RecoveryCodeMaxAggregateOutputType | null
  }

  type GetRecoveryCodeGroupByPayload<T extends RecoveryCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecoveryCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecoveryCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecoveryCodeGroupByOutputType[P]>
            : GetScalarType<T[P], RecoveryCodeGroupByOutputType[P]>
        }
      >
    >


  export type RecoveryCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryCode"]>

  export type RecoveryCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryCode"]>

  export type RecoveryCodeSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    expiresAt?: boolean
  }

  export type RecoveryCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecoveryCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecoveryCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecoveryCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      code: string
      expiresAt: Date
    }, ExtArgs["result"]["recoveryCode"]>
    composites: {}
  }

  type RecoveryCodeGetPayload<S extends boolean | null | undefined | RecoveryCodeDefaultArgs> = $Result.GetResult<Prisma.$RecoveryCodePayload, S>

  type RecoveryCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecoveryCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecoveryCodeCountAggregateInputType | true
    }

  export interface RecoveryCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecoveryCode'], meta: { name: 'RecoveryCode' } }
    /**
     * Find zero or one RecoveryCode that matches the filter.
     * @param {RecoveryCodeFindUniqueArgs} args - Arguments to find a RecoveryCode
     * @example
     * // Get one RecoveryCode
     * const recoveryCode = await prisma.recoveryCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecoveryCodeFindUniqueArgs>(args: SelectSubset<T, RecoveryCodeFindUniqueArgs<ExtArgs>>): Prisma__RecoveryCodeClient<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RecoveryCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecoveryCodeFindUniqueOrThrowArgs} args - Arguments to find a RecoveryCode
     * @example
     * // Get one RecoveryCode
     * const recoveryCode = await prisma.recoveryCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecoveryCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecoveryCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecoveryCodeClient<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RecoveryCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCodeFindFirstArgs} args - Arguments to find a RecoveryCode
     * @example
     * // Get one RecoveryCode
     * const recoveryCode = await prisma.recoveryCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecoveryCodeFindFirstArgs>(args?: SelectSubset<T, RecoveryCodeFindFirstArgs<ExtArgs>>): Prisma__RecoveryCodeClient<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RecoveryCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCodeFindFirstOrThrowArgs} args - Arguments to find a RecoveryCode
     * @example
     * // Get one RecoveryCode
     * const recoveryCode = await prisma.recoveryCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecoveryCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecoveryCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecoveryCodeClient<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RecoveryCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecoveryCodes
     * const recoveryCodes = await prisma.recoveryCode.findMany()
     * 
     * // Get first 10 RecoveryCodes
     * const recoveryCodes = await prisma.recoveryCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recoveryCodeWithIdOnly = await prisma.recoveryCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecoveryCodeFindManyArgs>(args?: SelectSubset<T, RecoveryCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RecoveryCode.
     * @param {RecoveryCodeCreateArgs} args - Arguments to create a RecoveryCode.
     * @example
     * // Create one RecoveryCode
     * const RecoveryCode = await prisma.recoveryCode.create({
     *   data: {
     *     // ... data to create a RecoveryCode
     *   }
     * })
     * 
     */
    create<T extends RecoveryCodeCreateArgs>(args: SelectSubset<T, RecoveryCodeCreateArgs<ExtArgs>>): Prisma__RecoveryCodeClient<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RecoveryCodes.
     * @param {RecoveryCodeCreateManyArgs} args - Arguments to create many RecoveryCodes.
     * @example
     * // Create many RecoveryCodes
     * const recoveryCode = await prisma.recoveryCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecoveryCodeCreateManyArgs>(args?: SelectSubset<T, RecoveryCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecoveryCodes and returns the data saved in the database.
     * @param {RecoveryCodeCreateManyAndReturnArgs} args - Arguments to create many RecoveryCodes.
     * @example
     * // Create many RecoveryCodes
     * const recoveryCode = await prisma.recoveryCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecoveryCodes and only return the `id`
     * const recoveryCodeWithIdOnly = await prisma.recoveryCode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecoveryCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecoveryCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RecoveryCode.
     * @param {RecoveryCodeDeleteArgs} args - Arguments to delete one RecoveryCode.
     * @example
     * // Delete one RecoveryCode
     * const RecoveryCode = await prisma.recoveryCode.delete({
     *   where: {
     *     // ... filter to delete one RecoveryCode
     *   }
     * })
     * 
     */
    delete<T extends RecoveryCodeDeleteArgs>(args: SelectSubset<T, RecoveryCodeDeleteArgs<ExtArgs>>): Prisma__RecoveryCodeClient<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RecoveryCode.
     * @param {RecoveryCodeUpdateArgs} args - Arguments to update one RecoveryCode.
     * @example
     * // Update one RecoveryCode
     * const recoveryCode = await prisma.recoveryCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecoveryCodeUpdateArgs>(args: SelectSubset<T, RecoveryCodeUpdateArgs<ExtArgs>>): Prisma__RecoveryCodeClient<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RecoveryCodes.
     * @param {RecoveryCodeDeleteManyArgs} args - Arguments to filter RecoveryCodes to delete.
     * @example
     * // Delete a few RecoveryCodes
     * const { count } = await prisma.recoveryCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecoveryCodeDeleteManyArgs>(args?: SelectSubset<T, RecoveryCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecoveryCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecoveryCodes
     * const recoveryCode = await prisma.recoveryCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecoveryCodeUpdateManyArgs>(args: SelectSubset<T, RecoveryCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RecoveryCode.
     * @param {RecoveryCodeUpsertArgs} args - Arguments to update or create a RecoveryCode.
     * @example
     * // Update or create a RecoveryCode
     * const recoveryCode = await prisma.recoveryCode.upsert({
     *   create: {
     *     // ... data to create a RecoveryCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecoveryCode we want to update
     *   }
     * })
     */
    upsert<T extends RecoveryCodeUpsertArgs>(args: SelectSubset<T, RecoveryCodeUpsertArgs<ExtArgs>>): Prisma__RecoveryCodeClient<$Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RecoveryCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCodeCountArgs} args - Arguments to filter RecoveryCodes to count.
     * @example
     * // Count the number of RecoveryCodes
     * const count = await prisma.recoveryCode.count({
     *   where: {
     *     // ... the filter for the RecoveryCodes we want to count
     *   }
     * })
    **/
    count<T extends RecoveryCodeCountArgs>(
      args?: Subset<T, RecoveryCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecoveryCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecoveryCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecoveryCodeAggregateArgs>(args: Subset<T, RecoveryCodeAggregateArgs>): Prisma.PrismaPromise<GetRecoveryCodeAggregateType<T>>

    /**
     * Group by RecoveryCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCodeGroupByArgs} args - Group by arguments.
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
      T extends RecoveryCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecoveryCodeGroupByArgs['orderBy'] }
        : { orderBy?: RecoveryCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecoveryCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecoveryCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecoveryCode model
   */
  readonly fields: RecoveryCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecoveryCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecoveryCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecoveryCode model
   */ 
  interface RecoveryCodeFieldRefs {
    readonly id: FieldRef<"RecoveryCode", 'String'>
    readonly userId: FieldRef<"RecoveryCode", 'String'>
    readonly code: FieldRef<"RecoveryCode", 'String'>
    readonly expiresAt: FieldRef<"RecoveryCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecoveryCode findUnique
   */
  export type RecoveryCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryCode to fetch.
     */
    where: RecoveryCodeWhereUniqueInput
  }

  /**
   * RecoveryCode findUniqueOrThrow
   */
  export type RecoveryCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryCode to fetch.
     */
    where: RecoveryCodeWhereUniqueInput
  }

  /**
   * RecoveryCode findFirst
   */
  export type RecoveryCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryCode to fetch.
     */
    where?: RecoveryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryCodes to fetch.
     */
    orderBy?: RecoveryCodeOrderByWithRelationInput | RecoveryCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecoveryCodes.
     */
    cursor?: RecoveryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecoveryCodes.
     */
    distinct?: RecoveryCodeScalarFieldEnum | RecoveryCodeScalarFieldEnum[]
  }

  /**
   * RecoveryCode findFirstOrThrow
   */
  export type RecoveryCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryCode to fetch.
     */
    where?: RecoveryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryCodes to fetch.
     */
    orderBy?: RecoveryCodeOrderByWithRelationInput | RecoveryCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecoveryCodes.
     */
    cursor?: RecoveryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecoveryCodes.
     */
    distinct?: RecoveryCodeScalarFieldEnum | RecoveryCodeScalarFieldEnum[]
  }

  /**
   * RecoveryCode findMany
   */
  export type RecoveryCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryCodes to fetch.
     */
    where?: RecoveryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryCodes to fetch.
     */
    orderBy?: RecoveryCodeOrderByWithRelationInput | RecoveryCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecoveryCodes.
     */
    cursor?: RecoveryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryCodes.
     */
    skip?: number
    distinct?: RecoveryCodeScalarFieldEnum | RecoveryCodeScalarFieldEnum[]
  }

  /**
   * RecoveryCode create
   */
  export type RecoveryCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a RecoveryCode.
     */
    data: XOR<RecoveryCodeCreateInput, RecoveryCodeUncheckedCreateInput>
  }

  /**
   * RecoveryCode createMany
   */
  export type RecoveryCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecoveryCodes.
     */
    data: RecoveryCodeCreateManyInput | RecoveryCodeCreateManyInput[]
  }

  /**
   * RecoveryCode createManyAndReturn
   */
  export type RecoveryCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RecoveryCodes.
     */
    data: RecoveryCodeCreateManyInput | RecoveryCodeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecoveryCode update
   */
  export type RecoveryCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a RecoveryCode.
     */
    data: XOR<RecoveryCodeUpdateInput, RecoveryCodeUncheckedUpdateInput>
    /**
     * Choose, which RecoveryCode to update.
     */
    where: RecoveryCodeWhereUniqueInput
  }

  /**
   * RecoveryCode updateMany
   */
  export type RecoveryCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecoveryCodes.
     */
    data: XOR<RecoveryCodeUpdateManyMutationInput, RecoveryCodeUncheckedUpdateManyInput>
    /**
     * Filter which RecoveryCodes to update
     */
    where?: RecoveryCodeWhereInput
  }

  /**
   * RecoveryCode upsert
   */
  export type RecoveryCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the RecoveryCode to update in case it exists.
     */
    where: RecoveryCodeWhereUniqueInput
    /**
     * In case the RecoveryCode found by the `where` argument doesn't exist, create a new RecoveryCode with this data.
     */
    create: XOR<RecoveryCodeCreateInput, RecoveryCodeUncheckedCreateInput>
    /**
     * In case the RecoveryCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecoveryCodeUpdateInput, RecoveryCodeUncheckedUpdateInput>
  }

  /**
   * RecoveryCode delete
   */
  export type RecoveryCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
    /**
     * Filter which RecoveryCode to delete.
     */
    where: RecoveryCodeWhereUniqueInput
  }

  /**
   * RecoveryCode deleteMany
   */
  export type RecoveryCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecoveryCodes to delete
     */
    where?: RecoveryCodeWhereInput
  }

  /**
   * RecoveryCode without action
   */
  export type RecoveryCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCode
     */
    select?: RecoveryCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCodeInclude<ExtArgs> | null
  }


  /**
   * Model TrackInfo
   */

  export type AggregateTrackInfo = {
    _count: TrackInfoCountAggregateOutputType | null
    _min: TrackInfoMinAggregateOutputType | null
    _max: TrackInfoMaxAggregateOutputType | null
  }

  export type TrackInfoMinAggregateOutputType = {
    id: string | null
    shippingInfo: string | null
    latestStatus: string | null
    latestEvent: string | null
    timeMetrics: string | null
    milestone: string | null
    miscInfo: string | null
    tracking: string | null
    trackId: string | null
  }

  export type TrackInfoMaxAggregateOutputType = {
    id: string | null
    shippingInfo: string | null
    latestStatus: string | null
    latestEvent: string | null
    timeMetrics: string | null
    milestone: string | null
    miscInfo: string | null
    tracking: string | null
    trackId: string | null
  }

  export type TrackInfoCountAggregateOutputType = {
    id: number
    shippingInfo: number
    latestStatus: number
    latestEvent: number
    timeMetrics: number
    milestone: number
    miscInfo: number
    tracking: number
    trackId: number
    _all: number
  }


  export type TrackInfoMinAggregateInputType = {
    id?: true
    shippingInfo?: true
    latestStatus?: true
    latestEvent?: true
    timeMetrics?: true
    milestone?: true
    miscInfo?: true
    tracking?: true
    trackId?: true
  }

  export type TrackInfoMaxAggregateInputType = {
    id?: true
    shippingInfo?: true
    latestStatus?: true
    latestEvent?: true
    timeMetrics?: true
    milestone?: true
    miscInfo?: true
    tracking?: true
    trackId?: true
  }

  export type TrackInfoCountAggregateInputType = {
    id?: true
    shippingInfo?: true
    latestStatus?: true
    latestEvent?: true
    timeMetrics?: true
    milestone?: true
    miscInfo?: true
    tracking?: true
    trackId?: true
    _all?: true
  }

  export type TrackInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackInfo to aggregate.
     */
    where?: TrackInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackInfos to fetch.
     */
    orderBy?: TrackInfoOrderByWithRelationInput | TrackInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackInfos
    **/
    _count?: true | TrackInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackInfoMaxAggregateInputType
  }

  export type GetTrackInfoAggregateType<T extends TrackInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackInfo[P]>
      : GetScalarType<T[P], AggregateTrackInfo[P]>
  }




  export type TrackInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackInfoWhereInput
    orderBy?: TrackInfoOrderByWithAggregationInput | TrackInfoOrderByWithAggregationInput[]
    by: TrackInfoScalarFieldEnum[] | TrackInfoScalarFieldEnum
    having?: TrackInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackInfoCountAggregateInputType | true
    _min?: TrackInfoMinAggregateInputType
    _max?: TrackInfoMaxAggregateInputType
  }

  export type TrackInfoGroupByOutputType = {
    id: string
    shippingInfo: string
    latestStatus: string
    latestEvent: string
    timeMetrics: string
    milestone: string
    miscInfo: string
    tracking: string
    trackId: string
    _count: TrackInfoCountAggregateOutputType | null
    _min: TrackInfoMinAggregateOutputType | null
    _max: TrackInfoMaxAggregateOutputType | null
  }

  type GetTrackInfoGroupByPayload<T extends TrackInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackInfoGroupByOutputType[P]>
            : GetScalarType<T[P], TrackInfoGroupByOutputType[P]>
        }
      >
    >


  export type TrackInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shippingInfo?: boolean
    latestStatus?: boolean
    latestEvent?: boolean
    timeMetrics?: boolean
    milestone?: boolean
    miscInfo?: boolean
    tracking?: boolean
    trackId?: boolean
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackInfo"]>

  export type TrackInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shippingInfo?: boolean
    latestStatus?: boolean
    latestEvent?: boolean
    timeMetrics?: boolean
    milestone?: boolean
    miscInfo?: boolean
    tracking?: boolean
    trackId?: boolean
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackInfo"]>

  export type TrackInfoSelectScalar = {
    id?: boolean
    shippingInfo?: boolean
    latestStatus?: boolean
    latestEvent?: boolean
    timeMetrics?: boolean
    milestone?: boolean
    miscInfo?: boolean
    tracking?: boolean
    trackId?: boolean
  }

  export type TrackInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }
  export type TrackInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }

  export type $TrackInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackInfo"
    objects: {
      track: Prisma.$TrackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shippingInfo: string
      latestStatus: string
      latestEvent: string
      timeMetrics: string
      milestone: string
      miscInfo: string
      tracking: string
      trackId: string
    }, ExtArgs["result"]["trackInfo"]>
    composites: {}
  }

  type TrackInfoGetPayload<S extends boolean | null | undefined | TrackInfoDefaultArgs> = $Result.GetResult<Prisma.$TrackInfoPayload, S>

  type TrackInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackInfoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrackInfoCountAggregateInputType | true
    }

  export interface TrackInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackInfo'], meta: { name: 'TrackInfo' } }
    /**
     * Find zero or one TrackInfo that matches the filter.
     * @param {TrackInfoFindUniqueArgs} args - Arguments to find a TrackInfo
     * @example
     * // Get one TrackInfo
     * const trackInfo = await prisma.trackInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackInfoFindUniqueArgs>(args: SelectSubset<T, TrackInfoFindUniqueArgs<ExtArgs>>): Prisma__TrackInfoClient<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TrackInfo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrackInfoFindUniqueOrThrowArgs} args - Arguments to find a TrackInfo
     * @example
     * // Get one TrackInfo
     * const trackInfo = await prisma.trackInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackInfoClient<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TrackInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackInfoFindFirstArgs} args - Arguments to find a TrackInfo
     * @example
     * // Get one TrackInfo
     * const trackInfo = await prisma.trackInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackInfoFindFirstArgs>(args?: SelectSubset<T, TrackInfoFindFirstArgs<ExtArgs>>): Prisma__TrackInfoClient<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TrackInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackInfoFindFirstOrThrowArgs} args - Arguments to find a TrackInfo
     * @example
     * // Get one TrackInfo
     * const trackInfo = await prisma.trackInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackInfoClient<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TrackInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackInfos
     * const trackInfos = await prisma.trackInfo.findMany()
     * 
     * // Get first 10 TrackInfos
     * const trackInfos = await prisma.trackInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackInfoWithIdOnly = await prisma.trackInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackInfoFindManyArgs>(args?: SelectSubset<T, TrackInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TrackInfo.
     * @param {TrackInfoCreateArgs} args - Arguments to create a TrackInfo.
     * @example
     * // Create one TrackInfo
     * const TrackInfo = await prisma.trackInfo.create({
     *   data: {
     *     // ... data to create a TrackInfo
     *   }
     * })
     * 
     */
    create<T extends TrackInfoCreateArgs>(args: SelectSubset<T, TrackInfoCreateArgs<ExtArgs>>): Prisma__TrackInfoClient<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TrackInfos.
     * @param {TrackInfoCreateManyArgs} args - Arguments to create many TrackInfos.
     * @example
     * // Create many TrackInfos
     * const trackInfo = await prisma.trackInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackInfoCreateManyArgs>(args?: SelectSubset<T, TrackInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackInfos and returns the data saved in the database.
     * @param {TrackInfoCreateManyAndReturnArgs} args - Arguments to create many TrackInfos.
     * @example
     * // Create many TrackInfos
     * const trackInfo = await prisma.trackInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackInfos and only return the `id`
     * const trackInfoWithIdOnly = await prisma.trackInfo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TrackInfo.
     * @param {TrackInfoDeleteArgs} args - Arguments to delete one TrackInfo.
     * @example
     * // Delete one TrackInfo
     * const TrackInfo = await prisma.trackInfo.delete({
     *   where: {
     *     // ... filter to delete one TrackInfo
     *   }
     * })
     * 
     */
    delete<T extends TrackInfoDeleteArgs>(args: SelectSubset<T, TrackInfoDeleteArgs<ExtArgs>>): Prisma__TrackInfoClient<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TrackInfo.
     * @param {TrackInfoUpdateArgs} args - Arguments to update one TrackInfo.
     * @example
     * // Update one TrackInfo
     * const trackInfo = await prisma.trackInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackInfoUpdateArgs>(args: SelectSubset<T, TrackInfoUpdateArgs<ExtArgs>>): Prisma__TrackInfoClient<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TrackInfos.
     * @param {TrackInfoDeleteManyArgs} args - Arguments to filter TrackInfos to delete.
     * @example
     * // Delete a few TrackInfos
     * const { count } = await prisma.trackInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackInfoDeleteManyArgs>(args?: SelectSubset<T, TrackInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackInfos
     * const trackInfo = await prisma.trackInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackInfoUpdateManyArgs>(args: SelectSubset<T, TrackInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrackInfo.
     * @param {TrackInfoUpsertArgs} args - Arguments to update or create a TrackInfo.
     * @example
     * // Update or create a TrackInfo
     * const trackInfo = await prisma.trackInfo.upsert({
     *   create: {
     *     // ... data to create a TrackInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackInfo we want to update
     *   }
     * })
     */
    upsert<T extends TrackInfoUpsertArgs>(args: SelectSubset<T, TrackInfoUpsertArgs<ExtArgs>>): Prisma__TrackInfoClient<$Result.GetResult<Prisma.$TrackInfoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TrackInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackInfoCountArgs} args - Arguments to filter TrackInfos to count.
     * @example
     * // Count the number of TrackInfos
     * const count = await prisma.trackInfo.count({
     *   where: {
     *     // ... the filter for the TrackInfos we want to count
     *   }
     * })
    **/
    count<T extends TrackInfoCountArgs>(
      args?: Subset<T, TrackInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackInfoAggregateArgs>(args: Subset<T, TrackInfoAggregateArgs>): Prisma.PrismaPromise<GetTrackInfoAggregateType<T>>

    /**
     * Group by TrackInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackInfoGroupByArgs} args - Group by arguments.
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
      T extends TrackInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackInfoGroupByArgs['orderBy'] }
        : { orderBy?: TrackInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackInfo model
   */
  readonly fields: TrackInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrackInfo model
   */ 
  interface TrackInfoFieldRefs {
    readonly id: FieldRef<"TrackInfo", 'String'>
    readonly shippingInfo: FieldRef<"TrackInfo", 'String'>
    readonly latestStatus: FieldRef<"TrackInfo", 'String'>
    readonly latestEvent: FieldRef<"TrackInfo", 'String'>
    readonly timeMetrics: FieldRef<"TrackInfo", 'String'>
    readonly milestone: FieldRef<"TrackInfo", 'String'>
    readonly miscInfo: FieldRef<"TrackInfo", 'String'>
    readonly tracking: FieldRef<"TrackInfo", 'String'>
    readonly trackId: FieldRef<"TrackInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrackInfo findUnique
   */
  export type TrackInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
    /**
     * Filter, which TrackInfo to fetch.
     */
    where: TrackInfoWhereUniqueInput
  }

  /**
   * TrackInfo findUniqueOrThrow
   */
  export type TrackInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
    /**
     * Filter, which TrackInfo to fetch.
     */
    where: TrackInfoWhereUniqueInput
  }

  /**
   * TrackInfo findFirst
   */
  export type TrackInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
    /**
     * Filter, which TrackInfo to fetch.
     */
    where?: TrackInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackInfos to fetch.
     */
    orderBy?: TrackInfoOrderByWithRelationInput | TrackInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackInfos.
     */
    cursor?: TrackInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackInfos.
     */
    distinct?: TrackInfoScalarFieldEnum | TrackInfoScalarFieldEnum[]
  }

  /**
   * TrackInfo findFirstOrThrow
   */
  export type TrackInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
    /**
     * Filter, which TrackInfo to fetch.
     */
    where?: TrackInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackInfos to fetch.
     */
    orderBy?: TrackInfoOrderByWithRelationInput | TrackInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackInfos.
     */
    cursor?: TrackInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackInfos.
     */
    distinct?: TrackInfoScalarFieldEnum | TrackInfoScalarFieldEnum[]
  }

  /**
   * TrackInfo findMany
   */
  export type TrackInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
    /**
     * Filter, which TrackInfos to fetch.
     */
    where?: TrackInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackInfos to fetch.
     */
    orderBy?: TrackInfoOrderByWithRelationInput | TrackInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackInfos.
     */
    cursor?: TrackInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackInfos.
     */
    skip?: number
    distinct?: TrackInfoScalarFieldEnum | TrackInfoScalarFieldEnum[]
  }

  /**
   * TrackInfo create
   */
  export type TrackInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackInfo.
     */
    data: XOR<TrackInfoCreateInput, TrackInfoUncheckedCreateInput>
  }

  /**
   * TrackInfo createMany
   */
  export type TrackInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackInfos.
     */
    data: TrackInfoCreateManyInput | TrackInfoCreateManyInput[]
  }

  /**
   * TrackInfo createManyAndReturn
   */
  export type TrackInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TrackInfos.
     */
    data: TrackInfoCreateManyInput | TrackInfoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackInfo update
   */
  export type TrackInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackInfo.
     */
    data: XOR<TrackInfoUpdateInput, TrackInfoUncheckedUpdateInput>
    /**
     * Choose, which TrackInfo to update.
     */
    where: TrackInfoWhereUniqueInput
  }

  /**
   * TrackInfo updateMany
   */
  export type TrackInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackInfos.
     */
    data: XOR<TrackInfoUpdateManyMutationInput, TrackInfoUncheckedUpdateManyInput>
    /**
     * Filter which TrackInfos to update
     */
    where?: TrackInfoWhereInput
  }

  /**
   * TrackInfo upsert
   */
  export type TrackInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackInfo to update in case it exists.
     */
    where: TrackInfoWhereUniqueInput
    /**
     * In case the TrackInfo found by the `where` argument doesn't exist, create a new TrackInfo with this data.
     */
    create: XOR<TrackInfoCreateInput, TrackInfoUncheckedCreateInput>
    /**
     * In case the TrackInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackInfoUpdateInput, TrackInfoUncheckedUpdateInput>
  }

  /**
   * TrackInfo delete
   */
  export type TrackInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
    /**
     * Filter which TrackInfo to delete.
     */
    where: TrackInfoWhereUniqueInput
  }

  /**
   * TrackInfo deleteMany
   */
  export type TrackInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackInfos to delete
     */
    where?: TrackInfoWhereInput
  }

  /**
   * TrackInfo without action
   */
  export type TrackInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackInfo
     */
    select?: TrackInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInfoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    isConfirmed: 'isConfirmed'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TrackScalarFieldEnum: {
    id: 'id',
    number: 'number',
    carrier: 'carrier',
    name: 'name',
    createDate: 'createDate',
    archived: 'archived',
    userId: 'userId'
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


  export const ConfirmCodeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    expiresAt: 'expiresAt'
  };

  export type ConfirmCodeScalarFieldEnum = (typeof ConfirmCodeScalarFieldEnum)[keyof typeof ConfirmCodeScalarFieldEnum]


  export const RecoveryCodeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    expiresAt: 'expiresAt'
  };

  export type RecoveryCodeScalarFieldEnum = (typeof RecoveryCodeScalarFieldEnum)[keyof typeof RecoveryCodeScalarFieldEnum]


  export const TrackInfoScalarFieldEnum: {
    id: 'id',
    shippingInfo: 'shippingInfo',
    latestStatus: 'latestStatus',
    latestEvent: 'latestEvent',
    timeMetrics: 'timeMetrics',
    milestone: 'milestone',
    miscInfo: 'miscInfo',
    tracking: 'tracking',
    trackId: 'trackId'
  };

  export type TrackInfoScalarFieldEnum = (typeof TrackInfoScalarFieldEnum)[keyof typeof TrackInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    isConfirmed?: BoolFilter<"User"> | boolean
    confirmCodes?: ConfirmCodeListRelationFilter
    recoveryCodes?: RecoveryCodeListRelationFilter
    createdTrack?: TrackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isConfirmed?: SortOrder
    confirmCodes?: ConfirmCodeOrderByRelationAggregateInput
    recoveryCodes?: RecoveryCodeOrderByRelationAggregateInput
    createdTrack?: TrackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    isConfirmed?: BoolFilter<"User"> | boolean
    confirmCodes?: ConfirmCodeListRelationFilter
    recoveryCodes?: RecoveryCodeListRelationFilter
    createdTrack?: TrackListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isConfirmed?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    isConfirmed?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type TrackWhereInput = {
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    id?: StringFilter<"Track"> | string
    number?: StringFilter<"Track"> | string
    carrier?: IntFilter<"Track"> | number
    name?: StringFilter<"Track"> | string
    createDate?: DateTimeFilter<"Track"> | Date | string
    archived?: BoolFilter<"Track"> | boolean
    userId?: StringFilter<"Track"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    TrackInfo?: TrackInfoListRelationFilter
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    carrier?: SortOrder
    name?: SortOrder
    createDate?: SortOrder
    archived?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    TrackInfo?: TrackInfoOrderByRelationAggregateInput
  }

  export type TrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    number?: StringFilter<"Track"> | string
    carrier?: IntFilter<"Track"> | number
    name?: StringFilter<"Track"> | string
    createDate?: DateTimeFilter<"Track"> | Date | string
    archived?: BoolFilter<"Track"> | boolean
    userId?: StringFilter<"Track"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    TrackInfo?: TrackInfoListRelationFilter
  }, "id">

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    carrier?: SortOrder
    name?: SortOrder
    createDate?: SortOrder
    archived?: SortOrder
    userId?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    OR?: TrackScalarWhereWithAggregatesInput[]
    NOT?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Track"> | string
    number?: StringWithAggregatesFilter<"Track"> | string
    carrier?: IntWithAggregatesFilter<"Track"> | number
    name?: StringWithAggregatesFilter<"Track"> | string
    createDate?: DateTimeWithAggregatesFilter<"Track"> | Date | string
    archived?: BoolWithAggregatesFilter<"Track"> | boolean
    userId?: StringWithAggregatesFilter<"Track"> | string
  }

  export type ConfirmCodeWhereInput = {
    AND?: ConfirmCodeWhereInput | ConfirmCodeWhereInput[]
    OR?: ConfirmCodeWhereInput[]
    NOT?: ConfirmCodeWhereInput | ConfirmCodeWhereInput[]
    id?: StringFilter<"ConfirmCode"> | string
    userId?: StringFilter<"ConfirmCode"> | string
    code?: StringFilter<"ConfirmCode"> | string
    expiresAt?: DateTimeFilter<"ConfirmCode"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ConfirmCodeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ConfirmCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfirmCodeWhereInput | ConfirmCodeWhereInput[]
    OR?: ConfirmCodeWhereInput[]
    NOT?: ConfirmCodeWhereInput | ConfirmCodeWhereInput[]
    userId?: StringFilter<"ConfirmCode"> | string
    code?: StringFilter<"ConfirmCode"> | string
    expiresAt?: DateTimeFilter<"ConfirmCode"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ConfirmCodeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    _count?: ConfirmCodeCountOrderByAggregateInput
    _max?: ConfirmCodeMaxOrderByAggregateInput
    _min?: ConfirmCodeMinOrderByAggregateInput
  }

  export type ConfirmCodeScalarWhereWithAggregatesInput = {
    AND?: ConfirmCodeScalarWhereWithAggregatesInput | ConfirmCodeScalarWhereWithAggregatesInput[]
    OR?: ConfirmCodeScalarWhereWithAggregatesInput[]
    NOT?: ConfirmCodeScalarWhereWithAggregatesInput | ConfirmCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConfirmCode"> | string
    userId?: StringWithAggregatesFilter<"ConfirmCode"> | string
    code?: StringWithAggregatesFilter<"ConfirmCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ConfirmCode"> | Date | string
  }

  export type RecoveryCodeWhereInput = {
    AND?: RecoveryCodeWhereInput | RecoveryCodeWhereInput[]
    OR?: RecoveryCodeWhereInput[]
    NOT?: RecoveryCodeWhereInput | RecoveryCodeWhereInput[]
    id?: StringFilter<"RecoveryCode"> | string
    userId?: StringFilter<"RecoveryCode"> | string
    code?: StringFilter<"RecoveryCode"> | string
    expiresAt?: DateTimeFilter<"RecoveryCode"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RecoveryCodeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RecoveryCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecoveryCodeWhereInput | RecoveryCodeWhereInput[]
    OR?: RecoveryCodeWhereInput[]
    NOT?: RecoveryCodeWhereInput | RecoveryCodeWhereInput[]
    userId?: StringFilter<"RecoveryCode"> | string
    code?: StringFilter<"RecoveryCode"> | string
    expiresAt?: DateTimeFilter<"RecoveryCode"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type RecoveryCodeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    _count?: RecoveryCodeCountOrderByAggregateInput
    _max?: RecoveryCodeMaxOrderByAggregateInput
    _min?: RecoveryCodeMinOrderByAggregateInput
  }

  export type RecoveryCodeScalarWhereWithAggregatesInput = {
    AND?: RecoveryCodeScalarWhereWithAggregatesInput | RecoveryCodeScalarWhereWithAggregatesInput[]
    OR?: RecoveryCodeScalarWhereWithAggregatesInput[]
    NOT?: RecoveryCodeScalarWhereWithAggregatesInput | RecoveryCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecoveryCode"> | string
    userId?: StringWithAggregatesFilter<"RecoveryCode"> | string
    code?: StringWithAggregatesFilter<"RecoveryCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RecoveryCode"> | Date | string
  }

  export type TrackInfoWhereInput = {
    AND?: TrackInfoWhereInput | TrackInfoWhereInput[]
    OR?: TrackInfoWhereInput[]
    NOT?: TrackInfoWhereInput | TrackInfoWhereInput[]
    id?: StringFilter<"TrackInfo"> | string
    shippingInfo?: StringFilter<"TrackInfo"> | string
    latestStatus?: StringFilter<"TrackInfo"> | string
    latestEvent?: StringFilter<"TrackInfo"> | string
    timeMetrics?: StringFilter<"TrackInfo"> | string
    milestone?: StringFilter<"TrackInfo"> | string
    miscInfo?: StringFilter<"TrackInfo"> | string
    tracking?: StringFilter<"TrackInfo"> | string
    trackId?: StringFilter<"TrackInfo"> | string
    track?: XOR<TrackRelationFilter, TrackWhereInput>
  }

  export type TrackInfoOrderByWithRelationInput = {
    id?: SortOrder
    shippingInfo?: SortOrder
    latestStatus?: SortOrder
    latestEvent?: SortOrder
    timeMetrics?: SortOrder
    milestone?: SortOrder
    miscInfo?: SortOrder
    tracking?: SortOrder
    trackId?: SortOrder
    track?: TrackOrderByWithRelationInput
  }

  export type TrackInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackInfoWhereInput | TrackInfoWhereInput[]
    OR?: TrackInfoWhereInput[]
    NOT?: TrackInfoWhereInput | TrackInfoWhereInput[]
    shippingInfo?: StringFilter<"TrackInfo"> | string
    latestStatus?: StringFilter<"TrackInfo"> | string
    latestEvent?: StringFilter<"TrackInfo"> | string
    timeMetrics?: StringFilter<"TrackInfo"> | string
    milestone?: StringFilter<"TrackInfo"> | string
    miscInfo?: StringFilter<"TrackInfo"> | string
    tracking?: StringFilter<"TrackInfo"> | string
    trackId?: StringFilter<"TrackInfo"> | string
    track?: XOR<TrackRelationFilter, TrackWhereInput>
  }, "id">

  export type TrackInfoOrderByWithAggregationInput = {
    id?: SortOrder
    shippingInfo?: SortOrder
    latestStatus?: SortOrder
    latestEvent?: SortOrder
    timeMetrics?: SortOrder
    milestone?: SortOrder
    miscInfo?: SortOrder
    tracking?: SortOrder
    trackId?: SortOrder
    _count?: TrackInfoCountOrderByAggregateInput
    _max?: TrackInfoMaxOrderByAggregateInput
    _min?: TrackInfoMinOrderByAggregateInput
  }

  export type TrackInfoScalarWhereWithAggregatesInput = {
    AND?: TrackInfoScalarWhereWithAggregatesInput | TrackInfoScalarWhereWithAggregatesInput[]
    OR?: TrackInfoScalarWhereWithAggregatesInput[]
    NOT?: TrackInfoScalarWhereWithAggregatesInput | TrackInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackInfo"> | string
    shippingInfo?: StringWithAggregatesFilter<"TrackInfo"> | string
    latestStatus?: StringWithAggregatesFilter<"TrackInfo"> | string
    latestEvent?: StringWithAggregatesFilter<"TrackInfo"> | string
    timeMetrics?: StringWithAggregatesFilter<"TrackInfo"> | string
    milestone?: StringWithAggregatesFilter<"TrackInfo"> | string
    miscInfo?: StringWithAggregatesFilter<"TrackInfo"> | string
    tracking?: StringWithAggregatesFilter<"TrackInfo"> | string
    trackId?: StringWithAggregatesFilter<"TrackInfo"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    isConfirmed?: boolean
    confirmCodes?: ConfirmCodeCreateNestedManyWithoutUserInput
    recoveryCodes?: RecoveryCodeCreateNestedManyWithoutUserInput
    createdTrack?: TrackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    isConfirmed?: boolean
    confirmCodes?: ConfirmCodeUncheckedCreateNestedManyWithoutUserInput
    recoveryCodes?: RecoveryCodeUncheckedCreateNestedManyWithoutUserInput
    createdTrack?: TrackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmCodes?: ConfirmCodeUpdateManyWithoutUserNestedInput
    recoveryCodes?: RecoveryCodeUpdateManyWithoutUserNestedInput
    createdTrack?: TrackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmCodes?: ConfirmCodeUncheckedUpdateManyWithoutUserNestedInput
    recoveryCodes?: RecoveryCodeUncheckedUpdateManyWithoutUserNestedInput
    createdTrack?: TrackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    isConfirmed?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackCreateInput = {
    id?: string
    number: string
    carrier: number
    name?: string
    createDate?: Date | string
    archived?: boolean
    user: UserCreateNestedOneWithoutCreatedTrackInput
    TrackInfo?: TrackInfoCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateInput = {
    id?: string
    number: string
    carrier: number
    name?: string
    createDate?: Date | string
    archived?: boolean
    userId: string
    TrackInfo?: TrackInfoUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    carrier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCreatedTrackNestedInput
    TrackInfo?: TrackInfoUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    carrier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    TrackInfo?: TrackInfoUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
    id?: string
    number: string
    carrier: number
    name?: string
    createDate?: Date | string
    archived?: boolean
    userId: string
  }

  export type TrackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    carrier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    carrier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConfirmCodeCreateInput = {
    id?: string
    code: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutConfirmCodesInput
  }

  export type ConfirmCodeUncheckedCreateInput = {
    id?: string
    userId: string
    code: string
    expiresAt: Date | string
  }

  export type ConfirmCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConfirmCodesNestedInput
  }

  export type ConfirmCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmCodeCreateManyInput = {
    id?: string
    userId: string
    code: string
    expiresAt: Date | string
  }

  export type ConfirmCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryCodeCreateInput = {
    id?: string
    code: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutRecoveryCodesInput
  }

  export type RecoveryCodeUncheckedCreateInput = {
    id?: string
    userId: string
    code: string
    expiresAt: Date | string
  }

  export type RecoveryCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecoveryCodesNestedInput
  }

  export type RecoveryCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryCodeCreateManyInput = {
    id?: string
    userId: string
    code: string
    expiresAt: Date | string
  }

  export type RecoveryCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackInfoCreateInput = {
    id?: string
    shippingInfo: string
    latestStatus: string
    latestEvent: string
    timeMetrics: string
    milestone: string
    miscInfo: string
    tracking: string
    track: TrackCreateNestedOneWithoutTrackInfoInput
  }

  export type TrackInfoUncheckedCreateInput = {
    id?: string
    shippingInfo: string
    latestStatus: string
    latestEvent: string
    timeMetrics: string
    milestone: string
    miscInfo: string
    tracking: string
    trackId: string
  }

  export type TrackInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingInfo?: StringFieldUpdateOperationsInput | string
    latestStatus?: StringFieldUpdateOperationsInput | string
    latestEvent?: StringFieldUpdateOperationsInput | string
    timeMetrics?: StringFieldUpdateOperationsInput | string
    milestone?: StringFieldUpdateOperationsInput | string
    miscInfo?: StringFieldUpdateOperationsInput | string
    tracking?: StringFieldUpdateOperationsInput | string
    track?: TrackUpdateOneRequiredWithoutTrackInfoNestedInput
  }

  export type TrackInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingInfo?: StringFieldUpdateOperationsInput | string
    latestStatus?: StringFieldUpdateOperationsInput | string
    latestEvent?: StringFieldUpdateOperationsInput | string
    timeMetrics?: StringFieldUpdateOperationsInput | string
    milestone?: StringFieldUpdateOperationsInput | string
    miscInfo?: StringFieldUpdateOperationsInput | string
    tracking?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackInfoCreateManyInput = {
    id?: string
    shippingInfo: string
    latestStatus: string
    latestEvent: string
    timeMetrics: string
    milestone: string
    miscInfo: string
    tracking: string
    trackId: string
  }

  export type TrackInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingInfo?: StringFieldUpdateOperationsInput | string
    latestStatus?: StringFieldUpdateOperationsInput | string
    latestEvent?: StringFieldUpdateOperationsInput | string
    timeMetrics?: StringFieldUpdateOperationsInput | string
    milestone?: StringFieldUpdateOperationsInput | string
    miscInfo?: StringFieldUpdateOperationsInput | string
    tracking?: StringFieldUpdateOperationsInput | string
  }

  export type TrackInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingInfo?: StringFieldUpdateOperationsInput | string
    latestStatus?: StringFieldUpdateOperationsInput | string
    latestEvent?: StringFieldUpdateOperationsInput | string
    timeMetrics?: StringFieldUpdateOperationsInput | string
    milestone?: StringFieldUpdateOperationsInput | string
    miscInfo?: StringFieldUpdateOperationsInput | string
    tracking?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ConfirmCodeListRelationFilter = {
    every?: ConfirmCodeWhereInput
    some?: ConfirmCodeWhereInput
    none?: ConfirmCodeWhereInput
  }

  export type RecoveryCodeListRelationFilter = {
    every?: RecoveryCodeWhereInput
    some?: RecoveryCodeWhereInput
    none?: RecoveryCodeWhereInput
  }

  export type TrackListRelationFilter = {
    every?: TrackWhereInput
    some?: TrackWhereInput
    none?: TrackWhereInput
  }

  export type ConfirmCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecoveryCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isConfirmed?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isConfirmed?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isConfirmed?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TrackInfoListRelationFilter = {
    every?: TrackInfoWhereInput
    some?: TrackInfoWhereInput
    none?: TrackInfoWhereInput
  }

  export type TrackInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    carrier?: SortOrder
    name?: SortOrder
    createDate?: SortOrder
    archived?: SortOrder
    userId?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    carrier?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    carrier?: SortOrder
    name?: SortOrder
    createDate?: SortOrder
    archived?: SortOrder
    userId?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    carrier?: SortOrder
    name?: SortOrder
    createDate?: SortOrder
    archived?: SortOrder
    userId?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    carrier?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConfirmCodeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type ConfirmCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type ConfirmCodeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type RecoveryCodeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type RecoveryCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type RecoveryCodeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type TrackRelationFilter = {
    is?: TrackWhereInput
    isNot?: TrackWhereInput
  }

  export type TrackInfoCountOrderByAggregateInput = {
    id?: SortOrder
    shippingInfo?: SortOrder
    latestStatus?: SortOrder
    latestEvent?: SortOrder
    timeMetrics?: SortOrder
    milestone?: SortOrder
    miscInfo?: SortOrder
    tracking?: SortOrder
    trackId?: SortOrder
  }

  export type TrackInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    shippingInfo?: SortOrder
    latestStatus?: SortOrder
    latestEvent?: SortOrder
    timeMetrics?: SortOrder
    milestone?: SortOrder
    miscInfo?: SortOrder
    tracking?: SortOrder
    trackId?: SortOrder
  }

  export type TrackInfoMinOrderByAggregateInput = {
    id?: SortOrder
    shippingInfo?: SortOrder
    latestStatus?: SortOrder
    latestEvent?: SortOrder
    timeMetrics?: SortOrder
    milestone?: SortOrder
    miscInfo?: SortOrder
    tracking?: SortOrder
    trackId?: SortOrder
  }

  export type ConfirmCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<ConfirmCodeCreateWithoutUserInput, ConfirmCodeUncheckedCreateWithoutUserInput> | ConfirmCodeCreateWithoutUserInput[] | ConfirmCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmCodeCreateOrConnectWithoutUserInput | ConfirmCodeCreateOrConnectWithoutUserInput[]
    createMany?: ConfirmCodeCreateManyUserInputEnvelope
    connect?: ConfirmCodeWhereUniqueInput | ConfirmCodeWhereUniqueInput[]
  }

  export type RecoveryCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<RecoveryCodeCreateWithoutUserInput, RecoveryCodeUncheckedCreateWithoutUserInput> | RecoveryCodeCreateWithoutUserInput[] | RecoveryCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecoveryCodeCreateOrConnectWithoutUserInput | RecoveryCodeCreateOrConnectWithoutUserInput[]
    createMany?: RecoveryCodeCreateManyUserInputEnvelope
    connect?: RecoveryCodeWhereUniqueInput | RecoveryCodeWhereUniqueInput[]
  }

  export type TrackCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackCreateWithoutUserInput, TrackUncheckedCreateWithoutUserInput> | TrackCreateWithoutUserInput[] | TrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutUserInput | TrackCreateOrConnectWithoutUserInput[]
    createMany?: TrackCreateManyUserInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type ConfirmCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConfirmCodeCreateWithoutUserInput, ConfirmCodeUncheckedCreateWithoutUserInput> | ConfirmCodeCreateWithoutUserInput[] | ConfirmCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmCodeCreateOrConnectWithoutUserInput | ConfirmCodeCreateOrConnectWithoutUserInput[]
    createMany?: ConfirmCodeCreateManyUserInputEnvelope
    connect?: ConfirmCodeWhereUniqueInput | ConfirmCodeWhereUniqueInput[]
  }

  export type RecoveryCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecoveryCodeCreateWithoutUserInput, RecoveryCodeUncheckedCreateWithoutUserInput> | RecoveryCodeCreateWithoutUserInput[] | RecoveryCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecoveryCodeCreateOrConnectWithoutUserInput | RecoveryCodeCreateOrConnectWithoutUserInput[]
    createMany?: RecoveryCodeCreateManyUserInputEnvelope
    connect?: RecoveryCodeWhereUniqueInput | RecoveryCodeWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackCreateWithoutUserInput, TrackUncheckedCreateWithoutUserInput> | TrackCreateWithoutUserInput[] | TrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutUserInput | TrackCreateOrConnectWithoutUserInput[]
    createMany?: TrackCreateManyUserInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ConfirmCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConfirmCodeCreateWithoutUserInput, ConfirmCodeUncheckedCreateWithoutUserInput> | ConfirmCodeCreateWithoutUserInput[] | ConfirmCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmCodeCreateOrConnectWithoutUserInput | ConfirmCodeCreateOrConnectWithoutUserInput[]
    upsert?: ConfirmCodeUpsertWithWhereUniqueWithoutUserInput | ConfirmCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConfirmCodeCreateManyUserInputEnvelope
    set?: ConfirmCodeWhereUniqueInput | ConfirmCodeWhereUniqueInput[]
    disconnect?: ConfirmCodeWhereUniqueInput | ConfirmCodeWhereUniqueInput[]
    delete?: ConfirmCodeWhereUniqueInput | ConfirmCodeWhereUniqueInput[]
    connect?: ConfirmCodeWhereUniqueInput | ConfirmCodeWhereUniqueInput[]
    update?: ConfirmCodeUpdateWithWhereUniqueWithoutUserInput | ConfirmCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConfirmCodeUpdateManyWithWhereWithoutUserInput | ConfirmCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConfirmCodeScalarWhereInput | ConfirmCodeScalarWhereInput[]
  }

  export type RecoveryCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecoveryCodeCreateWithoutUserInput, RecoveryCodeUncheckedCreateWithoutUserInput> | RecoveryCodeCreateWithoutUserInput[] | RecoveryCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecoveryCodeCreateOrConnectWithoutUserInput | RecoveryCodeCreateOrConnectWithoutUserInput[]
    upsert?: RecoveryCodeUpsertWithWhereUniqueWithoutUserInput | RecoveryCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecoveryCodeCreateManyUserInputEnvelope
    set?: RecoveryCodeWhereUniqueInput | RecoveryCodeWhereUniqueInput[]
    disconnect?: RecoveryCodeWhereUniqueInput | RecoveryCodeWhereUniqueInput[]
    delete?: RecoveryCodeWhereUniqueInput | RecoveryCodeWhereUniqueInput[]
    connect?: RecoveryCodeWhereUniqueInput | RecoveryCodeWhereUniqueInput[]
    update?: RecoveryCodeUpdateWithWhereUniqueWithoutUserInput | RecoveryCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecoveryCodeUpdateManyWithWhereWithoutUserInput | RecoveryCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecoveryCodeScalarWhereInput | RecoveryCodeScalarWhereInput[]
  }

  export type TrackUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackCreateWithoutUserInput, TrackUncheckedCreateWithoutUserInput> | TrackCreateWithoutUserInput[] | TrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutUserInput | TrackCreateOrConnectWithoutUserInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutUserInput | TrackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrackCreateManyUserInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutUserInput | TrackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutUserInput | TrackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type ConfirmCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConfirmCodeCreateWithoutUserInput, ConfirmCodeUncheckedCreateWithoutUserInput> | ConfirmCodeCreateWithoutUserInput[] | ConfirmCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmCodeCreateOrConnectWithoutUserInput | ConfirmCodeCreateOrConnectWithoutUserInput[]
    upsert?: ConfirmCodeUpsertWithWhereUniqueWithoutUserInput | ConfirmCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConfirmCodeCreateManyUserInputEnvelope
    set?: ConfirmCodeWhereUniqueInput | ConfirmCodeWhereUniqueInput[]
    disconnect?: ConfirmCodeWhereUniqueInput | ConfirmCodeWhereUniqueInput[]
    delete?: ConfirmCodeWhereUniqueInput | ConfirmCodeWhereUniqueInput[]
    connect?: ConfirmCodeWhereUniqueInput | ConfirmCodeWhereUniqueInput[]
    update?: ConfirmCodeUpdateWithWhereUniqueWithoutUserInput | ConfirmCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConfirmCodeUpdateManyWithWhereWithoutUserInput | ConfirmCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConfirmCodeScalarWhereInput | ConfirmCodeScalarWhereInput[]
  }

  export type RecoveryCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecoveryCodeCreateWithoutUserInput, RecoveryCodeUncheckedCreateWithoutUserInput> | RecoveryCodeCreateWithoutUserInput[] | RecoveryCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecoveryCodeCreateOrConnectWithoutUserInput | RecoveryCodeCreateOrConnectWithoutUserInput[]
    upsert?: RecoveryCodeUpsertWithWhereUniqueWithoutUserInput | RecoveryCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecoveryCodeCreateManyUserInputEnvelope
    set?: RecoveryCodeWhereUniqueInput | RecoveryCodeWhereUniqueInput[]
    disconnect?: RecoveryCodeWhereUniqueInput | RecoveryCodeWhereUniqueInput[]
    delete?: RecoveryCodeWhereUniqueInput | RecoveryCodeWhereUniqueInput[]
    connect?: RecoveryCodeWhereUniqueInput | RecoveryCodeWhereUniqueInput[]
    update?: RecoveryCodeUpdateWithWhereUniqueWithoutUserInput | RecoveryCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecoveryCodeUpdateManyWithWhereWithoutUserInput | RecoveryCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecoveryCodeScalarWhereInput | RecoveryCodeScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackCreateWithoutUserInput, TrackUncheckedCreateWithoutUserInput> | TrackCreateWithoutUserInput[] | TrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutUserInput | TrackCreateOrConnectWithoutUserInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutUserInput | TrackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrackCreateManyUserInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutUserInput | TrackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutUserInput | TrackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedTrackInput = {
    create?: XOR<UserCreateWithoutCreatedTrackInput, UserUncheckedCreateWithoutCreatedTrackInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTrackInput
    connect?: UserWhereUniqueInput
  }

  export type TrackInfoCreateNestedManyWithoutTrackInput = {
    create?: XOR<TrackInfoCreateWithoutTrackInput, TrackInfoUncheckedCreateWithoutTrackInput> | TrackInfoCreateWithoutTrackInput[] | TrackInfoUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackInfoCreateOrConnectWithoutTrackInput | TrackInfoCreateOrConnectWithoutTrackInput[]
    createMany?: TrackInfoCreateManyTrackInputEnvelope
    connect?: TrackInfoWhereUniqueInput | TrackInfoWhereUniqueInput[]
  }

  export type TrackInfoUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<TrackInfoCreateWithoutTrackInput, TrackInfoUncheckedCreateWithoutTrackInput> | TrackInfoCreateWithoutTrackInput[] | TrackInfoUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackInfoCreateOrConnectWithoutTrackInput | TrackInfoCreateOrConnectWithoutTrackInput[]
    createMany?: TrackInfoCreateManyTrackInputEnvelope
    connect?: TrackInfoWhereUniqueInput | TrackInfoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCreatedTrackNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTrackInput, UserUncheckedCreateWithoutCreatedTrackInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTrackInput
    upsert?: UserUpsertWithoutCreatedTrackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTrackInput, UserUpdateWithoutCreatedTrackInput>, UserUncheckedUpdateWithoutCreatedTrackInput>
  }

  export type TrackInfoUpdateManyWithoutTrackNestedInput = {
    create?: XOR<TrackInfoCreateWithoutTrackInput, TrackInfoUncheckedCreateWithoutTrackInput> | TrackInfoCreateWithoutTrackInput[] | TrackInfoUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackInfoCreateOrConnectWithoutTrackInput | TrackInfoCreateOrConnectWithoutTrackInput[]
    upsert?: TrackInfoUpsertWithWhereUniqueWithoutTrackInput | TrackInfoUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: TrackInfoCreateManyTrackInputEnvelope
    set?: TrackInfoWhereUniqueInput | TrackInfoWhereUniqueInput[]
    disconnect?: TrackInfoWhereUniqueInput | TrackInfoWhereUniqueInput[]
    delete?: TrackInfoWhereUniqueInput | TrackInfoWhereUniqueInput[]
    connect?: TrackInfoWhereUniqueInput | TrackInfoWhereUniqueInput[]
    update?: TrackInfoUpdateWithWhereUniqueWithoutTrackInput | TrackInfoUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: TrackInfoUpdateManyWithWhereWithoutTrackInput | TrackInfoUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: TrackInfoScalarWhereInput | TrackInfoScalarWhereInput[]
  }

  export type TrackInfoUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<TrackInfoCreateWithoutTrackInput, TrackInfoUncheckedCreateWithoutTrackInput> | TrackInfoCreateWithoutTrackInput[] | TrackInfoUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackInfoCreateOrConnectWithoutTrackInput | TrackInfoCreateOrConnectWithoutTrackInput[]
    upsert?: TrackInfoUpsertWithWhereUniqueWithoutTrackInput | TrackInfoUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: TrackInfoCreateManyTrackInputEnvelope
    set?: TrackInfoWhereUniqueInput | TrackInfoWhereUniqueInput[]
    disconnect?: TrackInfoWhereUniqueInput | TrackInfoWhereUniqueInput[]
    delete?: TrackInfoWhereUniqueInput | TrackInfoWhereUniqueInput[]
    connect?: TrackInfoWhereUniqueInput | TrackInfoWhereUniqueInput[]
    update?: TrackInfoUpdateWithWhereUniqueWithoutTrackInput | TrackInfoUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: TrackInfoUpdateManyWithWhereWithoutTrackInput | TrackInfoUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: TrackInfoScalarWhereInput | TrackInfoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutConfirmCodesInput = {
    create?: XOR<UserCreateWithoutConfirmCodesInput, UserUncheckedCreateWithoutConfirmCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutConfirmCodesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConfirmCodesNestedInput = {
    create?: XOR<UserCreateWithoutConfirmCodesInput, UserUncheckedCreateWithoutConfirmCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutConfirmCodesInput
    upsert?: UserUpsertWithoutConfirmCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConfirmCodesInput, UserUpdateWithoutConfirmCodesInput>, UserUncheckedUpdateWithoutConfirmCodesInput>
  }

  export type UserCreateNestedOneWithoutRecoveryCodesInput = {
    create?: XOR<UserCreateWithoutRecoveryCodesInput, UserUncheckedCreateWithoutRecoveryCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecoveryCodesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecoveryCodesNestedInput = {
    create?: XOR<UserCreateWithoutRecoveryCodesInput, UserUncheckedCreateWithoutRecoveryCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecoveryCodesInput
    upsert?: UserUpsertWithoutRecoveryCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecoveryCodesInput, UserUpdateWithoutRecoveryCodesInput>, UserUncheckedUpdateWithoutRecoveryCodesInput>
  }

  export type TrackCreateNestedOneWithoutTrackInfoInput = {
    create?: XOR<TrackCreateWithoutTrackInfoInput, TrackUncheckedCreateWithoutTrackInfoInput>
    connectOrCreate?: TrackCreateOrConnectWithoutTrackInfoInput
    connect?: TrackWhereUniqueInput
  }

  export type TrackUpdateOneRequiredWithoutTrackInfoNestedInput = {
    create?: XOR<TrackCreateWithoutTrackInfoInput, TrackUncheckedCreateWithoutTrackInfoInput>
    connectOrCreate?: TrackCreateOrConnectWithoutTrackInfoInput
    upsert?: TrackUpsertWithoutTrackInfoInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutTrackInfoInput, TrackUpdateWithoutTrackInfoInput>, TrackUncheckedUpdateWithoutTrackInfoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConfirmCodeCreateWithoutUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
  }

  export type ConfirmCodeUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
  }

  export type ConfirmCodeCreateOrConnectWithoutUserInput = {
    where: ConfirmCodeWhereUniqueInput
    create: XOR<ConfirmCodeCreateWithoutUserInput, ConfirmCodeUncheckedCreateWithoutUserInput>
  }

  export type ConfirmCodeCreateManyUserInputEnvelope = {
    data: ConfirmCodeCreateManyUserInput | ConfirmCodeCreateManyUserInput[]
  }

  export type RecoveryCodeCreateWithoutUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
  }

  export type RecoveryCodeUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
  }

  export type RecoveryCodeCreateOrConnectWithoutUserInput = {
    where: RecoveryCodeWhereUniqueInput
    create: XOR<RecoveryCodeCreateWithoutUserInput, RecoveryCodeUncheckedCreateWithoutUserInput>
  }

  export type RecoveryCodeCreateManyUserInputEnvelope = {
    data: RecoveryCodeCreateManyUserInput | RecoveryCodeCreateManyUserInput[]
  }

  export type TrackCreateWithoutUserInput = {
    id?: string
    number: string
    carrier: number
    name?: string
    createDate?: Date | string
    archived?: boolean
    TrackInfo?: TrackInfoCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutUserInput = {
    id?: string
    number: string
    carrier: number
    name?: string
    createDate?: Date | string
    archived?: boolean
    TrackInfo?: TrackInfoUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutUserInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutUserInput, TrackUncheckedCreateWithoutUserInput>
  }

  export type TrackCreateManyUserInputEnvelope = {
    data: TrackCreateManyUserInput | TrackCreateManyUserInput[]
  }

  export type ConfirmCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: ConfirmCodeWhereUniqueInput
    update: XOR<ConfirmCodeUpdateWithoutUserInput, ConfirmCodeUncheckedUpdateWithoutUserInput>
    create: XOR<ConfirmCodeCreateWithoutUserInput, ConfirmCodeUncheckedCreateWithoutUserInput>
  }

  export type ConfirmCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: ConfirmCodeWhereUniqueInput
    data: XOR<ConfirmCodeUpdateWithoutUserInput, ConfirmCodeUncheckedUpdateWithoutUserInput>
  }

  export type ConfirmCodeUpdateManyWithWhereWithoutUserInput = {
    where: ConfirmCodeScalarWhereInput
    data: XOR<ConfirmCodeUpdateManyMutationInput, ConfirmCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type ConfirmCodeScalarWhereInput = {
    AND?: ConfirmCodeScalarWhereInput | ConfirmCodeScalarWhereInput[]
    OR?: ConfirmCodeScalarWhereInput[]
    NOT?: ConfirmCodeScalarWhereInput | ConfirmCodeScalarWhereInput[]
    id?: StringFilter<"ConfirmCode"> | string
    userId?: StringFilter<"ConfirmCode"> | string
    code?: StringFilter<"ConfirmCode"> | string
    expiresAt?: DateTimeFilter<"ConfirmCode"> | Date | string
  }

  export type RecoveryCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: RecoveryCodeWhereUniqueInput
    update: XOR<RecoveryCodeUpdateWithoutUserInput, RecoveryCodeUncheckedUpdateWithoutUserInput>
    create: XOR<RecoveryCodeCreateWithoutUserInput, RecoveryCodeUncheckedCreateWithoutUserInput>
  }

  export type RecoveryCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: RecoveryCodeWhereUniqueInput
    data: XOR<RecoveryCodeUpdateWithoutUserInput, RecoveryCodeUncheckedUpdateWithoutUserInput>
  }

  export type RecoveryCodeUpdateManyWithWhereWithoutUserInput = {
    where: RecoveryCodeScalarWhereInput
    data: XOR<RecoveryCodeUpdateManyMutationInput, RecoveryCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type RecoveryCodeScalarWhereInput = {
    AND?: RecoveryCodeScalarWhereInput | RecoveryCodeScalarWhereInput[]
    OR?: RecoveryCodeScalarWhereInput[]
    NOT?: RecoveryCodeScalarWhereInput | RecoveryCodeScalarWhereInput[]
    id?: StringFilter<"RecoveryCode"> | string
    userId?: StringFilter<"RecoveryCode"> | string
    code?: StringFilter<"RecoveryCode"> | string
    expiresAt?: DateTimeFilter<"RecoveryCode"> | Date | string
  }

  export type TrackUpsertWithWhereUniqueWithoutUserInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutUserInput, TrackUncheckedUpdateWithoutUserInput>
    create: XOR<TrackCreateWithoutUserInput, TrackUncheckedCreateWithoutUserInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutUserInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutUserInput, TrackUncheckedUpdateWithoutUserInput>
  }

  export type TrackUpdateManyWithWhereWithoutUserInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutUserInput>
  }

  export type TrackScalarWhereInput = {
    AND?: TrackScalarWhereInput | TrackScalarWhereInput[]
    OR?: TrackScalarWhereInput[]
    NOT?: TrackScalarWhereInput | TrackScalarWhereInput[]
    id?: StringFilter<"Track"> | string
    number?: StringFilter<"Track"> | string
    carrier?: IntFilter<"Track"> | number
    name?: StringFilter<"Track"> | string
    createDate?: DateTimeFilter<"Track"> | Date | string
    archived?: BoolFilter<"Track"> | boolean
    userId?: StringFilter<"Track"> | string
  }

  export type UserCreateWithoutCreatedTrackInput = {
    id?: string
    email: string
    password: string
    name: string
    isConfirmed?: boolean
    confirmCodes?: ConfirmCodeCreateNestedManyWithoutUserInput
    recoveryCodes?: RecoveryCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedTrackInput = {
    id?: string
    email: string
    password: string
    name: string
    isConfirmed?: boolean
    confirmCodes?: ConfirmCodeUncheckedCreateNestedManyWithoutUserInput
    recoveryCodes?: RecoveryCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedTrackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTrackInput, UserUncheckedCreateWithoutCreatedTrackInput>
  }

  export type TrackInfoCreateWithoutTrackInput = {
    id?: string
    shippingInfo: string
    latestStatus: string
    latestEvent: string
    timeMetrics: string
    milestone: string
    miscInfo: string
    tracking: string
  }

  export type TrackInfoUncheckedCreateWithoutTrackInput = {
    id?: string
    shippingInfo: string
    latestStatus: string
    latestEvent: string
    timeMetrics: string
    milestone: string
    miscInfo: string
    tracking: string
  }

  export type TrackInfoCreateOrConnectWithoutTrackInput = {
    where: TrackInfoWhereUniqueInput
    create: XOR<TrackInfoCreateWithoutTrackInput, TrackInfoUncheckedCreateWithoutTrackInput>
  }

  export type TrackInfoCreateManyTrackInputEnvelope = {
    data: TrackInfoCreateManyTrackInput | TrackInfoCreateManyTrackInput[]
  }

  export type UserUpsertWithoutCreatedTrackInput = {
    update: XOR<UserUpdateWithoutCreatedTrackInput, UserUncheckedUpdateWithoutCreatedTrackInput>
    create: XOR<UserCreateWithoutCreatedTrackInput, UserUncheckedCreateWithoutCreatedTrackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTrackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTrackInput, UserUncheckedUpdateWithoutCreatedTrackInput>
  }

  export type UserUpdateWithoutCreatedTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmCodes?: ConfirmCodeUpdateManyWithoutUserNestedInput
    recoveryCodes?: RecoveryCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmCodes?: ConfirmCodeUncheckedUpdateManyWithoutUserNestedInput
    recoveryCodes?: RecoveryCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrackInfoUpsertWithWhereUniqueWithoutTrackInput = {
    where: TrackInfoWhereUniqueInput
    update: XOR<TrackInfoUpdateWithoutTrackInput, TrackInfoUncheckedUpdateWithoutTrackInput>
    create: XOR<TrackInfoCreateWithoutTrackInput, TrackInfoUncheckedCreateWithoutTrackInput>
  }

  export type TrackInfoUpdateWithWhereUniqueWithoutTrackInput = {
    where: TrackInfoWhereUniqueInput
    data: XOR<TrackInfoUpdateWithoutTrackInput, TrackInfoUncheckedUpdateWithoutTrackInput>
  }

  export type TrackInfoUpdateManyWithWhereWithoutTrackInput = {
    where: TrackInfoScalarWhereInput
    data: XOR<TrackInfoUpdateManyMutationInput, TrackInfoUncheckedUpdateManyWithoutTrackInput>
  }

  export type TrackInfoScalarWhereInput = {
    AND?: TrackInfoScalarWhereInput | TrackInfoScalarWhereInput[]
    OR?: TrackInfoScalarWhereInput[]
    NOT?: TrackInfoScalarWhereInput | TrackInfoScalarWhereInput[]
    id?: StringFilter<"TrackInfo"> | string
    shippingInfo?: StringFilter<"TrackInfo"> | string
    latestStatus?: StringFilter<"TrackInfo"> | string
    latestEvent?: StringFilter<"TrackInfo"> | string
    timeMetrics?: StringFilter<"TrackInfo"> | string
    milestone?: StringFilter<"TrackInfo"> | string
    miscInfo?: StringFilter<"TrackInfo"> | string
    tracking?: StringFilter<"TrackInfo"> | string
    trackId?: StringFilter<"TrackInfo"> | string
  }

  export type UserCreateWithoutConfirmCodesInput = {
    id?: string
    email: string
    password: string
    name: string
    isConfirmed?: boolean
    recoveryCodes?: RecoveryCodeCreateNestedManyWithoutUserInput
    createdTrack?: TrackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConfirmCodesInput = {
    id?: string
    email: string
    password: string
    name: string
    isConfirmed?: boolean
    recoveryCodes?: RecoveryCodeUncheckedCreateNestedManyWithoutUserInput
    createdTrack?: TrackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConfirmCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConfirmCodesInput, UserUncheckedCreateWithoutConfirmCodesInput>
  }

  export type UserUpsertWithoutConfirmCodesInput = {
    update: XOR<UserUpdateWithoutConfirmCodesInput, UserUncheckedUpdateWithoutConfirmCodesInput>
    create: XOR<UserCreateWithoutConfirmCodesInput, UserUncheckedCreateWithoutConfirmCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConfirmCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConfirmCodesInput, UserUncheckedUpdateWithoutConfirmCodesInput>
  }

  export type UserUpdateWithoutConfirmCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    recoveryCodes?: RecoveryCodeUpdateManyWithoutUserNestedInput
    createdTrack?: TrackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConfirmCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    recoveryCodes?: RecoveryCodeUncheckedUpdateManyWithoutUserNestedInput
    createdTrack?: TrackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRecoveryCodesInput = {
    id?: string
    email: string
    password: string
    name: string
    isConfirmed?: boolean
    confirmCodes?: ConfirmCodeCreateNestedManyWithoutUserInput
    createdTrack?: TrackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecoveryCodesInput = {
    id?: string
    email: string
    password: string
    name: string
    isConfirmed?: boolean
    confirmCodes?: ConfirmCodeUncheckedCreateNestedManyWithoutUserInput
    createdTrack?: TrackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecoveryCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecoveryCodesInput, UserUncheckedCreateWithoutRecoveryCodesInput>
  }

  export type UserUpsertWithoutRecoveryCodesInput = {
    update: XOR<UserUpdateWithoutRecoveryCodesInput, UserUncheckedUpdateWithoutRecoveryCodesInput>
    create: XOR<UserCreateWithoutRecoveryCodesInput, UserUncheckedCreateWithoutRecoveryCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecoveryCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecoveryCodesInput, UserUncheckedUpdateWithoutRecoveryCodesInput>
  }

  export type UserUpdateWithoutRecoveryCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmCodes?: ConfirmCodeUpdateManyWithoutUserNestedInput
    createdTrack?: TrackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecoveryCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmCodes?: ConfirmCodeUncheckedUpdateManyWithoutUserNestedInput
    createdTrack?: TrackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrackCreateWithoutTrackInfoInput = {
    id?: string
    number: string
    carrier: number
    name?: string
    createDate?: Date | string
    archived?: boolean
    user: UserCreateNestedOneWithoutCreatedTrackInput
  }

  export type TrackUncheckedCreateWithoutTrackInfoInput = {
    id?: string
    number: string
    carrier: number
    name?: string
    createDate?: Date | string
    archived?: boolean
    userId: string
  }

  export type TrackCreateOrConnectWithoutTrackInfoInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutTrackInfoInput, TrackUncheckedCreateWithoutTrackInfoInput>
  }

  export type TrackUpsertWithoutTrackInfoInput = {
    update: XOR<TrackUpdateWithoutTrackInfoInput, TrackUncheckedUpdateWithoutTrackInfoInput>
    create: XOR<TrackCreateWithoutTrackInfoInput, TrackUncheckedCreateWithoutTrackInfoInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutTrackInfoInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutTrackInfoInput, TrackUncheckedUpdateWithoutTrackInfoInput>
  }

  export type TrackUpdateWithoutTrackInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    carrier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCreatedTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutTrackInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    carrier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConfirmCodeCreateManyUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
  }

  export type RecoveryCodeCreateManyUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
  }

  export type TrackCreateManyUserInput = {
    id?: string
    number: string
    carrier: number
    name?: string
    createDate?: Date | string
    archived?: boolean
  }

  export type ConfirmCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmCodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryCodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    carrier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    TrackInfo?: TrackInfoUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    carrier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    TrackInfo?: TrackInfoUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    carrier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackInfoCreateManyTrackInput = {
    id?: string
    shippingInfo: string
    latestStatus: string
    latestEvent: string
    timeMetrics: string
    milestone: string
    miscInfo: string
    tracking: string
  }

  export type TrackInfoUpdateWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingInfo?: StringFieldUpdateOperationsInput | string
    latestStatus?: StringFieldUpdateOperationsInput | string
    latestEvent?: StringFieldUpdateOperationsInput | string
    timeMetrics?: StringFieldUpdateOperationsInput | string
    milestone?: StringFieldUpdateOperationsInput | string
    miscInfo?: StringFieldUpdateOperationsInput | string
    tracking?: StringFieldUpdateOperationsInput | string
  }

  export type TrackInfoUncheckedUpdateWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingInfo?: StringFieldUpdateOperationsInput | string
    latestStatus?: StringFieldUpdateOperationsInput | string
    latestEvent?: StringFieldUpdateOperationsInput | string
    timeMetrics?: StringFieldUpdateOperationsInput | string
    milestone?: StringFieldUpdateOperationsInput | string
    miscInfo?: StringFieldUpdateOperationsInput | string
    tracking?: StringFieldUpdateOperationsInput | string
  }

  export type TrackInfoUncheckedUpdateManyWithoutTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingInfo?: StringFieldUpdateOperationsInput | string
    latestStatus?: StringFieldUpdateOperationsInput | string
    latestEvent?: StringFieldUpdateOperationsInput | string
    timeMetrics?: StringFieldUpdateOperationsInput | string
    milestone?: StringFieldUpdateOperationsInput | string
    miscInfo?: StringFieldUpdateOperationsInput | string
    tracking?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackCountOutputTypeDefaultArgs instead
     */
    export type TrackCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackDefaultArgs instead
     */
    export type TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConfirmCodeDefaultArgs instead
     */
    export type ConfirmCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConfirmCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecoveryCodeDefaultArgs instead
     */
    export type RecoveryCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecoveryCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackInfoDefaultArgs instead
     */
    export type TrackInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackInfoDefaultArgs<ExtArgs>

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