import { expect } from 'chai'
import { sha256digest } from '../src'

describe('sha256digest', () => {
  it('calls function', async () => {
    expect(await sha256digest('abc')).to.exist
  })
})
