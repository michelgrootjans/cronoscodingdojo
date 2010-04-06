
load('/home/bart/.gem/ruby/1.8/gems/jspec-4.1.0/lib/jspec.js')
load('/home/bart/.gem/ruby/1.8/gems/jspec-4.1.0/lib/jspec.xhr.js')
load('lib/mier.js')
load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/spec.mier.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()