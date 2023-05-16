Pod::Spec.new do |s|
  s.name             = 'KonkeSdk4YinYue'
  s.version          = '0.1.0'
  s.summary          = 'A short description of KonkeSdk4YinYue.'
  s.description      = 'Konke SDK for YinYue (iOS).'
  s.homepage         = 'https://github.com/KonkeSdk4YinYue/KonkeSdk4YinYue'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'weichengwu' => 'wuvcen@gmail.com' }
  s.source           = { :git => 'https://github.com/KonkeSdk4YinYue/KonkeSdk4YinYue.git', :ref => 'main' }
  s.ios.deployment_target = '10.0'
  s.vendored_frameworks = 'KonkeSdk4YinYue.xcframework'
  s.dependency 'Starscream', '~> 4.0.0'
end
