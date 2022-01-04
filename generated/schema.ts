// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get buyer(): string | null {
    let value = this.get("buyer");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set buyer(value: string | null) {
    if (value === null) {
      this.unset("buyer");
    } else {
      this.set("buyer", Value.fromString(value as string));
    }
  }

  get seller(): string | null {
    let value = this.get("seller");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set seller(value: string | null) {
    if (value === null) {
      this.unset("seller");
    } else {
      this.set("seller", Value.fromString(value as string));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Buyer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Buyer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Buyer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Buyer", id.toString(), this);
  }

  static load(id: string): Buyer | null {
    return store.get("Buyer", id) as Buyer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transactions(): Array<string> {
    let value = this.get("transactions");
    return value.toStringArray();
  }

  set transactions(value: Array<string>) {
    this.set("transactions", Value.fromStringArray(value));
  }

  get tradeCount(): BigInt {
    let value = this.get("tradeCount");
    return value.toBigInt();
  }

  set tradeCount(value: BigInt) {
    this.set("tradeCount", Value.fromBigInt(value));
  }
}

export class Seller extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Seller entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Seller entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Seller", id.toString(), this);
  }

  static load(id: string): Seller | null {
    return store.get("Seller", id) as Seller | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transactions(): Array<string> {
    let value = this.get("transactions");
    return value.toStringArray();
  }

  set transactions(value: Array<string>) {
    this.set("transactions", Value.fromStringArray(value));
  }

  get tradeCount(): BigInt {
    let value = this.get("tradeCount");
    return value.toBigInt();
  }

  set tradeCount(value: BigInt) {
    this.set("tradeCount", Value.fromBigInt(value));
  }
}
