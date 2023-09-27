# KonkeSdk4YinYue

## Android 接入

下载最新 [KonkeSdk4YinYue.aar](https://github.com/KonkeSdk4YinYue/KonkeSdk4YinYue/raw/main/KonkeSdk4YinYue.aar)

将 `KonkeSdk4YinYue.aar` 放至安卓项目的 `app/libs` 文件夹下，并在 `app/build.gradle` 文件中增加配置：

```groovy
dependencies {
  implementation fileTree(dir: 'libs', include: ['*.aar'])
  implementation 'androidx.appcompat:appcompat:1.0.0'
  implementation 'com.google.android.material:material:1.0.0'
  implementation 'androidx.constraintlayout:constraintlayout:2.1.2'
  implementation 'com.google.zxing:core:3.2.0'
  implementation 'org.greenrobot:eventbus:3.1.1'
}
```

初始化 SDK
```java
KonkeCloudConfig config = KonkeCloudConfig.getInstance();
config.setAppKey({{appKey}});
config.setBaseURL({{baseURL}});
```


调用 SDK 入口，打开 SDK 主页面

```java
startActivity(new Intent(this, KYRoomActivity.class))
```

## iOS 接入

在 `Podfile` 中添加依赖

```ruby
pod 'KonkeSdk4YinYue', :git => 'https://github.com/KonkeSdk4YinYue/KonkeSdk4YinYue.git'
```

打开终端，进入项目目录，安装依赖

```shell
pod install
```
初始化 SDK

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  KonkeSdk4YinYueRunner.cloudConfig.appKey = "{{appKey}}"
  KonkeSdk4YinYueRunner.cloudConfig.baseURL = "https://kapp.ikonke.com"
  KonkeSdk4YinYueRunner.prepare()
  return true
}
```

调用 SDK 入口，打开 SDK 主页面

```swift
// XXXViewController 中
KonkeSdk4YinYueRunner.openSdkHome(by: self) // self 是 XXXViewController
```

## SDK 更新

- Android：重新下载最新 [KonkeSdk4YinYue.aar](https://github.com/KonkeSdk4YinYue/KonkeSdk4YinYue/raw/main/KonkeSdk4YinYue.aar) 集成进项目
- iOS：运行终端命令 `pod update KonkeSdk4YinYue`
