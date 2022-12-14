/*
 * Copyright (c) 2022 Digital Credentials Consortium.
 */
import crypto from 'isomorphic-webcrypto'
import 'fast-text-encoding'

/**
 * Hashes a string of data using SHA-256.
 *
 * @param {string|Uint8Array} data - Data to hash.
 *
 * @return {Promise<Uint8Array>} the hash digest.
 */
export async function sha256digest(data: string|Uint8Array): Promise<Uint8Array> {
  const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data
  return new Uint8Array(
    // @ts-ignore
    await crypto.subtle.digest({ name: 'SHA-256' }, bytes)
  )
}
