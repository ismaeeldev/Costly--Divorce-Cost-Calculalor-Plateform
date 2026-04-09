
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Scenario
 * 
 */
export type Scenario = $Result.DefaultSelection<Prisma.$ScenarioPayload>
/**
 * Model Addon
 * 
 */
export type Addon = $Result.DefaultSelection<Prisma.$AddonPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model StripeEvent
 * 
 */
export type StripeEvent = $Result.DefaultSelection<Prisma.$StripeEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AddonType: {
  ASSET_SPLIT: 'ASSET_SPLIT',
  RETIREMENT: 'RETIREMENT',
  VA_DISABILITY: 'VA_DISABILITY',
  HOUSING: 'HOUSING'
};

export type AddonType = (typeof AddonType)[keyof typeof AddonType]


export const ProductType: {
  ENTRY: 'ENTRY',
  CORE: 'CORE',
  ADDON: 'ADDON',
  SUBSCRIPTION: 'SUBSCRIPTION'
};

export type ProductType = (typeof ProductType)[keyof typeof ProductType]

}

export type AddonType = $Enums.AddonType

export const AddonType: typeof $Enums.AddonType

export type ProductType = $Enums.ProductType

export const ProductType: typeof $Enums.ProductType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scenario`: Exposes CRUD operations for the **Scenario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scenarios
    * const scenarios = await prisma.scenario.findMany()
    * ```
    */
  get scenario(): Prisma.ScenarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addon`: Exposes CRUD operations for the **Addon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addons
    * const addons = await prisma.addon.findMany()
    * ```
    */
  get addon(): Prisma.AddonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stripeEvent`: Exposes CRUD operations for the **StripeEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StripeEvents
    * const stripeEvents = await prisma.stripeEvent.findMany()
    * ```
    */
  get stripeEvent(): Prisma.StripeEventDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Scenario: 'Scenario',
    Addon: 'Addon',
    Payment: 'Payment',
    StripeEvent: 'StripeEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "scenario" | "addon" | "payment" | "stripeEvent"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Scenario: {
        payload: Prisma.$ScenarioPayload<ExtArgs>
        fields: Prisma.ScenarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScenarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScenarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findFirst: {
            args: Prisma.ScenarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScenarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findMany: {
            args: Prisma.ScenarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          create: {
            args: Prisma.ScenarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          createMany: {
            args: Prisma.ScenarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScenarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          delete: {
            args: Prisma.ScenarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          update: {
            args: Prisma.ScenarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          deleteMany: {
            args: Prisma.ScenarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScenarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScenarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          upsert: {
            args: Prisma.ScenarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          aggregate: {
            args: Prisma.ScenarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScenario>
          }
          groupBy: {
            args: Prisma.ScenarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScenarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScenarioCountArgs<ExtArgs>
            result: $Utils.Optional<ScenarioCountAggregateOutputType> | number
          }
        }
      }
      Addon: {
        payload: Prisma.$AddonPayload<ExtArgs>
        fields: Prisma.AddonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          findFirst: {
            args: Prisma.AddonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          findMany: {
            args: Prisma.AddonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>[]
          }
          create: {
            args: Prisma.AddonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          createMany: {
            args: Prisma.AddonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>[]
          }
          delete: {
            args: Prisma.AddonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          update: {
            args: Prisma.AddonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          deleteMany: {
            args: Prisma.AddonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>[]
          }
          upsert: {
            args: Prisma.AddonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddonPayload>
          }
          aggregate: {
            args: Prisma.AddonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddon>
          }
          groupBy: {
            args: Prisma.AddonGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddonGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddonCountArgs<ExtArgs>
            result: $Utils.Optional<AddonCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      StripeEvent: {
        payload: Prisma.$StripeEventPayload<ExtArgs>
        fields: Prisma.StripeEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StripeEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StripeEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload>
          }
          findFirst: {
            args: Prisma.StripeEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StripeEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload>
          }
          findMany: {
            args: Prisma.StripeEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload>[]
          }
          create: {
            args: Prisma.StripeEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload>
          }
          createMany: {
            args: Prisma.StripeEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StripeEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload>[]
          }
          delete: {
            args: Prisma.StripeEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload>
          }
          update: {
            args: Prisma.StripeEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload>
          }
          deleteMany: {
            args: Prisma.StripeEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StripeEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StripeEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload>[]
          }
          upsert: {
            args: Prisma.StripeEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeEventPayload>
          }
          aggregate: {
            args: Prisma.StripeEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStripeEvent>
          }
          groupBy: {
            args: Prisma.StripeEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<StripeEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.StripeEventCountArgs<ExtArgs>
            result: $Utils.Optional<StripeEventCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    scenario?: ScenarioOmit
    addon?: AddonOmit
    payment?: PaymentOmit
    stripeEvent?: StripeEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    addons: number
    scenarios: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addons?: boolean | UserCountOutputTypeCountAddonsArgs
    scenarios?: boolean | UserCountOutputTypeCountScenariosArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
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
  export type UserCountOutputTypeCountAddonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
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
    name: string | null
    email: string | null
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    accessType: string | null
    hasFullAccess: boolean | null
    entryPurchased: boolean | null
    canUseSubscription: boolean | null
    hasAIAdvisor: boolean | null
    subscriptionId: string | null
    subscriptionStatus: string | null
    stripeCustomerId: string | null
    stripeSubId: string | null
    assetSplit: boolean | null
    retirementImpact: boolean | null
    vaDisability: boolean | null
    housingScenario: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    accessType: string | null
    hasFullAccess: boolean | null
    entryPurchased: boolean | null
    canUseSubscription: boolean | null
    hasAIAdvisor: boolean | null
    subscriptionId: string | null
    subscriptionStatus: string | null
    stripeCustomerId: string | null
    stripeSubId: string | null
    assetSplit: boolean | null
    retirementImpact: boolean | null
    vaDisability: boolean | null
    housingScenario: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    resetToken: number
    resetTokenExpiry: number
    accessType: number
    hasFullAccess: number
    entryPurchased: number
    canUseSubscription: number
    hasAIAdvisor: number
    subscriptionId: number
    subscriptionStatus: number
    stripeCustomerId: number
    stripeSubId: number
    assetSplit: number
    retirementImpact: number
    vaDisability: number
    housingScenario: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    accessType?: true
    hasFullAccess?: true
    entryPurchased?: true
    canUseSubscription?: true
    hasAIAdvisor?: true
    subscriptionId?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    stripeSubId?: true
    assetSplit?: true
    retirementImpact?: true
    vaDisability?: true
    housingScenario?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    accessType?: true
    hasFullAccess?: true
    entryPurchased?: true
    canUseSubscription?: true
    hasAIAdvisor?: true
    subscriptionId?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    stripeSubId?: true
    assetSplit?: true
    retirementImpact?: true
    vaDisability?: true
    housingScenario?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    accessType?: true
    hasFullAccess?: true
    entryPurchased?: true
    canUseSubscription?: true
    hasAIAdvisor?: true
    subscriptionId?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    stripeSubId?: true
    assetSplit?: true
    retirementImpact?: true
    vaDisability?: true
    housingScenario?: true
    createdAt?: true
    updatedAt?: true
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
    name: string | null
    email: string
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    accessType: string
    hasFullAccess: boolean
    entryPurchased: boolean
    canUseSubscription: boolean
    hasAIAdvisor: boolean
    subscriptionId: string | null
    subscriptionStatus: string | null
    stripeCustomerId: string | null
    stripeSubId: string | null
    assetSplit: boolean
    retirementImpact: boolean
    vaDisability: boolean
    housingScenario: boolean
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    email?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    accessType?: boolean
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubId?: boolean
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addons?: boolean | User$addonsArgs<ExtArgs>
    scenarios?: boolean | User$scenariosArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    accessType?: boolean
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubId?: boolean
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    accessType?: boolean
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubId?: boolean
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    accessType?: boolean
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubId?: boolean
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "resetToken" | "resetTokenExpiry" | "accessType" | "hasFullAccess" | "entryPurchased" | "canUseSubscription" | "hasAIAdvisor" | "subscriptionId" | "subscriptionStatus" | "stripeCustomerId" | "stripeSubId" | "assetSplit" | "retirementImpact" | "vaDisability" | "housingScenario" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addons?: boolean | User$addonsArgs<ExtArgs>
    scenarios?: boolean | User$scenariosArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      addons: Prisma.$AddonPayload<ExtArgs>[]
      scenarios: Prisma.$ScenarioPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      accessType: string
      hasFullAccess: boolean
      entryPurchased: boolean
      canUseSubscription: boolean
      hasAIAdvisor: boolean
      subscriptionId: string | null
      subscriptionStatus: string | null
      stripeCustomerId: string | null
      stripeSubId: string | null
      assetSplit: boolean
      retirementImpact: boolean
      vaDisability: boolean
      housingScenario: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addons<T extends User$addonsArgs<ExtArgs> = {}>(args?: Subset<T, User$addonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scenarios<T extends User$scenariosArgs<ExtArgs> = {}>(args?: Subset<T, User$scenariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly accessType: FieldRef<"User", 'String'>
    readonly hasFullAccess: FieldRef<"User", 'Boolean'>
    readonly entryPurchased: FieldRef<"User", 'Boolean'>
    readonly canUseSubscription: FieldRef<"User", 'Boolean'>
    readonly hasAIAdvisor: FieldRef<"User", 'Boolean'>
    readonly subscriptionId: FieldRef<"User", 'String'>
    readonly subscriptionStatus: FieldRef<"User", 'String'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
    readonly stripeSubId: FieldRef<"User", 'String'>
    readonly assetSplit: FieldRef<"User", 'Boolean'>
    readonly retirementImpact: FieldRef<"User", 'Boolean'>
    readonly vaDisability: FieldRef<"User", 'Boolean'>
    readonly housingScenario: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.addons
   */
  export type User$addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    where?: AddonWhereInput
    orderBy?: AddonOrderByWithRelationInput | AddonOrderByWithRelationInput[]
    cursor?: AddonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddonScalarFieldEnum | AddonScalarFieldEnum[]
  }

  /**
   * User.scenarios
   */
  export type User$scenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    where?: ScenarioWhereInput
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    cursor?: ScenarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Scenario
   */

  export type AggregateScenario = {
    _count: ScenarioCountAggregateOutputType | null
    _avg: ScenarioAvgAggregateOutputType | null
    _sum: ScenarioSumAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  export type ScenarioAvgAggregateOutputType = {
    userIncome: number | null
    spouseIncome: number | null
    childrenCount: number | null
    custodyPercent: number | null
    mortgage: number | null
    childcare: number | null
    school: number | null
    activities: number | null
    utilities: number | null
    insurance: number | null
    otherExpenses: number | null
    savings: number | null
    retirement: number | null
    homeEquity: number | null
    netIncome: number | null
    monthlySupport: number | null
    totalExpenses: number | null
    disposableIncome: number | null
    realityScore: number | null
  }

  export type ScenarioSumAggregateOutputType = {
    userIncome: number | null
    spouseIncome: number | null
    childrenCount: number | null
    custodyPercent: number | null
    mortgage: number | null
    childcare: number | null
    school: number | null
    activities: number | null
    utilities: number | null
    insurance: number | null
    otherExpenses: number | null
    savings: number | null
    retirement: number | null
    homeEquity: number | null
    netIncome: number | null
    monthlySupport: number | null
    totalExpenses: number | null
    disposableIncome: number | null
    realityScore: number | null
  }

  export type ScenarioMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    userIncome: number | null
    spouseIncome: number | null
    childrenCount: number | null
    custodyPercent: number | null
    mortgage: number | null
    childcare: number | null
    school: number | null
    activities: number | null
    utilities: number | null
    insurance: number | null
    otherExpenses: number | null
    savings: number | null
    retirement: number | null
    homeEquity: number | null
    netIncome: number | null
    monthlySupport: number | null
    totalExpenses: number | null
    disposableIncome: number | null
    realityScore: number | null
    realityLevel: string | null
    isAutoGenerated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScenarioMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    userIncome: number | null
    spouseIncome: number | null
    childrenCount: number | null
    custodyPercent: number | null
    mortgage: number | null
    childcare: number | null
    school: number | null
    activities: number | null
    utilities: number | null
    insurance: number | null
    otherExpenses: number | null
    savings: number | null
    retirement: number | null
    homeEquity: number | null
    netIncome: number | null
    monthlySupport: number | null
    totalExpenses: number | null
    disposableIncome: number | null
    realityScore: number | null
    realityLevel: string | null
    isAutoGenerated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScenarioCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    userIncome: number
    spouseIncome: number
    childrenCount: number
    custodyPercent: number
    mortgage: number
    childcare: number
    school: number
    activities: number
    utilities: number
    insurance: number
    otherExpenses: number
    savings: number
    retirement: number
    homeEquity: number
    assetSplit: number
    retirementImpact: number
    vaDisability: number
    housingScenario: number
    netIncome: number
    monthlySupport: number
    totalExpenses: number
    disposableIncome: number
    realityScore: number
    realityLevel: number
    isAutoGenerated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScenarioAvgAggregateInputType = {
    userIncome?: true
    spouseIncome?: true
    childrenCount?: true
    custodyPercent?: true
    mortgage?: true
    childcare?: true
    school?: true
    activities?: true
    utilities?: true
    insurance?: true
    otherExpenses?: true
    savings?: true
    retirement?: true
    homeEquity?: true
    netIncome?: true
    monthlySupport?: true
    totalExpenses?: true
    disposableIncome?: true
    realityScore?: true
  }

  export type ScenarioSumAggregateInputType = {
    userIncome?: true
    spouseIncome?: true
    childrenCount?: true
    custodyPercent?: true
    mortgage?: true
    childcare?: true
    school?: true
    activities?: true
    utilities?: true
    insurance?: true
    otherExpenses?: true
    savings?: true
    retirement?: true
    homeEquity?: true
    netIncome?: true
    monthlySupport?: true
    totalExpenses?: true
    disposableIncome?: true
    realityScore?: true
  }

  export type ScenarioMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    userIncome?: true
    spouseIncome?: true
    childrenCount?: true
    custodyPercent?: true
    mortgage?: true
    childcare?: true
    school?: true
    activities?: true
    utilities?: true
    insurance?: true
    otherExpenses?: true
    savings?: true
    retirement?: true
    homeEquity?: true
    netIncome?: true
    monthlySupport?: true
    totalExpenses?: true
    disposableIncome?: true
    realityScore?: true
    realityLevel?: true
    isAutoGenerated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScenarioMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    userIncome?: true
    spouseIncome?: true
    childrenCount?: true
    custodyPercent?: true
    mortgage?: true
    childcare?: true
    school?: true
    activities?: true
    utilities?: true
    insurance?: true
    otherExpenses?: true
    savings?: true
    retirement?: true
    homeEquity?: true
    netIncome?: true
    monthlySupport?: true
    totalExpenses?: true
    disposableIncome?: true
    realityScore?: true
    realityLevel?: true
    isAutoGenerated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScenarioCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    userIncome?: true
    spouseIncome?: true
    childrenCount?: true
    custodyPercent?: true
    mortgage?: true
    childcare?: true
    school?: true
    activities?: true
    utilities?: true
    insurance?: true
    otherExpenses?: true
    savings?: true
    retirement?: true
    homeEquity?: true
    assetSplit?: true
    retirementImpact?: true
    vaDisability?: true
    housingScenario?: true
    netIncome?: true
    monthlySupport?: true
    totalExpenses?: true
    disposableIncome?: true
    realityScore?: true
    realityLevel?: true
    isAutoGenerated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScenarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenario to aggregate.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scenarios
    **/
    _count?: true | ScenarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScenarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScenarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScenarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScenarioMaxAggregateInputType
  }

  export type GetScenarioAggregateType<T extends ScenarioAggregateArgs> = {
        [P in keyof T & keyof AggregateScenario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScenario[P]>
      : GetScalarType<T[P], AggregateScenario[P]>
  }




  export type ScenarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioWhereInput
    orderBy?: ScenarioOrderByWithAggregationInput | ScenarioOrderByWithAggregationInput[]
    by: ScenarioScalarFieldEnum[] | ScenarioScalarFieldEnum
    having?: ScenarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScenarioCountAggregateInputType | true
    _avg?: ScenarioAvgAggregateInputType
    _sum?: ScenarioSumAggregateInputType
    _min?: ScenarioMinAggregateInputType
    _max?: ScenarioMaxAggregateInputType
  }

  export type ScenarioGroupByOutputType = {
    id: string
    userId: string
    name: string
    userIncome: number
    spouseIncome: number
    childrenCount: number
    custodyPercent: number
    mortgage: number
    childcare: number
    school: number
    activities: number
    utilities: number
    insurance: number
    otherExpenses: number
    savings: number | null
    retirement: number | null
    homeEquity: number | null
    assetSplit: JsonValue | null
    retirementImpact: JsonValue | null
    vaDisability: JsonValue | null
    housingScenario: JsonValue | null
    netIncome: number
    monthlySupport: number
    totalExpenses: number
    disposableIncome: number
    realityScore: number
    realityLevel: string
    isAutoGenerated: boolean
    createdAt: Date
    updatedAt: Date
    _count: ScenarioCountAggregateOutputType | null
    _avg: ScenarioAvgAggregateOutputType | null
    _sum: ScenarioSumAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  type GetScenarioGroupByPayload<T extends ScenarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScenarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScenarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
            : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
        }
      >
    >


  export type ScenarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    userIncome?: boolean
    spouseIncome?: boolean
    childrenCount?: boolean
    custodyPercent?: boolean
    mortgage?: boolean
    childcare?: boolean
    school?: boolean
    activities?: boolean
    utilities?: boolean
    insurance?: boolean
    otherExpenses?: boolean
    savings?: boolean
    retirement?: boolean
    homeEquity?: boolean
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    netIncome?: boolean
    monthlySupport?: boolean
    totalExpenses?: boolean
    disposableIncome?: boolean
    realityScore?: boolean
    realityLevel?: boolean
    isAutoGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    userIncome?: boolean
    spouseIncome?: boolean
    childrenCount?: boolean
    custodyPercent?: boolean
    mortgage?: boolean
    childcare?: boolean
    school?: boolean
    activities?: boolean
    utilities?: boolean
    insurance?: boolean
    otherExpenses?: boolean
    savings?: boolean
    retirement?: boolean
    homeEquity?: boolean
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    netIncome?: boolean
    monthlySupport?: boolean
    totalExpenses?: boolean
    disposableIncome?: boolean
    realityScore?: boolean
    realityLevel?: boolean
    isAutoGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    userIncome?: boolean
    spouseIncome?: boolean
    childrenCount?: boolean
    custodyPercent?: boolean
    mortgage?: boolean
    childcare?: boolean
    school?: boolean
    activities?: boolean
    utilities?: boolean
    insurance?: boolean
    otherExpenses?: boolean
    savings?: boolean
    retirement?: boolean
    homeEquity?: boolean
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    netIncome?: boolean
    monthlySupport?: boolean
    totalExpenses?: boolean
    disposableIncome?: boolean
    realityScore?: boolean
    realityLevel?: boolean
    isAutoGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    userIncome?: boolean
    spouseIncome?: boolean
    childrenCount?: boolean
    custodyPercent?: boolean
    mortgage?: boolean
    childcare?: boolean
    school?: boolean
    activities?: boolean
    utilities?: boolean
    insurance?: boolean
    otherExpenses?: boolean
    savings?: boolean
    retirement?: boolean
    homeEquity?: boolean
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    netIncome?: boolean
    monthlySupport?: boolean
    totalExpenses?: boolean
    disposableIncome?: boolean
    realityScore?: boolean
    realityLevel?: boolean
    isAutoGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScenarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "userIncome" | "spouseIncome" | "childrenCount" | "custodyPercent" | "mortgage" | "childcare" | "school" | "activities" | "utilities" | "insurance" | "otherExpenses" | "savings" | "retirement" | "homeEquity" | "assetSplit" | "retirementImpact" | "vaDisability" | "housingScenario" | "netIncome" | "monthlySupport" | "totalExpenses" | "disposableIncome" | "realityScore" | "realityLevel" | "isAutoGenerated" | "createdAt" | "updatedAt", ExtArgs["result"]["scenario"]>
  export type ScenarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScenarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScenarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ScenarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scenario"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      userIncome: number
      spouseIncome: number
      childrenCount: number
      custodyPercent: number
      mortgage: number
      childcare: number
      school: number
      activities: number
      utilities: number
      insurance: number
      otherExpenses: number
      savings: number | null
      retirement: number | null
      homeEquity: number | null
      assetSplit: Prisma.JsonValue | null
      retirementImpact: Prisma.JsonValue | null
      vaDisability: Prisma.JsonValue | null
      housingScenario: Prisma.JsonValue | null
      netIncome: number
      monthlySupport: number
      totalExpenses: number
      disposableIncome: number
      realityScore: number
      realityLevel: string
      isAutoGenerated: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scenario"]>
    composites: {}
  }

  type ScenarioGetPayload<S extends boolean | null | undefined | ScenarioDefaultArgs> = $Result.GetResult<Prisma.$ScenarioPayload, S>

  type ScenarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScenarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScenarioCountAggregateInputType | true
    }

  export interface ScenarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scenario'], meta: { name: 'Scenario' } }
    /**
     * Find zero or one Scenario that matches the filter.
     * @param {ScenarioFindUniqueArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScenarioFindUniqueArgs>(args: SelectSubset<T, ScenarioFindUniqueArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scenario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScenarioFindUniqueOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScenarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ScenarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScenarioFindFirstArgs>(args?: SelectSubset<T, ScenarioFindFirstArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScenarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ScenarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenarios
     * const scenarios = await prisma.scenario.findMany()
     * 
     * // Get first 10 Scenarios
     * const scenarios = await prisma.scenario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scenarioWithIdOnly = await prisma.scenario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScenarioFindManyArgs>(args?: SelectSubset<T, ScenarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scenario.
     * @param {ScenarioCreateArgs} args - Arguments to create a Scenario.
     * @example
     * // Create one Scenario
     * const Scenario = await prisma.scenario.create({
     *   data: {
     *     // ... data to create a Scenario
     *   }
     * })
     * 
     */
    create<T extends ScenarioCreateArgs>(args: SelectSubset<T, ScenarioCreateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scenarios.
     * @param {ScenarioCreateManyArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScenarioCreateManyArgs>(args?: SelectSubset<T, ScenarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scenarios and returns the data saved in the database.
     * @param {ScenarioCreateManyAndReturnArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScenarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ScenarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scenario.
     * @param {ScenarioDeleteArgs} args - Arguments to delete one Scenario.
     * @example
     * // Delete one Scenario
     * const Scenario = await prisma.scenario.delete({
     *   where: {
     *     // ... filter to delete one Scenario
     *   }
     * })
     * 
     */
    delete<T extends ScenarioDeleteArgs>(args: SelectSubset<T, ScenarioDeleteArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scenario.
     * @param {ScenarioUpdateArgs} args - Arguments to update one Scenario.
     * @example
     * // Update one Scenario
     * const scenario = await prisma.scenario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScenarioUpdateArgs>(args: SelectSubset<T, ScenarioUpdateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scenarios.
     * @param {ScenarioDeleteManyArgs} args - Arguments to filter Scenarios to delete.
     * @example
     * // Delete a few Scenarios
     * const { count } = await prisma.scenario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScenarioDeleteManyArgs>(args?: SelectSubset<T, ScenarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScenarioUpdateManyArgs>(args: SelectSubset<T, ScenarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios and returns the data updated in the database.
     * @param {ScenarioUpdateManyAndReturnArgs} args - Arguments to update many Scenarios.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScenarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ScenarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scenario.
     * @param {ScenarioUpsertArgs} args - Arguments to update or create a Scenario.
     * @example
     * // Update or create a Scenario
     * const scenario = await prisma.scenario.upsert({
     *   create: {
     *     // ... data to create a Scenario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scenario we want to update
     *   }
     * })
     */
    upsert<T extends ScenarioUpsertArgs>(args: SelectSubset<T, ScenarioUpsertArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioCountArgs} args - Arguments to filter Scenarios to count.
     * @example
     * // Count the number of Scenarios
     * const count = await prisma.scenario.count({
     *   where: {
     *     // ... the filter for the Scenarios we want to count
     *   }
     * })
    **/
    count<T extends ScenarioCountArgs>(
      args?: Subset<T, ScenarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScenarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScenarioAggregateArgs>(args: Subset<T, ScenarioAggregateArgs>): Prisma.PrismaPromise<GetScenarioAggregateType<T>>

    /**
     * Group by Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioGroupByArgs} args - Group by arguments.
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
      T extends ScenarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScenarioGroupByArgs['orderBy'] }
        : { orderBy?: ScenarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScenarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScenarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scenario model
   */
  readonly fields: ScenarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scenario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScenarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Scenario model
   */
  interface ScenarioFieldRefs {
    readonly id: FieldRef<"Scenario", 'String'>
    readonly userId: FieldRef<"Scenario", 'String'>
    readonly name: FieldRef<"Scenario", 'String'>
    readonly userIncome: FieldRef<"Scenario", 'Float'>
    readonly spouseIncome: FieldRef<"Scenario", 'Float'>
    readonly childrenCount: FieldRef<"Scenario", 'Int'>
    readonly custodyPercent: FieldRef<"Scenario", 'Float'>
    readonly mortgage: FieldRef<"Scenario", 'Float'>
    readonly childcare: FieldRef<"Scenario", 'Float'>
    readonly school: FieldRef<"Scenario", 'Float'>
    readonly activities: FieldRef<"Scenario", 'Float'>
    readonly utilities: FieldRef<"Scenario", 'Float'>
    readonly insurance: FieldRef<"Scenario", 'Float'>
    readonly otherExpenses: FieldRef<"Scenario", 'Float'>
    readonly savings: FieldRef<"Scenario", 'Float'>
    readonly retirement: FieldRef<"Scenario", 'Float'>
    readonly homeEquity: FieldRef<"Scenario", 'Float'>
    readonly assetSplit: FieldRef<"Scenario", 'Json'>
    readonly retirementImpact: FieldRef<"Scenario", 'Json'>
    readonly vaDisability: FieldRef<"Scenario", 'Json'>
    readonly housingScenario: FieldRef<"Scenario", 'Json'>
    readonly netIncome: FieldRef<"Scenario", 'Float'>
    readonly monthlySupport: FieldRef<"Scenario", 'Float'>
    readonly totalExpenses: FieldRef<"Scenario", 'Float'>
    readonly disposableIncome: FieldRef<"Scenario", 'Float'>
    readonly realityScore: FieldRef<"Scenario", 'Float'>
    readonly realityLevel: FieldRef<"Scenario", 'String'>
    readonly isAutoGenerated: FieldRef<"Scenario", 'Boolean'>
    readonly createdAt: FieldRef<"Scenario", 'DateTime'>
    readonly updatedAt: FieldRef<"Scenario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scenario findUnique
   */
  export type ScenarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findUniqueOrThrow
   */
  export type ScenarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findFirst
   */
  export type ScenarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findFirstOrThrow
   */
  export type ScenarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findMany
   */
  export type ScenarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenarios to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario create
   */
  export type ScenarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Scenario.
     */
    data: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
  }

  /**
   * Scenario createMany
   */
  export type ScenarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scenario createManyAndReturn
   */
  export type ScenarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scenario update
   */
  export type ScenarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Scenario.
     */
    data: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
    /**
     * Choose, which Scenario to update.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario updateMany
   */
  export type ScenarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
  }

  /**
   * Scenario updateManyAndReturn
   */
  export type ScenarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scenario upsert
   */
  export type ScenarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Scenario to update in case it exists.
     */
    where: ScenarioWhereUniqueInput
    /**
     * In case the Scenario found by the `where` argument doesn't exist, create a new Scenario with this data.
     */
    create: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
    /**
     * In case the Scenario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
  }

  /**
   * Scenario delete
   */
  export type ScenarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter which Scenario to delete.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario deleteMany
   */
  export type ScenarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenarios to delete
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to delete.
     */
    limit?: number
  }

  /**
   * Scenario without action
   */
  export type ScenarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
  }


  /**
   * Model Addon
   */

  export type AggregateAddon = {
    _count: AddonCountAggregateOutputType | null
    _min: AddonMinAggregateOutputType | null
    _max: AddonMaxAggregateOutputType | null
  }

  export type AddonMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.AddonType | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type AddonMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.AddonType | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type AddonCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type AddonMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    isActive?: true
    createdAt?: true
  }

  export type AddonMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    isActive?: true
    createdAt?: true
  }

  export type AddonCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type AddonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addon to aggregate.
     */
    where?: AddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addons to fetch.
     */
    orderBy?: AddonOrderByWithRelationInput | AddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addons
    **/
    _count?: true | AddonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddonMaxAggregateInputType
  }

  export type GetAddonAggregateType<T extends AddonAggregateArgs> = {
        [P in keyof T & keyof AggregateAddon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddon[P]>
      : GetScalarType<T[P], AggregateAddon[P]>
  }




  export type AddonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddonWhereInput
    orderBy?: AddonOrderByWithAggregationInput | AddonOrderByWithAggregationInput[]
    by: AddonScalarFieldEnum[] | AddonScalarFieldEnum
    having?: AddonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddonCountAggregateInputType | true
    _min?: AddonMinAggregateInputType
    _max?: AddonMaxAggregateInputType
  }

  export type AddonGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.AddonType
    isActive: boolean
    createdAt: Date
    _count: AddonCountAggregateOutputType | null
    _min: AddonMinAggregateOutputType | null
    _max: AddonMaxAggregateOutputType | null
  }

  type GetAddonGroupByPayload<T extends AddonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddonGroupByOutputType[P]>
            : GetScalarType<T[P], AddonGroupByOutputType[P]>
        }
      >
    >


  export type AddonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addon"]>

  export type AddonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addon"]>

  export type AddonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addon"]>

  export type AddonSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type AddonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "isActive" | "createdAt", ExtArgs["result"]["addon"]>
  export type AddonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Addon"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.AddonType
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["addon"]>
    composites: {}
  }

  type AddonGetPayload<S extends boolean | null | undefined | AddonDefaultArgs> = $Result.GetResult<Prisma.$AddonPayload, S>

  type AddonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddonCountAggregateInputType | true
    }

  export interface AddonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Addon'], meta: { name: 'Addon' } }
    /**
     * Find zero or one Addon that matches the filter.
     * @param {AddonFindUniqueArgs} args - Arguments to find a Addon
     * @example
     * // Get one Addon
     * const addon = await prisma.addon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddonFindUniqueArgs>(args: SelectSubset<T, AddonFindUniqueArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Addon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddonFindUniqueOrThrowArgs} args - Arguments to find a Addon
     * @example
     * // Get one Addon
     * const addon = await prisma.addon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddonFindUniqueOrThrowArgs>(args: SelectSubset<T, AddonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonFindFirstArgs} args - Arguments to find a Addon
     * @example
     * // Get one Addon
     * const addon = await prisma.addon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddonFindFirstArgs>(args?: SelectSubset<T, AddonFindFirstArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonFindFirstOrThrowArgs} args - Arguments to find a Addon
     * @example
     * // Get one Addon
     * const addon = await prisma.addon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddonFindFirstOrThrowArgs>(args?: SelectSubset<T, AddonFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addons
     * const addons = await prisma.addon.findMany()
     * 
     * // Get first 10 Addons
     * const addons = await prisma.addon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addonWithIdOnly = await prisma.addon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddonFindManyArgs>(args?: SelectSubset<T, AddonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Addon.
     * @param {AddonCreateArgs} args - Arguments to create a Addon.
     * @example
     * // Create one Addon
     * const Addon = await prisma.addon.create({
     *   data: {
     *     // ... data to create a Addon
     *   }
     * })
     * 
     */
    create<T extends AddonCreateArgs>(args: SelectSubset<T, AddonCreateArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addons.
     * @param {AddonCreateManyArgs} args - Arguments to create many Addons.
     * @example
     * // Create many Addons
     * const addon = await prisma.addon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddonCreateManyArgs>(args?: SelectSubset<T, AddonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addons and returns the data saved in the database.
     * @param {AddonCreateManyAndReturnArgs} args - Arguments to create many Addons.
     * @example
     * // Create many Addons
     * const addon = await prisma.addon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addons and only return the `id`
     * const addonWithIdOnly = await prisma.addon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddonCreateManyAndReturnArgs>(args?: SelectSubset<T, AddonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Addon.
     * @param {AddonDeleteArgs} args - Arguments to delete one Addon.
     * @example
     * // Delete one Addon
     * const Addon = await prisma.addon.delete({
     *   where: {
     *     // ... filter to delete one Addon
     *   }
     * })
     * 
     */
    delete<T extends AddonDeleteArgs>(args: SelectSubset<T, AddonDeleteArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Addon.
     * @param {AddonUpdateArgs} args - Arguments to update one Addon.
     * @example
     * // Update one Addon
     * const addon = await prisma.addon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddonUpdateArgs>(args: SelectSubset<T, AddonUpdateArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addons.
     * @param {AddonDeleteManyArgs} args - Arguments to filter Addons to delete.
     * @example
     * // Delete a few Addons
     * const { count } = await prisma.addon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddonDeleteManyArgs>(args?: SelectSubset<T, AddonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addons
     * const addon = await prisma.addon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddonUpdateManyArgs>(args: SelectSubset<T, AddonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addons and returns the data updated in the database.
     * @param {AddonUpdateManyAndReturnArgs} args - Arguments to update many Addons.
     * @example
     * // Update many Addons
     * const addon = await prisma.addon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addons and only return the `id`
     * const addonWithIdOnly = await prisma.addon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddonUpdateManyAndReturnArgs>(args: SelectSubset<T, AddonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Addon.
     * @param {AddonUpsertArgs} args - Arguments to update or create a Addon.
     * @example
     * // Update or create a Addon
     * const addon = await prisma.addon.upsert({
     *   create: {
     *     // ... data to create a Addon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addon we want to update
     *   }
     * })
     */
    upsert<T extends AddonUpsertArgs>(args: SelectSubset<T, AddonUpsertArgs<ExtArgs>>): Prisma__AddonClient<$Result.GetResult<Prisma.$AddonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonCountArgs} args - Arguments to filter Addons to count.
     * @example
     * // Count the number of Addons
     * const count = await prisma.addon.count({
     *   where: {
     *     // ... the filter for the Addons we want to count
     *   }
     * })
    **/
    count<T extends AddonCountArgs>(
      args?: Subset<T, AddonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddonAggregateArgs>(args: Subset<T, AddonAggregateArgs>): Prisma.PrismaPromise<GetAddonAggregateType<T>>

    /**
     * Group by Addon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonGroupByArgs} args - Group by arguments.
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
      T extends AddonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddonGroupByArgs['orderBy'] }
        : { orderBy?: AddonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Addon model
   */
  readonly fields: AddonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Addon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Addon model
   */
  interface AddonFieldRefs {
    readonly id: FieldRef<"Addon", 'String'>
    readonly userId: FieldRef<"Addon", 'String'>
    readonly type: FieldRef<"Addon", 'AddonType'>
    readonly isActive: FieldRef<"Addon", 'Boolean'>
    readonly createdAt: FieldRef<"Addon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Addon findUnique
   */
  export type AddonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter, which Addon to fetch.
     */
    where: AddonWhereUniqueInput
  }

  /**
   * Addon findUniqueOrThrow
   */
  export type AddonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter, which Addon to fetch.
     */
    where: AddonWhereUniqueInput
  }

  /**
   * Addon findFirst
   */
  export type AddonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter, which Addon to fetch.
     */
    where?: AddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addons to fetch.
     */
    orderBy?: AddonOrderByWithRelationInput | AddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addons.
     */
    cursor?: AddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addons.
     */
    distinct?: AddonScalarFieldEnum | AddonScalarFieldEnum[]
  }

  /**
   * Addon findFirstOrThrow
   */
  export type AddonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter, which Addon to fetch.
     */
    where?: AddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addons to fetch.
     */
    orderBy?: AddonOrderByWithRelationInput | AddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addons.
     */
    cursor?: AddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addons.
     */
    distinct?: AddonScalarFieldEnum | AddonScalarFieldEnum[]
  }

  /**
   * Addon findMany
   */
  export type AddonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter, which Addons to fetch.
     */
    where?: AddonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addons to fetch.
     */
    orderBy?: AddonOrderByWithRelationInput | AddonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addons.
     */
    cursor?: AddonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addons.
     */
    distinct?: AddonScalarFieldEnum | AddonScalarFieldEnum[]
  }

  /**
   * Addon create
   */
  export type AddonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * The data needed to create a Addon.
     */
    data: XOR<AddonCreateInput, AddonUncheckedCreateInput>
  }

  /**
   * Addon createMany
   */
  export type AddonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addons.
     */
    data: AddonCreateManyInput | AddonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Addon createManyAndReturn
   */
  export type AddonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * The data used to create many Addons.
     */
    data: AddonCreateManyInput | AddonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Addon update
   */
  export type AddonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * The data needed to update a Addon.
     */
    data: XOR<AddonUpdateInput, AddonUncheckedUpdateInput>
    /**
     * Choose, which Addon to update.
     */
    where: AddonWhereUniqueInput
  }

  /**
   * Addon updateMany
   */
  export type AddonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addons.
     */
    data: XOR<AddonUpdateManyMutationInput, AddonUncheckedUpdateManyInput>
    /**
     * Filter which Addons to update
     */
    where?: AddonWhereInput
    /**
     * Limit how many Addons to update.
     */
    limit?: number
  }

  /**
   * Addon updateManyAndReturn
   */
  export type AddonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * The data used to update Addons.
     */
    data: XOR<AddonUpdateManyMutationInput, AddonUncheckedUpdateManyInput>
    /**
     * Filter which Addons to update
     */
    where?: AddonWhereInput
    /**
     * Limit how many Addons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Addon upsert
   */
  export type AddonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * The filter to search for the Addon to update in case it exists.
     */
    where: AddonWhereUniqueInput
    /**
     * In case the Addon found by the `where` argument doesn't exist, create a new Addon with this data.
     */
    create: XOR<AddonCreateInput, AddonUncheckedCreateInput>
    /**
     * In case the Addon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddonUpdateInput, AddonUncheckedUpdateInput>
  }

  /**
   * Addon delete
   */
  export type AddonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
    /**
     * Filter which Addon to delete.
     */
    where: AddonWhereUniqueInput
  }

  /**
   * Addon deleteMany
   */
  export type AddonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addons to delete
     */
    where?: AddonWhereInput
    /**
     * Limit how many Addons to delete.
     */
    limit?: number
  }

  /**
   * Addon without action
   */
  export type AddonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon
     */
    select?: AddonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Addon
     */
    omit?: AddonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddonInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeSessionId: string | null
    stripePaymentId: string | null
    stripePriceId: string | null
    amount: number | null
    currency: string | null
    productType: $Enums.ProductType | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeSessionId: string | null
    stripePaymentId: string | null
    stripePriceId: string | null
    amount: number | null
    currency: string | null
    productType: $Enums.ProductType | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    stripeSessionId: number
    stripePaymentId: number
    stripePriceId: number
    amount: number
    currency: number
    productType: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    stripeSessionId?: true
    stripePaymentId?: true
    stripePriceId?: true
    amount?: true
    currency?: true
    productType?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeSessionId?: true
    stripePaymentId?: true
    stripePriceId?: true
    amount?: true
    currency?: true
    productType?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    stripeSessionId?: true
    stripePaymentId?: true
    stripePriceId?: true
    amount?: true
    currency?: true
    productType?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    stripeSessionId: string
    stripePaymentId: string | null
    stripePriceId: string | null
    amount: number
    currency: string
    productType: $Enums.ProductType
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    stripePriceId?: boolean
    amount?: boolean
    currency?: boolean
    productType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    stripePriceId?: boolean
    amount?: boolean
    currency?: boolean
    productType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    stripePriceId?: boolean
    amount?: boolean
    currency?: boolean
    productType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    stripePriceId?: boolean
    amount?: boolean
    currency?: boolean
    productType?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeSessionId" | "stripePaymentId" | "stripePriceId" | "amount" | "currency" | "productType" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripeSessionId: string
      stripePaymentId: string | null
      stripePriceId: string | null
      amount: number
      currency: string
      productType: $Enums.ProductType
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly stripeSessionId: FieldRef<"Payment", 'String'>
    readonly stripePaymentId: FieldRef<"Payment", 'String'>
    readonly stripePriceId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly productType: FieldRef<"Payment", 'ProductType'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model StripeEvent
   */

  export type AggregateStripeEvent = {
    _count: StripeEventCountAggregateOutputType | null
    _min: StripeEventMinAggregateOutputType | null
    _max: StripeEventMaxAggregateOutputType | null
  }

  export type StripeEventMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    type: string | null
    processed: boolean | null
    createdAt: Date | null
  }

  export type StripeEventMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    type: string | null
    processed: boolean | null
    createdAt: Date | null
  }

  export type StripeEventCountAggregateOutputType = {
    id: number
    eventId: number
    type: number
    processed: number
    createdAt: number
    _all: number
  }


  export type StripeEventMinAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    processed?: true
    createdAt?: true
  }

  export type StripeEventMaxAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    processed?: true
    createdAt?: true
  }

  export type StripeEventCountAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    processed?: true
    createdAt?: true
    _all?: true
  }

  export type StripeEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeEvent to aggregate.
     */
    where?: StripeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeEvents to fetch.
     */
    orderBy?: StripeEventOrderByWithRelationInput | StripeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StripeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StripeEvents
    **/
    _count?: true | StripeEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StripeEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StripeEventMaxAggregateInputType
  }

  export type GetStripeEventAggregateType<T extends StripeEventAggregateArgs> = {
        [P in keyof T & keyof AggregateStripeEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStripeEvent[P]>
      : GetScalarType<T[P], AggregateStripeEvent[P]>
  }




  export type StripeEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StripeEventWhereInput
    orderBy?: StripeEventOrderByWithAggregationInput | StripeEventOrderByWithAggregationInput[]
    by: StripeEventScalarFieldEnum[] | StripeEventScalarFieldEnum
    having?: StripeEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StripeEventCountAggregateInputType | true
    _min?: StripeEventMinAggregateInputType
    _max?: StripeEventMaxAggregateInputType
  }

  export type StripeEventGroupByOutputType = {
    id: string
    eventId: string
    type: string
    processed: boolean
    createdAt: Date
    _count: StripeEventCountAggregateOutputType | null
    _min: StripeEventMinAggregateOutputType | null
    _max: StripeEventMaxAggregateOutputType | null
  }

  type GetStripeEventGroupByPayload<T extends StripeEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StripeEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StripeEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StripeEventGroupByOutputType[P]>
            : GetScalarType<T[P], StripeEventGroupByOutputType[P]>
        }
      >
    >


  export type StripeEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    processed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stripeEvent"]>

  export type StripeEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    processed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stripeEvent"]>

  export type StripeEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    processed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stripeEvent"]>

  export type StripeEventSelectScalar = {
    id?: boolean
    eventId?: boolean
    type?: boolean
    processed?: boolean
    createdAt?: boolean
  }

  export type StripeEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "type" | "processed" | "createdAt", ExtArgs["result"]["stripeEvent"]>

  export type $StripeEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StripeEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      type: string
      processed: boolean
      createdAt: Date
    }, ExtArgs["result"]["stripeEvent"]>
    composites: {}
  }

  type StripeEventGetPayload<S extends boolean | null | undefined | StripeEventDefaultArgs> = $Result.GetResult<Prisma.$StripeEventPayload, S>

  type StripeEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StripeEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StripeEventCountAggregateInputType | true
    }

  export interface StripeEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StripeEvent'], meta: { name: 'StripeEvent' } }
    /**
     * Find zero or one StripeEvent that matches the filter.
     * @param {StripeEventFindUniqueArgs} args - Arguments to find a StripeEvent
     * @example
     * // Get one StripeEvent
     * const stripeEvent = await prisma.stripeEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StripeEventFindUniqueArgs>(args: SelectSubset<T, StripeEventFindUniqueArgs<ExtArgs>>): Prisma__StripeEventClient<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StripeEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StripeEventFindUniqueOrThrowArgs} args - Arguments to find a StripeEvent
     * @example
     * // Get one StripeEvent
     * const stripeEvent = await prisma.stripeEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StripeEventFindUniqueOrThrowArgs>(args: SelectSubset<T, StripeEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StripeEventClient<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeEventFindFirstArgs} args - Arguments to find a StripeEvent
     * @example
     * // Get one StripeEvent
     * const stripeEvent = await prisma.stripeEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StripeEventFindFirstArgs>(args?: SelectSubset<T, StripeEventFindFirstArgs<ExtArgs>>): Prisma__StripeEventClient<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeEventFindFirstOrThrowArgs} args - Arguments to find a StripeEvent
     * @example
     * // Get one StripeEvent
     * const stripeEvent = await prisma.stripeEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StripeEventFindFirstOrThrowArgs>(args?: SelectSubset<T, StripeEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__StripeEventClient<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StripeEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StripeEvents
     * const stripeEvents = await prisma.stripeEvent.findMany()
     * 
     * // Get first 10 StripeEvents
     * const stripeEvents = await prisma.stripeEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stripeEventWithIdOnly = await prisma.stripeEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StripeEventFindManyArgs>(args?: SelectSubset<T, StripeEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StripeEvent.
     * @param {StripeEventCreateArgs} args - Arguments to create a StripeEvent.
     * @example
     * // Create one StripeEvent
     * const StripeEvent = await prisma.stripeEvent.create({
     *   data: {
     *     // ... data to create a StripeEvent
     *   }
     * })
     * 
     */
    create<T extends StripeEventCreateArgs>(args: SelectSubset<T, StripeEventCreateArgs<ExtArgs>>): Prisma__StripeEventClient<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StripeEvents.
     * @param {StripeEventCreateManyArgs} args - Arguments to create many StripeEvents.
     * @example
     * // Create many StripeEvents
     * const stripeEvent = await prisma.stripeEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StripeEventCreateManyArgs>(args?: SelectSubset<T, StripeEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StripeEvents and returns the data saved in the database.
     * @param {StripeEventCreateManyAndReturnArgs} args - Arguments to create many StripeEvents.
     * @example
     * // Create many StripeEvents
     * const stripeEvent = await prisma.stripeEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StripeEvents and only return the `id`
     * const stripeEventWithIdOnly = await prisma.stripeEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StripeEventCreateManyAndReturnArgs>(args?: SelectSubset<T, StripeEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StripeEvent.
     * @param {StripeEventDeleteArgs} args - Arguments to delete one StripeEvent.
     * @example
     * // Delete one StripeEvent
     * const StripeEvent = await prisma.stripeEvent.delete({
     *   where: {
     *     // ... filter to delete one StripeEvent
     *   }
     * })
     * 
     */
    delete<T extends StripeEventDeleteArgs>(args: SelectSubset<T, StripeEventDeleteArgs<ExtArgs>>): Prisma__StripeEventClient<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StripeEvent.
     * @param {StripeEventUpdateArgs} args - Arguments to update one StripeEvent.
     * @example
     * // Update one StripeEvent
     * const stripeEvent = await prisma.stripeEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StripeEventUpdateArgs>(args: SelectSubset<T, StripeEventUpdateArgs<ExtArgs>>): Prisma__StripeEventClient<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StripeEvents.
     * @param {StripeEventDeleteManyArgs} args - Arguments to filter StripeEvents to delete.
     * @example
     * // Delete a few StripeEvents
     * const { count } = await prisma.stripeEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StripeEventDeleteManyArgs>(args?: SelectSubset<T, StripeEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StripeEvents
     * const stripeEvent = await prisma.stripeEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StripeEventUpdateManyArgs>(args: SelectSubset<T, StripeEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeEvents and returns the data updated in the database.
     * @param {StripeEventUpdateManyAndReturnArgs} args - Arguments to update many StripeEvents.
     * @example
     * // Update many StripeEvents
     * const stripeEvent = await prisma.stripeEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StripeEvents and only return the `id`
     * const stripeEventWithIdOnly = await prisma.stripeEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StripeEventUpdateManyAndReturnArgs>(args: SelectSubset<T, StripeEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StripeEvent.
     * @param {StripeEventUpsertArgs} args - Arguments to update or create a StripeEvent.
     * @example
     * // Update or create a StripeEvent
     * const stripeEvent = await prisma.stripeEvent.upsert({
     *   create: {
     *     // ... data to create a StripeEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StripeEvent we want to update
     *   }
     * })
     */
    upsert<T extends StripeEventUpsertArgs>(args: SelectSubset<T, StripeEventUpsertArgs<ExtArgs>>): Prisma__StripeEventClient<$Result.GetResult<Prisma.$StripeEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StripeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeEventCountArgs} args - Arguments to filter StripeEvents to count.
     * @example
     * // Count the number of StripeEvents
     * const count = await prisma.stripeEvent.count({
     *   where: {
     *     // ... the filter for the StripeEvents we want to count
     *   }
     * })
    **/
    count<T extends StripeEventCountArgs>(
      args?: Subset<T, StripeEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StripeEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StripeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StripeEventAggregateArgs>(args: Subset<T, StripeEventAggregateArgs>): Prisma.PrismaPromise<GetStripeEventAggregateType<T>>

    /**
     * Group by StripeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeEventGroupByArgs} args - Group by arguments.
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
      T extends StripeEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StripeEventGroupByArgs['orderBy'] }
        : { orderBy?: StripeEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StripeEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStripeEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StripeEvent model
   */
  readonly fields: StripeEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StripeEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StripeEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the StripeEvent model
   */
  interface StripeEventFieldRefs {
    readonly id: FieldRef<"StripeEvent", 'String'>
    readonly eventId: FieldRef<"StripeEvent", 'String'>
    readonly type: FieldRef<"StripeEvent", 'String'>
    readonly processed: FieldRef<"StripeEvent", 'Boolean'>
    readonly createdAt: FieldRef<"StripeEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StripeEvent findUnique
   */
  export type StripeEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeEvent to fetch.
     */
    where: StripeEventWhereUniqueInput
  }

  /**
   * StripeEvent findUniqueOrThrow
   */
  export type StripeEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeEvent to fetch.
     */
    where: StripeEventWhereUniqueInput
  }

  /**
   * StripeEvent findFirst
   */
  export type StripeEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeEvent to fetch.
     */
    where?: StripeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeEvents to fetch.
     */
    orderBy?: StripeEventOrderByWithRelationInput | StripeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeEvents.
     */
    cursor?: StripeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeEvents.
     */
    distinct?: StripeEventScalarFieldEnum | StripeEventScalarFieldEnum[]
  }

  /**
   * StripeEvent findFirstOrThrow
   */
  export type StripeEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeEvent to fetch.
     */
    where?: StripeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeEvents to fetch.
     */
    orderBy?: StripeEventOrderByWithRelationInput | StripeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeEvents.
     */
    cursor?: StripeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeEvents.
     */
    distinct?: StripeEventScalarFieldEnum | StripeEventScalarFieldEnum[]
  }

  /**
   * StripeEvent findMany
   */
  export type StripeEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeEvents to fetch.
     */
    where?: StripeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeEvents to fetch.
     */
    orderBy?: StripeEventOrderByWithRelationInput | StripeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StripeEvents.
     */
    cursor?: StripeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeEvents.
     */
    distinct?: StripeEventScalarFieldEnum | StripeEventScalarFieldEnum[]
  }

  /**
   * StripeEvent create
   */
  export type StripeEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * The data needed to create a StripeEvent.
     */
    data: XOR<StripeEventCreateInput, StripeEventUncheckedCreateInput>
  }

  /**
   * StripeEvent createMany
   */
  export type StripeEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StripeEvents.
     */
    data: StripeEventCreateManyInput | StripeEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StripeEvent createManyAndReturn
   */
  export type StripeEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * The data used to create many StripeEvents.
     */
    data: StripeEventCreateManyInput | StripeEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StripeEvent update
   */
  export type StripeEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * The data needed to update a StripeEvent.
     */
    data: XOR<StripeEventUpdateInput, StripeEventUncheckedUpdateInput>
    /**
     * Choose, which StripeEvent to update.
     */
    where: StripeEventWhereUniqueInput
  }

  /**
   * StripeEvent updateMany
   */
  export type StripeEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StripeEvents.
     */
    data: XOR<StripeEventUpdateManyMutationInput, StripeEventUncheckedUpdateManyInput>
    /**
     * Filter which StripeEvents to update
     */
    where?: StripeEventWhereInput
    /**
     * Limit how many StripeEvents to update.
     */
    limit?: number
  }

  /**
   * StripeEvent updateManyAndReturn
   */
  export type StripeEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * The data used to update StripeEvents.
     */
    data: XOR<StripeEventUpdateManyMutationInput, StripeEventUncheckedUpdateManyInput>
    /**
     * Filter which StripeEvents to update
     */
    where?: StripeEventWhereInput
    /**
     * Limit how many StripeEvents to update.
     */
    limit?: number
  }

  /**
   * StripeEvent upsert
   */
  export type StripeEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * The filter to search for the StripeEvent to update in case it exists.
     */
    where: StripeEventWhereUniqueInput
    /**
     * In case the StripeEvent found by the `where` argument doesn't exist, create a new StripeEvent with this data.
     */
    create: XOR<StripeEventCreateInput, StripeEventUncheckedCreateInput>
    /**
     * In case the StripeEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StripeEventUpdateInput, StripeEventUncheckedUpdateInput>
  }

  /**
   * StripeEvent delete
   */
  export type StripeEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
    /**
     * Filter which StripeEvent to delete.
     */
    where: StripeEventWhereUniqueInput
  }

  /**
   * StripeEvent deleteMany
   */
  export type StripeEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeEvents to delete
     */
    where?: StripeEventWhereInput
    /**
     * Limit how many StripeEvents to delete.
     */
    limit?: number
  }

  /**
   * StripeEvent without action
   */
  export type StripeEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeEvent
     */
    select?: StripeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeEvent
     */
    omit?: StripeEventOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    accessType: 'accessType',
    hasFullAccess: 'hasFullAccess',
    entryPurchased: 'entryPurchased',
    canUseSubscription: 'canUseSubscription',
    hasAIAdvisor: 'hasAIAdvisor',
    subscriptionId: 'subscriptionId',
    subscriptionStatus: 'subscriptionStatus',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubId: 'stripeSubId',
    assetSplit: 'assetSplit',
    retirementImpact: 'retirementImpact',
    vaDisability: 'vaDisability',
    housingScenario: 'housingScenario',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ScenarioScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    userIncome: 'userIncome',
    spouseIncome: 'spouseIncome',
    childrenCount: 'childrenCount',
    custodyPercent: 'custodyPercent',
    mortgage: 'mortgage',
    childcare: 'childcare',
    school: 'school',
    activities: 'activities',
    utilities: 'utilities',
    insurance: 'insurance',
    otherExpenses: 'otherExpenses',
    savings: 'savings',
    retirement: 'retirement',
    homeEquity: 'homeEquity',
    assetSplit: 'assetSplit',
    retirementImpact: 'retirementImpact',
    vaDisability: 'vaDisability',
    housingScenario: 'housingScenario',
    netIncome: 'netIncome',
    monthlySupport: 'monthlySupport',
    totalExpenses: 'totalExpenses',
    disposableIncome: 'disposableIncome',
    realityScore: 'realityScore',
    realityLevel: 'realityLevel',
    isAutoGenerated: 'isAutoGenerated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScenarioScalarFieldEnum = (typeof ScenarioScalarFieldEnum)[keyof typeof ScenarioScalarFieldEnum]


  export const AddonScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type AddonScalarFieldEnum = (typeof AddonScalarFieldEnum)[keyof typeof AddonScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeSessionId: 'stripeSessionId',
    stripePaymentId: 'stripePaymentId',
    stripePriceId: 'stripePriceId',
    amount: 'amount',
    currency: 'currency',
    productType: 'productType',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const StripeEventScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    type: 'type',
    processed: 'processed',
    createdAt: 'createdAt'
  };

  export type StripeEventScalarFieldEnum = (typeof StripeEventScalarFieldEnum)[keyof typeof StripeEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AddonType'
   */
  export type EnumAddonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddonType'>
    


  /**
   * Reference to a field of type 'AddonType[]'
   */
  export type ListEnumAddonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddonType[]'>
    


  /**
   * Reference to a field of type 'ProductType'
   */
  export type EnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType'>
    


  /**
   * Reference to a field of type 'ProductType[]'
   */
  export type ListEnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    accessType?: StringFilter<"User"> | string
    hasFullAccess?: BoolFilter<"User"> | boolean
    entryPurchased?: BoolFilter<"User"> | boolean
    canUseSubscription?: BoolFilter<"User"> | boolean
    hasAIAdvisor?: BoolFilter<"User"> | boolean
    subscriptionId?: StringNullableFilter<"User"> | string | null
    subscriptionStatus?: StringNullableFilter<"User"> | string | null
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    stripeSubId?: StringNullableFilter<"User"> | string | null
    assetSplit?: BoolFilter<"User"> | boolean
    retirementImpact?: BoolFilter<"User"> | boolean
    vaDisability?: BoolFilter<"User"> | boolean
    housingScenario?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    addons?: AddonListRelationFilter
    scenarios?: ScenarioListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    accessType?: SortOrder
    hasFullAccess?: SortOrder
    entryPurchased?: SortOrder
    canUseSubscription?: SortOrder
    hasAIAdvisor?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubId?: SortOrderInput | SortOrder
    assetSplit?: SortOrder
    retirementImpact?: SortOrder
    vaDisability?: SortOrder
    housingScenario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addons?: AddonOrderByRelationAggregateInput
    scenarios?: ScenarioOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    stripeCustomerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    accessType?: StringFilter<"User"> | string
    hasFullAccess?: BoolFilter<"User"> | boolean
    entryPurchased?: BoolFilter<"User"> | boolean
    canUseSubscription?: BoolFilter<"User"> | boolean
    hasAIAdvisor?: BoolFilter<"User"> | boolean
    subscriptionId?: StringNullableFilter<"User"> | string | null
    subscriptionStatus?: StringNullableFilter<"User"> | string | null
    stripeSubId?: StringNullableFilter<"User"> | string | null
    assetSplit?: BoolFilter<"User"> | boolean
    retirementImpact?: BoolFilter<"User"> | boolean
    vaDisability?: BoolFilter<"User"> | boolean
    housingScenario?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    addons?: AddonListRelationFilter
    scenarios?: ScenarioListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "email" | "stripeCustomerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    accessType?: SortOrder
    hasFullAccess?: SortOrder
    entryPurchased?: SortOrder
    canUseSubscription?: SortOrder
    hasAIAdvisor?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubId?: SortOrderInput | SortOrder
    assetSplit?: SortOrder
    retirementImpact?: SortOrder
    vaDisability?: SortOrder
    housingScenario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    accessType?: StringWithAggregatesFilter<"User"> | string
    hasFullAccess?: BoolWithAggregatesFilter<"User"> | boolean
    entryPurchased?: BoolWithAggregatesFilter<"User"> | boolean
    canUseSubscription?: BoolWithAggregatesFilter<"User"> | boolean
    hasAIAdvisor?: BoolWithAggregatesFilter<"User"> | boolean
    subscriptionId?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscriptionStatus?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeSubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    assetSplit?: BoolWithAggregatesFilter<"User"> | boolean
    retirementImpact?: BoolWithAggregatesFilter<"User"> | boolean
    vaDisability?: BoolWithAggregatesFilter<"User"> | boolean
    housingScenario?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ScenarioWhereInput = {
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    id?: StringFilter<"Scenario"> | string
    userId?: StringFilter<"Scenario"> | string
    name?: StringFilter<"Scenario"> | string
    userIncome?: FloatFilter<"Scenario"> | number
    spouseIncome?: FloatFilter<"Scenario"> | number
    childrenCount?: IntFilter<"Scenario"> | number
    custodyPercent?: FloatFilter<"Scenario"> | number
    mortgage?: FloatFilter<"Scenario"> | number
    childcare?: FloatFilter<"Scenario"> | number
    school?: FloatFilter<"Scenario"> | number
    activities?: FloatFilter<"Scenario"> | number
    utilities?: FloatFilter<"Scenario"> | number
    insurance?: FloatFilter<"Scenario"> | number
    otherExpenses?: FloatFilter<"Scenario"> | number
    savings?: FloatNullableFilter<"Scenario"> | number | null
    retirement?: FloatNullableFilter<"Scenario"> | number | null
    homeEquity?: FloatNullableFilter<"Scenario"> | number | null
    assetSplit?: JsonNullableFilter<"Scenario">
    retirementImpact?: JsonNullableFilter<"Scenario">
    vaDisability?: JsonNullableFilter<"Scenario">
    housingScenario?: JsonNullableFilter<"Scenario">
    netIncome?: FloatFilter<"Scenario"> | number
    monthlySupport?: FloatFilter<"Scenario"> | number
    totalExpenses?: FloatFilter<"Scenario"> | number
    disposableIncome?: FloatFilter<"Scenario"> | number
    realityScore?: FloatFilter<"Scenario"> | number
    realityLevel?: StringFilter<"Scenario"> | string
    isAutoGenerated?: BoolFilter<"Scenario"> | boolean
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ScenarioOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    userIncome?: SortOrder
    spouseIncome?: SortOrder
    childrenCount?: SortOrder
    custodyPercent?: SortOrder
    mortgage?: SortOrder
    childcare?: SortOrder
    school?: SortOrder
    activities?: SortOrder
    utilities?: SortOrder
    insurance?: SortOrder
    otherExpenses?: SortOrder
    savings?: SortOrderInput | SortOrder
    retirement?: SortOrderInput | SortOrder
    homeEquity?: SortOrderInput | SortOrder
    assetSplit?: SortOrderInput | SortOrder
    retirementImpact?: SortOrderInput | SortOrder
    vaDisability?: SortOrderInput | SortOrder
    housingScenario?: SortOrderInput | SortOrder
    netIncome?: SortOrder
    monthlySupport?: SortOrder
    totalExpenses?: SortOrder
    disposableIncome?: SortOrder
    realityScore?: SortOrder
    realityLevel?: SortOrder
    isAutoGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ScenarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    userId?: StringFilter<"Scenario"> | string
    name?: StringFilter<"Scenario"> | string
    userIncome?: FloatFilter<"Scenario"> | number
    spouseIncome?: FloatFilter<"Scenario"> | number
    childrenCount?: IntFilter<"Scenario"> | number
    custodyPercent?: FloatFilter<"Scenario"> | number
    mortgage?: FloatFilter<"Scenario"> | number
    childcare?: FloatFilter<"Scenario"> | number
    school?: FloatFilter<"Scenario"> | number
    activities?: FloatFilter<"Scenario"> | number
    utilities?: FloatFilter<"Scenario"> | number
    insurance?: FloatFilter<"Scenario"> | number
    otherExpenses?: FloatFilter<"Scenario"> | number
    savings?: FloatNullableFilter<"Scenario"> | number | null
    retirement?: FloatNullableFilter<"Scenario"> | number | null
    homeEquity?: FloatNullableFilter<"Scenario"> | number | null
    assetSplit?: JsonNullableFilter<"Scenario">
    retirementImpact?: JsonNullableFilter<"Scenario">
    vaDisability?: JsonNullableFilter<"Scenario">
    housingScenario?: JsonNullableFilter<"Scenario">
    netIncome?: FloatFilter<"Scenario"> | number
    monthlySupport?: FloatFilter<"Scenario"> | number
    totalExpenses?: FloatFilter<"Scenario"> | number
    disposableIncome?: FloatFilter<"Scenario"> | number
    realityScore?: FloatFilter<"Scenario"> | number
    realityLevel?: StringFilter<"Scenario"> | string
    isAutoGenerated?: BoolFilter<"Scenario"> | boolean
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ScenarioOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    userIncome?: SortOrder
    spouseIncome?: SortOrder
    childrenCount?: SortOrder
    custodyPercent?: SortOrder
    mortgage?: SortOrder
    childcare?: SortOrder
    school?: SortOrder
    activities?: SortOrder
    utilities?: SortOrder
    insurance?: SortOrder
    otherExpenses?: SortOrder
    savings?: SortOrderInput | SortOrder
    retirement?: SortOrderInput | SortOrder
    homeEquity?: SortOrderInput | SortOrder
    assetSplit?: SortOrderInput | SortOrder
    retirementImpact?: SortOrderInput | SortOrder
    vaDisability?: SortOrderInput | SortOrder
    housingScenario?: SortOrderInput | SortOrder
    netIncome?: SortOrder
    monthlySupport?: SortOrder
    totalExpenses?: SortOrder
    disposableIncome?: SortOrder
    realityScore?: SortOrder
    realityLevel?: SortOrder
    isAutoGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScenarioCountOrderByAggregateInput
    _avg?: ScenarioAvgOrderByAggregateInput
    _max?: ScenarioMaxOrderByAggregateInput
    _min?: ScenarioMinOrderByAggregateInput
    _sum?: ScenarioSumOrderByAggregateInput
  }

  export type ScenarioScalarWhereWithAggregatesInput = {
    AND?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    OR?: ScenarioScalarWhereWithAggregatesInput[]
    NOT?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scenario"> | string
    userId?: StringWithAggregatesFilter<"Scenario"> | string
    name?: StringWithAggregatesFilter<"Scenario"> | string
    userIncome?: FloatWithAggregatesFilter<"Scenario"> | number
    spouseIncome?: FloatWithAggregatesFilter<"Scenario"> | number
    childrenCount?: IntWithAggregatesFilter<"Scenario"> | number
    custodyPercent?: FloatWithAggregatesFilter<"Scenario"> | number
    mortgage?: FloatWithAggregatesFilter<"Scenario"> | number
    childcare?: FloatWithAggregatesFilter<"Scenario"> | number
    school?: FloatWithAggregatesFilter<"Scenario"> | number
    activities?: FloatWithAggregatesFilter<"Scenario"> | number
    utilities?: FloatWithAggregatesFilter<"Scenario"> | number
    insurance?: FloatWithAggregatesFilter<"Scenario"> | number
    otherExpenses?: FloatWithAggregatesFilter<"Scenario"> | number
    savings?: FloatNullableWithAggregatesFilter<"Scenario"> | number | null
    retirement?: FloatNullableWithAggregatesFilter<"Scenario"> | number | null
    homeEquity?: FloatNullableWithAggregatesFilter<"Scenario"> | number | null
    assetSplit?: JsonNullableWithAggregatesFilter<"Scenario">
    retirementImpact?: JsonNullableWithAggregatesFilter<"Scenario">
    vaDisability?: JsonNullableWithAggregatesFilter<"Scenario">
    housingScenario?: JsonNullableWithAggregatesFilter<"Scenario">
    netIncome?: FloatWithAggregatesFilter<"Scenario"> | number
    monthlySupport?: FloatWithAggregatesFilter<"Scenario"> | number
    totalExpenses?: FloatWithAggregatesFilter<"Scenario"> | number
    disposableIncome?: FloatWithAggregatesFilter<"Scenario"> | number
    realityScore?: FloatWithAggregatesFilter<"Scenario"> | number
    realityLevel?: StringWithAggregatesFilter<"Scenario"> | string
    isAutoGenerated?: BoolWithAggregatesFilter<"Scenario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Scenario"> | Date | string
  }

  export type AddonWhereInput = {
    AND?: AddonWhereInput | AddonWhereInput[]
    OR?: AddonWhereInput[]
    NOT?: AddonWhereInput | AddonWhereInput[]
    id?: StringFilter<"Addon"> | string
    userId?: StringFilter<"Addon"> | string
    type?: EnumAddonTypeFilter<"Addon"> | $Enums.AddonType
    isActive?: BoolFilter<"Addon"> | boolean
    createdAt?: DateTimeFilter<"Addon"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AddonOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddonWhereInput | AddonWhereInput[]
    OR?: AddonWhereInput[]
    NOT?: AddonWhereInput | AddonWhereInput[]
    userId?: StringFilter<"Addon"> | string
    type?: EnumAddonTypeFilter<"Addon"> | $Enums.AddonType
    isActive?: BoolFilter<"Addon"> | boolean
    createdAt?: DateTimeFilter<"Addon"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AddonOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: AddonCountOrderByAggregateInput
    _max?: AddonMaxOrderByAggregateInput
    _min?: AddonMinOrderByAggregateInput
  }

  export type AddonScalarWhereWithAggregatesInput = {
    AND?: AddonScalarWhereWithAggregatesInput | AddonScalarWhereWithAggregatesInput[]
    OR?: AddonScalarWhereWithAggregatesInput[]
    NOT?: AddonScalarWhereWithAggregatesInput | AddonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Addon"> | string
    userId?: StringWithAggregatesFilter<"Addon"> | string
    type?: EnumAddonTypeWithAggregatesFilter<"Addon"> | $Enums.AddonType
    isActive?: BoolWithAggregatesFilter<"Addon"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Addon"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    stripeSessionId?: StringFilter<"Payment"> | string
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    stripePriceId?: StringNullableFilter<"Payment"> | string | null
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    productType?: EnumProductTypeFilter<"Payment"> | $Enums.ProductType
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    productType?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSessionId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    stripePriceId?: StringNullableFilter<"Payment"> | string | null
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    productType?: EnumProductTypeFilter<"Payment"> | $Enums.ProductType
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "stripeSessionId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    productType?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    stripeSessionId?: StringWithAggregatesFilter<"Payment"> | string
    stripePaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    stripePriceId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    productType?: EnumProductTypeWithAggregatesFilter<"Payment"> | $Enums.ProductType
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type StripeEventWhereInput = {
    AND?: StripeEventWhereInput | StripeEventWhereInput[]
    OR?: StripeEventWhereInput[]
    NOT?: StripeEventWhereInput | StripeEventWhereInput[]
    id?: StringFilter<"StripeEvent"> | string
    eventId?: StringFilter<"StripeEvent"> | string
    type?: StringFilter<"StripeEvent"> | string
    processed?: BoolFilter<"StripeEvent"> | boolean
    createdAt?: DateTimeFilter<"StripeEvent"> | Date | string
  }

  export type StripeEventOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    processed?: SortOrder
    createdAt?: SortOrder
  }

  export type StripeEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: StripeEventWhereInput | StripeEventWhereInput[]
    OR?: StripeEventWhereInput[]
    NOT?: StripeEventWhereInput | StripeEventWhereInput[]
    type?: StringFilter<"StripeEvent"> | string
    processed?: BoolFilter<"StripeEvent"> | boolean
    createdAt?: DateTimeFilter<"StripeEvent"> | Date | string
  }, "id" | "eventId">

  export type StripeEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    processed?: SortOrder
    createdAt?: SortOrder
    _count?: StripeEventCountOrderByAggregateInput
    _max?: StripeEventMaxOrderByAggregateInput
    _min?: StripeEventMinOrderByAggregateInput
  }

  export type StripeEventScalarWhereWithAggregatesInput = {
    AND?: StripeEventScalarWhereWithAggregatesInput | StripeEventScalarWhereWithAggregatesInput[]
    OR?: StripeEventScalarWhereWithAggregatesInput[]
    NOT?: StripeEventScalarWhereWithAggregatesInput | StripeEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StripeEvent"> | string
    eventId?: StringWithAggregatesFilter<"StripeEvent"> | string
    type?: StringWithAggregatesFilter<"StripeEvent"> | string
    processed?: BoolWithAggregatesFilter<"StripeEvent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StripeEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    accessType?: string
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    addons?: AddonCreateNestedManyWithoutUserInput
    scenarios?: ScenarioCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    accessType?: string
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    addons?: AddonUncheckedCreateNestedManyWithoutUserInput
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    hasFullAccess?: BoolFieldUpdateOperationsInput | boolean
    entryPurchased?: BoolFieldUpdateOperationsInput | boolean
    canUseSubscription?: BoolFieldUpdateOperationsInput | boolean
    hasAIAdvisor?: BoolFieldUpdateOperationsInput | boolean
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    assetSplit?: BoolFieldUpdateOperationsInput | boolean
    retirementImpact?: BoolFieldUpdateOperationsInput | boolean
    vaDisability?: BoolFieldUpdateOperationsInput | boolean
    housingScenario?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addons?: AddonUpdateManyWithoutUserNestedInput
    scenarios?: ScenarioUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    hasFullAccess?: BoolFieldUpdateOperationsInput | boolean
    entryPurchased?: BoolFieldUpdateOperationsInput | boolean
    canUseSubscription?: BoolFieldUpdateOperationsInput | boolean
    hasAIAdvisor?: BoolFieldUpdateOperationsInput | boolean
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    assetSplit?: BoolFieldUpdateOperationsInput | boolean
    retirementImpact?: BoolFieldUpdateOperationsInput | boolean
    vaDisability?: BoolFieldUpdateOperationsInput | boolean
    housingScenario?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addons?: AddonUncheckedUpdateManyWithoutUserNestedInput
    scenarios?: ScenarioUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    accessType?: string
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    hasFullAccess?: BoolFieldUpdateOperationsInput | boolean
    entryPurchased?: BoolFieldUpdateOperationsInput | boolean
    canUseSubscription?: BoolFieldUpdateOperationsInput | boolean
    hasAIAdvisor?: BoolFieldUpdateOperationsInput | boolean
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    assetSplit?: BoolFieldUpdateOperationsInput | boolean
    retirementImpact?: BoolFieldUpdateOperationsInput | boolean
    vaDisability?: BoolFieldUpdateOperationsInput | boolean
    housingScenario?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    hasFullAccess?: BoolFieldUpdateOperationsInput | boolean
    entryPurchased?: BoolFieldUpdateOperationsInput | boolean
    canUseSubscription?: BoolFieldUpdateOperationsInput | boolean
    hasAIAdvisor?: BoolFieldUpdateOperationsInput | boolean
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    assetSplit?: BoolFieldUpdateOperationsInput | boolean
    retirementImpact?: BoolFieldUpdateOperationsInput | boolean
    vaDisability?: BoolFieldUpdateOperationsInput | boolean
    housingScenario?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioCreateInput = {
    id?: string
    name?: string
    userIncome: number
    spouseIncome: number
    childrenCount: number
    custodyPercent: number
    mortgage?: number
    childcare?: number
    school?: number
    activities?: number
    utilities?: number
    insurance?: number
    otherExpenses?: number
    savings?: number | null
    retirement?: number | null
    homeEquity?: number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome: number
    monthlySupport: number
    totalExpenses: number
    disposableIncome: number
    realityScore: number
    realityLevel: string
    isAutoGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutScenariosInput
  }

  export type ScenarioUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string
    userIncome: number
    spouseIncome: number
    childrenCount: number
    custodyPercent: number
    mortgage?: number
    childcare?: number
    school?: number
    activities?: number
    utilities?: number
    insurance?: number
    otherExpenses?: number
    savings?: number | null
    retirement?: number | null
    homeEquity?: number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome: number
    monthlySupport: number
    totalExpenses: number
    disposableIncome: number
    realityScore: number
    realityLevel: string
    isAutoGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userIncome?: FloatFieldUpdateOperationsInput | number
    spouseIncome?: FloatFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    custodyPercent?: FloatFieldUpdateOperationsInput | number
    mortgage?: FloatFieldUpdateOperationsInput | number
    childcare?: FloatFieldUpdateOperationsInput | number
    school?: FloatFieldUpdateOperationsInput | number
    activities?: FloatFieldUpdateOperationsInput | number
    utilities?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    otherExpenses?: FloatFieldUpdateOperationsInput | number
    savings?: NullableFloatFieldUpdateOperationsInput | number | null
    retirement?: NullableFloatFieldUpdateOperationsInput | number | null
    homeEquity?: NullableFloatFieldUpdateOperationsInput | number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome?: FloatFieldUpdateOperationsInput | number
    monthlySupport?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    disposableIncome?: FloatFieldUpdateOperationsInput | number
    realityScore?: FloatFieldUpdateOperationsInput | number
    realityLevel?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScenariosNestedInput
  }

  export type ScenarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userIncome?: FloatFieldUpdateOperationsInput | number
    spouseIncome?: FloatFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    custodyPercent?: FloatFieldUpdateOperationsInput | number
    mortgage?: FloatFieldUpdateOperationsInput | number
    childcare?: FloatFieldUpdateOperationsInput | number
    school?: FloatFieldUpdateOperationsInput | number
    activities?: FloatFieldUpdateOperationsInput | number
    utilities?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    otherExpenses?: FloatFieldUpdateOperationsInput | number
    savings?: NullableFloatFieldUpdateOperationsInput | number | null
    retirement?: NullableFloatFieldUpdateOperationsInput | number | null
    homeEquity?: NullableFloatFieldUpdateOperationsInput | number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome?: FloatFieldUpdateOperationsInput | number
    monthlySupport?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    disposableIncome?: FloatFieldUpdateOperationsInput | number
    realityScore?: FloatFieldUpdateOperationsInput | number
    realityLevel?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioCreateManyInput = {
    id?: string
    userId: string
    name?: string
    userIncome: number
    spouseIncome: number
    childrenCount: number
    custodyPercent: number
    mortgage?: number
    childcare?: number
    school?: number
    activities?: number
    utilities?: number
    insurance?: number
    otherExpenses?: number
    savings?: number | null
    retirement?: number | null
    homeEquity?: number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome: number
    monthlySupport: number
    totalExpenses: number
    disposableIncome: number
    realityScore: number
    realityLevel: string
    isAutoGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userIncome?: FloatFieldUpdateOperationsInput | number
    spouseIncome?: FloatFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    custodyPercent?: FloatFieldUpdateOperationsInput | number
    mortgage?: FloatFieldUpdateOperationsInput | number
    childcare?: FloatFieldUpdateOperationsInput | number
    school?: FloatFieldUpdateOperationsInput | number
    activities?: FloatFieldUpdateOperationsInput | number
    utilities?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    otherExpenses?: FloatFieldUpdateOperationsInput | number
    savings?: NullableFloatFieldUpdateOperationsInput | number | null
    retirement?: NullableFloatFieldUpdateOperationsInput | number | null
    homeEquity?: NullableFloatFieldUpdateOperationsInput | number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome?: FloatFieldUpdateOperationsInput | number
    monthlySupport?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    disposableIncome?: FloatFieldUpdateOperationsInput | number
    realityScore?: FloatFieldUpdateOperationsInput | number
    realityLevel?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userIncome?: FloatFieldUpdateOperationsInput | number
    spouseIncome?: FloatFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    custodyPercent?: FloatFieldUpdateOperationsInput | number
    mortgage?: FloatFieldUpdateOperationsInput | number
    childcare?: FloatFieldUpdateOperationsInput | number
    school?: FloatFieldUpdateOperationsInput | number
    activities?: FloatFieldUpdateOperationsInput | number
    utilities?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    otherExpenses?: FloatFieldUpdateOperationsInput | number
    savings?: NullableFloatFieldUpdateOperationsInput | number | null
    retirement?: NullableFloatFieldUpdateOperationsInput | number | null
    homeEquity?: NullableFloatFieldUpdateOperationsInput | number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome?: FloatFieldUpdateOperationsInput | number
    monthlySupport?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    disposableIncome?: FloatFieldUpdateOperationsInput | number
    realityScore?: FloatFieldUpdateOperationsInput | number
    realityLevel?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddonCreateInput = {
    id?: string
    type: $Enums.AddonType
    isActive?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAddonsInput
  }

  export type AddonUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.AddonType
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AddonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAddonTypeFieldUpdateOperationsInput | $Enums.AddonType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddonsNestedInput
  }

  export type AddonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAddonTypeFieldUpdateOperationsInput | $Enums.AddonType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddonCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.AddonType
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AddonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAddonTypeFieldUpdateOperationsInput | $Enums.AddonType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAddonTypeFieldUpdateOperationsInput | $Enums.AddonType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    stripeSessionId: string
    stripePaymentId?: string | null
    stripePriceId?: string | null
    amount: number
    currency?: string
    productType: $Enums.ProductType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    stripeSessionId: string
    stripePaymentId?: string | null
    stripePriceId?: string | null
    amount: number
    currency?: string
    productType: $Enums.ProductType
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    stripeSessionId: string
    stripePaymentId?: string | null
    stripePriceId?: string | null
    amount: number
    currency?: string
    productType: $Enums.ProductType
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeEventCreateInput = {
    id?: string
    eventId: string
    type: string
    processed?: boolean
    createdAt?: Date | string
  }

  export type StripeEventUncheckedCreateInput = {
    id?: string
    eventId: string
    type: string
    processed?: boolean
    createdAt?: Date | string
  }

  export type StripeEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeEventCreateManyInput = {
    id?: string
    eventId: string
    type: string
    processed?: boolean
    createdAt?: Date | string
  }

  export type StripeEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AddonListRelationFilter = {
    every?: AddonWhereInput
    some?: AddonWhereInput
    none?: AddonWhereInput
  }

  export type ScenarioListRelationFilter = {
    every?: ScenarioWhereInput
    some?: ScenarioWhereInput
    none?: ScenarioWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScenarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    accessType?: SortOrder
    hasFullAccess?: SortOrder
    entryPurchased?: SortOrder
    canUseSubscription?: SortOrder
    hasAIAdvisor?: SortOrder
    subscriptionId?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubId?: SortOrder
    assetSplit?: SortOrder
    retirementImpact?: SortOrder
    vaDisability?: SortOrder
    housingScenario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    accessType?: SortOrder
    hasFullAccess?: SortOrder
    entryPurchased?: SortOrder
    canUseSubscription?: SortOrder
    hasAIAdvisor?: SortOrder
    subscriptionId?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubId?: SortOrder
    assetSplit?: SortOrder
    retirementImpact?: SortOrder
    vaDisability?: SortOrder
    housingScenario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    accessType?: SortOrder
    hasFullAccess?: SortOrder
    entryPurchased?: SortOrder
    canUseSubscription?: SortOrder
    hasAIAdvisor?: SortOrder
    subscriptionId?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubId?: SortOrder
    assetSplit?: SortOrder
    retirementImpact?: SortOrder
    vaDisability?: SortOrder
    housingScenario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ScenarioCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    userIncome?: SortOrder
    spouseIncome?: SortOrder
    childrenCount?: SortOrder
    custodyPercent?: SortOrder
    mortgage?: SortOrder
    childcare?: SortOrder
    school?: SortOrder
    activities?: SortOrder
    utilities?: SortOrder
    insurance?: SortOrder
    otherExpenses?: SortOrder
    savings?: SortOrder
    retirement?: SortOrder
    homeEquity?: SortOrder
    assetSplit?: SortOrder
    retirementImpact?: SortOrder
    vaDisability?: SortOrder
    housingScenario?: SortOrder
    netIncome?: SortOrder
    monthlySupport?: SortOrder
    totalExpenses?: SortOrder
    disposableIncome?: SortOrder
    realityScore?: SortOrder
    realityLevel?: SortOrder
    isAutoGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioAvgOrderByAggregateInput = {
    userIncome?: SortOrder
    spouseIncome?: SortOrder
    childrenCount?: SortOrder
    custodyPercent?: SortOrder
    mortgage?: SortOrder
    childcare?: SortOrder
    school?: SortOrder
    activities?: SortOrder
    utilities?: SortOrder
    insurance?: SortOrder
    otherExpenses?: SortOrder
    savings?: SortOrder
    retirement?: SortOrder
    homeEquity?: SortOrder
    netIncome?: SortOrder
    monthlySupport?: SortOrder
    totalExpenses?: SortOrder
    disposableIncome?: SortOrder
    realityScore?: SortOrder
  }

  export type ScenarioMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    userIncome?: SortOrder
    spouseIncome?: SortOrder
    childrenCount?: SortOrder
    custodyPercent?: SortOrder
    mortgage?: SortOrder
    childcare?: SortOrder
    school?: SortOrder
    activities?: SortOrder
    utilities?: SortOrder
    insurance?: SortOrder
    otherExpenses?: SortOrder
    savings?: SortOrder
    retirement?: SortOrder
    homeEquity?: SortOrder
    netIncome?: SortOrder
    monthlySupport?: SortOrder
    totalExpenses?: SortOrder
    disposableIncome?: SortOrder
    realityScore?: SortOrder
    realityLevel?: SortOrder
    isAutoGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    userIncome?: SortOrder
    spouseIncome?: SortOrder
    childrenCount?: SortOrder
    custodyPercent?: SortOrder
    mortgage?: SortOrder
    childcare?: SortOrder
    school?: SortOrder
    activities?: SortOrder
    utilities?: SortOrder
    insurance?: SortOrder
    otherExpenses?: SortOrder
    savings?: SortOrder
    retirement?: SortOrder
    homeEquity?: SortOrder
    netIncome?: SortOrder
    monthlySupport?: SortOrder
    totalExpenses?: SortOrder
    disposableIncome?: SortOrder
    realityScore?: SortOrder
    realityLevel?: SortOrder
    isAutoGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioSumOrderByAggregateInput = {
    userIncome?: SortOrder
    spouseIncome?: SortOrder
    childrenCount?: SortOrder
    custodyPercent?: SortOrder
    mortgage?: SortOrder
    childcare?: SortOrder
    school?: SortOrder
    activities?: SortOrder
    utilities?: SortOrder
    insurance?: SortOrder
    otherExpenses?: SortOrder
    savings?: SortOrder
    retirement?: SortOrder
    homeEquity?: SortOrder
    netIncome?: SortOrder
    monthlySupport?: SortOrder
    totalExpenses?: SortOrder
    disposableIncome?: SortOrder
    realityScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumAddonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddonType | EnumAddonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddonType[] | ListEnumAddonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddonType[] | ListEnumAddonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddonTypeFilter<$PrismaModel> | $Enums.AddonType
  }

  export type AddonCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AddonMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AddonMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAddonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddonType | EnumAddonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddonType[] | ListEnumAddonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddonType[] | ListEnumAddonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddonTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddonTypeFilter<$PrismaModel>
    _max?: NestedEnumAddonTypeFilter<$PrismaModel>
  }

  export type EnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrder
    stripePriceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    productType?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrder
    stripePriceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    productType?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrder
    stripePriceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    productType?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type StripeEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    processed?: SortOrder
    createdAt?: SortOrder
  }

  export type StripeEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    processed?: SortOrder
    createdAt?: SortOrder
  }

  export type StripeEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    processed?: SortOrder
    createdAt?: SortOrder
  }

  export type AddonCreateNestedManyWithoutUserInput = {
    create?: XOR<AddonCreateWithoutUserInput, AddonUncheckedCreateWithoutUserInput> | AddonCreateWithoutUserInput[] | AddonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddonCreateOrConnectWithoutUserInput | AddonCreateOrConnectWithoutUserInput[]
    createMany?: AddonCreateManyUserInputEnvelope
    connect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
  }

  export type ScenarioCreateNestedManyWithoutUserInput = {
    create?: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput> | ScenarioCreateWithoutUserInput[] | ScenarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutUserInput | ScenarioCreateOrConnectWithoutUserInput[]
    createMany?: ScenarioCreateManyUserInputEnvelope
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AddonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddonCreateWithoutUserInput, AddonUncheckedCreateWithoutUserInput> | AddonCreateWithoutUserInput[] | AddonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddonCreateOrConnectWithoutUserInput | AddonCreateOrConnectWithoutUserInput[]
    createMany?: AddonCreateManyUserInputEnvelope
    connect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
  }

  export type ScenarioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput> | ScenarioCreateWithoutUserInput[] | ScenarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutUserInput | ScenarioCreateOrConnectWithoutUserInput[]
    createMany?: ScenarioCreateManyUserInputEnvelope
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddonUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddonCreateWithoutUserInput, AddonUncheckedCreateWithoutUserInput> | AddonCreateWithoutUserInput[] | AddonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddonCreateOrConnectWithoutUserInput | AddonCreateOrConnectWithoutUserInput[]
    upsert?: AddonUpsertWithWhereUniqueWithoutUserInput | AddonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddonCreateManyUserInputEnvelope
    set?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    disconnect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    delete?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    connect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    update?: AddonUpdateWithWhereUniqueWithoutUserInput | AddonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddonUpdateManyWithWhereWithoutUserInput | AddonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddonScalarWhereInput | AddonScalarWhereInput[]
  }

  export type ScenarioUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput> | ScenarioCreateWithoutUserInput[] | ScenarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutUserInput | ScenarioCreateOrConnectWithoutUserInput[]
    upsert?: ScenarioUpsertWithWhereUniqueWithoutUserInput | ScenarioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScenarioCreateManyUserInputEnvelope
    set?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    disconnect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    delete?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    update?: ScenarioUpdateWithWhereUniqueWithoutUserInput | ScenarioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScenarioUpdateManyWithWhereWithoutUserInput | ScenarioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AddonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddonCreateWithoutUserInput, AddonUncheckedCreateWithoutUserInput> | AddonCreateWithoutUserInput[] | AddonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddonCreateOrConnectWithoutUserInput | AddonCreateOrConnectWithoutUserInput[]
    upsert?: AddonUpsertWithWhereUniqueWithoutUserInput | AddonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddonCreateManyUserInputEnvelope
    set?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    disconnect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    delete?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    connect?: AddonWhereUniqueInput | AddonWhereUniqueInput[]
    update?: AddonUpdateWithWhereUniqueWithoutUserInput | AddonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddonUpdateManyWithWhereWithoutUserInput | AddonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddonScalarWhereInput | AddonScalarWhereInput[]
  }

  export type ScenarioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput> | ScenarioCreateWithoutUserInput[] | ScenarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutUserInput | ScenarioCreateOrConnectWithoutUserInput[]
    upsert?: ScenarioUpsertWithWhereUniqueWithoutUserInput | ScenarioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScenarioCreateManyUserInputEnvelope
    set?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    disconnect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    delete?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    update?: ScenarioUpdateWithWhereUniqueWithoutUserInput | ScenarioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScenarioUpdateManyWithWhereWithoutUserInput | ScenarioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutScenariosInput = {
    create?: XOR<UserCreateWithoutScenariosInput, UserUncheckedCreateWithoutScenariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutScenariosInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutScenariosNestedInput = {
    create?: XOR<UserCreateWithoutScenariosInput, UserUncheckedCreateWithoutScenariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutScenariosInput
    upsert?: UserUpsertWithoutScenariosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScenariosInput, UserUpdateWithoutScenariosInput>, UserUncheckedUpdateWithoutScenariosInput>
  }

  export type UserCreateNestedOneWithoutAddonsInput = {
    create?: XOR<UserCreateWithoutAddonsInput, UserUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddonsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAddonTypeFieldUpdateOperationsInput = {
    set?: $Enums.AddonType
  }

  export type UserUpdateOneRequiredWithoutAddonsNestedInput = {
    create?: XOR<UserCreateWithoutAddonsInput, UserUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddonsInput
    upsert?: UserUpsertWithoutAddonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddonsInput, UserUpdateWithoutAddonsInput>, UserUncheckedUpdateWithoutAddonsInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProductTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProductType
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAddonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddonType | EnumAddonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddonType[] | ListEnumAddonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddonType[] | ListEnumAddonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddonTypeFilter<$PrismaModel> | $Enums.AddonType
  }

  export type NestedEnumAddonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddonType | EnumAddonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddonType[] | ListEnumAddonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddonType[] | ListEnumAddonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddonTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddonTypeFilter<$PrismaModel>
    _max?: NestedEnumAddonTypeFilter<$PrismaModel>
  }

  export type NestedEnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type NestedEnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type AddonCreateWithoutUserInput = {
    id?: string
    type: $Enums.AddonType
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AddonUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.AddonType
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AddonCreateOrConnectWithoutUserInput = {
    where: AddonWhereUniqueInput
    create: XOR<AddonCreateWithoutUserInput, AddonUncheckedCreateWithoutUserInput>
  }

  export type AddonCreateManyUserInputEnvelope = {
    data: AddonCreateManyUserInput | AddonCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ScenarioCreateWithoutUserInput = {
    id?: string
    name?: string
    userIncome: number
    spouseIncome: number
    childrenCount: number
    custodyPercent: number
    mortgage?: number
    childcare?: number
    school?: number
    activities?: number
    utilities?: number
    insurance?: number
    otherExpenses?: number
    savings?: number | null
    retirement?: number | null
    homeEquity?: number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome: number
    monthlySupport: number
    totalExpenses: number
    disposableIncome: number
    realityScore: number
    realityLevel: string
    isAutoGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string
    userIncome: number
    spouseIncome: number
    childrenCount: number
    custodyPercent: number
    mortgage?: number
    childcare?: number
    school?: number
    activities?: number
    utilities?: number
    insurance?: number
    otherExpenses?: number
    savings?: number | null
    retirement?: number | null
    homeEquity?: number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome: number
    monthlySupport: number
    totalExpenses: number
    disposableIncome: number
    realityScore: number
    realityLevel: string
    isAutoGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioCreateOrConnectWithoutUserInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput>
  }

  export type ScenarioCreateManyUserInputEnvelope = {
    data: ScenarioCreateManyUserInput | ScenarioCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    stripeSessionId: string
    stripePaymentId?: string | null
    stripePriceId?: string | null
    amount: number
    currency?: string
    productType: $Enums.ProductType
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    stripeSessionId: string
    stripePaymentId?: string | null
    stripePriceId?: string | null
    amount: number
    currency?: string
    productType: $Enums.ProductType
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddonUpsertWithWhereUniqueWithoutUserInput = {
    where: AddonWhereUniqueInput
    update: XOR<AddonUpdateWithoutUserInput, AddonUncheckedUpdateWithoutUserInput>
    create: XOR<AddonCreateWithoutUserInput, AddonUncheckedCreateWithoutUserInput>
  }

  export type AddonUpdateWithWhereUniqueWithoutUserInput = {
    where: AddonWhereUniqueInput
    data: XOR<AddonUpdateWithoutUserInput, AddonUncheckedUpdateWithoutUserInput>
  }

  export type AddonUpdateManyWithWhereWithoutUserInput = {
    where: AddonScalarWhereInput
    data: XOR<AddonUpdateManyMutationInput, AddonUncheckedUpdateManyWithoutUserInput>
  }

  export type AddonScalarWhereInput = {
    AND?: AddonScalarWhereInput | AddonScalarWhereInput[]
    OR?: AddonScalarWhereInput[]
    NOT?: AddonScalarWhereInput | AddonScalarWhereInput[]
    id?: StringFilter<"Addon"> | string
    userId?: StringFilter<"Addon"> | string
    type?: EnumAddonTypeFilter<"Addon"> | $Enums.AddonType
    isActive?: BoolFilter<"Addon"> | boolean
    createdAt?: DateTimeFilter<"Addon"> | Date | string
  }

  export type ScenarioUpsertWithWhereUniqueWithoutUserInput = {
    where: ScenarioWhereUniqueInput
    update: XOR<ScenarioUpdateWithoutUserInput, ScenarioUncheckedUpdateWithoutUserInput>
    create: XOR<ScenarioCreateWithoutUserInput, ScenarioUncheckedCreateWithoutUserInput>
  }

  export type ScenarioUpdateWithWhereUniqueWithoutUserInput = {
    where: ScenarioWhereUniqueInput
    data: XOR<ScenarioUpdateWithoutUserInput, ScenarioUncheckedUpdateWithoutUserInput>
  }

  export type ScenarioUpdateManyWithWhereWithoutUserInput = {
    where: ScenarioScalarWhereInput
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyWithoutUserInput>
  }

  export type ScenarioScalarWhereInput = {
    AND?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
    OR?: ScenarioScalarWhereInput[]
    NOT?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
    id?: StringFilter<"Scenario"> | string
    userId?: StringFilter<"Scenario"> | string
    name?: StringFilter<"Scenario"> | string
    userIncome?: FloatFilter<"Scenario"> | number
    spouseIncome?: FloatFilter<"Scenario"> | number
    childrenCount?: IntFilter<"Scenario"> | number
    custodyPercent?: FloatFilter<"Scenario"> | number
    mortgage?: FloatFilter<"Scenario"> | number
    childcare?: FloatFilter<"Scenario"> | number
    school?: FloatFilter<"Scenario"> | number
    activities?: FloatFilter<"Scenario"> | number
    utilities?: FloatFilter<"Scenario"> | number
    insurance?: FloatFilter<"Scenario"> | number
    otherExpenses?: FloatFilter<"Scenario"> | number
    savings?: FloatNullableFilter<"Scenario"> | number | null
    retirement?: FloatNullableFilter<"Scenario"> | number | null
    homeEquity?: FloatNullableFilter<"Scenario"> | number | null
    assetSplit?: JsonNullableFilter<"Scenario">
    retirementImpact?: JsonNullableFilter<"Scenario">
    vaDisability?: JsonNullableFilter<"Scenario">
    housingScenario?: JsonNullableFilter<"Scenario">
    netIncome?: FloatFilter<"Scenario"> | number
    monthlySupport?: FloatFilter<"Scenario"> | number
    totalExpenses?: FloatFilter<"Scenario"> | number
    disposableIncome?: FloatFilter<"Scenario"> | number
    realityScore?: FloatFilter<"Scenario"> | number
    realityLevel?: StringFilter<"Scenario"> | string
    isAutoGenerated?: BoolFilter<"Scenario"> | boolean
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    stripeSessionId?: StringFilter<"Payment"> | string
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    stripePriceId?: StringNullableFilter<"Payment"> | string | null
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    productType?: EnumProductTypeFilter<"Payment"> | $Enums.ProductType
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UserCreateWithoutScenariosInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    accessType?: string
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    addons?: AddonCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScenariosInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    accessType?: string
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    addons?: AddonUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScenariosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScenariosInput, UserUncheckedCreateWithoutScenariosInput>
  }

  export type UserUpsertWithoutScenariosInput = {
    update: XOR<UserUpdateWithoutScenariosInput, UserUncheckedUpdateWithoutScenariosInput>
    create: XOR<UserCreateWithoutScenariosInput, UserUncheckedCreateWithoutScenariosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScenariosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScenariosInput, UserUncheckedUpdateWithoutScenariosInput>
  }

  export type UserUpdateWithoutScenariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    hasFullAccess?: BoolFieldUpdateOperationsInput | boolean
    entryPurchased?: BoolFieldUpdateOperationsInput | boolean
    canUseSubscription?: BoolFieldUpdateOperationsInput | boolean
    hasAIAdvisor?: BoolFieldUpdateOperationsInput | boolean
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    assetSplit?: BoolFieldUpdateOperationsInput | boolean
    retirementImpact?: BoolFieldUpdateOperationsInput | boolean
    vaDisability?: BoolFieldUpdateOperationsInput | boolean
    housingScenario?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addons?: AddonUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScenariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    hasFullAccess?: BoolFieldUpdateOperationsInput | boolean
    entryPurchased?: BoolFieldUpdateOperationsInput | boolean
    canUseSubscription?: BoolFieldUpdateOperationsInput | boolean
    hasAIAdvisor?: BoolFieldUpdateOperationsInput | boolean
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    assetSplit?: BoolFieldUpdateOperationsInput | boolean
    retirementImpact?: BoolFieldUpdateOperationsInput | boolean
    vaDisability?: BoolFieldUpdateOperationsInput | boolean
    housingScenario?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addons?: AddonUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAddonsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    accessType?: string
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    scenarios?: ScenarioCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddonsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    accessType?: string
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddonsInput, UserUncheckedCreateWithoutAddonsInput>
  }

  export type UserUpsertWithoutAddonsInput = {
    update: XOR<UserUpdateWithoutAddonsInput, UserUncheckedUpdateWithoutAddonsInput>
    create: XOR<UserCreateWithoutAddonsInput, UserUncheckedCreateWithoutAddonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddonsInput, UserUncheckedUpdateWithoutAddonsInput>
  }

  export type UserUpdateWithoutAddonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    hasFullAccess?: BoolFieldUpdateOperationsInput | boolean
    entryPurchased?: BoolFieldUpdateOperationsInput | boolean
    canUseSubscription?: BoolFieldUpdateOperationsInput | boolean
    hasAIAdvisor?: BoolFieldUpdateOperationsInput | boolean
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    assetSplit?: BoolFieldUpdateOperationsInput | boolean
    retirementImpact?: BoolFieldUpdateOperationsInput | boolean
    vaDisability?: BoolFieldUpdateOperationsInput | boolean
    housingScenario?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenarios?: ScenarioUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    hasFullAccess?: BoolFieldUpdateOperationsInput | boolean
    entryPurchased?: BoolFieldUpdateOperationsInput | boolean
    canUseSubscription?: BoolFieldUpdateOperationsInput | boolean
    hasAIAdvisor?: BoolFieldUpdateOperationsInput | boolean
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    assetSplit?: BoolFieldUpdateOperationsInput | boolean
    retirementImpact?: BoolFieldUpdateOperationsInput | boolean
    vaDisability?: BoolFieldUpdateOperationsInput | boolean
    housingScenario?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenarios?: ScenarioUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    accessType?: string
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    addons?: AddonCreateNestedManyWithoutUserInput
    scenarios?: ScenarioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    accessType?: string
    hasFullAccess?: boolean
    entryPurchased?: boolean
    canUseSubscription?: boolean
    hasAIAdvisor?: boolean
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    assetSplit?: boolean
    retirementImpact?: boolean
    vaDisability?: boolean
    housingScenario?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    addons?: AddonUncheckedCreateNestedManyWithoutUserInput
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    hasFullAccess?: BoolFieldUpdateOperationsInput | boolean
    entryPurchased?: BoolFieldUpdateOperationsInput | boolean
    canUseSubscription?: BoolFieldUpdateOperationsInput | boolean
    hasAIAdvisor?: BoolFieldUpdateOperationsInput | boolean
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    assetSplit?: BoolFieldUpdateOperationsInput | boolean
    retirementImpact?: BoolFieldUpdateOperationsInput | boolean
    vaDisability?: BoolFieldUpdateOperationsInput | boolean
    housingScenario?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addons?: AddonUpdateManyWithoutUserNestedInput
    scenarios?: ScenarioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessType?: StringFieldUpdateOperationsInput | string
    hasFullAccess?: BoolFieldUpdateOperationsInput | boolean
    entryPurchased?: BoolFieldUpdateOperationsInput | boolean
    canUseSubscription?: BoolFieldUpdateOperationsInput | boolean
    hasAIAdvisor?: BoolFieldUpdateOperationsInput | boolean
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    assetSplit?: BoolFieldUpdateOperationsInput | boolean
    retirementImpact?: BoolFieldUpdateOperationsInput | boolean
    vaDisability?: BoolFieldUpdateOperationsInput | boolean
    housingScenario?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addons?: AddonUncheckedUpdateManyWithoutUserNestedInput
    scenarios?: ScenarioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddonCreateManyUserInput = {
    id?: string
    type: $Enums.AddonType
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ScenarioCreateManyUserInput = {
    id?: string
    name?: string
    userIncome: number
    spouseIncome: number
    childrenCount: number
    custodyPercent: number
    mortgage?: number
    childcare?: number
    school?: number
    activities?: number
    utilities?: number
    insurance?: number
    otherExpenses?: number
    savings?: number | null
    retirement?: number | null
    homeEquity?: number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome: number
    monthlySupport: number
    totalExpenses: number
    disposableIncome: number
    realityScore: number
    realityLevel: string
    isAutoGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    stripeSessionId: string
    stripePaymentId?: string | null
    stripePriceId?: string | null
    amount: number
    currency?: string
    productType: $Enums.ProductType
    createdAt?: Date | string
  }

  export type AddonUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAddonTypeFieldUpdateOperationsInput | $Enums.AddonType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddonUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAddonTypeFieldUpdateOperationsInput | $Enums.AddonType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddonUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAddonTypeFieldUpdateOperationsInput | $Enums.AddonType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userIncome?: FloatFieldUpdateOperationsInput | number
    spouseIncome?: FloatFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    custodyPercent?: FloatFieldUpdateOperationsInput | number
    mortgage?: FloatFieldUpdateOperationsInput | number
    childcare?: FloatFieldUpdateOperationsInput | number
    school?: FloatFieldUpdateOperationsInput | number
    activities?: FloatFieldUpdateOperationsInput | number
    utilities?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    otherExpenses?: FloatFieldUpdateOperationsInput | number
    savings?: NullableFloatFieldUpdateOperationsInput | number | null
    retirement?: NullableFloatFieldUpdateOperationsInput | number | null
    homeEquity?: NullableFloatFieldUpdateOperationsInput | number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome?: FloatFieldUpdateOperationsInput | number
    monthlySupport?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    disposableIncome?: FloatFieldUpdateOperationsInput | number
    realityScore?: FloatFieldUpdateOperationsInput | number
    realityLevel?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userIncome?: FloatFieldUpdateOperationsInput | number
    spouseIncome?: FloatFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    custodyPercent?: FloatFieldUpdateOperationsInput | number
    mortgage?: FloatFieldUpdateOperationsInput | number
    childcare?: FloatFieldUpdateOperationsInput | number
    school?: FloatFieldUpdateOperationsInput | number
    activities?: FloatFieldUpdateOperationsInput | number
    utilities?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    otherExpenses?: FloatFieldUpdateOperationsInput | number
    savings?: NullableFloatFieldUpdateOperationsInput | number | null
    retirement?: NullableFloatFieldUpdateOperationsInput | number | null
    homeEquity?: NullableFloatFieldUpdateOperationsInput | number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome?: FloatFieldUpdateOperationsInput | number
    monthlySupport?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    disposableIncome?: FloatFieldUpdateOperationsInput | number
    realityScore?: FloatFieldUpdateOperationsInput | number
    realityLevel?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userIncome?: FloatFieldUpdateOperationsInput | number
    spouseIncome?: FloatFieldUpdateOperationsInput | number
    childrenCount?: IntFieldUpdateOperationsInput | number
    custodyPercent?: FloatFieldUpdateOperationsInput | number
    mortgage?: FloatFieldUpdateOperationsInput | number
    childcare?: FloatFieldUpdateOperationsInput | number
    school?: FloatFieldUpdateOperationsInput | number
    activities?: FloatFieldUpdateOperationsInput | number
    utilities?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    otherExpenses?: FloatFieldUpdateOperationsInput | number
    savings?: NullableFloatFieldUpdateOperationsInput | number | null
    retirement?: NullableFloatFieldUpdateOperationsInput | number | null
    homeEquity?: NullableFloatFieldUpdateOperationsInput | number | null
    assetSplit?: NullableJsonNullValueInput | InputJsonValue
    retirementImpact?: NullableJsonNullValueInput | InputJsonValue
    vaDisability?: NullableJsonNullValueInput | InputJsonValue
    housingScenario?: NullableJsonNullValueInput | InputJsonValue
    netIncome?: FloatFieldUpdateOperationsInput | number
    monthlySupport?: FloatFieldUpdateOperationsInput | number
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    disposableIncome?: FloatFieldUpdateOperationsInput | number
    realityScore?: FloatFieldUpdateOperationsInput | number
    realityLevel?: StringFieldUpdateOperationsInput | string
    isAutoGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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