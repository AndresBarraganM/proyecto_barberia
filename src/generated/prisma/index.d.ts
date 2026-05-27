
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
 * Model Bloqueo_Temporal
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Bloqueo_Temporal = $Result.DefaultSelection<Prisma.$Bloqueo_TemporalPayload>
/**
 * Model Citas
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Citas = $Result.DefaultSelection<Prisma.$CitasPayload>
/**
 * Model Estado_cita
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Estado_cita = $Result.DefaultSelection<Prisma.$Estado_citaPayload>
/**
 * Model Estado_pago
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Estado_pago = $Result.DefaultSelection<Prisma.$Estado_pagoPayload>
/**
 * Model Metodo_de_pago
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Metodo_de_pago = $Result.DefaultSelection<Prisma.$Metodo_de_pagoPayload>
/**
 * Model Pago
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Pago = $Result.DefaultSelection<Prisma.$PagoPayload>
/**
 * Model Rol
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Servicio
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Servicio = $Result.DefaultSelection<Prisma.$ServicioPayload>
/**
 * Model Tarjeta
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Tarjeta = $Result.DefaultSelection<Prisma.$TarjetaPayload>
/**
 * Model Usuario
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model token
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type token = $Result.DefaultSelection<Prisma.$tokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Bloqueo_Temporals
 * const bloqueo_Temporals = await prisma.bloqueo_Temporal.findMany()
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
   * // Fetch zero or more Bloqueo_Temporals
   * const bloqueo_Temporals = await prisma.bloqueo_Temporal.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bloqueo_Temporal`: Exposes CRUD operations for the **Bloqueo_Temporal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bloqueo_Temporals
    * const bloqueo_Temporals = await prisma.bloqueo_Temporal.findMany()
    * ```
    */
  get bloqueo_Temporal(): Prisma.Bloqueo_TemporalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.citas`: Exposes CRUD operations for the **Citas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citas
    * const citas = await prisma.citas.findMany()
    * ```
    */
  get citas(): Prisma.CitasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estado_cita`: Exposes CRUD operations for the **Estado_cita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estado_citas
    * const estado_citas = await prisma.estado_cita.findMany()
    * ```
    */
  get estado_cita(): Prisma.Estado_citaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estado_pago`: Exposes CRUD operations for the **Estado_pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estado_pagos
    * const estado_pagos = await prisma.estado_pago.findMany()
    * ```
    */
  get estado_pago(): Prisma.Estado_pagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metodo_de_pago`: Exposes CRUD operations for the **Metodo_de_pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metodo_de_pagos
    * const metodo_de_pagos = await prisma.metodo_de_pago.findMany()
    * ```
    */
  get metodo_de_pago(): Prisma.Metodo_de_pagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pago`: Exposes CRUD operations for the **Pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pago.findMany()
    * ```
    */
  get pago(): Prisma.PagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicio`: Exposes CRUD operations for the **Servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.ServicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarjeta`: Exposes CRUD operations for the **Tarjeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tarjetas
    * const tarjetas = await prisma.tarjeta.findMany()
    * ```
    */
  get tarjeta(): Prisma.TarjetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.tokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    Bloqueo_Temporal: 'Bloqueo_Temporal',
    Citas: 'Citas',
    Estado_cita: 'Estado_cita',
    Estado_pago: 'Estado_pago',
    Metodo_de_pago: 'Metodo_de_pago',
    Pago: 'Pago',
    Rol: 'Rol',
    Servicio: 'Servicio',
    Tarjeta: 'Tarjeta',
    Usuario: 'Usuario',
    token: 'token'
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
      modelProps: "bloqueo_Temporal" | "citas" | "estado_cita" | "estado_pago" | "metodo_de_pago" | "pago" | "rol" | "servicio" | "tarjeta" | "usuario" | "token"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bloqueo_Temporal: {
        payload: Prisma.$Bloqueo_TemporalPayload<ExtArgs>
        fields: Prisma.Bloqueo_TemporalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Bloqueo_TemporalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Bloqueo_TemporalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload>
          }
          findFirst: {
            args: Prisma.Bloqueo_TemporalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Bloqueo_TemporalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload>
          }
          findMany: {
            args: Prisma.Bloqueo_TemporalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload>[]
          }
          create: {
            args: Prisma.Bloqueo_TemporalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload>
          }
          createMany: {
            args: Prisma.Bloqueo_TemporalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Bloqueo_TemporalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload>[]
          }
          delete: {
            args: Prisma.Bloqueo_TemporalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload>
          }
          update: {
            args: Prisma.Bloqueo_TemporalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload>
          }
          deleteMany: {
            args: Prisma.Bloqueo_TemporalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Bloqueo_TemporalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Bloqueo_TemporalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload>[]
          }
          upsert: {
            args: Prisma.Bloqueo_TemporalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bloqueo_TemporalPayload>
          }
          aggregate: {
            args: Prisma.Bloqueo_TemporalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloqueo_Temporal>
          }
          groupBy: {
            args: Prisma.Bloqueo_TemporalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bloqueo_TemporalGroupByOutputType>[]
          }
          count: {
            args: Prisma.Bloqueo_TemporalCountArgs<ExtArgs>
            result: $Utils.Optional<Bloqueo_TemporalCountAggregateOutputType> | number
          }
        }
      }
      Citas: {
        payload: Prisma.$CitasPayload<ExtArgs>
        fields: Prisma.CitasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          findFirst: {
            args: Prisma.CitasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          findMany: {
            args: Prisma.CitasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>[]
          }
          create: {
            args: Prisma.CitasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          createMany: {
            args: Prisma.CitasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CitasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>[]
          }
          delete: {
            args: Prisma.CitasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          update: {
            args: Prisma.CitasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          deleteMany: {
            args: Prisma.CitasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CitasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>[]
          }
          upsert: {
            args: Prisma.CitasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitasPayload>
          }
          aggregate: {
            args: Prisma.CitasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCitas>
          }
          groupBy: {
            args: Prisma.CitasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitasCountArgs<ExtArgs>
            result: $Utils.Optional<CitasCountAggregateOutputType> | number
          }
        }
      }
      Estado_cita: {
        payload: Prisma.$Estado_citaPayload<ExtArgs>
        fields: Prisma.Estado_citaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Estado_citaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Estado_citaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload>
          }
          findFirst: {
            args: Prisma.Estado_citaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Estado_citaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload>
          }
          findMany: {
            args: Prisma.Estado_citaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload>[]
          }
          create: {
            args: Prisma.Estado_citaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload>
          }
          createMany: {
            args: Prisma.Estado_citaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Estado_citaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload>[]
          }
          delete: {
            args: Prisma.Estado_citaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload>
          }
          update: {
            args: Prisma.Estado_citaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload>
          }
          deleteMany: {
            args: Prisma.Estado_citaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Estado_citaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Estado_citaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload>[]
          }
          upsert: {
            args: Prisma.Estado_citaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_citaPayload>
          }
          aggregate: {
            args: Prisma.Estado_citaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado_cita>
          }
          groupBy: {
            args: Prisma.Estado_citaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Estado_citaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Estado_citaCountArgs<ExtArgs>
            result: $Utils.Optional<Estado_citaCountAggregateOutputType> | number
          }
        }
      }
      Estado_pago: {
        payload: Prisma.$Estado_pagoPayload<ExtArgs>
        fields: Prisma.Estado_pagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Estado_pagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Estado_pagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload>
          }
          findFirst: {
            args: Prisma.Estado_pagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Estado_pagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload>
          }
          findMany: {
            args: Prisma.Estado_pagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload>[]
          }
          create: {
            args: Prisma.Estado_pagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload>
          }
          createMany: {
            args: Prisma.Estado_pagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Estado_pagoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload>[]
          }
          delete: {
            args: Prisma.Estado_pagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload>
          }
          update: {
            args: Prisma.Estado_pagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload>
          }
          deleteMany: {
            args: Prisma.Estado_pagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Estado_pagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Estado_pagoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload>[]
          }
          upsert: {
            args: Prisma.Estado_pagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Estado_pagoPayload>
          }
          aggregate: {
            args: Prisma.Estado_pagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado_pago>
          }
          groupBy: {
            args: Prisma.Estado_pagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Estado_pagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Estado_pagoCountArgs<ExtArgs>
            result: $Utils.Optional<Estado_pagoCountAggregateOutputType> | number
          }
        }
      }
      Metodo_de_pago: {
        payload: Prisma.$Metodo_de_pagoPayload<ExtArgs>
        fields: Prisma.Metodo_de_pagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Metodo_de_pagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Metodo_de_pagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload>
          }
          findFirst: {
            args: Prisma.Metodo_de_pagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Metodo_de_pagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload>
          }
          findMany: {
            args: Prisma.Metodo_de_pagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload>[]
          }
          create: {
            args: Prisma.Metodo_de_pagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload>
          }
          createMany: {
            args: Prisma.Metodo_de_pagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Metodo_de_pagoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload>[]
          }
          delete: {
            args: Prisma.Metodo_de_pagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload>
          }
          update: {
            args: Prisma.Metodo_de_pagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload>
          }
          deleteMany: {
            args: Prisma.Metodo_de_pagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Metodo_de_pagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Metodo_de_pagoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload>[]
          }
          upsert: {
            args: Prisma.Metodo_de_pagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metodo_de_pagoPayload>
          }
          aggregate: {
            args: Prisma.Metodo_de_pagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetodo_de_pago>
          }
          groupBy: {
            args: Prisma.Metodo_de_pagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Metodo_de_pagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Metodo_de_pagoCountArgs<ExtArgs>
            result: $Utils.Optional<Metodo_de_pagoCountAggregateOutputType> | number
          }
        }
      }
      Pago: {
        payload: Prisma.$PagoPayload<ExtArgs>
        fields: Prisma.PagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findFirst: {
            args: Prisma.PagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findMany: {
            args: Prisma.PagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          create: {
            args: Prisma.PagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          createMany: {
            args: Prisma.PagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          delete: {
            args: Prisma.PagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          update: {
            args: Prisma.PagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          deleteMany: {
            args: Prisma.PagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          upsert: {
            args: Prisma.PagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          aggregate: {
            args: Prisma.PagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePago>
          }
          groupBy: {
            args: Prisma.PagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoCountArgs<ExtArgs>
            result: $Utils.Optional<PagoCountAggregateOutputType> | number
          }
        }
      }
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Servicio: {
        payload: Prisma.$ServicioPayload<ExtArgs>
        fields: Prisma.ServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findFirst: {
            args: Prisma.ServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findMany: {
            args: Prisma.ServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          create: {
            args: Prisma.ServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          createMany: {
            args: Prisma.ServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          delete: {
            args: Prisma.ServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          update: {
            args: Prisma.ServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          deleteMany: {
            args: Prisma.ServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          upsert: {
            args: Prisma.ServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          aggregate: {
            args: Prisma.ServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio>
          }
          groupBy: {
            args: Prisma.ServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioCountAggregateOutputType> | number
          }
        }
      }
      Tarjeta: {
        payload: Prisma.$TarjetaPayload<ExtArgs>
        fields: Prisma.TarjetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TarjetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TarjetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload>
          }
          findFirst: {
            args: Prisma.TarjetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TarjetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload>
          }
          findMany: {
            args: Prisma.TarjetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload>[]
          }
          create: {
            args: Prisma.TarjetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload>
          }
          createMany: {
            args: Prisma.TarjetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TarjetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload>[]
          }
          delete: {
            args: Prisma.TarjetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload>
          }
          update: {
            args: Prisma.TarjetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload>
          }
          deleteMany: {
            args: Prisma.TarjetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TarjetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TarjetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload>[]
          }
          upsert: {
            args: Prisma.TarjetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaPayload>
          }
          aggregate: {
            args: Prisma.TarjetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarjeta>
          }
          groupBy: {
            args: Prisma.TarjetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarjetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TarjetaCountArgs<ExtArgs>
            result: $Utils.Optional<TarjetaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      token: {
        payload: Prisma.$tokenPayload<ExtArgs>
        fields: Prisma.tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          findFirst: {
            args: Prisma.tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          findMany: {
            args: Prisma.tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>[]
          }
          create: {
            args: Prisma.tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          createMany: {
            args: Prisma.tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>[]
          }
          delete: {
            args: Prisma.tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          update: {
            args: Prisma.tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          deleteMany: {
            args: Prisma.tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>[]
          }
          upsert: {
            args: Prisma.tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
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
    bloqueo_Temporal?: Bloqueo_TemporalOmit
    citas?: CitasOmit
    estado_cita?: Estado_citaOmit
    estado_pago?: Estado_pagoOmit
    metodo_de_pago?: Metodo_de_pagoOmit
    pago?: PagoOmit
    rol?: RolOmit
    servicio?: ServicioOmit
    tarjeta?: TarjetaOmit
    usuario?: UsuarioOmit
    token?: tokenOmit
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
   * Count Type CitasCountOutputType
   */

  export type CitasCountOutputType = {
    Pago: number
  }

  export type CitasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pago?: boolean | CitasCountOutputTypeCountPagoArgs
  }

  // Custom InputTypes
  /**
   * CitasCountOutputType without action
   */
  export type CitasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitasCountOutputType
     */
    select?: CitasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CitasCountOutputType without action
   */
  export type CitasCountOutputTypeCountPagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }


  /**
   * Count Type Estado_citaCountOutputType
   */

  export type Estado_citaCountOutputType = {
    Citas_Citas_Estado_citaToEstado_cita: number
  }

  export type Estado_citaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Citas_Citas_Estado_citaToEstado_cita?: boolean | Estado_citaCountOutputTypeCountCitas_Citas_Estado_citaToEstado_citaArgs
  }

  // Custom InputTypes
  /**
   * Estado_citaCountOutputType without action
   */
  export type Estado_citaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_citaCountOutputType
     */
    select?: Estado_citaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Estado_citaCountOutputType without action
   */
  export type Estado_citaCountOutputTypeCountCitas_Citas_Estado_citaToEstado_citaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitasWhereInput
  }


  /**
   * Count Type Estado_pagoCountOutputType
   */

  export type Estado_pagoCountOutputType = {
    Pago: number
  }

  export type Estado_pagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pago?: boolean | Estado_pagoCountOutputTypeCountPagoArgs
  }

  // Custom InputTypes
  /**
   * Estado_pagoCountOutputType without action
   */
  export type Estado_pagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pagoCountOutputType
     */
    select?: Estado_pagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Estado_pagoCountOutputType without action
   */
  export type Estado_pagoCountOutputTypeCountPagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }


  /**
   * Count Type Metodo_de_pagoCountOutputType
   */

  export type Metodo_de_pagoCountOutputType = {
    Pago: number
  }

  export type Metodo_de_pagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pago?: boolean | Metodo_de_pagoCountOutputTypeCountPagoArgs
  }

  // Custom InputTypes
  /**
   * Metodo_de_pagoCountOutputType without action
   */
  export type Metodo_de_pagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pagoCountOutputType
     */
    select?: Metodo_de_pagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Metodo_de_pagoCountOutputType without action
   */
  export type Metodo_de_pagoCountOutputTypeCountPagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    Usuario_Usuario_RolToRol: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario_Usuario_RolToRol?: boolean | RolCountOutputTypeCountUsuario_Usuario_RolToRolArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuario_Usuario_RolToRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type ServicioCountOutputType
   */

  export type ServicioCountOutputType = {
    Citas: number
  }

  export type ServicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Citas?: boolean | ServicioCountOutputTypeCountCitasArgs
  }

  // Custom InputTypes
  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioCountOutputType
     */
    select?: ServicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitasWhereInput
  }


  /**
   * Count Type TarjetaCountOutputType
   */

  export type TarjetaCountOutputType = {
    Pago: number
  }

  export type TarjetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pago?: boolean | TarjetaCountOutputTypeCountPagoArgs
  }

  // Custom InputTypes
  /**
   * TarjetaCountOutputType without action
   */
  export type TarjetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCountOutputType
     */
    select?: TarjetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TarjetaCountOutputType without action
   */
  export type TarjetaCountOutputTypeCountPagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario: number
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario: number
    Citas_Citas_Id_clienteToUsuario: number
    Citas_Citas_Id_estilistaToUsuario: number
    Tarjeta: number
    token: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: boolean | UsuarioCountOutputTypeCountBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioArgs
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: boolean | UsuarioCountOutputTypeCountBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioArgs
    Citas_Citas_Id_clienteToUsuario?: boolean | UsuarioCountOutputTypeCountCitas_Citas_Id_clienteToUsuarioArgs
    Citas_Citas_Id_estilistaToUsuario?: boolean | UsuarioCountOutputTypeCountCitas_Citas_Id_estilistaToUsuarioArgs
    Tarjeta?: boolean | UsuarioCountOutputTypeCountTarjetaArgs
    token?: boolean | UsuarioCountOutputTypeCountTokenArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bloqueo_TemporalWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bloqueo_TemporalWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCitas_Citas_Id_clienteToUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitasWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCitas_Citas_Id_estilistaToUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitasWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTarjetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarjetaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bloqueo_Temporal
   */

  export type AggregateBloqueo_Temporal = {
    _count: Bloqueo_TemporalCountAggregateOutputType | null
    _avg: Bloqueo_TemporalAvgAggregateOutputType | null
    _sum: Bloqueo_TemporalSumAggregateOutputType | null
    _min: Bloqueo_TemporalMinAggregateOutputType | null
    _max: Bloqueo_TemporalMaxAggregateOutputType | null
  }

  export type Bloqueo_TemporalAvgAggregateOutputType = {
    Id_bloqueo: number | null
  }

  export type Bloqueo_TemporalSumAggregateOutputType = {
    Id_bloqueo: number | null
  }

  export type Bloqueo_TemporalMinAggregateOutputType = {
    Id_bloqueo: number | null
    Fecha_cita: Date | null
    Hora_inicio: Date | null
    Expira_en: Date | null
    Id_cliente: string | null
    Id_estilista: string | null
  }

  export type Bloqueo_TemporalMaxAggregateOutputType = {
    Id_bloqueo: number | null
    Fecha_cita: Date | null
    Hora_inicio: Date | null
    Expira_en: Date | null
    Id_cliente: string | null
    Id_estilista: string | null
  }

  export type Bloqueo_TemporalCountAggregateOutputType = {
    Id_bloqueo: number
    Fecha_cita: number
    Hora_inicio: number
    Expira_en: number
    Id_cliente: number
    Id_estilista: number
    _all: number
  }


  export type Bloqueo_TemporalAvgAggregateInputType = {
    Id_bloqueo?: true
  }

  export type Bloqueo_TemporalSumAggregateInputType = {
    Id_bloqueo?: true
  }

  export type Bloqueo_TemporalMinAggregateInputType = {
    Id_bloqueo?: true
    Fecha_cita?: true
    Hora_inicio?: true
    Expira_en?: true
    Id_cliente?: true
    Id_estilista?: true
  }

  export type Bloqueo_TemporalMaxAggregateInputType = {
    Id_bloqueo?: true
    Fecha_cita?: true
    Hora_inicio?: true
    Expira_en?: true
    Id_cliente?: true
    Id_estilista?: true
  }

  export type Bloqueo_TemporalCountAggregateInputType = {
    Id_bloqueo?: true
    Fecha_cita?: true
    Hora_inicio?: true
    Expira_en?: true
    Id_cliente?: true
    Id_estilista?: true
    _all?: true
  }

  export type Bloqueo_TemporalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bloqueo_Temporal to aggregate.
     */
    where?: Bloqueo_TemporalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloqueo_Temporals to fetch.
     */
    orderBy?: Bloqueo_TemporalOrderByWithRelationInput | Bloqueo_TemporalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Bloqueo_TemporalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloqueo_Temporals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloqueo_Temporals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bloqueo_Temporals
    **/
    _count?: true | Bloqueo_TemporalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bloqueo_TemporalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bloqueo_TemporalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bloqueo_TemporalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bloqueo_TemporalMaxAggregateInputType
  }

  export type GetBloqueo_TemporalAggregateType<T extends Bloqueo_TemporalAggregateArgs> = {
        [P in keyof T & keyof AggregateBloqueo_Temporal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloqueo_Temporal[P]>
      : GetScalarType<T[P], AggregateBloqueo_Temporal[P]>
  }




  export type Bloqueo_TemporalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bloqueo_TemporalWhereInput
    orderBy?: Bloqueo_TemporalOrderByWithAggregationInput | Bloqueo_TemporalOrderByWithAggregationInput[]
    by: Bloqueo_TemporalScalarFieldEnum[] | Bloqueo_TemporalScalarFieldEnum
    having?: Bloqueo_TemporalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bloqueo_TemporalCountAggregateInputType | true
    _avg?: Bloqueo_TemporalAvgAggregateInputType
    _sum?: Bloqueo_TemporalSumAggregateInputType
    _min?: Bloqueo_TemporalMinAggregateInputType
    _max?: Bloqueo_TemporalMaxAggregateInputType
  }

  export type Bloqueo_TemporalGroupByOutputType = {
    Id_bloqueo: number
    Fecha_cita: Date
    Hora_inicio: Date
    Expira_en: Date | null
    Id_cliente: string
    Id_estilista: string
    _count: Bloqueo_TemporalCountAggregateOutputType | null
    _avg: Bloqueo_TemporalAvgAggregateOutputType | null
    _sum: Bloqueo_TemporalSumAggregateOutputType | null
    _min: Bloqueo_TemporalMinAggregateOutputType | null
    _max: Bloqueo_TemporalMaxAggregateOutputType | null
  }

  type GetBloqueo_TemporalGroupByPayload<T extends Bloqueo_TemporalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bloqueo_TemporalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bloqueo_TemporalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bloqueo_TemporalGroupByOutputType[P]>
            : GetScalarType<T[P], Bloqueo_TemporalGroupByOutputType[P]>
        }
      >
    >


  export type Bloqueo_TemporalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_bloqueo?: boolean
    Fecha_cita?: boolean
    Hora_inicio?: boolean
    Expira_en?: boolean
    Id_cliente?: boolean
    Id_estilista?: boolean
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloqueo_Temporal"]>

  export type Bloqueo_TemporalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_bloqueo?: boolean
    Fecha_cita?: boolean
    Hora_inicio?: boolean
    Expira_en?: boolean
    Id_cliente?: boolean
    Id_estilista?: boolean
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloqueo_Temporal"]>

  export type Bloqueo_TemporalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_bloqueo?: boolean
    Fecha_cita?: boolean
    Hora_inicio?: boolean
    Expira_en?: boolean
    Id_cliente?: boolean
    Id_estilista?: boolean
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloqueo_Temporal"]>

  export type Bloqueo_TemporalSelectScalar = {
    Id_bloqueo?: boolean
    Fecha_cita?: boolean
    Hora_inicio?: boolean
    Expira_en?: boolean
    Id_cliente?: boolean
    Id_estilista?: boolean
  }

  export type Bloqueo_TemporalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_bloqueo" | "Fecha_cita" | "Hora_inicio" | "Expira_en" | "Id_cliente" | "Id_estilista", ExtArgs["result"]["bloqueo_Temporal"]>
  export type Bloqueo_TemporalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type Bloqueo_TemporalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type Bloqueo_TemporalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $Bloqueo_TemporalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bloqueo_Temporal"
    objects: {
      Usuario_Bloqueo_Temporal_Id_clienteToUsuario: Prisma.$UsuarioPayload<ExtArgs>
      Usuario_Bloqueo_Temporal_Id_estilistaToUsuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_bloqueo: number
      Fecha_cita: Date
      Hora_inicio: Date
      Expira_en: Date | null
      Id_cliente: string
      Id_estilista: string
    }, ExtArgs["result"]["bloqueo_Temporal"]>
    composites: {}
  }

  type Bloqueo_TemporalGetPayload<S extends boolean | null | undefined | Bloqueo_TemporalDefaultArgs> = $Result.GetResult<Prisma.$Bloqueo_TemporalPayload, S>

  type Bloqueo_TemporalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Bloqueo_TemporalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bloqueo_TemporalCountAggregateInputType | true
    }

  export interface Bloqueo_TemporalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bloqueo_Temporal'], meta: { name: 'Bloqueo_Temporal' } }
    /**
     * Find zero or one Bloqueo_Temporal that matches the filter.
     * @param {Bloqueo_TemporalFindUniqueArgs} args - Arguments to find a Bloqueo_Temporal
     * @example
     * // Get one Bloqueo_Temporal
     * const bloqueo_Temporal = await prisma.bloqueo_Temporal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Bloqueo_TemporalFindUniqueArgs>(args: SelectSubset<T, Bloqueo_TemporalFindUniqueArgs<ExtArgs>>): Prisma__Bloqueo_TemporalClient<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bloqueo_Temporal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Bloqueo_TemporalFindUniqueOrThrowArgs} args - Arguments to find a Bloqueo_Temporal
     * @example
     * // Get one Bloqueo_Temporal
     * const bloqueo_Temporal = await prisma.bloqueo_Temporal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Bloqueo_TemporalFindUniqueOrThrowArgs>(args: SelectSubset<T, Bloqueo_TemporalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Bloqueo_TemporalClient<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloqueo_Temporal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bloqueo_TemporalFindFirstArgs} args - Arguments to find a Bloqueo_Temporal
     * @example
     * // Get one Bloqueo_Temporal
     * const bloqueo_Temporal = await prisma.bloqueo_Temporal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Bloqueo_TemporalFindFirstArgs>(args?: SelectSubset<T, Bloqueo_TemporalFindFirstArgs<ExtArgs>>): Prisma__Bloqueo_TemporalClient<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloqueo_Temporal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bloqueo_TemporalFindFirstOrThrowArgs} args - Arguments to find a Bloqueo_Temporal
     * @example
     * // Get one Bloqueo_Temporal
     * const bloqueo_Temporal = await prisma.bloqueo_Temporal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Bloqueo_TemporalFindFirstOrThrowArgs>(args?: SelectSubset<T, Bloqueo_TemporalFindFirstOrThrowArgs<ExtArgs>>): Prisma__Bloqueo_TemporalClient<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bloqueo_Temporals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bloqueo_TemporalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bloqueo_Temporals
     * const bloqueo_Temporals = await prisma.bloqueo_Temporal.findMany()
     * 
     * // Get first 10 Bloqueo_Temporals
     * const bloqueo_Temporals = await prisma.bloqueo_Temporal.findMany({ take: 10 })
     * 
     * // Only select the `Id_bloqueo`
     * const bloqueo_TemporalWithId_bloqueoOnly = await prisma.bloqueo_Temporal.findMany({ select: { Id_bloqueo: true } })
     * 
     */
    findMany<T extends Bloqueo_TemporalFindManyArgs>(args?: SelectSubset<T, Bloqueo_TemporalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bloqueo_Temporal.
     * @param {Bloqueo_TemporalCreateArgs} args - Arguments to create a Bloqueo_Temporal.
     * @example
     * // Create one Bloqueo_Temporal
     * const Bloqueo_Temporal = await prisma.bloqueo_Temporal.create({
     *   data: {
     *     // ... data to create a Bloqueo_Temporal
     *   }
     * })
     * 
     */
    create<T extends Bloqueo_TemporalCreateArgs>(args: SelectSubset<T, Bloqueo_TemporalCreateArgs<ExtArgs>>): Prisma__Bloqueo_TemporalClient<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bloqueo_Temporals.
     * @param {Bloqueo_TemporalCreateManyArgs} args - Arguments to create many Bloqueo_Temporals.
     * @example
     * // Create many Bloqueo_Temporals
     * const bloqueo_Temporal = await prisma.bloqueo_Temporal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Bloqueo_TemporalCreateManyArgs>(args?: SelectSubset<T, Bloqueo_TemporalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bloqueo_Temporals and returns the data saved in the database.
     * @param {Bloqueo_TemporalCreateManyAndReturnArgs} args - Arguments to create many Bloqueo_Temporals.
     * @example
     * // Create many Bloqueo_Temporals
     * const bloqueo_Temporal = await prisma.bloqueo_Temporal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bloqueo_Temporals and only return the `Id_bloqueo`
     * const bloqueo_TemporalWithId_bloqueoOnly = await prisma.bloqueo_Temporal.createManyAndReturn({
     *   select: { Id_bloqueo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Bloqueo_TemporalCreateManyAndReturnArgs>(args?: SelectSubset<T, Bloqueo_TemporalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bloqueo_Temporal.
     * @param {Bloqueo_TemporalDeleteArgs} args - Arguments to delete one Bloqueo_Temporal.
     * @example
     * // Delete one Bloqueo_Temporal
     * const Bloqueo_Temporal = await prisma.bloqueo_Temporal.delete({
     *   where: {
     *     // ... filter to delete one Bloqueo_Temporal
     *   }
     * })
     * 
     */
    delete<T extends Bloqueo_TemporalDeleteArgs>(args: SelectSubset<T, Bloqueo_TemporalDeleteArgs<ExtArgs>>): Prisma__Bloqueo_TemporalClient<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bloqueo_Temporal.
     * @param {Bloqueo_TemporalUpdateArgs} args - Arguments to update one Bloqueo_Temporal.
     * @example
     * // Update one Bloqueo_Temporal
     * const bloqueo_Temporal = await prisma.bloqueo_Temporal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Bloqueo_TemporalUpdateArgs>(args: SelectSubset<T, Bloqueo_TemporalUpdateArgs<ExtArgs>>): Prisma__Bloqueo_TemporalClient<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bloqueo_Temporals.
     * @param {Bloqueo_TemporalDeleteManyArgs} args - Arguments to filter Bloqueo_Temporals to delete.
     * @example
     * // Delete a few Bloqueo_Temporals
     * const { count } = await prisma.bloqueo_Temporal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Bloqueo_TemporalDeleteManyArgs>(args?: SelectSubset<T, Bloqueo_TemporalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloqueo_Temporals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bloqueo_TemporalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bloqueo_Temporals
     * const bloqueo_Temporal = await prisma.bloqueo_Temporal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Bloqueo_TemporalUpdateManyArgs>(args: SelectSubset<T, Bloqueo_TemporalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloqueo_Temporals and returns the data updated in the database.
     * @param {Bloqueo_TemporalUpdateManyAndReturnArgs} args - Arguments to update many Bloqueo_Temporals.
     * @example
     * // Update many Bloqueo_Temporals
     * const bloqueo_Temporal = await prisma.bloqueo_Temporal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bloqueo_Temporals and only return the `Id_bloqueo`
     * const bloqueo_TemporalWithId_bloqueoOnly = await prisma.bloqueo_Temporal.updateManyAndReturn({
     *   select: { Id_bloqueo: true },
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
    updateManyAndReturn<T extends Bloqueo_TemporalUpdateManyAndReturnArgs>(args: SelectSubset<T, Bloqueo_TemporalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bloqueo_Temporal.
     * @param {Bloqueo_TemporalUpsertArgs} args - Arguments to update or create a Bloqueo_Temporal.
     * @example
     * // Update or create a Bloqueo_Temporal
     * const bloqueo_Temporal = await prisma.bloqueo_Temporal.upsert({
     *   create: {
     *     // ... data to create a Bloqueo_Temporal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bloqueo_Temporal we want to update
     *   }
     * })
     */
    upsert<T extends Bloqueo_TemporalUpsertArgs>(args: SelectSubset<T, Bloqueo_TemporalUpsertArgs<ExtArgs>>): Prisma__Bloqueo_TemporalClient<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bloqueo_Temporals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bloqueo_TemporalCountArgs} args - Arguments to filter Bloqueo_Temporals to count.
     * @example
     * // Count the number of Bloqueo_Temporals
     * const count = await prisma.bloqueo_Temporal.count({
     *   where: {
     *     // ... the filter for the Bloqueo_Temporals we want to count
     *   }
     * })
    **/
    count<T extends Bloqueo_TemporalCountArgs>(
      args?: Subset<T, Bloqueo_TemporalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bloqueo_TemporalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bloqueo_Temporal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bloqueo_TemporalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bloqueo_TemporalAggregateArgs>(args: Subset<T, Bloqueo_TemporalAggregateArgs>): Prisma.PrismaPromise<GetBloqueo_TemporalAggregateType<T>>

    /**
     * Group by Bloqueo_Temporal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bloqueo_TemporalGroupByArgs} args - Group by arguments.
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
      T extends Bloqueo_TemporalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Bloqueo_TemporalGroupByArgs['orderBy'] }
        : { orderBy?: Bloqueo_TemporalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Bloqueo_TemporalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloqueo_TemporalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bloqueo_Temporal model
   */
  readonly fields: Bloqueo_TemporalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bloqueo_Temporal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Bloqueo_TemporalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bloqueo_Temporal model
   */
  interface Bloqueo_TemporalFieldRefs {
    readonly Id_bloqueo: FieldRef<"Bloqueo_Temporal", 'Int'>
    readonly Fecha_cita: FieldRef<"Bloqueo_Temporal", 'DateTime'>
    readonly Hora_inicio: FieldRef<"Bloqueo_Temporal", 'DateTime'>
    readonly Expira_en: FieldRef<"Bloqueo_Temporal", 'DateTime'>
    readonly Id_cliente: FieldRef<"Bloqueo_Temporal", 'String'>
    readonly Id_estilista: FieldRef<"Bloqueo_Temporal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bloqueo_Temporal findUnique
   */
  export type Bloqueo_TemporalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    /**
     * Filter, which Bloqueo_Temporal to fetch.
     */
    where: Bloqueo_TemporalWhereUniqueInput
  }

  /**
   * Bloqueo_Temporal findUniqueOrThrow
   */
  export type Bloqueo_TemporalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    /**
     * Filter, which Bloqueo_Temporal to fetch.
     */
    where: Bloqueo_TemporalWhereUniqueInput
  }

  /**
   * Bloqueo_Temporal findFirst
   */
  export type Bloqueo_TemporalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    /**
     * Filter, which Bloqueo_Temporal to fetch.
     */
    where?: Bloqueo_TemporalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloqueo_Temporals to fetch.
     */
    orderBy?: Bloqueo_TemporalOrderByWithRelationInput | Bloqueo_TemporalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bloqueo_Temporals.
     */
    cursor?: Bloqueo_TemporalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloqueo_Temporals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloqueo_Temporals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bloqueo_Temporals.
     */
    distinct?: Bloqueo_TemporalScalarFieldEnum | Bloqueo_TemporalScalarFieldEnum[]
  }

  /**
   * Bloqueo_Temporal findFirstOrThrow
   */
  export type Bloqueo_TemporalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    /**
     * Filter, which Bloqueo_Temporal to fetch.
     */
    where?: Bloqueo_TemporalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloqueo_Temporals to fetch.
     */
    orderBy?: Bloqueo_TemporalOrderByWithRelationInput | Bloqueo_TemporalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bloqueo_Temporals.
     */
    cursor?: Bloqueo_TemporalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloqueo_Temporals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloqueo_Temporals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bloqueo_Temporals.
     */
    distinct?: Bloqueo_TemporalScalarFieldEnum | Bloqueo_TemporalScalarFieldEnum[]
  }

  /**
   * Bloqueo_Temporal findMany
   */
  export type Bloqueo_TemporalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    /**
     * Filter, which Bloqueo_Temporals to fetch.
     */
    where?: Bloqueo_TemporalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloqueo_Temporals to fetch.
     */
    orderBy?: Bloqueo_TemporalOrderByWithRelationInput | Bloqueo_TemporalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bloqueo_Temporals.
     */
    cursor?: Bloqueo_TemporalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloqueo_Temporals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloqueo_Temporals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bloqueo_Temporals.
     */
    distinct?: Bloqueo_TemporalScalarFieldEnum | Bloqueo_TemporalScalarFieldEnum[]
  }

  /**
   * Bloqueo_Temporal create
   */
  export type Bloqueo_TemporalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    /**
     * The data needed to create a Bloqueo_Temporal.
     */
    data: XOR<Bloqueo_TemporalCreateInput, Bloqueo_TemporalUncheckedCreateInput>
  }

  /**
   * Bloqueo_Temporal createMany
   */
  export type Bloqueo_TemporalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bloqueo_Temporals.
     */
    data: Bloqueo_TemporalCreateManyInput | Bloqueo_TemporalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bloqueo_Temporal createManyAndReturn
   */
  export type Bloqueo_TemporalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * The data used to create many Bloqueo_Temporals.
     */
    data: Bloqueo_TemporalCreateManyInput | Bloqueo_TemporalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bloqueo_Temporal update
   */
  export type Bloqueo_TemporalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    /**
     * The data needed to update a Bloqueo_Temporal.
     */
    data: XOR<Bloqueo_TemporalUpdateInput, Bloqueo_TemporalUncheckedUpdateInput>
    /**
     * Choose, which Bloqueo_Temporal to update.
     */
    where: Bloqueo_TemporalWhereUniqueInput
  }

  /**
   * Bloqueo_Temporal updateMany
   */
  export type Bloqueo_TemporalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bloqueo_Temporals.
     */
    data: XOR<Bloqueo_TemporalUpdateManyMutationInput, Bloqueo_TemporalUncheckedUpdateManyInput>
    /**
     * Filter which Bloqueo_Temporals to update
     */
    where?: Bloqueo_TemporalWhereInput
    /**
     * Limit how many Bloqueo_Temporals to update.
     */
    limit?: number
  }

  /**
   * Bloqueo_Temporal updateManyAndReturn
   */
  export type Bloqueo_TemporalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * The data used to update Bloqueo_Temporals.
     */
    data: XOR<Bloqueo_TemporalUpdateManyMutationInput, Bloqueo_TemporalUncheckedUpdateManyInput>
    /**
     * Filter which Bloqueo_Temporals to update
     */
    where?: Bloqueo_TemporalWhereInput
    /**
     * Limit how many Bloqueo_Temporals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bloqueo_Temporal upsert
   */
  export type Bloqueo_TemporalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    /**
     * The filter to search for the Bloqueo_Temporal to update in case it exists.
     */
    where: Bloqueo_TemporalWhereUniqueInput
    /**
     * In case the Bloqueo_Temporal found by the `where` argument doesn't exist, create a new Bloqueo_Temporal with this data.
     */
    create: XOR<Bloqueo_TemporalCreateInput, Bloqueo_TemporalUncheckedCreateInput>
    /**
     * In case the Bloqueo_Temporal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Bloqueo_TemporalUpdateInput, Bloqueo_TemporalUncheckedUpdateInput>
  }

  /**
   * Bloqueo_Temporal delete
   */
  export type Bloqueo_TemporalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    /**
     * Filter which Bloqueo_Temporal to delete.
     */
    where: Bloqueo_TemporalWhereUniqueInput
  }

  /**
   * Bloqueo_Temporal deleteMany
   */
  export type Bloqueo_TemporalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bloqueo_Temporals to delete
     */
    where?: Bloqueo_TemporalWhereInput
    /**
     * Limit how many Bloqueo_Temporals to delete.
     */
    limit?: number
  }

  /**
   * Bloqueo_Temporal without action
   */
  export type Bloqueo_TemporalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
  }


  /**
   * Model Citas
   */

  export type AggregateCitas = {
    _count: CitasCountAggregateOutputType | null
    _avg: CitasAvgAggregateOutputType | null
    _sum: CitasSumAggregateOutputType | null
    _min: CitasMinAggregateOutputType | null
    _max: CitasMaxAggregateOutputType | null
  }

  export type CitasAvgAggregateOutputType = {
    Id_cita: number | null
    Id_servicio: number | null
    Estado_cita: number | null
  }

  export type CitasSumAggregateOutputType = {
    Id_cita: number | null
    Id_servicio: number | null
    Estado_cita: number | null
  }

  export type CitasMinAggregateOutputType = {
    Id_cita: number | null
    Id_servicio: number | null
    Fecha_cita: Date | null
    Hora_inicio: Date | null
    Estado_cita: number | null
    Id_cliente: string | null
    Id_estilista: string | null
  }

  export type CitasMaxAggregateOutputType = {
    Id_cita: number | null
    Id_servicio: number | null
    Fecha_cita: Date | null
    Hora_inicio: Date | null
    Estado_cita: number | null
    Id_cliente: string | null
    Id_estilista: string | null
  }

  export type CitasCountAggregateOutputType = {
    Id_cita: number
    Id_servicio: number
    Fecha_cita: number
    Hora_inicio: number
    Estado_cita: number
    Id_cliente: number
    Id_estilista: number
    _all: number
  }


  export type CitasAvgAggregateInputType = {
    Id_cita?: true
    Id_servicio?: true
    Estado_cita?: true
  }

  export type CitasSumAggregateInputType = {
    Id_cita?: true
    Id_servicio?: true
    Estado_cita?: true
  }

  export type CitasMinAggregateInputType = {
    Id_cita?: true
    Id_servicio?: true
    Fecha_cita?: true
    Hora_inicio?: true
    Estado_cita?: true
    Id_cliente?: true
    Id_estilista?: true
  }

  export type CitasMaxAggregateInputType = {
    Id_cita?: true
    Id_servicio?: true
    Fecha_cita?: true
    Hora_inicio?: true
    Estado_cita?: true
    Id_cliente?: true
    Id_estilista?: true
  }

  export type CitasCountAggregateInputType = {
    Id_cita?: true
    Id_servicio?: true
    Fecha_cita?: true
    Hora_inicio?: true
    Estado_cita?: true
    Id_cliente?: true
    Id_estilista?: true
    _all?: true
  }

  export type CitasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to aggregate.
     */
    where?: CitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Citas
    **/
    _count?: true | CitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitasMaxAggregateInputType
  }

  export type GetCitasAggregateType<T extends CitasAggregateArgs> = {
        [P in keyof T & keyof AggregateCitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCitas[P]>
      : GetScalarType<T[P], AggregateCitas[P]>
  }




  export type CitasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitasWhereInput
    orderBy?: CitasOrderByWithAggregationInput | CitasOrderByWithAggregationInput[]
    by: CitasScalarFieldEnum[] | CitasScalarFieldEnum
    having?: CitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitasCountAggregateInputType | true
    _avg?: CitasAvgAggregateInputType
    _sum?: CitasSumAggregateInputType
    _min?: CitasMinAggregateInputType
    _max?: CitasMaxAggregateInputType
  }

  export type CitasGroupByOutputType = {
    Id_cita: number
    Id_servicio: number | null
    Fecha_cita: Date
    Hora_inicio: Date
    Estado_cita: number | null
    Id_cliente: string
    Id_estilista: string
    _count: CitasCountAggregateOutputType | null
    _avg: CitasAvgAggregateOutputType | null
    _sum: CitasSumAggregateOutputType | null
    _min: CitasMinAggregateOutputType | null
    _max: CitasMaxAggregateOutputType | null
  }

  type GetCitasGroupByPayload<T extends CitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitasGroupByOutputType[P]>
            : GetScalarType<T[P], CitasGroupByOutputType[P]>
        }
      >
    >


  export type CitasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_cita?: boolean
    Id_servicio?: boolean
    Fecha_cita?: boolean
    Hora_inicio?: boolean
    Estado_cita?: boolean
    Id_cliente?: boolean
    Id_estilista?: boolean
    Estado_cita_Citas_Estado_citaToEstado_cita?: boolean | Citas$Estado_cita_Citas_Estado_citaToEstado_citaArgs<ExtArgs>
    Usuario_Citas_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Citas_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Servicio?: boolean | Citas$ServicioArgs<ExtArgs>
    Pago?: boolean | Citas$PagoArgs<ExtArgs>
    _count?: boolean | CitasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citas"]>

  export type CitasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_cita?: boolean
    Id_servicio?: boolean
    Fecha_cita?: boolean
    Hora_inicio?: boolean
    Estado_cita?: boolean
    Id_cliente?: boolean
    Id_estilista?: boolean
    Estado_cita_Citas_Estado_citaToEstado_cita?: boolean | Citas$Estado_cita_Citas_Estado_citaToEstado_citaArgs<ExtArgs>
    Usuario_Citas_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Citas_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Servicio?: boolean | Citas$ServicioArgs<ExtArgs>
  }, ExtArgs["result"]["citas"]>

  export type CitasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_cita?: boolean
    Id_servicio?: boolean
    Fecha_cita?: boolean
    Hora_inicio?: boolean
    Estado_cita?: boolean
    Id_cliente?: boolean
    Id_estilista?: boolean
    Estado_cita_Citas_Estado_citaToEstado_cita?: boolean | Citas$Estado_cita_Citas_Estado_citaToEstado_citaArgs<ExtArgs>
    Usuario_Citas_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Citas_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Servicio?: boolean | Citas$ServicioArgs<ExtArgs>
  }, ExtArgs["result"]["citas"]>

  export type CitasSelectScalar = {
    Id_cita?: boolean
    Id_servicio?: boolean
    Fecha_cita?: boolean
    Hora_inicio?: boolean
    Estado_cita?: boolean
    Id_cliente?: boolean
    Id_estilista?: boolean
  }

  export type CitasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_cita" | "Id_servicio" | "Fecha_cita" | "Hora_inicio" | "Estado_cita" | "Id_cliente" | "Id_estilista", ExtArgs["result"]["citas"]>
  export type CitasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado_cita_Citas_Estado_citaToEstado_cita?: boolean | Citas$Estado_cita_Citas_Estado_citaToEstado_citaArgs<ExtArgs>
    Usuario_Citas_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Citas_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Servicio?: boolean | Citas$ServicioArgs<ExtArgs>
    Pago?: boolean | Citas$PagoArgs<ExtArgs>
    _count?: boolean | CitasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CitasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado_cita_Citas_Estado_citaToEstado_cita?: boolean | Citas$Estado_cita_Citas_Estado_citaToEstado_citaArgs<ExtArgs>
    Usuario_Citas_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Citas_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Servicio?: boolean | Citas$ServicioArgs<ExtArgs>
  }
  export type CitasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado_cita_Citas_Estado_citaToEstado_cita?: boolean | Citas$Estado_cita_Citas_Estado_citaToEstado_citaArgs<ExtArgs>
    Usuario_Citas_Id_clienteToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Usuario_Citas_Id_estilistaToUsuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Servicio?: boolean | Citas$ServicioArgs<ExtArgs>
  }

  export type $CitasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Citas"
    objects: {
      Estado_cita_Citas_Estado_citaToEstado_cita: Prisma.$Estado_citaPayload<ExtArgs> | null
      Usuario_Citas_Id_clienteToUsuario: Prisma.$UsuarioPayload<ExtArgs>
      Usuario_Citas_Id_estilistaToUsuario: Prisma.$UsuarioPayload<ExtArgs>
      Servicio: Prisma.$ServicioPayload<ExtArgs> | null
      Pago: Prisma.$PagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_cita: number
      Id_servicio: number | null
      Fecha_cita: Date
      Hora_inicio: Date
      Estado_cita: number | null
      Id_cliente: string
      Id_estilista: string
    }, ExtArgs["result"]["citas"]>
    composites: {}
  }

  type CitasGetPayload<S extends boolean | null | undefined | CitasDefaultArgs> = $Result.GetResult<Prisma.$CitasPayload, S>

  type CitasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitasCountAggregateInputType | true
    }

  export interface CitasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Citas'], meta: { name: 'Citas' } }
    /**
     * Find zero or one Citas that matches the filter.
     * @param {CitasFindUniqueArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitasFindUniqueArgs>(args: SelectSubset<T, CitasFindUniqueArgs<ExtArgs>>): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Citas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitasFindUniqueOrThrowArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitasFindUniqueOrThrowArgs>(args: SelectSubset<T, CitasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasFindFirstArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitasFindFirstArgs>(args?: SelectSubset<T, CitasFindFirstArgs<ExtArgs>>): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Citas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasFindFirstOrThrowArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitasFindFirstOrThrowArgs>(args?: SelectSubset<T, CitasFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citas
     * const citas = await prisma.citas.findMany()
     * 
     * // Get first 10 Citas
     * const citas = await prisma.citas.findMany({ take: 10 })
     * 
     * // Only select the `Id_cita`
     * const citasWithId_citaOnly = await prisma.citas.findMany({ select: { Id_cita: true } })
     * 
     */
    findMany<T extends CitasFindManyArgs>(args?: SelectSubset<T, CitasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Citas.
     * @param {CitasCreateArgs} args - Arguments to create a Citas.
     * @example
     * // Create one Citas
     * const Citas = await prisma.citas.create({
     *   data: {
     *     // ... data to create a Citas
     *   }
     * })
     * 
     */
    create<T extends CitasCreateArgs>(args: SelectSubset<T, CitasCreateArgs<ExtArgs>>): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Citas.
     * @param {CitasCreateManyArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const citas = await prisma.citas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitasCreateManyArgs>(args?: SelectSubset<T, CitasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Citas and returns the data saved in the database.
     * @param {CitasCreateManyAndReturnArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const citas = await prisma.citas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Citas and only return the `Id_cita`
     * const citasWithId_citaOnly = await prisma.citas.createManyAndReturn({
     *   select: { Id_cita: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CitasCreateManyAndReturnArgs>(args?: SelectSubset<T, CitasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Citas.
     * @param {CitasDeleteArgs} args - Arguments to delete one Citas.
     * @example
     * // Delete one Citas
     * const Citas = await prisma.citas.delete({
     *   where: {
     *     // ... filter to delete one Citas
     *   }
     * })
     * 
     */
    delete<T extends CitasDeleteArgs>(args: SelectSubset<T, CitasDeleteArgs<ExtArgs>>): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Citas.
     * @param {CitasUpdateArgs} args - Arguments to update one Citas.
     * @example
     * // Update one Citas
     * const citas = await prisma.citas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitasUpdateArgs>(args: SelectSubset<T, CitasUpdateArgs<ExtArgs>>): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Citas.
     * @param {CitasDeleteManyArgs} args - Arguments to filter Citas to delete.
     * @example
     * // Delete a few Citas
     * const { count } = await prisma.citas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitasDeleteManyArgs>(args?: SelectSubset<T, CitasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citas
     * const citas = await prisma.citas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitasUpdateManyArgs>(args: SelectSubset<T, CitasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas and returns the data updated in the database.
     * @param {CitasUpdateManyAndReturnArgs} args - Arguments to update many Citas.
     * @example
     * // Update many Citas
     * const citas = await prisma.citas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Citas and only return the `Id_cita`
     * const citasWithId_citaOnly = await prisma.citas.updateManyAndReturn({
     *   select: { Id_cita: true },
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
    updateManyAndReturn<T extends CitasUpdateManyAndReturnArgs>(args: SelectSubset<T, CitasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Citas.
     * @param {CitasUpsertArgs} args - Arguments to update or create a Citas.
     * @example
     * // Update or create a Citas
     * const citas = await prisma.citas.upsert({
     *   create: {
     *     // ... data to create a Citas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Citas we want to update
     *   }
     * })
     */
    upsert<T extends CitasUpsertArgs>(args: SelectSubset<T, CitasUpsertArgs<ExtArgs>>): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasCountArgs} args - Arguments to filter Citas to count.
     * @example
     * // Count the number of Citas
     * const count = await prisma.citas.count({
     *   where: {
     *     // ... the filter for the Citas we want to count
     *   }
     * })
    **/
    count<T extends CitasCountArgs>(
      args?: Subset<T, CitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitasAggregateArgs>(args: Subset<T, CitasAggregateArgs>): Prisma.PrismaPromise<GetCitasAggregateType<T>>

    /**
     * Group by Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasGroupByArgs} args - Group by arguments.
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
      T extends CitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitasGroupByArgs['orderBy'] }
        : { orderBy?: CitasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Citas model
   */
  readonly fields: CitasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Citas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Estado_cita_Citas_Estado_citaToEstado_cita<T extends Citas$Estado_cita_Citas_Estado_citaToEstado_citaArgs<ExtArgs> = {}>(args?: Subset<T, Citas$Estado_cita_Citas_Estado_citaToEstado_citaArgs<ExtArgs>>): Prisma__Estado_citaClient<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Usuario_Citas_Id_clienteToUsuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Usuario_Citas_Id_estilistaToUsuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Servicio<T extends Citas$ServicioArgs<ExtArgs> = {}>(args?: Subset<T, Citas$ServicioArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Pago<T extends Citas$PagoArgs<ExtArgs> = {}>(args?: Subset<T, Citas$PagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Citas model
   */
  interface CitasFieldRefs {
    readonly Id_cita: FieldRef<"Citas", 'Int'>
    readonly Id_servicio: FieldRef<"Citas", 'Int'>
    readonly Fecha_cita: FieldRef<"Citas", 'DateTime'>
    readonly Hora_inicio: FieldRef<"Citas", 'DateTime'>
    readonly Estado_cita: FieldRef<"Citas", 'Int'>
    readonly Id_cliente: FieldRef<"Citas", 'String'>
    readonly Id_estilista: FieldRef<"Citas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Citas findUnique
   */
  export type CitasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where: CitasWhereUniqueInput
  }

  /**
   * Citas findUniqueOrThrow
   */
  export type CitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where: CitasWhereUniqueInput
  }

  /**
   * Citas findFirst
   */
  export type CitasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * Citas findFirstOrThrow
   */
  export type CitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * Citas findMany
   */
  export type CitasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Citas.
     */
    cursor?: CitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * Citas create
   */
  export type CitasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * The data needed to create a Citas.
     */
    data: XOR<CitasCreateInput, CitasUncheckedCreateInput>
  }

  /**
   * Citas createMany
   */
  export type CitasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citas.
     */
    data: CitasCreateManyInput | CitasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Citas createManyAndReturn
   */
  export type CitasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * The data used to create many Citas.
     */
    data: CitasCreateManyInput | CitasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Citas update
   */
  export type CitasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * The data needed to update a Citas.
     */
    data: XOR<CitasUpdateInput, CitasUncheckedUpdateInput>
    /**
     * Choose, which Citas to update.
     */
    where: CitasWhereUniqueInput
  }

  /**
   * Citas updateMany
   */
  export type CitasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Citas.
     */
    data: XOR<CitasUpdateManyMutationInput, CitasUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitasWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
  }

  /**
   * Citas updateManyAndReturn
   */
  export type CitasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * The data used to update Citas.
     */
    data: XOR<CitasUpdateManyMutationInput, CitasUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitasWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Citas upsert
   */
  export type CitasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * The filter to search for the Citas to update in case it exists.
     */
    where: CitasWhereUniqueInput
    /**
     * In case the Citas found by the `where` argument doesn't exist, create a new Citas with this data.
     */
    create: XOR<CitasCreateInput, CitasUncheckedCreateInput>
    /**
     * In case the Citas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitasUpdateInput, CitasUncheckedUpdateInput>
  }

  /**
   * Citas delete
   */
  export type CitasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    /**
     * Filter which Citas to delete.
     */
    where: CitasWhereUniqueInput
  }

  /**
   * Citas deleteMany
   */
  export type CitasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to delete
     */
    where?: CitasWhereInput
    /**
     * Limit how many Citas to delete.
     */
    limit?: number
  }

  /**
   * Citas.Estado_cita_Citas_Estado_citaToEstado_cita
   */
  export type Citas$Estado_cita_Citas_Estado_citaToEstado_citaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
    where?: Estado_citaWhereInput
  }

  /**
   * Citas.Servicio
   */
  export type Citas$ServicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    where?: ServicioWhereInput
  }

  /**
   * Citas.Pago
   */
  export type Citas$PagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Citas without action
   */
  export type CitasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
  }


  /**
   * Model Estado_cita
   */

  export type AggregateEstado_cita = {
    _count: Estado_citaCountAggregateOutputType | null
    _avg: Estado_citaAvgAggregateOutputType | null
    _sum: Estado_citaSumAggregateOutputType | null
    _min: Estado_citaMinAggregateOutputType | null
    _max: Estado_citaMaxAggregateOutputType | null
  }

  export type Estado_citaAvgAggregateOutputType = {
    Id_estado_cita: number | null
  }

  export type Estado_citaSumAggregateOutputType = {
    Id_estado_cita: number | null
  }

  export type Estado_citaMinAggregateOutputType = {
    Id_estado_cita: number | null
    Estado: string | null
  }

  export type Estado_citaMaxAggregateOutputType = {
    Id_estado_cita: number | null
    Estado: string | null
  }

  export type Estado_citaCountAggregateOutputType = {
    Id_estado_cita: number
    Estado: number
    _all: number
  }


  export type Estado_citaAvgAggregateInputType = {
    Id_estado_cita?: true
  }

  export type Estado_citaSumAggregateInputType = {
    Id_estado_cita?: true
  }

  export type Estado_citaMinAggregateInputType = {
    Id_estado_cita?: true
    Estado?: true
  }

  export type Estado_citaMaxAggregateInputType = {
    Id_estado_cita?: true
    Estado?: true
  }

  export type Estado_citaCountAggregateInputType = {
    Id_estado_cita?: true
    Estado?: true
    _all?: true
  }

  export type Estado_citaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado_cita to aggregate.
     */
    where?: Estado_citaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_citas to fetch.
     */
    orderBy?: Estado_citaOrderByWithRelationInput | Estado_citaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Estado_citaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estado_citas
    **/
    _count?: true | Estado_citaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Estado_citaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Estado_citaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Estado_citaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Estado_citaMaxAggregateInputType
  }

  export type GetEstado_citaAggregateType<T extends Estado_citaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado_cita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado_cita[P]>
      : GetScalarType<T[P], AggregateEstado_cita[P]>
  }




  export type Estado_citaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Estado_citaWhereInput
    orderBy?: Estado_citaOrderByWithAggregationInput | Estado_citaOrderByWithAggregationInput[]
    by: Estado_citaScalarFieldEnum[] | Estado_citaScalarFieldEnum
    having?: Estado_citaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Estado_citaCountAggregateInputType | true
    _avg?: Estado_citaAvgAggregateInputType
    _sum?: Estado_citaSumAggregateInputType
    _min?: Estado_citaMinAggregateInputType
    _max?: Estado_citaMaxAggregateInputType
  }

  export type Estado_citaGroupByOutputType = {
    Id_estado_cita: number
    Estado: string
    _count: Estado_citaCountAggregateOutputType | null
    _avg: Estado_citaAvgAggregateOutputType | null
    _sum: Estado_citaSumAggregateOutputType | null
    _min: Estado_citaMinAggregateOutputType | null
    _max: Estado_citaMaxAggregateOutputType | null
  }

  type GetEstado_citaGroupByPayload<T extends Estado_citaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Estado_citaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Estado_citaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Estado_citaGroupByOutputType[P]>
            : GetScalarType<T[P], Estado_citaGroupByOutputType[P]>
        }
      >
    >


  export type Estado_citaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_estado_cita?: boolean
    Estado?: boolean
    Citas_Citas_Estado_citaToEstado_cita?: boolean | Estado_cita$Citas_Citas_Estado_citaToEstado_citaArgs<ExtArgs>
    _count?: boolean | Estado_citaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado_cita"]>

  export type Estado_citaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_estado_cita?: boolean
    Estado?: boolean
  }, ExtArgs["result"]["estado_cita"]>

  export type Estado_citaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_estado_cita?: boolean
    Estado?: boolean
  }, ExtArgs["result"]["estado_cita"]>

  export type Estado_citaSelectScalar = {
    Id_estado_cita?: boolean
    Estado?: boolean
  }

  export type Estado_citaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_estado_cita" | "Estado", ExtArgs["result"]["estado_cita"]>
  export type Estado_citaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Citas_Citas_Estado_citaToEstado_cita?: boolean | Estado_cita$Citas_Citas_Estado_citaToEstado_citaArgs<ExtArgs>
    _count?: boolean | Estado_citaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Estado_citaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Estado_citaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Estado_citaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estado_cita"
    objects: {
      Citas_Citas_Estado_citaToEstado_cita: Prisma.$CitasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_estado_cita: number
      Estado: string
    }, ExtArgs["result"]["estado_cita"]>
    composites: {}
  }

  type Estado_citaGetPayload<S extends boolean | null | undefined | Estado_citaDefaultArgs> = $Result.GetResult<Prisma.$Estado_citaPayload, S>

  type Estado_citaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Estado_citaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Estado_citaCountAggregateInputType | true
    }

  export interface Estado_citaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estado_cita'], meta: { name: 'Estado_cita' } }
    /**
     * Find zero or one Estado_cita that matches the filter.
     * @param {Estado_citaFindUniqueArgs} args - Arguments to find a Estado_cita
     * @example
     * // Get one Estado_cita
     * const estado_cita = await prisma.estado_cita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Estado_citaFindUniqueArgs>(args: SelectSubset<T, Estado_citaFindUniqueArgs<ExtArgs>>): Prisma__Estado_citaClient<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado_cita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Estado_citaFindUniqueOrThrowArgs} args - Arguments to find a Estado_cita
     * @example
     * // Get one Estado_cita
     * const estado_cita = await prisma.estado_cita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Estado_citaFindUniqueOrThrowArgs>(args: SelectSubset<T, Estado_citaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Estado_citaClient<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado_cita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_citaFindFirstArgs} args - Arguments to find a Estado_cita
     * @example
     * // Get one Estado_cita
     * const estado_cita = await prisma.estado_cita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Estado_citaFindFirstArgs>(args?: SelectSubset<T, Estado_citaFindFirstArgs<ExtArgs>>): Prisma__Estado_citaClient<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado_cita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_citaFindFirstOrThrowArgs} args - Arguments to find a Estado_cita
     * @example
     * // Get one Estado_cita
     * const estado_cita = await prisma.estado_cita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Estado_citaFindFirstOrThrowArgs>(args?: SelectSubset<T, Estado_citaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Estado_citaClient<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estado_citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_citaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estado_citas
     * const estado_citas = await prisma.estado_cita.findMany()
     * 
     * // Get first 10 Estado_citas
     * const estado_citas = await prisma.estado_cita.findMany({ take: 10 })
     * 
     * // Only select the `Id_estado_cita`
     * const estado_citaWithId_estado_citaOnly = await prisma.estado_cita.findMany({ select: { Id_estado_cita: true } })
     * 
     */
    findMany<T extends Estado_citaFindManyArgs>(args?: SelectSubset<T, Estado_citaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado_cita.
     * @param {Estado_citaCreateArgs} args - Arguments to create a Estado_cita.
     * @example
     * // Create one Estado_cita
     * const Estado_cita = await prisma.estado_cita.create({
     *   data: {
     *     // ... data to create a Estado_cita
     *   }
     * })
     * 
     */
    create<T extends Estado_citaCreateArgs>(args: SelectSubset<T, Estado_citaCreateArgs<ExtArgs>>): Prisma__Estado_citaClient<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estado_citas.
     * @param {Estado_citaCreateManyArgs} args - Arguments to create many Estado_citas.
     * @example
     * // Create many Estado_citas
     * const estado_cita = await prisma.estado_cita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Estado_citaCreateManyArgs>(args?: SelectSubset<T, Estado_citaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estado_citas and returns the data saved in the database.
     * @param {Estado_citaCreateManyAndReturnArgs} args - Arguments to create many Estado_citas.
     * @example
     * // Create many Estado_citas
     * const estado_cita = await prisma.estado_cita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estado_citas and only return the `Id_estado_cita`
     * const estado_citaWithId_estado_citaOnly = await prisma.estado_cita.createManyAndReturn({
     *   select: { Id_estado_cita: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Estado_citaCreateManyAndReturnArgs>(args?: SelectSubset<T, Estado_citaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado_cita.
     * @param {Estado_citaDeleteArgs} args - Arguments to delete one Estado_cita.
     * @example
     * // Delete one Estado_cita
     * const Estado_cita = await prisma.estado_cita.delete({
     *   where: {
     *     // ... filter to delete one Estado_cita
     *   }
     * })
     * 
     */
    delete<T extends Estado_citaDeleteArgs>(args: SelectSubset<T, Estado_citaDeleteArgs<ExtArgs>>): Prisma__Estado_citaClient<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado_cita.
     * @param {Estado_citaUpdateArgs} args - Arguments to update one Estado_cita.
     * @example
     * // Update one Estado_cita
     * const estado_cita = await prisma.estado_cita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Estado_citaUpdateArgs>(args: SelectSubset<T, Estado_citaUpdateArgs<ExtArgs>>): Prisma__Estado_citaClient<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estado_citas.
     * @param {Estado_citaDeleteManyArgs} args - Arguments to filter Estado_citas to delete.
     * @example
     * // Delete a few Estado_citas
     * const { count } = await prisma.estado_cita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Estado_citaDeleteManyArgs>(args?: SelectSubset<T, Estado_citaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_citaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estado_citas
     * const estado_cita = await prisma.estado_cita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Estado_citaUpdateManyArgs>(args: SelectSubset<T, Estado_citaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_citas and returns the data updated in the database.
     * @param {Estado_citaUpdateManyAndReturnArgs} args - Arguments to update many Estado_citas.
     * @example
     * // Update many Estado_citas
     * const estado_cita = await prisma.estado_cita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estado_citas and only return the `Id_estado_cita`
     * const estado_citaWithId_estado_citaOnly = await prisma.estado_cita.updateManyAndReturn({
     *   select: { Id_estado_cita: true },
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
    updateManyAndReturn<T extends Estado_citaUpdateManyAndReturnArgs>(args: SelectSubset<T, Estado_citaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado_cita.
     * @param {Estado_citaUpsertArgs} args - Arguments to update or create a Estado_cita.
     * @example
     * // Update or create a Estado_cita
     * const estado_cita = await prisma.estado_cita.upsert({
     *   create: {
     *     // ... data to create a Estado_cita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado_cita we want to update
     *   }
     * })
     */
    upsert<T extends Estado_citaUpsertArgs>(args: SelectSubset<T, Estado_citaUpsertArgs<ExtArgs>>): Prisma__Estado_citaClient<$Result.GetResult<Prisma.$Estado_citaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estado_citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_citaCountArgs} args - Arguments to filter Estado_citas to count.
     * @example
     * // Count the number of Estado_citas
     * const count = await prisma.estado_cita.count({
     *   where: {
     *     // ... the filter for the Estado_citas we want to count
     *   }
     * })
    **/
    count<T extends Estado_citaCountArgs>(
      args?: Subset<T, Estado_citaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Estado_citaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado_cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_citaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Estado_citaAggregateArgs>(args: Subset<T, Estado_citaAggregateArgs>): Prisma.PrismaPromise<GetEstado_citaAggregateType<T>>

    /**
     * Group by Estado_cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_citaGroupByArgs} args - Group by arguments.
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
      T extends Estado_citaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Estado_citaGroupByArgs['orderBy'] }
        : { orderBy?: Estado_citaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Estado_citaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstado_citaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estado_cita model
   */
  readonly fields: Estado_citaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estado_cita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Estado_citaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Citas_Citas_Estado_citaToEstado_cita<T extends Estado_cita$Citas_Citas_Estado_citaToEstado_citaArgs<ExtArgs> = {}>(args?: Subset<T, Estado_cita$Citas_Citas_Estado_citaToEstado_citaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estado_cita model
   */
  interface Estado_citaFieldRefs {
    readonly Id_estado_cita: FieldRef<"Estado_cita", 'Int'>
    readonly Estado: FieldRef<"Estado_cita", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estado_cita findUnique
   */
  export type Estado_citaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
    /**
     * Filter, which Estado_cita to fetch.
     */
    where: Estado_citaWhereUniqueInput
  }

  /**
   * Estado_cita findUniqueOrThrow
   */
  export type Estado_citaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
    /**
     * Filter, which Estado_cita to fetch.
     */
    where: Estado_citaWhereUniqueInput
  }

  /**
   * Estado_cita findFirst
   */
  export type Estado_citaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
    /**
     * Filter, which Estado_cita to fetch.
     */
    where?: Estado_citaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_citas to fetch.
     */
    orderBy?: Estado_citaOrderByWithRelationInput | Estado_citaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estado_citas.
     */
    cursor?: Estado_citaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estado_citas.
     */
    distinct?: Estado_citaScalarFieldEnum | Estado_citaScalarFieldEnum[]
  }

  /**
   * Estado_cita findFirstOrThrow
   */
  export type Estado_citaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
    /**
     * Filter, which Estado_cita to fetch.
     */
    where?: Estado_citaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_citas to fetch.
     */
    orderBy?: Estado_citaOrderByWithRelationInput | Estado_citaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estado_citas.
     */
    cursor?: Estado_citaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estado_citas.
     */
    distinct?: Estado_citaScalarFieldEnum | Estado_citaScalarFieldEnum[]
  }

  /**
   * Estado_cita findMany
   */
  export type Estado_citaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
    /**
     * Filter, which Estado_citas to fetch.
     */
    where?: Estado_citaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_citas to fetch.
     */
    orderBy?: Estado_citaOrderByWithRelationInput | Estado_citaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estado_citas.
     */
    cursor?: Estado_citaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estado_citas.
     */
    distinct?: Estado_citaScalarFieldEnum | Estado_citaScalarFieldEnum[]
  }

  /**
   * Estado_cita create
   */
  export type Estado_citaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
    /**
     * The data needed to create a Estado_cita.
     */
    data: XOR<Estado_citaCreateInput, Estado_citaUncheckedCreateInput>
  }

  /**
   * Estado_cita createMany
   */
  export type Estado_citaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estado_citas.
     */
    data: Estado_citaCreateManyInput | Estado_citaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estado_cita createManyAndReturn
   */
  export type Estado_citaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * The data used to create many Estado_citas.
     */
    data: Estado_citaCreateManyInput | Estado_citaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estado_cita update
   */
  export type Estado_citaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
    /**
     * The data needed to update a Estado_cita.
     */
    data: XOR<Estado_citaUpdateInput, Estado_citaUncheckedUpdateInput>
    /**
     * Choose, which Estado_cita to update.
     */
    where: Estado_citaWhereUniqueInput
  }

  /**
   * Estado_cita updateMany
   */
  export type Estado_citaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estado_citas.
     */
    data: XOR<Estado_citaUpdateManyMutationInput, Estado_citaUncheckedUpdateManyInput>
    /**
     * Filter which Estado_citas to update
     */
    where?: Estado_citaWhereInput
    /**
     * Limit how many Estado_citas to update.
     */
    limit?: number
  }

  /**
   * Estado_cita updateManyAndReturn
   */
  export type Estado_citaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * The data used to update Estado_citas.
     */
    data: XOR<Estado_citaUpdateManyMutationInput, Estado_citaUncheckedUpdateManyInput>
    /**
     * Filter which Estado_citas to update
     */
    where?: Estado_citaWhereInput
    /**
     * Limit how many Estado_citas to update.
     */
    limit?: number
  }

  /**
   * Estado_cita upsert
   */
  export type Estado_citaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
    /**
     * The filter to search for the Estado_cita to update in case it exists.
     */
    where: Estado_citaWhereUniqueInput
    /**
     * In case the Estado_cita found by the `where` argument doesn't exist, create a new Estado_cita with this data.
     */
    create: XOR<Estado_citaCreateInput, Estado_citaUncheckedCreateInput>
    /**
     * In case the Estado_cita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Estado_citaUpdateInput, Estado_citaUncheckedUpdateInput>
  }

  /**
   * Estado_cita delete
   */
  export type Estado_citaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
    /**
     * Filter which Estado_cita to delete.
     */
    where: Estado_citaWhereUniqueInput
  }

  /**
   * Estado_cita deleteMany
   */
  export type Estado_citaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado_citas to delete
     */
    where?: Estado_citaWhereInput
    /**
     * Limit how many Estado_citas to delete.
     */
    limit?: number
  }

  /**
   * Estado_cita.Citas_Citas_Estado_citaToEstado_cita
   */
  export type Estado_cita$Citas_Citas_Estado_citaToEstado_citaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    where?: CitasWhereInput
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    cursor?: CitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * Estado_cita without action
   */
  export type Estado_citaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_cita
     */
    select?: Estado_citaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_cita
     */
    omit?: Estado_citaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_citaInclude<ExtArgs> | null
  }


  /**
   * Model Estado_pago
   */

  export type AggregateEstado_pago = {
    _count: Estado_pagoCountAggregateOutputType | null
    _avg: Estado_pagoAvgAggregateOutputType | null
    _sum: Estado_pagoSumAggregateOutputType | null
    _min: Estado_pagoMinAggregateOutputType | null
    _max: Estado_pagoMaxAggregateOutputType | null
  }

  export type Estado_pagoAvgAggregateOutputType = {
    Id_estado_pago: number | null
  }

  export type Estado_pagoSumAggregateOutputType = {
    Id_estado_pago: number | null
  }

  export type Estado_pagoMinAggregateOutputType = {
    Id_estado_pago: number | null
    Estado: string | null
  }

  export type Estado_pagoMaxAggregateOutputType = {
    Id_estado_pago: number | null
    Estado: string | null
  }

  export type Estado_pagoCountAggregateOutputType = {
    Id_estado_pago: number
    Estado: number
    _all: number
  }


  export type Estado_pagoAvgAggregateInputType = {
    Id_estado_pago?: true
  }

  export type Estado_pagoSumAggregateInputType = {
    Id_estado_pago?: true
  }

  export type Estado_pagoMinAggregateInputType = {
    Id_estado_pago?: true
    Estado?: true
  }

  export type Estado_pagoMaxAggregateInputType = {
    Id_estado_pago?: true
    Estado?: true
  }

  export type Estado_pagoCountAggregateInputType = {
    Id_estado_pago?: true
    Estado?: true
    _all?: true
  }

  export type Estado_pagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado_pago to aggregate.
     */
    where?: Estado_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_pagos to fetch.
     */
    orderBy?: Estado_pagoOrderByWithRelationInput | Estado_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Estado_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estado_pagos
    **/
    _count?: true | Estado_pagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Estado_pagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Estado_pagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Estado_pagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Estado_pagoMaxAggregateInputType
  }

  export type GetEstado_pagoAggregateType<T extends Estado_pagoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado_pago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado_pago[P]>
      : GetScalarType<T[P], AggregateEstado_pago[P]>
  }




  export type Estado_pagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Estado_pagoWhereInput
    orderBy?: Estado_pagoOrderByWithAggregationInput | Estado_pagoOrderByWithAggregationInput[]
    by: Estado_pagoScalarFieldEnum[] | Estado_pagoScalarFieldEnum
    having?: Estado_pagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Estado_pagoCountAggregateInputType | true
    _avg?: Estado_pagoAvgAggregateInputType
    _sum?: Estado_pagoSumAggregateInputType
    _min?: Estado_pagoMinAggregateInputType
    _max?: Estado_pagoMaxAggregateInputType
  }

  export type Estado_pagoGroupByOutputType = {
    Id_estado_pago: number
    Estado: string
    _count: Estado_pagoCountAggregateOutputType | null
    _avg: Estado_pagoAvgAggregateOutputType | null
    _sum: Estado_pagoSumAggregateOutputType | null
    _min: Estado_pagoMinAggregateOutputType | null
    _max: Estado_pagoMaxAggregateOutputType | null
  }

  type GetEstado_pagoGroupByPayload<T extends Estado_pagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Estado_pagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Estado_pagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Estado_pagoGroupByOutputType[P]>
            : GetScalarType<T[P], Estado_pagoGroupByOutputType[P]>
        }
      >
    >


  export type Estado_pagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_estado_pago?: boolean
    Estado?: boolean
    Pago?: boolean | Estado_pago$PagoArgs<ExtArgs>
    _count?: boolean | Estado_pagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado_pago"]>

  export type Estado_pagoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_estado_pago?: boolean
    Estado?: boolean
  }, ExtArgs["result"]["estado_pago"]>

  export type Estado_pagoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_estado_pago?: boolean
    Estado?: boolean
  }, ExtArgs["result"]["estado_pago"]>

  export type Estado_pagoSelectScalar = {
    Id_estado_pago?: boolean
    Estado?: boolean
  }

  export type Estado_pagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_estado_pago" | "Estado", ExtArgs["result"]["estado_pago"]>
  export type Estado_pagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pago?: boolean | Estado_pago$PagoArgs<ExtArgs>
    _count?: boolean | Estado_pagoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Estado_pagoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Estado_pagoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Estado_pagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estado_pago"
    objects: {
      Pago: Prisma.$PagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_estado_pago: number
      Estado: string
    }, ExtArgs["result"]["estado_pago"]>
    composites: {}
  }

  type Estado_pagoGetPayload<S extends boolean | null | undefined | Estado_pagoDefaultArgs> = $Result.GetResult<Prisma.$Estado_pagoPayload, S>

  type Estado_pagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Estado_pagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Estado_pagoCountAggregateInputType | true
    }

  export interface Estado_pagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estado_pago'], meta: { name: 'Estado_pago' } }
    /**
     * Find zero or one Estado_pago that matches the filter.
     * @param {Estado_pagoFindUniqueArgs} args - Arguments to find a Estado_pago
     * @example
     * // Get one Estado_pago
     * const estado_pago = await prisma.estado_pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Estado_pagoFindUniqueArgs>(args: SelectSubset<T, Estado_pagoFindUniqueArgs<ExtArgs>>): Prisma__Estado_pagoClient<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado_pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Estado_pagoFindUniqueOrThrowArgs} args - Arguments to find a Estado_pago
     * @example
     * // Get one Estado_pago
     * const estado_pago = await prisma.estado_pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Estado_pagoFindUniqueOrThrowArgs>(args: SelectSubset<T, Estado_pagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Estado_pagoClient<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado_pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_pagoFindFirstArgs} args - Arguments to find a Estado_pago
     * @example
     * // Get one Estado_pago
     * const estado_pago = await prisma.estado_pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Estado_pagoFindFirstArgs>(args?: SelectSubset<T, Estado_pagoFindFirstArgs<ExtArgs>>): Prisma__Estado_pagoClient<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado_pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_pagoFindFirstOrThrowArgs} args - Arguments to find a Estado_pago
     * @example
     * // Get one Estado_pago
     * const estado_pago = await prisma.estado_pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Estado_pagoFindFirstOrThrowArgs>(args?: SelectSubset<T, Estado_pagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Estado_pagoClient<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estado_pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_pagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estado_pagos
     * const estado_pagos = await prisma.estado_pago.findMany()
     * 
     * // Get first 10 Estado_pagos
     * const estado_pagos = await prisma.estado_pago.findMany({ take: 10 })
     * 
     * // Only select the `Id_estado_pago`
     * const estado_pagoWithId_estado_pagoOnly = await prisma.estado_pago.findMany({ select: { Id_estado_pago: true } })
     * 
     */
    findMany<T extends Estado_pagoFindManyArgs>(args?: SelectSubset<T, Estado_pagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado_pago.
     * @param {Estado_pagoCreateArgs} args - Arguments to create a Estado_pago.
     * @example
     * // Create one Estado_pago
     * const Estado_pago = await prisma.estado_pago.create({
     *   data: {
     *     // ... data to create a Estado_pago
     *   }
     * })
     * 
     */
    create<T extends Estado_pagoCreateArgs>(args: SelectSubset<T, Estado_pagoCreateArgs<ExtArgs>>): Prisma__Estado_pagoClient<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estado_pagos.
     * @param {Estado_pagoCreateManyArgs} args - Arguments to create many Estado_pagos.
     * @example
     * // Create many Estado_pagos
     * const estado_pago = await prisma.estado_pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Estado_pagoCreateManyArgs>(args?: SelectSubset<T, Estado_pagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estado_pagos and returns the data saved in the database.
     * @param {Estado_pagoCreateManyAndReturnArgs} args - Arguments to create many Estado_pagos.
     * @example
     * // Create many Estado_pagos
     * const estado_pago = await prisma.estado_pago.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estado_pagos and only return the `Id_estado_pago`
     * const estado_pagoWithId_estado_pagoOnly = await prisma.estado_pago.createManyAndReturn({
     *   select: { Id_estado_pago: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Estado_pagoCreateManyAndReturnArgs>(args?: SelectSubset<T, Estado_pagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado_pago.
     * @param {Estado_pagoDeleteArgs} args - Arguments to delete one Estado_pago.
     * @example
     * // Delete one Estado_pago
     * const Estado_pago = await prisma.estado_pago.delete({
     *   where: {
     *     // ... filter to delete one Estado_pago
     *   }
     * })
     * 
     */
    delete<T extends Estado_pagoDeleteArgs>(args: SelectSubset<T, Estado_pagoDeleteArgs<ExtArgs>>): Prisma__Estado_pagoClient<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado_pago.
     * @param {Estado_pagoUpdateArgs} args - Arguments to update one Estado_pago.
     * @example
     * // Update one Estado_pago
     * const estado_pago = await prisma.estado_pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Estado_pagoUpdateArgs>(args: SelectSubset<T, Estado_pagoUpdateArgs<ExtArgs>>): Prisma__Estado_pagoClient<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estado_pagos.
     * @param {Estado_pagoDeleteManyArgs} args - Arguments to filter Estado_pagos to delete.
     * @example
     * // Delete a few Estado_pagos
     * const { count } = await prisma.estado_pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Estado_pagoDeleteManyArgs>(args?: SelectSubset<T, Estado_pagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_pagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estado_pagos
     * const estado_pago = await prisma.estado_pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Estado_pagoUpdateManyArgs>(args: SelectSubset<T, Estado_pagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_pagos and returns the data updated in the database.
     * @param {Estado_pagoUpdateManyAndReturnArgs} args - Arguments to update many Estado_pagos.
     * @example
     * // Update many Estado_pagos
     * const estado_pago = await prisma.estado_pago.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estado_pagos and only return the `Id_estado_pago`
     * const estado_pagoWithId_estado_pagoOnly = await prisma.estado_pago.updateManyAndReturn({
     *   select: { Id_estado_pago: true },
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
    updateManyAndReturn<T extends Estado_pagoUpdateManyAndReturnArgs>(args: SelectSubset<T, Estado_pagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado_pago.
     * @param {Estado_pagoUpsertArgs} args - Arguments to update or create a Estado_pago.
     * @example
     * // Update or create a Estado_pago
     * const estado_pago = await prisma.estado_pago.upsert({
     *   create: {
     *     // ... data to create a Estado_pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado_pago we want to update
     *   }
     * })
     */
    upsert<T extends Estado_pagoUpsertArgs>(args: SelectSubset<T, Estado_pagoUpsertArgs<ExtArgs>>): Prisma__Estado_pagoClient<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estado_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_pagoCountArgs} args - Arguments to filter Estado_pagos to count.
     * @example
     * // Count the number of Estado_pagos
     * const count = await prisma.estado_pago.count({
     *   where: {
     *     // ... the filter for the Estado_pagos we want to count
     *   }
     * })
    **/
    count<T extends Estado_pagoCountArgs>(
      args?: Subset<T, Estado_pagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Estado_pagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado_pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_pagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Estado_pagoAggregateArgs>(args: Subset<T, Estado_pagoAggregateArgs>): Prisma.PrismaPromise<GetEstado_pagoAggregateType<T>>

    /**
     * Group by Estado_pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_pagoGroupByArgs} args - Group by arguments.
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
      T extends Estado_pagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Estado_pagoGroupByArgs['orderBy'] }
        : { orderBy?: Estado_pagoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Estado_pagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstado_pagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estado_pago model
   */
  readonly fields: Estado_pagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estado_pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Estado_pagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pago<T extends Estado_pago$PagoArgs<ExtArgs> = {}>(args?: Subset<T, Estado_pago$PagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estado_pago model
   */
  interface Estado_pagoFieldRefs {
    readonly Id_estado_pago: FieldRef<"Estado_pago", 'Int'>
    readonly Estado: FieldRef<"Estado_pago", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estado_pago findUnique
   */
  export type Estado_pagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
    /**
     * Filter, which Estado_pago to fetch.
     */
    where: Estado_pagoWhereUniqueInput
  }

  /**
   * Estado_pago findUniqueOrThrow
   */
  export type Estado_pagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
    /**
     * Filter, which Estado_pago to fetch.
     */
    where: Estado_pagoWhereUniqueInput
  }

  /**
   * Estado_pago findFirst
   */
  export type Estado_pagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
    /**
     * Filter, which Estado_pago to fetch.
     */
    where?: Estado_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_pagos to fetch.
     */
    orderBy?: Estado_pagoOrderByWithRelationInput | Estado_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estado_pagos.
     */
    cursor?: Estado_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estado_pagos.
     */
    distinct?: Estado_pagoScalarFieldEnum | Estado_pagoScalarFieldEnum[]
  }

  /**
   * Estado_pago findFirstOrThrow
   */
  export type Estado_pagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
    /**
     * Filter, which Estado_pago to fetch.
     */
    where?: Estado_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_pagos to fetch.
     */
    orderBy?: Estado_pagoOrderByWithRelationInput | Estado_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estado_pagos.
     */
    cursor?: Estado_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estado_pagos.
     */
    distinct?: Estado_pagoScalarFieldEnum | Estado_pagoScalarFieldEnum[]
  }

  /**
   * Estado_pago findMany
   */
  export type Estado_pagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
    /**
     * Filter, which Estado_pagos to fetch.
     */
    where?: Estado_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estado_pagos to fetch.
     */
    orderBy?: Estado_pagoOrderByWithRelationInput | Estado_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estado_pagos.
     */
    cursor?: Estado_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estado_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estado_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estado_pagos.
     */
    distinct?: Estado_pagoScalarFieldEnum | Estado_pagoScalarFieldEnum[]
  }

  /**
   * Estado_pago create
   */
  export type Estado_pagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Estado_pago.
     */
    data: XOR<Estado_pagoCreateInput, Estado_pagoUncheckedCreateInput>
  }

  /**
   * Estado_pago createMany
   */
  export type Estado_pagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estado_pagos.
     */
    data: Estado_pagoCreateManyInput | Estado_pagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estado_pago createManyAndReturn
   */
  export type Estado_pagoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * The data used to create many Estado_pagos.
     */
    data: Estado_pagoCreateManyInput | Estado_pagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estado_pago update
   */
  export type Estado_pagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Estado_pago.
     */
    data: XOR<Estado_pagoUpdateInput, Estado_pagoUncheckedUpdateInput>
    /**
     * Choose, which Estado_pago to update.
     */
    where: Estado_pagoWhereUniqueInput
  }

  /**
   * Estado_pago updateMany
   */
  export type Estado_pagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estado_pagos.
     */
    data: XOR<Estado_pagoUpdateManyMutationInput, Estado_pagoUncheckedUpdateManyInput>
    /**
     * Filter which Estado_pagos to update
     */
    where?: Estado_pagoWhereInput
    /**
     * Limit how many Estado_pagos to update.
     */
    limit?: number
  }

  /**
   * Estado_pago updateManyAndReturn
   */
  export type Estado_pagoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * The data used to update Estado_pagos.
     */
    data: XOR<Estado_pagoUpdateManyMutationInput, Estado_pagoUncheckedUpdateManyInput>
    /**
     * Filter which Estado_pagos to update
     */
    where?: Estado_pagoWhereInput
    /**
     * Limit how many Estado_pagos to update.
     */
    limit?: number
  }

  /**
   * Estado_pago upsert
   */
  export type Estado_pagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Estado_pago to update in case it exists.
     */
    where: Estado_pagoWhereUniqueInput
    /**
     * In case the Estado_pago found by the `where` argument doesn't exist, create a new Estado_pago with this data.
     */
    create: XOR<Estado_pagoCreateInput, Estado_pagoUncheckedCreateInput>
    /**
     * In case the Estado_pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Estado_pagoUpdateInput, Estado_pagoUncheckedUpdateInput>
  }

  /**
   * Estado_pago delete
   */
  export type Estado_pagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
    /**
     * Filter which Estado_pago to delete.
     */
    where: Estado_pagoWhereUniqueInput
  }

  /**
   * Estado_pago deleteMany
   */
  export type Estado_pagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado_pagos to delete
     */
    where?: Estado_pagoWhereInput
    /**
     * Limit how many Estado_pagos to delete.
     */
    limit?: number
  }

  /**
   * Estado_pago.Pago
   */
  export type Estado_pago$PagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Estado_pago without action
   */
  export type Estado_pagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
  }


  /**
   * Model Metodo_de_pago
   */

  export type AggregateMetodo_de_pago = {
    _count: Metodo_de_pagoCountAggregateOutputType | null
    _avg: Metodo_de_pagoAvgAggregateOutputType | null
    _sum: Metodo_de_pagoSumAggregateOutputType | null
    _min: Metodo_de_pagoMinAggregateOutputType | null
    _max: Metodo_de_pagoMaxAggregateOutputType | null
  }

  export type Metodo_de_pagoAvgAggregateOutputType = {
    id_metodo_pago: number | null
  }

  export type Metodo_de_pagoSumAggregateOutputType = {
    id_metodo_pago: number | null
  }

  export type Metodo_de_pagoMinAggregateOutputType = {
    id_metodo_pago: number | null
    Metodo: string | null
  }

  export type Metodo_de_pagoMaxAggregateOutputType = {
    id_metodo_pago: number | null
    Metodo: string | null
  }

  export type Metodo_de_pagoCountAggregateOutputType = {
    id_metodo_pago: number
    Metodo: number
    _all: number
  }


  export type Metodo_de_pagoAvgAggregateInputType = {
    id_metodo_pago?: true
  }

  export type Metodo_de_pagoSumAggregateInputType = {
    id_metodo_pago?: true
  }

  export type Metodo_de_pagoMinAggregateInputType = {
    id_metodo_pago?: true
    Metodo?: true
  }

  export type Metodo_de_pagoMaxAggregateInputType = {
    id_metodo_pago?: true
    Metodo?: true
  }

  export type Metodo_de_pagoCountAggregateInputType = {
    id_metodo_pago?: true
    Metodo?: true
    _all?: true
  }

  export type Metodo_de_pagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metodo_de_pago to aggregate.
     */
    where?: Metodo_de_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metodo_de_pagos to fetch.
     */
    orderBy?: Metodo_de_pagoOrderByWithRelationInput | Metodo_de_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Metodo_de_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metodo_de_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metodo_de_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metodo_de_pagos
    **/
    _count?: true | Metodo_de_pagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Metodo_de_pagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Metodo_de_pagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Metodo_de_pagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Metodo_de_pagoMaxAggregateInputType
  }

  export type GetMetodo_de_pagoAggregateType<T extends Metodo_de_pagoAggregateArgs> = {
        [P in keyof T & keyof AggregateMetodo_de_pago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetodo_de_pago[P]>
      : GetScalarType<T[P], AggregateMetodo_de_pago[P]>
  }




  export type Metodo_de_pagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Metodo_de_pagoWhereInput
    orderBy?: Metodo_de_pagoOrderByWithAggregationInput | Metodo_de_pagoOrderByWithAggregationInput[]
    by: Metodo_de_pagoScalarFieldEnum[] | Metodo_de_pagoScalarFieldEnum
    having?: Metodo_de_pagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Metodo_de_pagoCountAggregateInputType | true
    _avg?: Metodo_de_pagoAvgAggregateInputType
    _sum?: Metodo_de_pagoSumAggregateInputType
    _min?: Metodo_de_pagoMinAggregateInputType
    _max?: Metodo_de_pagoMaxAggregateInputType
  }

  export type Metodo_de_pagoGroupByOutputType = {
    id_metodo_pago: number
    Metodo: string
    _count: Metodo_de_pagoCountAggregateOutputType | null
    _avg: Metodo_de_pagoAvgAggregateOutputType | null
    _sum: Metodo_de_pagoSumAggregateOutputType | null
    _min: Metodo_de_pagoMinAggregateOutputType | null
    _max: Metodo_de_pagoMaxAggregateOutputType | null
  }

  type GetMetodo_de_pagoGroupByPayload<T extends Metodo_de_pagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Metodo_de_pagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Metodo_de_pagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Metodo_de_pagoGroupByOutputType[P]>
            : GetScalarType<T[P], Metodo_de_pagoGroupByOutputType[P]>
        }
      >
    >


  export type Metodo_de_pagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_metodo_pago?: boolean
    Metodo?: boolean
    Pago?: boolean | Metodo_de_pago$PagoArgs<ExtArgs>
    _count?: boolean | Metodo_de_pagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metodo_de_pago"]>

  export type Metodo_de_pagoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_metodo_pago?: boolean
    Metodo?: boolean
  }, ExtArgs["result"]["metodo_de_pago"]>

  export type Metodo_de_pagoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_metodo_pago?: boolean
    Metodo?: boolean
  }, ExtArgs["result"]["metodo_de_pago"]>

  export type Metodo_de_pagoSelectScalar = {
    id_metodo_pago?: boolean
    Metodo?: boolean
  }

  export type Metodo_de_pagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_metodo_pago" | "Metodo", ExtArgs["result"]["metodo_de_pago"]>
  export type Metodo_de_pagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pago?: boolean | Metodo_de_pago$PagoArgs<ExtArgs>
    _count?: boolean | Metodo_de_pagoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Metodo_de_pagoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Metodo_de_pagoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Metodo_de_pagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metodo_de_pago"
    objects: {
      Pago: Prisma.$PagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_metodo_pago: number
      Metodo: string
    }, ExtArgs["result"]["metodo_de_pago"]>
    composites: {}
  }

  type Metodo_de_pagoGetPayload<S extends boolean | null | undefined | Metodo_de_pagoDefaultArgs> = $Result.GetResult<Prisma.$Metodo_de_pagoPayload, S>

  type Metodo_de_pagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Metodo_de_pagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Metodo_de_pagoCountAggregateInputType | true
    }

  export interface Metodo_de_pagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metodo_de_pago'], meta: { name: 'Metodo_de_pago' } }
    /**
     * Find zero or one Metodo_de_pago that matches the filter.
     * @param {Metodo_de_pagoFindUniqueArgs} args - Arguments to find a Metodo_de_pago
     * @example
     * // Get one Metodo_de_pago
     * const metodo_de_pago = await prisma.metodo_de_pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Metodo_de_pagoFindUniqueArgs>(args: SelectSubset<T, Metodo_de_pagoFindUniqueArgs<ExtArgs>>): Prisma__Metodo_de_pagoClient<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metodo_de_pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Metodo_de_pagoFindUniqueOrThrowArgs} args - Arguments to find a Metodo_de_pago
     * @example
     * // Get one Metodo_de_pago
     * const metodo_de_pago = await prisma.metodo_de_pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Metodo_de_pagoFindUniqueOrThrowArgs>(args: SelectSubset<T, Metodo_de_pagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Metodo_de_pagoClient<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metodo_de_pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metodo_de_pagoFindFirstArgs} args - Arguments to find a Metodo_de_pago
     * @example
     * // Get one Metodo_de_pago
     * const metodo_de_pago = await prisma.metodo_de_pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Metodo_de_pagoFindFirstArgs>(args?: SelectSubset<T, Metodo_de_pagoFindFirstArgs<ExtArgs>>): Prisma__Metodo_de_pagoClient<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metodo_de_pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metodo_de_pagoFindFirstOrThrowArgs} args - Arguments to find a Metodo_de_pago
     * @example
     * // Get one Metodo_de_pago
     * const metodo_de_pago = await prisma.metodo_de_pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Metodo_de_pagoFindFirstOrThrowArgs>(args?: SelectSubset<T, Metodo_de_pagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Metodo_de_pagoClient<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metodo_de_pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metodo_de_pagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metodo_de_pagos
     * const metodo_de_pagos = await prisma.metodo_de_pago.findMany()
     * 
     * // Get first 10 Metodo_de_pagos
     * const metodo_de_pagos = await prisma.metodo_de_pago.findMany({ take: 10 })
     * 
     * // Only select the `id_metodo_pago`
     * const metodo_de_pagoWithId_metodo_pagoOnly = await prisma.metodo_de_pago.findMany({ select: { id_metodo_pago: true } })
     * 
     */
    findMany<T extends Metodo_de_pagoFindManyArgs>(args?: SelectSubset<T, Metodo_de_pagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metodo_de_pago.
     * @param {Metodo_de_pagoCreateArgs} args - Arguments to create a Metodo_de_pago.
     * @example
     * // Create one Metodo_de_pago
     * const Metodo_de_pago = await prisma.metodo_de_pago.create({
     *   data: {
     *     // ... data to create a Metodo_de_pago
     *   }
     * })
     * 
     */
    create<T extends Metodo_de_pagoCreateArgs>(args: SelectSubset<T, Metodo_de_pagoCreateArgs<ExtArgs>>): Prisma__Metodo_de_pagoClient<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metodo_de_pagos.
     * @param {Metodo_de_pagoCreateManyArgs} args - Arguments to create many Metodo_de_pagos.
     * @example
     * // Create many Metodo_de_pagos
     * const metodo_de_pago = await prisma.metodo_de_pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Metodo_de_pagoCreateManyArgs>(args?: SelectSubset<T, Metodo_de_pagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metodo_de_pagos and returns the data saved in the database.
     * @param {Metodo_de_pagoCreateManyAndReturnArgs} args - Arguments to create many Metodo_de_pagos.
     * @example
     * // Create many Metodo_de_pagos
     * const metodo_de_pago = await prisma.metodo_de_pago.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metodo_de_pagos and only return the `id_metodo_pago`
     * const metodo_de_pagoWithId_metodo_pagoOnly = await prisma.metodo_de_pago.createManyAndReturn({
     *   select: { id_metodo_pago: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Metodo_de_pagoCreateManyAndReturnArgs>(args?: SelectSubset<T, Metodo_de_pagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metodo_de_pago.
     * @param {Metodo_de_pagoDeleteArgs} args - Arguments to delete one Metodo_de_pago.
     * @example
     * // Delete one Metodo_de_pago
     * const Metodo_de_pago = await prisma.metodo_de_pago.delete({
     *   where: {
     *     // ... filter to delete one Metodo_de_pago
     *   }
     * })
     * 
     */
    delete<T extends Metodo_de_pagoDeleteArgs>(args: SelectSubset<T, Metodo_de_pagoDeleteArgs<ExtArgs>>): Prisma__Metodo_de_pagoClient<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metodo_de_pago.
     * @param {Metodo_de_pagoUpdateArgs} args - Arguments to update one Metodo_de_pago.
     * @example
     * // Update one Metodo_de_pago
     * const metodo_de_pago = await prisma.metodo_de_pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Metodo_de_pagoUpdateArgs>(args: SelectSubset<T, Metodo_de_pagoUpdateArgs<ExtArgs>>): Prisma__Metodo_de_pagoClient<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metodo_de_pagos.
     * @param {Metodo_de_pagoDeleteManyArgs} args - Arguments to filter Metodo_de_pagos to delete.
     * @example
     * // Delete a few Metodo_de_pagos
     * const { count } = await prisma.metodo_de_pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Metodo_de_pagoDeleteManyArgs>(args?: SelectSubset<T, Metodo_de_pagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metodo_de_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metodo_de_pagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metodo_de_pagos
     * const metodo_de_pago = await prisma.metodo_de_pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Metodo_de_pagoUpdateManyArgs>(args: SelectSubset<T, Metodo_de_pagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metodo_de_pagos and returns the data updated in the database.
     * @param {Metodo_de_pagoUpdateManyAndReturnArgs} args - Arguments to update many Metodo_de_pagos.
     * @example
     * // Update many Metodo_de_pagos
     * const metodo_de_pago = await prisma.metodo_de_pago.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metodo_de_pagos and only return the `id_metodo_pago`
     * const metodo_de_pagoWithId_metodo_pagoOnly = await prisma.metodo_de_pago.updateManyAndReturn({
     *   select: { id_metodo_pago: true },
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
    updateManyAndReturn<T extends Metodo_de_pagoUpdateManyAndReturnArgs>(args: SelectSubset<T, Metodo_de_pagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metodo_de_pago.
     * @param {Metodo_de_pagoUpsertArgs} args - Arguments to update or create a Metodo_de_pago.
     * @example
     * // Update or create a Metodo_de_pago
     * const metodo_de_pago = await prisma.metodo_de_pago.upsert({
     *   create: {
     *     // ... data to create a Metodo_de_pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metodo_de_pago we want to update
     *   }
     * })
     */
    upsert<T extends Metodo_de_pagoUpsertArgs>(args: SelectSubset<T, Metodo_de_pagoUpsertArgs<ExtArgs>>): Prisma__Metodo_de_pagoClient<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metodo_de_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metodo_de_pagoCountArgs} args - Arguments to filter Metodo_de_pagos to count.
     * @example
     * // Count the number of Metodo_de_pagos
     * const count = await prisma.metodo_de_pago.count({
     *   where: {
     *     // ... the filter for the Metodo_de_pagos we want to count
     *   }
     * })
    **/
    count<T extends Metodo_de_pagoCountArgs>(
      args?: Subset<T, Metodo_de_pagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Metodo_de_pagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metodo_de_pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metodo_de_pagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Metodo_de_pagoAggregateArgs>(args: Subset<T, Metodo_de_pagoAggregateArgs>): Prisma.PrismaPromise<GetMetodo_de_pagoAggregateType<T>>

    /**
     * Group by Metodo_de_pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metodo_de_pagoGroupByArgs} args - Group by arguments.
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
      T extends Metodo_de_pagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Metodo_de_pagoGroupByArgs['orderBy'] }
        : { orderBy?: Metodo_de_pagoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Metodo_de_pagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetodo_de_pagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metodo_de_pago model
   */
  readonly fields: Metodo_de_pagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metodo_de_pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Metodo_de_pagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pago<T extends Metodo_de_pago$PagoArgs<ExtArgs> = {}>(args?: Subset<T, Metodo_de_pago$PagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Metodo_de_pago model
   */
  interface Metodo_de_pagoFieldRefs {
    readonly id_metodo_pago: FieldRef<"Metodo_de_pago", 'Int'>
    readonly Metodo: FieldRef<"Metodo_de_pago", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Metodo_de_pago findUnique
   */
  export type Metodo_de_pagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
    /**
     * Filter, which Metodo_de_pago to fetch.
     */
    where: Metodo_de_pagoWhereUniqueInput
  }

  /**
   * Metodo_de_pago findUniqueOrThrow
   */
  export type Metodo_de_pagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
    /**
     * Filter, which Metodo_de_pago to fetch.
     */
    where: Metodo_de_pagoWhereUniqueInput
  }

  /**
   * Metodo_de_pago findFirst
   */
  export type Metodo_de_pagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
    /**
     * Filter, which Metodo_de_pago to fetch.
     */
    where?: Metodo_de_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metodo_de_pagos to fetch.
     */
    orderBy?: Metodo_de_pagoOrderByWithRelationInput | Metodo_de_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metodo_de_pagos.
     */
    cursor?: Metodo_de_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metodo_de_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metodo_de_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metodo_de_pagos.
     */
    distinct?: Metodo_de_pagoScalarFieldEnum | Metodo_de_pagoScalarFieldEnum[]
  }

  /**
   * Metodo_de_pago findFirstOrThrow
   */
  export type Metodo_de_pagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
    /**
     * Filter, which Metodo_de_pago to fetch.
     */
    where?: Metodo_de_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metodo_de_pagos to fetch.
     */
    orderBy?: Metodo_de_pagoOrderByWithRelationInput | Metodo_de_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metodo_de_pagos.
     */
    cursor?: Metodo_de_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metodo_de_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metodo_de_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metodo_de_pagos.
     */
    distinct?: Metodo_de_pagoScalarFieldEnum | Metodo_de_pagoScalarFieldEnum[]
  }

  /**
   * Metodo_de_pago findMany
   */
  export type Metodo_de_pagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
    /**
     * Filter, which Metodo_de_pagos to fetch.
     */
    where?: Metodo_de_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metodo_de_pagos to fetch.
     */
    orderBy?: Metodo_de_pagoOrderByWithRelationInput | Metodo_de_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metodo_de_pagos.
     */
    cursor?: Metodo_de_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metodo_de_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metodo_de_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metodo_de_pagos.
     */
    distinct?: Metodo_de_pagoScalarFieldEnum | Metodo_de_pagoScalarFieldEnum[]
  }

  /**
   * Metodo_de_pago create
   */
  export type Metodo_de_pagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Metodo_de_pago.
     */
    data: XOR<Metodo_de_pagoCreateInput, Metodo_de_pagoUncheckedCreateInput>
  }

  /**
   * Metodo_de_pago createMany
   */
  export type Metodo_de_pagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metodo_de_pagos.
     */
    data: Metodo_de_pagoCreateManyInput | Metodo_de_pagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metodo_de_pago createManyAndReturn
   */
  export type Metodo_de_pagoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * The data used to create many Metodo_de_pagos.
     */
    data: Metodo_de_pagoCreateManyInput | Metodo_de_pagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metodo_de_pago update
   */
  export type Metodo_de_pagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Metodo_de_pago.
     */
    data: XOR<Metodo_de_pagoUpdateInput, Metodo_de_pagoUncheckedUpdateInput>
    /**
     * Choose, which Metodo_de_pago to update.
     */
    where: Metodo_de_pagoWhereUniqueInput
  }

  /**
   * Metodo_de_pago updateMany
   */
  export type Metodo_de_pagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metodo_de_pagos.
     */
    data: XOR<Metodo_de_pagoUpdateManyMutationInput, Metodo_de_pagoUncheckedUpdateManyInput>
    /**
     * Filter which Metodo_de_pagos to update
     */
    where?: Metodo_de_pagoWhereInput
    /**
     * Limit how many Metodo_de_pagos to update.
     */
    limit?: number
  }

  /**
   * Metodo_de_pago updateManyAndReturn
   */
  export type Metodo_de_pagoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * The data used to update Metodo_de_pagos.
     */
    data: XOR<Metodo_de_pagoUpdateManyMutationInput, Metodo_de_pagoUncheckedUpdateManyInput>
    /**
     * Filter which Metodo_de_pagos to update
     */
    where?: Metodo_de_pagoWhereInput
    /**
     * Limit how many Metodo_de_pagos to update.
     */
    limit?: number
  }

  /**
   * Metodo_de_pago upsert
   */
  export type Metodo_de_pagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Metodo_de_pago to update in case it exists.
     */
    where: Metodo_de_pagoWhereUniqueInput
    /**
     * In case the Metodo_de_pago found by the `where` argument doesn't exist, create a new Metodo_de_pago with this data.
     */
    create: XOR<Metodo_de_pagoCreateInput, Metodo_de_pagoUncheckedCreateInput>
    /**
     * In case the Metodo_de_pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Metodo_de_pagoUpdateInput, Metodo_de_pagoUncheckedUpdateInput>
  }

  /**
   * Metodo_de_pago delete
   */
  export type Metodo_de_pagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
    /**
     * Filter which Metodo_de_pago to delete.
     */
    where: Metodo_de_pagoWhereUniqueInput
  }

  /**
   * Metodo_de_pago deleteMany
   */
  export type Metodo_de_pagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metodo_de_pagos to delete
     */
    where?: Metodo_de_pagoWhereInput
    /**
     * Limit how many Metodo_de_pagos to delete.
     */
    limit?: number
  }

  /**
   * Metodo_de_pago.Pago
   */
  export type Metodo_de_pago$PagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Metodo_de_pago without action
   */
  export type Metodo_de_pagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
  }


  /**
   * Model Pago
   */

  export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  export type PagoAvgAggregateOutputType = {
    Id_cita: number | null
    Monto: Decimal | null
    Id_Metodo_pago: number | null
    Id_Estado_pago: number | null
  }

  export type PagoSumAggregateOutputType = {
    Id_cita: number | null
    Monto: Decimal | null
    Id_Metodo_pago: number | null
    Id_Estado_pago: number | null
  }

  export type PagoMinAggregateOutputType = {
    Id_cita: number | null
    Monto: Decimal | null
    Id_Metodo_pago: number | null
    Fecha_Pago: Date | null
    Id_Estado_pago: number | null
    Id_pago: string | null
    id_tarjeta: string | null
  }

  export type PagoMaxAggregateOutputType = {
    Id_cita: number | null
    Monto: Decimal | null
    Id_Metodo_pago: number | null
    Fecha_Pago: Date | null
    Id_Estado_pago: number | null
    Id_pago: string | null
    id_tarjeta: string | null
  }

  export type PagoCountAggregateOutputType = {
    Id_cita: number
    Monto: number
    Id_Metodo_pago: number
    Fecha_Pago: number
    Id_Estado_pago: number
    Id_pago: number
    id_tarjeta: number
    _all: number
  }


  export type PagoAvgAggregateInputType = {
    Id_cita?: true
    Monto?: true
    Id_Metodo_pago?: true
    Id_Estado_pago?: true
  }

  export type PagoSumAggregateInputType = {
    Id_cita?: true
    Monto?: true
    Id_Metodo_pago?: true
    Id_Estado_pago?: true
  }

  export type PagoMinAggregateInputType = {
    Id_cita?: true
    Monto?: true
    Id_Metodo_pago?: true
    Fecha_Pago?: true
    Id_Estado_pago?: true
    Id_pago?: true
    id_tarjeta?: true
  }

  export type PagoMaxAggregateInputType = {
    Id_cita?: true
    Monto?: true
    Id_Metodo_pago?: true
    Fecha_Pago?: true
    Id_Estado_pago?: true
    Id_pago?: true
    id_tarjeta?: true
  }

  export type PagoCountAggregateInputType = {
    Id_cita?: true
    Monto?: true
    Id_Metodo_pago?: true
    Fecha_Pago?: true
    Id_Estado_pago?: true
    Id_pago?: true
    id_tarjeta?: true
    _all?: true
  }

  export type PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pago to aggregate.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagos
    **/
    _count?: true | PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType
  }

  export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago[P]>
      : GetScalarType<T[P], AggregatePago[P]>
  }




  export type PagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithAggregationInput | PagoOrderByWithAggregationInput[]
    by: PagoScalarFieldEnum[] | PagoScalarFieldEnum
    having?: PagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoCountAggregateInputType | true
    _avg?: PagoAvgAggregateInputType
    _sum?: PagoSumAggregateInputType
    _min?: PagoMinAggregateInputType
    _max?: PagoMaxAggregateInputType
  }

  export type PagoGroupByOutputType = {
    Id_cita: number | null
    Monto: Decimal
    Id_Metodo_pago: number | null
    Fecha_Pago: Date | null
    Id_Estado_pago: number | null
    Id_pago: string
    id_tarjeta: string | null
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  type GetPagoGroupByPayload<T extends PagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoGroupByOutputType[P]>
        }
      >
    >


  export type PagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_cita?: boolean
    Monto?: boolean
    Id_Metodo_pago?: boolean
    Fecha_Pago?: boolean
    Id_Estado_pago?: boolean
    Id_pago?: boolean
    id_tarjeta?: boolean
    Estado_pago?: boolean | Pago$Estado_pagoArgs<ExtArgs>
    Metodo_de_pago?: boolean | Pago$Metodo_de_pagoArgs<ExtArgs>
    Citas?: boolean | Pago$CitasArgs<ExtArgs>
    Tarjeta?: boolean | Pago$TarjetaArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_cita?: boolean
    Monto?: boolean
    Id_Metodo_pago?: boolean
    Fecha_Pago?: boolean
    Id_Estado_pago?: boolean
    Id_pago?: boolean
    id_tarjeta?: boolean
    Estado_pago?: boolean | Pago$Estado_pagoArgs<ExtArgs>
    Metodo_de_pago?: boolean | Pago$Metodo_de_pagoArgs<ExtArgs>
    Citas?: boolean | Pago$CitasArgs<ExtArgs>
    Tarjeta?: boolean | Pago$TarjetaArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_cita?: boolean
    Monto?: boolean
    Id_Metodo_pago?: boolean
    Fecha_Pago?: boolean
    Id_Estado_pago?: boolean
    Id_pago?: boolean
    id_tarjeta?: boolean
    Estado_pago?: boolean | Pago$Estado_pagoArgs<ExtArgs>
    Metodo_de_pago?: boolean | Pago$Metodo_de_pagoArgs<ExtArgs>
    Citas?: boolean | Pago$CitasArgs<ExtArgs>
    Tarjeta?: boolean | Pago$TarjetaArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectScalar = {
    Id_cita?: boolean
    Monto?: boolean
    Id_Metodo_pago?: boolean
    Fecha_Pago?: boolean
    Id_Estado_pago?: boolean
    Id_pago?: boolean
    id_tarjeta?: boolean
  }

  export type PagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_cita" | "Monto" | "Id_Metodo_pago" | "Fecha_Pago" | "Id_Estado_pago" | "Id_pago" | "id_tarjeta", ExtArgs["result"]["pago"]>
  export type PagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado_pago?: boolean | Pago$Estado_pagoArgs<ExtArgs>
    Metodo_de_pago?: boolean | Pago$Metodo_de_pagoArgs<ExtArgs>
    Citas?: boolean | Pago$CitasArgs<ExtArgs>
    Tarjeta?: boolean | Pago$TarjetaArgs<ExtArgs>
  }
  export type PagoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado_pago?: boolean | Pago$Estado_pagoArgs<ExtArgs>
    Metodo_de_pago?: boolean | Pago$Metodo_de_pagoArgs<ExtArgs>
    Citas?: boolean | Pago$CitasArgs<ExtArgs>
    Tarjeta?: boolean | Pago$TarjetaArgs<ExtArgs>
  }
  export type PagoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado_pago?: boolean | Pago$Estado_pagoArgs<ExtArgs>
    Metodo_de_pago?: boolean | Pago$Metodo_de_pagoArgs<ExtArgs>
    Citas?: boolean | Pago$CitasArgs<ExtArgs>
    Tarjeta?: boolean | Pago$TarjetaArgs<ExtArgs>
  }

  export type $PagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pago"
    objects: {
      Estado_pago: Prisma.$Estado_pagoPayload<ExtArgs> | null
      Metodo_de_pago: Prisma.$Metodo_de_pagoPayload<ExtArgs> | null
      Citas: Prisma.$CitasPayload<ExtArgs> | null
      Tarjeta: Prisma.$TarjetaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_cita: number | null
      Monto: Prisma.Decimal
      Id_Metodo_pago: number | null
      Fecha_Pago: Date | null
      Id_Estado_pago: number | null
      Id_pago: string
      id_tarjeta: string | null
    }, ExtArgs["result"]["pago"]>
    composites: {}
  }

  type PagoGetPayload<S extends boolean | null | undefined | PagoDefaultArgs> = $Result.GetResult<Prisma.$PagoPayload, S>

  type PagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagoCountAggregateInputType | true
    }

  export interface PagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pago'], meta: { name: 'Pago' } }
    /**
     * Find zero or one Pago that matches the filter.
     * @param {PagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoFindUniqueArgs>(args: SelectSubset<T, PagoFindUniqueArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoFindFirstArgs>(args?: SelectSubset<T, PagoFindFirstArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     * 
     * // Only select the `Id_cita`
     * const pagoWithId_citaOnly = await prisma.pago.findMany({ select: { Id_cita: true } })
     * 
     */
    findMany<T extends PagoFindManyArgs>(args?: SelectSubset<T, PagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pago.
     * @param {PagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     * 
     */
    create<T extends PagoCreateArgs>(args: SelectSubset<T, PagoCreateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {PagoCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoCreateManyArgs>(args?: SelectSubset<T, PagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagos and returns the data saved in the database.
     * @param {PagoCreateManyAndReturnArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagos and only return the `Id_cita`
     * const pagoWithId_citaOnly = await prisma.pago.createManyAndReturn({
     *   select: { Id_cita: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pago.
     * @param {PagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     * 
     */
    delete<T extends PagoDeleteArgs>(args: SelectSubset<T, PagoDeleteArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pago.
     * @param {PagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoUpdateArgs>(args: SelectSubset<T, PagoUpdateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {PagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoDeleteManyArgs>(args?: SelectSubset<T, PagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoUpdateManyArgs>(args: SelectSubset<T, PagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos and returns the data updated in the database.
     * @param {PagoUpdateManyAndReturnArgs} args - Arguments to update many Pagos.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagos and only return the `Id_cita`
     * const pagoWithId_citaOnly = await prisma.pago.updateManyAndReturn({
     *   select: { Id_cita: true },
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
    updateManyAndReturn<T extends PagoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pago.
     * @param {PagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
     */
    upsert<T extends PagoUpsertArgs>(args: SelectSubset<T, PagoUpsertArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends PagoCountArgs>(
      args?: Subset<T, PagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagoAggregateArgs>(args: Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>

    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoGroupByArgs} args - Group by arguments.
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
      T extends PagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoGroupByArgs['orderBy'] }
        : { orderBy?: PagoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pago model
   */
  readonly fields: PagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Estado_pago<T extends Pago$Estado_pagoArgs<ExtArgs> = {}>(args?: Subset<T, Pago$Estado_pagoArgs<ExtArgs>>): Prisma__Estado_pagoClient<$Result.GetResult<Prisma.$Estado_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Metodo_de_pago<T extends Pago$Metodo_de_pagoArgs<ExtArgs> = {}>(args?: Subset<T, Pago$Metodo_de_pagoArgs<ExtArgs>>): Prisma__Metodo_de_pagoClient<$Result.GetResult<Prisma.$Metodo_de_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Citas<T extends Pago$CitasArgs<ExtArgs> = {}>(args?: Subset<T, Pago$CitasArgs<ExtArgs>>): Prisma__CitasClient<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Tarjeta<T extends Pago$TarjetaArgs<ExtArgs> = {}>(args?: Subset<T, Pago$TarjetaArgs<ExtArgs>>): Prisma__TarjetaClient<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pago model
   */
  interface PagoFieldRefs {
    readonly Id_cita: FieldRef<"Pago", 'Int'>
    readonly Monto: FieldRef<"Pago", 'Decimal'>
    readonly Id_Metodo_pago: FieldRef<"Pago", 'Int'>
    readonly Fecha_Pago: FieldRef<"Pago", 'DateTime'>
    readonly Id_Estado_pago: FieldRef<"Pago", 'Int'>
    readonly Id_pago: FieldRef<"Pago", 'String'>
    readonly id_tarjeta: FieldRef<"Pago", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pago findUnique
   */
  export type PagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findUniqueOrThrow
   */
  export type PagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findFirst
   */
  export type PagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findFirstOrThrow
   */
  export type PagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findMany
   */
  export type PagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago create
   */
  export type PagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pago.
     */
    data: XOR<PagoCreateInput, PagoUncheckedCreateInput>
  }

  /**
   * Pago createMany
   */
  export type PagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pago createManyAndReturn
   */
  export type PagoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pago update
   */
  export type PagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pago.
     */
    data: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
    /**
     * Choose, which Pago to update.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago updateMany
   */
  export type PagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
  }

  /**
   * Pago updateManyAndReturn
   */
  export type PagoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pago upsert
   */
  export type PagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pago to update in case it exists.
     */
    where: PagoWhereUniqueInput
    /**
     * In case the Pago found by the `where` argument doesn't exist, create a new Pago with this data.
     */
    create: XOR<PagoCreateInput, PagoUncheckedCreateInput>
    /**
     * In case the Pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
  }

  /**
   * Pago delete
   */
  export type PagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter which Pago to delete.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago deleteMany
   */
  export type PagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to delete
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to delete.
     */
    limit?: number
  }

  /**
   * Pago.Estado_pago
   */
  export type Pago$Estado_pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_pago
     */
    select?: Estado_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado_pago
     */
    omit?: Estado_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Estado_pagoInclude<ExtArgs> | null
    where?: Estado_pagoWhereInput
  }

  /**
   * Pago.Metodo_de_pago
   */
  export type Pago$Metodo_de_pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metodo_de_pago
     */
    select?: Metodo_de_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metodo_de_pago
     */
    omit?: Metodo_de_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metodo_de_pagoInclude<ExtArgs> | null
    where?: Metodo_de_pagoWhereInput
  }

  /**
   * Pago.Citas
   */
  export type Pago$CitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    where?: CitasWhereInput
  }

  /**
   * Pago.Tarjeta
   */
  export type Pago$TarjetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    where?: TarjetaWhereInput
  }

  /**
   * Pago without action
   */
  export type PagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
  }


  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolMinAggregateOutputType = {
    Rol: string | null
    id_rol: string | null
  }

  export type RolMaxAggregateOutputType = {
    Rol: string | null
    id_rol: string | null
  }

  export type RolCountAggregateOutputType = {
    Rol: number
    id_rol: number
    _all: number
  }


  export type RolMinAggregateInputType = {
    Rol?: true
    id_rol?: true
  }

  export type RolMaxAggregateInputType = {
    Rol?: true
    id_rol?: true
  }

  export type RolCountAggregateInputType = {
    Rol?: true
    id_rol?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    Rol: string
    id_rol: string
    _count: RolCountAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Rol?: boolean
    id_rol?: boolean
    Usuario_Usuario_RolToRol?: boolean | Rol$Usuario_Usuario_RolToRolArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Rol?: boolean
    id_rol?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Rol?: boolean
    id_rol?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    Rol?: boolean
    id_rol?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Rol" | "id_rol", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario_Usuario_RolToRol?: boolean | Rol$Usuario_Usuario_RolToRolArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      Usuario_Usuario_RolToRol: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Rol: string
      id_rol: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `Rol`
     * const rolWithRolOnly = await prisma.rol.findMany({ select: { Rol: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `Rol`
     * const rolWithRolOnly = await prisma.rol.createManyAndReturn({
     *   select: { Rol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `Rol`
     * const rolWithRolOnly = await prisma.rol.updateManyAndReturn({
     *   select: { Rol: true },
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
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario_Usuario_RolToRol<T extends Rol$Usuario_Usuario_RolToRolArgs<ExtArgs> = {}>(args?: Subset<T, Rol$Usuario_Usuario_RolToRolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly Rol: FieldRef<"Rol", 'String'>
    readonly id_rol: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.Usuario_Usuario_RolToRol
   */
  export type Rol$Usuario_Usuario_RolToRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Servicio
   */

  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioAvgAggregateOutputType = {
    Id_Servicio: number | null
    Precio: Decimal | null
  }

  export type ServicioSumAggregateOutputType = {
    Id_Servicio: number | null
    Precio: Decimal | null
  }

  export type ServicioMinAggregateOutputType = {
    Id_Servicio: number | null
    Nombre_Servicio: string | null
    Descripcion: string | null
    Precio: Decimal | null
    Duracion: Date | null
  }

  export type ServicioMaxAggregateOutputType = {
    Id_Servicio: number | null
    Nombre_Servicio: string | null
    Descripcion: string | null
    Precio: Decimal | null
    Duracion: Date | null
  }

  export type ServicioCountAggregateOutputType = {
    Id_Servicio: number
    Nombre_Servicio: number
    Descripcion: number
    Precio: number
    Duracion: number
    _all: number
  }


  export type ServicioAvgAggregateInputType = {
    Id_Servicio?: true
    Precio?: true
  }

  export type ServicioSumAggregateInputType = {
    Id_Servicio?: true
    Precio?: true
  }

  export type ServicioMinAggregateInputType = {
    Id_Servicio?: true
    Nombre_Servicio?: true
    Descripcion?: true
    Precio?: true
    Duracion?: true
  }

  export type ServicioMaxAggregateInputType = {
    Id_Servicio?: true
    Nombre_Servicio?: true
    Descripcion?: true
    Precio?: true
    Duracion?: true
  }

  export type ServicioCountAggregateInputType = {
    Id_Servicio?: true
    Nombre_Servicio?: true
    Descripcion?: true
    Precio?: true
    Duracion?: true
    _all?: true
  }

  export type ServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicio to aggregate.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type ServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithAggregationInput | ServicioOrderByWithAggregationInput[]
    by: ServicioScalarFieldEnum[] | ServicioScalarFieldEnum
    having?: ServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _avg?: ServicioAvgAggregateInputType
    _sum?: ServicioSumAggregateInputType
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }

  export type ServicioGroupByOutputType = {
    Id_Servicio: number
    Nombre_Servicio: string
    Descripcion: string | null
    Precio: Decimal
    Duracion: Date
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type ServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_Servicio?: boolean
    Nombre_Servicio?: boolean
    Descripcion?: boolean
    Precio?: boolean
    Duracion?: boolean
    Citas?: boolean | Servicio$CitasArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_Servicio?: boolean
    Nombre_Servicio?: boolean
    Descripcion?: boolean
    Precio?: boolean
    Duracion?: boolean
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id_Servicio?: boolean
    Nombre_Servicio?: boolean
    Descripcion?: boolean
    Precio?: boolean
    Duracion?: boolean
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectScalar = {
    Id_Servicio?: boolean
    Nombre_Servicio?: boolean
    Descripcion?: boolean
    Precio?: boolean
    Duracion?: boolean
  }

  export type ServicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id_Servicio" | "Nombre_Servicio" | "Descripcion" | "Precio" | "Duracion", ExtArgs["result"]["servicio"]>
  export type ServicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Citas?: boolean | Servicio$CitasArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servicio"
    objects: {
      Citas: Prisma.$CitasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id_Servicio: number
      Nombre_Servicio: string
      Descripcion: string | null
      Precio: Prisma.Decimal
      Duracion: Date
    }, ExtArgs["result"]["servicio"]>
    composites: {}
  }

  type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = $Result.GetResult<Prisma.$ServicioPayload, S>

  type ServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface ServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicio'], meta: { name: 'Servicio' } }
    /**
     * Find zero or one Servicio that matches the filter.
     * @param {ServicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioFindUniqueArgs>(args: SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioFindFirstArgs>(args?: SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `Id_Servicio`
     * const servicioWithId_ServicioOnly = await prisma.servicio.findMany({ select: { Id_Servicio: true } })
     * 
     */
    findMany<T extends ServicioFindManyArgs>(args?: SelectSubset<T, ServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicio.
     * @param {ServicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
     */
    create<T extends ServicioCreateArgs>(args: SelectSubset<T, ServicioCreateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicios.
     * @param {ServicioCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioCreateManyArgs>(args?: SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicios and returns the data saved in the database.
     * @param {ServicioCreateManyAndReturnArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicios and only return the `Id_Servicio`
     * const servicioWithId_ServicioOnly = await prisma.servicio.createManyAndReturn({
     *   select: { Id_Servicio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicioCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicio.
     * @param {ServicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
     */
    delete<T extends ServicioDeleteArgs>(args: SelectSubset<T, ServicioDeleteArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicio.
     * @param {ServicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioUpdateArgs>(args: SelectSubset<T, ServicioUpdateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicios.
     * @param {ServicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioDeleteManyArgs>(args?: SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioUpdateManyArgs>(args: SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios and returns the data updated in the database.
     * @param {ServicioUpdateManyAndReturnArgs} args - Arguments to update many Servicios.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicios and only return the `Id_Servicio`
     * const servicioWithId_ServicioOnly = await prisma.servicio.updateManyAndReturn({
     *   select: { Id_Servicio: true },
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
    updateManyAndReturn<T extends ServicioUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicio.
     * @param {ServicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
     */
    upsert<T extends ServicioUpsertArgs>(args: SelectSubset<T, ServicioUpsertArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends ServicioCountArgs>(
      args?: Subset<T, ServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioGroupByArgs} args - Group by arguments.
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
      T extends ServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioGroupByArgs['orderBy'] }
        : { orderBy?: ServicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicio model
   */
  readonly fields: ServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Citas<T extends Servicio$CitasArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$CitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Servicio model
   */
  interface ServicioFieldRefs {
    readonly Id_Servicio: FieldRef<"Servicio", 'Int'>
    readonly Nombre_Servicio: FieldRef<"Servicio", 'String'>
    readonly Descripcion: FieldRef<"Servicio", 'String'>
    readonly Precio: FieldRef<"Servicio", 'Decimal'>
    readonly Duracion: FieldRef<"Servicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Servicio findUnique
   */
  export type ServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findUniqueOrThrow
   */
  export type ServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findFirst
   */
  export type ServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findFirstOrThrow
   */
  export type ServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findMany
   */
  export type ServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicios to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio create
   */
  export type ServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicio.
     */
    data: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
  }

  /**
   * Servicio createMany
   */
  export type ServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio createManyAndReturn
   */
  export type ServicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio update
   */
  export type ServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicio.
     */
    data: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
    /**
     * Choose, which Servicio to update.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio updateMany
   */
  export type ServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio updateManyAndReturn
   */
  export type ServicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio upsert
   */
  export type ServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicio to update in case it exists.
     */
    where: ServicioWhereUniqueInput
    /**
     * In case the Servicio found by the `where` argument doesn't exist, create a new Servicio with this data.
     */
    create: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
    /**
     * In case the Servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
  }

  /**
   * Servicio delete
   */
  export type ServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter which Servicio to delete.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio deleteMany
   */
  export type ServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicios to delete
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to delete.
     */
    limit?: number
  }

  /**
   * Servicio.Citas
   */
  export type Servicio$CitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    where?: CitasWhereInput
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    cursor?: CitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * Servicio without action
   */
  export type ServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
  }


  /**
   * Model Tarjeta
   */

  export type AggregateTarjeta = {
    _count: TarjetaCountAggregateOutputType | null
    _min: TarjetaMinAggregateOutputType | null
    _max: TarjetaMaxAggregateOutputType | null
  }

  export type TarjetaMinAggregateOutputType = {
    created_at: Date | null
    numero_tarjeta: string | null
    titular: string | null
    vencimiento: Date | null
    id_cliente: string | null
    id_tarjeta: string | null
  }

  export type TarjetaMaxAggregateOutputType = {
    created_at: Date | null
    numero_tarjeta: string | null
    titular: string | null
    vencimiento: Date | null
    id_cliente: string | null
    id_tarjeta: string | null
  }

  export type TarjetaCountAggregateOutputType = {
    created_at: number
    numero_tarjeta: number
    titular: number
    vencimiento: number
    id_cliente: number
    id_tarjeta: number
    _all: number
  }


  export type TarjetaMinAggregateInputType = {
    created_at?: true
    numero_tarjeta?: true
    titular?: true
    vencimiento?: true
    id_cliente?: true
    id_tarjeta?: true
  }

  export type TarjetaMaxAggregateInputType = {
    created_at?: true
    numero_tarjeta?: true
    titular?: true
    vencimiento?: true
    id_cliente?: true
    id_tarjeta?: true
  }

  export type TarjetaCountAggregateInputType = {
    created_at?: true
    numero_tarjeta?: true
    titular?: true
    vencimiento?: true
    id_cliente?: true
    id_tarjeta?: true
    _all?: true
  }

  export type TarjetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarjeta to aggregate.
     */
    where?: TarjetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarjetas to fetch.
     */
    orderBy?: TarjetaOrderByWithRelationInput | TarjetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TarjetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarjetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarjetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tarjetas
    **/
    _count?: true | TarjetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarjetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarjetaMaxAggregateInputType
  }

  export type GetTarjetaAggregateType<T extends TarjetaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarjeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarjeta[P]>
      : GetScalarType<T[P], AggregateTarjeta[P]>
  }




  export type TarjetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarjetaWhereInput
    orderBy?: TarjetaOrderByWithAggregationInput | TarjetaOrderByWithAggregationInput[]
    by: TarjetaScalarFieldEnum[] | TarjetaScalarFieldEnum
    having?: TarjetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarjetaCountAggregateInputType | true
    _min?: TarjetaMinAggregateInputType
    _max?: TarjetaMaxAggregateInputType
  }

  export type TarjetaGroupByOutputType = {
    created_at: Date
    numero_tarjeta: string
    titular: string
    vencimiento: Date
    id_cliente: string
    id_tarjeta: string
    _count: TarjetaCountAggregateOutputType | null
    _min: TarjetaMinAggregateOutputType | null
    _max: TarjetaMaxAggregateOutputType | null
  }

  type GetTarjetaGroupByPayload<T extends TarjetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarjetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarjetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarjetaGroupByOutputType[P]>
            : GetScalarType<T[P], TarjetaGroupByOutputType[P]>
        }
      >
    >


  export type TarjetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    numero_tarjeta?: boolean
    titular?: boolean
    vencimiento?: boolean
    id_cliente?: boolean
    id_tarjeta?: boolean
    Pago?: boolean | Tarjeta$PagoArgs<ExtArgs>
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | TarjetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarjeta"]>

  export type TarjetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    numero_tarjeta?: boolean
    titular?: boolean
    vencimiento?: boolean
    id_cliente?: boolean
    id_tarjeta?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarjeta"]>

  export type TarjetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    numero_tarjeta?: boolean
    titular?: boolean
    vencimiento?: boolean
    id_cliente?: boolean
    id_tarjeta?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarjeta"]>

  export type TarjetaSelectScalar = {
    created_at?: boolean
    numero_tarjeta?: boolean
    titular?: boolean
    vencimiento?: boolean
    id_cliente?: boolean
    id_tarjeta?: boolean
  }

  export type TarjetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"created_at" | "numero_tarjeta" | "titular" | "vencimiento" | "id_cliente" | "id_tarjeta", ExtArgs["result"]["tarjeta"]>
  export type TarjetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pago?: boolean | Tarjeta$PagoArgs<ExtArgs>
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | TarjetaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TarjetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type TarjetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $TarjetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tarjeta"
    objects: {
      Pago: Prisma.$PagoPayload<ExtArgs>[]
      Usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      created_at: Date
      numero_tarjeta: string
      titular: string
      vencimiento: Date
      id_cliente: string
      id_tarjeta: string
    }, ExtArgs["result"]["tarjeta"]>
    composites: {}
  }

  type TarjetaGetPayload<S extends boolean | null | undefined | TarjetaDefaultArgs> = $Result.GetResult<Prisma.$TarjetaPayload, S>

  type TarjetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TarjetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarjetaCountAggregateInputType | true
    }

  export interface TarjetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tarjeta'], meta: { name: 'Tarjeta' } }
    /**
     * Find zero or one Tarjeta that matches the filter.
     * @param {TarjetaFindUniqueArgs} args - Arguments to find a Tarjeta
     * @example
     * // Get one Tarjeta
     * const tarjeta = await prisma.tarjeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TarjetaFindUniqueArgs>(args: SelectSubset<T, TarjetaFindUniqueArgs<ExtArgs>>): Prisma__TarjetaClient<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarjeta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TarjetaFindUniqueOrThrowArgs} args - Arguments to find a Tarjeta
     * @example
     * // Get one Tarjeta
     * const tarjeta = await prisma.tarjeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TarjetaFindUniqueOrThrowArgs>(args: SelectSubset<T, TarjetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TarjetaClient<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarjeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaFindFirstArgs} args - Arguments to find a Tarjeta
     * @example
     * // Get one Tarjeta
     * const tarjeta = await prisma.tarjeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TarjetaFindFirstArgs>(args?: SelectSubset<T, TarjetaFindFirstArgs<ExtArgs>>): Prisma__TarjetaClient<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarjeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaFindFirstOrThrowArgs} args - Arguments to find a Tarjeta
     * @example
     * // Get one Tarjeta
     * const tarjeta = await prisma.tarjeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TarjetaFindFirstOrThrowArgs>(args?: SelectSubset<T, TarjetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TarjetaClient<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tarjetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tarjetas
     * const tarjetas = await prisma.tarjeta.findMany()
     * 
     * // Get first 10 Tarjetas
     * const tarjetas = await prisma.tarjeta.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const tarjetaWithCreated_atOnly = await prisma.tarjeta.findMany({ select: { created_at: true } })
     * 
     */
    findMany<T extends TarjetaFindManyArgs>(args?: SelectSubset<T, TarjetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarjeta.
     * @param {TarjetaCreateArgs} args - Arguments to create a Tarjeta.
     * @example
     * // Create one Tarjeta
     * const Tarjeta = await prisma.tarjeta.create({
     *   data: {
     *     // ... data to create a Tarjeta
     *   }
     * })
     * 
     */
    create<T extends TarjetaCreateArgs>(args: SelectSubset<T, TarjetaCreateArgs<ExtArgs>>): Prisma__TarjetaClient<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tarjetas.
     * @param {TarjetaCreateManyArgs} args - Arguments to create many Tarjetas.
     * @example
     * // Create many Tarjetas
     * const tarjeta = await prisma.tarjeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TarjetaCreateManyArgs>(args?: SelectSubset<T, TarjetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tarjetas and returns the data saved in the database.
     * @param {TarjetaCreateManyAndReturnArgs} args - Arguments to create many Tarjetas.
     * @example
     * // Create many Tarjetas
     * const tarjeta = await prisma.tarjeta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tarjetas and only return the `created_at`
     * const tarjetaWithCreated_atOnly = await prisma.tarjeta.createManyAndReturn({
     *   select: { created_at: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TarjetaCreateManyAndReturnArgs>(args?: SelectSubset<T, TarjetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tarjeta.
     * @param {TarjetaDeleteArgs} args - Arguments to delete one Tarjeta.
     * @example
     * // Delete one Tarjeta
     * const Tarjeta = await prisma.tarjeta.delete({
     *   where: {
     *     // ... filter to delete one Tarjeta
     *   }
     * })
     * 
     */
    delete<T extends TarjetaDeleteArgs>(args: SelectSubset<T, TarjetaDeleteArgs<ExtArgs>>): Prisma__TarjetaClient<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarjeta.
     * @param {TarjetaUpdateArgs} args - Arguments to update one Tarjeta.
     * @example
     * // Update one Tarjeta
     * const tarjeta = await prisma.tarjeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TarjetaUpdateArgs>(args: SelectSubset<T, TarjetaUpdateArgs<ExtArgs>>): Prisma__TarjetaClient<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tarjetas.
     * @param {TarjetaDeleteManyArgs} args - Arguments to filter Tarjetas to delete.
     * @example
     * // Delete a few Tarjetas
     * const { count } = await prisma.tarjeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TarjetaDeleteManyArgs>(args?: SelectSubset<T, TarjetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarjetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tarjetas
     * const tarjeta = await prisma.tarjeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TarjetaUpdateManyArgs>(args: SelectSubset<T, TarjetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarjetas and returns the data updated in the database.
     * @param {TarjetaUpdateManyAndReturnArgs} args - Arguments to update many Tarjetas.
     * @example
     * // Update many Tarjetas
     * const tarjeta = await prisma.tarjeta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tarjetas and only return the `created_at`
     * const tarjetaWithCreated_atOnly = await prisma.tarjeta.updateManyAndReturn({
     *   select: { created_at: true },
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
    updateManyAndReturn<T extends TarjetaUpdateManyAndReturnArgs>(args: SelectSubset<T, TarjetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tarjeta.
     * @param {TarjetaUpsertArgs} args - Arguments to update or create a Tarjeta.
     * @example
     * // Update or create a Tarjeta
     * const tarjeta = await prisma.tarjeta.upsert({
     *   create: {
     *     // ... data to create a Tarjeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarjeta we want to update
     *   }
     * })
     */
    upsert<T extends TarjetaUpsertArgs>(args: SelectSubset<T, TarjetaUpsertArgs<ExtArgs>>): Prisma__TarjetaClient<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tarjetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCountArgs} args - Arguments to filter Tarjetas to count.
     * @example
     * // Count the number of Tarjetas
     * const count = await prisma.tarjeta.count({
     *   where: {
     *     // ... the filter for the Tarjetas we want to count
     *   }
     * })
    **/
    count<T extends TarjetaCountArgs>(
      args?: Subset<T, TarjetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarjetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarjeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TarjetaAggregateArgs>(args: Subset<T, TarjetaAggregateArgs>): Prisma.PrismaPromise<GetTarjetaAggregateType<T>>

    /**
     * Group by Tarjeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaGroupByArgs} args - Group by arguments.
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
      T extends TarjetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TarjetaGroupByArgs['orderBy'] }
        : { orderBy?: TarjetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TarjetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarjetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tarjeta model
   */
  readonly fields: TarjetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tarjeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TarjetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pago<T extends Tarjeta$PagoArgs<ExtArgs> = {}>(args?: Subset<T, Tarjeta$PagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tarjeta model
   */
  interface TarjetaFieldRefs {
    readonly created_at: FieldRef<"Tarjeta", 'DateTime'>
    readonly numero_tarjeta: FieldRef<"Tarjeta", 'String'>
    readonly titular: FieldRef<"Tarjeta", 'String'>
    readonly vencimiento: FieldRef<"Tarjeta", 'DateTime'>
    readonly id_cliente: FieldRef<"Tarjeta", 'String'>
    readonly id_tarjeta: FieldRef<"Tarjeta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tarjeta findUnique
   */
  export type TarjetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    /**
     * Filter, which Tarjeta to fetch.
     */
    where: TarjetaWhereUniqueInput
  }

  /**
   * Tarjeta findUniqueOrThrow
   */
  export type TarjetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    /**
     * Filter, which Tarjeta to fetch.
     */
    where: TarjetaWhereUniqueInput
  }

  /**
   * Tarjeta findFirst
   */
  export type TarjetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    /**
     * Filter, which Tarjeta to fetch.
     */
    where?: TarjetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarjetas to fetch.
     */
    orderBy?: TarjetaOrderByWithRelationInput | TarjetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarjetas.
     */
    cursor?: TarjetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarjetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarjetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarjetas.
     */
    distinct?: TarjetaScalarFieldEnum | TarjetaScalarFieldEnum[]
  }

  /**
   * Tarjeta findFirstOrThrow
   */
  export type TarjetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    /**
     * Filter, which Tarjeta to fetch.
     */
    where?: TarjetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarjetas to fetch.
     */
    orderBy?: TarjetaOrderByWithRelationInput | TarjetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarjetas.
     */
    cursor?: TarjetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarjetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarjetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarjetas.
     */
    distinct?: TarjetaScalarFieldEnum | TarjetaScalarFieldEnum[]
  }

  /**
   * Tarjeta findMany
   */
  export type TarjetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    /**
     * Filter, which Tarjetas to fetch.
     */
    where?: TarjetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarjetas to fetch.
     */
    orderBy?: TarjetaOrderByWithRelationInput | TarjetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tarjetas.
     */
    cursor?: TarjetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarjetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarjetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarjetas.
     */
    distinct?: TarjetaScalarFieldEnum | TarjetaScalarFieldEnum[]
  }

  /**
   * Tarjeta create
   */
  export type TarjetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tarjeta.
     */
    data: XOR<TarjetaCreateInput, TarjetaUncheckedCreateInput>
  }

  /**
   * Tarjeta createMany
   */
  export type TarjetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tarjetas.
     */
    data: TarjetaCreateManyInput | TarjetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tarjeta createManyAndReturn
   */
  export type TarjetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * The data used to create many Tarjetas.
     */
    data: TarjetaCreateManyInput | TarjetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarjeta update
   */
  export type TarjetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tarjeta.
     */
    data: XOR<TarjetaUpdateInput, TarjetaUncheckedUpdateInput>
    /**
     * Choose, which Tarjeta to update.
     */
    where: TarjetaWhereUniqueInput
  }

  /**
   * Tarjeta updateMany
   */
  export type TarjetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tarjetas.
     */
    data: XOR<TarjetaUpdateManyMutationInput, TarjetaUncheckedUpdateManyInput>
    /**
     * Filter which Tarjetas to update
     */
    where?: TarjetaWhereInput
    /**
     * Limit how many Tarjetas to update.
     */
    limit?: number
  }

  /**
   * Tarjeta updateManyAndReturn
   */
  export type TarjetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * The data used to update Tarjetas.
     */
    data: XOR<TarjetaUpdateManyMutationInput, TarjetaUncheckedUpdateManyInput>
    /**
     * Filter which Tarjetas to update
     */
    where?: TarjetaWhereInput
    /**
     * Limit how many Tarjetas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarjeta upsert
   */
  export type TarjetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tarjeta to update in case it exists.
     */
    where: TarjetaWhereUniqueInput
    /**
     * In case the Tarjeta found by the `where` argument doesn't exist, create a new Tarjeta with this data.
     */
    create: XOR<TarjetaCreateInput, TarjetaUncheckedCreateInput>
    /**
     * In case the Tarjeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TarjetaUpdateInput, TarjetaUncheckedUpdateInput>
  }

  /**
   * Tarjeta delete
   */
  export type TarjetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    /**
     * Filter which Tarjeta to delete.
     */
    where: TarjetaWhereUniqueInput
  }

  /**
   * Tarjeta deleteMany
   */
  export type TarjetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarjetas to delete
     */
    where?: TarjetaWhereInput
    /**
     * Limit how many Tarjetas to delete.
     */
    limit?: number
  }

  /**
   * Tarjeta.Pago
   */
  export type Tarjeta$PagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Tarjeta without action
   */
  export type TarjetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    Nombre: string | null
    Apellido: string | null
    Email: string | null
    Password: string | null
    Fecha_de_registro: Date | null
    Activo: boolean | null
    telefono: string | null
    Id_usuario: string | null
    Rol: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    Nombre: string | null
    Apellido: string | null
    Email: string | null
    Password: string | null
    Fecha_de_registro: Date | null
    Activo: boolean | null
    telefono: string | null
    Id_usuario: string | null
    Rol: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    Nombre: number
    Apellido: number
    Email: number
    Password: number
    Fecha_de_registro: number
    Activo: number
    telefono: number
    Id_usuario: number
    Rol: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    Nombre?: true
    Apellido?: true
    Email?: true
    Password?: true
    Fecha_de_registro?: true
    Activo?: true
    telefono?: true
    Id_usuario?: true
    Rol?: true
  }

  export type UsuarioMaxAggregateInputType = {
    Nombre?: true
    Apellido?: true
    Email?: true
    Password?: true
    Fecha_de_registro?: true
    Activo?: true
    telefono?: true
    Id_usuario?: true
    Rol?: true
  }

  export type UsuarioCountAggregateInputType = {
    Nombre?: true
    Apellido?: true
    Email?: true
    Password?: true
    Fecha_de_registro?: true
    Activo?: true
    telefono?: true
    Id_usuario?: true
    Rol?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro: Date | null
    Activo: boolean | null
    telefono: string | null
    Id_usuario: string
    Rol: string | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Nombre?: boolean
    Apellido?: boolean
    Email?: boolean
    Password?: boolean
    Fecha_de_registro?: boolean
    Activo?: boolean
    telefono?: boolean
    Id_usuario?: boolean
    Rol?: boolean
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: boolean | Usuario$Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioArgs<ExtArgs>
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: boolean | Usuario$Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioArgs<ExtArgs>
    Citas_Citas_Id_clienteToUsuario?: boolean | Usuario$Citas_Citas_Id_clienteToUsuarioArgs<ExtArgs>
    Citas_Citas_Id_estilistaToUsuario?: boolean | Usuario$Citas_Citas_Id_estilistaToUsuarioArgs<ExtArgs>
    Tarjeta?: boolean | Usuario$TarjetaArgs<ExtArgs>
    Rol_Usuario_RolToRol?: boolean | Usuario$Rol_Usuario_RolToRolArgs<ExtArgs>
    token?: boolean | Usuario$tokenArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Nombre?: boolean
    Apellido?: boolean
    Email?: boolean
    Password?: boolean
    Fecha_de_registro?: boolean
    Activo?: boolean
    telefono?: boolean
    Id_usuario?: boolean
    Rol?: boolean
    Rol_Usuario_RolToRol?: boolean | Usuario$Rol_Usuario_RolToRolArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Nombre?: boolean
    Apellido?: boolean
    Email?: boolean
    Password?: boolean
    Fecha_de_registro?: boolean
    Activo?: boolean
    telefono?: boolean
    Id_usuario?: boolean
    Rol?: boolean
    Rol_Usuario_RolToRol?: boolean | Usuario$Rol_Usuario_RolToRolArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    Nombre?: boolean
    Apellido?: boolean
    Email?: boolean
    Password?: boolean
    Fecha_de_registro?: boolean
    Activo?: boolean
    telefono?: boolean
    Id_usuario?: boolean
    Rol?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Nombre" | "Apellido" | "Email" | "Password" | "Fecha_de_registro" | "Activo" | "telefono" | "Id_usuario" | "Rol", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: boolean | Usuario$Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioArgs<ExtArgs>
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: boolean | Usuario$Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioArgs<ExtArgs>
    Citas_Citas_Id_clienteToUsuario?: boolean | Usuario$Citas_Citas_Id_clienteToUsuarioArgs<ExtArgs>
    Citas_Citas_Id_estilistaToUsuario?: boolean | Usuario$Citas_Citas_Id_estilistaToUsuarioArgs<ExtArgs>
    Tarjeta?: boolean | Usuario$TarjetaArgs<ExtArgs>
    Rol_Usuario_RolToRol?: boolean | Usuario$Rol_Usuario_RolToRolArgs<ExtArgs>
    token?: boolean | Usuario$tokenArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rol_Usuario_RolToRol?: boolean | Usuario$Rol_Usuario_RolToRolArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rol_Usuario_RolToRol?: boolean | Usuario$Rol_Usuario_RolToRolArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario: Prisma.$Bloqueo_TemporalPayload<ExtArgs>[]
      Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario: Prisma.$Bloqueo_TemporalPayload<ExtArgs>[]
      Citas_Citas_Id_clienteToUsuario: Prisma.$CitasPayload<ExtArgs>[]
      Citas_Citas_Id_estilistaToUsuario: Prisma.$CitasPayload<ExtArgs>[]
      Tarjeta: Prisma.$TarjetaPayload<ExtArgs>[]
      Rol_Usuario_RolToRol: Prisma.$RolPayload<ExtArgs> | null
      token: Prisma.$tokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Nombre: string
      Apellido: string
      Email: string
      Password: string
      Fecha_de_registro: Date | null
      Activo: boolean | null
      telefono: string | null
      Id_usuario: string
      Rol: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `Nombre`
     * const usuarioWithNombreOnly = await prisma.usuario.findMany({ select: { Nombre: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `Nombre`
     * const usuarioWithNombreOnly = await prisma.usuario.createManyAndReturn({
     *   select: { Nombre: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `Nombre`
     * const usuarioWithNombreOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { Nombre: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario<T extends Usuario$Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario<T extends Usuario$Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bloqueo_TemporalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Citas_Citas_Id_clienteToUsuario<T extends Usuario$Citas_Citas_Id_clienteToUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$Citas_Citas_Id_clienteToUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Citas_Citas_Id_estilistaToUsuario<T extends Usuario$Citas_Citas_Id_estilistaToUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$Citas_Citas_Id_estilistaToUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tarjeta<T extends Usuario$TarjetaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$TarjetaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarjetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rol_Usuario_RolToRol<T extends Usuario$Rol_Usuario_RolToRolArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$Rol_Usuario_RolToRolArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    token<T extends Usuario$tokenArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly Nombre: FieldRef<"Usuario", 'String'>
    readonly Apellido: FieldRef<"Usuario", 'String'>
    readonly Email: FieldRef<"Usuario", 'String'>
    readonly Password: FieldRef<"Usuario", 'String'>
    readonly Fecha_de_registro: FieldRef<"Usuario", 'DateTime'>
    readonly Activo: FieldRef<"Usuario", 'Boolean'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly Id_usuario: FieldRef<"Usuario", 'String'>
    readonly Rol: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario
   */
  export type Usuario$Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    where?: Bloqueo_TemporalWhereInput
    orderBy?: Bloqueo_TemporalOrderByWithRelationInput | Bloqueo_TemporalOrderByWithRelationInput[]
    cursor?: Bloqueo_TemporalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bloqueo_TemporalScalarFieldEnum | Bloqueo_TemporalScalarFieldEnum[]
  }

  /**
   * Usuario.Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario
   */
  export type Usuario$Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueo_Temporal
     */
    select?: Bloqueo_TemporalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueo_Temporal
     */
    omit?: Bloqueo_TemporalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bloqueo_TemporalInclude<ExtArgs> | null
    where?: Bloqueo_TemporalWhereInput
    orderBy?: Bloqueo_TemporalOrderByWithRelationInput | Bloqueo_TemporalOrderByWithRelationInput[]
    cursor?: Bloqueo_TemporalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bloqueo_TemporalScalarFieldEnum | Bloqueo_TemporalScalarFieldEnum[]
  }

  /**
   * Usuario.Citas_Citas_Id_clienteToUsuario
   */
  export type Usuario$Citas_Citas_Id_clienteToUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    where?: CitasWhereInput
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    cursor?: CitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * Usuario.Citas_Citas_Id_estilistaToUsuario
   */
  export type Usuario$Citas_Citas_Id_estilistaToUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citas
     */
    select?: CitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citas
     */
    omit?: CitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitasInclude<ExtArgs> | null
    where?: CitasWhereInput
    orderBy?: CitasOrderByWithRelationInput | CitasOrderByWithRelationInput[]
    cursor?: CitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * Usuario.Tarjeta
   */
  export type Usuario$TarjetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarjeta
     */
    select?: TarjetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarjeta
     */
    omit?: TarjetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaInclude<ExtArgs> | null
    where?: TarjetaWhereInput
    orderBy?: TarjetaOrderByWithRelationInput | TarjetaOrderByWithRelationInput[]
    cursor?: TarjetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarjetaScalarFieldEnum | TarjetaScalarFieldEnum[]
  }

  /**
   * Usuario.Rol_Usuario_RolToRol
   */
  export type Usuario$Rol_Usuario_RolToRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    where?: RolWhereInput
  }

  /**
   * Usuario.token
   */
  export type Usuario$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    where?: tokenWhereInput
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    cursor?: tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    Id_usuario: string | null
    token: string | null
    expired_at: Date | null
    revoked_at: Date | null
    user_agent: string | null
    ip_adress: string | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    Id_usuario: string | null
    token: string | null
    expired_at: Date | null
    revoked_at: Date | null
    user_agent: string | null
    ip_adress: string | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    created_at: number
    Id_usuario: number
    token: number
    expired_at: number
    revoked_at: number
    user_agent: number
    ip_adress: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    created_at?: true
    Id_usuario?: true
    token?: true
    expired_at?: true
    revoked_at?: true
    user_agent?: true
    ip_adress?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    created_at?: true
    Id_usuario?: true
    token?: true
    expired_at?: true
    revoked_at?: true
    user_agent?: true
    ip_adress?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    created_at?: true
    Id_usuario?: true
    token?: true
    expired_at?: true
    revoked_at?: true
    user_agent?: true
    ip_adress?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token to aggregate.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokenWhereInput
    orderBy?: tokenOrderByWithAggregationInput | tokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    created_at: Date
    Id_usuario: string
    token: string
    expired_at: Date
    revoked_at: Date | null
    user_agent: string | null
    ip_adress: string | null
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    Id_usuario?: boolean
    token?: boolean
    expired_at?: boolean
    revoked_at?: boolean
    user_agent?: boolean
    ip_adress?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type tokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    Id_usuario?: boolean
    token?: boolean
    expired_at?: boolean
    revoked_at?: boolean
    user_agent?: boolean
    ip_adress?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type tokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    Id_usuario?: boolean
    token?: boolean
    expired_at?: boolean
    revoked_at?: boolean
    user_agent?: boolean
    ip_adress?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type tokenSelectScalar = {
    id?: boolean
    created_at?: boolean
    Id_usuario?: boolean
    token?: boolean
    expired_at?: boolean
    revoked_at?: boolean
    user_agent?: boolean
    ip_adress?: boolean
  }

  export type tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "Id_usuario" | "token" | "expired_at" | "revoked_at" | "user_agent" | "ip_adress", ExtArgs["result"]["token"]>
  export type tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type tokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type tokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "token"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      Id_usuario: string
      token: string
      expired_at: Date
      revoked_at: Date | null
      user_agent: string | null
      ip_adress: string | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type tokenGetPayload<S extends boolean | null | undefined | tokenDefaultArgs> = $Result.GetResult<Prisma.$tokenPayload, S>

  type tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['token'], meta: { name: 'token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {tokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tokenFindUniqueArgs>(args: SelectSubset<T, tokenFindUniqueArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tokenFindFirstArgs>(args?: SelectSubset<T, tokenFindFirstArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tokenFindManyArgs>(args?: SelectSubset<T, tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {tokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends tokenCreateArgs>(args: SelectSubset<T, tokenCreateArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {tokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tokenCreateManyArgs>(args?: SelectSubset<T, tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {tokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tokenCreateManyAndReturnArgs>(args?: SelectSubset<T, tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {tokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends tokenDeleteArgs>(args: SelectSubset<T, tokenDeleteArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {tokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tokenUpdateArgs>(args: SelectSubset<T, tokenUpdateArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {tokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tokenDeleteManyArgs>(args?: SelectSubset<T, tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tokenUpdateManyArgs>(args: SelectSubset<T, tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {tokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends tokenUpdateManyAndReturnArgs>(args: SelectSubset<T, tokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {tokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends tokenUpsertArgs>(args: SelectSubset<T, tokenUpsertArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends tokenCountArgs>(
      args?: Subset<T, tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenGroupByArgs} args - Group by arguments.
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
      T extends tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokenGroupByArgs['orderBy'] }
        : { orderBy?: tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the token model
   */
  readonly fields: tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the token model
   */
  interface tokenFieldRefs {
    readonly id: FieldRef<"token", 'String'>
    readonly created_at: FieldRef<"token", 'DateTime'>
    readonly Id_usuario: FieldRef<"token", 'String'>
    readonly token: FieldRef<"token", 'String'>
    readonly expired_at: FieldRef<"token", 'DateTime'>
    readonly revoked_at: FieldRef<"token", 'DateTime'>
    readonly user_agent: FieldRef<"token", 'String'>
    readonly ip_adress: FieldRef<"token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * token findUnique
   */
  export type tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token findUniqueOrThrow
   */
  export type tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token findFirst
   */
  export type tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token findFirstOrThrow
   */
  export type tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token findMany
   */
  export type tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokens.
     */
    cursor?: tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token create
   */
  export type tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a token.
     */
    data: XOR<tokenCreateInput, tokenUncheckedCreateInput>
  }

  /**
   * token createMany
   */
  export type tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokens.
     */
    data: tokenCreateManyInput | tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token createManyAndReturn
   */
  export type tokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * The data used to create many tokens.
     */
    data: tokenCreateManyInput | tokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * token update
   */
  export type tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a token.
     */
    data: XOR<tokenUpdateInput, tokenUncheckedUpdateInput>
    /**
     * Choose, which token to update.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token updateMany
   */
  export type tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokens.
     */
    data: XOR<tokenUpdateManyMutationInput, tokenUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokenWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
  }

  /**
   * token updateManyAndReturn
   */
  export type tokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * The data used to update tokens.
     */
    data: XOR<tokenUpdateManyMutationInput, tokenUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokenWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * token upsert
   */
  export type tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the token to update in case it exists.
     */
    where: tokenWhereUniqueInput
    /**
     * In case the token found by the `where` argument doesn't exist, create a new token with this data.
     */
    create: XOR<tokenCreateInput, tokenUncheckedCreateInput>
    /**
     * In case the token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokenUpdateInput, tokenUncheckedUpdateInput>
  }

  /**
   * token delete
   */
  export type tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter which token to delete.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token deleteMany
   */
  export type tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to delete
     */
    where?: tokenWhereInput
    /**
     * Limit how many tokens to delete.
     */
    limit?: number
  }

  /**
   * token without action
   */
  export type tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
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


  export const Bloqueo_TemporalScalarFieldEnum: {
    Id_bloqueo: 'Id_bloqueo',
    Fecha_cita: 'Fecha_cita',
    Hora_inicio: 'Hora_inicio',
    Expira_en: 'Expira_en',
    Id_cliente: 'Id_cliente',
    Id_estilista: 'Id_estilista'
  };

  export type Bloqueo_TemporalScalarFieldEnum = (typeof Bloqueo_TemporalScalarFieldEnum)[keyof typeof Bloqueo_TemporalScalarFieldEnum]


  export const CitasScalarFieldEnum: {
    Id_cita: 'Id_cita',
    Id_servicio: 'Id_servicio',
    Fecha_cita: 'Fecha_cita',
    Hora_inicio: 'Hora_inicio',
    Estado_cita: 'Estado_cita',
    Id_cliente: 'Id_cliente',
    Id_estilista: 'Id_estilista'
  };

  export type CitasScalarFieldEnum = (typeof CitasScalarFieldEnum)[keyof typeof CitasScalarFieldEnum]


  export const Estado_citaScalarFieldEnum: {
    Id_estado_cita: 'Id_estado_cita',
    Estado: 'Estado'
  };

  export type Estado_citaScalarFieldEnum = (typeof Estado_citaScalarFieldEnum)[keyof typeof Estado_citaScalarFieldEnum]


  export const Estado_pagoScalarFieldEnum: {
    Id_estado_pago: 'Id_estado_pago',
    Estado: 'Estado'
  };

  export type Estado_pagoScalarFieldEnum = (typeof Estado_pagoScalarFieldEnum)[keyof typeof Estado_pagoScalarFieldEnum]


  export const Metodo_de_pagoScalarFieldEnum: {
    id_metodo_pago: 'id_metodo_pago',
    Metodo: 'Metodo'
  };

  export type Metodo_de_pagoScalarFieldEnum = (typeof Metodo_de_pagoScalarFieldEnum)[keyof typeof Metodo_de_pagoScalarFieldEnum]


  export const PagoScalarFieldEnum: {
    Id_cita: 'Id_cita',
    Monto: 'Monto',
    Id_Metodo_pago: 'Id_Metodo_pago',
    Fecha_Pago: 'Fecha_Pago',
    Id_Estado_pago: 'Id_Estado_pago',
    Id_pago: 'Id_pago',
    id_tarjeta: 'id_tarjeta'
  };

  export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum]


  export const RolScalarFieldEnum: {
    Rol: 'Rol',
    id_rol: 'id_rol'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const ServicioScalarFieldEnum: {
    Id_Servicio: 'Id_Servicio',
    Nombre_Servicio: 'Nombre_Servicio',
    Descripcion: 'Descripcion',
    Precio: 'Precio',
    Duracion: 'Duracion'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const TarjetaScalarFieldEnum: {
    created_at: 'created_at',
    numero_tarjeta: 'numero_tarjeta',
    titular: 'titular',
    vencimiento: 'vencimiento',
    id_cliente: 'id_cliente',
    id_tarjeta: 'id_tarjeta'
  };

  export type TarjetaScalarFieldEnum = (typeof TarjetaScalarFieldEnum)[keyof typeof TarjetaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    Nombre: 'Nombre',
    Apellido: 'Apellido',
    Email: 'Email',
    Password: 'Password',
    Fecha_de_registro: 'Fecha_de_registro',
    Activo: 'Activo',
    telefono: 'telefono',
    Id_usuario: 'Id_usuario',
    Rol: 'Rol'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    Id_usuario: 'Id_usuario',
    token: 'token',
    expired_at: 'expired_at',
    revoked_at: 'revoked_at',
    user_agent: 'user_agent',
    ip_adress: 'ip_adress'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
   * Deep Input Types
   */


  export type Bloqueo_TemporalWhereInput = {
    AND?: Bloqueo_TemporalWhereInput | Bloqueo_TemporalWhereInput[]
    OR?: Bloqueo_TemporalWhereInput[]
    NOT?: Bloqueo_TemporalWhereInput | Bloqueo_TemporalWhereInput[]
    Id_bloqueo?: IntFilter<"Bloqueo_Temporal"> | number
    Fecha_cita?: DateTimeFilter<"Bloqueo_Temporal"> | Date | string
    Hora_inicio?: DateTimeFilter<"Bloqueo_Temporal"> | Date | string
    Expira_en?: DateTimeNullableFilter<"Bloqueo_Temporal"> | Date | string | null
    Id_cliente?: UuidFilter<"Bloqueo_Temporal"> | string
    Id_estilista?: UuidFilter<"Bloqueo_Temporal"> | string
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type Bloqueo_TemporalOrderByWithRelationInput = {
    Id_bloqueo?: SortOrder
    Fecha_cita?: SortOrder
    Hora_inicio?: SortOrder
    Expira_en?: SortOrderInput | SortOrder
    Id_cliente?: SortOrder
    Id_estilista?: SortOrder
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: UsuarioOrderByWithRelationInput
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: UsuarioOrderByWithRelationInput
  }

  export type Bloqueo_TemporalWhereUniqueInput = Prisma.AtLeast<{
    Id_bloqueo?: number
    AND?: Bloqueo_TemporalWhereInput | Bloqueo_TemporalWhereInput[]
    OR?: Bloqueo_TemporalWhereInput[]
    NOT?: Bloqueo_TemporalWhereInput | Bloqueo_TemporalWhereInput[]
    Fecha_cita?: DateTimeFilter<"Bloqueo_Temporal"> | Date | string
    Hora_inicio?: DateTimeFilter<"Bloqueo_Temporal"> | Date | string
    Expira_en?: DateTimeNullableFilter<"Bloqueo_Temporal"> | Date | string | null
    Id_cliente?: UuidFilter<"Bloqueo_Temporal"> | string
    Id_estilista?: UuidFilter<"Bloqueo_Temporal"> | string
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "Id_bloqueo">

  export type Bloqueo_TemporalOrderByWithAggregationInput = {
    Id_bloqueo?: SortOrder
    Fecha_cita?: SortOrder
    Hora_inicio?: SortOrder
    Expira_en?: SortOrderInput | SortOrder
    Id_cliente?: SortOrder
    Id_estilista?: SortOrder
    _count?: Bloqueo_TemporalCountOrderByAggregateInput
    _avg?: Bloqueo_TemporalAvgOrderByAggregateInput
    _max?: Bloqueo_TemporalMaxOrderByAggregateInput
    _min?: Bloqueo_TemporalMinOrderByAggregateInput
    _sum?: Bloqueo_TemporalSumOrderByAggregateInput
  }

  export type Bloqueo_TemporalScalarWhereWithAggregatesInput = {
    AND?: Bloqueo_TemporalScalarWhereWithAggregatesInput | Bloqueo_TemporalScalarWhereWithAggregatesInput[]
    OR?: Bloqueo_TemporalScalarWhereWithAggregatesInput[]
    NOT?: Bloqueo_TemporalScalarWhereWithAggregatesInput | Bloqueo_TemporalScalarWhereWithAggregatesInput[]
    Id_bloqueo?: IntWithAggregatesFilter<"Bloqueo_Temporal"> | number
    Fecha_cita?: DateTimeWithAggregatesFilter<"Bloqueo_Temporal"> | Date | string
    Hora_inicio?: DateTimeWithAggregatesFilter<"Bloqueo_Temporal"> | Date | string
    Expira_en?: DateTimeNullableWithAggregatesFilter<"Bloqueo_Temporal"> | Date | string | null
    Id_cliente?: UuidWithAggregatesFilter<"Bloqueo_Temporal"> | string
    Id_estilista?: UuidWithAggregatesFilter<"Bloqueo_Temporal"> | string
  }

  export type CitasWhereInput = {
    AND?: CitasWhereInput | CitasWhereInput[]
    OR?: CitasWhereInput[]
    NOT?: CitasWhereInput | CitasWhereInput[]
    Id_cita?: IntFilter<"Citas"> | number
    Id_servicio?: IntNullableFilter<"Citas"> | number | null
    Fecha_cita?: DateTimeFilter<"Citas"> | Date | string
    Hora_inicio?: DateTimeFilter<"Citas"> | Date | string
    Estado_cita?: IntNullableFilter<"Citas"> | number | null
    Id_cliente?: UuidFilter<"Citas"> | string
    Id_estilista?: UuidFilter<"Citas"> | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: XOR<Estado_citaNullableScalarRelationFilter, Estado_citaWhereInput> | null
    Usuario_Citas_Id_clienteToUsuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Usuario_Citas_Id_estilistaToUsuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Servicio?: XOR<ServicioNullableScalarRelationFilter, ServicioWhereInput> | null
    Pago?: PagoListRelationFilter
  }

  export type CitasOrderByWithRelationInput = {
    Id_cita?: SortOrder
    Id_servicio?: SortOrderInput | SortOrder
    Fecha_cita?: SortOrder
    Hora_inicio?: SortOrder
    Estado_cita?: SortOrderInput | SortOrder
    Id_cliente?: SortOrder
    Id_estilista?: SortOrder
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaOrderByWithRelationInput
    Usuario_Citas_Id_clienteToUsuario?: UsuarioOrderByWithRelationInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioOrderByWithRelationInput
    Servicio?: ServicioOrderByWithRelationInput
    Pago?: PagoOrderByRelationAggregateInput
  }

  export type CitasWhereUniqueInput = Prisma.AtLeast<{
    Id_cita?: number
    AND?: CitasWhereInput | CitasWhereInput[]
    OR?: CitasWhereInput[]
    NOT?: CitasWhereInput | CitasWhereInput[]
    Id_servicio?: IntNullableFilter<"Citas"> | number | null
    Fecha_cita?: DateTimeFilter<"Citas"> | Date | string
    Hora_inicio?: DateTimeFilter<"Citas"> | Date | string
    Estado_cita?: IntNullableFilter<"Citas"> | number | null
    Id_cliente?: UuidFilter<"Citas"> | string
    Id_estilista?: UuidFilter<"Citas"> | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: XOR<Estado_citaNullableScalarRelationFilter, Estado_citaWhereInput> | null
    Usuario_Citas_Id_clienteToUsuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Usuario_Citas_Id_estilistaToUsuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Servicio?: XOR<ServicioNullableScalarRelationFilter, ServicioWhereInput> | null
    Pago?: PagoListRelationFilter
  }, "Id_cita">

  export type CitasOrderByWithAggregationInput = {
    Id_cita?: SortOrder
    Id_servicio?: SortOrderInput | SortOrder
    Fecha_cita?: SortOrder
    Hora_inicio?: SortOrder
    Estado_cita?: SortOrderInput | SortOrder
    Id_cliente?: SortOrder
    Id_estilista?: SortOrder
    _count?: CitasCountOrderByAggregateInput
    _avg?: CitasAvgOrderByAggregateInput
    _max?: CitasMaxOrderByAggregateInput
    _min?: CitasMinOrderByAggregateInput
    _sum?: CitasSumOrderByAggregateInput
  }

  export type CitasScalarWhereWithAggregatesInput = {
    AND?: CitasScalarWhereWithAggregatesInput | CitasScalarWhereWithAggregatesInput[]
    OR?: CitasScalarWhereWithAggregatesInput[]
    NOT?: CitasScalarWhereWithAggregatesInput | CitasScalarWhereWithAggregatesInput[]
    Id_cita?: IntWithAggregatesFilter<"Citas"> | number
    Id_servicio?: IntNullableWithAggregatesFilter<"Citas"> | number | null
    Fecha_cita?: DateTimeWithAggregatesFilter<"Citas"> | Date | string
    Hora_inicio?: DateTimeWithAggregatesFilter<"Citas"> | Date | string
    Estado_cita?: IntNullableWithAggregatesFilter<"Citas"> | number | null
    Id_cliente?: UuidWithAggregatesFilter<"Citas"> | string
    Id_estilista?: UuidWithAggregatesFilter<"Citas"> | string
  }

  export type Estado_citaWhereInput = {
    AND?: Estado_citaWhereInput | Estado_citaWhereInput[]
    OR?: Estado_citaWhereInput[]
    NOT?: Estado_citaWhereInput | Estado_citaWhereInput[]
    Id_estado_cita?: IntFilter<"Estado_cita"> | number
    Estado?: StringFilter<"Estado_cita"> | string
    Citas_Citas_Estado_citaToEstado_cita?: CitasListRelationFilter
  }

  export type Estado_citaOrderByWithRelationInput = {
    Id_estado_cita?: SortOrder
    Estado?: SortOrder
    Citas_Citas_Estado_citaToEstado_cita?: CitasOrderByRelationAggregateInput
  }

  export type Estado_citaWhereUniqueInput = Prisma.AtLeast<{
    Id_estado_cita?: number
    AND?: Estado_citaWhereInput | Estado_citaWhereInput[]
    OR?: Estado_citaWhereInput[]
    NOT?: Estado_citaWhereInput | Estado_citaWhereInput[]
    Estado?: StringFilter<"Estado_cita"> | string
    Citas_Citas_Estado_citaToEstado_cita?: CitasListRelationFilter
  }, "Id_estado_cita">

  export type Estado_citaOrderByWithAggregationInput = {
    Id_estado_cita?: SortOrder
    Estado?: SortOrder
    _count?: Estado_citaCountOrderByAggregateInput
    _avg?: Estado_citaAvgOrderByAggregateInput
    _max?: Estado_citaMaxOrderByAggregateInput
    _min?: Estado_citaMinOrderByAggregateInput
    _sum?: Estado_citaSumOrderByAggregateInput
  }

  export type Estado_citaScalarWhereWithAggregatesInput = {
    AND?: Estado_citaScalarWhereWithAggregatesInput | Estado_citaScalarWhereWithAggregatesInput[]
    OR?: Estado_citaScalarWhereWithAggregatesInput[]
    NOT?: Estado_citaScalarWhereWithAggregatesInput | Estado_citaScalarWhereWithAggregatesInput[]
    Id_estado_cita?: IntWithAggregatesFilter<"Estado_cita"> | number
    Estado?: StringWithAggregatesFilter<"Estado_cita"> | string
  }

  export type Estado_pagoWhereInput = {
    AND?: Estado_pagoWhereInput | Estado_pagoWhereInput[]
    OR?: Estado_pagoWhereInput[]
    NOT?: Estado_pagoWhereInput | Estado_pagoWhereInput[]
    Id_estado_pago?: IntFilter<"Estado_pago"> | number
    Estado?: StringFilter<"Estado_pago"> | string
    Pago?: PagoListRelationFilter
  }

  export type Estado_pagoOrderByWithRelationInput = {
    Id_estado_pago?: SortOrder
    Estado?: SortOrder
    Pago?: PagoOrderByRelationAggregateInput
  }

  export type Estado_pagoWhereUniqueInput = Prisma.AtLeast<{
    Id_estado_pago?: number
    AND?: Estado_pagoWhereInput | Estado_pagoWhereInput[]
    OR?: Estado_pagoWhereInput[]
    NOT?: Estado_pagoWhereInput | Estado_pagoWhereInput[]
    Estado?: StringFilter<"Estado_pago"> | string
    Pago?: PagoListRelationFilter
  }, "Id_estado_pago">

  export type Estado_pagoOrderByWithAggregationInput = {
    Id_estado_pago?: SortOrder
    Estado?: SortOrder
    _count?: Estado_pagoCountOrderByAggregateInput
    _avg?: Estado_pagoAvgOrderByAggregateInput
    _max?: Estado_pagoMaxOrderByAggregateInput
    _min?: Estado_pagoMinOrderByAggregateInput
    _sum?: Estado_pagoSumOrderByAggregateInput
  }

  export type Estado_pagoScalarWhereWithAggregatesInput = {
    AND?: Estado_pagoScalarWhereWithAggregatesInput | Estado_pagoScalarWhereWithAggregatesInput[]
    OR?: Estado_pagoScalarWhereWithAggregatesInput[]
    NOT?: Estado_pagoScalarWhereWithAggregatesInput | Estado_pagoScalarWhereWithAggregatesInput[]
    Id_estado_pago?: IntWithAggregatesFilter<"Estado_pago"> | number
    Estado?: StringWithAggregatesFilter<"Estado_pago"> | string
  }

  export type Metodo_de_pagoWhereInput = {
    AND?: Metodo_de_pagoWhereInput | Metodo_de_pagoWhereInput[]
    OR?: Metodo_de_pagoWhereInput[]
    NOT?: Metodo_de_pagoWhereInput | Metodo_de_pagoWhereInput[]
    id_metodo_pago?: IntFilter<"Metodo_de_pago"> | number
    Metodo?: StringFilter<"Metodo_de_pago"> | string
    Pago?: PagoListRelationFilter
  }

  export type Metodo_de_pagoOrderByWithRelationInput = {
    id_metodo_pago?: SortOrder
    Metodo?: SortOrder
    Pago?: PagoOrderByRelationAggregateInput
  }

  export type Metodo_de_pagoWhereUniqueInput = Prisma.AtLeast<{
    id_metodo_pago?: number
    Metodo?: string
    AND?: Metodo_de_pagoWhereInput | Metodo_de_pagoWhereInput[]
    OR?: Metodo_de_pagoWhereInput[]
    NOT?: Metodo_de_pagoWhereInput | Metodo_de_pagoWhereInput[]
    Pago?: PagoListRelationFilter
  }, "id_metodo_pago" | "Metodo">

  export type Metodo_de_pagoOrderByWithAggregationInput = {
    id_metodo_pago?: SortOrder
    Metodo?: SortOrder
    _count?: Metodo_de_pagoCountOrderByAggregateInput
    _avg?: Metodo_de_pagoAvgOrderByAggregateInput
    _max?: Metodo_de_pagoMaxOrderByAggregateInput
    _min?: Metodo_de_pagoMinOrderByAggregateInput
    _sum?: Metodo_de_pagoSumOrderByAggregateInput
  }

  export type Metodo_de_pagoScalarWhereWithAggregatesInput = {
    AND?: Metodo_de_pagoScalarWhereWithAggregatesInput | Metodo_de_pagoScalarWhereWithAggregatesInput[]
    OR?: Metodo_de_pagoScalarWhereWithAggregatesInput[]
    NOT?: Metodo_de_pagoScalarWhereWithAggregatesInput | Metodo_de_pagoScalarWhereWithAggregatesInput[]
    id_metodo_pago?: IntWithAggregatesFilter<"Metodo_de_pago"> | number
    Metodo?: StringWithAggregatesFilter<"Metodo_de_pago"> | string
  }

  export type PagoWhereInput = {
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    Id_cita?: IntNullableFilter<"Pago"> | number | null
    Monto?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: IntNullableFilter<"Pago"> | number | null
    Fecha_Pago?: DateTimeNullableFilter<"Pago"> | Date | string | null
    Id_Estado_pago?: IntNullableFilter<"Pago"> | number | null
    Id_pago?: UuidFilter<"Pago"> | string
    id_tarjeta?: UuidNullableFilter<"Pago"> | string | null
    Estado_pago?: XOR<Estado_pagoNullableScalarRelationFilter, Estado_pagoWhereInput> | null
    Metodo_de_pago?: XOR<Metodo_de_pagoNullableScalarRelationFilter, Metodo_de_pagoWhereInput> | null
    Citas?: XOR<CitasNullableScalarRelationFilter, CitasWhereInput> | null
    Tarjeta?: XOR<TarjetaNullableScalarRelationFilter, TarjetaWhereInput> | null
  }

  export type PagoOrderByWithRelationInput = {
    Id_cita?: SortOrderInput | SortOrder
    Monto?: SortOrder
    Id_Metodo_pago?: SortOrderInput | SortOrder
    Fecha_Pago?: SortOrderInput | SortOrder
    Id_Estado_pago?: SortOrderInput | SortOrder
    Id_pago?: SortOrder
    id_tarjeta?: SortOrderInput | SortOrder
    Estado_pago?: Estado_pagoOrderByWithRelationInput
    Metodo_de_pago?: Metodo_de_pagoOrderByWithRelationInput
    Citas?: CitasOrderByWithRelationInput
    Tarjeta?: TarjetaOrderByWithRelationInput
  }

  export type PagoWhereUniqueInput = Prisma.AtLeast<{
    Id_pago?: string
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    Id_cita?: IntNullableFilter<"Pago"> | number | null
    Monto?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: IntNullableFilter<"Pago"> | number | null
    Fecha_Pago?: DateTimeNullableFilter<"Pago"> | Date | string | null
    Id_Estado_pago?: IntNullableFilter<"Pago"> | number | null
    id_tarjeta?: UuidNullableFilter<"Pago"> | string | null
    Estado_pago?: XOR<Estado_pagoNullableScalarRelationFilter, Estado_pagoWhereInput> | null
    Metodo_de_pago?: XOR<Metodo_de_pagoNullableScalarRelationFilter, Metodo_de_pagoWhereInput> | null
    Citas?: XOR<CitasNullableScalarRelationFilter, CitasWhereInput> | null
    Tarjeta?: XOR<TarjetaNullableScalarRelationFilter, TarjetaWhereInput> | null
  }, "Id_pago">

  export type PagoOrderByWithAggregationInput = {
    Id_cita?: SortOrderInput | SortOrder
    Monto?: SortOrder
    Id_Metodo_pago?: SortOrderInput | SortOrder
    Fecha_Pago?: SortOrderInput | SortOrder
    Id_Estado_pago?: SortOrderInput | SortOrder
    Id_pago?: SortOrder
    id_tarjeta?: SortOrderInput | SortOrder
    _count?: PagoCountOrderByAggregateInput
    _avg?: PagoAvgOrderByAggregateInput
    _max?: PagoMaxOrderByAggregateInput
    _min?: PagoMinOrderByAggregateInput
    _sum?: PagoSumOrderByAggregateInput
  }

  export type PagoScalarWhereWithAggregatesInput = {
    AND?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    OR?: PagoScalarWhereWithAggregatesInput[]
    NOT?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    Id_cita?: IntNullableWithAggregatesFilter<"Pago"> | number | null
    Monto?: DecimalWithAggregatesFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: IntNullableWithAggregatesFilter<"Pago"> | number | null
    Fecha_Pago?: DateTimeNullableWithAggregatesFilter<"Pago"> | Date | string | null
    Id_Estado_pago?: IntNullableWithAggregatesFilter<"Pago"> | number | null
    Id_pago?: UuidWithAggregatesFilter<"Pago"> | string
    id_tarjeta?: UuidNullableWithAggregatesFilter<"Pago"> | string | null
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    Rol?: StringFilter<"Rol"> | string
    id_rol?: UuidFilter<"Rol"> | string
    Usuario_Usuario_RolToRol?: UsuarioListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    Rol?: SortOrder
    id_rol?: SortOrder
    Usuario_Usuario_RolToRol?: UsuarioOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    Rol?: StringFilter<"Rol"> | string
    Usuario_Usuario_RolToRol?: UsuarioListRelationFilter
  }, "id_rol">

  export type RolOrderByWithAggregationInput = {
    Rol?: SortOrder
    id_rol?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    Rol?: StringWithAggregatesFilter<"Rol"> | string
    id_rol?: UuidWithAggregatesFilter<"Rol"> | string
  }

  export type ServicioWhereInput = {
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    Id_Servicio?: IntFilter<"Servicio"> | number
    Nombre_Servicio?: StringFilter<"Servicio"> | string
    Descripcion?: StringNullableFilter<"Servicio"> | string | null
    Precio?: DecimalFilter<"Servicio"> | Decimal | DecimalJsLike | number | string
    Duracion?: DateTimeFilter<"Servicio"> | Date | string
    Citas?: CitasListRelationFilter
  }

  export type ServicioOrderByWithRelationInput = {
    Id_Servicio?: SortOrder
    Nombre_Servicio?: SortOrder
    Descripcion?: SortOrderInput | SortOrder
    Precio?: SortOrder
    Duracion?: SortOrder
    Citas?: CitasOrderByRelationAggregateInput
  }

  export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    Id_Servicio?: number
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    Nombre_Servicio?: StringFilter<"Servicio"> | string
    Descripcion?: StringNullableFilter<"Servicio"> | string | null
    Precio?: DecimalFilter<"Servicio"> | Decimal | DecimalJsLike | number | string
    Duracion?: DateTimeFilter<"Servicio"> | Date | string
    Citas?: CitasListRelationFilter
  }, "Id_Servicio">

  export type ServicioOrderByWithAggregationInput = {
    Id_Servicio?: SortOrder
    Nombre_Servicio?: SortOrder
    Descripcion?: SortOrderInput | SortOrder
    Precio?: SortOrder
    Duracion?: SortOrder
    _count?: ServicioCountOrderByAggregateInput
    _avg?: ServicioAvgOrderByAggregateInput
    _max?: ServicioMaxOrderByAggregateInput
    _min?: ServicioMinOrderByAggregateInput
    _sum?: ServicioSumOrderByAggregateInput
  }

  export type ServicioScalarWhereWithAggregatesInput = {
    AND?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    OR?: ServicioScalarWhereWithAggregatesInput[]
    NOT?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    Id_Servicio?: IntWithAggregatesFilter<"Servicio"> | number
    Nombre_Servicio?: StringWithAggregatesFilter<"Servicio"> | string
    Descripcion?: StringNullableWithAggregatesFilter<"Servicio"> | string | null
    Precio?: DecimalWithAggregatesFilter<"Servicio"> | Decimal | DecimalJsLike | number | string
    Duracion?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
  }

  export type TarjetaWhereInput = {
    AND?: TarjetaWhereInput | TarjetaWhereInput[]
    OR?: TarjetaWhereInput[]
    NOT?: TarjetaWhereInput | TarjetaWhereInput[]
    created_at?: DateTimeFilter<"Tarjeta"> | Date | string
    numero_tarjeta?: StringFilter<"Tarjeta"> | string
    titular?: StringFilter<"Tarjeta"> | string
    vencimiento?: DateTimeFilter<"Tarjeta"> | Date | string
    id_cliente?: UuidFilter<"Tarjeta"> | string
    id_tarjeta?: UuidFilter<"Tarjeta"> | string
    Pago?: PagoListRelationFilter
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type TarjetaOrderByWithRelationInput = {
    created_at?: SortOrder
    numero_tarjeta?: SortOrder
    titular?: SortOrder
    vencimiento?: SortOrder
    id_cliente?: SortOrder
    id_tarjeta?: SortOrder
    Pago?: PagoOrderByRelationAggregateInput
    Usuario?: UsuarioOrderByWithRelationInput
  }

  export type TarjetaWhereUniqueInput = Prisma.AtLeast<{
    id_tarjeta?: string
    AND?: TarjetaWhereInput | TarjetaWhereInput[]
    OR?: TarjetaWhereInput[]
    NOT?: TarjetaWhereInput | TarjetaWhereInput[]
    created_at?: DateTimeFilter<"Tarjeta"> | Date | string
    numero_tarjeta?: StringFilter<"Tarjeta"> | string
    titular?: StringFilter<"Tarjeta"> | string
    vencimiento?: DateTimeFilter<"Tarjeta"> | Date | string
    id_cliente?: UuidFilter<"Tarjeta"> | string
    Pago?: PagoListRelationFilter
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_tarjeta">

  export type TarjetaOrderByWithAggregationInput = {
    created_at?: SortOrder
    numero_tarjeta?: SortOrder
    titular?: SortOrder
    vencimiento?: SortOrder
    id_cliente?: SortOrder
    id_tarjeta?: SortOrder
    _count?: TarjetaCountOrderByAggregateInput
    _max?: TarjetaMaxOrderByAggregateInput
    _min?: TarjetaMinOrderByAggregateInput
  }

  export type TarjetaScalarWhereWithAggregatesInput = {
    AND?: TarjetaScalarWhereWithAggregatesInput | TarjetaScalarWhereWithAggregatesInput[]
    OR?: TarjetaScalarWhereWithAggregatesInput[]
    NOT?: TarjetaScalarWhereWithAggregatesInput | TarjetaScalarWhereWithAggregatesInput[]
    created_at?: DateTimeWithAggregatesFilter<"Tarjeta"> | Date | string
    numero_tarjeta?: StringWithAggregatesFilter<"Tarjeta"> | string
    titular?: StringWithAggregatesFilter<"Tarjeta"> | string
    vencimiento?: DateTimeWithAggregatesFilter<"Tarjeta"> | Date | string
    id_cliente?: UuidWithAggregatesFilter<"Tarjeta"> | string
    id_tarjeta?: UuidWithAggregatesFilter<"Tarjeta"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    Nombre?: StringFilter<"Usuario"> | string
    Apellido?: StringFilter<"Usuario"> | string
    Email?: StringFilter<"Usuario"> | string
    Password?: StringFilter<"Usuario"> | string
    Fecha_de_registro?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    Activo?: BoolNullableFilter<"Usuario"> | boolean | null
    telefono?: StringNullableFilter<"Usuario"> | string | null
    Id_usuario?: UuidFilter<"Usuario"> | string
    Rol?: UuidNullableFilter<"Usuario"> | string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalListRelationFilter
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalListRelationFilter
    Citas_Citas_Id_clienteToUsuario?: CitasListRelationFilter
    Citas_Citas_Id_estilistaToUsuario?: CitasListRelationFilter
    Tarjeta?: TarjetaListRelationFilter
    Rol_Usuario_RolToRol?: XOR<RolNullableScalarRelationFilter, RolWhereInput> | null
    token?: TokenListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    Nombre?: SortOrder
    Apellido?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Fecha_de_registro?: SortOrderInput | SortOrder
    Activo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    Id_usuario?: SortOrder
    Rol?: SortOrderInput | SortOrder
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalOrderByRelationAggregateInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalOrderByRelationAggregateInput
    Citas_Citas_Id_clienteToUsuario?: CitasOrderByRelationAggregateInput
    Citas_Citas_Id_estilistaToUsuario?: CitasOrderByRelationAggregateInput
    Tarjeta?: TarjetaOrderByRelationAggregateInput
    Rol_Usuario_RolToRol?: RolOrderByWithRelationInput
    token?: tokenOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    Email?: string
    Id_usuario?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    Nombre?: StringFilter<"Usuario"> | string
    Apellido?: StringFilter<"Usuario"> | string
    Password?: StringFilter<"Usuario"> | string
    Fecha_de_registro?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    Activo?: BoolNullableFilter<"Usuario"> | boolean | null
    telefono?: StringNullableFilter<"Usuario"> | string | null
    Rol?: UuidNullableFilter<"Usuario"> | string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalListRelationFilter
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalListRelationFilter
    Citas_Citas_Id_clienteToUsuario?: CitasListRelationFilter
    Citas_Citas_Id_estilistaToUsuario?: CitasListRelationFilter
    Tarjeta?: TarjetaListRelationFilter
    Rol_Usuario_RolToRol?: XOR<RolNullableScalarRelationFilter, RolWhereInput> | null
    token?: TokenListRelationFilter
  }, "Id_usuario" | "Email">

  export type UsuarioOrderByWithAggregationInput = {
    Nombre?: SortOrder
    Apellido?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Fecha_de_registro?: SortOrderInput | SortOrder
    Activo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    Id_usuario?: SortOrder
    Rol?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    Nombre?: StringWithAggregatesFilter<"Usuario"> | string
    Apellido?: StringWithAggregatesFilter<"Usuario"> | string
    Email?: StringWithAggregatesFilter<"Usuario"> | string
    Password?: StringWithAggregatesFilter<"Usuario"> | string
    Fecha_de_registro?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    Activo?: BoolNullableWithAggregatesFilter<"Usuario"> | boolean | null
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    Id_usuario?: UuidWithAggregatesFilter<"Usuario"> | string
    Rol?: UuidNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type tokenWhereInput = {
    AND?: tokenWhereInput | tokenWhereInput[]
    OR?: tokenWhereInput[]
    NOT?: tokenWhereInput | tokenWhereInput[]
    id?: UuidFilter<"token"> | string
    created_at?: DateTimeFilter<"token"> | Date | string
    Id_usuario?: UuidFilter<"token"> | string
    token?: StringFilter<"token"> | string
    expired_at?: DateTimeFilter<"token"> | Date | string
    revoked_at?: DateTimeNullableFilter<"token"> | Date | string | null
    user_agent?: StringNullableFilter<"token"> | string | null
    ip_adress?: StringNullableFilter<"token"> | string | null
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type tokenOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    Id_usuario?: SortOrder
    token?: SortOrder
    expired_at?: SortOrder
    revoked_at?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    ip_adress?: SortOrderInput | SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
  }

  export type tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tokenWhereInput | tokenWhereInput[]
    OR?: tokenWhereInput[]
    NOT?: tokenWhereInput | tokenWhereInput[]
    created_at?: DateTimeFilter<"token"> | Date | string
    Id_usuario?: UuidFilter<"token"> | string
    token?: StringFilter<"token"> | string
    expired_at?: DateTimeFilter<"token"> | Date | string
    revoked_at?: DateTimeNullableFilter<"token"> | Date | string | null
    user_agent?: StringNullableFilter<"token"> | string | null
    ip_adress?: StringNullableFilter<"token"> | string | null
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type tokenOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    Id_usuario?: SortOrder
    token?: SortOrder
    expired_at?: SortOrder
    revoked_at?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    ip_adress?: SortOrderInput | SortOrder
    _count?: tokenCountOrderByAggregateInput
    _max?: tokenMaxOrderByAggregateInput
    _min?: tokenMinOrderByAggregateInput
  }

  export type tokenScalarWhereWithAggregatesInput = {
    AND?: tokenScalarWhereWithAggregatesInput | tokenScalarWhereWithAggregatesInput[]
    OR?: tokenScalarWhereWithAggregatesInput[]
    NOT?: tokenScalarWhereWithAggregatesInput | tokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"token"> | string
    created_at?: DateTimeWithAggregatesFilter<"token"> | Date | string
    Id_usuario?: UuidWithAggregatesFilter<"token"> | string
    token?: StringWithAggregatesFilter<"token"> | string
    expired_at?: DateTimeWithAggregatesFilter<"token"> | Date | string
    revoked_at?: DateTimeNullableWithAggregatesFilter<"token"> | Date | string | null
    user_agent?: StringNullableWithAggregatesFilter<"token"> | string | null
    ip_adress?: StringNullableWithAggregatesFilter<"token"> | string | null
  }

  export type Bloqueo_TemporalCreateInput = {
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Expira_en?: Date | string | null
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: UsuarioCreateNestedOneWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: UsuarioCreateNestedOneWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput
  }

  export type Bloqueo_TemporalUncheckedCreateInput = {
    Id_bloqueo?: number
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Expira_en?: Date | string | null
    Id_cliente?: string
    Id_estilista?: string
  }

  export type Bloqueo_TemporalUpdateInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: UsuarioUpdateOneRequiredWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: UsuarioUpdateOneRequiredWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
  }

  export type Bloqueo_TemporalUncheckedUpdateInput = {
    Id_bloqueo?: IntFieldUpdateOperationsInput | number
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
    Id_estilista?: StringFieldUpdateOperationsInput | string
  }

  export type Bloqueo_TemporalCreateManyInput = {
    Id_bloqueo?: number
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Expira_en?: Date | string | null
    Id_cliente?: string
    Id_estilista?: string
  }

  export type Bloqueo_TemporalUpdateManyMutationInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Bloqueo_TemporalUncheckedUpdateManyInput = {
    Id_bloqueo?: IntFieldUpdateOperationsInput | number
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
    Id_estilista?: StringFieldUpdateOperationsInput | string
  }

  export type CitasCreateInput = {
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaCreateNestedOneWithoutCitas_Citas_Estado_citaToEstado_citaInput
    Usuario_Citas_Id_clienteToUsuario?: UsuarioCreateNestedOneWithoutCitas_Citas_Id_clienteToUsuarioInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioCreateNestedOneWithoutCitas_Citas_Id_estilistaToUsuarioInput
    Servicio?: ServicioCreateNestedOneWithoutCitasInput
    Pago?: PagoCreateNestedManyWithoutCitasInput
  }

  export type CitasUncheckedCreateInput = {
    Id_cita?: number
    Id_servicio?: number | null
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita?: number | null
    Id_cliente?: string
    Id_estilista?: string
    Pago?: PagoUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitasUpdateInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaUpdateOneWithoutCitas_Citas_Estado_citaToEstado_citaNestedInput
    Usuario_Citas_Id_clienteToUsuario?: UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_clienteToUsuarioNestedInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_estilistaToUsuarioNestedInput
    Servicio?: ServicioUpdateOneWithoutCitasNestedInput
    Pago?: PagoUpdateManyWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Id_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
    Id_estilista?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitasCreateManyInput = {
    Id_cita?: number
    Id_servicio?: number | null
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita?: number | null
    Id_cliente?: string
    Id_estilista?: string
  }

  export type CitasUpdateManyMutationInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitasUncheckedUpdateManyInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Id_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
    Id_estilista?: StringFieldUpdateOperationsInput | string
  }

  export type Estado_citaCreateInput = {
    Estado: string
    Citas_Citas_Estado_citaToEstado_cita?: CitasCreateNestedManyWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput
  }

  export type Estado_citaUncheckedCreateInput = {
    Id_estado_cita?: number
    Estado: string
    Citas_Citas_Estado_citaToEstado_cita?: CitasUncheckedCreateNestedManyWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput
  }

  export type Estado_citaUpdateInput = {
    Estado?: StringFieldUpdateOperationsInput | string
    Citas_Citas_Estado_citaToEstado_cita?: CitasUpdateManyWithoutEstado_cita_Citas_Estado_citaToEstado_citaNestedInput
  }

  export type Estado_citaUncheckedUpdateInput = {
    Id_estado_cita?: IntFieldUpdateOperationsInput | number
    Estado?: StringFieldUpdateOperationsInput | string
    Citas_Citas_Estado_citaToEstado_cita?: CitasUncheckedUpdateManyWithoutEstado_cita_Citas_Estado_citaToEstado_citaNestedInput
  }

  export type Estado_citaCreateManyInput = {
    Id_estado_cita?: number
    Estado: string
  }

  export type Estado_citaUpdateManyMutationInput = {
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type Estado_citaUncheckedUpdateManyInput = {
    Id_estado_cita?: IntFieldUpdateOperationsInput | number
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type Estado_pagoCreateInput = {
    Estado: string
    Pago?: PagoCreateNestedManyWithoutEstado_pagoInput
  }

  export type Estado_pagoUncheckedCreateInput = {
    Id_estado_pago?: number
    Estado: string
    Pago?: PagoUncheckedCreateNestedManyWithoutEstado_pagoInput
  }

  export type Estado_pagoUpdateInput = {
    Estado?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUpdateManyWithoutEstado_pagoNestedInput
  }

  export type Estado_pagoUncheckedUpdateInput = {
    Id_estado_pago?: IntFieldUpdateOperationsInput | number
    Estado?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUncheckedUpdateManyWithoutEstado_pagoNestedInput
  }

  export type Estado_pagoCreateManyInput = {
    Id_estado_pago?: number
    Estado: string
  }

  export type Estado_pagoUpdateManyMutationInput = {
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type Estado_pagoUncheckedUpdateManyInput = {
    Id_estado_pago?: IntFieldUpdateOperationsInput | number
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type Metodo_de_pagoCreateInput = {
    Metodo: string
    Pago?: PagoCreateNestedManyWithoutMetodo_de_pagoInput
  }

  export type Metodo_de_pagoUncheckedCreateInput = {
    id_metodo_pago?: number
    Metodo: string
    Pago?: PagoUncheckedCreateNestedManyWithoutMetodo_de_pagoInput
  }

  export type Metodo_de_pagoUpdateInput = {
    Metodo?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUpdateManyWithoutMetodo_de_pagoNestedInput
  }

  export type Metodo_de_pagoUncheckedUpdateInput = {
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    Metodo?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUncheckedUpdateManyWithoutMetodo_de_pagoNestedInput
  }

  export type Metodo_de_pagoCreateManyInput = {
    id_metodo_pago?: number
    Metodo: string
  }

  export type Metodo_de_pagoUpdateManyMutationInput = {
    Metodo?: StringFieldUpdateOperationsInput | string
  }

  export type Metodo_de_pagoUncheckedUpdateManyInput = {
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    Metodo?: StringFieldUpdateOperationsInput | string
  }

  export type PagoCreateInput = {
    Monto: Decimal | DecimalJsLike | number | string
    Fecha_Pago?: Date | string | null
    Id_pago?: string
    Estado_pago?: Estado_pagoCreateNestedOneWithoutPagoInput
    Metodo_de_pago?: Metodo_de_pagoCreateNestedOneWithoutPagoInput
    Citas?: CitasCreateNestedOneWithoutPagoInput
    Tarjeta?: TarjetaCreateNestedOneWithoutPagoInput
  }

  export type PagoUncheckedCreateInput = {
    Id_cita?: number | null
    Monto: Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: number | null
    Fecha_Pago?: Date | string | null
    Id_Estado_pago?: number | null
    Id_pago?: string
    id_tarjeta?: string | null
  }

  export type PagoUpdateInput = {
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    Estado_pago?: Estado_pagoUpdateOneWithoutPagoNestedInput
    Metodo_de_pago?: Metodo_de_pagoUpdateOneWithoutPagoNestedInput
    Citas?: CitasUpdateOneWithoutPagoNestedInput
    Tarjeta?: TarjetaUpdateOneWithoutPagoNestedInput
  }

  export type PagoUncheckedUpdateInput = {
    Id_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Estado_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoCreateManyInput = {
    Id_cita?: number | null
    Monto: Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: number | null
    Fecha_Pago?: Date | string | null
    Id_Estado_pago?: number | null
    Id_pago?: string
    id_tarjeta?: string | null
  }

  export type PagoUpdateManyMutationInput = {
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_pago?: StringFieldUpdateOperationsInput | string
  }

  export type PagoUncheckedUpdateManyInput = {
    Id_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Estado_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolCreateInput = {
    Rol: string
    id_rol?: string
    Usuario_Usuario_RolToRol?: UsuarioCreateNestedManyWithoutRol_Usuario_RolToRolInput
  }

  export type RolUncheckedCreateInput = {
    Rol: string
    id_rol?: string
    Usuario_Usuario_RolToRol?: UsuarioUncheckedCreateNestedManyWithoutRol_Usuario_RolToRolInput
  }

  export type RolUpdateInput = {
    Rol?: StringFieldUpdateOperationsInput | string
    id_rol?: StringFieldUpdateOperationsInput | string
    Usuario_Usuario_RolToRol?: UsuarioUpdateManyWithoutRol_Usuario_RolToRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    Rol?: StringFieldUpdateOperationsInput | string
    id_rol?: StringFieldUpdateOperationsInput | string
    Usuario_Usuario_RolToRol?: UsuarioUncheckedUpdateManyWithoutRol_Usuario_RolToRolNestedInput
  }

  export type RolCreateManyInput = {
    Rol: string
    id_rol?: string
  }

  export type RolUpdateManyMutationInput = {
    Rol?: StringFieldUpdateOperationsInput | string
    id_rol?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateManyInput = {
    Rol?: StringFieldUpdateOperationsInput | string
    id_rol?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioCreateInput = {
    Nombre_Servicio: string
    Descripcion?: string | null
    Precio: Decimal | DecimalJsLike | number | string
    Duracion: Date | string
    Citas?: CitasCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateInput = {
    Id_Servicio?: number
    Nombre_Servicio: string
    Descripcion?: string | null
    Precio: Decimal | DecimalJsLike | number | string
    Duracion: Date | string
    Citas?: CitasUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioUpdateInput = {
    Nombre_Servicio?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Duracion?: DateTimeFieldUpdateOperationsInput | Date | string
    Citas?: CitasUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateInput = {
    Id_Servicio?: IntFieldUpdateOperationsInput | number
    Nombre_Servicio?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Duracion?: DateTimeFieldUpdateOperationsInput | Date | string
    Citas?: CitasUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioCreateManyInput = {
    Id_Servicio?: number
    Nombre_Servicio: string
    Descripcion?: string | null
    Precio: Decimal | DecimalJsLike | number | string
    Duracion: Date | string
  }

  export type ServicioUpdateManyMutationInput = {
    Nombre_Servicio?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Duracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioUncheckedUpdateManyInput = {
    Id_Servicio?: IntFieldUpdateOperationsInput | number
    Nombre_Servicio?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Duracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TarjetaCreateInput = {
    created_at?: Date | string
    numero_tarjeta: string
    titular: string
    vencimiento: Date | string
    id_tarjeta?: string
    Pago?: PagoCreateNestedManyWithoutTarjetaInput
    Usuario?: UsuarioCreateNestedOneWithoutTarjetaInput
  }

  export type TarjetaUncheckedCreateInput = {
    created_at?: Date | string
    numero_tarjeta: string
    titular: string
    vencimiento: Date | string
    id_cliente?: string
    id_tarjeta?: string
    Pago?: PagoUncheckedCreateNestedManyWithoutTarjetaInput
  }

  export type TarjetaUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_tarjeta?: StringFieldUpdateOperationsInput | string
    titular?: StringFieldUpdateOperationsInput | string
    vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tarjeta?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUpdateManyWithoutTarjetaNestedInput
    Usuario?: UsuarioUpdateOneRequiredWithoutTarjetaNestedInput
  }

  export type TarjetaUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_tarjeta?: StringFieldUpdateOperationsInput | string
    titular?: StringFieldUpdateOperationsInput | string
    vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_cliente?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUncheckedUpdateManyWithoutTarjetaNestedInput
  }

  export type TarjetaCreateManyInput = {
    created_at?: Date | string
    numero_tarjeta: string
    titular: string
    vencimiento: Date | string
    id_cliente?: string
    id_tarjeta?: string
  }

  export type TarjetaUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_tarjeta?: StringFieldUpdateOperationsInput | string
    titular?: StringFieldUpdateOperationsInput | string
    vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tarjeta?: StringFieldUpdateOperationsInput | string
  }

  export type TarjetaUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_tarjeta?: StringFieldUpdateOperationsInput | string
    titular?: StringFieldUpdateOperationsInput | string
    vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_cliente?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaCreateNestedManyWithoutUsuarioInput
    Rol_Usuario_RolToRol?: RolCreateNestedOneWithoutUsuario_Usuario_RolToRolInput
    token?: tokenCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Rol?: string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaUncheckedCreateNestedManyWithoutUsuarioInput
    token?: tokenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUpdateManyWithoutUsuarioNestedInput
    Rol_Usuario_RolToRol?: RolUpdateOneWithoutUsuario_Usuario_RolToRolNestedInput
    token?: tokenUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Rol?: NullableStringFieldUpdateOperationsInput | string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUncheckedUpdateManyWithoutUsuarioNestedInput
    token?: tokenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Rol?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Rol?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tokenCreateInput = {
    id?: string
    created_at: Date | string
    token: string
    expired_at: Date | string
    revoked_at?: Date | string | null
    user_agent?: string | null
    ip_adress?: string | null
    Usuario: UsuarioCreateNestedOneWithoutTokenInput
  }

  export type tokenUncheckedCreateInput = {
    id?: string
    created_at: Date | string
    Id_usuario: string
    token: string
    expired_at: Date | string
    revoked_at?: Date | string | null
    user_agent?: string | null
    ip_adress?: string | null
  }

  export type tokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    ip_adress?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario?: UsuarioUpdateOneRequiredWithoutTokenNestedInput
  }

  export type tokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Id_usuario?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    ip_adress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tokenCreateManyInput = {
    id?: string
    created_at: Date | string
    Id_usuario: string
    token: string
    expired_at: Date | string
    revoked_at?: Date | string | null
    user_agent?: string | null
    ip_adress?: string | null
  }

  export type tokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    ip_adress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Id_usuario?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    ip_adress?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Bloqueo_TemporalCountOrderByAggregateInput = {
    Id_bloqueo?: SortOrder
    Fecha_cita?: SortOrder
    Hora_inicio?: SortOrder
    Expira_en?: SortOrder
    Id_cliente?: SortOrder
    Id_estilista?: SortOrder
  }

  export type Bloqueo_TemporalAvgOrderByAggregateInput = {
    Id_bloqueo?: SortOrder
  }

  export type Bloqueo_TemporalMaxOrderByAggregateInput = {
    Id_bloqueo?: SortOrder
    Fecha_cita?: SortOrder
    Hora_inicio?: SortOrder
    Expira_en?: SortOrder
    Id_cliente?: SortOrder
    Id_estilista?: SortOrder
  }

  export type Bloqueo_TemporalMinOrderByAggregateInput = {
    Id_bloqueo?: SortOrder
    Fecha_cita?: SortOrder
    Hora_inicio?: SortOrder
    Expira_en?: SortOrder
    Id_cliente?: SortOrder
    Id_estilista?: SortOrder
  }

  export type Bloqueo_TemporalSumOrderByAggregateInput = {
    Id_bloqueo?: SortOrder
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

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type Estado_citaNullableScalarRelationFilter = {
    is?: Estado_citaWhereInput | null
    isNot?: Estado_citaWhereInput | null
  }

  export type ServicioNullableScalarRelationFilter = {
    is?: ServicioWhereInput | null
    isNot?: ServicioWhereInput | null
  }

  export type PagoListRelationFilter = {
    every?: PagoWhereInput
    some?: PagoWhereInput
    none?: PagoWhereInput
  }

  export type PagoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CitasCountOrderByAggregateInput = {
    Id_cita?: SortOrder
    Id_servicio?: SortOrder
    Fecha_cita?: SortOrder
    Hora_inicio?: SortOrder
    Estado_cita?: SortOrder
    Id_cliente?: SortOrder
    Id_estilista?: SortOrder
  }

  export type CitasAvgOrderByAggregateInput = {
    Id_cita?: SortOrder
    Id_servicio?: SortOrder
    Estado_cita?: SortOrder
  }

  export type CitasMaxOrderByAggregateInput = {
    Id_cita?: SortOrder
    Id_servicio?: SortOrder
    Fecha_cita?: SortOrder
    Hora_inicio?: SortOrder
    Estado_cita?: SortOrder
    Id_cliente?: SortOrder
    Id_estilista?: SortOrder
  }

  export type CitasMinOrderByAggregateInput = {
    Id_cita?: SortOrder
    Id_servicio?: SortOrder
    Fecha_cita?: SortOrder
    Hora_inicio?: SortOrder
    Estado_cita?: SortOrder
    Id_cliente?: SortOrder
    Id_estilista?: SortOrder
  }

  export type CitasSumOrderByAggregateInput = {
    Id_cita?: SortOrder
    Id_servicio?: SortOrder
    Estado_cita?: SortOrder
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

  export type CitasListRelationFilter = {
    every?: CitasWhereInput
    some?: CitasWhereInput
    none?: CitasWhereInput
  }

  export type CitasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Estado_citaCountOrderByAggregateInput = {
    Id_estado_cita?: SortOrder
    Estado?: SortOrder
  }

  export type Estado_citaAvgOrderByAggregateInput = {
    Id_estado_cita?: SortOrder
  }

  export type Estado_citaMaxOrderByAggregateInput = {
    Id_estado_cita?: SortOrder
    Estado?: SortOrder
  }

  export type Estado_citaMinOrderByAggregateInput = {
    Id_estado_cita?: SortOrder
    Estado?: SortOrder
  }

  export type Estado_citaSumOrderByAggregateInput = {
    Id_estado_cita?: SortOrder
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

  export type Estado_pagoCountOrderByAggregateInput = {
    Id_estado_pago?: SortOrder
    Estado?: SortOrder
  }

  export type Estado_pagoAvgOrderByAggregateInput = {
    Id_estado_pago?: SortOrder
  }

  export type Estado_pagoMaxOrderByAggregateInput = {
    Id_estado_pago?: SortOrder
    Estado?: SortOrder
  }

  export type Estado_pagoMinOrderByAggregateInput = {
    Id_estado_pago?: SortOrder
    Estado?: SortOrder
  }

  export type Estado_pagoSumOrderByAggregateInput = {
    Id_estado_pago?: SortOrder
  }

  export type Metodo_de_pagoCountOrderByAggregateInput = {
    id_metodo_pago?: SortOrder
    Metodo?: SortOrder
  }

  export type Metodo_de_pagoAvgOrderByAggregateInput = {
    id_metodo_pago?: SortOrder
  }

  export type Metodo_de_pagoMaxOrderByAggregateInput = {
    id_metodo_pago?: SortOrder
    Metodo?: SortOrder
  }

  export type Metodo_de_pagoMinOrderByAggregateInput = {
    id_metodo_pago?: SortOrder
    Metodo?: SortOrder
  }

  export type Metodo_de_pagoSumOrderByAggregateInput = {
    id_metodo_pago?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type Estado_pagoNullableScalarRelationFilter = {
    is?: Estado_pagoWhereInput | null
    isNot?: Estado_pagoWhereInput | null
  }

  export type Metodo_de_pagoNullableScalarRelationFilter = {
    is?: Metodo_de_pagoWhereInput | null
    isNot?: Metodo_de_pagoWhereInput | null
  }

  export type CitasNullableScalarRelationFilter = {
    is?: CitasWhereInput | null
    isNot?: CitasWhereInput | null
  }

  export type TarjetaNullableScalarRelationFilter = {
    is?: TarjetaWhereInput | null
    isNot?: TarjetaWhereInput | null
  }

  export type PagoCountOrderByAggregateInput = {
    Id_cita?: SortOrder
    Monto?: SortOrder
    Id_Metodo_pago?: SortOrder
    Fecha_Pago?: SortOrder
    Id_Estado_pago?: SortOrder
    Id_pago?: SortOrder
    id_tarjeta?: SortOrder
  }

  export type PagoAvgOrderByAggregateInput = {
    Id_cita?: SortOrder
    Monto?: SortOrder
    Id_Metodo_pago?: SortOrder
    Id_Estado_pago?: SortOrder
  }

  export type PagoMaxOrderByAggregateInput = {
    Id_cita?: SortOrder
    Monto?: SortOrder
    Id_Metodo_pago?: SortOrder
    Fecha_Pago?: SortOrder
    Id_Estado_pago?: SortOrder
    Id_pago?: SortOrder
    id_tarjeta?: SortOrder
  }

  export type PagoMinOrderByAggregateInput = {
    Id_cita?: SortOrder
    Monto?: SortOrder
    Id_Metodo_pago?: SortOrder
    Fecha_Pago?: SortOrder
    Id_Estado_pago?: SortOrder
    Id_pago?: SortOrder
    id_tarjeta?: SortOrder
  }

  export type PagoSumOrderByAggregateInput = {
    Id_cita?: SortOrder
    Monto?: SortOrder
    Id_Metodo_pago?: SortOrder
    Id_Estado_pago?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    Rol?: SortOrder
    id_rol?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    Rol?: SortOrder
    id_rol?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    Rol?: SortOrder
    id_rol?: SortOrder
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

  export type ServicioCountOrderByAggregateInput = {
    Id_Servicio?: SortOrder
    Nombre_Servicio?: SortOrder
    Descripcion?: SortOrder
    Precio?: SortOrder
    Duracion?: SortOrder
  }

  export type ServicioAvgOrderByAggregateInput = {
    Id_Servicio?: SortOrder
    Precio?: SortOrder
  }

  export type ServicioMaxOrderByAggregateInput = {
    Id_Servicio?: SortOrder
    Nombre_Servicio?: SortOrder
    Descripcion?: SortOrder
    Precio?: SortOrder
    Duracion?: SortOrder
  }

  export type ServicioMinOrderByAggregateInput = {
    Id_Servicio?: SortOrder
    Nombre_Servicio?: SortOrder
    Descripcion?: SortOrder
    Precio?: SortOrder
    Duracion?: SortOrder
  }

  export type ServicioSumOrderByAggregateInput = {
    Id_Servicio?: SortOrder
    Precio?: SortOrder
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

  export type TarjetaCountOrderByAggregateInput = {
    created_at?: SortOrder
    numero_tarjeta?: SortOrder
    titular?: SortOrder
    vencimiento?: SortOrder
    id_cliente?: SortOrder
    id_tarjeta?: SortOrder
  }

  export type TarjetaMaxOrderByAggregateInput = {
    created_at?: SortOrder
    numero_tarjeta?: SortOrder
    titular?: SortOrder
    vencimiento?: SortOrder
    id_cliente?: SortOrder
    id_tarjeta?: SortOrder
  }

  export type TarjetaMinOrderByAggregateInput = {
    created_at?: SortOrder
    numero_tarjeta?: SortOrder
    titular?: SortOrder
    vencimiento?: SortOrder
    id_cliente?: SortOrder
    id_tarjeta?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Bloqueo_TemporalListRelationFilter = {
    every?: Bloqueo_TemporalWhereInput
    some?: Bloqueo_TemporalWhereInput
    none?: Bloqueo_TemporalWhereInput
  }

  export type TarjetaListRelationFilter = {
    every?: TarjetaWhereInput
    some?: TarjetaWhereInput
    none?: TarjetaWhereInput
  }

  export type RolNullableScalarRelationFilter = {
    is?: RolWhereInput | null
    isNot?: RolWhereInput | null
  }

  export type TokenListRelationFilter = {
    every?: tokenWhereInput
    some?: tokenWhereInput
    none?: tokenWhereInput
  }

  export type Bloqueo_TemporalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TarjetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    Nombre?: SortOrder
    Apellido?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Fecha_de_registro?: SortOrder
    Activo?: SortOrder
    telefono?: SortOrder
    Id_usuario?: SortOrder
    Rol?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    Nombre?: SortOrder
    Apellido?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Fecha_de_registro?: SortOrder
    Activo?: SortOrder
    telefono?: SortOrder
    Id_usuario?: SortOrder
    Rol?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    Nombre?: SortOrder
    Apellido?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Fecha_de_registro?: SortOrder
    Activo?: SortOrder
    telefono?: SortOrder
    Id_usuario?: SortOrder
    Rol?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type tokenCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    Id_usuario?: SortOrder
    token?: SortOrder
    expired_at?: SortOrder
    revoked_at?: SortOrder
    user_agent?: SortOrder
    ip_adress?: SortOrder
  }

  export type tokenMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    Id_usuario?: SortOrder
    token?: SortOrder
    expired_at?: SortOrder
    revoked_at?: SortOrder
    user_agent?: SortOrder
    ip_adress?: SortOrder
  }

  export type tokenMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    Id_usuario?: SortOrder
    token?: SortOrder
    expired_at?: SortOrder
    revoked_at?: SortOrder
    user_agent?: SortOrder
    ip_adress?: SortOrder
  }

  export type UsuarioCreateNestedOneWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    create?: XOR<UsuarioCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput, UsuarioUncheckedCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    create?: XOR<UsuarioCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput, UsuarioUncheckedCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput, UsuarioUncheckedCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput
    upsert?: UsuarioUpsertWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput, UsuarioUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput>, UsuarioUncheckedUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput>
  }

  export type UsuarioUpdateOneRequiredWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput, UsuarioUncheckedCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    upsert?: UsuarioUpsertWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput, UsuarioUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput>, UsuarioUncheckedUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Estado_citaCreateNestedOneWithoutCitas_Citas_Estado_citaToEstado_citaInput = {
    create?: XOR<Estado_citaCreateWithoutCitas_Citas_Estado_citaToEstado_citaInput, Estado_citaUncheckedCreateWithoutCitas_Citas_Estado_citaToEstado_citaInput>
    connectOrCreate?: Estado_citaCreateOrConnectWithoutCitas_Citas_Estado_citaToEstado_citaInput
    connect?: Estado_citaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutCitas_Citas_Id_clienteToUsuarioInput = {
    create?: XOR<UsuarioCreateWithoutCitas_Citas_Id_clienteToUsuarioInput, UsuarioUncheckedCreateWithoutCitas_Citas_Id_clienteToUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitas_Citas_Id_clienteToUsuarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutCitas_Citas_Id_estilistaToUsuarioInput = {
    create?: XOR<UsuarioCreateWithoutCitas_Citas_Id_estilistaToUsuarioInput, UsuarioUncheckedCreateWithoutCitas_Citas_Id_estilistaToUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitas_Citas_Id_estilistaToUsuarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServicioCreateNestedOneWithoutCitasInput = {
    create?: XOR<ServicioCreateWithoutCitasInput, ServicioUncheckedCreateWithoutCitasInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutCitasInput
    connect?: ServicioWhereUniqueInput
  }

  export type PagoCreateNestedManyWithoutCitasInput = {
    create?: XOR<PagoCreateWithoutCitasInput, PagoUncheckedCreateWithoutCitasInput> | PagoCreateWithoutCitasInput[] | PagoUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutCitasInput | PagoCreateOrConnectWithoutCitasInput[]
    createMany?: PagoCreateManyCitasInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutCitasInput = {
    create?: XOR<PagoCreateWithoutCitasInput, PagoUncheckedCreateWithoutCitasInput> | PagoCreateWithoutCitasInput[] | PagoUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutCitasInput | PagoCreateOrConnectWithoutCitasInput[]
    createMany?: PagoCreateManyCitasInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type Estado_citaUpdateOneWithoutCitas_Citas_Estado_citaToEstado_citaNestedInput = {
    create?: XOR<Estado_citaCreateWithoutCitas_Citas_Estado_citaToEstado_citaInput, Estado_citaUncheckedCreateWithoutCitas_Citas_Estado_citaToEstado_citaInput>
    connectOrCreate?: Estado_citaCreateOrConnectWithoutCitas_Citas_Estado_citaToEstado_citaInput
    upsert?: Estado_citaUpsertWithoutCitas_Citas_Estado_citaToEstado_citaInput
    disconnect?: Estado_citaWhereInput | boolean
    delete?: Estado_citaWhereInput | boolean
    connect?: Estado_citaWhereUniqueInput
    update?: XOR<XOR<Estado_citaUpdateToOneWithWhereWithoutCitas_Citas_Estado_citaToEstado_citaInput, Estado_citaUpdateWithoutCitas_Citas_Estado_citaToEstado_citaInput>, Estado_citaUncheckedUpdateWithoutCitas_Citas_Estado_citaToEstado_citaInput>
  }

  export type UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_clienteToUsuarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutCitas_Citas_Id_clienteToUsuarioInput, UsuarioUncheckedCreateWithoutCitas_Citas_Id_clienteToUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitas_Citas_Id_clienteToUsuarioInput
    upsert?: UsuarioUpsertWithoutCitas_Citas_Id_clienteToUsuarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCitas_Citas_Id_clienteToUsuarioInput, UsuarioUpdateWithoutCitas_Citas_Id_clienteToUsuarioInput>, UsuarioUncheckedUpdateWithoutCitas_Citas_Id_clienteToUsuarioInput>
  }

  export type UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_estilistaToUsuarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutCitas_Citas_Id_estilistaToUsuarioInput, UsuarioUncheckedCreateWithoutCitas_Citas_Id_estilistaToUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitas_Citas_Id_estilistaToUsuarioInput
    upsert?: UsuarioUpsertWithoutCitas_Citas_Id_estilistaToUsuarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCitas_Citas_Id_estilistaToUsuarioInput, UsuarioUpdateWithoutCitas_Citas_Id_estilistaToUsuarioInput>, UsuarioUncheckedUpdateWithoutCitas_Citas_Id_estilistaToUsuarioInput>
  }

  export type ServicioUpdateOneWithoutCitasNestedInput = {
    create?: XOR<ServicioCreateWithoutCitasInput, ServicioUncheckedCreateWithoutCitasInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutCitasInput
    upsert?: ServicioUpsertWithoutCitasInput
    disconnect?: ServicioWhereInput | boolean
    delete?: ServicioWhereInput | boolean
    connect?: ServicioWhereUniqueInput
    update?: XOR<XOR<ServicioUpdateToOneWithWhereWithoutCitasInput, ServicioUpdateWithoutCitasInput>, ServicioUncheckedUpdateWithoutCitasInput>
  }

  export type PagoUpdateManyWithoutCitasNestedInput = {
    create?: XOR<PagoCreateWithoutCitasInput, PagoUncheckedCreateWithoutCitasInput> | PagoCreateWithoutCitasInput[] | PagoUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutCitasInput | PagoCreateOrConnectWithoutCitasInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutCitasInput | PagoUpsertWithWhereUniqueWithoutCitasInput[]
    createMany?: PagoCreateManyCitasInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutCitasInput | PagoUpdateWithWhereUniqueWithoutCitasInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutCitasInput | PagoUpdateManyWithWhereWithoutCitasInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PagoUncheckedUpdateManyWithoutCitasNestedInput = {
    create?: XOR<PagoCreateWithoutCitasInput, PagoUncheckedCreateWithoutCitasInput> | PagoCreateWithoutCitasInput[] | PagoUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutCitasInput | PagoCreateOrConnectWithoutCitasInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutCitasInput | PagoUpsertWithWhereUniqueWithoutCitasInput[]
    createMany?: PagoCreateManyCitasInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutCitasInput | PagoUpdateWithWhereUniqueWithoutCitasInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutCitasInput | PagoUpdateManyWithWhereWithoutCitasInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type CitasCreateNestedManyWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    create?: XOR<CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput, CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput> | CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[] | CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasCreateOrConnectWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    createMany?: CitasCreateManyEstado_cita_Citas_Estado_citaToEstado_citaInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type CitasUncheckedCreateNestedManyWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    create?: XOR<CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput, CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput> | CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[] | CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasCreateOrConnectWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    createMany?: CitasCreateManyEstado_cita_Citas_Estado_citaToEstado_citaInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type CitasUpdateManyWithoutEstado_cita_Citas_Estado_citaToEstado_citaNestedInput = {
    create?: XOR<CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput, CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput> | CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[] | CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasCreateOrConnectWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasUpsertWithWhereUniqueWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    createMany?: CitasCreateManyEstado_cita_Citas_Estado_citaToEstado_citaInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasUpdateWithWhereUniqueWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasUpdateManyWithWhereWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type CitasUncheckedUpdateManyWithoutEstado_cita_Citas_Estado_citaToEstado_citaNestedInput = {
    create?: XOR<CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput, CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput> | CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[] | CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasCreateOrConnectWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasUpsertWithWhereUniqueWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    createMany?: CitasCreateManyEstado_cita_Citas_Estado_citaToEstado_citaInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasUpdateWithWhereUniqueWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasUpdateManyWithWhereWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type PagoCreateNestedManyWithoutEstado_pagoInput = {
    create?: XOR<PagoCreateWithoutEstado_pagoInput, PagoUncheckedCreateWithoutEstado_pagoInput> | PagoCreateWithoutEstado_pagoInput[] | PagoUncheckedCreateWithoutEstado_pagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutEstado_pagoInput | PagoCreateOrConnectWithoutEstado_pagoInput[]
    createMany?: PagoCreateManyEstado_pagoInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutEstado_pagoInput = {
    create?: XOR<PagoCreateWithoutEstado_pagoInput, PagoUncheckedCreateWithoutEstado_pagoInput> | PagoCreateWithoutEstado_pagoInput[] | PagoUncheckedCreateWithoutEstado_pagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutEstado_pagoInput | PagoCreateOrConnectWithoutEstado_pagoInput[]
    createMany?: PagoCreateManyEstado_pagoInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PagoUpdateManyWithoutEstado_pagoNestedInput = {
    create?: XOR<PagoCreateWithoutEstado_pagoInput, PagoUncheckedCreateWithoutEstado_pagoInput> | PagoCreateWithoutEstado_pagoInput[] | PagoUncheckedCreateWithoutEstado_pagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutEstado_pagoInput | PagoCreateOrConnectWithoutEstado_pagoInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutEstado_pagoInput | PagoUpsertWithWhereUniqueWithoutEstado_pagoInput[]
    createMany?: PagoCreateManyEstado_pagoInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutEstado_pagoInput | PagoUpdateWithWhereUniqueWithoutEstado_pagoInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutEstado_pagoInput | PagoUpdateManyWithWhereWithoutEstado_pagoInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type PagoUncheckedUpdateManyWithoutEstado_pagoNestedInput = {
    create?: XOR<PagoCreateWithoutEstado_pagoInput, PagoUncheckedCreateWithoutEstado_pagoInput> | PagoCreateWithoutEstado_pagoInput[] | PagoUncheckedCreateWithoutEstado_pagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutEstado_pagoInput | PagoCreateOrConnectWithoutEstado_pagoInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutEstado_pagoInput | PagoUpsertWithWhereUniqueWithoutEstado_pagoInput[]
    createMany?: PagoCreateManyEstado_pagoInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutEstado_pagoInput | PagoUpdateWithWhereUniqueWithoutEstado_pagoInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutEstado_pagoInput | PagoUpdateManyWithWhereWithoutEstado_pagoInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type PagoCreateNestedManyWithoutMetodo_de_pagoInput = {
    create?: XOR<PagoCreateWithoutMetodo_de_pagoInput, PagoUncheckedCreateWithoutMetodo_de_pagoInput> | PagoCreateWithoutMetodo_de_pagoInput[] | PagoUncheckedCreateWithoutMetodo_de_pagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMetodo_de_pagoInput | PagoCreateOrConnectWithoutMetodo_de_pagoInput[]
    createMany?: PagoCreateManyMetodo_de_pagoInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutMetodo_de_pagoInput = {
    create?: XOR<PagoCreateWithoutMetodo_de_pagoInput, PagoUncheckedCreateWithoutMetodo_de_pagoInput> | PagoCreateWithoutMetodo_de_pagoInput[] | PagoUncheckedCreateWithoutMetodo_de_pagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMetodo_de_pagoInput | PagoCreateOrConnectWithoutMetodo_de_pagoInput[]
    createMany?: PagoCreateManyMetodo_de_pagoInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PagoUpdateManyWithoutMetodo_de_pagoNestedInput = {
    create?: XOR<PagoCreateWithoutMetodo_de_pagoInput, PagoUncheckedCreateWithoutMetodo_de_pagoInput> | PagoCreateWithoutMetodo_de_pagoInput[] | PagoUncheckedCreateWithoutMetodo_de_pagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMetodo_de_pagoInput | PagoCreateOrConnectWithoutMetodo_de_pagoInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutMetodo_de_pagoInput | PagoUpsertWithWhereUniqueWithoutMetodo_de_pagoInput[]
    createMany?: PagoCreateManyMetodo_de_pagoInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutMetodo_de_pagoInput | PagoUpdateWithWhereUniqueWithoutMetodo_de_pagoInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutMetodo_de_pagoInput | PagoUpdateManyWithWhereWithoutMetodo_de_pagoInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type PagoUncheckedUpdateManyWithoutMetodo_de_pagoNestedInput = {
    create?: XOR<PagoCreateWithoutMetodo_de_pagoInput, PagoUncheckedCreateWithoutMetodo_de_pagoInput> | PagoCreateWithoutMetodo_de_pagoInput[] | PagoUncheckedCreateWithoutMetodo_de_pagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMetodo_de_pagoInput | PagoCreateOrConnectWithoutMetodo_de_pagoInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutMetodo_de_pagoInput | PagoUpsertWithWhereUniqueWithoutMetodo_de_pagoInput[]
    createMany?: PagoCreateManyMetodo_de_pagoInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutMetodo_de_pagoInput | PagoUpdateWithWhereUniqueWithoutMetodo_de_pagoInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutMetodo_de_pagoInput | PagoUpdateManyWithWhereWithoutMetodo_de_pagoInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type Estado_pagoCreateNestedOneWithoutPagoInput = {
    create?: XOR<Estado_pagoCreateWithoutPagoInput, Estado_pagoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: Estado_pagoCreateOrConnectWithoutPagoInput
    connect?: Estado_pagoWhereUniqueInput
  }

  export type Metodo_de_pagoCreateNestedOneWithoutPagoInput = {
    create?: XOR<Metodo_de_pagoCreateWithoutPagoInput, Metodo_de_pagoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: Metodo_de_pagoCreateOrConnectWithoutPagoInput
    connect?: Metodo_de_pagoWhereUniqueInput
  }

  export type CitasCreateNestedOneWithoutPagoInput = {
    create?: XOR<CitasCreateWithoutPagoInput, CitasUncheckedCreateWithoutPagoInput>
    connectOrCreate?: CitasCreateOrConnectWithoutPagoInput
    connect?: CitasWhereUniqueInput
  }

  export type TarjetaCreateNestedOneWithoutPagoInput = {
    create?: XOR<TarjetaCreateWithoutPagoInput, TarjetaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: TarjetaCreateOrConnectWithoutPagoInput
    connect?: TarjetaWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Estado_pagoUpdateOneWithoutPagoNestedInput = {
    create?: XOR<Estado_pagoCreateWithoutPagoInput, Estado_pagoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: Estado_pagoCreateOrConnectWithoutPagoInput
    upsert?: Estado_pagoUpsertWithoutPagoInput
    disconnect?: Estado_pagoWhereInput | boolean
    delete?: Estado_pagoWhereInput | boolean
    connect?: Estado_pagoWhereUniqueInput
    update?: XOR<XOR<Estado_pagoUpdateToOneWithWhereWithoutPagoInput, Estado_pagoUpdateWithoutPagoInput>, Estado_pagoUncheckedUpdateWithoutPagoInput>
  }

  export type Metodo_de_pagoUpdateOneWithoutPagoNestedInput = {
    create?: XOR<Metodo_de_pagoCreateWithoutPagoInput, Metodo_de_pagoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: Metodo_de_pagoCreateOrConnectWithoutPagoInput
    upsert?: Metodo_de_pagoUpsertWithoutPagoInput
    disconnect?: Metodo_de_pagoWhereInput | boolean
    delete?: Metodo_de_pagoWhereInput | boolean
    connect?: Metodo_de_pagoWhereUniqueInput
    update?: XOR<XOR<Metodo_de_pagoUpdateToOneWithWhereWithoutPagoInput, Metodo_de_pagoUpdateWithoutPagoInput>, Metodo_de_pagoUncheckedUpdateWithoutPagoInput>
  }

  export type CitasUpdateOneWithoutPagoNestedInput = {
    create?: XOR<CitasCreateWithoutPagoInput, CitasUncheckedCreateWithoutPagoInput>
    connectOrCreate?: CitasCreateOrConnectWithoutPagoInput
    upsert?: CitasUpsertWithoutPagoInput
    disconnect?: CitasWhereInput | boolean
    delete?: CitasWhereInput | boolean
    connect?: CitasWhereUniqueInput
    update?: XOR<XOR<CitasUpdateToOneWithWhereWithoutPagoInput, CitasUpdateWithoutPagoInput>, CitasUncheckedUpdateWithoutPagoInput>
  }

  export type TarjetaUpdateOneWithoutPagoNestedInput = {
    create?: XOR<TarjetaCreateWithoutPagoInput, TarjetaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: TarjetaCreateOrConnectWithoutPagoInput
    upsert?: TarjetaUpsertWithoutPagoInput
    disconnect?: TarjetaWhereInput | boolean
    delete?: TarjetaWhereInput | boolean
    connect?: TarjetaWhereUniqueInput
    update?: XOR<XOR<TarjetaUpdateToOneWithWhereWithoutPagoInput, TarjetaUpdateWithoutPagoInput>, TarjetaUncheckedUpdateWithoutPagoInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioCreateNestedManyWithoutRol_Usuario_RolToRolInput = {
    create?: XOR<UsuarioCreateWithoutRol_Usuario_RolToRolInput, UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput> | UsuarioCreateWithoutRol_Usuario_RolToRolInput[] | UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRol_Usuario_RolToRolInput | UsuarioCreateOrConnectWithoutRol_Usuario_RolToRolInput[]
    createMany?: UsuarioCreateManyRol_Usuario_RolToRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRol_Usuario_RolToRolInput = {
    create?: XOR<UsuarioCreateWithoutRol_Usuario_RolToRolInput, UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput> | UsuarioCreateWithoutRol_Usuario_RolToRolInput[] | UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRol_Usuario_RolToRolInput | UsuarioCreateOrConnectWithoutRol_Usuario_RolToRolInput[]
    createMany?: UsuarioCreateManyRol_Usuario_RolToRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutRol_Usuario_RolToRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRol_Usuario_RolToRolInput, UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput> | UsuarioCreateWithoutRol_Usuario_RolToRolInput[] | UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRol_Usuario_RolToRolInput | UsuarioCreateOrConnectWithoutRol_Usuario_RolToRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRol_Usuario_RolToRolInput | UsuarioUpsertWithWhereUniqueWithoutRol_Usuario_RolToRolInput[]
    createMany?: UsuarioCreateManyRol_Usuario_RolToRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRol_Usuario_RolToRolInput | UsuarioUpdateWithWhereUniqueWithoutRol_Usuario_RolToRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRol_Usuario_RolToRolInput | UsuarioUpdateManyWithWhereWithoutRol_Usuario_RolToRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutRol_Usuario_RolToRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRol_Usuario_RolToRolInput, UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput> | UsuarioCreateWithoutRol_Usuario_RolToRolInput[] | UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRol_Usuario_RolToRolInput | UsuarioCreateOrConnectWithoutRol_Usuario_RolToRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRol_Usuario_RolToRolInput | UsuarioUpsertWithWhereUniqueWithoutRol_Usuario_RolToRolInput[]
    createMany?: UsuarioCreateManyRol_Usuario_RolToRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRol_Usuario_RolToRolInput | UsuarioUpdateWithWhereUniqueWithoutRol_Usuario_RolToRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRol_Usuario_RolToRolInput | UsuarioUpdateManyWithWhereWithoutRol_Usuario_RolToRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type CitasCreateNestedManyWithoutServicioInput = {
    create?: XOR<CitasCreateWithoutServicioInput, CitasUncheckedCreateWithoutServicioInput> | CitasCreateWithoutServicioInput[] | CitasUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutServicioInput | CitasCreateOrConnectWithoutServicioInput[]
    createMany?: CitasCreateManyServicioInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type CitasUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<CitasCreateWithoutServicioInput, CitasUncheckedCreateWithoutServicioInput> | CitasCreateWithoutServicioInput[] | CitasUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutServicioInput | CitasCreateOrConnectWithoutServicioInput[]
    createMany?: CitasCreateManyServicioInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type CitasUpdateManyWithoutServicioNestedInput = {
    create?: XOR<CitasCreateWithoutServicioInput, CitasUncheckedCreateWithoutServicioInput> | CitasCreateWithoutServicioInput[] | CitasUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutServicioInput | CitasCreateOrConnectWithoutServicioInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutServicioInput | CitasUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: CitasCreateManyServicioInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutServicioInput | CitasUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutServicioInput | CitasUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type CitasUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<CitasCreateWithoutServicioInput, CitasUncheckedCreateWithoutServicioInput> | CitasCreateWithoutServicioInput[] | CitasUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutServicioInput | CitasCreateOrConnectWithoutServicioInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutServicioInput | CitasUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: CitasCreateManyServicioInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutServicioInput | CitasUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutServicioInput | CitasUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type PagoCreateNestedManyWithoutTarjetaInput = {
    create?: XOR<PagoCreateWithoutTarjetaInput, PagoUncheckedCreateWithoutTarjetaInput> | PagoCreateWithoutTarjetaInput[] | PagoUncheckedCreateWithoutTarjetaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutTarjetaInput | PagoCreateOrConnectWithoutTarjetaInput[]
    createMany?: PagoCreateManyTarjetaInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutTarjetaInput = {
    create?: XOR<UsuarioCreateWithoutTarjetaInput, UsuarioUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTarjetaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PagoUncheckedCreateNestedManyWithoutTarjetaInput = {
    create?: XOR<PagoCreateWithoutTarjetaInput, PagoUncheckedCreateWithoutTarjetaInput> | PagoCreateWithoutTarjetaInput[] | PagoUncheckedCreateWithoutTarjetaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutTarjetaInput | PagoCreateOrConnectWithoutTarjetaInput[]
    createMany?: PagoCreateManyTarjetaInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PagoUpdateManyWithoutTarjetaNestedInput = {
    create?: XOR<PagoCreateWithoutTarjetaInput, PagoUncheckedCreateWithoutTarjetaInput> | PagoCreateWithoutTarjetaInput[] | PagoUncheckedCreateWithoutTarjetaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutTarjetaInput | PagoCreateOrConnectWithoutTarjetaInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutTarjetaInput | PagoUpsertWithWhereUniqueWithoutTarjetaInput[]
    createMany?: PagoCreateManyTarjetaInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutTarjetaInput | PagoUpdateWithWhereUniqueWithoutTarjetaInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutTarjetaInput | PagoUpdateManyWithWhereWithoutTarjetaInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutTarjetaNestedInput = {
    create?: XOR<UsuarioCreateWithoutTarjetaInput, UsuarioUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTarjetaInput
    upsert?: UsuarioUpsertWithoutTarjetaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTarjetaInput, UsuarioUpdateWithoutTarjetaInput>, UsuarioUncheckedUpdateWithoutTarjetaInput>
  }

  export type PagoUncheckedUpdateManyWithoutTarjetaNestedInput = {
    create?: XOR<PagoCreateWithoutTarjetaInput, PagoUncheckedCreateWithoutTarjetaInput> | PagoCreateWithoutTarjetaInput[] | PagoUncheckedCreateWithoutTarjetaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutTarjetaInput | PagoCreateOrConnectWithoutTarjetaInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutTarjetaInput | PagoUpsertWithWhereUniqueWithoutTarjetaInput[]
    createMany?: PagoCreateManyTarjetaInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutTarjetaInput | PagoUpdateWithWhereUniqueWithoutTarjetaInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutTarjetaInput | PagoUpdateManyWithWhereWithoutTarjetaInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    create?: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput> | Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[] | Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    connectOrCreate?: Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    createMany?: Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInputEnvelope
    connect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
  }

  export type Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    create?: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput> | Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[] | Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    connectOrCreate?: Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    createMany?: Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInputEnvelope
    connect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
  }

  export type CitasCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    create?: XOR<CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput> | CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput[] | CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutUsuario_Citas_Id_clienteToUsuarioInput | CitasCreateOrConnectWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    createMany?: CitasCreateManyUsuario_Citas_Id_clienteToUsuarioInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type CitasCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    create?: XOR<CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput> | CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput[] | CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutUsuario_Citas_Id_estilistaToUsuarioInput | CitasCreateOrConnectWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    createMany?: CitasCreateManyUsuario_Citas_Id_estilistaToUsuarioInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type TarjetaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TarjetaCreateWithoutUsuarioInput, TarjetaUncheckedCreateWithoutUsuarioInput> | TarjetaCreateWithoutUsuarioInput[] | TarjetaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarjetaCreateOrConnectWithoutUsuarioInput | TarjetaCreateOrConnectWithoutUsuarioInput[]
    createMany?: TarjetaCreateManyUsuarioInputEnvelope
    connect?: TarjetaWhereUniqueInput | TarjetaWhereUniqueInput[]
  }

  export type RolCreateNestedOneWithoutUsuario_Usuario_RolToRolInput = {
    create?: XOR<RolCreateWithoutUsuario_Usuario_RolToRolInput, RolUncheckedCreateWithoutUsuario_Usuario_RolToRolInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuario_Usuario_RolToRolInput
    connect?: RolWhereUniqueInput
  }

  export type tokenCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput> | tokenCreateWithoutUsuarioInput[] | tokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tokenCreateOrConnectWithoutUsuarioInput | tokenCreateOrConnectWithoutUsuarioInput[]
    createMany?: tokenCreateManyUsuarioInputEnvelope
    connect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
  }

  export type Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    create?: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput> | Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[] | Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    connectOrCreate?: Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    createMany?: Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInputEnvelope
    connect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
  }

  export type Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    create?: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput> | Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[] | Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    connectOrCreate?: Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    createMany?: Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInputEnvelope
    connect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
  }

  export type CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    create?: XOR<CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput> | CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput[] | CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutUsuario_Citas_Id_clienteToUsuarioInput | CitasCreateOrConnectWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    createMany?: CitasCreateManyUsuario_Citas_Id_clienteToUsuarioInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    create?: XOR<CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput> | CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput[] | CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutUsuario_Citas_Id_estilistaToUsuarioInput | CitasCreateOrConnectWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    createMany?: CitasCreateManyUsuario_Citas_Id_estilistaToUsuarioInputEnvelope
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
  }

  export type TarjetaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TarjetaCreateWithoutUsuarioInput, TarjetaUncheckedCreateWithoutUsuarioInput> | TarjetaCreateWithoutUsuarioInput[] | TarjetaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarjetaCreateOrConnectWithoutUsuarioInput | TarjetaCreateOrConnectWithoutUsuarioInput[]
    createMany?: TarjetaCreateManyUsuarioInputEnvelope
    connect?: TarjetaWhereUniqueInput | TarjetaWhereUniqueInput[]
  }

  export type tokenUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput> | tokenCreateWithoutUsuarioInput[] | tokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tokenCreateOrConnectWithoutUsuarioInput | tokenCreateOrConnectWithoutUsuarioInput[]
    createMany?: tokenCreateManyUsuarioInputEnvelope
    connect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput = {
    create?: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput> | Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[] | Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    connectOrCreate?: Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    upsert?: Bloqueo_TemporalUpsertWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalUpsertWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    createMany?: Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInputEnvelope
    set?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    disconnect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    delete?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    connect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    update?: Bloqueo_TemporalUpdateWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalUpdateWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    updateMany?: Bloqueo_TemporalUpdateManyWithWhereWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalUpdateManyWithWhereWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    deleteMany?: Bloqueo_TemporalScalarWhereInput | Bloqueo_TemporalScalarWhereInput[]
  }

  export type Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput = {
    create?: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput> | Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[] | Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    connectOrCreate?: Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    upsert?: Bloqueo_TemporalUpsertWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalUpsertWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    createMany?: Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInputEnvelope
    set?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    disconnect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    delete?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    connect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    update?: Bloqueo_TemporalUpdateWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalUpdateWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    updateMany?: Bloqueo_TemporalUpdateManyWithWhereWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalUpdateManyWithWhereWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    deleteMany?: Bloqueo_TemporalScalarWhereInput | Bloqueo_TemporalScalarWhereInput[]
  }

  export type CitasUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput = {
    create?: XOR<CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput> | CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput[] | CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutUsuario_Citas_Id_clienteToUsuarioInput | CitasCreateOrConnectWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutUsuario_Citas_Id_clienteToUsuarioInput | CitasUpsertWithWhereUniqueWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    createMany?: CitasCreateManyUsuario_Citas_Id_clienteToUsuarioInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutUsuario_Citas_Id_clienteToUsuarioInput | CitasUpdateWithWhereUniqueWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutUsuario_Citas_Id_clienteToUsuarioInput | CitasUpdateManyWithWhereWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type CitasUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput = {
    create?: XOR<CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput> | CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput[] | CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutUsuario_Citas_Id_estilistaToUsuarioInput | CitasCreateOrConnectWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutUsuario_Citas_Id_estilistaToUsuarioInput | CitasUpsertWithWhereUniqueWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    createMany?: CitasCreateManyUsuario_Citas_Id_estilistaToUsuarioInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutUsuario_Citas_Id_estilistaToUsuarioInput | CitasUpdateWithWhereUniqueWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutUsuario_Citas_Id_estilistaToUsuarioInput | CitasUpdateManyWithWhereWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type TarjetaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TarjetaCreateWithoutUsuarioInput, TarjetaUncheckedCreateWithoutUsuarioInput> | TarjetaCreateWithoutUsuarioInput[] | TarjetaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarjetaCreateOrConnectWithoutUsuarioInput | TarjetaCreateOrConnectWithoutUsuarioInput[]
    upsert?: TarjetaUpsertWithWhereUniqueWithoutUsuarioInput | TarjetaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TarjetaCreateManyUsuarioInputEnvelope
    set?: TarjetaWhereUniqueInput | TarjetaWhereUniqueInput[]
    disconnect?: TarjetaWhereUniqueInput | TarjetaWhereUniqueInput[]
    delete?: TarjetaWhereUniqueInput | TarjetaWhereUniqueInput[]
    connect?: TarjetaWhereUniqueInput | TarjetaWhereUniqueInput[]
    update?: TarjetaUpdateWithWhereUniqueWithoutUsuarioInput | TarjetaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TarjetaUpdateManyWithWhereWithoutUsuarioInput | TarjetaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TarjetaScalarWhereInput | TarjetaScalarWhereInput[]
  }

  export type RolUpdateOneWithoutUsuario_Usuario_RolToRolNestedInput = {
    create?: XOR<RolCreateWithoutUsuario_Usuario_RolToRolInput, RolUncheckedCreateWithoutUsuario_Usuario_RolToRolInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuario_Usuario_RolToRolInput
    upsert?: RolUpsertWithoutUsuario_Usuario_RolToRolInput
    disconnect?: RolWhereInput | boolean
    delete?: RolWhereInput | boolean
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuario_Usuario_RolToRolInput, RolUpdateWithoutUsuario_Usuario_RolToRolInput>, RolUncheckedUpdateWithoutUsuario_Usuario_RolToRolInput>
  }

  export type tokenUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput> | tokenCreateWithoutUsuarioInput[] | tokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tokenCreateOrConnectWithoutUsuarioInput | tokenCreateOrConnectWithoutUsuarioInput[]
    upsert?: tokenUpsertWithWhereUniqueWithoutUsuarioInput | tokenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tokenCreateManyUsuarioInputEnvelope
    set?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    disconnect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    delete?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    connect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    update?: tokenUpdateWithWhereUniqueWithoutUsuarioInput | tokenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tokenUpdateManyWithWhereWithoutUsuarioInput | tokenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tokenScalarWhereInput | tokenScalarWhereInput[]
  }

  export type Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput = {
    create?: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput> | Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[] | Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    connectOrCreate?: Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    upsert?: Bloqueo_TemporalUpsertWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalUpsertWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    createMany?: Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInputEnvelope
    set?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    disconnect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    delete?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    connect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    update?: Bloqueo_TemporalUpdateWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalUpdateWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    updateMany?: Bloqueo_TemporalUpdateManyWithWhereWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalUpdateManyWithWhereWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    deleteMany?: Bloqueo_TemporalScalarWhereInput | Bloqueo_TemporalScalarWhereInput[]
  }

  export type Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput = {
    create?: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput> | Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[] | Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    connectOrCreate?: Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    upsert?: Bloqueo_TemporalUpsertWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalUpsertWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    createMany?: Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInputEnvelope
    set?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    disconnect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    delete?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    connect?: Bloqueo_TemporalWhereUniqueInput | Bloqueo_TemporalWhereUniqueInput[]
    update?: Bloqueo_TemporalUpdateWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalUpdateWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    updateMany?: Bloqueo_TemporalUpdateManyWithWhereWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalUpdateManyWithWhereWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    deleteMany?: Bloqueo_TemporalScalarWhereInput | Bloqueo_TemporalScalarWhereInput[]
  }

  export type CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput = {
    create?: XOR<CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput> | CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput[] | CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutUsuario_Citas_Id_clienteToUsuarioInput | CitasCreateOrConnectWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutUsuario_Citas_Id_clienteToUsuarioInput | CitasUpsertWithWhereUniqueWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    createMany?: CitasCreateManyUsuario_Citas_Id_clienteToUsuarioInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutUsuario_Citas_Id_clienteToUsuarioInput | CitasUpdateWithWhereUniqueWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutUsuario_Citas_Id_clienteToUsuarioInput | CitasUpdateManyWithWhereWithoutUsuario_Citas_Id_clienteToUsuarioInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput = {
    create?: XOR<CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput> | CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput[] | CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    connectOrCreate?: CitasCreateOrConnectWithoutUsuario_Citas_Id_estilistaToUsuarioInput | CitasCreateOrConnectWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    upsert?: CitasUpsertWithWhereUniqueWithoutUsuario_Citas_Id_estilistaToUsuarioInput | CitasUpsertWithWhereUniqueWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    createMany?: CitasCreateManyUsuario_Citas_Id_estilistaToUsuarioInputEnvelope
    set?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    disconnect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    delete?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    connect?: CitasWhereUniqueInput | CitasWhereUniqueInput[]
    update?: CitasUpdateWithWhereUniqueWithoutUsuario_Citas_Id_estilistaToUsuarioInput | CitasUpdateWithWhereUniqueWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    updateMany?: CitasUpdateManyWithWhereWithoutUsuario_Citas_Id_estilistaToUsuarioInput | CitasUpdateManyWithWhereWithoutUsuario_Citas_Id_estilistaToUsuarioInput[]
    deleteMany?: CitasScalarWhereInput | CitasScalarWhereInput[]
  }

  export type TarjetaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TarjetaCreateWithoutUsuarioInput, TarjetaUncheckedCreateWithoutUsuarioInput> | TarjetaCreateWithoutUsuarioInput[] | TarjetaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarjetaCreateOrConnectWithoutUsuarioInput | TarjetaCreateOrConnectWithoutUsuarioInput[]
    upsert?: TarjetaUpsertWithWhereUniqueWithoutUsuarioInput | TarjetaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TarjetaCreateManyUsuarioInputEnvelope
    set?: TarjetaWhereUniqueInput | TarjetaWhereUniqueInput[]
    disconnect?: TarjetaWhereUniqueInput | TarjetaWhereUniqueInput[]
    delete?: TarjetaWhereUniqueInput | TarjetaWhereUniqueInput[]
    connect?: TarjetaWhereUniqueInput | TarjetaWhereUniqueInput[]
    update?: TarjetaUpdateWithWhereUniqueWithoutUsuarioInput | TarjetaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TarjetaUpdateManyWithWhereWithoutUsuarioInput | TarjetaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TarjetaScalarWhereInput | TarjetaScalarWhereInput[]
  }

  export type tokenUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput> | tokenCreateWithoutUsuarioInput[] | tokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tokenCreateOrConnectWithoutUsuarioInput | tokenCreateOrConnectWithoutUsuarioInput[]
    upsert?: tokenUpsertWithWhereUniqueWithoutUsuarioInput | tokenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tokenCreateManyUsuarioInputEnvelope
    set?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    disconnect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    delete?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    connect?: tokenWhereUniqueInput | tokenWhereUniqueInput[]
    update?: tokenUpdateWithWhereUniqueWithoutUsuarioInput | tokenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tokenUpdateManyWithWhereWithoutUsuarioInput | tokenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tokenScalarWhereInput | tokenScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutTokenInput = {
    create?: XOR<UsuarioCreateWithoutTokenInput, UsuarioUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTokenInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UsuarioCreateWithoutTokenInput, UsuarioUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTokenInput
    upsert?: UsuarioUpsertWithoutTokenInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTokenInput, UsuarioUpdateWithoutTokenInput>, UsuarioUncheckedUpdateWithoutTokenInput>
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaCreateNestedManyWithoutUsuarioInput
    Rol_Usuario_RolToRol?: RolCreateNestedOneWithoutUsuario_Usuario_RolToRolInput
    token?: tokenCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Rol?: string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaUncheckedCreateNestedManyWithoutUsuarioInput
    token?: tokenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput, UsuarioUncheckedCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput>
  }

  export type UsuarioCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaCreateNestedManyWithoutUsuarioInput
    Rol_Usuario_RolToRol?: RolCreateNestedOneWithoutUsuario_Usuario_RolToRolInput
    token?: tokenCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Rol?: string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaUncheckedCreateNestedManyWithoutUsuarioInput
    token?: tokenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput, UsuarioUncheckedCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
  }

  export type UsuarioUpsertWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    update: XOR<UsuarioUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput, UsuarioUncheckedUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput>
    create: XOR<UsuarioCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput, UsuarioUncheckedCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput, UsuarioUncheckedUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput>
  }

  export type UsuarioUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUpdateManyWithoutUsuarioNestedInput
    Rol_Usuario_RolToRol?: RolUpdateOneWithoutUsuario_Usuario_RolToRolNestedInput
    token?: tokenUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Rol?: NullableStringFieldUpdateOperationsInput | string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUncheckedUpdateManyWithoutUsuarioNestedInput
    token?: tokenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUpsertWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    update: XOR<UsuarioUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput, UsuarioUncheckedUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
    create: XOR<UsuarioCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput, UsuarioUncheckedCreateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput, UsuarioUncheckedUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
  }

  export type UsuarioUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUpdateManyWithoutUsuarioNestedInput
    Rol_Usuario_RolToRol?: RolUpdateOneWithoutUsuario_Usuario_RolToRolNestedInput
    token?: tokenUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Rol?: NullableStringFieldUpdateOperationsInput | string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUncheckedUpdateManyWithoutUsuarioNestedInput
    token?: tokenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type Estado_citaCreateWithoutCitas_Citas_Estado_citaToEstado_citaInput = {
    Estado: string
  }

  export type Estado_citaUncheckedCreateWithoutCitas_Citas_Estado_citaToEstado_citaInput = {
    Id_estado_cita?: number
    Estado: string
  }

  export type Estado_citaCreateOrConnectWithoutCitas_Citas_Estado_citaToEstado_citaInput = {
    where: Estado_citaWhereUniqueInput
    create: XOR<Estado_citaCreateWithoutCitas_Citas_Estado_citaToEstado_citaInput, Estado_citaUncheckedCreateWithoutCitas_Citas_Estado_citaToEstado_citaInput>
  }

  export type UsuarioCreateWithoutCitas_Citas_Id_clienteToUsuarioInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaCreateNestedManyWithoutUsuarioInput
    Rol_Usuario_RolToRol?: RolCreateNestedOneWithoutUsuario_Usuario_RolToRolInput
    token?: tokenCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCitas_Citas_Id_clienteToUsuarioInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Rol?: string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaUncheckedCreateNestedManyWithoutUsuarioInput
    token?: tokenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCitas_Citas_Id_clienteToUsuarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCitas_Citas_Id_clienteToUsuarioInput, UsuarioUncheckedCreateWithoutCitas_Citas_Id_clienteToUsuarioInput>
  }

  export type UsuarioCreateWithoutCitas_Citas_Id_estilistaToUsuarioInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Tarjeta?: TarjetaCreateNestedManyWithoutUsuarioInput
    Rol_Usuario_RolToRol?: RolCreateNestedOneWithoutUsuario_Usuario_RolToRolInput
    token?: tokenCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCitas_Citas_Id_estilistaToUsuarioInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Rol?: string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Tarjeta?: TarjetaUncheckedCreateNestedManyWithoutUsuarioInput
    token?: tokenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCitas_Citas_Id_estilistaToUsuarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCitas_Citas_Id_estilistaToUsuarioInput, UsuarioUncheckedCreateWithoutCitas_Citas_Id_estilistaToUsuarioInput>
  }

  export type ServicioCreateWithoutCitasInput = {
    Nombre_Servicio: string
    Descripcion?: string | null
    Precio: Decimal | DecimalJsLike | number | string
    Duracion: Date | string
  }

  export type ServicioUncheckedCreateWithoutCitasInput = {
    Id_Servicio?: number
    Nombre_Servicio: string
    Descripcion?: string | null
    Precio: Decimal | DecimalJsLike | number | string
    Duracion: Date | string
  }

  export type ServicioCreateOrConnectWithoutCitasInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutCitasInput, ServicioUncheckedCreateWithoutCitasInput>
  }

  export type PagoCreateWithoutCitasInput = {
    Monto: Decimal | DecimalJsLike | number | string
    Fecha_Pago?: Date | string | null
    Id_pago?: string
    Estado_pago?: Estado_pagoCreateNestedOneWithoutPagoInput
    Metodo_de_pago?: Metodo_de_pagoCreateNestedOneWithoutPagoInput
    Tarjeta?: TarjetaCreateNestedOneWithoutPagoInput
  }

  export type PagoUncheckedCreateWithoutCitasInput = {
    Monto: Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: number | null
    Fecha_Pago?: Date | string | null
    Id_Estado_pago?: number | null
    Id_pago?: string
    id_tarjeta?: string | null
  }

  export type PagoCreateOrConnectWithoutCitasInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutCitasInput, PagoUncheckedCreateWithoutCitasInput>
  }

  export type PagoCreateManyCitasInputEnvelope = {
    data: PagoCreateManyCitasInput | PagoCreateManyCitasInput[]
    skipDuplicates?: boolean
  }

  export type Estado_citaUpsertWithoutCitas_Citas_Estado_citaToEstado_citaInput = {
    update: XOR<Estado_citaUpdateWithoutCitas_Citas_Estado_citaToEstado_citaInput, Estado_citaUncheckedUpdateWithoutCitas_Citas_Estado_citaToEstado_citaInput>
    create: XOR<Estado_citaCreateWithoutCitas_Citas_Estado_citaToEstado_citaInput, Estado_citaUncheckedCreateWithoutCitas_Citas_Estado_citaToEstado_citaInput>
    where?: Estado_citaWhereInput
  }

  export type Estado_citaUpdateToOneWithWhereWithoutCitas_Citas_Estado_citaToEstado_citaInput = {
    where?: Estado_citaWhereInput
    data: XOR<Estado_citaUpdateWithoutCitas_Citas_Estado_citaToEstado_citaInput, Estado_citaUncheckedUpdateWithoutCitas_Citas_Estado_citaToEstado_citaInput>
  }

  export type Estado_citaUpdateWithoutCitas_Citas_Estado_citaToEstado_citaInput = {
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type Estado_citaUncheckedUpdateWithoutCitas_Citas_Estado_citaToEstado_citaInput = {
    Id_estado_cita?: IntFieldUpdateOperationsInput | number
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithoutCitas_Citas_Id_clienteToUsuarioInput = {
    update: XOR<UsuarioUpdateWithoutCitas_Citas_Id_clienteToUsuarioInput, UsuarioUncheckedUpdateWithoutCitas_Citas_Id_clienteToUsuarioInput>
    create: XOR<UsuarioCreateWithoutCitas_Citas_Id_clienteToUsuarioInput, UsuarioUncheckedCreateWithoutCitas_Citas_Id_clienteToUsuarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCitas_Citas_Id_clienteToUsuarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCitas_Citas_Id_clienteToUsuarioInput, UsuarioUncheckedUpdateWithoutCitas_Citas_Id_clienteToUsuarioInput>
  }

  export type UsuarioUpdateWithoutCitas_Citas_Id_clienteToUsuarioInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUpdateManyWithoutUsuarioNestedInput
    Rol_Usuario_RolToRol?: RolUpdateOneWithoutUsuario_Usuario_RolToRolNestedInput
    token?: tokenUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCitas_Citas_Id_clienteToUsuarioInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Rol?: NullableStringFieldUpdateOperationsInput | string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUncheckedUpdateManyWithoutUsuarioNestedInput
    token?: tokenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUpsertWithoutCitas_Citas_Id_estilistaToUsuarioInput = {
    update: XOR<UsuarioUpdateWithoutCitas_Citas_Id_estilistaToUsuarioInput, UsuarioUncheckedUpdateWithoutCitas_Citas_Id_estilistaToUsuarioInput>
    create: XOR<UsuarioCreateWithoutCitas_Citas_Id_estilistaToUsuarioInput, UsuarioUncheckedCreateWithoutCitas_Citas_Id_estilistaToUsuarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCitas_Citas_Id_estilistaToUsuarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCitas_Citas_Id_estilistaToUsuarioInput, UsuarioUncheckedUpdateWithoutCitas_Citas_Id_estilistaToUsuarioInput>
  }

  export type UsuarioUpdateWithoutCitas_Citas_Id_estilistaToUsuarioInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Tarjeta?: TarjetaUpdateManyWithoutUsuarioNestedInput
    Rol_Usuario_RolToRol?: RolUpdateOneWithoutUsuario_Usuario_RolToRolNestedInput
    token?: tokenUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCitas_Citas_Id_estilistaToUsuarioInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Rol?: NullableStringFieldUpdateOperationsInput | string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Tarjeta?: TarjetaUncheckedUpdateManyWithoutUsuarioNestedInput
    token?: tokenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ServicioUpsertWithoutCitasInput = {
    update: XOR<ServicioUpdateWithoutCitasInput, ServicioUncheckedUpdateWithoutCitasInput>
    create: XOR<ServicioCreateWithoutCitasInput, ServicioUncheckedCreateWithoutCitasInput>
    where?: ServicioWhereInput
  }

  export type ServicioUpdateToOneWithWhereWithoutCitasInput = {
    where?: ServicioWhereInput
    data: XOR<ServicioUpdateWithoutCitasInput, ServicioUncheckedUpdateWithoutCitasInput>
  }

  export type ServicioUpdateWithoutCitasInput = {
    Nombre_Servicio?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Duracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioUncheckedUpdateWithoutCitasInput = {
    Id_Servicio?: IntFieldUpdateOperationsInput | number
    Nombre_Servicio?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Duracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoUpsertWithWhereUniqueWithoutCitasInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutCitasInput, PagoUncheckedUpdateWithoutCitasInput>
    create: XOR<PagoCreateWithoutCitasInput, PagoUncheckedCreateWithoutCitasInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutCitasInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutCitasInput, PagoUncheckedUpdateWithoutCitasInput>
  }

  export type PagoUpdateManyWithWhereWithoutCitasInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutCitasInput>
  }

  export type PagoScalarWhereInput = {
    AND?: PagoScalarWhereInput | PagoScalarWhereInput[]
    OR?: PagoScalarWhereInput[]
    NOT?: PagoScalarWhereInput | PagoScalarWhereInput[]
    Id_cita?: IntNullableFilter<"Pago"> | number | null
    Monto?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: IntNullableFilter<"Pago"> | number | null
    Fecha_Pago?: DateTimeNullableFilter<"Pago"> | Date | string | null
    Id_Estado_pago?: IntNullableFilter<"Pago"> | number | null
    Id_pago?: UuidFilter<"Pago"> | string
    id_tarjeta?: UuidNullableFilter<"Pago"> | string | null
  }

  export type CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Usuario_Citas_Id_clienteToUsuario?: UsuarioCreateNestedOneWithoutCitas_Citas_Id_clienteToUsuarioInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioCreateNestedOneWithoutCitas_Citas_Id_estilistaToUsuarioInput
    Servicio?: ServicioCreateNestedOneWithoutCitasInput
    Pago?: PagoCreateNestedManyWithoutCitasInput
  }

  export type CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    Id_cita?: number
    Id_servicio?: number | null
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Id_cliente?: string
    Id_estilista?: string
    Pago?: PagoUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitasCreateOrConnectWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    where: CitasWhereUniqueInput
    create: XOR<CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput, CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput>
  }

  export type CitasCreateManyEstado_cita_Citas_Estado_citaToEstado_citaInputEnvelope = {
    data: CitasCreateManyEstado_cita_Citas_Estado_citaToEstado_citaInput | CitasCreateManyEstado_cita_Citas_Estado_citaToEstado_citaInput[]
    skipDuplicates?: boolean
  }

  export type CitasUpsertWithWhereUniqueWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    where: CitasWhereUniqueInput
    update: XOR<CitasUpdateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput, CitasUncheckedUpdateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput>
    create: XOR<CitasCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput, CitasUncheckedCreateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput>
  }

  export type CitasUpdateWithWhereUniqueWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    where: CitasWhereUniqueInput
    data: XOR<CitasUpdateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput, CitasUncheckedUpdateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput>
  }

  export type CitasUpdateManyWithWhereWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    where: CitasScalarWhereInput
    data: XOR<CitasUpdateManyMutationInput, CitasUncheckedUpdateManyWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput>
  }

  export type CitasScalarWhereInput = {
    AND?: CitasScalarWhereInput | CitasScalarWhereInput[]
    OR?: CitasScalarWhereInput[]
    NOT?: CitasScalarWhereInput | CitasScalarWhereInput[]
    Id_cita?: IntFilter<"Citas"> | number
    Id_servicio?: IntNullableFilter<"Citas"> | number | null
    Fecha_cita?: DateTimeFilter<"Citas"> | Date | string
    Hora_inicio?: DateTimeFilter<"Citas"> | Date | string
    Estado_cita?: IntNullableFilter<"Citas"> | number | null
    Id_cliente?: UuidFilter<"Citas"> | string
    Id_estilista?: UuidFilter<"Citas"> | string
  }

  export type PagoCreateWithoutEstado_pagoInput = {
    Monto: Decimal | DecimalJsLike | number | string
    Fecha_Pago?: Date | string | null
    Id_pago?: string
    Metodo_de_pago?: Metodo_de_pagoCreateNestedOneWithoutPagoInput
    Citas?: CitasCreateNestedOneWithoutPagoInput
    Tarjeta?: TarjetaCreateNestedOneWithoutPagoInput
  }

  export type PagoUncheckedCreateWithoutEstado_pagoInput = {
    Id_cita?: number | null
    Monto: Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: number | null
    Fecha_Pago?: Date | string | null
    Id_pago?: string
    id_tarjeta?: string | null
  }

  export type PagoCreateOrConnectWithoutEstado_pagoInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutEstado_pagoInput, PagoUncheckedCreateWithoutEstado_pagoInput>
  }

  export type PagoCreateManyEstado_pagoInputEnvelope = {
    data: PagoCreateManyEstado_pagoInput | PagoCreateManyEstado_pagoInput[]
    skipDuplicates?: boolean
  }

  export type PagoUpsertWithWhereUniqueWithoutEstado_pagoInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutEstado_pagoInput, PagoUncheckedUpdateWithoutEstado_pagoInput>
    create: XOR<PagoCreateWithoutEstado_pagoInput, PagoUncheckedCreateWithoutEstado_pagoInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutEstado_pagoInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutEstado_pagoInput, PagoUncheckedUpdateWithoutEstado_pagoInput>
  }

  export type PagoUpdateManyWithWhereWithoutEstado_pagoInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutEstado_pagoInput>
  }

  export type PagoCreateWithoutMetodo_de_pagoInput = {
    Monto: Decimal | DecimalJsLike | number | string
    Fecha_Pago?: Date | string | null
    Id_pago?: string
    Estado_pago?: Estado_pagoCreateNestedOneWithoutPagoInput
    Citas?: CitasCreateNestedOneWithoutPagoInput
    Tarjeta?: TarjetaCreateNestedOneWithoutPagoInput
  }

  export type PagoUncheckedCreateWithoutMetodo_de_pagoInput = {
    Id_cita?: number | null
    Monto: Decimal | DecimalJsLike | number | string
    Fecha_Pago?: Date | string | null
    Id_Estado_pago?: number | null
    Id_pago?: string
    id_tarjeta?: string | null
  }

  export type PagoCreateOrConnectWithoutMetodo_de_pagoInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutMetodo_de_pagoInput, PagoUncheckedCreateWithoutMetodo_de_pagoInput>
  }

  export type PagoCreateManyMetodo_de_pagoInputEnvelope = {
    data: PagoCreateManyMetodo_de_pagoInput | PagoCreateManyMetodo_de_pagoInput[]
    skipDuplicates?: boolean
  }

  export type PagoUpsertWithWhereUniqueWithoutMetodo_de_pagoInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutMetodo_de_pagoInput, PagoUncheckedUpdateWithoutMetodo_de_pagoInput>
    create: XOR<PagoCreateWithoutMetodo_de_pagoInput, PagoUncheckedCreateWithoutMetodo_de_pagoInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutMetodo_de_pagoInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutMetodo_de_pagoInput, PagoUncheckedUpdateWithoutMetodo_de_pagoInput>
  }

  export type PagoUpdateManyWithWhereWithoutMetodo_de_pagoInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutMetodo_de_pagoInput>
  }

  export type Estado_pagoCreateWithoutPagoInput = {
    Estado: string
  }

  export type Estado_pagoUncheckedCreateWithoutPagoInput = {
    Id_estado_pago?: number
    Estado: string
  }

  export type Estado_pagoCreateOrConnectWithoutPagoInput = {
    where: Estado_pagoWhereUniqueInput
    create: XOR<Estado_pagoCreateWithoutPagoInput, Estado_pagoUncheckedCreateWithoutPagoInput>
  }

  export type Metodo_de_pagoCreateWithoutPagoInput = {
    Metodo: string
  }

  export type Metodo_de_pagoUncheckedCreateWithoutPagoInput = {
    id_metodo_pago?: number
    Metodo: string
  }

  export type Metodo_de_pagoCreateOrConnectWithoutPagoInput = {
    where: Metodo_de_pagoWhereUniqueInput
    create: XOR<Metodo_de_pagoCreateWithoutPagoInput, Metodo_de_pagoUncheckedCreateWithoutPagoInput>
  }

  export type CitasCreateWithoutPagoInput = {
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaCreateNestedOneWithoutCitas_Citas_Estado_citaToEstado_citaInput
    Usuario_Citas_Id_clienteToUsuario?: UsuarioCreateNestedOneWithoutCitas_Citas_Id_clienteToUsuarioInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioCreateNestedOneWithoutCitas_Citas_Id_estilistaToUsuarioInput
    Servicio?: ServicioCreateNestedOneWithoutCitasInput
  }

  export type CitasUncheckedCreateWithoutPagoInput = {
    Id_cita?: number
    Id_servicio?: number | null
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita?: number | null
    Id_cliente?: string
    Id_estilista?: string
  }

  export type CitasCreateOrConnectWithoutPagoInput = {
    where: CitasWhereUniqueInput
    create: XOR<CitasCreateWithoutPagoInput, CitasUncheckedCreateWithoutPagoInput>
  }

  export type TarjetaCreateWithoutPagoInput = {
    created_at?: Date | string
    numero_tarjeta: string
    titular: string
    vencimiento: Date | string
    id_tarjeta?: string
    Usuario?: UsuarioCreateNestedOneWithoutTarjetaInput
  }

  export type TarjetaUncheckedCreateWithoutPagoInput = {
    created_at?: Date | string
    numero_tarjeta: string
    titular: string
    vencimiento: Date | string
    id_cliente?: string
    id_tarjeta?: string
  }

  export type TarjetaCreateOrConnectWithoutPagoInput = {
    where: TarjetaWhereUniqueInput
    create: XOR<TarjetaCreateWithoutPagoInput, TarjetaUncheckedCreateWithoutPagoInput>
  }

  export type Estado_pagoUpsertWithoutPagoInput = {
    update: XOR<Estado_pagoUpdateWithoutPagoInput, Estado_pagoUncheckedUpdateWithoutPagoInput>
    create: XOR<Estado_pagoCreateWithoutPagoInput, Estado_pagoUncheckedCreateWithoutPagoInput>
    where?: Estado_pagoWhereInput
  }

  export type Estado_pagoUpdateToOneWithWhereWithoutPagoInput = {
    where?: Estado_pagoWhereInput
    data: XOR<Estado_pagoUpdateWithoutPagoInput, Estado_pagoUncheckedUpdateWithoutPagoInput>
  }

  export type Estado_pagoUpdateWithoutPagoInput = {
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type Estado_pagoUncheckedUpdateWithoutPagoInput = {
    Id_estado_pago?: IntFieldUpdateOperationsInput | number
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type Metodo_de_pagoUpsertWithoutPagoInput = {
    update: XOR<Metodo_de_pagoUpdateWithoutPagoInput, Metodo_de_pagoUncheckedUpdateWithoutPagoInput>
    create: XOR<Metodo_de_pagoCreateWithoutPagoInput, Metodo_de_pagoUncheckedCreateWithoutPagoInput>
    where?: Metodo_de_pagoWhereInput
  }

  export type Metodo_de_pagoUpdateToOneWithWhereWithoutPagoInput = {
    where?: Metodo_de_pagoWhereInput
    data: XOR<Metodo_de_pagoUpdateWithoutPagoInput, Metodo_de_pagoUncheckedUpdateWithoutPagoInput>
  }

  export type Metodo_de_pagoUpdateWithoutPagoInput = {
    Metodo?: StringFieldUpdateOperationsInput | string
  }

  export type Metodo_de_pagoUncheckedUpdateWithoutPagoInput = {
    id_metodo_pago?: IntFieldUpdateOperationsInput | number
    Metodo?: StringFieldUpdateOperationsInput | string
  }

  export type CitasUpsertWithoutPagoInput = {
    update: XOR<CitasUpdateWithoutPagoInput, CitasUncheckedUpdateWithoutPagoInput>
    create: XOR<CitasCreateWithoutPagoInput, CitasUncheckedCreateWithoutPagoInput>
    where?: CitasWhereInput
  }

  export type CitasUpdateToOneWithWhereWithoutPagoInput = {
    where?: CitasWhereInput
    data: XOR<CitasUpdateWithoutPagoInput, CitasUncheckedUpdateWithoutPagoInput>
  }

  export type CitasUpdateWithoutPagoInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaUpdateOneWithoutCitas_Citas_Estado_citaToEstado_citaNestedInput
    Usuario_Citas_Id_clienteToUsuario?: UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_clienteToUsuarioNestedInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_estilistaToUsuarioNestedInput
    Servicio?: ServicioUpdateOneWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateWithoutPagoInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Id_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
    Id_estilista?: StringFieldUpdateOperationsInput | string
  }

  export type TarjetaUpsertWithoutPagoInput = {
    update: XOR<TarjetaUpdateWithoutPagoInput, TarjetaUncheckedUpdateWithoutPagoInput>
    create: XOR<TarjetaCreateWithoutPagoInput, TarjetaUncheckedCreateWithoutPagoInput>
    where?: TarjetaWhereInput
  }

  export type TarjetaUpdateToOneWithWhereWithoutPagoInput = {
    where?: TarjetaWhereInput
    data: XOR<TarjetaUpdateWithoutPagoInput, TarjetaUncheckedUpdateWithoutPagoInput>
  }

  export type TarjetaUpdateWithoutPagoInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_tarjeta?: StringFieldUpdateOperationsInput | string
    titular?: StringFieldUpdateOperationsInput | string
    vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tarjeta?: StringFieldUpdateOperationsInput | string
    Usuario?: UsuarioUpdateOneRequiredWithoutTarjetaNestedInput
  }

  export type TarjetaUncheckedUpdateWithoutPagoInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_tarjeta?: StringFieldUpdateOperationsInput | string
    titular?: StringFieldUpdateOperationsInput | string
    vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_cliente?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateWithoutRol_Usuario_RolToRolInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaCreateNestedManyWithoutUsuarioInput
    token?: tokenCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaUncheckedCreateNestedManyWithoutUsuarioInput
    token?: tokenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRol_Usuario_RolToRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRol_Usuario_RolToRolInput, UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput>
  }

  export type UsuarioCreateManyRol_Usuario_RolToRolInputEnvelope = {
    data: UsuarioCreateManyRol_Usuario_RolToRolInput | UsuarioCreateManyRol_Usuario_RolToRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRol_Usuario_RolToRolInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRol_Usuario_RolToRolInput, UsuarioUncheckedUpdateWithoutRol_Usuario_RolToRolInput>
    create: XOR<UsuarioCreateWithoutRol_Usuario_RolToRolInput, UsuarioUncheckedCreateWithoutRol_Usuario_RolToRolInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRol_Usuario_RolToRolInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRol_Usuario_RolToRolInput, UsuarioUncheckedUpdateWithoutRol_Usuario_RolToRolInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRol_Usuario_RolToRolInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRol_Usuario_RolToRolInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    Nombre?: StringFilter<"Usuario"> | string
    Apellido?: StringFilter<"Usuario"> | string
    Email?: StringFilter<"Usuario"> | string
    Password?: StringFilter<"Usuario"> | string
    Fecha_de_registro?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    Activo?: BoolNullableFilter<"Usuario"> | boolean | null
    telefono?: StringNullableFilter<"Usuario"> | string | null
    Id_usuario?: UuidFilter<"Usuario"> | string
    Rol?: UuidNullableFilter<"Usuario"> | string | null
  }

  export type CitasCreateWithoutServicioInput = {
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaCreateNestedOneWithoutCitas_Citas_Estado_citaToEstado_citaInput
    Usuario_Citas_Id_clienteToUsuario?: UsuarioCreateNestedOneWithoutCitas_Citas_Id_clienteToUsuarioInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioCreateNestedOneWithoutCitas_Citas_Id_estilistaToUsuarioInput
    Pago?: PagoCreateNestedManyWithoutCitasInput
  }

  export type CitasUncheckedCreateWithoutServicioInput = {
    Id_cita?: number
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita?: number | null
    Id_cliente?: string
    Id_estilista?: string
    Pago?: PagoUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitasCreateOrConnectWithoutServicioInput = {
    where: CitasWhereUniqueInput
    create: XOR<CitasCreateWithoutServicioInput, CitasUncheckedCreateWithoutServicioInput>
  }

  export type CitasCreateManyServicioInputEnvelope = {
    data: CitasCreateManyServicioInput | CitasCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type CitasUpsertWithWhereUniqueWithoutServicioInput = {
    where: CitasWhereUniqueInput
    update: XOR<CitasUpdateWithoutServicioInput, CitasUncheckedUpdateWithoutServicioInput>
    create: XOR<CitasCreateWithoutServicioInput, CitasUncheckedCreateWithoutServicioInput>
  }

  export type CitasUpdateWithWhereUniqueWithoutServicioInput = {
    where: CitasWhereUniqueInput
    data: XOR<CitasUpdateWithoutServicioInput, CitasUncheckedUpdateWithoutServicioInput>
  }

  export type CitasUpdateManyWithWhereWithoutServicioInput = {
    where: CitasScalarWhereInput
    data: XOR<CitasUpdateManyMutationInput, CitasUncheckedUpdateManyWithoutServicioInput>
  }

  export type PagoCreateWithoutTarjetaInput = {
    Monto: Decimal | DecimalJsLike | number | string
    Fecha_Pago?: Date | string | null
    Id_pago?: string
    Estado_pago?: Estado_pagoCreateNestedOneWithoutPagoInput
    Metodo_de_pago?: Metodo_de_pagoCreateNestedOneWithoutPagoInput
    Citas?: CitasCreateNestedOneWithoutPagoInput
  }

  export type PagoUncheckedCreateWithoutTarjetaInput = {
    Id_cita?: number | null
    Monto: Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: number | null
    Fecha_Pago?: Date | string | null
    Id_Estado_pago?: number | null
    Id_pago?: string
  }

  export type PagoCreateOrConnectWithoutTarjetaInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutTarjetaInput, PagoUncheckedCreateWithoutTarjetaInput>
  }

  export type PagoCreateManyTarjetaInputEnvelope = {
    data: PagoCreateManyTarjetaInput | PagoCreateManyTarjetaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutTarjetaInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Rol_Usuario_RolToRol?: RolCreateNestedOneWithoutUsuario_Usuario_RolToRolInput
    token?: tokenCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTarjetaInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Rol?: string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    token?: tokenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTarjetaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTarjetaInput, UsuarioUncheckedCreateWithoutTarjetaInput>
  }

  export type PagoUpsertWithWhereUniqueWithoutTarjetaInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutTarjetaInput, PagoUncheckedUpdateWithoutTarjetaInput>
    create: XOR<PagoCreateWithoutTarjetaInput, PagoUncheckedCreateWithoutTarjetaInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutTarjetaInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutTarjetaInput, PagoUncheckedUpdateWithoutTarjetaInput>
  }

  export type PagoUpdateManyWithWhereWithoutTarjetaInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutTarjetaInput>
  }

  export type UsuarioUpsertWithoutTarjetaInput = {
    update: XOR<UsuarioUpdateWithoutTarjetaInput, UsuarioUncheckedUpdateWithoutTarjetaInput>
    create: XOR<UsuarioCreateWithoutTarjetaInput, UsuarioUncheckedCreateWithoutTarjetaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTarjetaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTarjetaInput, UsuarioUncheckedUpdateWithoutTarjetaInput>
  }

  export type UsuarioUpdateWithoutTarjetaInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Rol_Usuario_RolToRol?: RolUpdateOneWithoutUsuario_Usuario_RolToRolNestedInput
    token?: tokenUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTarjetaInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Rol?: NullableStringFieldUpdateOperationsInput | string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    token?: tokenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Expira_en?: Date | string | null
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: UsuarioCreateNestedOneWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioInput
  }

  export type Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    Id_bloqueo?: number
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Expira_en?: Date | string | null
    Id_estilista?: string
  }

  export type Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    where: Bloqueo_TemporalWhereUniqueInput
    create: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput>
  }

  export type Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInputEnvelope = {
    data: Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput | Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Expira_en?: Date | string | null
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: UsuarioCreateNestedOneWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioInput
  }

  export type Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    Id_bloqueo?: number
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Expira_en?: Date | string | null
    Id_cliente?: string
  }

  export type Bloqueo_TemporalCreateOrConnectWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    where: Bloqueo_TemporalWhereUniqueInput
    create: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
  }

  export type Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInputEnvelope = {
    data: Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput | Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaCreateNestedOneWithoutCitas_Citas_Estado_citaToEstado_citaInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioCreateNestedOneWithoutCitas_Citas_Id_estilistaToUsuarioInput
    Servicio?: ServicioCreateNestedOneWithoutCitasInput
    Pago?: PagoCreateNestedManyWithoutCitasInput
  }

  export type CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    Id_cita?: number
    Id_servicio?: number | null
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita?: number | null
    Id_estilista?: string
    Pago?: PagoUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitasCreateOrConnectWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    where: CitasWhereUniqueInput
    create: XOR<CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput>
  }

  export type CitasCreateManyUsuario_Citas_Id_clienteToUsuarioInputEnvelope = {
    data: CitasCreateManyUsuario_Citas_Id_clienteToUsuarioInput | CitasCreateManyUsuario_Citas_Id_clienteToUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaCreateNestedOneWithoutCitas_Citas_Estado_citaToEstado_citaInput
    Usuario_Citas_Id_clienteToUsuario?: UsuarioCreateNestedOneWithoutCitas_Citas_Id_clienteToUsuarioInput
    Servicio?: ServicioCreateNestedOneWithoutCitasInput
    Pago?: PagoCreateNestedManyWithoutCitasInput
  }

  export type CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    Id_cita?: number
    Id_servicio?: number | null
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita?: number | null
    Id_cliente?: string
    Pago?: PagoUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitasCreateOrConnectWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    where: CitasWhereUniqueInput
    create: XOR<CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput>
  }

  export type CitasCreateManyUsuario_Citas_Id_estilistaToUsuarioInputEnvelope = {
    data: CitasCreateManyUsuario_Citas_Id_estilistaToUsuarioInput | CitasCreateManyUsuario_Citas_Id_estilistaToUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TarjetaCreateWithoutUsuarioInput = {
    created_at?: Date | string
    numero_tarjeta: string
    titular: string
    vencimiento: Date | string
    id_tarjeta?: string
    Pago?: PagoCreateNestedManyWithoutTarjetaInput
  }

  export type TarjetaUncheckedCreateWithoutUsuarioInput = {
    created_at?: Date | string
    numero_tarjeta: string
    titular: string
    vencimiento: Date | string
    id_tarjeta?: string
    Pago?: PagoUncheckedCreateNestedManyWithoutTarjetaInput
  }

  export type TarjetaCreateOrConnectWithoutUsuarioInput = {
    where: TarjetaWhereUniqueInput
    create: XOR<TarjetaCreateWithoutUsuarioInput, TarjetaUncheckedCreateWithoutUsuarioInput>
  }

  export type TarjetaCreateManyUsuarioInputEnvelope = {
    data: TarjetaCreateManyUsuarioInput | TarjetaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RolCreateWithoutUsuario_Usuario_RolToRolInput = {
    Rol: string
    id_rol?: string
  }

  export type RolUncheckedCreateWithoutUsuario_Usuario_RolToRolInput = {
    Rol: string
    id_rol?: string
  }

  export type RolCreateOrConnectWithoutUsuario_Usuario_RolToRolInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuario_Usuario_RolToRolInput, RolUncheckedCreateWithoutUsuario_Usuario_RolToRolInput>
  }

  export type tokenCreateWithoutUsuarioInput = {
    id?: string
    created_at: Date | string
    token: string
    expired_at: Date | string
    revoked_at?: Date | string | null
    user_agent?: string | null
    ip_adress?: string | null
  }

  export type tokenUncheckedCreateWithoutUsuarioInput = {
    id?: string
    created_at: Date | string
    token: string
    expired_at: Date | string
    revoked_at?: Date | string | null
    user_agent?: string | null
    ip_adress?: string | null
  }

  export type tokenCreateOrConnectWithoutUsuarioInput = {
    where: tokenWhereUniqueInput
    create: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput>
  }

  export type tokenCreateManyUsuarioInputEnvelope = {
    data: tokenCreateManyUsuarioInput | tokenCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type Bloqueo_TemporalUpsertWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    where: Bloqueo_TemporalWhereUniqueInput
    update: XOR<Bloqueo_TemporalUpdateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput, Bloqueo_TemporalUncheckedUpdateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput>
    create: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput>
  }

  export type Bloqueo_TemporalUpdateWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    where: Bloqueo_TemporalWhereUniqueInput
    data: XOR<Bloqueo_TemporalUpdateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput, Bloqueo_TemporalUncheckedUpdateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput>
  }

  export type Bloqueo_TemporalUpdateManyWithWhereWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    where: Bloqueo_TemporalScalarWhereInput
    data: XOR<Bloqueo_TemporalUpdateManyMutationInput, Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput>
  }

  export type Bloqueo_TemporalScalarWhereInput = {
    AND?: Bloqueo_TemporalScalarWhereInput | Bloqueo_TemporalScalarWhereInput[]
    OR?: Bloqueo_TemporalScalarWhereInput[]
    NOT?: Bloqueo_TemporalScalarWhereInput | Bloqueo_TemporalScalarWhereInput[]
    Id_bloqueo?: IntFilter<"Bloqueo_Temporal"> | number
    Fecha_cita?: DateTimeFilter<"Bloqueo_Temporal"> | Date | string
    Hora_inicio?: DateTimeFilter<"Bloqueo_Temporal"> | Date | string
    Expira_en?: DateTimeNullableFilter<"Bloqueo_Temporal"> | Date | string | null
    Id_cliente?: UuidFilter<"Bloqueo_Temporal"> | string
    Id_estilista?: UuidFilter<"Bloqueo_Temporal"> | string
  }

  export type Bloqueo_TemporalUpsertWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    where: Bloqueo_TemporalWhereUniqueInput
    update: XOR<Bloqueo_TemporalUpdateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput, Bloqueo_TemporalUncheckedUpdateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
    create: XOR<Bloqueo_TemporalCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput, Bloqueo_TemporalUncheckedCreateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
  }

  export type Bloqueo_TemporalUpdateWithWhereUniqueWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    where: Bloqueo_TemporalWhereUniqueInput
    data: XOR<Bloqueo_TemporalUpdateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput, Bloqueo_TemporalUncheckedUpdateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
  }

  export type Bloqueo_TemporalUpdateManyWithWhereWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    where: Bloqueo_TemporalScalarWhereInput
    data: XOR<Bloqueo_TemporalUpdateManyMutationInput, Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput>
  }

  export type CitasUpsertWithWhereUniqueWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    where: CitasWhereUniqueInput
    update: XOR<CitasUpdateWithoutUsuario_Citas_Id_clienteToUsuarioInput, CitasUncheckedUpdateWithoutUsuario_Citas_Id_clienteToUsuarioInput>
    create: XOR<CitasCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_clienteToUsuarioInput>
  }

  export type CitasUpdateWithWhereUniqueWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    where: CitasWhereUniqueInput
    data: XOR<CitasUpdateWithoutUsuario_Citas_Id_clienteToUsuarioInput, CitasUncheckedUpdateWithoutUsuario_Citas_Id_clienteToUsuarioInput>
  }

  export type CitasUpdateManyWithWhereWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    where: CitasScalarWhereInput
    data: XOR<CitasUpdateManyMutationInput, CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioInput>
  }

  export type CitasUpsertWithWhereUniqueWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    where: CitasWhereUniqueInput
    update: XOR<CitasUpdateWithoutUsuario_Citas_Id_estilistaToUsuarioInput, CitasUncheckedUpdateWithoutUsuario_Citas_Id_estilistaToUsuarioInput>
    create: XOR<CitasCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput, CitasUncheckedCreateWithoutUsuario_Citas_Id_estilistaToUsuarioInput>
  }

  export type CitasUpdateWithWhereUniqueWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    where: CitasWhereUniqueInput
    data: XOR<CitasUpdateWithoutUsuario_Citas_Id_estilistaToUsuarioInput, CitasUncheckedUpdateWithoutUsuario_Citas_Id_estilistaToUsuarioInput>
  }

  export type CitasUpdateManyWithWhereWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    where: CitasScalarWhereInput
    data: XOR<CitasUpdateManyMutationInput, CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput>
  }

  export type TarjetaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: TarjetaWhereUniqueInput
    update: XOR<TarjetaUpdateWithoutUsuarioInput, TarjetaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TarjetaCreateWithoutUsuarioInput, TarjetaUncheckedCreateWithoutUsuarioInput>
  }

  export type TarjetaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: TarjetaWhereUniqueInput
    data: XOR<TarjetaUpdateWithoutUsuarioInput, TarjetaUncheckedUpdateWithoutUsuarioInput>
  }

  export type TarjetaUpdateManyWithWhereWithoutUsuarioInput = {
    where: TarjetaScalarWhereInput
    data: XOR<TarjetaUpdateManyMutationInput, TarjetaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TarjetaScalarWhereInput = {
    AND?: TarjetaScalarWhereInput | TarjetaScalarWhereInput[]
    OR?: TarjetaScalarWhereInput[]
    NOT?: TarjetaScalarWhereInput | TarjetaScalarWhereInput[]
    created_at?: DateTimeFilter<"Tarjeta"> | Date | string
    numero_tarjeta?: StringFilter<"Tarjeta"> | string
    titular?: StringFilter<"Tarjeta"> | string
    vencimiento?: DateTimeFilter<"Tarjeta"> | Date | string
    id_cliente?: UuidFilter<"Tarjeta"> | string
    id_tarjeta?: UuidFilter<"Tarjeta"> | string
  }

  export type RolUpsertWithoutUsuario_Usuario_RolToRolInput = {
    update: XOR<RolUpdateWithoutUsuario_Usuario_RolToRolInput, RolUncheckedUpdateWithoutUsuario_Usuario_RolToRolInput>
    create: XOR<RolCreateWithoutUsuario_Usuario_RolToRolInput, RolUncheckedCreateWithoutUsuario_Usuario_RolToRolInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuario_Usuario_RolToRolInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuario_Usuario_RolToRolInput, RolUncheckedUpdateWithoutUsuario_Usuario_RolToRolInput>
  }

  export type RolUpdateWithoutUsuario_Usuario_RolToRolInput = {
    Rol?: StringFieldUpdateOperationsInput | string
    id_rol?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateWithoutUsuario_Usuario_RolToRolInput = {
    Rol?: StringFieldUpdateOperationsInput | string
    id_rol?: StringFieldUpdateOperationsInput | string
  }

  export type tokenUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: tokenWhereUniqueInput
    update: XOR<tokenUpdateWithoutUsuarioInput, tokenUncheckedUpdateWithoutUsuarioInput>
    create: XOR<tokenCreateWithoutUsuarioInput, tokenUncheckedCreateWithoutUsuarioInput>
  }

  export type tokenUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: tokenWhereUniqueInput
    data: XOR<tokenUpdateWithoutUsuarioInput, tokenUncheckedUpdateWithoutUsuarioInput>
  }

  export type tokenUpdateManyWithWhereWithoutUsuarioInput = {
    where: tokenScalarWhereInput
    data: XOR<tokenUpdateManyMutationInput, tokenUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type tokenScalarWhereInput = {
    AND?: tokenScalarWhereInput | tokenScalarWhereInput[]
    OR?: tokenScalarWhereInput[]
    NOT?: tokenScalarWhereInput | tokenScalarWhereInput[]
    id?: UuidFilter<"token"> | string
    created_at?: DateTimeFilter<"token"> | Date | string
    Id_usuario?: UuidFilter<"token"> | string
    token?: StringFilter<"token"> | string
    expired_at?: DateTimeFilter<"token"> | Date | string
    revoked_at?: DateTimeNullableFilter<"token"> | Date | string | null
    user_agent?: StringNullableFilter<"token"> | string | null
    ip_adress?: StringNullableFilter<"token"> | string | null
  }

  export type UsuarioCreateWithoutTokenInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaCreateNestedManyWithoutUsuarioInput
    Rol_Usuario_RolToRol?: RolCreateNestedOneWithoutUsuario_Usuario_RolToRolInput
  }

  export type UsuarioUncheckedCreateWithoutTokenInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
    Rol?: string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedCreateNestedManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_clienteToUsuarioInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedCreateNestedManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput
    Tarjeta?: TarjetaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTokenInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTokenInput, UsuarioUncheckedCreateWithoutTokenInput>
  }

  export type UsuarioUpsertWithoutTokenInput = {
    update: XOR<UsuarioUpdateWithoutTokenInput, UsuarioUncheckedUpdateWithoutTokenInput>
    create: XOR<UsuarioCreateWithoutTokenInput, UsuarioUncheckedCreateWithoutTokenInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTokenInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTokenInput, UsuarioUncheckedUpdateWithoutTokenInput>
  }

  export type UsuarioUpdateWithoutTokenInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUpdateManyWithoutUsuarioNestedInput
    Rol_Usuario_RolToRol?: RolUpdateOneWithoutUsuario_Usuario_RolToRolNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTokenInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Rol?: NullableStringFieldUpdateOperationsInput | string | null
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PagoCreateManyCitasInput = {
    Monto: Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: number | null
    Fecha_Pago?: Date | string | null
    Id_Estado_pago?: number | null
    Id_pago?: string
    id_tarjeta?: string | null
  }

  export type PagoUpdateWithoutCitasInput = {
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    Estado_pago?: Estado_pagoUpdateOneWithoutPagoNestedInput
    Metodo_de_pago?: Metodo_de_pagoUpdateOneWithoutPagoNestedInput
    Tarjeta?: TarjetaUpdateOneWithoutPagoNestedInput
  }

  export type PagoUncheckedUpdateWithoutCitasInput = {
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Estado_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoUncheckedUpdateManyWithoutCitasInput = {
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Estado_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitasCreateManyEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    Id_cita?: number
    Id_servicio?: number | null
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Id_cliente?: string
    Id_estilista?: string
  }

  export type CitasUpdateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Usuario_Citas_Id_clienteToUsuario?: UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_clienteToUsuarioNestedInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_estilistaToUsuarioNestedInput
    Servicio?: ServicioUpdateOneWithoutCitasNestedInput
    Pago?: PagoUpdateManyWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Id_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Id_cliente?: StringFieldUpdateOperationsInput | string
    Id_estilista?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateManyWithoutEstado_cita_Citas_Estado_citaToEstado_citaInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Id_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Id_cliente?: StringFieldUpdateOperationsInput | string
    Id_estilista?: StringFieldUpdateOperationsInput | string
  }

  export type PagoCreateManyEstado_pagoInput = {
    Id_cita?: number | null
    Monto: Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: number | null
    Fecha_Pago?: Date | string | null
    Id_pago?: string
    id_tarjeta?: string | null
  }

  export type PagoUpdateWithoutEstado_pagoInput = {
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    Metodo_de_pago?: Metodo_de_pagoUpdateOneWithoutPagoNestedInput
    Citas?: CitasUpdateOneWithoutPagoNestedInput
    Tarjeta?: TarjetaUpdateOneWithoutPagoNestedInput
  }

  export type PagoUncheckedUpdateWithoutEstado_pagoInput = {
    Id_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoUncheckedUpdateManyWithoutEstado_pagoInput = {
    Id_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoCreateManyMetodo_de_pagoInput = {
    Id_cita?: number | null
    Monto: Decimal | DecimalJsLike | number | string
    Fecha_Pago?: Date | string | null
    Id_Estado_pago?: number | null
    Id_pago?: string
    id_tarjeta?: string | null
  }

  export type PagoUpdateWithoutMetodo_de_pagoInput = {
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    Estado_pago?: Estado_pagoUpdateOneWithoutPagoNestedInput
    Citas?: CitasUpdateOneWithoutPagoNestedInput
    Tarjeta?: TarjetaUpdateOneWithoutPagoNestedInput
  }

  export type PagoUncheckedUpdateWithoutMetodo_de_pagoInput = {
    Id_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Estado_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoUncheckedUpdateManyWithoutMetodo_de_pagoInput = {
    Id_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Estado_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    id_tarjeta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateManyRol_Usuario_RolToRolInput = {
    Nombre: string
    Apellido: string
    Email: string
    Password: string
    Fecha_de_registro?: Date | string | null
    Activo?: boolean | null
    telefono?: string | null
    Id_usuario?: string
  }

  export type UsuarioUpdateWithoutRol_Usuario_RolToRolInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUpdateManyWithoutUsuarioNestedInput
    token?: tokenUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRol_Usuario_RolToRolInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
    Bloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
    Bloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuario?: Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
    Citas_Citas_Id_clienteToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioNestedInput
    Citas_Citas_Id_estilistaToUsuario?: CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioNestedInput
    Tarjeta?: TarjetaUncheckedUpdateManyWithoutUsuarioNestedInput
    token?: tokenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRol_Usuario_RolToRolInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Fecha_de_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Id_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type CitasCreateManyServicioInput = {
    Id_cita?: number
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita?: number | null
    Id_cliente?: string
    Id_estilista?: string
  }

  export type CitasUpdateWithoutServicioInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaUpdateOneWithoutCitas_Citas_Estado_citaToEstado_citaNestedInput
    Usuario_Citas_Id_clienteToUsuario?: UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_clienteToUsuarioNestedInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_estilistaToUsuarioNestedInput
    Pago?: PagoUpdateManyWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateWithoutServicioInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
    Id_estilista?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateManyWithoutServicioInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
    Id_estilista?: StringFieldUpdateOperationsInput | string
  }

  export type PagoCreateManyTarjetaInput = {
    Id_cita?: number | null
    Monto: Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: number | null
    Fecha_Pago?: Date | string | null
    Id_Estado_pago?: number | null
    Id_pago?: string
  }

  export type PagoUpdateWithoutTarjetaInput = {
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_pago?: StringFieldUpdateOperationsInput | string
    Estado_pago?: Estado_pagoUpdateOneWithoutPagoNestedInput
    Metodo_de_pago?: Metodo_de_pagoUpdateOneWithoutPagoNestedInput
    Citas?: CitasUpdateOneWithoutPagoNestedInput
  }

  export type PagoUncheckedUpdateWithoutTarjetaInput = {
    Id_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Estado_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Id_pago?: StringFieldUpdateOperationsInput | string
  }

  export type PagoUncheckedUpdateManyWithoutTarjetaInput = {
    Id_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Id_Metodo_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_Estado_pago?: NullableIntFieldUpdateOperationsInput | number | null
    Id_pago?: StringFieldUpdateOperationsInput | string
  }

  export type Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    Id_bloqueo?: number
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Expira_en?: Date | string | null
    Id_estilista?: string
  }

  export type Bloqueo_TemporalCreateManyUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    Id_bloqueo?: number
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Expira_en?: Date | string | null
    Id_cliente?: string
  }

  export type CitasCreateManyUsuario_Citas_Id_clienteToUsuarioInput = {
    Id_cita?: number
    Id_servicio?: number | null
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita?: number | null
    Id_estilista?: string
  }

  export type CitasCreateManyUsuario_Citas_Id_estilistaToUsuarioInput = {
    Id_cita?: number
    Id_servicio?: number | null
    Fecha_cita: Date | string
    Hora_inicio: Date | string
    Estado_cita?: number | null
    Id_cliente?: string
  }

  export type TarjetaCreateManyUsuarioInput = {
    created_at?: Date | string
    numero_tarjeta: string
    titular: string
    vencimiento: Date | string
    id_tarjeta?: string
  }

  export type tokenCreateManyUsuarioInput = {
    id?: string
    created_at: Date | string
    token: string
    expired_at: Date | string
    revoked_at?: Date | string | null
    user_agent?: string | null
    ip_adress?: string | null
  }

  export type Bloqueo_TemporalUpdateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Usuario_Bloqueo_Temporal_Id_estilistaToUsuario?: UsuarioUpdateOneRequiredWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_estilistaToUsuarioNestedInput
  }

  export type Bloqueo_TemporalUncheckedUpdateWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    Id_bloqueo?: IntFieldUpdateOperationsInput | number
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_estilista?: StringFieldUpdateOperationsInput | string
  }

  export type Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_clienteToUsuarioInput = {
    Id_bloqueo?: IntFieldUpdateOperationsInput | number
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_estilista?: StringFieldUpdateOperationsInput | string
  }

  export type Bloqueo_TemporalUpdateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Usuario_Bloqueo_Temporal_Id_clienteToUsuario?: UsuarioUpdateOneRequiredWithoutBloqueo_Temporal_Bloqueo_Temporal_Id_clienteToUsuarioNestedInput
  }

  export type Bloqueo_TemporalUncheckedUpdateWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    Id_bloqueo?: IntFieldUpdateOperationsInput | number
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
  }

  export type Bloqueo_TemporalUncheckedUpdateManyWithoutUsuario_Bloqueo_Temporal_Id_estilistaToUsuarioInput = {
    Id_bloqueo?: IntFieldUpdateOperationsInput | number
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Expira_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
  }

  export type CitasUpdateWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaUpdateOneWithoutCitas_Citas_Estado_citaToEstado_citaNestedInput
    Usuario_Citas_Id_estilistaToUsuario?: UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_estilistaToUsuarioNestedInput
    Servicio?: ServicioUpdateOneWithoutCitasNestedInput
    Pago?: PagoUpdateManyWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Id_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Id_estilista?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_clienteToUsuarioInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Id_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Id_estilista?: StringFieldUpdateOperationsInput | string
  }

  export type CitasUpdateWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita_Citas_Estado_citaToEstado_cita?: Estado_citaUpdateOneWithoutCitas_Citas_Estado_citaToEstado_citaNestedInput
    Usuario_Citas_Id_clienteToUsuario?: UsuarioUpdateOneRequiredWithoutCitas_Citas_Id_clienteToUsuarioNestedInput
    Servicio?: ServicioUpdateOneWithoutCitasNestedInput
    Pago?: PagoUpdateManyWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Id_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitasUncheckedUpdateManyWithoutUsuario_Citas_Id_estilistaToUsuarioInput = {
    Id_cita?: IntFieldUpdateOperationsInput | number
    Id_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_cita?: DateTimeFieldUpdateOperationsInput | Date | string
    Hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado_cita?: NullableIntFieldUpdateOperationsInput | number | null
    Id_cliente?: StringFieldUpdateOperationsInput | string
  }

  export type TarjetaUpdateWithoutUsuarioInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_tarjeta?: StringFieldUpdateOperationsInput | string
    titular?: StringFieldUpdateOperationsInput | string
    vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tarjeta?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUpdateManyWithoutTarjetaNestedInput
  }

  export type TarjetaUncheckedUpdateWithoutUsuarioInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_tarjeta?: StringFieldUpdateOperationsInput | string
    titular?: StringFieldUpdateOperationsInput | string
    vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tarjeta?: StringFieldUpdateOperationsInput | string
    Pago?: PagoUncheckedUpdateManyWithoutTarjetaNestedInput
  }

  export type TarjetaUncheckedUpdateManyWithoutUsuarioInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_tarjeta?: StringFieldUpdateOperationsInput | string
    titular?: StringFieldUpdateOperationsInput | string
    vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tarjeta?: StringFieldUpdateOperationsInput | string
  }

  export type tokenUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    ip_adress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tokenUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    ip_adress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tokenUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    ip_adress?: NullableStringFieldUpdateOperationsInput | string | null
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