var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
import { WorkerEntrypoint } from "cloudflare:workers";

// ../../node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// ../../node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  __name(assertIs, "assertIs");
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  __name(assertNever, "assertNever");
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  __name(joinValues, "joinValues");
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = /* @__PURE__ */ __name((data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, "getParsedType");

// ../../node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = /* @__PURE__ */ __name((obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
}, "quotelessJson");
var ZodError = class _ZodError extends Error {
  static {
    __name(this, "ZodError");
  }
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = /* @__PURE__ */ __name((error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    }, "processError");
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// ../../node_modules/zod/v3/locales/en.js
var errorMap = /* @__PURE__ */ __name((issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
}, "errorMap");
var en_default = errorMap;

// ../../node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
__name(setErrorMap, "setErrorMap");
function getErrorMap() {
  return overrideErrorMap;
}
__name(getErrorMap, "getErrorMap");

// ../../node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = /* @__PURE__ */ __name((params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
}, "makeIssue");
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
__name(addIssueToContext, "addIssueToContext");
var ParseStatus = class _ParseStatus {
  static {
    __name(this, "ParseStatus");
  }
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = /* @__PURE__ */ __name((value) => ({ status: "dirty", value }), "DIRTY");
var OK = /* @__PURE__ */ __name((value) => ({ status: "valid", value }), "OK");
var isAborted = /* @__PURE__ */ __name((x) => x.status === "aborted", "isAborted");
var isDirty = /* @__PURE__ */ __name((x) => x.status === "dirty", "isDirty");
var isValid = /* @__PURE__ */ __name((x) => x.status === "valid", "isValid");
var isAsync = /* @__PURE__ */ __name((x) => typeof Promise !== "undefined" && x instanceof Promise, "isAsync");

// ../../node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// ../../node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  static {
    __name(this, "ParseInputLazyPath");
  }
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = /* @__PURE__ */ __name((ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
}, "handleResult");
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = /* @__PURE__ */ __name((iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  }, "customMap");
  return { errorMap: customMap, description };
}
__name(processCreateParams, "processCreateParams");
var ZodType = class {
  static {
    __name(this, "ZodType");
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = /* @__PURE__ */ __name((val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    }, "getIssueProperties");
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = /* @__PURE__ */ __name(() => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      }), "setError");
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: /* @__PURE__ */ __name((data) => this["~validate"](data), "validate")
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
__name(timeRegexSource, "timeRegexSource");
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
__name(timeRegex, "timeRegex");
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
__name(datetimeRegex, "datetimeRegex");
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
__name(isValidIP, "isValidIP");
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
__name(isValidJWT, "isValidJWT");
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
__name(isValidCidr, "isValidCidr");
var ZodString = class _ZodString extends ZodType {
  static {
    __name(this, "ZodString");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
__name(floatSafeRemainder, "floatSafeRemainder");
var ZodNumber = class _ZodNumber extends ZodType {
  static {
    __name(this, "ZodNumber");
  }
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  static {
    __name(this, "ZodBigInt");
  }
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  static {
    __name(this, "ZodBoolean");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  static {
    __name(this, "ZodDate");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  static {
    __name(this, "ZodSymbol");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  static {
    __name(this, "ZodUndefined");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  static {
    __name(this, "ZodNull");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  static {
    __name(this, "ZodAny");
  }
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  static {
    __name(this, "ZodUnknown");
  }
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  static {
    __name(this, "ZodNever");
  }
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  static {
    __name(this, "ZodVoid");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  static {
    __name(this, "ZodArray");
  }
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
__name(deepPartialify, "deepPartialify");
var ZodObject = class _ZodObject extends ZodType {
  static {
    __name(this, "ZodObject");
  }
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: /* @__PURE__ */ __name((issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }, "errorMap")
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => ({
        ...this._def.shape(),
        ...augmentation
      }), "shape")
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: /* @__PURE__ */ __name(() => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }), "shape"),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => shape, "shape")
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => shape, "shape")
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: /* @__PURE__ */ __name(() => shape, "shape"),
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: /* @__PURE__ */ __name(() => shape, "shape"),
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  static {
    __name(this, "ZodUnion");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    __name(handleResults, "handleResults");
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = /* @__PURE__ */ __name((type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
}, "getDiscriminator");
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  static {
    __name(this, "ZodDiscriminatedUnion");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
__name(mergeValues, "mergeValues");
var ZodIntersection = class extends ZodType {
  static {
    __name(this, "ZodIntersection");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = /* @__PURE__ */ __name((parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    }, "handleParsed");
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  static {
    __name(this, "ZodTuple");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  static {
    __name(this, "ZodRecord");
  }
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  static {
    __name(this, "ZodMap");
  }
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  static {
    __name(this, "ZodSet");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    __name(finalizeSet, "finalizeSet");
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  static {
    __name(this, "ZodFunction");
  }
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    __name(makeArgsIssue, "makeArgsIssue");
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    __name(makeReturnsIssue, "makeReturnsIssue");
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  static {
    __name(this, "ZodLazy");
  }
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  static {
    __name(this, "ZodLiteral");
  }
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
__name(createZodEnum, "createZodEnum");
var ZodEnum = class _ZodEnum extends ZodType {
  static {
    __name(this, "ZodEnum");
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  static {
    __name(this, "ZodNativeEnum");
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  static {
    __name(this, "ZodPromise");
  }
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  static {
    __name(this, "ZodEffects");
  }
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: /* @__PURE__ */ __name((arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      }, "addIssue"),
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = /* @__PURE__ */ __name((acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      }, "executeRefinement");
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  static {
    __name(this, "ZodOptional");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  static {
    __name(this, "ZodNullable");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  static {
    __name(this, "ZodDefault");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  static {
    __name(this, "ZodCatch");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  static {
    __name(this, "ZodNaN");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  static {
    __name(this, "ZodBranded");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  static {
    __name(this, "ZodPipeline");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = /* @__PURE__ */ __name(async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }, "handleAsync");
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  static {
    __name(this, "ZodReadonly");
  }
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = /* @__PURE__ */ __name((data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    }, "freeze");
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
__name(cleanParams, "cleanParams");
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
__name(custom, "custom");
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = /* @__PURE__ */ __name((cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params), "instanceOfType");
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = /* @__PURE__ */ __name(() => stringType().optional(), "ostring");
var onumber = /* @__PURE__ */ __name(() => numberType().optional(), "onumber");
var oboolean = /* @__PURE__ */ __name(() => booleanType().optional(), "oboolean");
var coerce = {
  string: /* @__PURE__ */ __name(((arg) => ZodString.create({ ...arg, coerce: true })), "string"),
  number: /* @__PURE__ */ __name(((arg) => ZodNumber.create({ ...arg, coerce: true })), "number"),
  boolean: /* @__PURE__ */ __name(((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })), "boolean"),
  bigint: /* @__PURE__ */ __name(((arg) => ZodBigInt.create({ ...arg, coerce: true })), "bigint"),
  date: /* @__PURE__ */ __name(((arg) => ZodDate.create({ ...arg, coerce: true })), "date")
};
var NEVER = INVALID;

// ../../src/domain/puzzles/campaignContracts.ts
var hintTierIdSchema = external_exports.enum([
  "observation",
  "connection",
  "assistance"
]);
var puzzleDifficultySchema = external_exports.enum([
  "tutorial",
  "easy",
  "medium",
  "hard",
  "page_finale"
]);
var puzzleTemplateIdSchema = external_exports.enum([
  "visual_sequence",
  "corrupted_text",
  "file_reconstruction",
  "mirror_matching",
  "spatial_logic",
  "evidence_matching",
  "authentic_memory_detection",
  "grid_path",
  "seven_segment",
  "multi_stage_reconstruction",
  "sorting",
  "letter_path",
  "network_connection",
  "silhouette_analysis",
  "memory_trail",
  "document_jigsaw",
  "memory_clustering",
  "sentence_reconstruction",
  "rotating_clock",
  "page_reconstruction"
]);
var localizedTextSchema = external_exports.object({
  ar: external_exports.string().min(1),
  en: external_exports.string().min(1)
});
var echoMindDeltaSchema = external_exports.object({
  emotions: external_exports.object({
    fear: external_exports.number().optional(),
    trust: external_exports.number().optional(),
    hope: external_exports.number().optional(),
    loneliness: external_exports.number().optional(),
    awareness: external_exports.number().optional(),
    memoryStability: external_exports.number().optional(),
    rage: external_exports.number().optional(),
    forgiveness: external_exports.number().optional(),
    corruption: external_exports.number().optional()
  }).default({}),
  beliefsAdded: external_exports.array(external_exports.string().min(1)).default([]),
  questionsAdded: external_exports.array(external_exports.string().min(1)).default([]),
  knowledgeNodesAdded: external_exports.array(external_exports.string().min(1)).default([])
});
var hintTierSchema = external_exports.object({
  id: hintTierIdSchema,
  cost: external_exports.number().int().nonnegative(),
  text: localizedTextSchema,
  effect: external_exports.enum([
    "text_only",
    "highlight_relevant",
    "remove_decoys",
    "lock_correct_element",
    "complete_one_step"
  ])
});
var interactionOptionSchema = external_exports.object({
  id: external_exports.string().min(1),
  label: localizedTextSchema,
  meta: localizedTextSchema.optional()
});
var interactionStageBaseSchema = external_exports.object({
  id: external_exports.string().min(1),
  prompt: localizedTextSchema,
  options: external_exports.array(interactionOptionSchema).min(2)
});
var interactionStageSchema = external_exports.discriminatedUnion("mode", [
  interactionStageBaseSchema.extend({
    mode: external_exports.literal("sequence"),
    solution: external_exports.array(external_exports.string().min(1)).min(2)
  }),
  interactionStageBaseSchema.extend({
    mode: external_exports.literal("single"),
    solution: external_exports.tuple([external_exports.string().min(1)])
  }),
  interactionStageBaseSchema.extend({
    mode: external_exports.literal("multi"),
    solution: external_exports.array(external_exports.string().min(1)).min(1)
  }),
  interactionStageBaseSchema.extend({
    mode: external_exports.literal("path"),
    solution: external_exports.array(external_exports.string().min(1)).min(2)
  }),
  interactionStageBaseSchema.extend({
    mode: external_exports.literal("match"),
    targets: external_exports.array(interactionOptionSchema).min(2),
    solution: external_exports.record(external_exports.string(), external_exports.string())
  }),
  external_exports.object({
    id: external_exports.string().min(1),
    mode: external_exports.literal("rings"),
    prompt: localizedTextSchema,
    rings: external_exports.array(external_exports.object({
      id: external_exports.string().min(1),
      values: external_exports.array(external_exports.string().min(1)).min(2)
    })).min(2),
    solution: external_exports.array(external_exports.string().min(1)).min(2)
  })
]);
var campaignPuzzleSchema = external_exports.object({
  id: external_exports.string().regex(/^puzzle_\d{3}_[a-z0-9_]+$/),
  order: external_exports.number().int().min(1).max(2e3),
  targetPageId: external_exports.string().regex(/^manhwa_ch\d{2}_page_\d{2}$/),
  title: localizedTextSchema,
  description: localizedTextSchema,
  template: puzzleTemplateIdSchema,
  difficulty: puzzleDifficultySchema,
  prerequisites: external_exports.array(external_exports.string()),
  stages: external_exports.array(interactionStageSchema).min(1),
  rewards: external_exports.object({
    coins: external_exports.number().int().nonnegative(),
    shardId: external_exports.string().regex(/^page\d{2}_shard_\d{2}$/)
  }),
  echoMindDelta: echoMindDeltaSchema,
  narrativeFlags: external_exports.array(external_exports.string().min(1)).min(1),
  dialogue: localizedTextSchema,
  dialogueTriggers: external_exports.array(external_exports.string().min(1)).default([]),
  hints: external_exports.array(hintTierSchema).length(3)
});
var campaignMemoryShardSchema = external_exports.object({
  id: external_exports.string().regex(/^page\d{2}_shard_\d{2}$/),
  pageId: external_exports.string().regex(/^manhwa_ch\d{2}_page_\d{2}$/),
  shardIndex: external_exports.number().int().min(1).max(10),
  sourcePuzzleId: external_exports.string().regex(/^puzzle_\d{3}_[a-z0-9_]+$/)
});
var manhwaMemoryPageSchema = external_exports.object({
  // Publication identifiers are immutable. The original Chapter 01 schema is
  // kept readable for legacy data, while new publications use a namespaced
  // source ID (for example echo_network_final_2026_09_v1_page_001).
  id: external_exports.string().regex(/^[a-z][a-z0-9_-]{2,127}$/i),
  chapterId: external_exports.string().regex(/^chapter_\d+$/),
  pageNumber: external_exports.number().int().positive(),
  title: localizedTextSchema,
  imageSrc: external_exports.string().startsWith("/"),
  accessibleDescription: localizedTextSchema,
  // Deferred PDF pages deliberately have no authored transcript until their
  // future puzzle batch is defined; unlocked authored pages still provide one.
  transcript: external_exports.array(localizedTextSchema),
  requiredShardIds: external_exports.array(
    external_exports.string().regex(/^page\d{2}_shard_\d{2}$/)
  ).superRefine((arr, ctx) => {
    if (arr.length !== 0 && arr.length !== 10) {
      ctx.addIssue({
        code: external_exports.ZodIssueCode.custom,
        message: "Array must contain exactly 10 element(s)"
      });
    }
  }),
  prerequisitePageId: external_exports.string().optional(),
  restoredStatus: external_exports.enum(["restored", "questioned"]),
  echoMindDelta: echoMindDeltaSchema,
  narrativeFlags: external_exports.array(external_exports.string().min(1)),
  dialogue: localizedTextSchema,
  dialogueTriggers: external_exports.array(external_exports.string().min(1)),
  globalPageNumber: external_exports.number().int().positive().optional(),
  pageKind: external_exports.enum([
    "cover",
    "credits",
    "chapter-cover",
    "chapter-page",
    "teaser",
    "back-cover",
    "outro"
  ]).optional()
});

// ../../src/content/manhwa/finalManhwa.ts
var FINAL_MANHWA_PUBLICATION_ID = "echo-network-final-2026-09-v1";
var FINAL_MANHWA_PAGE_COUNT = 70;
var FINAL_MANHWA_ASSET_ROOT = "/manhwa/echo-network-final-2026-09-v1";
var FINAL_MANHWA_XP_REWARDS = Object.freeze({
  chapter_1: 100,
  chapter_2: 150,
  chapter_3: 200,
  chapter_4: 250
});
var publicationChapterId = /* @__PURE__ */ __name((chapterId) => `${FINAL_MANHWA_PUBLICATION_ID}_${chapterId}`.replace(/-/g, "_"), "publicationChapterId");
var FINAL_MANHWA_CHAPTERS = Object.freeze([
  {
    chapterId: "chapter_1",
    publicationChapterId: publicationChapterId("chapter_1"),
    order: 1,
    title: { ar: "\u0639\u062A\u0628\u0629 11:11", en: "The 11:11 Threshold" },
    startPage: 2,
    endPage: 9,
    coverPage: 2,
    pageCount: 8,
    xpReward: FINAL_MANHWA_XP_REWARDS.chapter_1,
    published: true
  },
  {
    chapterId: "chapter_2",
    publicationChapterId: publicationChapterId("chapter_2"),
    order: 2,
    title: { ar: "\u0623\u0631\u0634\u064A\u0641 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u0645\u0641\u0642\u0648\u062F\u0629", en: "The Lost Memory Archive" },
    startPage: 10,
    endPage: 29,
    coverPage: 10,
    pageCount: 20,
    xpReward: FINAL_MANHWA_XP_REWARDS.chapter_2,
    prerequisiteChapterId: "chapter_1",
    published: false
  },
  {
    chapterId: "chapter_3",
    publicationChapterId: publicationChapterId("chapter_3"),
    order: 3,
    title: { ar: "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0625\u0646\u0633\u0627\u0646", en: "The Human Trial" },
    startPage: 30,
    endPage: 47,
    coverPage: 30,
    pageCount: 18,
    xpReward: FINAL_MANHWA_XP_REWARDS.chapter_3,
    prerequisiteChapterId: "chapter_2",
    published: false
  },
  {
    chapterId: "chapter_4",
    publicationChapterId: publicationChapterId("chapter_4"),
    order: 4,
    title: { ar: "\u0639\u0642\u062F Zero \u0648\u0627\u0644\u0639\u0648\u062F\u0629", en: "Zero\u2019s Contract and the Return" },
    startPage: 48,
    endPage: 69,
    coverPage: 48,
    pageCount: 22,
    xpReward: FINAL_MANHWA_XP_REWARDS.chapter_4,
    prerequisiteChapterId: "chapter_3",
    published: false
  }
]);
var EMPTY_ECHO_DELTA = Object.freeze({
  emotions: {},
  beliefsAdded: [],
  questionsAdded: [],
  knowledgeNodesAdded: []
});
var localized = /* @__PURE__ */ __name((ar, en) => ({ ar, en }), "localized");
function pageIdFor(globalPageNumber) {
  return `${FINAL_MANHWA_PUBLICATION_ID.replace(/-/g, "_")}_page_${String(
    globalPageNumber
  ).padStart(3, "0")}`;
}
__name(pageIdFor, "pageIdFor");
function chapterForPage(globalPageNumber) {
  return FINAL_MANHWA_CHAPTERS.find((chapter) => globalPageNumber >= chapter.startPage && globalPageNumber <= chapter.endPage);
}
__name(chapterForPage, "chapterForPage");
function descriptionForPage(globalPageNumber, chapter) {
  if (globalPageNumber === 1) {
    return localized(
      "\u063A\u0644\u0627\u0641 \u0645\u0627\u0646\u0647\u0648\u064E\u0627 11.11: Echo Network.",
      "Cover of 11.11: Echo Network."
    );
  }
  if (globalPageNumber === FINAL_MANHWA_PAGE_COUNT) {
    return localized(
      "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062E\u062A\u0627\u0645\u064A\u0629 \u0644\u0645\u0627\u0646\u0647\u0648\u064E\u0627 11.11: Echo Network.",
      "Closing page of 11.11: Echo Network."
    );
  }
  return localized(
    `\u0635\u0641\u062D\u0629 ${globalPageNumber} \u0645\u0646 \u0641\u0635\u0644 \xAB${chapter?.title.ar ?? "11.11"}\xBB \u0641\u064A \u0645\u0627\u0646\u0647\u0648\u064E\u0627 Echo Network. \u0627\u0644\u0646\u0635 \u0627\u0644\u062D\u0648\u0627\u0631\u064A \u062C\u0632\u0621 \u0645\u0646 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0645\u0635\u062F\u0631.`,
    `Page ${globalPageNumber} of \u201C${chapter?.title.en ?? "11.11"}\u201D in the Echo Network Manhwa. Dialogue is embedded in the source art.`
  );
}
__name(descriptionForPage, "descriptionForPage");
function createPage(globalPageNumber) {
  const chapter = chapterForPage(globalPageNumber);
  const chapterId = chapter?.chapterId ?? "chapter_0";
  const pageNumber = chapter ? globalPageNumber - chapter.startPage + 1 : globalPageNumber === 1 ? 1 : 2;
  const pageKind = globalPageNumber === 1 ? "cover" : globalPageNumber === FINAL_MANHWA_PAGE_COUNT ? "outro" : "chapter-page";
  const title = globalPageNumber === 1 ? localized("11.11: Echo Network", "11.11: Echo Network") : globalPageNumber === FINAL_MANHWA_PAGE_COUNT ? localized("\u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0645\u0624\u0642\u062A\u0629", "Closing Threshold") : localized(
    `${chapter?.title.ar ?? "11.11"} \u2014 \u0627\u0644\u0635\u0641\u062D\u0629 ${pageNumber}`,
    `${chapter?.title.en ?? "11.11"} \u2014 Page ${pageNumber}`
  );
  const published = globalPageNumber === 1 || chapter?.published === true;
  return {
    ...manhwaMemoryPageSchema.parse({
      id: pageIdFor(globalPageNumber),
      chapterId,
      pageNumber,
      title,
      imageSrc: `${FINAL_MANHWA_ASSET_ROOT}/page-${String(globalPageNumber).padStart(3, "0")}.webp`,
      accessibleDescription: descriptionForPage(globalPageNumber, chapter),
      // The PDF is art-only; an authored transcript remains a separate
      // accessibility deliverable and is never fabricated from image OCR.
      transcript: [],
      requiredShardIds: [],
      restoredStatus: "restored",
      echoMindDelta: EMPTY_ECHO_DELTA,
      narrativeFlags: [],
      dialogue: localized(
        "\u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u062C\u0632\u0621 \u0645\u0646 \u0625\u0635\u062F\u0627\u0631 Echo Network \u0627\u0644\u0645\u0635\u062D\u062D.",
        "This page belongs to the corrected Echo Network publication."
      ),
      dialogueTriggers: [],
      globalPageNumber,
      pageKind
    }),
    globalPageNumber,
    pageKind,
    published
  };
}
__name(createPage, "createPage");
var FINAL_MANHWA_PAGES = Object.freeze(
  Array.from({ length: FINAL_MANHWA_PAGE_COUNT }, (_, index) => createPage(index + 1))
);
var finalManhwaPageById = Object.fromEntries(
  FINAL_MANHWA_PAGES.map((page) => [page.id, page])
);
var FINAL_MANHWA_PAGE_BY_ID = Object.freeze(finalManhwaPageById);
var finalManhwaPageByGlobalNumber = Object.fromEntries(
  FINAL_MANHWA_PAGES.map((page) => [page.globalPageNumber, page])
);
var FINAL_MANHWA_PAGE_BY_GLOBAL_NUMBER = Object.freeze(
  finalManhwaPageByGlobalNumber
);

// ../../src/domain/echo-network/coopCaseCatalog.ts
var copy = /* @__PURE__ */ __name((ar, en) => ({ ar, en }), "copy");
var labels = /* @__PURE__ */ __name((...pairs) => Object.freeze(
  Object.fromEntries(pairs.map(([id, ar, en]) => [id, copy(ar, en)]))
), "labels");
function stage(id, mechanic, objective, prompt, options) {
  return Object.freeze({
    id,
    mechanic,
    objective,
    prompt,
    optionIds: Object.freeze(options.map(([optionId]) => optionId)),
    optionLabels: labels(...options)
  });
}
__name(stage, "stage");
var SIGNAL_OPTIONS = [
  ["echo", "Echo", "Echo"],
  ["memory", "\u0630\u0627\u0643\u0631\u0629", "Memory"],
  ["access", "\u0648\u0635\u0648\u0644", "Access"],
  ["signal", "\u0625\u0634\u0627\u0631\u0629", "Signal"]
];
var PATH_OPTIONS = [
  ["north", "\u0627\u0644\u0634\u0645\u0627\u0644", "North"],
  ["east", "\u0627\u0644\u0634\u0631\u0642", "East"],
  ["south", "\u0627\u0644\u062C\u0646\u0648\u0628", "South"],
  ["west", "\u0627\u0644\u063A\u0631\u0628", "West"]
];
function makeCase(seed) {
  const patternOptions = [
    ["11-11", "11 \xB7 11", "11 \xB7 11"],
    ["11-01", "11 \xB7 01", "11 \xB7 01"],
    ["01-11", "01 \xB7 11", "01 \xB7 11"],
    ["00-11", "00 \xB7 11", "00 \xB7 11"]
  ];
  return Object.freeze({
    id: seed.id,
    chapterId: seed.chapterId,
    order: seed.order,
    title: seed.title,
    description: seed.description,
    imageSrc: `${FINAL_MANHWA_ASSET_ROOT}/page-${String(seed.image).padStart(3, "0")}.webp`,
    focusCharacter: seed.focusCharacter,
    difficulty: seed.difficulty,
    estimatedMinutes: seed.difficulty === "guided" ? 12 : seed.difficulty === "standard" ? 15 : 18,
    stages: Object.freeze([
      stage(
        `${seed.id}-route`,
        seed.mechanics[0],
        copy("\u0648\u062D\u0651\u062F\u0648\u0627 \u0645\u0633\u0627\u0631 \u0627\u0644\u0630\u0627\u0643\u0631\u0629.", "Unify the memory route."),
        copy("\u0643\u0644 \u062F\u0648\u0631 \u064A\u0645\u0644\u0643 \u062C\u0632\u0621\u064B\u0627 \u0645\u062E\u062A\u0644\u0641\u064B\u0627 \u0645\u0646 \u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u062E\u0631\u0648\u062C.", "Each role owns a different part of the exit direction."),
        PATH_OPTIONS
      ),
      stage(
        `${seed.id}-identity`,
        seed.mechanics[1],
        copy("\u062B\u0628\u0651\u062A\u0648\u0627 \u0647\u0648\u064A\u0629 \u0627\u0644\u0625\u0634\u0627\u0631\u0629.", "Lock the signal identity."),
        copy("\u0627\u062F\u0645\u062C\u0648\u0627 \u0627\u0644\u0645\u0641\u062A\u0627\u062D \u0645\u0639 \u0633\u062C\u0644 \u0627\u0644\u0645\u0631\u0633\u0627\u0629 \u0642\u0628\u0644 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631.", "Combine the key with the anchor record before choosing."),
        SIGNAL_OPTIONS
      ),
      stage(
        `${seed.id}-pattern`,
        seed.mechanics[2],
        copy("\u0623\u063A\u0644\u0642\u0648\u0627 \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0623\u062E\u064A\u0631.", "Close the final pattern."),
        copy("\u0644\u0627 \u064A\u0631\u0649 \u0623\u064A \u0644\u0627\u0639\u0628 \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0643\u0627\u0645\u0644 \u0648\u062D\u062F\u0647.", "No player sees the complete pattern alone."),
        patternOptions
      )
    ])
  });
}
__name(makeCase, "makeCase");
var CASE_SEEDS = [
  ["warm-signal", "chapter_1", 1, "\u0646\u0628\u0636 \u0627\u0644\u0628\u0648\u0627\u0628\u0629", "Gate Pulse", 7, "echo", "guided", ["wiring", "cipher", "pattern"]],
  ["broken-window", "chapter_1", 2, "\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0623\u062B\u0631", "Trace Window", 9, "echo", "guided", ["image-reconstruction", "evidence", "routing"]],
  ["first-contract", "chapter_1", 3, "\u0627\u0644\u0631\u0627\u0628\u0637 \u0627\u0644\u0623\u0648\u0644", "First Link", 7, "echo", "standard", ["timeline", "cipher", "load-balance"]],
  ["nara-farewell", "chapter_1", 4, "\u062A\u0631\u062F\u062F \u0635\u0627\u0645\u062A", "Quiet Frequency", 9, "echo", "standard", ["evidence", "timeline", "pattern"]],
  ["red-circuit", "chapter_1", 5, "\u062F\u0627\u0626\u0631\u0629 \u0627\u0644\u0625\u0634\u0627\u0631\u0629", "Signal Circuit", 7, "echo", "standard", ["wiring", "routing", "load-balance"]],
  ["silent-key", "chapter_1", 6, "\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u0623\u0631\u0634\u064A\u0641", "Archive Key", 9, "echo", "standard", ["cipher", "evidence", "pattern"]],
  ["kenja-record", "chapter_1", 7, "\u0633\u062C\u0644 \u0627\u0644\u0639\u0642\u062F\u0629", "Node Record", 7, "echo", "standard", ["timeline", "image-reconstruction", "routing"]],
  ["zero-route", "chapter_1", 8, "\u0645\u0633\u0627\u0631 \u0627\u0644\u0625\u0634\u0627\u0631\u0629", "Signal Route", 9, "echo", "deep", ["routing", "cipher", "load-balance"]],
  ["mirror-memory", "chapter_1", 9, "\u0645\u0631\u0622\u0629 \u0627\u0644\u0623\u062B\u0631", "Trace Mirror", 7, "echo", "deep", ["image-reconstruction", "pattern", "evidence"]],
  ["lina-protocol", "chapter_1", 10, "\u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 \u0627\u0644\u0648\u0635\u0648\u0644", "Access Protocol", 9, "echo", "deep", ["load-balance", "wiring", "cipher"]],
  ["black-coronation", "chapter_1", 11, "\u0646\u0642\u0637\u0629 \u0627\u0644\u0627\u0646\u0639\u0643\u0627\u0633", "Reflection Point", 7, "echo", "deep", ["evidence", "timeline", "pattern"]],
  ["echo-fracture", "chapter_1", 12, "\u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u0634\u0638\u0627\u064A\u0627", "Shard Map", 9, "echo", "deep", ["routing", "load-balance", "image-reconstruction"]]
];
var COOP_CASES = Object.freeze(
  CASE_SEEDS.map((seed) => makeCase({
    id: `coop-${seed[0]}`,
    chapterId: seed[1],
    order: seed[2],
    title: copy(seed[3], seed[4]),
    description: copy(
      "\u0642\u0636\u064A\u0629 \u0645\u0646 \u062B\u0644\u0627\u062B \u0645\u0631\u0627\u062D\u0644 \u0645\u0648\u0632\u0639\u0629 \u0627\u0644\u0623\u062F\u0644\u0629 \u0628\u064A\u0646 \u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0641\u0631\u064A\u0642.",
      "A three-stage case with evidence split across team roles."
    ),
    image: seed[5],
    focusCharacter: seed[6],
    difficulty: seed[7],
    mechanics: seed[8]
  }))
);
var COOP_CASE_BY_ID = Object.freeze(
  Object.fromEntries(COOP_CASES.map((definition) => [definition.id, definition]))
);
var COOP_TRAINING_CASE_ID = COOP_CASES[0].id;

// ../../src/domain/echo-network/glicko2.ts
var SCALE = 173.7178;
var DEFAULT_TAU = 0.5;
var CONVERGENCE = 1e-6;
var g = /* @__PURE__ */ __name((phi) => 1 / Math.sqrt(1 + 3 * phi * phi / (Math.PI * Math.PI)), "g");
var expectation = /* @__PURE__ */ __name((mu, opponentMu, opponentPhi) => 1 / (1 + Math.exp(-g(opponentPhi) * (mu - opponentMu))), "expectation");
function nextVolatility(phi, volatility, variance, delta, tau) {
  const a = Math.log(volatility * volatility);
  const f = /* @__PURE__ */ __name((x) => {
    const exponential = Math.exp(x);
    const numerator = exponential * (delta * delta - phi * phi - variance - exponential);
    const denominator = 2 * Math.pow(phi * phi + variance + exponential, 2);
    return numerator / denominator - (x - a) / (tau * tau);
  }, "f");
  let lower = a;
  let upper;
  if (delta * delta > phi * phi + variance) {
    upper = Math.log(delta * delta - phi * phi - variance);
  } else {
    let multiplier = 1;
    upper = a - multiplier * tau;
    while (f(upper) < 0) {
      multiplier += 1;
      upper = a - multiplier * tau;
    }
  }
  let fLower = f(lower);
  let fUpper = f(upper);
  while (Math.abs(upper - lower) > CONVERGENCE) {
    const candidate = lower + (lower - upper) * fLower / (fUpper - fLower);
    const fCandidate = f(candidate);
    if (fCandidate * fUpper < 0) {
      lower = upper;
      fLower = fUpper;
    } else {
      fLower /= 2;
    }
    upper = candidate;
    fUpper = fCandidate;
  }
  return Math.exp(lower / 2);
}
__name(nextVolatility, "nextVolatility");
function updateGlicko2(player, opponents, tau = DEFAULT_TAU) {
  if (!Number.isFinite(tau) || tau <= 0) throw new Error("Glicko-2 tau must be positive.");
  const mu = (player.rating - 1500) / SCALE;
  const phi = player.deviation / SCALE;
  const volatility = player.volatility;
  if (opponents.length === 0) {
    return {
      ...player,
      deviation: Math.min(350, SCALE * Math.sqrt(phi * phi + volatility * volatility))
    };
  }
  const normalized = opponents.map((opponent) => ({
    mu: (opponent.rating - 1500) / SCALE,
    phi: opponent.deviation / SCALE,
    score: opponent.score
  }));
  const inverseVariance = normalized.reduce((total, opponent) => {
    const expected = expectation(mu, opponent.mu, opponent.phi);
    const weight = g(opponent.phi);
    return total + weight * weight * expected * (1 - expected);
  }, 0);
  if (inverseVariance <= 0) throw new Error("Glicko-2 variance is invalid.");
  const variance = 1 / inverseVariance;
  const improvement = normalized.reduce((total, opponent) => {
    return total + g(opponent.phi) * (opponent.score - expectation(mu, opponent.mu, opponent.phi));
  }, 0);
  const delta = variance * improvement;
  const updatedVolatility = nextVolatility(phi, volatility, variance, delta, tau);
  const preRatingPhi = Math.sqrt(phi * phi + updatedVolatility * updatedVolatility);
  const updatedPhi = 1 / Math.sqrt(1 / (preRatingPhi * preRatingPhi) + 1 / variance);
  const updatedMu = mu + updatedPhi * updatedPhi * improvement;
  return {
    rating: 1500 + SCALE * updatedMu,
    deviation: Math.max(30, Math.min(350, SCALE * updatedPhi)),
    volatility: updatedVolatility,
    gamesPlayed: player.gamesPlayed + opponents.length
  };
}
__name(updateGlicko2, "updateGlicko2");
var DEFAULT_GLICKO2_RATING = Object.freeze({
  rating: 1500,
  deviation: 350,
  volatility: 0.06,
  gamesPlayed: 0
});

// ../../src/domain/echo-network/partyRoomSafety.ts
var PARTY_RECONNECT_GRACE_MS = 45e3;
var PARTY_ROOM_ID_PATTERN = /^party-([A-Z2-9]{8,16})$/i;
function normalizePartyRoomId(value) {
  if (typeof value !== "string") return null;
  const match = PARTY_ROOM_ID_PATTERN.exec(value.trim());
  return match ? `party-${match[1].toUpperCase()}` : null;
}
__name(normalizePartyRoomId, "normalizePartyRoomId");
function earliestPartyCleanupAlarm(existingAlarm, requestedAt) {
  return existingAlarm === null ? requestedAt : Math.min(existingAlarm, requestedAt);
}
__name(earliestPartyCleanupAlarm, "earliestPartyCleanupAlarm");

// ../../src/domain/echo-network/seasonCatalog.ts
var ECHO_SEASON_DURATION_DAYS = 56;
var ECHO_SEASON_EPOCH_MS = Date.parse("2026-08-10T11:11:00.000Z");
var DAY_MS = 24 * 60 * 60 * 1e3;
var SEASON_MS = ECHO_SEASON_DURATION_DAYS * DAY_MS;
var CHARACTER_ROTATION = ["yuki", "nara", "kenja", "lina", "zero", "echo"];
var WEEK_COPY = [
  ["\u0627\u0644\u0623\u062B\u0631 \u0627\u0644\u062F\u0627\u0641\u0626", "Warm Trace"],
  ["\u0627\u0644\u0648\u062F\u0627\u0639 \u0627\u0644\u0630\u064A \u0644\u0645 \u064A\u064F\u0633\u062C\u0651\u0644", "The Unrecorded Farewell"],
  ["\u0633\u062C\u0644 \u0627\u0644\u062D\u0627\u0631\u0633", "The Warden Record"],
  ["\u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 \u0644\u064A\u0646\u0627", "Lina Protocol"],
  ["\u0635\u0641\u0631 \u062F\u0627\u062E\u0644 \u0627\u0644\u0636\u0648\u0636\u0627\u0621", "Zero in the Noise"],
  ["\u0635\u0648\u062A Echo \u0627\u0644\u0622\u062E\u0631", "The Other Echo"]
];
function seasonActivities(index) {
  const investigations = WEEK_COPY.map(([ar, en], week) => ({
    id: `season-${index + 1}-week-${week + 1}`,
    week: week + 1,
    kind: "investigation",
    title: { ar, en },
    description: {
      ar: "\u0642\u0636\u064A\u0629 \u0630\u0627\u0643\u0631\u0629 \u0622\u0645\u0646\u0629 \u0644\u0644\u0640Canon \u062A\u062A\u063A\u064A\u0631 \u0623\u062F\u0644\u062A\u0647\u0627 \u062D\u0633\u0628 \u0623\u062F\u0627\u0621 \u0627\u0644\u0641\u0631\u064A\u0642.",
      en: "A Canon-safe memory case whose evidence adapts to the team."
    },
    focusCharacter: CHARACTER_ROTATION[(index + week) % CHARACTER_ROTATION.length]
  }));
  return Object.freeze([
    ...investigations,
    {
      id: `season-${index + 1}-global-finale`,
      week: 7,
      kind: "community-finale",
      title: { ar: "\u0627\u0644\u0627\u062E\u062A\u0631\u0627\u0642 \u0627\u0644\u0639\u0627\u0644\u0645\u064A", en: "Global Breach" },
      description: {
        ar: "\u062A\u062C\u062A\u0645\u0639 \u0645\u0633\u0627\u0647\u0645\u0627\u062A \u0627\u0644\u0644\u0627\u0639\u0628\u064A\u0646 \u0644\u0641\u062A\u062D \u0627\u0644\u0642\u0636\u064A\u0629 \u0627\u0644\u062A\u0639\u0627\u0648\u0646\u064A\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629.",
        en: "Player contributions unlock the final cooperative case."
      },
      focusCharacter: "echo"
    },
    {
      id: `season-${index + 1}-recovery`,
      week: 8,
      kind: "recovery",
      title: { ar: "\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0627\u0633\u062A\u062F\u0631\u0627\u0643", en: "Recovery Window" },
      description: {
        ar: "\u0623\u0633\u0628\u0648\u0639 \u0647\u0627\u062F\u0626 \u0644\u0625\u0643\u0645\u0627\u0644 \u0645\u0627 \u0641\u0627\u062A \u0642\u0628\u0644 \u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0644\u0645\u0648\u0633\u0645 \u0625\u0644\u0649 \u0627\u0644\u0623\u0631\u0634\u064A\u0641.",
        en: "A calm catch-up week before the season enters the archive."
      },
      focusCharacter: "echo"
    }
  ]);
}
__name(seasonActivities, "seasonActivities");
function seasonAt(now = Date.now()) {
  const safeNow = Math.max(ECHO_SEASON_EPOCH_MS, now);
  const index = Math.floor((safeNow - ECHO_SEASON_EPOCH_MS) / SEASON_MS);
  const startsAtMs = ECHO_SEASON_EPOCH_MS + index * SEASON_MS;
  const endsAtMs = startsAtMs + SEASON_MS;
  return {
    id: `echo-fractures-s${String(index + 1).padStart(2, "0")}`,
    version: 1,
    title: {
      ar: `\u0634\u0642\u0648\u0642 Echo // \u0627\u0644\u0645\u0648\u0633\u0645 ${index + 1}`,
      en: `Echo Fractures // Season ${index + 1}`
    },
    startsAt: new Date(startsAtMs).toISOString(),
    endsAt: new Date(endsAtMs).toISOString(),
    archiveAt: new Date(endsAtMs).toISOString(),
    activities: seasonActivities(index)
  };
}
__name(seasonAt, "seasonAt");
function seasonWeekAt(now = Date.now()) {
  const season = seasonAt(now);
  const elapsed = Math.max(0, now - Date.parse(season.startsAt));
  return Math.min(8, Math.floor(elapsed / (7 * DAY_MS)) + 1);
}
__name(seasonWeekAt, "seasonWeekAt");

// ../../src/domain/echo-network/contracts.ts
var NETWORK_LOCALES = ["ar", "en"];
var ONLINE_MODES = [
  "chess_ranked_blitz",
  "chess_ranked_rapid",
  "chess_casual",
  "chess_anomaly",
  "coop_breach"
];
var onlineModeSchema = external_exports.enum(ONLINE_MODES);
var CHESS_VARIANTS = [
  "standard",
  "three-signal",
  "core-control",
  "fog-memory"
];
var realtimeTicketRequestSchema = external_exports.object({
  purpose: external_exports.enum(["queue", "connect"]),
  target: external_exports.enum(["match", "party", "community"]).default("match"),
  mode: onlineModeSchema,
  roomId: external_exports.string().trim().min(3).max(96).optional(),
  caseId: external_exports.string().trim().min(3).max(96).optional(),
  variant: external_exports.enum(CHESS_VARIANTS).optional(),
  region: external_exports.enum(["me", "afr", "eeur", "weur", "enam", "wnam", "sam", "apac", "oc"]).default("me")
});
var realtimeTicketPayloadSchema = external_exports.object({
  v: external_exports.literal(1),
  iss: external_exports.enum(["eleven-eleven-pages", "eleven-eleven-realtime"]),
  aud: external_exports.literal("eleven-eleven-realtime"),
  purpose: external_exports.enum(["queue", "connect"]),
  target: external_exports.enum(["matchmaking", "match", "party", "community"]),
  uid: external_exports.string().min(1).max(128),
  displayName: external_exports.string().min(1).max(80),
  mode: onlineModeSchema,
  roomId: external_exports.string().min(3).max(96).optional(),
  partySize: external_exports.number().int().min(2).max(4).optional(),
  caseId: external_exports.string().min(3).max(96).optional(),
  variant: external_exports.enum(CHESS_VARIANTS).optional(),
  region: external_exports.string().min(2).max(8),
  // Ranked placement and rating bands are issued by the authenticated Pages
  // boundary. Clients never select the pool that they enter.
  ratingBand: external_exports.string().regex(/^(provisional|glicko-[0-9]{4})$/).optional(),
  iat: external_exports.number().int().nonnegative(),
  exp: external_exports.number().int().positive(),
  jti: external_exports.string().uuid()
});
var realtimeEnvelopeSchema = external_exports.object({
  version: external_exports.literal(1),
  eventId: external_exports.string().uuid(),
  roomId: external_exports.string().min(3).max(96),
  sequence: external_exports.number().int().nonnegative(),
  type: external_exports.string().min(1).max(64),
  sentAt: external_exports.number().int().nonnegative(),
  payload: external_exports.record(external_exports.unknown())
});
var roomCommandSchema = external_exports.object({
  version: external_exports.literal(1),
  eventId: external_exports.string().uuid(),
  idempotencyKey: external_exports.string().min(8).max(128),
  expectedVersion: external_exports.number().int().nonnegative(),
  type: external_exports.enum([
    "ready",
    "move",
    "resign",
    "coop-submit",
    "hint-vote",
    "restart-vote",
    "preset-chat",
    "party-launch",
    "resume",
    "ping"
  ]),
  sentAt: external_exports.number().int().nonnegative(),
  payload: external_exports.record(external_exports.unknown()).default({})
});
var matchReceiptSchema = external_exports.object({
  version: external_exports.literal(1),
  receiptId: external_exports.string().uuid(),
  matchId: external_exports.string().min(3).max(96),
  mode: onlineModeSchema,
  context: external_exports.object({
    caseId: external_exports.string().min(3).max(96).nullable(),
    variant: external_exports.enum(CHESS_VARIANTS).nullable()
  }),
  status: external_exports.enum(["completed", "resigned", "timeout", "abandoned"]),
  participants: external_exports.array(external_exports.object({
    uid: external_exports.string().min(1).max(128),
    outcome: external_exports.enum(["win", "loss", "draw", "completed"]),
    participationMs: external_exports.number().int().nonnegative()
  })).min(1).max(4),
  winnerUid: external_exports.string().min(1).max(128).nullable(),
  durationMs: external_exports.number().int().nonnegative(),
  rewards: external_exports.array(external_exports.object({
    uid: external_exports.string().min(1).max(128),
    rewardKey: external_exports.string().min(8).max(160),
    xpAmount: external_exports.number().int().nonnegative(),
    cosmeticIds: external_exports.array(external_exports.string().min(1).max(96)).max(8).default([])
  })).min(1).max(4),
  completedAt: external_exports.string().datetime(),
  integrityHash: external_exports.string().min(16).max(128)
});
var communityPostSchema = external_exports.object({
  id: external_exports.string().min(3).max(96),
  authorUid: external_exports.string().min(1).max(128).nullable(),
  authorName: external_exports.string().min(1).max(80),
  locale: external_exports.enum(NETWORK_LOCALES),
  channel: external_exports.enum(["official", "story", "puzzles", "chess", "coop", "creator"]),
  body: external_exports.string().min(1).max(600),
  cardId: external_exports.string().max(96).nullable(),
  status: external_exports.enum(["official", "pending", "approved", "rejected"]),
  createdAt: external_exports.string().datetime()
});
var moderationCaseSchema = external_exports.object({
  id: external_exports.string().uuid(),
  reporterUid: external_exports.string().min(1).max(128),
  targetType: external_exports.enum(["message", "post", "profile", "puzzle", "match"]),
  targetId: external_exports.string().min(1).max(128),
  reason: external_exports.enum(["abuse", "spam", "privacy", "cheating", "unsafe-content", "other"]),
  detail: external_exports.string().max(500),
  status: external_exports.enum(["open", "automated-hold", "reviewed", "appealed", "closed"]),
  createdAt: external_exports.string().datetime()
});
var puzzleForgeSubmissionSchema = external_exports.object({
  id: external_exports.string().uuid(),
  authorUid: external_exports.string().min(1).max(128),
  locale: external_exports.enum(NETWORK_LOCALES),
  title: external_exports.string().trim().min(3).max(80),
  mechanic: external_exports.enum(["sequence", "cipher", "wiring", "evidence", "pattern"]),
  prompt: external_exports.string().trim().min(12).max(500),
  options: external_exports.array(external_exports.string().trim().min(1).max(80)).min(2).max(8),
  answerIndex: external_exports.number().int().nonnegative(),
  canonAssetId: external_exports.string().trim().max(96).nullable(),
  status: external_exports.enum(["draft", "pending", "approved", "rejected"]),
  createdAt: external_exports.string().datetime()
});

// ../../src/domain/echo-network/realtimeTicket.ts
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function bytesToBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
__name(bytesToBase64Url, "bytesToBase64Url");
function base64UrlToBytes(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padding = normalized.length % 4 === 0 ? "" : "=".repeat(4 - normalized.length % 4);
  const binary = atob(`${normalized}${padding}`);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}
__name(base64UrlToBytes, "base64UrlToBytes");
function toArrayBuffer(bytes) {
  const copy3 = new Uint8Array(bytes.byteLength);
  copy3.set(bytes);
  return copy3.buffer;
}
__name(toArrayBuffer, "toArrayBuffer");
async function importHmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}
__name(importHmacKey, "importHmacKey");
async function signRealtimeTicket(secret, payload) {
  if (secret.length < 32) {
    throw new Error("Realtime ticket secret must contain at least 32 characters.");
  }
  const verifiedPayload = realtimeTicketPayloadSchema.parse(payload);
  const body = bytesToBase64Url(encoder.encode(JSON.stringify(verifiedPayload)));
  const key = await importHmacKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
  return `${body}.${bytesToBase64Url(new Uint8Array(signature))}`;
}
__name(signRealtimeTicket, "signRealtimeTicket");
async function verifyRealtimeTicket(secret, token, nowSeconds = Math.floor(Date.now() / 1e3)) {
  if (secret.length < 32 || token.length > 4096) return null;
  const [body, signaturePart, extra] = token.split(".");
  if (!body || !signaturePart || extra) return null;
  try {
    const key = await importHmacKey(secret);
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      toArrayBuffer(base64UrlToBytes(signaturePart)),
      encoder.encode(body)
    );
    if (!valid) return null;
    const payload = realtimeTicketPayloadSchema.parse(
      JSON.parse(decoder.decode(base64UrlToBytes(body)))
    );
    if (payload.exp < nowSeconds || payload.iat > nowSeconds + 30) return null;
    return payload;
  } catch {
    return null;
  }
}
__name(verifyRealtimeTicket, "verifyRealtimeTicket");
async function hmacSha256Hex(secret, value) {
  if (secret.length < 32) {
    throw new Error("HMAC secret must contain at least 32 characters.");
  }
  const key = await importHmacKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return [...new Uint8Array(signature)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
__name(hmacSha256Hex, "hmacSha256Hex");

// src/common.ts
var ECHO_NETWORK_PROTOCOL = "echo-network-v1";
var MAX_SOCKET_MESSAGE_BYTES = 12e3;
var RealtimeError = class extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
  status;
  code;
  static {
    __name(this, "RealtimeError");
  }
};
function allowedOrigin(request, env) {
  const origin = request.headers.get("Origin");
  if (!origin) return false;
  const allowed = env.REALTIME_ALLOWED_ORIGINS.split(",").map((value) => value.trim()).filter(Boolean);
  return allowed.includes(origin);
}
__name(allowedOrigin, "allowedOrigin");
function protocolParts(request) {
  return (request.headers.get("Sec-WebSocket-Protocol") ?? "").split(",").map((part) => part.trim()).filter(Boolean);
}
__name(protocolParts, "protocolParts");
async function requireUpgradeTicket(request, env, purpose) {
  if (request.headers.get("Upgrade")?.toLowerCase() !== "websocket") {
    throw new RealtimeError(426, "websocket_required", "A WebSocket upgrade is required.");
  }
  if (!allowedOrigin(request, env)) {
    throw new RealtimeError(403, "origin_not_allowed", "This origin cannot open an online session.");
  }
  const [protocol, token, extra] = protocolParts(request);
  if (protocol !== ECHO_NETWORK_PROTOCOL || !token || extra) {
    throw new RealtimeError(401, "ticket_required", "A valid room ticket is required.");
  }
  const ticket = await verifyRealtimeTicket(env.REALTIME_TICKET_SECRET, token);
  if (!ticket || purpose && ticket.purpose !== purpose) {
    throw new RealtimeError(401, "invalid_ticket", "The room ticket is invalid or expired.");
  }
  return ticket;
}
__name(requireUpgradeTicket, "requireUpgradeTicket");
function errorResponse(error) {
  const known = error instanceof RealtimeError ? error : new RealtimeError(500, "realtime_unavailable", "The realtime service is unavailable.");
  return Response.json({ code: known.code, error: known.message }, {
    status: known.status,
    headers: { "Cache-Control": "no-store" }
  });
}
__name(errorResponse, "errorResponse");
function createSocketPair() {
  const pair = new WebSocketPair();
  return { client: pair[0], server: pair[1] };
}
__name(createSocketPair, "createSocketPair");
function upgradeResponse(client) {
  return new Response(null, {
    status: 101,
    webSocket: client,
    headers: { "Sec-WebSocket-Protocol": ECHO_NETWORK_PROTOCOL }
  });
}
__name(upgradeResponse, "upgradeResponse");
function parseRoomCommand(message) {
  const raw = typeof message === "string" ? message : new TextDecoder().decode(message);
  if (new TextEncoder().encode(raw).byteLength > MAX_SOCKET_MESSAGE_BYTES) {
    throw new RealtimeError(413, "message_too_large", "The room command is too large.");
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new RealtimeError(400, "invalid_message", "The room command is invalid.");
  }
  const result = roomCommandSchema.safeParse(parsed);
  if (!result.success) {
    throw new RealtimeError(400, "invalid_message", "The room command is invalid.");
  }
  return result.data;
}
__name(parseRoomCommand, "parseRoomCommand");
function envelope(roomId, sequence, type, payload) {
  return {
    version: 1,
    eventId: crypto.randomUUID(),
    roomId,
    sequence,
    type,
    sentAt: Date.now(),
    payload
  };
}
__name(envelope, "envelope");
function sendEvent(socket, roomId, sequence, type, payload) {
  try {
    socket.send(JSON.stringify(envelope(roomId, sequence, type, payload)));
  } catch {
  }
}
__name(sendEvent, "sendEvent");
function socketAttachment(socket) {
  try {
    const value = socket.deserializeAttachment();
    return value && typeof value.uid === "string" ? value : null;
  } catch {
    return null;
  }
}
__name(socketAttachment, "socketAttachment");
function roomIdFromPath(request) {
  const pieces = new URL(request.url).pathname.split("/").filter(Boolean);
  const value = decodeURIComponent(pieces.at(-1) ?? "");
  if (!/^[A-Za-z0-9_-]{3,96}$/.test(value)) {
    throw new RealtimeError(400, "invalid_room", "The room identifier is invalid.");
  }
  return value;
}
__name(roomIdFromPath, "roomIdFromPath");
function modeIsChess(mode) {
  return mode.startsWith("chess_");
}
__name(modeIsChess, "modeIsChess");
function modeLocationHint(region) {
  const supported = [
    "me",
    "afr",
    "eeur",
    "weur",
    "enam",
    "wnam",
    "sam",
    "apac",
    "oc"
  ];
  return supported.includes(region) ? region : "me";
}
__name(modeLocationHint, "modeLocationHint");

// src/receipt.ts
var queuedResultSchema = external_exports.object({
  receipt: matchReceiptSchema,
  profiles: external_exports.array(external_exports.object({
    uid: external_exports.string().min(1).max(128),
    displayName: external_exports.string().min(1).max(80)
  })).min(1).max(4)
});
function integrityPayload(receipt) {
  return JSON.stringify({
    version: receipt.version,
    receiptId: receipt.receiptId,
    matchId: receipt.matchId,
    mode: receipt.mode,
    context: receipt.context,
    status: receipt.status,
    participants: receipt.participants,
    winnerUid: receipt.winnerUid,
    durationMs: receipt.durationMs,
    rewards: receipt.rewards,
    completedAt: receipt.completedAt
  });
}
__name(integrityPayload, "integrityPayload");
async function sealReceipt(secret, unsigned) {
  const draft = { ...unsigned, integrityHash: "pending" };
  return matchReceiptSchema.parse({
    ...unsigned,
    integrityHash: await hmacSha256Hex(secret, integrityPayload(draft))
  });
}
__name(sealReceipt, "sealReceipt");
async function verifyReceiptIntegrity(secret, receipt) {
  const expected = await hmacSha256Hex(secret, integrityPayload(receipt));
  if (expected.length !== receipt.integrityHash.length) return false;
  let difference = 0;
  for (let index = 0; index < expected.length; index += 1) {
    difference |= expected.charCodeAt(index) ^ receipt.integrityHash.charCodeAt(index);
  }
  return difference === 0;
}
__name(verifyReceiptIntegrity, "verifyReceiptIntegrity");
function xpSourceForMode(mode) {
  return mode === "coop_breach" ? "coop_breach" : "chess_match";
}
__name(xpSourceForMode, "xpSourceForMode");
function participantReward(matchId, uid, xpAmount, cosmeticIds = []) {
  return {
    uid,
    rewardKey: `network:${matchId}:${uid}:v1`,
    xpAmount,
    cosmeticIds: [...cosmeticIds]
  };
}
__name(participantReward, "participantReward");

// src/resultEligibility.ts
var MIN_COMPETITIVE_CHESS_DURATION_MS = 9e4;
var MIN_COMPETITIVE_CHESS_PARTICIPATION_MS = 6e4;
var MIN_COMPETITIVE_CHESS_PLIES = 8;
var MIN_REWARDED_COOP_DURATION_MS = 45e3;
var MIN_REWARDED_COOP_PARTICIPATION_MS = 45e3;
function isChessMode(mode) {
  return mode === "chess_casual" || mode === "chess_ranked_blitz" || mode === "chess_ranked_rapid" || mode === "chess_anomaly";
}
__name(isChessMode, "isChessMode");
function isChessReceiptProgressionEligible(input) {
  if (input.status !== "completed" || !isChessMode(input.mode) || input.participants.length !== 2) return false;
  return input.durationMs >= MIN_COMPETITIVE_CHESS_DURATION_MS && input.participants.every((participant) => participant.participationMs >= MIN_COMPETITIVE_CHESS_PARTICIPATION_MS);
}
__name(isChessReceiptProgressionEligible, "isChessReceiptProgressionEligible");
function isChessRoomRewardEligible(input) {
  if (!isChessReceiptProgressionEligible(input)) return false;
  return input.plies >= MIN_COMPETITIVE_CHESS_PLIES;
}
__name(isChessRoomRewardEligible, "isChessRoomRewardEligible");
function isCoopParticipantRewardEligible(input) {
  return input.durationMs >= MIN_REWARDED_COOP_DURATION_MS && input.participationMs >= MIN_REWARDED_COOP_PARTICIPATION_MS && input.connectedAtFinalization && input.correctAnswerCount >= 1;
}
__name(isCoopParticipantRewardEligible, "isCoopParticipantRewardEligible");
function isCoopReceiptParticipantProgressionEligible(input) {
  return input.receipt.mode === "coop_breach" && input.receipt.status === "completed" && input.receipt.durationMs >= MIN_REWARDED_COOP_DURATION_MS && input.participant.participationMs >= MIN_REWARDED_COOP_PARTICIPATION_MS && input.rewardXpAmount > 0;
}
__name(isCoopReceiptParticipantProgressionEligible, "isCoopReceiptParticipantProgressionEligible");

// src/activeMatchLease.ts
var ACTIVE_MATCH_LEASE_MS = 2 * 60 * 6e4;
var ACTIVE_MATCH_LEASE_CONFLICT = "network_active_match_in_progress";
function activeMatchConflict() {
  return new RealtimeError(
    409,
    "active_match_in_progress",
    "This player is already assigned to an active match."
  );
}
__name(activeMatchConflict, "activeMatchConflict");
function errorContainsLeaseConflict(error) {
  return error instanceof Error && error.message.includes(ACTIVE_MATCH_LEASE_CONFLICT);
}
__name(errorContainsLeaseConflict, "errorContainsLeaseConflict");
function uniquePlayerUids(players) {
  const uids = players.map((player) => player.uid);
  if (uids.length === 0 || new Set(uids).size !== uids.length) {
    throw new Error("A match lease requires a non-empty set of unique players.");
  }
  return uids;
}
__name(uniquePlayerUids, "uniquePlayerUids");
async function assertMatchLeaseAdmission(database, input) {
  const active = await database.prepare(`
    SELECT room_id, mode, expires_at
    FROM network_active_match_leases
    WHERE user_id = ? AND expires_at > ?
  `).bind(input.uid, input.now).first();
  if (active && active.room_id !== input.roomId) throw activeMatchConflict();
}
__name(assertMatchLeaseAdmission, "assertMatchLeaseAdmission");
async function reserveMatchLeasesAndMemberships(database, input) {
  const uids = uniquePlayerUids(input.players);
  const statements = [];
  for (const uid of uids) {
    statements.push(database.prepare(`
      INSERT INTO network_active_match_leases (
        user_id, room_id, mode, acquired_at, expires_at
      ) VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET
        room_id = excluded.room_id,
        mode = excluded.mode,
        acquired_at = excluded.acquired_at,
        expires_at = excluded.expires_at
    `).bind(uid, input.roomId, input.mode, input.createdAt, input.expiresAt));
    statements.push(database.prepare(`
      INSERT OR IGNORE INTO network_room_memberships (
        room_id, user_id, mode, created_at, expires_at
      ) VALUES (?, ?, ?, ?, ?)
    `).bind(input.roomId, uid, input.mode, input.createdAt, input.expiresAt));
  }
  try {
    await database.batch(statements);
  } catch (error) {
    if (errorContainsLeaseConflict(error)) throw activeMatchConflict();
    throw error;
  }
}
__name(reserveMatchLeasesAndMemberships, "reserveMatchLeasesAndMemberships");
function releaseMatchLeasesStatement(database, roomId) {
  return database.prepare(`
    DELETE FROM network_active_match_leases
    WHERE room_id = ?
  `).bind(roomId);
}
__name(releaseMatchLeasesStatement, "releaseMatchLeasesStatement");

// src/MatchmakerRoom.ts
import { DurableObject } from "cloudflare:workers";
var COOP_FILL_DELAY_MS = 5e3;
var QUEUE_STALE_MS = 9e4;
var MatchmakerRoom = class extends DurableObject {
  static {
    __name(this, "MatchmakerRoom");
  }
  pendingQueueUids = /* @__PURE__ */ new Set();
  constructor(ctx, env) {
    super(ctx, env);
    ctx.blockConcurrencyWhile(async () => {
      ctx.storage.sql.exec(`
        CREATE TABLE IF NOT EXISTS waiting (
          uid TEXT PRIMARY KEY,
          display_name TEXT NOT NULL,
          ticket_jti TEXT NOT NULL UNIQUE,
          mode TEXT NOT NULL,
          region TEXT NOT NULL,
          case_id TEXT,
          variant TEXT,
          joined_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS used_tickets (
          jti TEXT PRIMARY KEY,
          used_at INTEGER NOT NULL
        );
      `);
    });
  }
  async fetch(request) {
    try {
      const ticket = await requireUpgradeTicket(request, this.env, "queue");
      if (ticket.target !== "matchmaking") {
        throw new RealtimeError(403, "wrong_ticket_target", "This ticket cannot enter matchmaking.");
      }
      const now = Date.now();
      await assertMatchLeaseAdmission(this.env.PLAYER_DB, {
        uid: ticket.uid,
        now: new Date(now).toISOString()
      });
      const used = this.ctx.storage.sql.exec(
        "SELECT jti FROM used_tickets WHERE jti = ?",
        ticket.jti
      ).toArray()[0];
      if (used) throw new RealtimeError(409, "ticket_reused", "This queue ticket was already used.");
      this.ctx.storage.transactionSync(() => {
        this.ctx.storage.sql.exec(
          "INSERT INTO used_tickets (jti, used_at) VALUES (?, ?)",
          ticket.jti,
          now
        );
        this.ctx.storage.sql.exec("DELETE FROM waiting WHERE uid = ?", ticket.uid);
        this.ctx.storage.sql.exec(
          `
          INSERT INTO waiting (
            uid, display_name, ticket_jti, mode, region, case_id, variant, joined_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
          ticket.uid,
          ticket.displayName,
          ticket.jti,
          ticket.mode,
          ticket.region,
          ticket.caseId ?? null,
          ticket.variant ?? null,
          now
        );
      });
      for (const active of this.ctx.getWebSockets()) {
        const attachment2 = socketAttachment(active);
        if (attachment2?.uid === ticket.uid) active.close(4001, "Replaced by a newer queue session.");
      }
      const { client, server } = createSocketPair();
      const attachment = {
        uid: ticket.uid,
        displayName: ticket.displayName,
        jti: ticket.jti,
        joinedAt: now
      };
      server.serializeAttachment(attachment);
      this.ctx.acceptWebSocket(server, [`uid:${ticket.uid}`]);
      this.pendingQueueUids.add(ticket.uid);
      sendEvent(server, `queue-${ticket.region}-${ticket.mode}`, 0, "queue-joined", {
        mode: ticket.mode,
        joinedAt: now
      });
      await this.matchAvailable(ticket.mode);
      await this.scheduleQueueSweep();
      return upgradeResponse(client);
    } catch (error) {
      return errorResponse(error);
    }
  }
  async webSocketMessage(socket, message) {
    try {
      const command = parseRoomCommand(message);
      const attachment = socketAttachment(socket);
      if (!attachment) throw new RealtimeError(401, "session_missing", "Queue session is missing.");
      if (command.type === "ping") {
        sendEvent(socket, "queue", 0, "pong", { clientSentAt: command.sentAt });
        return;
      }
      if (command.type !== "resign") {
        throw new RealtimeError(400, "unsupported_command", "This queue command is not supported.");
      }
      this.ctx.storage.sql.exec("DELETE FROM waiting WHERE uid = ?", attachment.uid);
      this.pendingQueueUids.delete(attachment.uid);
      socket.close(1e3, "Queue cancelled.");
      await this.scheduleQueueSweep();
    } catch (error) {
      const known = error instanceof RealtimeError ? error : new RealtimeError(400, "invalid_message", "The queue command is invalid.");
      sendEvent(socket, "queue", 0, "error", { code: known.code, message: known.message });
    }
  }
  async webSocketClose(socket) {
    const attachment = socketAttachment(socket);
    if (attachment) {
      this.pendingQueueUids.delete(attachment.uid);
      this.ctx.storage.sql.exec("DELETE FROM waiting WHERE uid = ?", attachment.uid);
    }
    await this.scheduleQueueSweep();
  }
  async webSocketError(socket) {
    const attachment = socketAttachment(socket);
    if (attachment) {
      this.pendingQueueUids.delete(attachment.uid);
      this.ctx.storage.sql.exec("DELETE FROM waiting WHERE uid = ?", attachment.uid);
    }
    await this.scheduleQueueSweep();
  }
  async alarm() {
    this.pendingQueueUids.clear();
    this.pruneDisconnectedWaiters(Date.now() - QUEUE_STALE_MS);
    const modes = this.ctx.storage.sql.exec(
      "SELECT DISTINCT mode FROM waiting ORDER BY mode ASC"
    ).toArray().map((row) => row.mode);
    for (const mode of modes) await this.matchAvailable(mode, true);
    await this.scheduleQueueSweep(true);
  }
  waiting(mode) {
    return this.ctx.storage.sql.exec(`
      SELECT uid, display_name, joined_at, mode, region, case_id, variant
      FROM waiting WHERE mode = ? ORDER BY joined_at ASC
    `, mode).toArray();
  }
  activeQueueUids() {
    const activeUids = new Set(this.ctx.getWebSockets().flatMap((socket) => {
      const attachment = socketAttachment(socket);
      return attachment ? [attachment.uid] : [];
    }));
    for (const uid of this.pendingQueueUids) activeUids.add(uid);
    return activeUids;
  }
  pruneInactiveWaiters(waiting) {
    const activeUids = this.activeQueueUids();
    const inactive = waiting.filter((player) => !activeUids.has(player.uid));
    if (inactive.length > 0) {
      this.ctx.storage.transactionSync(() => {
        for (const player of inactive) {
          this.ctx.storage.sql.exec("DELETE FROM waiting WHERE uid = ?", player.uid);
        }
      });
    }
    return waiting.filter((player) => activeUids.has(player.uid));
  }
  pruneDisconnectedWaiters(cutoff) {
    const stale = this.ctx.storage.sql.exec(`
      SELECT uid, display_name, joined_at, mode, region, case_id, variant
      FROM waiting WHERE joined_at < ?
    `, cutoff).toArray();
    this.pruneInactiveWaiters(stale);
  }
  async matchAvailable(mode, forceCoop = false) {
    const waiting = this.pruneInactiveWaiters(this.waiting(mode));
    if (mode === "coop_breach") {
      if (waiting.length >= 4) {
        await this.formMatch(waiting.slice(0, 4));
        if (this.waiting(mode).length >= 2) {
          await this.ensureCoopFillAlarm();
        }
      } else if (forceCoop && waiting.length >= 2) {
        await this.formMatch(waiting.slice(0, Math.min(4, waiting.length)));
      } else if (waiting.length >= 2) {
        await this.ensureCoopFillAlarm();
      }
      return;
    }
    if (waiting.length >= 2) {
      await this.formMatch(waiting.slice(0, 2));
      if (this.waiting(mode).length >= 2) await this.matchAvailable(mode);
    }
  }
  async ensureCoopFillAlarm() {
    const requested = Date.now() + COOP_FILL_DELAY_MS;
    const existing = await this.ctx.storage.getAlarm();
    if (existing === null || existing > requested) {
      await this.ctx.storage.setAlarm(requested);
    }
  }
  async scheduleQueueSweep(force = false) {
    const earliest = this.ctx.storage.sql.exec(
      "SELECT MIN(joined_at) AS joined_at FROM waiting"
    ).toArray()[0]?.joined_at;
    if (typeof earliest !== "number") return;
    const requested = Math.max(Date.now() + QUEUE_STALE_MS, earliest + QUEUE_STALE_MS);
    const existing = await this.ctx.storage.getAlarm();
    if (force || existing === null || existing > requested) {
      await this.ctx.storage.setAlarm(requested);
    }
  }
  async formMatch(players) {
    if (players.length < 2) return;
    const matchId = `match_${crypto.randomUUID()}`;
    const nowMs = Date.now();
    const now = Math.floor(nowMs / 1e3);
    const partySize = players.length;
    const sockets = /* @__PURE__ */ new Map();
    for (const socket of this.ctx.getWebSockets()) {
      const attachment = socketAttachment(socket);
      if (attachment) sockets.set(attachment.uid, socket);
    }
    const createdAt = new Date(nowMs).toISOString();
    const expiresAt = new Date(nowMs + ACTIVE_MATCH_LEASE_MS).toISOString();
    try {
      await reserveMatchLeasesAndMemberships(this.env.PLAYER_DB, {
        roomId: matchId,
        mode: players[0].mode,
        players,
        createdAt,
        expiresAt
      });
    } catch (error) {
      if (error instanceof RealtimeError && error.code === "active_match_in_progress") {
        await this.removeAlreadyAssignedWaiters(players);
        return;
      }
      throw error;
    }
    this.ctx.storage.transactionSync(() => {
      for (const player of players) {
        this.ctx.storage.sql.exec("DELETE FROM waiting WHERE uid = ?", player.uid);
      }
    });
    for (const player of players) this.pendingQueueUids.delete(player.uid);
    for (const player of players) {
      const payload = {
        v: 1,
        iss: "eleven-eleven-realtime",
        aud: "eleven-eleven-realtime",
        purpose: "connect",
        target: "match",
        uid: player.uid,
        displayName: player.display_name,
        mode: player.mode,
        roomId: matchId,
        partySize,
        ...player.case_id ? { caseId: player.case_id } : {},
        ...player.variant ? { variant: player.variant } : {},
        region: player.region,
        iat: now,
        exp: now + 60,
        jti: crypto.randomUUID()
      };
      const token = await signRealtimeTicket(this.env.REALTIME_TICKET_SECRET, payload);
      const socket = sockets.get(player.uid);
      if (!socket) continue;
      sendEvent(socket, matchId, 1, "match-found", {
        matchId,
        mode: player.mode,
        partySize,
        ticket: token,
        path: player.mode === "coop_breach" ? `/v1/rooms/coop/${matchId}` : `/v1/rooms/chess/${matchId}`
      });
      socket.close(1e3, "Match found.");
    }
  }
  /**
   * A claim race can occur only between independent matchmaking shards. Keep
   * the free players queued and explicitly release the already-active account
   * from this shard so it cannot repeatedly poison every proposed match.
   */
  async removeAlreadyAssignedWaiters(players) {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const placeholders = players.map(() => "?").join(", ");
    const rows = await this.env.PLAYER_DB.prepare(`
      SELECT user_id FROM network_active_match_leases
      WHERE user_id IN (${placeholders}) AND expires_at > ?
    `).bind(...players.map((player) => player.uid), now).all();
    const blocked = new Set(rows.results.map((row) => row.user_id));
    if (blocked.size === 0) {
      await this.ctx.storage.setAlarm(Date.now() + 1e3);
      return;
    }
    this.ctx.storage.transactionSync(() => {
      for (const uid of blocked) this.ctx.storage.sql.exec("DELETE FROM waiting WHERE uid = ?", uid);
    });
    for (const socket of this.ctx.getWebSockets()) {
      const attachment = socketAttachment(socket);
      if (!attachment || !blocked.has(attachment.uid)) continue;
      this.pendingQueueUids.delete(attachment.uid);
      sendEvent(socket, "queue", 0, "error", {
        code: "active_match_in_progress",
        message: "This player is already assigned to an active match."
      });
      socket.close(4003, "An active match already exists.");
    }
    await this.scheduleQueueSweep(true);
  }
};

// src/ChessMatchRoom.ts
import { DurableObject as DurableObject2 } from "cloudflare:workers";

// ../../node_modules/chess.js/dist/esm/chess.js
function rootNode(comment) {
  return comment !== null ? { comment, variations: [] } : { variations: [] };
}
__name(rootNode, "rootNode");
function node(move, suffix, nag, comment, variations) {
  const node2 = { move, variations };
  if (suffix) {
    node2.suffix = suffix;
  }
  if (nag) {
    node2.nag = nag;
  }
  if (comment !== null) {
    node2.comment = comment;
  }
  return node2;
}
__name(node, "node");
function lineToTree(...nodes) {
  const [root, ...rest] = nodes;
  let parent = root;
  for (const child of rest) {
    if (child !== null) {
      parent.variations = [child, ...child.variations];
      child.variations = [];
      parent = child;
    }
  }
  return root;
}
__name(lineToTree, "lineToTree");
function pgn(headers, game) {
  if (game.marker && game.marker.comment) {
    let node2 = game.root;
    while (true) {
      const next = node2.variations[0];
      if (!next) {
        node2.comment = game.marker.comment;
        break;
      }
      node2 = next;
    }
  }
  return {
    headers,
    root: game.root,
    result: (game.marker && game.marker.result) ?? void 0
  };
}
__name(pgn, "pgn");
function peg$subclass(child, parent) {
  function C() {
    this.constructor = child;
  }
  __name(C, "C");
  C.prototype = parent.prototype;
  child.prototype = new C();
}
__name(peg$subclass, "peg$subclass");
function peg$SyntaxError(message, expected, found, location) {
  var self = Error.call(this, message);
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
  self.expected = expected;
  self.found = found;
  self.location = location;
  self.name = "SyntaxError";
  return self;
}
__name(peg$SyntaxError, "peg$SyntaxError");
peg$subclass(peg$SyntaxError, Error);
function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) {
    return str;
  }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}
__name(peg$padEnd, "peg$padEnd");
peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var offset_s = this.location.source && typeof this.location.source.offset === "function" ? this.location.source.offset(s) : s;
    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", offset_s.line.toString().length, " ");
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = last - s.column || 1;
      str += "\n --> " + loc + "\n" + filler + " |\n" + offset_s.line + " | " + line + "\n" + filler + " | " + peg$padEnd("", s.column - 1, " ") + peg$padEnd("", hatLen, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};
peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: /* @__PURE__ */ __name(function(expectation2) {
      return '"' + literalEscape(expectation2.text) + '"';
    }, "literal"),
    class: /* @__PURE__ */ __name(function(expectation2) {
      var escapedParts = expectation2.parts.map(function(part) {
        return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
      });
      return "[" + (expectation2.inverted ? "^" : "") + escapedParts.join("") + "]";
    }, "class"),
    any: /* @__PURE__ */ __name(function() {
      return "any character";
    }, "any"),
    end: /* @__PURE__ */ __name(function() {
      return "end of input";
    }, "end"),
    other: /* @__PURE__ */ __name(function(expectation2) {
      return expectation2.description;
    }, "other")
  };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  __name(hex, "hex");
  function literalEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
      return "\\x" + hex(ch);
    });
  }
  __name(literalEscape, "literalEscape");
  function classEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
      return "\\x" + hex(ch);
    });
  }
  __name(classEscape, "classEscape");
  function describeExpectation(expectation2) {
    return DESCRIBE_EXPECTATION_FNS[expectation2.type](expectation2);
  }
  __name(describeExpectation, "describeExpectation");
  function describeExpected(expected2) {
    var descriptions = expected2.map(describeExpectation);
    var i, j;
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + " or " + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }
  __name(describeExpected, "describeExpected");
  function describeFound(found2) {
    return found2 ? '"' + literalEscape(found2) + '"' : "end of input";
  }
  __name(describeFound, "describeFound");
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse(input, options) {
  options = options !== void 0 ? options : {};
  var peg$FAILED = {};
  var peg$source = options.grammarSource;
  var peg$startRuleFunctions = { pgn: peg$parsepgn };
  var peg$startRuleFunction = peg$parsepgn;
  var peg$c0 = "[";
  var peg$c1 = '"';
  var peg$c2 = "]";
  var peg$c3 = ".";
  var peg$c4 = "O-O-O";
  var peg$c5 = "O-O";
  var peg$c6 = "0-0-0";
  var peg$c7 = "0-0";
  var peg$c8 = "$";
  var peg$c9 = "{";
  var peg$c10 = "}";
  var peg$c11 = ";";
  var peg$c12 = "(";
  var peg$c13 = ")";
  var peg$c14 = "1-0";
  var peg$c15 = "0-1";
  var peg$c16 = "1/2-1/2";
  var peg$c17 = "*";
  var peg$r0 = /^[a-zA-Z]/;
  var peg$r1 = /^[^"]/;
  var peg$r2 = /^[0-9]/;
  var peg$r3 = /^[.]/;
  var peg$r4 = /^[a-zA-Z1-8\-=]/;
  var peg$r5 = /^[+#]/;
  var peg$r6 = /^[!?]/;
  var peg$r7 = /^[^}]/;
  var peg$r8 = /^[^\r\n]/;
  var peg$r9 = /^[ \t\r\n]/;
  var peg$e0 = peg$otherExpectation("tag pair");
  var peg$e1 = peg$literalExpectation("[", false);
  var peg$e2 = peg$literalExpectation('"', false);
  var peg$e3 = peg$literalExpectation("]", false);
  var peg$e4 = peg$otherExpectation("tag name");
  var peg$e5 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false);
  var peg$e6 = peg$otherExpectation("tag value");
  var peg$e7 = peg$classExpectation(['"'], true, false);
  var peg$e8 = peg$otherExpectation("move number");
  var peg$e9 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e10 = peg$literalExpectation(".", false);
  var peg$e11 = peg$classExpectation(["."], false, false);
  var peg$e12 = peg$otherExpectation("standard algebraic notation");
  var peg$e13 = peg$literalExpectation("O-O-O", false);
  var peg$e14 = peg$literalExpectation("O-O", false);
  var peg$e15 = peg$literalExpectation("0-0-0", false);
  var peg$e16 = peg$literalExpectation("0-0", false);
  var peg$e17 = peg$classExpectation([["a", "z"], ["A", "Z"], ["1", "8"], "-", "="], false, false);
  var peg$e18 = peg$classExpectation(["+", "#"], false, false);
  var peg$e19 = peg$otherExpectation("suffix annotation");
  var peg$e20 = peg$classExpectation(["!", "?"], false, false);
  var peg$e21 = peg$otherExpectation("NAG");
  var peg$e22 = peg$literalExpectation("$", false);
  var peg$e23 = peg$otherExpectation("brace comment");
  var peg$e24 = peg$literalExpectation("{", false);
  var peg$e25 = peg$classExpectation(["}"], true, false);
  var peg$e26 = peg$literalExpectation("}", false);
  var peg$e27 = peg$otherExpectation("rest of line comment");
  var peg$e28 = peg$literalExpectation(";", false);
  var peg$e29 = peg$classExpectation(["\r", "\n"], true, false);
  var peg$e30 = peg$otherExpectation("variation");
  var peg$e31 = peg$literalExpectation("(", false);
  var peg$e32 = peg$literalExpectation(")", false);
  var peg$e33 = peg$otherExpectation("game termination marker");
  var peg$e34 = peg$literalExpectation("1-0", false);
  var peg$e35 = peg$literalExpectation("0-1", false);
  var peg$e36 = peg$literalExpectation("1/2-1/2", false);
  var peg$e37 = peg$literalExpectation("*", false);
  var peg$e38 = peg$otherExpectation("whitespace");
  var peg$e39 = peg$classExpectation([" ", "	", "\r", "\n"], false, false);
  var peg$f0 = /* @__PURE__ */ __name(function(headers, game) {
    return pgn(headers, game);
  }, "peg$f0");
  var peg$f1 = /* @__PURE__ */ __name(function(tagPairs) {
    return Object.fromEntries(tagPairs);
  }, "peg$f1");
  var peg$f2 = /* @__PURE__ */ __name(function(tagName, tagValue) {
    return [tagName, tagValue];
  }, "peg$f2");
  var peg$f3 = /* @__PURE__ */ __name(function(root, marker) {
    return { root, marker };
  }, "peg$f3");
  var peg$f4 = /* @__PURE__ */ __name(function(comment, moves) {
    return lineToTree(rootNode(comment), ...moves.flat());
  }, "peg$f4");
  var peg$f5 = /* @__PURE__ */ __name(function(san, suffix, nag, comment, variations) {
    return node(san, suffix, nag, comment, variations);
  }, "peg$f5");
  var peg$f6 = /* @__PURE__ */ __name(function(nag) {
    return nag;
  }, "peg$f6");
  var peg$f7 = /* @__PURE__ */ __name(function(comment) {
    return comment.replace(/[\r\n]+/g, " ");
  }, "peg$f7");
  var peg$f8 = /* @__PURE__ */ __name(function(comment) {
    return comment.trim();
  }, "peg$f8");
  var peg$f9 = /* @__PURE__ */ __name(function(line) {
    return line;
  }, "peg$f9");
  var peg$f10 = /* @__PURE__ */ __name(function(result, comment) {
    return { result, comment };
  }, "peg$f10");
  var peg$currPos = options.peg$currPos | 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = peg$currPos;
  var peg$maxFailExpected = options.peg$maxFailExpected || [];
  var peg$silentFails = options.peg$silentFails | 0;
  var peg$result;
  if (options.startRule) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error(`Can't start parsing from rule "` + options.startRule + '".');
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text, ignoreCase };
  }
  __name(peg$literalExpectation, "peg$literalExpectation");
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts, inverted, ignoreCase };
  }
  __name(peg$classExpectation, "peg$classExpectation");
  function peg$endExpectation() {
    return { type: "end" };
  }
  __name(peg$endExpectation, "peg$endExpectation");
  function peg$otherExpectation(description) {
    return { type: "other", description };
  }
  __name(peg$otherExpectation, "peg$otherExpectation");
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;
    if (details) {
      return details;
    } else {
      if (pos >= peg$posDetailsCache.length) {
        p = peg$posDetailsCache.length - 1;
      } else {
        p = pos;
        while (!peg$posDetailsCache[--p]) {
        }
      }
      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  __name(peg$computePosDetails, "peg$computePosDetails");
  function peg$computeLocation(startPos, endPos, offset) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);
    var res = {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
    return res;
  }
  __name(peg$computeLocation, "peg$computeLocation");
  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected);
  }
  __name(peg$fail, "peg$fail");
  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }
  __name(peg$buildStructuredError, "peg$buildStructuredError");
  function peg$parsepgn() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parsetagPairSection();
    s2 = peg$parsemoveTextSection();
    s0 = peg$f0(s1, s2);
    return s0;
  }
  __name(peg$parsepgn, "peg$parsepgn");
  function peg$parsetagPairSection() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsetagPair();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsetagPair();
    }
    s2 = peg$parse_();
    s0 = peg$f1(s1);
    return s0;
  }
  __name(peg$parsetagPairSection, "peg$parsetagPairSection");
  function peg$parsetagPair() {
    var s0, s2, s4, s6, s7, s8, s10;
    peg$silentFails++;
    s0 = peg$currPos;
    peg$parse_();
    if (input.charCodeAt(peg$currPos) === 91) {
      s2 = peg$c0;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e1);
      }
    }
    if (s2 !== peg$FAILED) {
      peg$parse_();
      s4 = peg$parsetagName();
      if (s4 !== peg$FAILED) {
        peg$parse_();
        if (input.charCodeAt(peg$currPos) === 34) {
          s6 = peg$c1;
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e2);
          }
        }
        if (s6 !== peg$FAILED) {
          s7 = peg$parsetagValue();
          if (input.charCodeAt(peg$currPos) === 34) {
            s8 = peg$c1;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e2);
            }
          }
          if (s8 !== peg$FAILED) {
            peg$parse_();
            if (input.charCodeAt(peg$currPos) === 93) {
              s10 = peg$c2;
              peg$currPos++;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e3);
              }
            }
            if (s10 !== peg$FAILED) {
              s0 = peg$f2(s4, s7);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) {
        peg$fail(peg$e0);
      }
    }
    return s0;
  }
  __name(peg$parsetagPair, "peg$parsetagPair");
  function peg$parsetagName() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = input.charAt(peg$currPos);
    if (peg$r0.test(s2)) {
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e5);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = input.charAt(peg$currPos);
        if (peg$r0.test(s2)) {
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e5);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e4);
      }
    }
    return s0;
  }
  __name(peg$parsetagName, "peg$parsetagName");
  function peg$parsetagValue() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = input.charAt(peg$currPos);
    if (peg$r1.test(s2)) {
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e7);
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = input.charAt(peg$currPos);
      if (peg$r1.test(s2)) {
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e7);
        }
      }
    }
    s0 = input.substring(s0, peg$currPos);
    peg$silentFails--;
    s1 = peg$FAILED;
    if (peg$silentFails === 0) {
      peg$fail(peg$e6);
    }
    return s0;
  }
  __name(peg$parsetagValue, "peg$parsetagValue");
  function peg$parsemoveTextSection() {
    var s0, s1, s3;
    s0 = peg$currPos;
    s1 = peg$parseline();
    peg$parse_();
    s3 = peg$parsegameTerminationMarker();
    if (s3 === peg$FAILED) {
      s3 = null;
    }
    peg$parse_();
    s0 = peg$f3(s1, s3);
    return s0;
  }
  __name(peg$parsemoveTextSection, "peg$parsemoveTextSection");
  function peg$parseline() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parsecomment();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    s2 = [];
    s3 = peg$parsemove();
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$parsemove();
    }
    s0 = peg$f4(s1, s2);
    return s0;
  }
  __name(peg$parseline, "peg$parseline");
  function peg$parsemove() {
    var s0, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;
    peg$parse_();
    peg$parsemoveNumber();
    peg$parse_();
    s4 = peg$parsesan();
    if (s4 !== peg$FAILED) {
      s5 = peg$parsesuffixAnnotation();
      if (s5 === peg$FAILED) {
        s5 = null;
      }
      s6 = [];
      s7 = peg$parsenag();
      while (s7 !== peg$FAILED) {
        s6.push(s7);
        s7 = peg$parsenag();
      }
      s7 = peg$parse_();
      s8 = peg$parsecomment();
      if (s8 === peg$FAILED) {
        s8 = null;
      }
      s9 = [];
      s10 = peg$parsevariation();
      while (s10 !== peg$FAILED) {
        s9.push(s10);
        s10 = peg$parsevariation();
      }
      s0 = peg$f5(s4, s5, s6, s8, s9);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  __name(peg$parsemove, "peg$parsemove");
  function peg$parsemoveNumber() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = input.charAt(peg$currPos);
    if (peg$r2.test(s2)) {
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e9);
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = input.charAt(peg$currPos);
      if (peg$r2.test(s2)) {
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e9);
        }
      }
    }
    if (input.charCodeAt(peg$currPos) === 46) {
      s2 = peg$c3;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e10);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_();
      s4 = [];
      s5 = input.charAt(peg$currPos);
      if (peg$r3.test(s5)) {
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e11);
        }
      }
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = input.charAt(peg$currPos);
        if (peg$r3.test(s5)) {
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e11);
          }
        }
      }
      s1 = [s1, s2, s3, s4];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e8);
      }
    }
    return s0;
  }
  __name(peg$parsemoveNumber, "peg$parsemoveNumber");
  function peg$parsesan() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.substr(peg$currPos, 5) === peg$c4) {
      s2 = peg$c4;
      peg$currPos += 5;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e13);
      }
    }
    if (s2 === peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c5) {
        s2 = peg$c5;
        peg$currPos += 3;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e14);
        }
      }
      if (s2 === peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c6) {
          s2 = peg$c6;
          peg$currPos += 5;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e15);
          }
        }
        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c7) {
            s2 = peg$c7;
            peg$currPos += 3;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e16);
            }
          }
          if (s2 === peg$FAILED) {
            s2 = peg$currPos;
            s3 = input.charAt(peg$currPos);
            if (peg$r0.test(s3)) {
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e5);
              }
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              s5 = input.charAt(peg$currPos);
              if (peg$r4.test(s5)) {
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e17);
                }
              }
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = input.charAt(peg$currPos);
                  if (peg$r4.test(s5)) {
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e17);
                    }
                  }
                }
              } else {
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                s3 = [s3, s4];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        }
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = input.charAt(peg$currPos);
      if (peg$r5.test(s3)) {
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e18);
        }
      }
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s2 = [s2, s3];
      s1 = s2;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e12);
      }
    }
    return s0;
  }
  __name(peg$parsesan, "peg$parsesan");
  function peg$parsesuffixAnnotation() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = input.charAt(peg$currPos);
    if (peg$r6.test(s2)) {
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e20);
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      if (s1.length >= 2) {
        s2 = peg$FAILED;
      } else {
        s2 = input.charAt(peg$currPos);
        if (peg$r6.test(s2)) {
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e20);
          }
        }
      }
    }
    if (s1.length < 1) {
      peg$currPos = s0;
      s0 = peg$FAILED;
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e19);
      }
    }
    return s0;
  }
  __name(peg$parsesuffixAnnotation, "peg$parsesuffixAnnotation");
  function peg$parsenag() {
    var s0, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    peg$parse_();
    if (input.charCodeAt(peg$currPos) === 36) {
      s2 = peg$c8;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e22);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      s4 = [];
      s5 = input.charAt(peg$currPos);
      if (peg$r2.test(s5)) {
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e9);
        }
      }
      if (s5 !== peg$FAILED) {
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = input.charAt(peg$currPos);
          if (peg$r2.test(s5)) {
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e9);
            }
          }
        }
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s3 = input.substring(s3, peg$currPos);
      } else {
        s3 = s4;
      }
      if (s3 !== peg$FAILED) {
        s0 = peg$f6(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) {
        peg$fail(peg$e21);
      }
    }
    return s0;
  }
  __name(peg$parsenag, "peg$parsenag");
  function peg$parsecomment() {
    var s0;
    s0 = peg$parsebraceComment();
    if (s0 === peg$FAILED) {
      s0 = peg$parserestOfLineComment();
    }
    return s0;
  }
  __name(peg$parsecomment, "peg$parsecomment");
  function peg$parsebraceComment() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e24);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = input.charAt(peg$currPos);
      if (peg$r7.test(s4)) {
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e25);
        }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = input.charAt(peg$currPos);
        if (peg$r7.test(s4)) {
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e25);
          }
        }
      }
      s2 = input.substring(s2, peg$currPos);
      if (input.charCodeAt(peg$currPos) === 125) {
        s3 = peg$c10;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e26);
        }
      }
      if (s3 !== peg$FAILED) {
        s0 = peg$f7(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e23);
      }
    }
    return s0;
  }
  __name(peg$parsebraceComment, "peg$parsebraceComment");
  function peg$parserestOfLineComment() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 59) {
      s1 = peg$c11;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e28);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = input.charAt(peg$currPos);
      if (peg$r8.test(s4)) {
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e29);
        }
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = input.charAt(peg$currPos);
        if (peg$r8.test(s4)) {
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e29);
          }
        }
      }
      s2 = input.substring(s2, peg$currPos);
      s0 = peg$f8(s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e27);
      }
    }
    return s0;
  }
  __name(peg$parserestOfLineComment, "peg$parserestOfLineComment");
  function peg$parsevariation() {
    var s0, s2, s3, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    peg$parse_();
    if (input.charCodeAt(peg$currPos) === 40) {
      s2 = peg$c12;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e31);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parseline();
      if (s3 !== peg$FAILED) {
        peg$parse_();
        if (input.charCodeAt(peg$currPos) === 41) {
          s5 = peg$c13;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e32);
          }
        }
        if (s5 !== peg$FAILED) {
          s0 = peg$f9(s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) {
        peg$fail(peg$e30);
      }
    }
    return s0;
  }
  __name(peg$parsevariation, "peg$parsevariation");
  function peg$parsegameTerminationMarker() {
    var s0, s1, s3;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c14) {
      s1 = peg$c14;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e34);
      }
    }
    if (s1 === peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c15) {
        s1 = peg$c15;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e35);
        }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 7) === peg$c16) {
          s1 = peg$c16;
          peg$currPos += 7;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e36);
          }
        }
        if (s1 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 42) {
            s1 = peg$c17;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e37);
            }
          }
        }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$parse_();
      s3 = peg$parsecomment();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s0 = peg$f10(s1, s3);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e33);
      }
    }
    return s0;
  }
  __name(peg$parsegameTerminationMarker, "peg$parsegameTerminationMarker");
  function peg$parse_() {
    var s0, s1;
    peg$silentFails++;
    s0 = [];
    s1 = input.charAt(peg$currPos);
    if (peg$r9.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e39);
      }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = input.charAt(peg$currPos);
      if (peg$r9.test(s1)) {
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e39);
        }
      }
    }
    peg$silentFails--;
    s1 = peg$FAILED;
    if (peg$silentFails === 0) {
      peg$fail(peg$e38);
    }
    return s0;
  }
  __name(peg$parse_, "peg$parse_");
  peg$result = peg$startRuleFunction();
  if (options.peg$library) {
    return (
      /** @type {any} */
      {
        peg$result,
        peg$currPos,
        peg$FAILED,
        peg$maxFailExpected,
        peg$maxFailPos
      }
    );
  }
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}
__name(peg$parse, "peg$parse");
var MASK64 = 0xffffffffffffffffn;
function rotl(x, k) {
  return (x << k | x >> 64n - k) & 0xffffffffffffffffn;
}
__name(rotl, "rotl");
function wrappingMul(x, y) {
  return x * y & MASK64;
}
__name(wrappingMul, "wrappingMul");
function xoroshiro128(state) {
  return function() {
    let s0 = BigInt(state & MASK64);
    let s1 = BigInt(state >> 64n & MASK64);
    const result = wrappingMul(rotl(wrappingMul(s0, 5n), 7n), 9n);
    s1 ^= s0;
    s0 = (rotl(s0, 24n) ^ s1 ^ s1 << 16n) & MASK64;
    s1 = rotl(s1, 37n);
    state = s1 << 64n | s0;
    return result;
  };
}
__name(xoroshiro128, "xoroshiro128");
var rand = xoroshiro128(0xa187eb39cdcaed8f31c4b365b102e01en);
var PIECE_KEYS = Array.from({ length: 2 }, () => Array.from({ length: 6 }, () => Array.from({ length: 128 }, () => rand())));
var EP_KEYS = Array.from({ length: 8 }, () => rand());
var CASTLING_KEYS = Array.from({ length: 16 }, () => rand());
var SIDE_KEY = rand();
var WHITE = "w";
var BLACK = "b";
var PAWN = "p";
var KNIGHT = "n";
var BISHOP = "b";
var ROOK = "r";
var QUEEN = "q";
var KING = "k";
var DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
var Move = class {
  static {
    __name(this, "Move");
  }
  color;
  from;
  to;
  piece;
  captured;
  promotion;
  /**
   * @deprecated This field is deprecated and will be removed in version 2.0.0.
   * Please use move descriptor functions instead: `isCapture`, `isPromotion`,
   * `isEnPassant`, `isKingsideCastle`, `isQueensideCastle`, `isCastle`, and
   * `isBigPawn`
   */
  flags;
  san;
  lan;
  before;
  after;
  constructor(chess, internal) {
    const { color, piece, from, to, flags, captured, promotion } = internal;
    const fromAlgebraic = algebraic(from);
    const toAlgebraic = algebraic(to);
    this.color = color;
    this.piece = piece;
    this.from = fromAlgebraic;
    this.to = toAlgebraic;
    this.san = chess["_moveToSan"](internal, chess["_moves"]({ legal: true }));
    this.lan = fromAlgebraic + toAlgebraic;
    this.before = chess.fen();
    chess["_makeMove"](internal);
    this.after = chess.fen();
    chess["_undoMove"]();
    this.flags = "";
    for (const flag in BITS) {
      if (BITS[flag] & flags) {
        this.flags += FLAGS[flag];
      }
    }
    if (captured) {
      this.captured = captured;
    }
    if (promotion) {
      this.promotion = promotion;
      this.lan += promotion;
    }
  }
  isCapture() {
    return this.flags.indexOf(FLAGS["CAPTURE"]) > -1;
  }
  isPromotion() {
    return this.flags.indexOf(FLAGS["PROMOTION"]) > -1;
  }
  isEnPassant() {
    return this.flags.indexOf(FLAGS["EP_CAPTURE"]) > -1;
  }
  isKingsideCastle() {
    return this.flags.indexOf(FLAGS["KSIDE_CASTLE"]) > -1;
  }
  isQueensideCastle() {
    return this.flags.indexOf(FLAGS["QSIDE_CASTLE"]) > -1;
  }
  isBigPawn() {
    return this.flags.indexOf(FLAGS["BIG_PAWN"]) > -1;
  }
};
var EMPTY = -1;
var FLAGS = {
  NORMAL: "n",
  CAPTURE: "c",
  BIG_PAWN: "b",
  EP_CAPTURE: "e",
  PROMOTION: "p",
  KSIDE_CASTLE: "k",
  QSIDE_CASTLE: "q",
  NULL_MOVE: "-"
};
var BITS = {
  NORMAL: 1,
  CAPTURE: 2,
  BIG_PAWN: 4,
  EP_CAPTURE: 8,
  PROMOTION: 16,
  KSIDE_CASTLE: 32,
  QSIDE_CASTLE: 64,
  NULL_MOVE: 128
};
var SEVEN_TAG_ROSTER = {
  Event: "?",
  Site: "?",
  Date: "????.??.??",
  Round: "?",
  White: "?",
  Black: "?",
  Result: "*"
};
var SUPLEMENTAL_TAGS = {
  WhiteTitle: null,
  BlackTitle: null,
  WhiteElo: null,
  BlackElo: null,
  WhiteUSCF: null,
  BlackUSCF: null,
  WhiteNA: null,
  BlackNA: null,
  WhiteType: null,
  BlackType: null,
  EventDate: null,
  EventSponsor: null,
  Section: null,
  Stage: null,
  Board: null,
  Opening: null,
  Variation: null,
  SubVariation: null,
  ECO: null,
  NIC: null,
  Time: null,
  UTCTime: null,
  UTCDate: null,
  TimeControl: null,
  SetUp: null,
  FEN: null,
  Termination: null,
  Annotator: null,
  Mode: null,
  PlyCount: null
};
var HEADER_TEMPLATE = {
  ...SEVEN_TAG_ROSTER,
  ...SUPLEMENTAL_TAGS
};
var Ox88 = {
  a8: 0,
  b8: 1,
  c8: 2,
  d8: 3,
  e8: 4,
  f8: 5,
  g8: 6,
  h8: 7,
  a7: 16,
  b7: 17,
  c7: 18,
  d7: 19,
  e7: 20,
  f7: 21,
  g7: 22,
  h7: 23,
  a6: 32,
  b6: 33,
  c6: 34,
  d6: 35,
  e6: 36,
  f6: 37,
  g6: 38,
  h6: 39,
  a5: 48,
  b5: 49,
  c5: 50,
  d5: 51,
  e5: 52,
  f5: 53,
  g5: 54,
  h5: 55,
  a4: 64,
  b4: 65,
  c4: 66,
  d4: 67,
  e4: 68,
  f4: 69,
  g4: 70,
  h4: 71,
  a3: 80,
  b3: 81,
  c3: 82,
  d3: 83,
  e3: 84,
  f3: 85,
  g3: 86,
  h3: 87,
  a2: 96,
  b2: 97,
  c2: 98,
  d2: 99,
  e2: 100,
  f2: 101,
  g2: 102,
  h2: 103,
  a1: 112,
  b1: 113,
  c1: 114,
  d1: 115,
  e1: 116,
  f1: 117,
  g1: 118,
  h1: 119
};
var PAWN_OFFSETS = {
  b: [16, 32, 17, 15],
  w: [-16, -32, -17, -15]
};
var PIECE_OFFSETS = {
  n: [-18, -33, -31, -14, 18, 33, 31, 14],
  b: [-17, -15, 17, 15],
  r: [-16, 1, 16, -1],
  q: [-17, -16, -15, 1, 17, 16, 15, -1],
  k: [-17, -16, -15, 1, 17, 16, 15, -1]
};
var ATTACKS = [
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  24,
  24,
  24,
  24,
  24,
  56,
  0,
  56,
  24,
  24,
  24,
  24,
  24,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20
];
var RAYS = [
  17,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  16,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  16,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  16,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  -16,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  -16,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  -16,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  0,
  -17
];
var PIECE_MASKS = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 };
var SYMBOLS = "pnbrqkPNBRQK";
var PROMOTIONS = [KNIGHT, BISHOP, ROOK, QUEEN];
var RANK_1 = 7;
var RANK_2 = 6;
var RANK_7 = 1;
var RANK_8 = 0;
var SIDES = {
  [KING]: BITS.KSIDE_CASTLE,
  [QUEEN]: BITS.QSIDE_CASTLE
};
var ROOKS = {
  w: [
    { square: Ox88.a1, flag: BITS.QSIDE_CASTLE },
    { square: Ox88.h1, flag: BITS.KSIDE_CASTLE }
  ],
  b: [
    { square: Ox88.a8, flag: BITS.QSIDE_CASTLE },
    { square: Ox88.h8, flag: BITS.KSIDE_CASTLE }
  ]
};
var SECOND_RANK = { b: RANK_7, w: RANK_2 };
var SAN_NULLMOVE = "--";
function rank(square) {
  return square >> 4;
}
__name(rank, "rank");
function file(square) {
  return square & 15;
}
__name(file, "file");
function isDigit(c) {
  return "0123456789".indexOf(c) !== -1;
}
__name(isDigit, "isDigit");
function algebraic(square) {
  const f = file(square);
  const r = rank(square);
  return "abcdefgh".substring(f, f + 1) + "87654321".substring(r, r + 1);
}
__name(algebraic, "algebraic");
function swapColor(color) {
  return color === WHITE ? BLACK : WHITE;
}
__name(swapColor, "swapColor");
function validateFen(fen) {
  const tokens = fen.split(/\s+/);
  if (tokens.length !== 6) {
    return {
      ok: false,
      error: "Invalid FEN: must contain six space-delimited fields"
    };
  }
  const moveNumber = parseInt(tokens[5], 10);
  if (isNaN(moveNumber) || moveNumber <= 0) {
    return {
      ok: false,
      error: "Invalid FEN: move number must be a positive integer"
    };
  }
  const halfMoves = parseInt(tokens[4], 10);
  if (isNaN(halfMoves) || halfMoves < 0) {
    return {
      ok: false,
      error: "Invalid FEN: half move counter number must be a non-negative integer"
    };
  }
  if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
    return { ok: false, error: "Invalid FEN: en-passant square is invalid" };
  }
  if (/[^kKqQ-]/.test(tokens[2])) {
    return { ok: false, error: "Invalid FEN: castling availability is invalid" };
  }
  if (!/^(w|b)$/.test(tokens[1])) {
    return { ok: false, error: "Invalid FEN: side-to-move is invalid" };
  }
  const rows = tokens[0].split("/");
  if (rows.length !== 8) {
    return {
      ok: false,
      error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
    };
  }
  for (let i = 0; i < rows.length; i++) {
    let sumFields = 0;
    let previousWasNumber = false;
    for (let k = 0; k < rows[i].length; k++) {
      if (isDigit(rows[i][k])) {
        if (previousWasNumber) {
          return {
            ok: false,
            error: "Invalid FEN: piece data is invalid (consecutive number)"
          };
        }
        sumFields += parseInt(rows[i][k], 10);
        previousWasNumber = true;
      } else {
        if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
          return {
            ok: false,
            error: "Invalid FEN: piece data is invalid (invalid piece)"
          };
        }
        sumFields += 1;
        previousWasNumber = false;
      }
    }
    if (sumFields !== 8) {
      return {
        ok: false,
        error: "Invalid FEN: piece data is invalid (too many squares in rank)"
      };
    }
  }
  if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") {
    return { ok: false, error: "Invalid FEN: illegal en-passant square" };
  }
  const kings = [
    { color: "white", regex: /K/g },
    { color: "black", regex: /k/g }
  ];
  for (const { color, regex } of kings) {
    if (!regex.test(tokens[0])) {
      return { ok: false, error: `Invalid FEN: missing ${color} king` };
    }
    if ((tokens[0].match(regex) || []).length > 1) {
      return { ok: false, error: `Invalid FEN: too many ${color} kings` };
    }
  }
  if (Array.from(rows[0] + rows[7]).some((char) => char.toUpperCase() === "P")) {
    return {
      ok: false,
      error: "Invalid FEN: some pawns are on the edge rows"
    };
  }
  return { ok: true };
}
__name(validateFen, "validateFen");
function getDisambiguator(move, moves) {
  const from = move.from;
  const to = move.to;
  const piece = move.piece;
  let ambiguities = 0;
  let sameRank = 0;
  let sameFile = 0;
  for (let i = 0, len = moves.length; i < len; i++) {
    const ambigFrom = moves[i].from;
    const ambigTo = moves[i].to;
    const ambigPiece = moves[i].piece;
    if (piece === ambigPiece && from !== ambigFrom && to === ambigTo) {
      ambiguities++;
      if (rank(from) === rank(ambigFrom)) {
        sameRank++;
      }
      if (file(from) === file(ambigFrom)) {
        sameFile++;
      }
    }
  }
  if (ambiguities > 0) {
    if (sameRank > 0 && sameFile > 0) {
      return algebraic(from);
    } else if (sameFile > 0) {
      return algebraic(from).charAt(1);
    } else {
      return algebraic(from).charAt(0);
    }
  }
  return "";
}
__name(getDisambiguator, "getDisambiguator");
function addMove(moves, color, from, to, piece, captured = void 0, flags = BITS.NORMAL) {
  const r = rank(to);
  if (piece === PAWN && (r === RANK_1 || r === RANK_8)) {
    for (let i = 0; i < PROMOTIONS.length; i++) {
      const promotion = PROMOTIONS[i];
      moves.push({
        color,
        from,
        to,
        piece,
        captured,
        promotion,
        flags: flags | BITS.PROMOTION
      });
    }
  } else {
    moves.push({
      color,
      from,
      to,
      piece,
      captured,
      flags
    });
  }
}
__name(addMove, "addMove");
function inferPieceType(san) {
  let pieceType = san.charAt(0);
  if (pieceType >= "a" && pieceType <= "h") {
    const matches = san.match(/[a-h]\d.*[a-h]\d/);
    if (matches) {
      return void 0;
    }
    return PAWN;
  }
  pieceType = pieceType.toLowerCase();
  if (pieceType === "o") {
    return KING;
  }
  return pieceType;
}
__name(inferPieceType, "inferPieceType");
function strippedSan(move) {
  return move.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
}
__name(strippedSan, "strippedSan");
var Chess = class {
  static {
    __name(this, "Chess");
  }
  _board = new Array(128);
  _turn = WHITE;
  _header = {};
  _kings = { w: EMPTY, b: EMPTY };
  _epSquare = -1;
  _halfMoves = 0;
  _moveNumber = 0;
  _history = [];
  _comments = {};
  _castling = { w: 0, b: 0 };
  _hash = 0n;
  // tracks number of times a position has been seen for repetition checking
  _positionCount = /* @__PURE__ */ new Map();
  constructor(fen = DEFAULT_POSITION, { skipValidation = false } = {}) {
    this.load(fen, { skipValidation });
  }
  clear({ preserveHeaders = false } = {}) {
    this._board = new Array(128);
    this._kings = { w: EMPTY, b: EMPTY };
    this._turn = WHITE;
    this._castling = { w: 0, b: 0 };
    this._epSquare = EMPTY;
    this._halfMoves = 0;
    this._moveNumber = 1;
    this._history = [];
    this._comments = {};
    this._header = preserveHeaders ? this._header : { ...HEADER_TEMPLATE };
    this._hash = this._computeHash();
    this._positionCount = /* @__PURE__ */ new Map();
    this._header["SetUp"] = null;
    this._header["FEN"] = null;
  }
  load(fen, { skipValidation = false, preserveHeaders = false } = {}) {
    let tokens = fen.split(/\s+/);
    if (tokens.length >= 2 && tokens.length < 6) {
      const adjustments = ["-", "-", "0", "1"];
      fen = tokens.concat(adjustments.slice(-(6 - tokens.length))).join(" ");
    }
    tokens = fen.split(/\s+/);
    if (!skipValidation) {
      const { ok, error } = validateFen(fen);
      if (!ok) {
        throw new Error(error);
      }
    }
    const position = tokens[0];
    let square = 0;
    this.clear({ preserveHeaders });
    for (let i = 0; i < position.length; i++) {
      const piece = position.charAt(i);
      if (piece === "/") {
        square += 8;
      } else if (isDigit(piece)) {
        square += parseInt(piece, 10);
      } else {
        const color = piece < "a" ? WHITE : BLACK;
        this._put({ type: piece.toLowerCase(), color }, algebraic(square));
        square++;
      }
    }
    this._turn = tokens[1];
    if (tokens[2].indexOf("K") > -1) {
      this._castling.w |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf("Q") > -1) {
      this._castling.w |= BITS.QSIDE_CASTLE;
    }
    if (tokens[2].indexOf("k") > -1) {
      this._castling.b |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf("q") > -1) {
      this._castling.b |= BITS.QSIDE_CASTLE;
    }
    this._epSquare = tokens[3] === "-" ? EMPTY : Ox88[tokens[3]];
    this._halfMoves = parseInt(tokens[4], 10);
    this._moveNumber = parseInt(tokens[5], 10);
    this._hash = this._computeHash();
    this._updateSetup(fen);
    this._incPositionCount();
  }
  fen({ forceEnpassantSquare = false } = {}) {
    let empty = 0;
    let fen = "";
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      if (this._board[i]) {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        const { color, type: piece } = this._board[i];
        fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
      } else {
        empty++;
      }
      if (i + 1 & 136) {
        if (empty > 0) {
          fen += empty;
        }
        if (i !== Ox88.h1) {
          fen += "/";
        }
        empty = 0;
        i += 8;
      }
    }
    let castling = "";
    if (this._castling[WHITE] & BITS.KSIDE_CASTLE) {
      castling += "K";
    }
    if (this._castling[WHITE] & BITS.QSIDE_CASTLE) {
      castling += "Q";
    }
    if (this._castling[BLACK] & BITS.KSIDE_CASTLE) {
      castling += "k";
    }
    if (this._castling[BLACK] & BITS.QSIDE_CASTLE) {
      castling += "q";
    }
    castling = castling || "-";
    let epSquare = "-";
    if (this._epSquare !== EMPTY) {
      if (forceEnpassantSquare) {
        epSquare = algebraic(this._epSquare);
      } else {
        const bigPawnSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
        const squares = [bigPawnSquare + 1, bigPawnSquare - 1];
        for (const square of squares) {
          if (square & 136) {
            continue;
          }
          const color = this._turn;
          if (this._board[square]?.color === color && this._board[square]?.type === PAWN) {
            this._makeMove({
              color,
              from: square,
              to: this._epSquare,
              piece: PAWN,
              captured: PAWN,
              flags: BITS.EP_CAPTURE
            });
            const isLegal = !this._isKingAttacked(color);
            this._undoMove();
            if (isLegal) {
              epSquare = algebraic(this._epSquare);
              break;
            }
          }
        }
      }
    }
    return [
      fen,
      this._turn,
      castling,
      epSquare,
      this._halfMoves,
      this._moveNumber
    ].join(" ");
  }
  _pieceKey(i) {
    if (!this._board[i]) {
      return 0n;
    }
    const { color, type } = this._board[i];
    const colorIndex = {
      w: 0,
      b: 1
    }[color];
    const typeIndex = {
      p: 0,
      n: 1,
      b: 2,
      r: 3,
      q: 4,
      k: 5
    }[type];
    return PIECE_KEYS[colorIndex][typeIndex][i];
  }
  _epKey() {
    return this._epSquare === EMPTY ? 0n : EP_KEYS[this._epSquare & 7];
  }
  _castlingKey() {
    const index = this._castling.w >> 5 | this._castling.b >> 3;
    return CASTLING_KEYS[index];
  }
  _computeHash() {
    let hash = 0n;
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      if (i & 136) {
        i += 7;
        continue;
      }
      if (this._board[i]) {
        hash ^= this._pieceKey(i);
      }
    }
    hash ^= this._epKey();
    hash ^= this._castlingKey();
    if (this._turn === "b") {
      hash ^= SIDE_KEY;
    }
    return hash;
  }
  /*
   * Called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object. If the FEN
   * is equal to the default position, the SetUp and FEN are deleted the setup
   * is only updated if history.length is zero, ie moves haven't been made.
   */
  _updateSetup(fen) {
    if (this._history.length > 0)
      return;
    if (fen !== DEFAULT_POSITION) {
      this._header["SetUp"] = "1";
      this._header["FEN"] = fen;
    } else {
      this._header["SetUp"] = null;
      this._header["FEN"] = null;
    }
  }
  reset() {
    this.load(DEFAULT_POSITION);
  }
  get(square) {
    return this._board[Ox88[square]];
  }
  findPiece(piece) {
    const squares = [];
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      if (i & 136) {
        i += 7;
        continue;
      }
      if (!this._board[i] || this._board[i]?.color !== piece.color) {
        continue;
      }
      if (this._board[i].color === piece.color && this._board[i].type === piece.type) {
        squares.push(algebraic(i));
      }
    }
    return squares;
  }
  put({ type, color }, square) {
    if (this._put({ type, color }, square)) {
      this._updateCastlingRights();
      this._updateEnPassantSquare();
      this._updateSetup(this.fen());
      return true;
    }
    return false;
  }
  _set(sq, piece) {
    this._hash ^= this._pieceKey(sq);
    this._board[sq] = piece;
    this._hash ^= this._pieceKey(sq);
  }
  _put({ type, color }, square) {
    if (SYMBOLS.indexOf(type.toLowerCase()) === -1) {
      return false;
    }
    if (!(square in Ox88)) {
      return false;
    }
    const sq = Ox88[square];
    if (type == KING && !(this._kings[color] == EMPTY || this._kings[color] == sq)) {
      return false;
    }
    const currentPieceOnSquare = this._board[sq];
    if (currentPieceOnSquare && currentPieceOnSquare.type === KING) {
      this._kings[currentPieceOnSquare.color] = EMPTY;
    }
    this._set(sq, { type, color });
    if (type === KING) {
      this._kings[color] = sq;
    }
    return true;
  }
  _clear(sq) {
    this._hash ^= this._pieceKey(sq);
    delete this._board[sq];
  }
  remove(square) {
    const piece = this.get(square);
    this._clear(Ox88[square]);
    if (piece && piece.type === KING) {
      this._kings[piece.color] = EMPTY;
    }
    this._updateCastlingRights();
    this._updateEnPassantSquare();
    this._updateSetup(this.fen());
    return piece;
  }
  _updateCastlingRights() {
    this._hash ^= this._castlingKey();
    const whiteKingInPlace = this._board[Ox88.e1]?.type === KING && this._board[Ox88.e1]?.color === WHITE;
    const blackKingInPlace = this._board[Ox88.e8]?.type === KING && this._board[Ox88.e8]?.color === BLACK;
    if (!whiteKingInPlace || this._board[Ox88.a1]?.type !== ROOK || this._board[Ox88.a1]?.color !== WHITE) {
      this._castling.w &= -65;
    }
    if (!whiteKingInPlace || this._board[Ox88.h1]?.type !== ROOK || this._board[Ox88.h1]?.color !== WHITE) {
      this._castling.w &= -33;
    }
    if (!blackKingInPlace || this._board[Ox88.a8]?.type !== ROOK || this._board[Ox88.a8]?.color !== BLACK) {
      this._castling.b &= -65;
    }
    if (!blackKingInPlace || this._board[Ox88.h8]?.type !== ROOK || this._board[Ox88.h8]?.color !== BLACK) {
      this._castling.b &= -33;
    }
    this._hash ^= this._castlingKey();
  }
  _updateEnPassantSquare() {
    if (this._epSquare === EMPTY) {
      return;
    }
    const startSquare = this._epSquare + (this._turn === WHITE ? -16 : 16);
    const currentSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
    const attackers = [currentSquare + 1, currentSquare - 1];
    if (this._board[startSquare] !== null || this._board[this._epSquare] !== null || this._board[currentSquare]?.color !== swapColor(this._turn) || this._board[currentSquare]?.type !== PAWN) {
      this._hash ^= this._epKey();
      this._epSquare = EMPTY;
      return;
    }
    const canCapture = /* @__PURE__ */ __name((square) => !(square & 136) && this._board[square]?.color === this._turn && this._board[square]?.type === PAWN, "canCapture");
    if (!attackers.some(canCapture)) {
      this._hash ^= this._epKey();
      this._epSquare = EMPTY;
    }
  }
  _attacked(color, square, verbose) {
    const attackers = [];
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      if (i & 136) {
        i += 7;
        continue;
      }
      if (this._board[i] === void 0 || this._board[i].color !== color) {
        continue;
      }
      const piece = this._board[i];
      const difference = i - square;
      if (difference === 0) {
        continue;
      }
      const index = difference + 119;
      if (ATTACKS[index] & PIECE_MASKS[piece.type]) {
        if (piece.type === PAWN) {
          if (difference > 0 && piece.color === WHITE || difference <= 0 && piece.color === BLACK) {
            if (!verbose) {
              return true;
            } else {
              attackers.push(algebraic(i));
            }
          }
          continue;
        }
        if (piece.type === "n" || piece.type === "k") {
          if (!verbose) {
            return true;
          } else {
            attackers.push(algebraic(i));
            continue;
          }
        }
        const offset = RAYS[index];
        let j = i + offset;
        let blocked = false;
        while (j !== square) {
          if (this._board[j] != null) {
            blocked = true;
            break;
          }
          j += offset;
        }
        if (!blocked) {
          if (!verbose) {
            return true;
          } else {
            attackers.push(algebraic(i));
            continue;
          }
        }
      }
    }
    if (verbose) {
      return attackers;
    } else {
      return false;
    }
  }
  attackers(square, attackedBy) {
    if (!attackedBy) {
      return this._attacked(this._turn, Ox88[square], true);
    } else {
      return this._attacked(attackedBy, Ox88[square], true);
    }
  }
  _isKingAttacked(color) {
    const square = this._kings[color];
    return square === -1 ? false : this._attacked(swapColor(color), square);
  }
  hash() {
    return this._hash.toString(16);
  }
  isAttacked(square, attackedBy) {
    return this._attacked(attackedBy, Ox88[square]);
  }
  isCheck() {
    return this._isKingAttacked(this._turn);
  }
  inCheck() {
    return this.isCheck();
  }
  isCheckmate() {
    return this.isCheck() && this._moves().length === 0;
  }
  isStalemate() {
    return !this.isCheck() && this._moves().length === 0;
  }
  isInsufficientMaterial() {
    const pieces = {
      b: 0,
      n: 0,
      r: 0,
      q: 0,
      k: 0,
      p: 0
    };
    const bishops = [];
    let numPieces = 0;
    let squareColor = 0;
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      squareColor = (squareColor + 1) % 2;
      if (i & 136) {
        i += 7;
        continue;
      }
      const piece = this._board[i];
      if (piece) {
        pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
        if (piece.type === BISHOP) {
          bishops.push(squareColor);
        }
        numPieces++;
      }
    }
    if (numPieces === 2) {
      return true;
    } else if (
      // k vs. kn .... or .... k vs. kb
      numPieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)
    ) {
      return true;
    } else if (numPieces === pieces[BISHOP] + 2) {
      let sum = 0;
      const len = bishops.length;
      for (let i = 0; i < len; i++) {
        sum += bishops[i];
      }
      if (sum === 0 || sum === len) {
        return true;
      }
    }
    return false;
  }
  isThreefoldRepetition() {
    return this._getPositionCount(this._hash) >= 3;
  }
  isDrawByFiftyMoves() {
    return this._halfMoves >= 100;
  }
  isDraw() {
    return this.isDrawByFiftyMoves() || this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
  }
  isGameOver() {
    return this.isCheckmate() || this.isDraw();
  }
  moves({ verbose = false, square = void 0, piece = void 0 } = {}) {
    const moves = this._moves({ square, piece });
    if (verbose) {
      return moves.map((move) => new Move(this, move));
    } else {
      return moves.map((move) => this._moveToSan(move, moves));
    }
  }
  _moves({ legal = true, piece = void 0, square = void 0 } = {}) {
    const forSquare = square ? square.toLowerCase() : void 0;
    const forPiece = piece?.toLowerCase();
    const moves = [];
    const us = this._turn;
    const them = swapColor(us);
    let firstSquare = Ox88.a8;
    let lastSquare = Ox88.h1;
    let singleSquare = false;
    if (forSquare) {
      if (!(forSquare in Ox88)) {
        return [];
      } else {
        firstSquare = lastSquare = Ox88[forSquare];
        singleSquare = true;
      }
    }
    for (let from = firstSquare; from <= lastSquare; from++) {
      if (from & 136) {
        from += 7;
        continue;
      }
      if (!this._board[from] || this._board[from].color === them) {
        continue;
      }
      const { type } = this._board[from];
      let to;
      if (type === PAWN) {
        if (forPiece && forPiece !== type)
          continue;
        to = from + PAWN_OFFSETS[us][0];
        if (!this._board[to]) {
          addMove(moves, us, from, to, PAWN);
          to = from + PAWN_OFFSETS[us][1];
          if (SECOND_RANK[us] === rank(from) && !this._board[to]) {
            addMove(moves, us, from, to, PAWN, void 0, BITS.BIG_PAWN);
          }
        }
        for (let j = 2; j < 4; j++) {
          to = from + PAWN_OFFSETS[us][j];
          if (to & 136)
            continue;
          if (this._board[to]?.color === them) {
            addMove(moves, us, from, to, PAWN, this._board[to].type, BITS.CAPTURE);
          } else if (to === this._epSquare) {
            addMove(moves, us, from, to, PAWN, PAWN, BITS.EP_CAPTURE);
          }
        }
      } else {
        if (forPiece && forPiece !== type)
          continue;
        for (let j = 0, len = PIECE_OFFSETS[type].length; j < len; j++) {
          const offset = PIECE_OFFSETS[type][j];
          to = from;
          while (true) {
            to += offset;
            if (to & 136)
              break;
            if (!this._board[to]) {
              addMove(moves, us, from, to, type);
            } else {
              if (this._board[to].color === us)
                break;
              addMove(moves, us, from, to, type, this._board[to].type, BITS.CAPTURE);
              break;
            }
            if (type === KNIGHT || type === KING)
              break;
          }
        }
      }
    }
    if (forPiece === void 0 || forPiece === KING) {
      if (!singleSquare || lastSquare === this._kings[us]) {
        if (this._castling[us] & BITS.KSIDE_CASTLE) {
          const castlingFrom = this._kings[us];
          const castlingTo = castlingFrom + 2;
          if (!this._board[castlingFrom + 1] && !this._board[castlingTo] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom + 1) && !this._attacked(them, castlingTo)) {
            addMove(moves, us, this._kings[us], castlingTo, KING, void 0, BITS.KSIDE_CASTLE);
          }
        }
        if (this._castling[us] & BITS.QSIDE_CASTLE) {
          const castlingFrom = this._kings[us];
          const castlingTo = castlingFrom - 2;
          if (!this._board[castlingFrom - 1] && !this._board[castlingFrom - 2] && !this._board[castlingFrom - 3] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom - 1) && !this._attacked(them, castlingTo)) {
            addMove(moves, us, this._kings[us], castlingTo, KING, void 0, BITS.QSIDE_CASTLE);
          }
        }
      }
    }
    if (!legal || this._kings[us] === -1) {
      return moves;
    }
    const legalMoves = [];
    for (let i = 0, len = moves.length; i < len; i++) {
      this._makeMove(moves[i]);
      if (!this._isKingAttacked(us)) {
        legalMoves.push(moves[i]);
      }
      this._undoMove();
    }
    return legalMoves;
  }
  move(move, { strict = false } = {}) {
    let moveObj = null;
    if (typeof move === "string") {
      moveObj = this._moveFromSan(move, strict);
    } else if (move === null) {
      moveObj = this._moveFromSan(SAN_NULLMOVE, strict);
    } else if (typeof move === "object") {
      const moves = this._moves();
      for (let i = 0, len = moves.length; i < len; i++) {
        if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && (!("promotion" in moves[i]) || move.promotion === moves[i].promotion)) {
          moveObj = moves[i];
          break;
        }
      }
    }
    if (!moveObj) {
      if (typeof move === "string") {
        throw new Error(`Invalid move: ${move}`);
      } else {
        throw new Error(`Invalid move: ${JSON.stringify(move)}`);
      }
    }
    if (this.isCheck() && moveObj.flags & BITS.NULL_MOVE) {
      throw new Error("Null move not allowed when in check");
    }
    const prettyMove = new Move(this, moveObj);
    this._makeMove(moveObj);
    this._incPositionCount();
    return prettyMove;
  }
  _push(move) {
    this._history.push({
      move,
      kings: { b: this._kings.b, w: this._kings.w },
      turn: this._turn,
      castling: { b: this._castling.b, w: this._castling.w },
      epSquare: this._epSquare,
      halfMoves: this._halfMoves,
      moveNumber: this._moveNumber
    });
  }
  _movePiece(from, to) {
    this._hash ^= this._pieceKey(from);
    this._board[to] = this._board[from];
    delete this._board[from];
    this._hash ^= this._pieceKey(to);
  }
  _makeMove(move) {
    const us = this._turn;
    const them = swapColor(us);
    this._push(move);
    if (move.flags & BITS.NULL_MOVE) {
      if (us === BLACK) {
        this._moveNumber++;
      }
      this._halfMoves++;
      this._turn = them;
      this._epSquare = EMPTY;
      return;
    }
    this._hash ^= this._epKey();
    this._hash ^= this._castlingKey();
    if (move.captured) {
      this._hash ^= this._pieceKey(move.to);
    }
    this._movePiece(move.from, move.to);
    if (move.flags & BITS.EP_CAPTURE) {
      if (this._turn === BLACK) {
        this._clear(move.to - 16);
      } else {
        this._clear(move.to + 16);
      }
    }
    if (move.promotion) {
      this._clear(move.to);
      this._set(move.to, { type: move.promotion, color: us });
    }
    if (this._board[move.to].type === KING) {
      this._kings[us] = move.to;
      if (move.flags & BITS.KSIDE_CASTLE) {
        const castlingTo = move.to - 1;
        const castlingFrom = move.to + 1;
        this._movePiece(castlingFrom, castlingTo);
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        const castlingTo = move.to + 1;
        const castlingFrom = move.to - 2;
        this._movePiece(castlingFrom, castlingTo);
      }
      this._castling[us] = 0;
    }
    if (this._castling[us]) {
      for (let i = 0, len = ROOKS[us].length; i < len; i++) {
        if (move.from === ROOKS[us][i].square && this._castling[us] & ROOKS[us][i].flag) {
          this._castling[us] ^= ROOKS[us][i].flag;
          break;
        }
      }
    }
    if (this._castling[them]) {
      for (let i = 0, len = ROOKS[them].length; i < len; i++) {
        if (move.to === ROOKS[them][i].square && this._castling[them] & ROOKS[them][i].flag) {
          this._castling[them] ^= ROOKS[them][i].flag;
          break;
        }
      }
    }
    this._hash ^= this._castlingKey();
    if (move.flags & BITS.BIG_PAWN) {
      let epSquare;
      if (us === BLACK) {
        epSquare = move.to - 16;
      } else {
        epSquare = move.to + 16;
      }
      if (!(move.to - 1 & 136) && this._board[move.to - 1]?.type === PAWN && this._board[move.to - 1]?.color === them || !(move.to + 1 & 136) && this._board[move.to + 1]?.type === PAWN && this._board[move.to + 1]?.color === them) {
        this._epSquare = epSquare;
        this._hash ^= this._epKey();
      } else {
        this._epSquare = EMPTY;
      }
    } else {
      this._epSquare = EMPTY;
    }
    if (move.piece === PAWN) {
      this._halfMoves = 0;
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      this._halfMoves = 0;
    } else {
      this._halfMoves++;
    }
    if (us === BLACK) {
      this._moveNumber++;
    }
    this._turn = them;
    this._hash ^= SIDE_KEY;
  }
  undo() {
    const hash = this._hash;
    const move = this._undoMove();
    if (move) {
      const prettyMove = new Move(this, move);
      this._decPositionCount(hash);
      return prettyMove;
    }
    return null;
  }
  _undoMove() {
    const old = this._history.pop();
    if (old === void 0) {
      return null;
    }
    this._hash ^= this._epKey();
    this._hash ^= this._castlingKey();
    const move = old.move;
    this._kings = old.kings;
    this._turn = old.turn;
    this._castling = old.castling;
    this._epSquare = old.epSquare;
    this._halfMoves = old.halfMoves;
    this._moveNumber = old.moveNumber;
    this._hash ^= this._epKey();
    this._hash ^= this._castlingKey();
    this._hash ^= SIDE_KEY;
    const us = this._turn;
    const them = swapColor(us);
    if (move.flags & BITS.NULL_MOVE) {
      return move;
    }
    this._movePiece(move.to, move.from);
    if (move.piece) {
      this._clear(move.from);
      this._set(move.from, { type: move.piece, color: us });
    }
    if (move.captured) {
      if (move.flags & BITS.EP_CAPTURE) {
        let index;
        if (us === BLACK) {
          index = move.to - 16;
        } else {
          index = move.to + 16;
        }
        this._set(index, { type: PAWN, color: them });
      } else {
        this._set(move.to, { type: move.captured, color: them });
      }
    }
    if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      let castlingTo, castlingFrom;
      if (move.flags & BITS.KSIDE_CASTLE) {
        castlingTo = move.to + 1;
        castlingFrom = move.to - 1;
      } else {
        castlingTo = move.to - 2;
        castlingFrom = move.to + 1;
      }
      this._movePiece(castlingFrom, castlingTo);
    }
    return move;
  }
  pgn({ newline = "\n", maxWidth = 0 } = {}) {
    const result = [];
    let headerExists = false;
    for (const i in this._header) {
      const headerTag = this._header[i];
      if (headerTag)
        result.push(`[${i} "${this._header[i]}"]` + newline);
      headerExists = true;
    }
    if (headerExists && this._history.length) {
      result.push(newline);
    }
    const appendComment = /* @__PURE__ */ __name((moveString2) => {
      const comment = this._comments[this.fen()];
      if (typeof comment !== "undefined") {
        const delimiter = moveString2.length > 0 ? " " : "";
        moveString2 = `${moveString2}${delimiter}{${comment}}`;
      }
      return moveString2;
    }, "appendComment");
    const reversedHistory = [];
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    const moves = [];
    let moveString = "";
    if (reversedHistory.length === 0) {
      moves.push(appendComment(""));
    }
    while (reversedHistory.length > 0) {
      moveString = appendComment(moveString);
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      if (!this._history.length && move.color === "b") {
        const prefix = `${this._moveNumber}. ...`;
        moveString = moveString ? `${moveString} ${prefix}` : prefix;
      } else if (move.color === "w") {
        if (moveString.length) {
          moves.push(moveString);
        }
        moveString = this._moveNumber + ".";
      }
      moveString = moveString + " " + this._moveToSan(move, this._moves({ legal: true }));
      this._makeMove(move);
    }
    if (moveString.length) {
      moves.push(appendComment(moveString));
    }
    moves.push(this._header.Result || "*");
    if (maxWidth === 0) {
      return result.join("") + moves.join(" ");
    }
    const strip = /* @__PURE__ */ __name(function() {
      if (result.length > 0 && result[result.length - 1] === " ") {
        result.pop();
        return true;
      }
      return false;
    }, "strip");
    const wrapComment = /* @__PURE__ */ __name(function(width, move) {
      for (const token of move.split(" ")) {
        if (!token) {
          continue;
        }
        if (width + token.length > maxWidth) {
          while (strip()) {
            width--;
          }
          result.push(newline);
          width = 0;
        }
        result.push(token);
        width += token.length;
        result.push(" ");
        width++;
      }
      if (strip()) {
        width--;
      }
      return width;
    }, "wrapComment");
    let currentWidth = 0;
    for (let i = 0; i < moves.length; i++) {
      if (currentWidth + moves[i].length > maxWidth) {
        if (moves[i].includes("{")) {
          currentWidth = wrapComment(currentWidth, moves[i]);
          continue;
        }
      }
      if (currentWidth + moves[i].length > maxWidth && i !== 0) {
        if (result[result.length - 1] === " ") {
          result.pop();
        }
        result.push(newline);
        currentWidth = 0;
      } else if (i !== 0) {
        result.push(" ");
        currentWidth++;
      }
      result.push(moves[i]);
      currentWidth += moves[i].length;
    }
    return result.join("");
  }
  /**
   * @deprecated Use `setHeader` and `getHeaders` instead. This method will return null header tags (which is not what you want)
   */
  header(...args) {
    for (let i = 0; i < args.length; i += 2) {
      if (typeof args[i] === "string" && typeof args[i + 1] === "string") {
        this._header[args[i]] = args[i + 1];
      }
    }
    return this._header;
  }
  // TODO: value validation per spec
  setHeader(key, value) {
    this._header[key] = value ?? SEVEN_TAG_ROSTER[key] ?? null;
    return this.getHeaders();
  }
  removeHeader(key) {
    if (key in this._header) {
      this._header[key] = SEVEN_TAG_ROSTER[key] || null;
      return true;
    }
    return false;
  }
  // return only non-null headers (omit placemarker nulls)
  getHeaders() {
    const nonNullHeaders = {};
    for (const [key, value] of Object.entries(this._header)) {
      if (value !== null) {
        nonNullHeaders[key] = value;
      }
    }
    return nonNullHeaders;
  }
  loadPgn(pgn2, { strict = false, newlineChar = "\r?\n" } = {}) {
    if (newlineChar !== "\r?\n") {
      pgn2 = pgn2.replace(new RegExp(newlineChar, "g"), "\n");
    }
    const parsedPgn = peg$parse(pgn2);
    this.reset();
    const headers = parsedPgn.headers;
    let fen = "";
    for (const key in headers) {
      if (key.toLowerCase() === "fen") {
        fen = headers[key];
      }
      this.header(key, headers[key]);
    }
    if (!strict) {
      if (fen) {
        this.load(fen, { preserveHeaders: true });
      }
    } else {
      if (headers["SetUp"] === "1") {
        if (!("FEN" in headers)) {
          throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
        }
        this.load(headers["FEN"], { preserveHeaders: true });
      }
    }
    let node2 = parsedPgn.root;
    while (node2) {
      if (node2.move) {
        const move = this._moveFromSan(node2.move, strict);
        if (move == null) {
          throw new Error(`Invalid move in PGN: ${node2.move}`);
        } else {
          this._makeMove(move);
          this._incPositionCount();
        }
      }
      if (node2.comment !== void 0) {
        this._comments[this.fen()] = node2.comment;
      }
      node2 = node2.variations[0];
    }
    const result = parsedPgn.result;
    if (result && Object.keys(this._header).length && this._header["Result"] !== result) {
      this.setHeader("Result", result);
    }
  }
  /*
   * Convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} strict Use the strict SAN parser. It will throw errors
   * on overly disambiguated moves (see below):
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */
  _moveToSan(move, moves) {
    let output = "";
    if (move.flags & BITS.KSIDE_CASTLE) {
      output = "O-O";
    } else if (move.flags & BITS.QSIDE_CASTLE) {
      output = "O-O-O";
    } else if (move.flags & BITS.NULL_MOVE) {
      return SAN_NULLMOVE;
    } else {
      if (move.piece !== PAWN) {
        const disambiguator = getDisambiguator(move, moves);
        output += move.piece.toUpperCase() + disambiguator;
      }
      if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move.piece === PAWN) {
          output += algebraic(move.from)[0];
        }
        output += "x";
      }
      output += algebraic(move.to);
      if (move.promotion) {
        output += "=" + move.promotion.toUpperCase();
      }
    }
    this._makeMove(move);
    if (this.isCheck()) {
      if (this.isCheckmate()) {
        output += "#";
      } else {
        output += "+";
      }
    }
    this._undoMove();
    return output;
  }
  // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  _moveFromSan(move, strict = false) {
    let cleanMove = strippedSan(move);
    if (!strict) {
      if (cleanMove === "0-0") {
        cleanMove = "O-O";
      } else if (cleanMove === "0-0-0") {
        cleanMove = "O-O-O";
      }
    }
    if (cleanMove == SAN_NULLMOVE) {
      const res = {
        color: this._turn,
        from: 0,
        to: 0,
        piece: "k",
        flags: BITS.NULL_MOVE
      };
      return res;
    }
    let pieceType = inferPieceType(cleanMove);
    let moves = this._moves({ legal: true, piece: pieceType });
    for (let i = 0, len = moves.length; i < len; i++) {
      if (cleanMove === strippedSan(this._moveToSan(moves[i], moves))) {
        return moves[i];
      }
    }
    if (strict) {
      return null;
    }
    let piece = void 0;
    let matches = void 0;
    let from = void 0;
    let to = void 0;
    let promotion = void 0;
    let overlyDisambiguated = false;
    matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
    if (matches) {
      piece = matches[1];
      from = matches[2];
      to = matches[3];
      promotion = matches[4];
      if (from.length == 1) {
        overlyDisambiguated = true;
      }
    } else {
      matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/);
      if (matches) {
        piece = matches[1];
        from = matches[2];
        to = matches[3];
        promotion = matches[4];
        if (from.length == 1) {
          overlyDisambiguated = true;
        }
      }
    }
    pieceType = inferPieceType(cleanMove);
    moves = this._moves({
      legal: true,
      piece: piece ? piece : pieceType
    });
    if (!to) {
      return null;
    }
    for (let i = 0, len = moves.length; i < len; i++) {
      if (!from) {
        if (cleanMove === strippedSan(this._moveToSan(moves[i], moves)).replace("x", "")) {
          return moves[i];
        }
      } else if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[from] == moves[i].from && Ox88[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
        return moves[i];
      } else if (overlyDisambiguated) {
        const square = algebraic(moves[i].from);
        if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[to] == moves[i].to && (from == square[0] || from == square[1]) && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
          return moves[i];
        }
      }
    }
    return null;
  }
  ascii() {
    let s = "   +------------------------+\n";
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      if (file(i) === 0) {
        s += " " + "87654321"[rank(i)] + " |";
      }
      if (this._board[i]) {
        const piece = this._board[i].type;
        const color = this._board[i].color;
        const symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        s += " " + symbol + " ";
      } else {
        s += " . ";
      }
      if (i + 1 & 136) {
        s += "|\n";
        i += 8;
      }
    }
    s += "   +------------------------+\n";
    s += "     a  b  c  d  e  f  g  h";
    return s;
  }
  perft(depth) {
    const moves = this._moves({ legal: false });
    let nodes = 0;
    const color = this._turn;
    for (let i = 0, len = moves.length; i < len; i++) {
      this._makeMove(moves[i]);
      if (!this._isKingAttacked(color)) {
        if (depth - 1 > 0) {
          nodes += this.perft(depth - 1);
        } else {
          nodes++;
        }
      }
      this._undoMove();
    }
    return nodes;
  }
  setTurn(color) {
    if (this._turn == color) {
      return false;
    }
    this.move("--");
    return true;
  }
  turn() {
    return this._turn;
  }
  board() {
    const output = [];
    let row = [];
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      if (this._board[i] == null) {
        row.push(null);
      } else {
        row.push({
          square: algebraic(i),
          type: this._board[i].type,
          color: this._board[i].color
        });
      }
      if (i + 1 & 136) {
        output.push(row);
        row = [];
        i += 8;
      }
    }
    return output;
  }
  squareColor(square) {
    if (square in Ox88) {
      const sq = Ox88[square];
      return (rank(sq) + file(sq)) % 2 === 0 ? "light" : "dark";
    }
    return null;
  }
  history({ verbose = false } = {}) {
    const reversedHistory = [];
    const moveHistory = [];
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    while (true) {
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      if (verbose) {
        moveHistory.push(new Move(this, move));
      } else {
        moveHistory.push(this._moveToSan(move, this._moves()));
      }
      this._makeMove(move);
    }
    return moveHistory;
  }
  /*
   * Keeps track of position occurrence counts for the purpose of repetition
   * checking. Old positions are removed from the map if their counts are reduced to 0.
   */
  _getPositionCount(hash) {
    return this._positionCount.get(hash) ?? 0;
  }
  _incPositionCount() {
    this._positionCount.set(this._hash, (this._positionCount.get(this._hash) ?? 0) + 1);
  }
  _decPositionCount(hash) {
    const currentCount = this._positionCount.get(hash) ?? 0;
    if (currentCount === 1) {
      this._positionCount.delete(hash);
    } else {
      this._positionCount.set(hash, currentCount - 1);
    }
  }
  _pruneComments() {
    const reversedHistory = [];
    const currentComments = {};
    const copyComment = /* @__PURE__ */ __name((fen) => {
      if (fen in this._comments) {
        currentComments[fen] = this._comments[fen];
      }
    }, "copyComment");
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    copyComment(this.fen());
    while (true) {
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      this._makeMove(move);
      copyComment(this.fen());
    }
    this._comments = currentComments;
  }
  getComment() {
    return this._comments[this.fen()];
  }
  setComment(comment) {
    this._comments[this.fen()] = comment.replace("{", "[").replace("}", "]");
  }
  /**
   * @deprecated Renamed to `removeComment` for consistency
   */
  deleteComment() {
    return this.removeComment();
  }
  removeComment() {
    const comment = this._comments[this.fen()];
    delete this._comments[this.fen()];
    return comment;
  }
  getComments() {
    this._pruneComments();
    return Object.keys(this._comments).map((fen) => {
      return { fen, comment: this._comments[fen] };
    });
  }
  /**
   * @deprecated Renamed to `removeComments` for consistency
   */
  deleteComments() {
    return this.removeComments();
  }
  removeComments() {
    this._pruneComments();
    return Object.keys(this._comments).map((fen) => {
      const comment = this._comments[fen];
      delete this._comments[fen];
      return { fen, comment };
    });
  }
  setCastlingRights(color, rights) {
    for (const side of [KING, QUEEN]) {
      if (rights[side] !== void 0) {
        if (rights[side]) {
          this._castling[color] |= SIDES[side];
        } else {
          this._castling[color] &= ~SIDES[side];
        }
      }
    }
    this._updateCastlingRights();
    const result = this.getCastlingRights(color);
    return (rights[KING] === void 0 || rights[KING] === result[KING]) && (rights[QUEEN] === void 0 || rights[QUEEN] === result[QUEEN]);
  }
  getCastlingRights(color) {
    return {
      [KING]: (this._castling[color] & SIDES[KING]) !== 0,
      [QUEEN]: (this._castling[color] & SIDES[QUEEN]) !== 0
    };
  }
  moveNumber() {
    return this._moveNumber;
  }
};

// ../../src/domain/echo-network/chessRules.ts
function winnerStatus(color) {
  return color === "w" ? "white-won" : "black-won";
}
__name(winnerStatus, "winnerStatus");
function kingControlsCore(chess, color) {
  const core = /* @__PURE__ */ new Set(["d4", "e4", "d5", "e5"]);
  return chess.board().flat().some((piece) => piece?.type === "k" && piece.color === color && core.has(piece.square));
}
__name(kingControlsCore, "kingControlsCore");
function createContractChessState(variant = "standard", timeControl2 = "rapid", now = Date.now()) {
  const baseMs = timeControl2 === "blitz" ? 3 * 6e4 : 10 * 6e4;
  return {
    fen: new Chess().fen(),
    variant,
    version: 0,
    checkCounts: { white: 0, black: 0 },
    status: "active",
    reason: "playing",
    clock: {
      whiteMs: baseMs,
      blackMs: baseMs,
      incrementMs: timeControl2 === "blitz" ? 2e3 : 0,
      turnStartedAt: now
    },
    lastMove: null
  };
}
__name(createContractChessState, "createContractChessState");
function applyContractChessMove(state, input) {
  if (state.status !== "active") throw new Error("The chess match is not active.");
  const chess = new Chess(state.fen);
  const movingColor = chess.turn();
  const now = input.now ?? Date.now();
  const elapsed = Math.max(0, now - state.clock.turnStartedAt);
  const remaining = movingColor === "w" ? state.clock.whiteMs - elapsed : state.clock.blackMs - elapsed;
  if (remaining <= 0) throw new Error("The active chess clock has expired.");
  const move = chess.move({
    from: input.from,
    to: input.to,
    promotion: input.promotion ?? "q"
  });
  if (!move) throw new Error("Illegal chess move.");
  const checkCounts = { ...state.checkCounts };
  if (chess.inCheck()) {
    if (movingColor === "w") checkCounts.white += 1;
    else checkCounts.black += 1;
  }
  let status = "active";
  let reason = "playing";
  if (chess.isCheckmate()) {
    status = winnerStatus(movingColor);
    reason = "checkmate";
  } else if (state.variant === "three-signal" && (movingColor === "w" ? checkCounts.white : checkCounts.black) >= 3) {
    status = winnerStatus(movingColor);
    reason = "three-check";
  } else if (state.variant === "core-control" && kingControlsCore(chess, movingColor)) {
    status = winnerStatus(movingColor);
    reason = "core-control";
  } else if (chess.isDraw() || chess.isStalemate() || chess.isInsufficientMaterial()) {
    status = "draw";
    reason = "draw";
  }
  return {
    ...state,
    fen: chess.fen(),
    version: state.version + 1,
    checkCounts,
    status,
    reason,
    clock: {
      ...state.clock,
      whiteMs: movingColor === "w" ? remaining + state.clock.incrementMs : state.clock.whiteMs,
      blackMs: movingColor === "b" ? remaining + state.clock.incrementMs : state.clock.blackMs,
      turnStartedAt: now
    },
    lastMove: { from: move.from, to: move.to, san: move.san }
  };
}
__name(applyContractChessMove, "applyContractChessMove");
function effectiveClock(state, now = Date.now()) {
  if (state.status !== "active") {
    return { whiteMs: state.clock.whiteMs, blackMs: state.clock.blackMs };
  }
  const chess = new Chess(state.fen);
  const elapsed = Math.max(0, now - state.clock.turnStartedAt);
  return {
    whiteMs: chess.turn() === "w" ? Math.max(0, state.clock.whiteMs - elapsed) : state.clock.whiteMs,
    blackMs: chess.turn() === "b" ? Math.max(0, state.clock.blackMs - elapsed) : state.clock.blackMs
  };
}
__name(effectiveClock, "effectiveClock");

// src/ChessMatchRoom.ts
var RECONNECT_GRACE_MS = 3e4;
var RECEIPT_RECONCILIATION_DELAY_MS = 3e4;
function parseState(value) {
  if (!value) return null;
  return JSON.parse(value);
}
__name(parseState, "parseState");
function timeControl(mode) {
  return mode === "chess_ranked_blitz" ? "blitz" : "rapid";
}
__name(timeControl, "timeControl");
function variantForTicket(ticket) {
  if (ticket.mode !== "chess_anomaly") return "standard";
  if (ticket.variant && ticket.variant !== "standard") return ticket.variant;
  const variants = ["three-signal", "core-control", "fog-memory"];
  const week = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1e3));
  return variants[week % variants.length];
}
__name(variantForTicket, "variantForTicket");
function statusWinnerColor(state) {
  if (state.status === "white-won") return "w";
  if (state.status === "black-won") return "b";
  return null;
}
__name(statusWinnerColor, "statusWinnerColor");
function rewardXp(mode, outcome) {
  if (mode === "chess_ranked_blitz" || mode === "chess_ranked_rapid") {
    return outcome === "win" ? 80 : outcome === "draw" ? 60 : 45;
  }
  return outcome === "win" ? 45 : outcome === "draw" ? 35 : 30;
}
__name(rewardXp, "rewardXp");
var ChessMatchRoom = class extends DurableObject2 {
  static {
    __name(this, "ChessMatchRoom");
  }
  constructor(ctx, env) {
    super(ctx, env);
    ctx.blockConcurrencyWhile(async () => {
      ctx.storage.sql.exec(`
        CREATE TABLE IF NOT EXISTS meta (
          singleton INTEGER PRIMARY KEY CHECK (singleton = 1),
          room_id TEXT NOT NULL,
          mode TEXT NOT NULL,
          variant TEXT NOT NULL,
          state_json TEXT,
          started_at INTEGER,
          finished_at INTEGER,
          receipt_json TEXT,
          receipt_queued INTEGER NOT NULL DEFAULT 0,
          receipt_persisted INTEGER NOT NULL DEFAULT 0
        );
        CREATE TABLE IF NOT EXISTS participants (
          uid TEXT PRIMARY KEY,
          display_name TEXT NOT NULL,
          color TEXT NOT NULL CHECK (color IN ('w', 'b')),
          joined_at INTEGER NOT NULL,
          disconnected_at INTEGER,
          connected_since INTEGER,
          participation_ms INTEGER NOT NULL DEFAULT 0
        );
        CREATE TABLE IF NOT EXISTS used_tickets (
          jti TEXT PRIMARY KEY,
          used_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS commands (
          idempotency_key TEXT PRIMARY KEY,
          uid TEXT NOT NULL,
          command_type TEXT NOT NULL,
          accepted_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS moves (
          ply INTEGER PRIMARY KEY,
          uid TEXT NOT NULL,
          from_square TEXT NOT NULL,
          to_square TEXT NOT NULL,
          san TEXT NOT NULL,
          played_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS result_finalization_outbox (
          singleton INTEGER PRIMARY KEY CHECK (singleton = 1),
          result_status TEXT NOT NULL,
          winner_uid TEXT,
          created_at INTEGER NOT NULL,
          attempts INTEGER NOT NULL DEFAULT 0
        );
      `);
      const columns = ctx.storage.sql.exec(
        "PRAGMA table_info(participants)"
      ).toArray();
      if (!columns.some((column) => column.name === "connected_since")) {
        ctx.storage.sql.exec("ALTER TABLE participants ADD COLUMN connected_since INTEGER");
      }
      if (!columns.some((column) => column.name === "participation_ms")) {
        ctx.storage.sql.exec(
          "ALTER TABLE participants ADD COLUMN participation_ms INTEGER NOT NULL DEFAULT 0"
        );
      }
      const metaColumns = ctx.storage.sql.exec(
        "PRAGMA table_info(meta)"
      ).toArray();
      if (!metaColumns.some((column) => column.name === "receipt_persisted")) {
        ctx.storage.sql.exec(
          "ALTER TABLE meta ADD COLUMN receipt_persisted INTEGER NOT NULL DEFAULT 0"
        );
      }
    });
  }
  async fetch(request) {
    try {
      const ticket = await requireUpgradeTicket(request, this.env, "connect");
      const roomId = roomIdFromPath(request);
      if (ticket.target !== "match" || ticket.roomId !== roomId || !modeIsChess(ticket.mode)) {
        throw new RealtimeError(403, "wrong_room", "This ticket does not belong to the chess room.");
      }
      if (this.ticketWasUsed(ticket.jti)) {
        throw new RealtimeError(409, "ticket_reused", "This room ticket was already used.");
      }
      const now = Date.now();
      let participant = this.participant(ticket.uid);
      const participants = this.participants();
      if (!participant && participants.length >= 2) {
        throw new RealtimeError(409, "room_full", "This chess room is full.");
      }
      this.ctx.storage.transactionSync(() => {
        this.ctx.storage.sql.exec(
          "INSERT INTO used_tickets (jti, used_at) VALUES (?, ?)",
          ticket.jti,
          now
        );
        const meta = this.meta();
        if (!meta) {
          this.ctx.storage.sql.exec(`
            INSERT INTO meta (
              singleton, room_id, mode, variant, state_json,
              started_at, finished_at, receipt_json, receipt_queued, receipt_persisted
            ) VALUES (1, ?, ?, ?, NULL, NULL, NULL, NULL, 0, 0)
          `, roomId, ticket.mode, variantForTicket(ticket));
        } else if (meta.room_id !== roomId || meta.mode !== ticket.mode) {
          throw new RealtimeError(409, "room_contract_mismatch", "The room contract does not match this ticket.");
        }
        if (participant) {
          const existingState = parseState(this.meta()?.state_json ?? null);
          this.ctx.storage.sql.exec(`
            UPDATE participants
            SET display_name = ?,
              disconnected_at = NULL,
              connected_since = CASE
                WHEN ? = 1 AND connected_since IS NULL THEN ?
                ELSE connected_since
              END
            WHERE uid = ?
          `, ticket.displayName, existingState?.status === "active" ? 1 : 0, now, ticket.uid);
        } else {
          const color = participants.length === 0 ? "w" : "b";
          this.ctx.storage.sql.exec(`
            INSERT INTO participants (
              uid, display_name, color, joined_at, disconnected_at, connected_since, participation_ms
            ) VALUES (?, ?, ?, ?, NULL, NULL, 0)
          `, ticket.uid, ticket.displayName, color, now);
          participant = {
            uid: ticket.uid,
            display_name: ticket.displayName,
            color,
            joined_at: now,
            disconnected_at: null,
            connected_since: null,
            participation_ms: 0
          };
        }
        if (this.participants().length === 2 && !parseState(this.meta()?.state_json ?? null)) {
          const meta2 = this.meta();
          const initial = createContractChessState(meta2.variant, timeControl(meta2.mode), now);
          this.ctx.storage.sql.exec(`
            UPDATE meta SET state_json = ?, started_at = ? WHERE singleton = 1
          `, JSON.stringify(initial), now);
          this.ctx.storage.sql.exec(`
            UPDATE participants
            SET connected_since = ?, participation_ms = 0
            WHERE connected_since IS NULL
          `, now);
        }
      });
      const { client, server } = createSocketPair();
      const attachment = {
        uid: ticket.uid,
        displayName: ticket.displayName,
        jti: ticket.jti,
        joinedAt: now
      };
      server.serializeAttachment(attachment);
      this.ctx.acceptWebSocket(server, [`uid:${ticket.uid}`]);
      this.sendSnapshot(server, "room-snapshot");
      this.sendStoredReceipt(server);
      this.broadcastPresence();
      await this.scheduleNextAlarm();
      return upgradeResponse(client);
    } catch (error) {
      return errorResponse(error);
    }
  }
  async webSocketMessage(socket, message) {
    try {
      const attachment = socketAttachment(socket);
      if (!attachment) throw new RealtimeError(401, "session_missing", "The room session is missing.");
      const command = parseRoomCommand(message);
      if (command.type === "ping") {
        const state2 = parseState(this.meta()?.state_json ?? null);
        sendEvent(socket, this.meta()?.room_id ?? "chess-room", state2?.version ?? 0, "pong", {
          clientSentAt: command.sentAt,
          serverTime: Date.now()
        });
        return;
      }
      if (this.commandWasAccepted(command.idempotencyKey)) {
        this.sendSnapshot(socket, "command-replayed");
        this.sendStoredReceipt(socket);
        return;
      }
      const state = parseState(this.meta()?.state_json ?? null);
      if (!state) throw new RealtimeError(409, "waiting_for_opponent", "The match is waiting for an opponent.");
      if (state.status !== "active" && command.type !== "resume" && command.type !== "preset-chat") {
        throw new RealtimeError(409, "match_finished", "The chess match is already complete.");
      }
      if (command.expectedVersion !== state.version) {
        throw new RealtimeError(409, "version_conflict", "The room changed; apply the latest snapshot.");
      }
      if (command.type === "move") {
        await this.applyMove(attachment.uid, command, state);
      } else if (command.type === "resign") {
        await this.resign(attachment.uid, command, state);
      } else if (command.type === "resume") {
        this.sendSnapshot(socket, "room-snapshot");
        this.sendStoredReceipt(socket);
      } else if (command.type === "preset-chat") {
        this.broadcastPreset(attachment.uid, command);
      } else {
        throw new RealtimeError(400, "unsupported_command", "This chess command is not supported.");
      }
    } catch (error) {
      const known = error instanceof RealtimeError ? error : new RealtimeError(400, "invalid_move", "The chess command could not be applied.");
      const state = parseState(this.meta()?.state_json ?? null);
      sendEvent(socket, this.meta()?.room_id ?? "chess-room", state?.version ?? 0, "error", {
        code: known.code,
        message: known.message
      });
    }
  }
  async webSocketClose(socket) {
    await this.markDisconnected(socket);
  }
  async webSocketError(socket) {
    await this.markDisconnected(socket);
  }
  async alarm() {
    const meta = this.meta();
    const state = parseState(meta?.state_json ?? null);
    if (!meta || !state) return;
    if (state.status === "active") {
      const now = Date.now();
      const disconnected = this.participants().filter((row) => row.disconnected_at !== null && now - row.disconnected_at >= RECONNECT_GRACE_MS);
      if (disconnected.length > 0) {
        const remaining = this.participants().filter((row) => !disconnected.some((entry) => entry.uid === row.uid));
        const winner = remaining.length === 1 ? remaining[0] : null;
        const next = {
          ...state,
          version: state.version + 1,
          status: winner ? winner.color === "w" ? "white-won" : "black-won" : "draw",
          reason: "abandoned",
          clock: { ...state.clock, ...effectiveClock(state, now), turnStartedAt: now }
        };
        this.persistTerminalState(next, "abandoned", winner?.uid ?? null, now);
        this.broadcastSnapshots("match-completed");
        await this.finalize("abandoned", winner?.uid ?? null);
        return;
      }
      const clock = effectiveClock(state, now);
      const chess = new Chess(state.fen);
      const expired = chess.turn() === "w" ? clock.whiteMs <= 0 : clock.blackMs <= 0;
      if (expired) {
        const winnerColor = chess.turn() === "w" ? "b" : "w";
        const winner = this.participants().find((row) => row.color === winnerColor) ?? null;
        const next = {
          ...state,
          version: state.version + 1,
          status: winnerColor === "w" ? "white-won" : "black-won",
          reason: "timeout",
          clock: { ...state.clock, ...clock, turnStartedAt: now }
        };
        this.persistTerminalState(next, "timeout", winner?.uid ?? null, now);
        this.broadcastSnapshots("match-completed");
        await this.finalize("timeout", winner?.uid ?? null);
        return;
      }
    }
    if (!meta.receipt_json && this.finalizationIntent()) {
      await this.finalize("completed", null);
    } else if (meta.receipt_json && meta.receipt_persisted === 0) {
      await this.queueStoredReceipt();
    }
    await this.scheduleNextAlarm();
  }
  /**
   * Internal Queue -> room acknowledgement. A Queue send only confirms
   * acceptance by the broker; it does not prove the D1 transaction completed.
   * The receipt and hash are checked against durable room state so a retry for
   * another result cannot mark this room as persisted.
   */
  async acknowledgeReceiptPersistence(matchId, integrityHash) {
    const meta = this.meta();
    if (!meta?.receipt_json || meta.room_id !== matchId) {
      throw new Error("Stored chess receipt is unavailable for acknowledgement.");
    }
    try {
      const parsed = matchReceiptSchema.safeParse(JSON.parse(meta.receipt_json));
      if (!parsed.success || parsed.data.matchId !== matchId || parsed.data.integrityHash !== integrityHash) {
        throw new Error("Stored chess receipt does not match the persistence acknowledgement.");
      }
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error("Stored chess receipt cannot be acknowledged.");
    }
    this.ctx.storage.sql.exec(
      "UPDATE meta SET receipt_persisted = 1 WHERE singleton = 1"
    );
  }
  meta() {
    return this.ctx.storage.sql.exec("SELECT * FROM meta WHERE singleton = 1").toArray()[0] ?? null;
  }
  participants() {
    return this.ctx.storage.sql.exec(`
      SELECT uid, display_name, color, joined_at, disconnected_at, connected_since, participation_ms
      FROM participants ORDER BY joined_at ASC, uid ASC
    `).toArray();
  }
  participant(uid) {
    return this.ctx.storage.sql.exec(`
      SELECT uid, display_name, color, joined_at, disconnected_at, connected_since, participation_ms
      FROM participants WHERE uid = ?
    `, uid).toArray()[0] ?? null;
  }
  ticketWasUsed(jti) {
    return Boolean(this.ctx.storage.sql.exec(
      "SELECT jti FROM used_tickets WHERE jti = ?",
      jti
    ).toArray()[0]);
  }
  commandWasAccepted(key) {
    return Boolean(this.ctx.storage.sql.exec(
      "SELECT idempotency_key FROM commands WHERE idempotency_key = ?",
      key
    ).toArray()[0]);
  }
  snapshotFor(uid) {
    const meta = this.meta();
    const state = parseState(meta?.state_json ?? null);
    const participant = this.participant(uid);
    const players = this.participants().map((row) => ({
      uid: row.uid,
      displayName: row.display_name,
      color: row.color,
      connected: row.disconnected_at === null
    }));
    if (!meta || !state || !participant) {
      return { status: "waiting", players, color: participant?.color ?? null };
    }
    const chess = new Chess(state.fen);
    const legalMoves = chess.turn() === participant.color && state.status === "active" ? chess.moves({ verbose: true }).map((move) => ({
      from: move.from,
      to: move.to,
      promotion: move.promotion ?? null
    })) : [];
    const fogPieces = state.variant === "fog-memory" ? chess.board().flat().flatMap((piece) => {
      if (!piece) return [];
      const visible = piece.color === participant.color || chess.isAttacked(piece.square, participant.color);
      return visible ? [{ square: piece.square, type: piece.type, color: piece.color }] : [];
    }) : null;
    return {
      status: state.status,
      mode: meta.mode,
      variant: meta.variant,
      color: participant.color,
      players,
      state: state.variant === "fog-memory" ? { ...state, fen: null } : state,
      fogPieces,
      legalMoves,
      clock: effectiveClock(state),
      activeColor: chess.turn(),
      serverTime: Date.now()
    };
  }
  sendSnapshot(socket, eventType) {
    const attachment = socketAttachment(socket);
    if (!attachment) return;
    const meta = this.meta();
    const state = parseState(meta?.state_json ?? null);
    sendEvent(
      socket,
      meta?.room_id ?? "chess-room",
      state?.version ?? 0,
      eventType,
      this.snapshotFor(attachment.uid)
    );
  }
  sendStoredReceipt(socket) {
    const meta = this.meta();
    if (!meta?.receipt_json) return;
    try {
      const receipt = matchReceiptSchema.safeParse(JSON.parse(meta.receipt_json));
      if (!receipt.success) return;
      const state = parseState(meta.state_json);
      sendEvent(socket, meta.room_id, state?.version ?? 0, "reward-pending", { receipt: receipt.data });
    } catch {
    }
  }
  broadcastSnapshots(eventType) {
    for (const socket of this.ctx.getWebSockets()) this.sendSnapshot(socket, eventType);
  }
  broadcastPresence() {
    this.broadcastSnapshots("presence-changed");
  }
  async applyMove(uid, command, state) {
    const player = this.participant(uid);
    if (!player) throw new RealtimeError(403, "not_a_player", "Only a seated player can move.");
    const chess = new Chess(state.fen);
    if (chess.turn() !== player.color) {
      throw new RealtimeError(409, "not_your_turn", "Wait for the other signal.");
    }
    const from = typeof command.payload.from === "string" ? command.payload.from : "";
    const to = typeof command.payload.to === "string" ? command.payload.to : "";
    const promotion = typeof command.payload.promotion === "string" ? command.payload.promotion : void 0;
    if (!/^[a-h][1-8]$/.test(from) || !/^[a-h][1-8]$/.test(to) || promotion && !["q", "r", "b", "n"].includes(promotion)) {
      throw new RealtimeError(400, "invalid_move", "The requested chess move is invalid.");
    }
    let next;
    try {
      next = applyContractChessMove(state, {
        from,
        to,
        promotion,
        now: Date.now()
      });
    } catch {
      throw new RealtimeError(409, "illegal_move", "That chess move is not legal.");
    }
    const now = Date.now();
    this.ctx.storage.transactionSync(() => {
      this.ctx.storage.sql.exec(
        "UPDATE meta SET state_json = ? WHERE singleton = 1",
        JSON.stringify(next)
      );
      this.ctx.storage.sql.exec(`
        INSERT INTO commands (idempotency_key, uid, command_type, accepted_at)
        VALUES (?, ?, ?, ?)
      `, command.idempotencyKey, uid, command.type, now);
      this.ctx.storage.sql.exec(`
        INSERT INTO moves (ply, uid, from_square, to_square, san, played_at)
        VALUES (?, ?, ?, ?, ?, ?)
      `, next.version, uid, from, to, next.lastMove?.san ?? "", now);
      if (next.status !== "active") {
        const winnerColor = statusWinnerColor(next);
        const winner = this.participants().find((row) => row.color === winnerColor) ?? null;
        this.persistFinalizationIntent("completed", winner?.uid ?? null, now);
      }
    });
    this.broadcastSnapshots(next.status === "active" ? "move-applied" : "match-completed");
    if (next.status !== "active") {
      const winnerColor = statusWinnerColor(next);
      const winner = this.participants().find((row) => row.color === winnerColor) ?? null;
      await this.finalize("completed", winner?.uid ?? null);
    } else {
      await this.scheduleNextAlarm();
    }
  }
  async resign(uid, command, state) {
    const player = this.participant(uid);
    if (!player) throw new RealtimeError(403, "not_a_player", "Only a seated player can resign.");
    const winner = this.participants().find((row) => row.uid !== uid) ?? null;
    const now = Date.now();
    const next = {
      ...state,
      version: state.version + 1,
      status: winner ? winner.color === "w" ? "white-won" : "black-won" : "draw",
      reason: "resigned",
      clock: { ...state.clock, ...effectiveClock(state, now), turnStartedAt: now }
    };
    this.ctx.storage.transactionSync(() => {
      this.ctx.storage.sql.exec(
        "UPDATE meta SET state_json = ?, finished_at = ? WHERE singleton = 1",
        JSON.stringify(next),
        now
      );
      this.ctx.storage.sql.exec(`
        INSERT INTO commands (idempotency_key, uid, command_type, accepted_at)
        VALUES (?, ?, ?, ?)
      `, command.idempotencyKey, uid, command.type, now);
      this.persistFinalizationIntent("resigned", winner?.uid ?? null, now);
    });
    this.broadcastSnapshots("match-completed");
    await this.finalize("resigned", winner?.uid ?? null);
  }
  broadcastPreset(uid, command) {
    const presetId = typeof command.payload.presetId === "string" ? command.payload.presetId : "";
    if (!["ready", "good-move", "well-played", "one-moment", "reconnect", "thanks"].includes(presetId)) {
      throw new RealtimeError(400, "invalid_preset", "That preset message is unavailable.");
    }
    const meta = this.meta();
    const state = parseState(meta?.state_json ?? null);
    this.ctx.storage.sql.exec(`
      INSERT INTO commands (idempotency_key, uid, command_type, accepted_at)
      VALUES (?, ?, ?, ?)
    `, command.idempotencyKey, uid, command.type, Date.now());
    for (const socket of this.ctx.getWebSockets()) {
      sendEvent(socket, meta?.room_id ?? "chess-room", state?.version ?? 0, "preset-chat", {
        uid,
        presetId
      });
    }
  }
  persistTerminalState(state, status, winnerUid, now) {
    this.ctx.storage.transactionSync(() => {
      this.ctx.storage.sql.exec(`
        UPDATE meta SET state_json = ?, finished_at = ? WHERE singleton = 1
      `, JSON.stringify(state), now);
      this.persistFinalizationIntent(status, winnerUid, now);
    });
  }
  persistFinalizationIntent(status, winnerUid, now) {
    this.ctx.storage.sql.exec(`
      INSERT OR IGNORE INTO result_finalization_outbox (
        singleton, result_status, winner_uid, created_at, attempts
      ) VALUES (1, ?, ?, ?, 0)
    `, status, winnerUid, now);
  }
  finalizationIntent() {
    return this.ctx.storage.sql.exec(
      "SELECT * FROM result_finalization_outbox WHERE singleton = 1"
    ).toArray()[0] ?? null;
  }
  async finalize(matchStatus, winnerUid) {
    const meta = this.meta();
    if (!meta || meta.receipt_json) {
      if (meta?.receipt_json && meta.receipt_persisted === 0) await this.queueStoredReceipt();
      return;
    }
    const now = Date.now();
    const players = this.participants();
    const intent = this.finalizationIntent();
    if (!intent) this.persistFinalizationIntent(matchStatus, winnerUid, now);
    const durableIntent = intent ?? this.finalizationIntent();
    const draw = !durableIntent.winner_uid;
    const participants = players.map((player) => ({
      uid: player.uid,
      outcome: draw ? "draw" : player.uid === durableIntent.winner_uid ? "win" : "loss",
      participationMs: this.participationMs(player, now)
    }));
    const durationMs = Math.max(0, now - (meta.started_at ?? now));
    const plies = this.ctx.storage.sql.exec(
      "SELECT COUNT(*) AS total FROM moves"
    ).toArray()[0]?.total ?? 0;
    const eligible = isChessRoomRewardEligible({
      mode: meta.mode,
      status: durableIntent.result_status,
      durationMs,
      participants,
      plies
    });
    const rewards = participants.map((participant) => participantReward(
      meta.room_id,
      participant.uid,
      eligible ? rewardXp(
        meta.mode,
        participant.outcome
      ) : 0,
      eligible && meta.mode === "chess_anomaly" ? ["chess-board-echo-signal"] : []
    ));
    const receipt = await sealReceipt(this.env.REALTIME_TICKET_SECRET, {
      version: 1,
      receiptId: crypto.randomUUID(),
      matchId: meta.room_id,
      mode: meta.mode,
      context: { caseId: null, variant: meta.variant },
      status: durableIntent.result_status,
      participants,
      winnerUid: durableIntent.winner_uid,
      durationMs,
      rewards,
      completedAt: new Date(now).toISOString()
    });
    this.ctx.storage.sql.exec(`
      UPDATE meta SET receipt_json = ?, finished_at = COALESCE(finished_at, ?)
      WHERE singleton = 1 AND receipt_json IS NULL
    `, JSON.stringify(receipt), now);
    this.ctx.storage.sql.exec(
      "UPDATE result_finalization_outbox SET attempts = attempts + 1 WHERE singleton = 1"
    );
    await this.storeReplay(receipt);
    await this.queueStoredReceipt();
  }
  async storeReplay(receipt) {
    const moves = this.ctx.storage.sql.exec("SELECT * FROM moves ORDER BY ply ASC").toArray();
    try {
      await this.env.REPLAYS.put(`chess/${receipt.matchId}.json`, JSON.stringify({
        version: 1,
        receiptId: receipt.receiptId,
        matchId: receipt.matchId,
        moves
      }), {
        httpMetadata: { contentType: "application/json; charset=utf-8" },
        customMetadata: { integrityHash: receipt.integrityHash }
      });
    } catch {
    }
  }
  async queueStoredReceipt() {
    const meta = this.meta();
    if (!meta?.receipt_json || meta.receipt_persisted !== 0) return;
    const receipt = JSON.parse(meta.receipt_json);
    const alreadyAnnounced = meta.receipt_queued !== 0;
    const payload = {
      receipt,
      profiles: this.participants().map((player) => ({
        uid: player.uid,
        displayName: player.display_name
      }))
    };
    try {
      await this.enqueueResult(payload);
      this.ctx.storage.sql.exec(
        "UPDATE meta SET receipt_queued = 1 WHERE singleton = 1"
      );
      if (!alreadyAnnounced) {
        for (const socket of this.ctx.getWebSockets()) {
          sendEvent(socket, meta.room_id, parseState(meta.state_json)?.version ?? 0, "reward-pending", {
            receipt
          });
        }
      }
      await this.scheduleNextAlarm();
    } catch {
      await this.ctx.storage.setAlarm(Date.now() + 5e3);
    }
  }
  /** Kept behind the room boundary so terminal outbox recovery is testable. */
  async enqueueResult(payload) {
    await this.env.RESULT_QUEUE.send(payload, { contentType: "json" });
  }
  async markDisconnected(socket) {
    const attachment = socketAttachment(socket);
    if (!attachment) return;
    const remaining = this.ctx.getWebSockets(`uid:${attachment.uid}`).filter((candidate) => candidate !== socket);
    if (remaining.length === 0) {
      const now = Date.now();
      this.ctx.storage.sql.exec(
        `UPDATE participants
         SET participation_ms = participation_ms + CASE
             WHEN connected_since IS NULL THEN 0
             ELSE MAX(0, ? - connected_since)
           END,
           connected_since = NULL,
           disconnected_at = ?
         WHERE uid = ?`,
        now,
        now,
        attachment.uid
      );
      this.broadcastPresence();
      await this.scheduleNextAlarm();
    }
  }
  participationMs(player, now) {
    const liveDuration = player.connected_since === null ? 0 : Math.max(0, now - player.connected_since);
    return Math.max(0, player.participation_ms + liveDuration);
  }
  async scheduleNextAlarm() {
    const meta = this.meta();
    const state = parseState(meta?.state_json ?? null);
    const candidates = [];
    if (state?.status === "active") {
      const chess = new Chess(state.fen);
      const clock = effectiveClock(state);
      candidates.push(Date.now() + (chess.turn() === "w" ? clock.whiteMs : clock.blackMs));
      for (const participant of this.participants()) {
        if (participant.disconnected_at !== null) {
          candidates.push(participant.disconnected_at + RECONNECT_GRACE_MS);
        }
      }
    }
    if (!meta?.receipt_json && this.finalizationIntent()) candidates.push(Date.now() + 5e3);
    if (meta?.receipt_json && meta.receipt_persisted === 0) {
      candidates.push(Date.now() + RECEIPT_RECONCILIATION_DELAY_MS);
    }
    if (candidates.length > 0) {
      await this.ctx.storage.setAlarm(Math.max(Date.now() + 100, Math.min(...candidates)));
    }
  }
};

// src/CoopSessionRoom.ts
import { DurableObject as DurableObject3 } from "cloudflare:workers";

// src/coopServerCatalog.ts
var SOLUTIONS = Object.freeze({
  "coop-warm-signal": { answers: ["east", "echo", "11-11"] },
  "coop-broken-window": { answers: ["north", "memory", "11-01"] },
  "coop-first-contract": { answers: ["west", "access", "01-11"] },
  "coop-nara-farewell": { answers: ["south", "memory", "00-11"] },
  "coop-red-circuit": { answers: ["east", "signal", "11-01"] },
  "coop-silent-key": { answers: ["north", "access", "11-11"] },
  "coop-kenja-record": { answers: ["west", "echo", "00-11"] },
  "coop-zero-route": { answers: ["south", "signal", "01-11"] },
  "coop-mirror-memory": { answers: ["east", "memory", "00-11"] },
  "coop-lina-protocol": { answers: ["north", "access", "01-11"] },
  "coop-black-coronation": { answers: ["west", "echo", "11-01"] },
  "coop-echo-fracture": { answers: ["south", "signal", "11-11"] }
});
var ROLE_ORDER = ["memory", "cipher", "route", "anchor"];
function copy2(ar, en) {
  return { ar, en };
}
__name(copy2, "copy");
function coopAnswer(caseId, stageIndex) {
  return SOLUTIONS[caseId]?.answers[stageIndex] ?? null;
}
__name(coopAnswer, "coopAnswer");
function coopRoleClue(caseId, stageIndex, role) {
  const definition = COOP_CASE_BY_ID[caseId];
  const answer = coopAnswer(caseId, stageIndex);
  const options = definition?.stages[stageIndex]?.optionIds;
  if (!answer || !options?.includes(answer)) return null;
  const wrong = options.filter((option) => option !== answer);
  if (role === "anchor") {
    return copy2(
      "\u0645\u0631\u0633\u0627\u0629 Echo: \u0628\u0639\u062F \u062C\u0645\u0639 \u0627\u0644\u0627\u0633\u062A\u0628\u0639\u0627\u062F\u0627\u062A \u0627\u0644\u062B\u0644\u0627\u062B\u0629\u060C \u062B\u0628\u0651\u062A\u0648\u0627 \u0627\u0644\u062E\u064A\u0627\u0631 \u0627\u0644\u0648\u062D\u064A\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A.",
      "Echo anchor: combine all three exclusions, then lock the only remaining option."
    );
  }
  const excluded = wrong[ROLE_ORDER.indexOf(role)] ?? wrong[0];
  const label = definition.stages[stageIndex]?.optionLabels[excluded];
  if (!label) return null;
  return copy2(
    `\u0642\u0646\u0627\u062A\u064A \u062A\u0633\u062A\u0628\u0639\u062F \xAB${label.ar}\xBB \u0642\u0637\u0639\u064B\u0627.`,
    `My channel definitively rules out \u201C${label.en}\u201D.`
  );
}
__name(coopRoleClue, "coopRoleClue");
function coopHint(caseId, stageIndex, hintLevel) {
  const definition = COOP_CASE_BY_ID[caseId];
  const answer = coopAnswer(caseId, stageIndex);
  const options = definition?.stages[stageIndex]?.optionIds;
  if (!answer || !options?.includes(answer) || hintLevel < 1) return null;
  const excludedId = options.filter((option) => option !== answer)[Math.min(hintLevel - 1, options.length - 2)];
  const excluded = excludedId ? definition.stages[stageIndex]?.optionLabels[excludedId] : null;
  if (!excluded) return null;
  return copy2(
    `\u062A\u062D\u0644\u064A\u0644 Echo ${hintLevel}/3: \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \xAB${excluded.ar}\xBB \u0645\u062A\u0639\u0627\u0631\u0636\u0629 \u0645\u0639 \u0633\u062C\u0644 \u0627\u0644\u0642\u0636\u064A\u0629\u061B \u0627\u0633\u062A\u0628\u0639\u062F\u0648\u0647\u0627.`,
    `Echo analysis ${hintLevel}/3: \u201C${excluded.en}\u201D conflicts with the case record; rule it out.`
  );
}
__name(coopHint, "coopHint");
function assignCoopRoles(index, partySize) {
  if (partySize <= 2) {
    return index === 0 ? ["memory", "route"] : ["cipher", "anchor"];
  }
  if (partySize === 3) {
    if (index === 0) return ["memory"];
    if (index === 1) return ["cipher"];
    return ["route", "anchor"];
  }
  return [ROLE_ORDER[Math.min(index, ROLE_ORDER.length - 1)]];
}
__name(assignCoopRoles, "assignCoopRoles");
function isReviewedCoopCase(caseId) {
  const solution = SOLUTIONS[caseId];
  const definition = COOP_CASE_BY_ID[caseId];
  return Boolean(
    solution && definition && solution.answers.every((answer, index) => definition.stages[index]?.optionIds.includes(answer))
  );
}
__name(isReviewedCoopCase, "isReviewedCoopCase");

// src/CoopSessionRoom.ts
var ECHO_TAKEOVER_MS = 45e3;
var RECEIPT_RECONCILIATION_DELAY_MS2 = 3e4;
function parseState2(raw) {
  const parsed = JSON.parse(raw);
  return {
    ...parsed,
    // Existing rooms predate attempt epochs. Their recorded work remains run 1,
    // rather than being reinterpreted from wall-clock time or client state.
    runIndex: Number.isInteger(parsed.runIndex) && parsed.runIndex >= 1 ? parsed.runIndex : 1,
    stageHintsUsed: Number.isInteger(parsed.stageHintsUsed) ? parsed.stageHintsUsed : 0
  };
}
__name(parseState2, "parseState");
function deterministicCase(roomId) {
  let hash = 0;
  for (const character of roomId) hash = hash * 31 + character.charCodeAt(0) >>> 0;
  return COOP_CASES[hash % COOP_CASES.length];
}
__name(deterministicCase, "deterministicCase");
function parseRoles(raw) {
  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed.filter((role) => role === "memory" || role === "cipher" || role === "route" || role === "anchor") : [];
}
__name(parseRoles, "parseRoles");
var CoopSessionRoom = class extends DurableObject3 {
  static {
    __name(this, "CoopSessionRoom");
  }
  constructor(ctx, env) {
    super(ctx, env);
    ctx.blockConcurrencyWhile(async () => {
      ctx.storage.sql.exec(`
        CREATE TABLE IF NOT EXISTS meta (
          singleton INTEGER PRIMARY KEY CHECK (singleton = 1),
          room_id TEXT NOT NULL,
          case_id TEXT NOT NULL,
          expected_size INTEGER NOT NULL CHECK (expected_size BETWEEN 2 AND 4),
          state_json TEXT NOT NULL,
          started_at INTEGER,
          finished_at INTEGER,
          receipt_json TEXT,
          receipt_queued INTEGER NOT NULL DEFAULT 0,
          receipt_persisted INTEGER NOT NULL DEFAULT 0
        );
        CREATE TABLE IF NOT EXISTS participants (
          uid TEXT PRIMARY KEY,
          display_name TEXT NOT NULL,
          seat_index INTEGER NOT NULL UNIQUE,
          roles_json TEXT NOT NULL,
          joined_at INTEGER NOT NULL,
          disconnected_at INTEGER,
          echo_takeover INTEGER NOT NULL DEFAULT 0,
          connected_since INTEGER,
          participation_ms INTEGER NOT NULL DEFAULT 0
        );
        CREATE TABLE IF NOT EXISTS used_tickets (
          jti TEXT PRIMARY KEY,
          used_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS commands (
          idempotency_key TEXT PRIMARY KEY,
          uid TEXT NOT NULL,
          command_type TEXT NOT NULL,
          accepted_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS votes (
          vote_kind TEXT NOT NULL,
          stage_index INTEGER NOT NULL,
          uid TEXT NOT NULL,
          voted_at INTEGER NOT NULL,
          PRIMARY KEY (vote_kind, stage_index, uid)
        );
        CREATE TABLE IF NOT EXISTS stage_events (
          event_index INTEGER PRIMARY KEY AUTOINCREMENT,
          run_index INTEGER NOT NULL DEFAULT 1,
          stage_index INTEGER NOT NULL,
          uid TEXT NOT NULL,
          answer_id TEXT NOT NULL,
          correct INTEGER NOT NULL CHECK (correct IN (0, 1)),
          submitted_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS participation_events (
          event_id INTEGER PRIMARY KEY AUTOINCREMENT,
          uid TEXT NOT NULL,
          event_type TEXT NOT NULL CHECK (event_type IN ('answer', 'vote')),
          created_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS result_finalization_outbox (
          singleton INTEGER PRIMARY KEY CHECK (singleton = 1),
          created_at INTEGER NOT NULL,
          attempts INTEGER NOT NULL DEFAULT 0
        );
      `);
      const columns = ctx.storage.sql.exec(
        "PRAGMA table_info(participants)"
      ).toArray();
      if (!columns.some((column) => column.name === "connected_since")) {
        ctx.storage.sql.exec("ALTER TABLE participants ADD COLUMN connected_since INTEGER");
      }
      if (!columns.some((column) => column.name === "participation_ms")) {
        ctx.storage.sql.exec(
          "ALTER TABLE participants ADD COLUMN participation_ms INTEGER NOT NULL DEFAULT 0"
        );
      }
      const metaColumns = ctx.storage.sql.exec(
        "PRAGMA table_info(meta)"
      ).toArray();
      if (!metaColumns.some((column) => column.name === "receipt_persisted")) {
        ctx.storage.sql.exec(
          "ALTER TABLE meta ADD COLUMN receipt_persisted INTEGER NOT NULL DEFAULT 0"
        );
      }
      const stageEventColumns = ctx.storage.sql.exec("PRAGMA table_info(stage_events)").toArray();
      if (!stageEventColumns.some((column) => column.name === "run_index")) {
        ctx.storage.sql.exec(
          "ALTER TABLE stage_events ADD COLUMN run_index INTEGER NOT NULL DEFAULT 1"
        );
      }
    });
  }
  async fetch(request) {
    try {
      const ticket = await requireUpgradeTicket(request, this.env, "connect");
      const roomId = roomIdFromPath(request);
      if (ticket.target !== "match" || ticket.roomId !== roomId || ticket.mode !== "coop_breach") {
        throw new RealtimeError(403, "wrong_room", "This ticket does not belong to the breach room.");
      }
      if (this.ticketWasUsed(ticket.jti)) {
        throw new RealtimeError(409, "ticket_reused", "This room ticket was already used.");
      }
      const now = Date.now();
      const existing = this.participant(ticket.uid);
      const currentPlayers = this.participants();
      const currentMeta = this.meta();
      const expectedSize = currentMeta?.expected_size ?? ticket.partySize ?? 2;
      if (!existing && currentPlayers.length >= expectedSize) {
        throw new RealtimeError(409, "room_full", "This breach team is full.");
      }
      const selected = ticket.caseId && isReviewedCoopCase(ticket.caseId) ? COOP_CASE_BY_ID[ticket.caseId] : deterministicCase(roomId);
      this.ctx.storage.transactionSync(() => {
        this.ctx.storage.sql.exec(
          "INSERT INTO used_tickets (jti, used_at) VALUES (?, ?)",
          ticket.jti,
          now
        );
        if (!this.meta()) {
          const initial = {
            version: 0,
            status: "waiting",
            runIndex: 1,
            stageIndex: 0,
            failedAttempts: 0,
            hintsUsed: 0,
            stageHintsUsed: 0,
            completedStages: []
          };
          this.ctx.storage.sql.exec(`
            INSERT INTO meta (
              singleton, room_id, case_id, expected_size, state_json,
              started_at, finished_at, receipt_json, receipt_queued, receipt_persisted
            ) VALUES (1, ?, ?, ?, ?, NULL, NULL, NULL, 0, 0)
          `, roomId, selected.id, expectedSize, JSON.stringify(initial));
        } else if (this.meta()?.room_id !== roomId) {
          throw new RealtimeError(409, "room_contract_mismatch", "The breach contract does not match.");
        }
        if (existing) {
          const existingState = parseState2(this.meta().state_json);
          this.ctx.storage.sql.exec(
            `
            UPDATE participants
            SET display_name = ?,
              disconnected_at = NULL,
              echo_takeover = 0,
              connected_since = CASE
                WHEN ? = 1 AND connected_since IS NULL THEN ?
                ELSE connected_since
              END
            WHERE uid = ?
          `,
            ticket.displayName,
            existingState.status === "active" ? 1 : 0,
            now,
            ticket.uid
          );
        } else {
          const seatIndex = this.participants().length;
          this.ctx.storage.sql.exec(`
            INSERT INTO participants (
              uid, display_name, seat_index, roles_json, joined_at,
              disconnected_at, echo_takeover, connected_since, participation_ms
            ) VALUES (?, ?, ?, '[]', ?, NULL, 0, NULL, 0)
          `, ticket.uid, ticket.displayName, seatIndex, now);
        }
        const meta = this.meta();
        const state = parseState2(meta.state_json);
        const players = this.participants();
        if (players.length === meta.expected_size && state.status === "waiting") {
          for (const player of players) {
            this.ctx.storage.sql.exec(`
              UPDATE participants SET roles_json = ? WHERE uid = ?
            `, JSON.stringify(assignCoopRoles(player.seat_index, meta.expected_size)), player.uid);
          }
          const active = { ...state, status: "active", version: state.version + 1 };
          this.ctx.storage.sql.exec(`
            UPDATE meta SET state_json = ?, started_at = ? WHERE singleton = 1
          `, JSON.stringify(active), now);
          this.ctx.storage.sql.exec(`
            UPDATE participants
            SET connected_since = ?, participation_ms = 0
            WHERE connected_since IS NULL
          `, now);
        }
      });
      const { client, server } = createSocketPair();
      const roles = parseRoles(this.participant(ticket.uid)?.roles_json ?? "[]");
      const attachment = {
        uid: ticket.uid,
        displayName: ticket.displayName,
        jti: ticket.jti,
        joinedAt: now,
        roles
      };
      server.serializeAttachment(attachment);
      this.ctx.acceptWebSocket(server, [`uid:${ticket.uid}`]);
      this.sendSnapshot(server, "room-snapshot");
      this.sendStoredReceipt(server);
      this.broadcastSnapshots("presence-changed");
      await this.scheduleTakeoverAlarm();
      return upgradeResponse(client);
    } catch (error) {
      return errorResponse(error);
    }
  }
  async webSocketMessage(socket, message) {
    try {
      const attachment = socketAttachment(socket);
      if (!attachment) throw new RealtimeError(401, "session_missing", "The breach session is missing.");
      const command = parseRoomCommand(message);
      const meta = this.meta();
      if (!meta) throw new RealtimeError(409, "room_unavailable", "The breach room is unavailable.");
      const state = parseState2(meta.state_json);
      if (command.type === "ping") {
        sendEvent(socket, meta.room_id, state.version, "pong", {
          clientSentAt: command.sentAt,
          serverTime: Date.now()
        });
        return;
      }
      if (this.commandWasAccepted(command.idempotencyKey)) {
        this.sendSnapshot(socket, "command-replayed");
        this.sendStoredReceipt(socket);
        return;
      }
      if (command.expectedVersion !== state.version) {
        throw new RealtimeError(409, "version_conflict", "The case changed; apply the latest snapshot.");
      }
      if (state.status !== "active" && command.type !== "resume" && command.type !== "preset-chat") {
        throw new RealtimeError(409, "case_not_active", "The cooperative case is not active.");
      }
      if (command.type === "coop-submit") {
        await this.submitAnswer(attachment.uid, command, meta, state);
      } else if (command.type === "hint-vote" || command.type === "restart-vote") {
        await this.castVote(attachment.uid, command, meta, state);
      } else if (command.type === "preset-chat") {
        this.broadcastPreset(attachment.uid, command, meta, state);
      } else if (command.type === "resume") {
        this.sendSnapshot(socket, "room-snapshot");
        this.sendStoredReceipt(socket);
      } else {
        throw new RealtimeError(400, "unsupported_command", "This breach command is not supported.");
      }
    } catch (error) {
      const known = error instanceof RealtimeError ? error : new RealtimeError(400, "invalid_command", "The breach command could not be applied.");
      const meta = this.meta();
      sendEvent(
        socket,
        meta?.room_id ?? "coop-room",
        meta ? parseState2(meta.state_json).version : 0,
        "error",
        { code: known.code, message: known.message }
      );
    }
  }
  async webSocketClose(socket) {
    await this.markDisconnected(socket);
  }
  async webSocketError(socket) {
    await this.markDisconnected(socket);
  }
  async alarm() {
    const now = Date.now();
    let changed = false;
    this.ctx.storage.transactionSync(() => {
      for (const player of this.participants()) {
        if (player.disconnected_at !== null && now - player.disconnected_at >= ECHO_TAKEOVER_MS && player.echo_takeover === 0) {
          this.ctx.storage.sql.exec(
            "UPDATE participants SET echo_takeover = 1 WHERE uid = ?",
            player.uid
          );
          changed = true;
        }
      }
    });
    if (changed) this.broadcastSnapshots("echo-takeover");
    const meta = this.meta();
    if (meta && !meta.receipt_json && this.finalizationIntent()) {
      await this.finalize();
    } else if (meta?.receipt_json && meta.receipt_persisted === 0) {
      await this.queueStoredReceipt();
    }
    await this.scheduleTakeoverAlarm();
  }
  /**
   * Internal Queue -> room acknowledgement. Queue acceptance is intentionally
   * not treated as D1 persistence: the stored receipt must match this exact
   * match id and integrity hash before reconciliation can stop.
   */
  async acknowledgeReceiptPersistence(matchId, integrityHash) {
    const meta = this.meta();
    if (!meta?.receipt_json || meta.room_id !== matchId) {
      throw new Error("Stored Co-op receipt is unavailable for acknowledgement.");
    }
    try {
      const parsed = matchReceiptSchema.safeParse(JSON.parse(meta.receipt_json));
      if (!parsed.success || parsed.data.matchId !== matchId || parsed.data.integrityHash !== integrityHash) {
        throw new Error("Stored Co-op receipt does not match the persistence acknowledgement.");
      }
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error("Stored Co-op receipt cannot be acknowledged.");
    }
    this.ctx.storage.sql.exec(
      "UPDATE meta SET receipt_persisted = 1 WHERE singleton = 1"
    );
  }
  meta() {
    return this.ctx.storage.sql.exec("SELECT * FROM meta WHERE singleton = 1").toArray()[0] ?? null;
  }
  participants() {
    return this.ctx.storage.sql.exec(`
      SELECT uid, display_name, seat_index, roles_json, joined_at,
        disconnected_at, echo_takeover, connected_since, participation_ms
      FROM participants ORDER BY seat_index ASC
    `).toArray();
  }
  participant(uid) {
    return this.ctx.storage.sql.exec(`
      SELECT uid, display_name, seat_index, roles_json, joined_at,
        disconnected_at, echo_takeover, connected_since, participation_ms
      FROM participants WHERE uid = ?
    `, uid).toArray()[0] ?? null;
  }
  ticketWasUsed(jti) {
    return Boolean(this.ctx.storage.sql.exec(
      "SELECT jti FROM used_tickets WHERE jti = ?",
      jti
    ).toArray()[0]);
  }
  commandWasAccepted(key) {
    return Boolean(this.ctx.storage.sql.exec(
      "SELECT idempotency_key FROM commands WHERE idempotency_key = ?",
      key
    ).toArray()[0]);
  }
  snapshotFor(uid) {
    const meta = this.meta();
    const player = this.participant(uid);
    if (!meta || !player) return { status: "waiting" };
    const state = parseState2(meta.state_json);
    const definition = COOP_CASE_BY_ID[meta.case_id];
    const roles = parseRoles(player.roles_json);
    const clues = roles.flatMap((role) => {
      const clue = coopRoleClue(meta.case_id, state.stageIndex, role);
      return clue ? [{ role, clue }] : [];
    });
    const echoClues = this.participants().flatMap((participant) => {
      if (participant.echo_takeover !== 1) return [];
      return parseRoles(participant.roles_json).flatMap((role) => {
        const clue = coopRoleClue(meta.case_id, state.stageIndex, role);
        return clue ? [{ role, clue, ownerName: participant.display_name }] : [];
      });
    });
    const hints = Array.from(
      { length: Math.min(3, state.stageHintsUsed) },
      (_, index) => coopHint(meta.case_id, state.stageIndex, index + 1)
    ).filter((hint) => Boolean(hint));
    return {
      status: state.status,
      state,
      case: definition,
      roles,
      clues,
      echoClues,
      hints,
      players: this.participants().map((participant) => ({
        uid: participant.uid,
        displayName: participant.display_name,
        roles: parseRoles(participant.roles_json),
        connected: participant.disconnected_at === null,
        echoAssisting: participant.echo_takeover === 1
      })),
      serverTime: Date.now()
    };
  }
  sendSnapshot(socket, eventType) {
    const attachment = socketAttachment(socket);
    const meta = this.meta();
    if (!attachment || !meta) return;
    sendEvent(
      socket,
      meta.room_id,
      parseState2(meta.state_json).version,
      eventType,
      this.snapshotFor(attachment.uid)
    );
  }
  sendStoredReceipt(socket) {
    const meta = this.meta();
    if (!meta?.receipt_json) return;
    try {
      const receipt = matchReceiptSchema.safeParse(JSON.parse(meta.receipt_json));
      if (!receipt.success) return;
      sendEvent(socket, meta.room_id, parseState2(meta.state_json).version, "reward-pending", {
        receipt: receipt.data
      });
    } catch {
    }
  }
  broadcastSnapshots(eventType) {
    for (const socket of this.ctx.getWebSockets()) this.sendSnapshot(socket, eventType);
  }
  async submitAnswer(uid, command, meta, state) {
    const answerId = typeof command.payload.answerId === "string" ? command.payload.answerId : "";
    const definition = COOP_CASE_BY_ID[meta.case_id];
    if (!definition?.stages[state.stageIndex]?.optionIds.includes(answerId)) {
      throw new RealtimeError(400, "invalid_answer", "That answer is not available for this stage.");
    }
    const expected = coopAnswer(meta.case_id, state.stageIndex);
    if (!expected) throw new RealtimeError(500, "case_not_reviewed", "This case has no reviewed solution.");
    const correct = answerId === expected;
    const incorrectAttempts = this.ctx.storage.sql.exec(`
      SELECT COUNT(*) AS total FROM stage_events
      WHERE run_index = ? AND stage_index = ? AND correct = 0
    `, state.runIndex, state.stageIndex).toArray()[0]?.total ?? 0;
    if (!correct && incorrectAttempts >= 3) {
      throw new RealtimeError(429, "stage_attempts_exhausted", "This stage needs an Echo hint or a voted restart.");
    }
    const now = Date.now();
    const nextStage = correct ? state.stageIndex + 1 : state.stageIndex;
    const completed = correct && nextStage >= definition.stages.length;
    const next = {
      ...state,
      version: state.version + 1,
      status: completed ? "completed" : "active",
      stageIndex: completed ? state.stageIndex : nextStage,
      failedAttempts: state.failedAttempts + (correct ? 0 : 1),
      stageHintsUsed: correct ? 0 : state.stageHintsUsed,
      completedStages: correct ? [...state.completedStages, definition.stages[state.stageIndex].id] : state.completedStages
    };
    this.ctx.storage.transactionSync(() => {
      this.ctx.storage.sql.exec(
        "UPDATE meta SET state_json = ?, finished_at = ? WHERE singleton = 1",
        JSON.stringify(next),
        completed ? now : null
      );
      this.ctx.storage.sql.exec(`
        INSERT INTO commands (idempotency_key, uid, command_type, accepted_at)
        VALUES (?, ?, ?, ?)
      `, command.idempotencyKey, uid, command.type, now);
      this.ctx.storage.sql.exec(`
        INSERT INTO stage_events (run_index, stage_index, uid, answer_id, correct, submitted_at)
        VALUES (?, ?, ?, ?, ?, ?)
      `, state.runIndex, state.stageIndex, uid, answerId, correct ? 1 : 0, now);
      this.ctx.storage.sql.exec(`
        INSERT INTO participation_events (uid, event_type, created_at) VALUES (?, 'answer', ?)
      `, uid, now);
      if (correct) this.ctx.storage.sql.exec("DELETE FROM votes WHERE stage_index = ?", state.stageIndex);
      if (completed) this.persistFinalizationIntent(now);
    });
    this.broadcastSnapshots(correct ? completed ? "case-completed" : "stage-completed" : "answer-rejected");
    if (completed) await this.finalize();
  }
  async castVote(uid, command, meta, state) {
    const kind = command.type === "hint-vote" ? "hint" : "restart";
    if (kind === "hint" && state.stageHintsUsed >= 3) {
      throw new RealtimeError(409, "hints_exhausted", "Echo has already revealed every safe exclusion for this stage.");
    }
    const now = Date.now();
    this.ctx.storage.transactionSync(() => {
      this.ctx.storage.sql.exec(`
        INSERT OR IGNORE INTO votes (vote_kind, stage_index, uid, voted_at)
        VALUES (?, ?, ?, ?)
      `, kind, state.stageIndex, uid, now);
      this.ctx.storage.sql.exec(`
        INSERT INTO commands (idempotency_key, uid, command_type, accepted_at)
        VALUES (?, ?, ?, ?)
      `, command.idempotencyKey, uid, command.type, now);
      this.ctx.storage.sql.exec(`
        INSERT INTO participation_events (uid, event_type, created_at) VALUES (?, 'vote', ?)
      `, uid, now);
    });
    const count = this.ctx.storage.sql.exec(`
      SELECT COUNT(*) AS total FROM votes WHERE vote_kind = ? AND stage_index = ?
    `, kind, state.stageIndex).toArray()[0]?.total ?? 0;
    const connectedCount = this.participants().filter((participant) => participant.disconnected_at === null).length;
    const needed = Math.floor(Math.max(1, connectedCount) / 2) + 1;
    if (count < needed) {
      for (const socket of this.ctx.getWebSockets()) {
        sendEvent(socket, meta.room_id, state.version, "vote-updated", {
          kind,
          votes: count,
          needed
        });
      }
      return;
    }
    const next = kind === "hint" ? {
      ...state,
      version: state.version + 1,
      hintsUsed: state.hintsUsed + 1,
      stageHintsUsed: state.stageHintsUsed + 1
    } : {
      ...state,
      version: state.version + 1,
      runIndex: state.runIndex + 1,
      stageIndex: 0,
      failedAttempts: 0,
      stageHintsUsed: 0,
      completedStages: []
    };
    this.ctx.storage.transactionSync(() => {
      this.ctx.storage.sql.exec(
        "UPDATE meta SET state_json = ? WHERE singleton = 1",
        JSON.stringify(next)
      );
      this.ctx.storage.sql.exec("DELETE FROM votes");
    });
    this.broadcastSnapshots(kind === "hint" ? "hint-approved" : "case-restarted");
  }
  broadcastPreset(uid, command, meta, state) {
    const presetId = typeof command.payload.presetId === "string" ? command.payload.presetId : "";
    if (!["ready", "check-memory", "check-cipher", "check-route", "check-anchor", "thanks"].includes(presetId)) {
      throw new RealtimeError(400, "invalid_preset", "That preset message is unavailable.");
    }
    this.ctx.storage.sql.exec(`
      INSERT INTO commands (idempotency_key, uid, command_type, accepted_at)
      VALUES (?, ?, ?, ?)
    `, command.idempotencyKey, uid, command.type, Date.now());
    for (const socket of this.ctx.getWebSockets()) {
      sendEvent(socket, meta.room_id, state.version, "preset-chat", { uid, presetId });
    }
  }
  async finalize() {
    const meta = this.meta();
    if (!meta || meta.receipt_json) {
      if (meta?.receipt_json && meta.receipt_persisted === 0) await this.queueStoredReceipt();
      return;
    }
    const now = Date.now();
    const players = this.participants();
    const state = parseState2(meta.state_json);
    const definition = COOP_CASE_BY_ID[meta.case_id];
    const cosmetic = definition ? `breach-frame-${definition.chapterId}` : "breach-frame-signal";
    const intent = this.finalizationIntent();
    if (!intent) this.persistFinalizationIntent(now);
    const durationMs = Math.max(0, now - (meta.started_at ?? now));
    const correctAnswersByUid = new Map(this.ctx.storage.sql.exec(`
      SELECT uid, COUNT(*) AS total FROM stage_events
      WHERE run_index = ? AND correct = 1 GROUP BY uid
    `, state.runIndex).toArray().map((row) => [row.uid, Number(row.total)]));
    const participants = players.map((player) => ({
      uid: player.uid,
      outcome: "completed",
      participationMs: this.participationMs(player, now)
    }));
    const receipt = await sealReceipt(this.env.REALTIME_TICKET_SECRET, {
      version: 1,
      receiptId: crypto.randomUUID(),
      matchId: meta.room_id,
      mode: "coop_breach",
      context: { caseId: meta.case_id, variant: null },
      status: "completed",
      participants,
      winnerUid: null,
      durationMs,
      rewards: participants.map((participant) => {
        const player = players.find((candidate) => candidate.uid === participant.uid);
        const eligible = isCoopParticipantRewardEligible({
          durationMs,
          participationMs: participant.participationMs,
          connectedAtFinalization: player.disconnected_at === null,
          correctAnswerCount: correctAnswersByUid.get(participant.uid) ?? 0
        });
        return participantReward(
          meta.room_id,
          participant.uid,
          eligible ? 90 : 0,
          eligible ? [cosmetic] : []
        );
      }),
      completedAt: new Date(now).toISOString()
    });
    this.ctx.storage.sql.exec(`
      UPDATE meta SET receipt_json = ?, finished_at = COALESCE(finished_at, ?)
      WHERE singleton = 1 AND receipt_json IS NULL
    `, JSON.stringify(receipt), now);
    this.ctx.storage.sql.exec(
      "UPDATE result_finalization_outbox SET attempts = attempts + 1 WHERE singleton = 1"
    );
    await this.storeReplay(receipt);
    await this.queueStoredReceipt();
  }
  persistFinalizationIntent(now) {
    this.ctx.storage.sql.exec(`
      INSERT OR IGNORE INTO result_finalization_outbox (singleton, created_at, attempts)
      VALUES (1, ?, 0)
    `, now);
  }
  finalizationIntent() {
    return this.ctx.storage.sql.exec(
      "SELECT * FROM result_finalization_outbox WHERE singleton = 1"
    ).toArray()[0] ?? null;
  }
  async storeReplay(receipt) {
    const events = this.ctx.storage.sql.exec("SELECT * FROM stage_events ORDER BY event_index ASC").toArray();
    try {
      await this.env.REPLAYS.put(`coop/${receipt.matchId}.json`, JSON.stringify({
        version: 1,
        receiptId: receipt.receiptId,
        matchId: receipt.matchId,
        caseId: this.meta()?.case_id,
        events
      }), {
        httpMetadata: { contentType: "application/json; charset=utf-8" },
        customMetadata: { integrityHash: receipt.integrityHash }
      });
    } catch {
    }
  }
  async queueStoredReceipt() {
    const meta = this.meta();
    if (!meta?.receipt_json || meta.receipt_persisted !== 0) return;
    const receipt = JSON.parse(meta.receipt_json);
    const alreadyAnnounced = meta.receipt_queued !== 0;
    const payload = {
      receipt,
      profiles: this.participants().map((player) => ({
        uid: player.uid,
        displayName: player.display_name
      }))
    };
    try {
      await this.enqueueResult(payload);
      this.ctx.storage.sql.exec("UPDATE meta SET receipt_queued = 1 WHERE singleton = 1");
      if (!alreadyAnnounced) {
        for (const socket of this.ctx.getWebSockets()) {
          sendEvent(socket, meta.room_id, parseState2(meta.state_json).version, "reward-pending", {
            receipt
          });
        }
      }
      await this.scheduleTakeoverAlarm();
    } catch {
      await this.ctx.storage.setAlarm(Date.now() + 5e3);
    }
  }
  /** Kept behind the room boundary so terminal outbox recovery is testable. */
  async enqueueResult(payload) {
    await this.env.RESULT_QUEUE.send(payload, { contentType: "json" });
  }
  async markDisconnected(socket) {
    const attachment = socketAttachment(socket);
    if (!attachment) return;
    const remaining = this.ctx.getWebSockets(`uid:${attachment.uid}`).filter((candidate) => candidate !== socket);
    if (remaining.length > 0) return;
    const now = Date.now();
    this.ctx.storage.sql.exec(`
      UPDATE participants
      SET participation_ms = participation_ms + CASE
          WHEN connected_since IS NULL THEN 0
          ELSE MAX(0, ? - connected_since)
        END,
        connected_since = NULL,
        disconnected_at = ?,
        echo_takeover = 0
      WHERE uid = ?
    `, now, now, attachment.uid);
    this.broadcastSnapshots("presence-changed");
    await this.scheduleTakeoverAlarm();
  }
  participationMs(player, now) {
    const liveDuration = player.connected_since === null ? 0 : Math.max(0, now - player.connected_since);
    return Math.max(0, player.participation_ms + liveDuration);
  }
  async scheduleTakeoverAlarm() {
    const candidates = this.participants().flatMap((player) => player.disconnected_at !== null && player.echo_takeover === 0 ? [player.disconnected_at + ECHO_TAKEOVER_MS] : []);
    const meta = this.meta();
    if (!meta?.receipt_json && this.finalizationIntent()) candidates.push(Date.now() + 5e3);
    if (meta?.receipt_json && meta.receipt_persisted === 0) {
      candidates.push(Date.now() + RECEIPT_RECONCILIATION_DELAY_MS2);
    }
    if (candidates.length > 0) {
      await this.ctx.storage.setAlarm(Math.max(Date.now() + 100, Math.min(...candidates)));
    }
  }
};

// src/PartyRoom.ts
import { DurableObject as DurableObject4 } from "cloudflare:workers";
var PARTY_MATCH_MEMBERSHIP_MS = ACTIVE_MATCH_LEASE_MS;
var PartyRoom = class extends DurableObject4 {
  static {
    __name(this, "PartyRoom");
  }
  joinTail = Promise.resolve();
  launchInFlight = false;
  constructor(ctx, env) {
    super(ctx, env);
    ctx.blockConcurrencyWhile(async () => {
      ctx.storage.sql.exec(`
        CREATE TABLE IF NOT EXISTS members (
          uid TEXT PRIMARY KEY,
          display_name TEXT NOT NULL,
          joined_at INTEGER NOT NULL,
          ready INTEGER NOT NULL DEFAULT 0 CHECK (ready IN (0, 1)),
          disconnected_at INTEGER
        );
        CREATE TABLE IF NOT EXISTS used_tickets (
          jti TEXT PRIMARY KEY,
          used_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS meta (
          singleton INTEGER PRIMARY KEY CHECK (singleton = 1),
          version INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS active_launch (
          singleton INTEGER PRIMARY KEY CHECK (singleton = 1),
          match_id TEXT NOT NULL,
          mode TEXT NOT NULL,
          case_id TEXT,
          variant TEXT,
          region TEXT NOT NULL,
          party_size INTEGER NOT NULL CHECK (party_size BETWEEN 2 AND 4),
          started_at INTEGER NOT NULL,
          expires_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS commands (
          idempotency_key TEXT PRIMARY KEY,
          uid TEXT NOT NULL,
          command_type TEXT NOT NULL,
          accepted_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS rate_events (
          event_id INTEGER PRIMARY KEY AUTOINCREMENT,
          uid TEXT NOT NULL,
          sent_at INTEGER NOT NULL
        );
        INSERT OR IGNORE INTO meta (singleton, version) VALUES (1, 0);
      `);
    });
  }
  async fetch(request) {
    try {
      const ticket = await requireUpgradeTicket(request, this.env, "connect");
      const roomId = roomIdFromPath(request);
      const canonicalPartyRoomId = normalizePartyRoomId(roomId);
      if (ticket.target !== "party" || !canonicalPartyRoomId || ticket.roomId !== canonicalPartyRoomId) {
        throw new RealtimeError(403, "wrong_room", "This ticket does not belong to the party.");
      }
      return this.admitMember(ticket, canonicalPartyRoomId);
    } catch (error) {
      return errorResponse(error);
    }
  }
  async admitMember(ticket, roomId) {
    return this.exclusiveJoin(async () => {
      try {
        const used = this.ctx.storage.sql.exec(
          "SELECT jti FROM used_tickets WHERE jti = ?",
          ticket.jti
        ).toArray()[0];
        if (used) throw new RealtimeError(409, "ticket_reused", "This party ticket was already used.");
        this.clearExpiredLaunch();
        if (this.launchInFlight) {
          throw new RealtimeError(409, "party_launching", "The party is already securing its match.");
        }
        await this.reconcileActiveLaunchWithLeases();
        const existing = this.member(ticket.uid);
        const activeLaunch = this.currentLaunch();
        if (activeLaunch && !existing) {
          throw new RealtimeError(409, "party_launched", "This party is already inside an active match.");
        }
        if (!existing && await this.hasBlockedPartyMember(ticket.uid)) {
          throw new RealtimeError(403, "party_blocked", "A blocked player is already in this party.");
        }
        if (!existing && this.members().length >= 4) {
          throw new RealtimeError(409, "party_full", "This party already has four players.");
        }
        const now = Date.now();
        this.ctx.storage.transactionSync(() => {
          this.ctx.storage.sql.exec(
            "INSERT INTO used_tickets (jti, used_at) VALUES (?, ?)",
            ticket.jti,
            now
          );
          this.ctx.storage.sql.exec(`
            INSERT INTO members (uid, display_name, joined_at, ready, disconnected_at)
            VALUES (?, ?, ?, 0, NULL)
            ON CONFLICT(uid) DO UPDATE SET
              display_name = excluded.display_name,
              disconnected_at = NULL
          `, ticket.uid, ticket.displayName, now);
          this.ctx.storage.sql.exec("UPDATE meta SET version = version + 1 WHERE singleton = 1");
        });
        const { client, server } = createSocketPair();
        const attachment = {
          uid: ticket.uid,
          displayName: ticket.displayName,
          jti: ticket.jti,
          joinedAt: now,
          region: ticket.region
        };
        server.serializeAttachment(attachment);
        this.ctx.acceptWebSocket(server, [`uid:${ticket.uid}`]);
        if (activeLaunch) {
          await this.sendMatchFound(server, ticket.uid, ticket.displayName, activeLaunch);
          server.close(1e3, "Match resumed.");
        } else {
          this.broadcast(roomId, "party-changed");
        }
        return upgradeResponse(client);
      } catch (error) {
        return errorResponse(error);
      }
    });
  }
  async webSocketMessage(socket, message) {
    try {
      const attachment = socketAttachment(socket);
      if (!attachment) throw new RealtimeError(401, "session_missing", "The party session is missing.");
      const command = parseRoomCommand(message);
      const roomId = this.ctx.id.name ?? "party-room";
      if (command.type !== "ping" && !this.launchInFlight) {
        await this.reconcileActiveLaunchWithLeases();
      }
      const version = this.version();
      if (command.type === "ping") {
        sendEvent(socket, roomId, version, "pong", { clientSentAt: command.sentAt });
      } else if (this.launchInFlight) {
        throw new RealtimeError(409, "party_launching", "The party is already securing its match.");
      } else if (this.currentLaunch()) {
        throw new RealtimeError(409, "party_launched", "This party is already inside an active match.");
      } else if (this.commandWasAccepted(command.idempotencyKey)) {
        this.sendSnapshot(socket, roomId, "command-replayed");
      } else if (command.expectedVersion !== version) {
        throw new RealtimeError(409, "version_conflict", "The party changed; apply the latest snapshot.");
      } else if (command.type === "ready") {
        this.ctx.storage.transactionSync(() => {
          this.ctx.storage.sql.exec(`
            UPDATE members SET ready = CASE ready WHEN 1 THEN 0 ELSE 1 END WHERE uid = ?
          `, attachment.uid);
          this.recordCommand(command.idempotencyKey, attachment.uid, command.type);
          this.ctx.storage.sql.exec("UPDATE meta SET version = version + 1 WHERE singleton = 1");
        });
        this.broadcast(roomId, "party-changed");
      } else if (command.type === "party-launch") {
        await this.launchParty(attachment, command, roomId);
      } else if (command.type === "resign") {
        this.ctx.storage.transactionSync(() => {
          this.ctx.storage.sql.exec("DELETE FROM members WHERE uid = ?", attachment.uid);
          this.recordCommand(command.idempotencyKey, attachment.uid, command.type);
          this.ctx.storage.sql.exec("UPDATE meta SET version = version + 1 WHERE singleton = 1");
        });
        socket.close(1e3, "Left party.");
        this.broadcast(roomId, "party-changed");
      } else if (command.type === "preset-chat") {
        const presetId = typeof command.payload.presetId === "string" ? command.payload.presetId : "";
        if (!["ready", "choose-chess", "choose-coop", "one-moment", "thanks"].includes(presetId)) {
          throw new RealtimeError(400, "invalid_preset", "That party message is unavailable.");
        }
        const now = Date.now();
        this.ctx.storage.sql.exec("DELETE FROM rate_events WHERE sent_at < ?", now - 1e4);
        const recent = this.ctx.storage.sql.exec(`
          SELECT COUNT(*) AS total FROM rate_events WHERE uid = ?
        `, attachment.uid).toArray()[0]?.total ?? 0;
        if (recent >= 4) throw new RealtimeError(429, "message_rate_limited", "Slow down for a moment.");
        this.ctx.storage.transactionSync(() => {
          this.ctx.storage.sql.exec(
            "INSERT INTO rate_events (uid, sent_at) VALUES (?, ?)",
            attachment.uid,
            now
          );
          this.recordCommand(command.idempotencyKey, attachment.uid, command.type);
        });
        for (const peer of this.ctx.getWebSockets()) {
          sendEvent(peer, roomId, version, "preset-chat", {
            uid: attachment.uid,
            displayName: attachment.displayName,
            presetId
          });
        }
      } else {
        throw new RealtimeError(400, "unsupported_command", "This party command is not supported.");
      }
    } catch (error) {
      const known = error instanceof RealtimeError ? error : new RealtimeError(400, "invalid_message", "The party command is invalid.");
      sendEvent(socket, "party-room", this.version(), "error", { code: known.code, message: known.message });
    }
  }
  async webSocketClose(socket) {
    await this.disconnect(socket);
  }
  async webSocketError(socket) {
    await this.disconnect(socket);
  }
  async alarm() {
    const now = Date.now();
    const launchCleared = this.clearExpiredLaunch(now) || await this.reconcileActiveLaunchWithLeases(now);
    if (launchCleared) {
      this.broadcast(this.ctx.id.name ?? "party-room", "party-changed");
    }
    const activeLaunch = this.currentLaunch(now);
    if (activeLaunch) {
      await this.ctx.storage.setAlarm(Math.max(now + 100, activeLaunch.expires_at));
      return;
    }
    const cutoff = now - 45e3;
    const expired = this.ctx.storage.sql.exec(`
      SELECT uid FROM members WHERE disconnected_at IS NOT NULL AND disconnected_at <= ?
    `, cutoff).toArray();
    if (expired.length > 0) {
      this.ctx.storage.transactionSync(() => {
        this.ctx.storage.sql.exec(
          "DELETE FROM members WHERE disconnected_at IS NOT NULL AND disconnected_at <= ?",
          cutoff
        );
        this.ctx.storage.sql.exec("UPDATE meta SET version = version + 1 WHERE singleton = 1");
      });
      this.broadcast(this.ctx.id.name ?? "party-room", "party-changed");
    }
    await this.scheduleDisconnectCleanup(true);
  }
  async launchParty(attachment, command, roomId) {
    const members = this.members();
    if (members[0]?.uid !== attachment.uid) {
      throw new RealtimeError(403, "party_leader_required", "Only the party leader can launch a private match.");
    }
    if (members.length < 2 || members.length > 4) {
      throw new RealtimeError(409, "party_size_invalid", "A private launch requires two to four players.");
    }
    const connectedUids = this.connectedMemberUids();
    if (members.some((member) => member.ready !== 1 || member.disconnected_at !== null || !connectedUids.has(member.uid))) {
      throw new RealtimeError(409, "party_not_ready", "Every party member must be connected and ready.");
    }
    const launch = this.parseLaunch(command.payload, members.length);
    await this.reconcileActiveLaunchWithLeases();
    if (this.currentLaunch()) {
      throw new RealtimeError(409, "party_launched", "This party is already inside an active match.");
    }
    this.launchInFlight = true;
    let matchId = null;
    let membershipsRecorded = false;
    let launchCommitted = false;
    try {
      const nowMs = Date.now();
      const now = Math.floor(nowMs / 1e3);
      matchId = `match_${crypto.randomUUID()}`;
      const expiresAtMs = nowMs + PARTY_MATCH_MEMBERSHIP_MS;
      const createdAt = new Date(nowMs).toISOString();
      const expiresAt = new Date(expiresAtMs).toISOString();
      const region = attachment.region ?? "me";
      await reserveMatchLeasesAndMemberships(this.env.PLAYER_DB, {
        roomId: matchId,
        mode: launch.mode,
        players: members,
        createdAt,
        expiresAt
      });
      membershipsRecorded = true;
      this.ctx.storage.transactionSync(() => {
        this.ctx.storage.sql.exec(`
          INSERT INTO active_launch (
            singleton, match_id, mode, case_id, variant, region, party_size, started_at, expires_at
          ) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?)
        `, matchId, launch.mode, launch.caseId, launch.variant, region, members.length, nowMs, expiresAtMs);
        this.recordCommand(command.idempotencyKey, attachment.uid, command.type);
        this.ctx.storage.sql.exec("UPDATE meta SET version = version + 1 WHERE singleton = 1");
      });
      launchCommitted = true;
      const activeLaunch = this.currentLaunch(nowMs);
      if (!activeLaunch) {
        throw new RealtimeError(500, "party_launch_missing", "The private match could not be secured.");
      }
      for (const socket of this.ctx.getWebSockets()) {
        const player = socketAttachment(socket);
        if (!player || !members.some((member) => member.uid === player.uid)) continue;
        await this.sendMatchFound(socket, player.uid, player.displayName, activeLaunch, now);
        socket.close(1e3, "Private match found.");
      }
      await this.ctx.storage.setAlarm(Math.max(Date.now() + 100, expiresAtMs));
      void roomId;
    } catch (error) {
      if (matchId && membershipsRecorded && !launchCommitted) {
        await this.env.PLAYER_DB.batch([
          ...members.map((member) => this.env.PLAYER_DB.prepare(`
          DELETE FROM network_room_memberships
          WHERE room_id = ? AND user_id = ?
          `).bind(matchId, member.uid)),
          releaseMatchLeasesStatement(this.env.PLAYER_DB, matchId)
        ]).catch(() => void 0);
      }
      throw error;
    } finally {
      this.launchInFlight = false;
    }
  }
  parseLaunch(payload, partySize) {
    const requestedMode = typeof payload.mode === "string" ? payload.mode : "";
    if (requestedMode === "coop_breach") {
      const caseId = typeof payload.caseId === "string" ? payload.caseId : COOP_CASES[0]?.id;
      if (!caseId || !COOP_CASE_BY_ID[caseId]) {
        throw new RealtimeError(400, "invalid_coop_case", "Choose a reviewed cooperative case.");
      }
      return { mode: "coop_breach", caseId, variant: null };
    }
    if (partySize !== 2) {
      throw new RealtimeError(409, "chess_party_size", "Private chess needs exactly two players.");
    }
    if (requestedMode === "chess_casual") {
      const requestedVariant = typeof payload.variant === "string" ? payload.variant : "standard";
      if (requestedVariant !== "standard") {
        throw new RealtimeError(400, "invalid_chess_variant", "Casual chess uses the standard board.");
      }
      return { mode: "chess_casual", caseId: null, variant: "standard" };
    }
    if (requestedMode === "chess_anomaly") {
      const variant = typeof payload.variant === "string" ? payload.variant : "";
      if (!CHESS_VARIANTS.includes(variant) || variant === "standard") {
        throw new RealtimeError(400, "invalid_chess_variant", "Choose an available unranked anomaly.");
      }
      return {
        mode: "chess_anomaly",
        caseId: null,
        variant
      };
    }
    throw new RealtimeError(400, "invalid_party_mode", "This private activity is unavailable.");
  }
  async sendMatchFound(socket, uid, displayName, launch, issuedAtSeconds = Math.floor(Date.now() / 1e3)) {
    const ticket = {
      v: 1,
      iss: "eleven-eleven-realtime",
      aud: "eleven-eleven-realtime",
      purpose: "connect",
      target: "match",
      uid,
      displayName,
      mode: launch.mode,
      roomId: launch.match_id,
      partySize: launch.party_size,
      ...launch.case_id ? { caseId: launch.case_id } : {},
      ...launch.variant ? { variant: launch.variant } : {},
      region: launch.region,
      iat: issuedAtSeconds,
      exp: issuedAtSeconds + 60,
      jti: crypto.randomUUID()
    };
    const token = await signRealtimeTicket(this.env.REALTIME_TICKET_SECRET, ticket);
    sendEvent(socket, launch.match_id, this.version(), "match-found", {
      matchId: launch.match_id,
      mode: launch.mode,
      partySize: launch.party_size,
      ticket: token,
      path: launch.mode === "coop_breach" ? `/v1/rooms/coop/${launch.match_id}` : `/v1/rooms/chess/${launch.match_id}`
    });
  }
  connectedMemberUids() {
    return new Set(this.ctx.getWebSockets().flatMap((socket) => {
      const attachment = socketAttachment(socket);
      return attachment ? [attachment.uid] : [];
    }));
  }
  launchRow() {
    return this.ctx.storage.sql.exec(`
      SELECT match_id, mode, case_id, variant, region, party_size, started_at, expires_at
      FROM active_launch WHERE singleton = 1
    `).toArray()[0] ?? null;
  }
  currentLaunch(now = Date.now()) {
    const launch = this.launchRow();
    return launch && launch.expires_at > now ? launch : null;
  }
  clearExpiredLaunch(now = Date.now()) {
    const launch = this.launchRow();
    if (!launch || launch.expires_at > now) return false;
    this.ctx.storage.transactionSync(() => {
      this.ctx.storage.sql.exec("DELETE FROM active_launch WHERE singleton = 1");
      this.ctx.storage.sql.exec("UPDATE members SET ready = 0");
      this.ctx.storage.sql.exec("UPDATE meta SET version = version + 1 WHERE singleton = 1");
    });
    return true;
  }
  /**
   * A party launch is only a reconnect convenience; D1's active-match lease
   * remains the authority. Terminal receipt persistence deletes those leases,
   * so a surviving DO must not keep the party trapped behind a stale launch.
   * If D1 cannot be read we fail closed by preserving the launch.
   */
  async reconcileActiveLaunchWithLeases(now = Date.now()) {
    const launch = this.currentLaunch(now);
    if (!launch) return false;
    try {
      const liveLease = await this.env.PLAYER_DB.prepare(`
        SELECT 1 AS live
        FROM network_active_match_leases
        WHERE room_id = ? AND expires_at > ?
        LIMIT 1
      `).bind(launch.match_id, new Date(now).toISOString()).first();
      if (liveLease) return false;
    } catch {
      return false;
    }
    let cleared = false;
    this.ctx.storage.transactionSync(() => {
      const current = this.currentLaunch(now);
      if (!current || current.match_id !== launch.match_id) return;
      this.ctx.storage.sql.exec("DELETE FROM active_launch WHERE singleton = 1");
      this.ctx.storage.sql.exec("UPDATE members SET ready = 0");
      this.ctx.storage.sql.exec("UPDATE meta SET version = version + 1 WHERE singleton = 1");
      cleared = true;
    });
    return cleared;
  }
  members() {
    return this.ctx.storage.sql.exec(`
      SELECT uid, display_name, joined_at, ready, disconnected_at
      FROM members ORDER BY joined_at ASC
    `).toArray();
  }
  member(uid) {
    return this.ctx.storage.sql.exec(`
      SELECT uid, display_name, joined_at, ready, disconnected_at
      FROM members WHERE uid = ?
    `, uid).toArray()[0] ?? null;
  }
  async exclusiveJoin(operation) {
    const previous = this.joinTail;
    let release;
    this.joinTail = new Promise((resolve) => {
      release = resolve;
    });
    await previous;
    try {
      return await operation();
    } finally {
      release();
    }
  }
  async hasBlockedPartyMember(uid) {
    const otherUids = this.members().map((member) => member.uid).filter((memberUid) => memberUid !== uid);
    if (otherUids.length === 0) return false;
    const placeholders = otherUids.map(() => "?").join(", ");
    const blocked = await this.env.PLAYER_DB.prepare(`
      SELECT 1 AS blocked
      FROM social_blocks
      WHERE (blocker_uid = ? AND blocked_uid IN (${placeholders}))
         OR (blocked_uid = ? AND blocker_uid IN (${placeholders}))
      LIMIT 1
    `).bind(uid, ...otherUids, uid, ...otherUids).first();
    return Boolean(blocked?.blocked);
  }
  async scheduleDisconnectCleanup(force = false) {
    const nextDisconnect = this.ctx.storage.sql.exec(`
      SELECT MIN(disconnected_at) AS disconnected_at
      FROM members WHERE disconnected_at IS NOT NULL
    `).toArray()[0]?.disconnected_at;
    if (typeof nextDisconnect !== "number") return;
    const requested = nextDisconnect + PARTY_RECONNECT_GRACE_MS;
    if (force) {
      await this.ctx.storage.setAlarm(Math.max(Date.now() + 100, requested));
      return;
    }
    const existing = await this.ctx.storage.getAlarm();
    const nextAlarm = earliestPartyCleanupAlarm(existing, requested);
    if (existing !== nextAlarm) await this.ctx.storage.setAlarm(nextAlarm);
  }
  version() {
    return this.ctx.storage.sql.exec(
      "SELECT version FROM meta WHERE singleton = 1"
    ).toArray()[0]?.version ?? 0;
  }
  commandWasAccepted(key) {
    return Boolean(this.ctx.storage.sql.exec(
      "SELECT idempotency_key FROM commands WHERE idempotency_key = ?",
      key
    ).toArray()[0]);
  }
  recordCommand(key, uid, type) {
    this.ctx.storage.sql.exec(`
      INSERT INTO commands (idempotency_key, uid, command_type, accepted_at)
      VALUES (?, ?, ?, ?)
    `, key, uid, type, Date.now());
  }
  snapshot() {
    const launch = this.currentLaunch();
    return {
      state: { version: this.version() },
      members: this.members().map((member) => ({
        uid: member.uid,
        displayName: member.display_name,
        ready: member.ready === 1,
        connected: member.disconnected_at === null
      })),
      launch: launch ? {
        matchId: launch.match_id,
        mode: launch.mode,
        caseId: launch.case_id,
        variant: launch.variant,
        partySize: launch.party_size,
        startedAt: launch.started_at
      } : null
    };
  }
  sendSnapshot(socket, roomId, type) {
    sendEvent(socket, roomId, this.version(), type, this.snapshot());
  }
  broadcast(roomId, type) {
    const payload = this.snapshot();
    const version = this.version();
    for (const socket of this.ctx.getWebSockets()) sendEvent(socket, roomId, version, type, payload);
  }
  async disconnect(socket) {
    const attachment = socketAttachment(socket);
    if (!attachment) return;
    if (this.launchInFlight || this.currentLaunch()) return;
    if (this.ctx.getWebSockets(`uid:${attachment.uid}`).some((peer) => peer !== socket)) return;
    if (!this.member(attachment.uid)) return;
    const now = Date.now();
    this.ctx.storage.transactionSync(() => {
      this.ctx.storage.sql.exec(
        "UPDATE members SET disconnected_at = ?, ready = 0 WHERE uid = ?",
        now,
        attachment.uid
      );
      this.ctx.storage.sql.exec("UPDATE meta SET version = version + 1 WHERE singleton = 1");
    });
    this.broadcast(this.ctx.id.name ?? "party-room", "party-changed");
    await this.scheduleDisconnectCleanup();
  }
};

// src/CommunityChannelRoom.ts
import { DurableObject as DurableObject5 } from "cloudflare:workers";
var COMMUNITY_PRESETS = [
  "hello",
  "looking-for-coop",
  "looking-for-chess",
  "great-puzzle",
  "well-played",
  "thanks"
];
var CommunityChannelRoom = class extends DurableObject5 {
  static {
    __name(this, "CommunityChannelRoom");
  }
  constructor(ctx, env) {
    super(ctx, env);
    ctx.blockConcurrencyWhile(async () => {
      ctx.storage.sql.exec(`
        CREATE TABLE IF NOT EXISTS used_tickets (
          jti TEXT PRIMARY KEY,
          used_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS rate_events (
          event_id INTEGER PRIMARY KEY AUTOINCREMENT,
          uid TEXT NOT NULL,
          sent_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS commands (
          idempotency_key TEXT PRIMARY KEY,
          uid TEXT NOT NULL,
          command_type TEXT NOT NULL,
          accepted_at INTEGER NOT NULL
        );
      `);
    });
  }
  async fetch(request) {
    try {
      const ticket = await requireUpgradeTicket(request, this.env, "connect");
      const roomId = roomIdFromPath(request);
      if (ticket.target !== "community" || ticket.roomId !== roomId || !roomId.startsWith("channel-")) {
        throw new RealtimeError(403, "wrong_channel", "This ticket does not belong to the channel.");
      }
      if (this.ctx.storage.sql.exec(
        "SELECT jti FROM used_tickets WHERE jti = ?",
        ticket.jti
      ).toArray()[0]) {
        throw new RealtimeError(409, "ticket_reused", "This channel ticket was already used.");
      }
      this.ctx.storage.sql.exec(
        "INSERT INTO used_tickets (jti, used_at) VALUES (?, ?)",
        ticket.jti,
        Date.now()
      );
      const { client, server } = createSocketPair();
      const attachment = {
        uid: ticket.uid,
        displayName: ticket.displayName,
        jti: ticket.jti,
        joinedAt: Date.now()
      };
      server.serializeAttachment(attachment);
      this.ctx.acceptWebSocket(server, [`uid:${ticket.uid}`]);
      sendEvent(server, roomId, 0, "channel-joined", {
        presetOnly: true,
        onlineCount: this.ctx.getWebSockets().length
      });
      this.broadcastPresence(roomId);
      return upgradeResponse(client);
    } catch (error) {
      return errorResponse(error);
    }
  }
  webSocketMessage(socket, message) {
    try {
      const attachment = socketAttachment(socket);
      if (!attachment) throw new RealtimeError(401, "session_missing", "The channel session is missing.");
      const command = parseRoomCommand(message);
      const roomId = this.ctx.id.name ?? "channel-room";
      if (command.type === "ping") {
        sendEvent(socket, roomId, 0, "pong", { clientSentAt: command.sentAt });
        return;
      }
      if (this.ctx.storage.sql.exec(
        "SELECT idempotency_key FROM commands WHERE idempotency_key = ?",
        command.idempotencyKey
      ).toArray()[0]) {
        sendEvent(socket, roomId, 0, "channel-presence", {
          presetOnly: true,
          onlineCount: this.ctx.getWebSockets().length,
          replayed: true
        });
        return;
      }
      if (command.expectedVersion !== 0) {
        throw new RealtimeError(409, "version_conflict", "The channel command version is invalid.");
      }
      if (command.type !== "preset-chat") {
        throw new RealtimeError(400, "preset_only", "Public channels currently accept preset messages only.");
      }
      const presetId = typeof command.payload.presetId === "string" ? command.payload.presetId : "";
      if (!COMMUNITY_PRESETS.includes(presetId)) {
        throw new RealtimeError(400, "invalid_preset", "That channel message is unavailable.");
      }
      const now = Date.now();
      this.ctx.storage.sql.exec("DELETE FROM rate_events WHERE sent_at < ?", now - 1e4);
      const recent = this.ctx.storage.sql.exec(`
        SELECT COUNT(*) AS total FROM rate_events WHERE uid = ?
      `, attachment.uid).toArray()[0]?.total ?? 0;
      if (recent >= 4) throw new RealtimeError(429, "message_rate_limited", "Slow down for a moment.");
      this.ctx.storage.transactionSync(() => {
        this.ctx.storage.sql.exec(
          "INSERT INTO rate_events (uid, sent_at) VALUES (?, ?)",
          attachment.uid,
          now
        );
        this.ctx.storage.sql.exec(`
          INSERT INTO commands (idempotency_key, uid, command_type, accepted_at)
          VALUES (?, ?, ?, ?)
        `, command.idempotencyKey, attachment.uid, command.type, now);
      });
      for (const peer of this.ctx.getWebSockets()) {
        sendEvent(peer, roomId, 0, "preset-chat", {
          uid: attachment.uid,
          displayName: attachment.displayName,
          presetId
        });
      }
    } catch (error) {
      const known = error instanceof RealtimeError ? error : new RealtimeError(400, "invalid_message", "The channel command is invalid.");
      sendEvent(socket, "channel-room", 0, "error", { code: known.code, message: known.message });
    }
  }
  webSocketClose() {
    this.broadcastPresence(this.ctx.id.name ?? "channel-room");
  }
  webSocketError() {
    this.broadcastPresence(this.ctx.id.name ?? "channel-room");
  }
  broadcastPresence(roomId) {
    const onlineCount = this.ctx.getWebSockets().length;
    for (const peer of this.ctx.getWebSockets()) {
      sendEvent(peer, roomId, 0, "channel-presence", { onlineCount });
    }
  }
};

// src/index.ts
var PermanentQueueError = class extends Error {
  static {
    __name(this, "PermanentQueueError");
  }
};
function ratingFromRow(row) {
  return row ? {
    rating: Number(row.rating),
    deviation: Number(row.deviation),
    volatility: Number(row.volatility),
    gamesPlayed: Number(row.games_played)
  } : { ...DEFAULT_GLICKO2_RATING };
}
__name(ratingFromRow, "ratingFromRow");
function ratingRevisionFromRow(row) {
  return Math.max(0, Math.trunc(Number(row?.rating_revision ?? 0)));
}
__name(ratingRevisionFromRow, "ratingRevisionFromRow");
function rankedSpeed(mode) {
  if (mode === "chess_ranked_blitz") return "blitz";
  if (mode === "chess_ranked_rapid") return "rapid";
  return null;
}
__name(rankedSpeed, "rankedSpeed");
function outcomeScore(outcome) {
  if (outcome === "win") return 1;
  if (outcome === "draw") return 0.5;
  return 0;
}
__name(outcomeScore, "outcomeScore");
var MAX_REWARDED_CHESS_REMATCHES_PER_DAY = 3;
var MAX_REWARDED_COOP_CASE_COMPLETIONS_PER_DAY = 3;
function rewardQuotaWindow(completedAt) {
  const timestamp = Date.parse(completedAt);
  return Number.isFinite(timestamp) ? new Date(timestamp).toISOString().slice(0, 10) : null;
}
__name(rewardQuotaWindow, "rewardQuotaWindow");
function createRewardQuotaClaim(input) {
  const windowStart = rewardQuotaWindow(input.completedAt);
  if (!windowStart) return null;
  return {
    scope: input.scope,
    subjectKey: input.subjectKey,
    windowStart,
    matchId: input.matchId,
    limit: input.limit,
    claimedAt: input.completedAt
  };
}
__name(createRewardQuotaClaim, "createRewardQuotaClaim");
function chessRewardQuotaClaim(receipt) {
  if (!modeIsChess(receipt.mode) || receipt.participants.length !== 2) return null;
  const [first, second] = receipt.participants;
  if (!first || !second) return null;
  const subjectKey = [first.uid, second.uid].sort((left, right) => left.localeCompare(right)).join(":");
  return createRewardQuotaClaim({
    scope: "chess-pair",
    subjectKey,
    completedAt: receipt.completedAt,
    matchId: receipt.matchId,
    limit: MAX_REWARDED_CHESS_REMATCHES_PER_DAY
  });
}
__name(chessRewardQuotaClaim, "chessRewardQuotaClaim");
function coopRewardQuotaClaim(receipt, uid) {
  const caseId = receipt.context.caseId;
  if (!caseId) return null;
  return createRewardQuotaClaim({
    scope: "coop-case",
    subjectKey: `${uid}:${caseId}`,
    completedAt: receipt.completedAt,
    matchId: receipt.matchId,
    limit: MAX_REWARDED_COOP_CASE_COMPLETIONS_PER_DAY
  });
}
__name(coopRewardQuotaClaim, "coopRewardQuotaClaim");
function quotaClaimStatement(database, claim) {
  return database.prepare(`
    INSERT OR IGNORE INTO network_reward_quota_claims (
      scope, subject_key, window_start, match_id, limit_value, claimed_at
    )
    SELECT ?, ?, ?, ?, ?, ?
    WHERE EXISTS (
      SELECT 1 FROM network_reward_quota_claims
      WHERE scope = ? AND subject_key = ? AND window_start = ? AND match_id = ?
    ) OR (
      SELECT COUNT(*) FROM network_reward_quota_claims
      WHERE scope = ? AND subject_key = ? AND window_start = ?
    ) < ?
  `).bind(
    claim.scope,
    claim.subjectKey,
    claim.windowStart,
    claim.matchId,
    claim.limit,
    claim.claimedAt,
    claim.scope,
    claim.subjectKey,
    claim.windowStart,
    claim.matchId,
    claim.scope,
    claim.subjectKey,
    claim.windowStart,
    claim.limit
  );
}
__name(quotaClaimStatement, "quotaClaimStatement");
function quotaGate(claim) {
  if (!claim) return { sql: "0", bindings: [] };
  return {
    sql: `EXISTS (
      SELECT 1 FROM network_reward_quota_claims
      WHERE scope = ? AND subject_key = ? AND window_start = ? AND match_id = ?
    )`,
    bindings: [claim.scope, claim.subjectKey, claim.windowStart, claim.matchId]
  };
}
__name(quotaGate, "quotaGate");
async function acknowledgeReceiptPersistence(env, receipt) {
  if (modeIsChess(receipt.mode)) {
    await env.CHESS_MATCH_ROOMS.getByName(receipt.matchId).acknowledgeReceiptPersistence(
      receipt.matchId,
      receipt.integrityHash
    );
    return;
  }
  if (receipt.mode === "coop_breach") {
    await env.COOP_SESSION_ROOMS.getByName(receipt.matchId).acknowledgeReceiptPersistence(
      receipt.matchId,
      receipt.integrityHash
    );
    return;
  }
  throw new PermanentQueueError("Result mode has no persistence acknowledgement room.");
}
__name(acknowledgeReceiptPersistence, "acknowledgeReceiptPersistence");
var EchoRealtimeWorker = class extends WorkerEntrypoint {
  static {
    __name(this, "EchoRealtimeWorker");
  }
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/health") {
      return Response.json({
        service: "eleven-eleven-realtime",
        status: "ok",
        protocol: 1
      }, {
        headers: { "Cache-Control": "no-store" }
      });
    }
    try {
      const ticket = await requireUpgradeTicket(request, this.env);
      if (url.pathname === "/v1/queue") {
        if (ticket.purpose !== "queue" || ticket.target !== "matchmaking") {
          throw new RealtimeError(403, "wrong_ticket_purpose", "This ticket cannot enter matchmaking.");
        }
        const discriminator = ticket.caseId ?? ticket.variant ?? "default";
        const matchmakingBand = ticket.ratingBand ?? "open";
        const stub = this.env.MATCHMAKER_ROOMS.getByName(
          `${ticket.region}:${ticket.mode}:${discriminator}:${matchmakingBand}`,
          { locationHint: modeLocationHint(ticket.region) }
        );
        return stub.fetch(request);
      }
      if (ticket.purpose !== "connect") {
        throw new RealtimeError(403, "wrong_ticket_purpose", "This ticket cannot enter a room.");
      }
      const roomId = roomIdFromPath(request);
      if (url.pathname.startsWith("/v1/parties/")) {
        const canonicalPartyRoomId = normalizePartyRoomId(roomId);
        if (!canonicalPartyRoomId || ticket.roomId !== canonicalPartyRoomId) {
          throw new RealtimeError(403, "wrong_room", "This ticket does not belong to the requested room.");
        }
        const options2 = { locationHint: modeLocationHint(ticket.region) };
        if (ticket.target === "party") {
          return this.env.PARTY_ROOMS.getByName(canonicalPartyRoomId, options2).fetch(request);
        }
        throw new RealtimeError(404, "route_not_found", "The realtime route does not exist.");
      }
      if (ticket.roomId !== roomId) {
        throw new RealtimeError(403, "wrong_room", "This ticket does not belong to the requested room.");
      }
      const options = { locationHint: modeLocationHint(ticket.region) };
      if (url.pathname.startsWith("/v1/rooms/chess/") && ticket.target === "match" && modeIsChess(ticket.mode)) {
        return this.env.CHESS_MATCH_ROOMS.getByName(roomId, options).fetch(request);
      }
      if (url.pathname.startsWith("/v1/rooms/coop/") && ticket.target === "match" && ticket.mode === "coop_breach") {
        return this.env.COOP_SESSION_ROOMS.getByName(roomId, options).fetch(request);
      }
      if (url.pathname.startsWith("/v1/channels/") && ticket.target === "community") {
        return this.env.COMMUNITY_CHANNEL_ROOMS.getByName(roomId, options).fetch(request);
      }
      throw new RealtimeError(404, "route_not_found", "The realtime route does not exist.");
    } catch (error) {
      return errorResponse(error);
    }
  }
  async queue(batch) {
    for (const message of batch.messages) {
      try {
        await this.persistQueuedResult(message.body);
        message.ack();
      } catch (error) {
        if (error instanceof PermanentQueueError) {
          console.warn("Rejected invalid match result", { messageId: message.id, reason: error.message });
          message.ack();
        } else {
          console.error("Retrying match result persistence", {
            messageId: message.id,
            attempt: message.attempts
          });
          message.retry({ delaySeconds: Math.min(60, 2 ** message.attempts) });
        }
      }
    }
  }
  async persistQueuedResult(value, acknowledgeRoom = true) {
    const parsed = queuedResultSchema.safeParse(value);
    if (!parsed.success) throw new PermanentQueueError("Result payload failed schema validation.");
    const { receipt, profiles } = parsed.data;
    if (!await verifyReceiptIntegrity(this.env.REALTIME_TICKET_SECRET, receipt)) {
      throw new PermanentQueueError("Result integrity signature is invalid.");
    }
    const participantUids = new Set(receipt.participants.map((participant) => participant.uid));
    if (participantUids.size !== receipt.participants.length || receipt.rewards.length !== receipt.participants.length || profiles.length !== receipt.participants.length || receipt.rewards.some((reward) => !participantUids.has(reward.uid)) || profiles.some((profile) => !participantUids.has(profile.uid))) {
      throw new PermanentQueueError("Result participant contract is inconsistent.");
    }
    const existing = await this.env.PLAYER_DB.prepare(`
      SELECT integrity_hash FROM network_match_receipts WHERE match_id = ?
    `).bind(receipt.matchId).first();
    if (existing) {
      if (existing.integrity_hash !== receipt.integrityHash) {
        throw new PermanentQueueError("A conflicting result already exists for this match.");
      }
      await this.env.PLAYER_DB.batch([
        releaseMatchLeasesStatement(this.env.PLAYER_DB, receipt.matchId)
      ]);
      if (acknowledgeRoom) await acknowledgeReceiptPersistence(this.env, receipt);
      return;
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const statements = [];
    const profileByUid = new Map(profiles.map((profile) => [profile.uid, profile]));
    for (const participant of receipt.participants) {
      const profile = profileByUid.get(participant.uid);
      statements.push(this.env.PLAYER_DB.prepare(`
        INSERT INTO player_progression (user_id, username, total_xp, created_at, updated_at)
        VALUES (?, ?, 0, ?, ?)
        ON CONFLICT(user_id) DO UPDATE SET
          username = excluded.username,
          updated_at = excluded.updated_at
      `).bind(participant.uid, profile.displayName, now, now));
      statements.push(this.env.PLAYER_DB.prepare(`
        INSERT OR IGNORE INTO network_player_milestones (
          user_id, casual_chess_completed, community_rules_version, updated_at
        ) VALUES (?, 0, 0, ?)
      `).bind(participant.uid, now));
    }
    statements.push(this.env.PLAYER_DB.prepare(`
      INSERT INTO network_match_receipts (
        receipt_id, match_id, mode, status, winner_uid, duration_ms,
        completed_at, integrity_hash, receipt_json, recorded_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      receipt.receiptId,
      receipt.matchId,
      receipt.mode,
      receipt.status,
      receipt.winnerUid,
      receipt.durationMs,
      receipt.completedAt,
      receipt.integrityHash,
      JSON.stringify(receipt),
      now
    ));
    const sourceType = xpSourceForMode(receipt.mode);
    const chessReceiptBaseEligible = modeIsChess(receipt.mode) && isChessReceiptProgressionEligible(receipt) && receipt.rewards.every((reward) => reward.xpAmount > 0);
    const chessQuota = chessReceiptBaseEligible ? chessRewardQuotaClaim(receipt) : null;
    if (chessQuota) statements.push(quotaClaimStatement(this.env.PLAYER_DB, chessQuota));
    const caseDefinition = receipt.context.caseId ? COOP_CASE_BY_ID[receipt.context.caseId] : null;
    const bondCharacter = caseDefinition?.focusCharacter ?? "echo";
    const bondPoints = receipt.mode === "coop_breach" ? 3 : 1;
    const participantQuota = /* @__PURE__ */ new Map();
    for (const participant of receipt.participants) {
      const reward = receipt.rewards.find((entry) => entry.uid === participant.uid);
      const coopBaseEligible = receipt.mode === "coop_breach" && caseDefinition !== null && isCoopReceiptParticipantProgressionEligible({
        receipt,
        participant,
        rewardXpAmount: reward.xpAmount
      });
      const claim = modeIsChess(receipt.mode) ? chessQuota : coopBaseEligible ? coopRewardQuotaClaim(receipt, participant.uid) : null;
      if (claim && !modeIsChess(receipt.mode)) {
        statements.push(quotaClaimStatement(this.env.PLAYER_DB, claim));
      }
      participantQuota.set(
        participant.uid,
        claim
      );
    }
    for (const participant of receipt.participants) {
      const reward = receipt.rewards.find((entry) => entry.uid === participant.uid);
      const claim = participantQuota.get(participant.uid) ?? null;
      const gate = quotaGate(claim);
      statements.push(this.env.PLAYER_DB.prepare(`
        INSERT INTO network_match_participants (
          match_id, user_id, outcome, participation_ms, reward_key, xp_amount
        ) VALUES (?, ?, ?, ?, ?, CASE WHEN ${gate.sql} THEN ? ELSE 0 END)
      `).bind(
        receipt.matchId,
        participant.uid,
        participant.outcome,
        participant.participationMs,
        reward.rewardKey,
        ...gate.bindings,
        reward.xpAmount
      ));
      if (claim && reward.xpAmount > 0) {
        statements.push(this.env.PLAYER_DB.prepare(`
          INSERT OR IGNORE INTO xp_reward_events (
            user_id, reward_key, source_type, source_id, xp_amount, granted_at
          ) SELECT ?, ?, ?, ?, ?, ? WHERE ${gate.sql}
        `).bind(
          participant.uid,
          reward.rewardKey,
          sourceType,
          receipt.matchId,
          reward.xpAmount,
          receipt.completedAt,
          ...gate.bindings
        ));
      }
      for (const cosmeticId of claim ? reward.cosmeticIds : []) {
        statements.push(this.env.PLAYER_DB.prepare(`
          INSERT OR IGNORE INTO network_cosmetic_unlock_events (
            user_id, cosmetic_id, source_type, source_id, unlocked_at
          ) SELECT ?, ?, 'match', ?, ? WHERE ${gate.sql}
        `).bind(
          participant.uid,
          cosmeticId,
          receipt.matchId,
          receipt.completedAt,
          ...gate.bindings
        ));
      }
      if (claim) {
        statements.push(this.env.PLAYER_DB.prepare(`
          INSERT OR IGNORE INTO player_character_bond_events (
            user_id, event_key, character_id, source_type, source_id,
            bond_points, recorded_at
          ) SELECT ?, ?, ?, 'match', ?, ?, ? WHERE ${gate.sql}
        `).bind(
          participant.uid,
          `bond:${receipt.matchId}:${participant.uid}:v1`,
          bondCharacter,
          receipt.matchId,
          bondPoints,
          receipt.completedAt,
          ...gate.bindings
        ));
      }
    }
    if (receipt.mode === "coop_breach") {
      const completedAt = Date.parse(receipt.completedAt);
      const season = seasonAt(completedAt);
      const week = seasonWeekAt(completedAt);
      const activity = season.activities.find((candidate) => candidate.week === week);
      if (activity) {
        for (const participant of receipt.participants) {
          const claim = participantQuota.get(participant.uid) ?? null;
          if (!claim) continue;
          const gate = quotaGate(claim);
          statements.push(this.env.PLAYER_DB.prepare(`
            INSERT INTO season_player_progress (
              user_id, season_id, activity_id, status, mastery_score,
              completed_at, updated_at
            ) SELECT ?, ?, ?, 'completed', ?, ?, ? WHERE ${gate.sql}
            ON CONFLICT(user_id, season_id, activity_id) DO UPDATE SET
              status = 'completed',
              mastery_score = MAX(season_player_progress.mastery_score, excluded.mastery_score),
              completed_at = COALESCE(season_player_progress.completed_at, excluded.completed_at),
              updated_at = excluded.updated_at
          `).bind(
            participant.uid,
            season.id,
            activity.id,
            100,
            receipt.completedAt,
            now,
            ...gate.bindings
          ));
        }
      }
    }
    const speed = rankedSpeed(receipt.mode);
    if (chessReceiptBaseEligible && chessQuota && speed && receipt.participants.length === 2) {
      const [first, second] = receipt.participants;
      const gate = quotaGate(chessQuota);
      const [firstRow, secondRow] = await Promise.all([
        this.env.PLAYER_DB.prepare(`
          SELECT rating, deviation, volatility, games_played, rating_revision
          FROM chess_ratings WHERE user_id = ? AND speed = ?
        `).bind(first.uid, speed).first(),
        this.env.PLAYER_DB.prepare(`
          SELECT rating, deviation, volatility, games_played, rating_revision
          FROM chess_ratings WHERE user_id = ? AND speed = ?
        `).bind(second.uid, speed).first()
      ]);
      const before = [ratingFromRow(firstRow), ratingFromRow(secondRow)];
      const after = [
        updateGlicko2(before[0], [{
          rating: before[1].rating,
          deviation: before[1].deviation,
          score: outcomeScore(first.outcome)
        }]),
        updateGlicko2(before[1], [{
          rating: before[0].rating,
          deviation: before[0].deviation,
          score: outcomeScore(second.outcome)
        }])
      ];
      for (const [index, participant] of [first, second].entries()) {
        statements.push(this.env.PLAYER_DB.prepare(`
          INSERT OR IGNORE INTO chess_rating_events (
            match_id, user_id, speed, rating_before, deviation_before,
            volatility_before, rating_after, deviation_after,
            volatility_after, rating_revision_before, recorded_at
          ) SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? WHERE ${gate.sql}
        `).bind(
          receipt.matchId,
          participant.uid,
          speed,
          before[index].rating,
          before[index].deviation,
          before[index].volatility,
          after[index].rating,
          after[index].deviation,
          after[index].volatility,
          ratingRevisionFromRow(index === 0 ? firstRow : secondRow),
          receipt.completedAt,
          ...gate.bindings
        ));
        statements.push(this.env.PLAYER_DB.prepare(`
          INSERT INTO chess_ratings (
            user_id, speed, rating, deviation, volatility, games_played,
            rating_revision, updated_at
          ) SELECT ?, ?, ?, ?, ?, ?, 1, ? WHERE ${gate.sql}
          ON CONFLICT(user_id, speed) DO UPDATE SET
            rating = excluded.rating,
            deviation = excluded.deviation,
            volatility = excluded.volatility,
            games_played = excluded.games_played,
            rating_revision = chess_ratings.rating_revision + 1,
            updated_at = excluded.updated_at
        `).bind(
          participant.uid,
          speed,
          after[index].rating,
          after[index].deviation,
          after[index].volatility,
          after[index].gamesPlayed,
          receipt.completedAt,
          ...gate.bindings
        ));
      }
    }
    for (const participant of receipt.participants) {
      if (chessQuota && receipt.mode === "chess_casual") {
        const gate = quotaGate(chessQuota);
        statements.push(this.env.PLAYER_DB.prepare(`
          UPDATE network_player_milestones
          SET casual_chess_completed = (
            SELECT COUNT(*) FROM network_match_participants p
            JOIN network_match_receipts r ON r.match_id = p.match_id
            WHERE p.user_id = ? AND r.mode = 'chess_casual' AND p.xp_amount > 0
          ), updated_at = ?
          WHERE user_id = ? AND ${gate.sql}
        `).bind(participant.uid, now, participant.uid, ...gate.bindings));
      }
      statements.push(this.env.PLAYER_DB.prepare(`
        UPDATE player_progression
        SET total_xp = (
          SELECT COALESCE(SUM(xp_amount), 0) FROM xp_reward_events WHERE user_id = ?
        ), updated_at = ?
        WHERE user_id = ?
      `).bind(participant.uid, now, participant.uid));
    }
    statements.push(releaseMatchLeasesStatement(this.env.PLAYER_DB, receipt.matchId));
    await this.env.PLAYER_DB.batch(statements);
    if (acknowledgeRoom) await acknowledgeReceiptPersistence(this.env, receipt);
    this.env.NETWORK_ANALYTICS.writeDataPoint({
      blobs: [receipt.mode, receipt.status],
      doubles: [receipt.durationMs, receipt.participants.length],
      indexes: [receipt.matchId]
    });
  }
};
async function persistQueuedResult(env, value, options = {}) {
  const handler = EchoRealtimeWorker.prototype;
  return handler.persistQueuedResult.call({ env }, value, options.acknowledgeRoom ?? false);
}
__name(persistQueuedResult, "persistQueuedResult");

// ../../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-ABLRnR/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = EchoRealtimeWorker;

// ../../node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-ABLRnR/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  ChessMatchRoom,
  CommunityChannelRoom,
  CoopSessionRoom,
  MatchmakerRoom,
  PartyRoom,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default,
  persistQueuedResult
};
/*! Bundled license information:

chess.js/dist/esm/chess.js:
  (**
   * @license
   * Copyright (c) 2025, Jeff Hlywa (jhlywa@gmail.com)
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   *    this list of conditions and the following disclaimer.
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the documentation
   *    and/or other materials provided with the distribution.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *)
*/
//# sourceMappingURL=index.js.map
