@glitchtext_js = File.dirname(__FILE__)+'/src/glitchtext.js'
@test_js = File.dirname(__FILE__)+'/test/test.js'
@plugins = Dir.glob(File.dirname(__FILE__)+'/src/plugins/*.js')
@libs = Dir.glob(File.dirname(__FILE__)+'/libs/*.js')

desc 'test all plugins'
task 'test' do
  puts cmd = "v8 #{@libs} #{@glitchtext_js} #{@plugins.join(' ')} #{@test_js}"
  puts '-'*5
  system cmd
end

desc 'build glitchtext.js'
task 'build' do
copy = <<EOF
// GlitchText.js
// (c) 2011 Sho Hashimoto <hashimoto@shokai.org>
// https://github.com/shokai/js-glitchtext
EOF
  dest = File.dirname(__FILE__)+'/glitchtext.js'
  open(dest,'w+'){|out|
    out.write copy+"\n"
    open(@glitchtext_js){|f|
      out.write f.readlines
      out.write "\n"
    }
    @plugins.each{|i|
      open(i){|f|
        out.write f.readlines
        out.write "\n"
      }
    }
    puts " => #{dest}\t#{File.size(dest)}(byte)"
  }
  min = dest.gsub(/\.js/,'_min.js')
  open(min, 'w+'){|f|
    f.write copy
  }
  system "jsmin < #{dest} >> #{min}"
  puts " => #{min}\t#{File.size(min)}(byte)"
end

task :default => :test
