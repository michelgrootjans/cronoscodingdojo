
require.paths.unshift('spec', '/home/bart/.gem/ruby/1.8/gems/jspec-4.1.0/lib', 'lib')
require('jspec')
require('unit/spec.helper')
require('yourlib')

JSpec
  .exec('spec/unit/spec.mier.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()
