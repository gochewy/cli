import {expect, test} from '@oclif/test'

describe('create/environment', () => {
  test
  .stdout()
  .command(['create/environment'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['create/environment', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
