@glitchtext_js = File.dirname(__FILE__)+'/src/glitchtext.js'
@test_js = File.dirname(__FILE__)+'/src/test.js'
@plugins = Dir.glob(File.dirname(__FILE__)+'/src/*.js').delete_if{|f| !(f =~ /glitch_.+.js$/)}

desc 'test all plugins'
task 'test' do
  system("v8 #{@glitchtext_js} #{@plugins.join(' ')} #{@test_js}");
end

desc 'build glitchtext.js'
task 'build' do
  
end

task :default => :test
