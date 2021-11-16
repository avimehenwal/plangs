---
title: Flutter Plublish
tags:
  - flutter
  - publish
  - monetize
---

# Flutter Plublish

<TagLinks />

Flutter webapp

```
flutter run --verbose -d chrome
flutter build --verbose web
python -m http.server 8080 -d ./build/web
```

## How to monetize flutter app?

1. Paid-Apps
2. In-App Purchase, buy extra content and features
3. Advertisement SDk

## Advertisement Terminologies

1. Google AdMob, supports both android and iOS platforms

How to load add-unit from AdMob to flutter app?

- Add ads SDk, `google-mobile-ads`
- `provider` package
- Initialize mobile ad SDk, before running the app.
- create test ads from test IDs

```dart
WidgetsFlutterBinding.ensureInitialized();
final initFuture = MobileAds.instance.initialize();
final adState - AdState(initFuture);
runApp(
  Provider.value(  // make it available to entire widget tree
    value:adState,
    builder: (context, child) => MyApp(),
  )
);
```

- How to load and display ad?
- StatefulkWidget to load a ad

<Footer />
