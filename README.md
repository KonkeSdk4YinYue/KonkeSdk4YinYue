# KonkeSdk4YinYue

## Android 接入

下载 [KonkeSdk4YinYue.aar](https://github.com/KonkeSdk4YinYue/KonkeSdk4YinYue/raw/main/KonkeSdk4YinYue.aar)

将 `KonkeSdk4YinYue.aar` 放至安卓项目的 `app/libs` 文件夹下，并在 `app/build.gradle` 文件中增加配置：

```groovy
dependencies {
  implementation fileTree(dir: 'libs', include: ['*.aar'])
}
```

调用 SDK 入口，打开 SDK 主页面

```java
KonkeCloudConfig config = KonkeCloudConfig.getInstance();
config.setAppKey({{appKey}});
config.setBaseURL({{baseURL}});
startActivity(new Intent(this,KYRoomActivity.class))
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
