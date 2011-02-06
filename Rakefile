@glitchtext_js = File.dirname(__FILE__)+'/src/glitchtext.js'
@test_js = File.dirname(__FILE__)+'/test/test.js'
@plugins = Dir.glob(File.dirname(__FILE__)+'/src/plugins/*.js')

desc 'test all plugins'
task 'test' do
  system("v8 #{@glitchtext_js} #{@plugins.join(' ')} #{@test_js}");
end

desc 'build glitchtext.js'
task 'build' do
  open(File.dirname(__FILE__)+'/glitchtext.js','w+'){|dest|
    open(@glitchtext_js){|f|
      dest.write f.readlines
      dest.write "\n"
    }
    @plugins.each{|i|
      open(i){|f|
        dest.write f.readlines
        dest.write "\n"
      }
    }
  }
end

task :default => :test
