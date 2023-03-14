import {expect, test} from '@oclif/test'

describe('deploy/index', () => {
  test
  .stdout()
  .command(['deploy/index'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['deploy/index', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
