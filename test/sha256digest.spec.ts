import { expect } from 'chai'
import { sha256digest } from '../src'

describe('sha256digest', () => {
  it('hashes strings or bytes', async () => {
    expect(await sha256digest('test')).to
      .eql(await sha256digest(new TextEncoder().encode('test')))
  })
})
