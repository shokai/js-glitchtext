@glitchtext_js = File.dirname(__FILE__)+'/src/glitchtext.js'
@test_js = File.dirname(__FILE__)+'/test/test.js'
@plugins = Dir.glob(File.dirname(__FILE__)+'/src/plugins/*.js')
@libs = Dir.glob(File.dirname(__FILE__)+'/libs/*.js')

desc 'test all plugins'
task 'test' do
  puts cmd = "v8 #{@libs} #{@glitchtext_js} #{@plugins.join(' ')} #{@test_js}"
  puts '-'*5
  system(cmd);
end

desc 'build glitchtext.js'
task 'build' do
  dist = File.dirname(__FILE__)+'/glitchtext.js'
  open(dist,'w+'){|dest|
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
    puts " => #{dist}\t#{File.size(dist)}(byte)"
  }

end

task :default => :test
