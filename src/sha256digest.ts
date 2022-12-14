/*
 * Copyright (c) 2022 Digital Credentials Consortium. (Conversion to Typescript).
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
import * as crypto from 'crypto'

/**
 * Hashes a string of data using SHA-256.
 *
 * @param {string|Uint8Array} data - Data to hash.
 *
 * @return {Uint8Array} the hash digest.
 */
export async function sha256digest(data: string | Uint8Array): Promise<Uint8Array> {
  return new Uint8Array(crypto.createHash('sha256').update(data).digest())
}
