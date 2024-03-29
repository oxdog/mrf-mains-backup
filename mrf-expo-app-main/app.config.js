export default {
  expo: {
    name: 'myregionalfood',
    owner: 'myregionalfood',
    scheme: 'myregionalfood',
    slug: 'expo-mrf',
    version: '1.4.1',
    orientation: 'portrait',
    icon: './assets/images/logo/icon.png',
    sdkVersion: '42.0.0',
    facebookScheme: 'fb2980671345501961',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.myregionalfood.myregionalfood',
      buildNumber: '1.0.0'
    },
    android: {
      package: 'com.myregionalfood.myregionalfood',
      versionCode: 5,
      softwareKeyboardLayoutMode: 'pan',
      adaptiveIcon: {
        foregroundImage: './assets/images/logo/adaptiveIcon.png',
        backgroundImage: './assets/images/logo/adaptiveBG.png'
      },
      intentFilters: [
        {
          action: 'VIEW',
          data: [
            {
              scheme: 'https',
              host: '*.myregionalfood.io',
              pathPrefix: '/records'
            }
          ],
          category: ['BROWSABLE', 'DEFAULT']
        }
      ]
    },
    web: {
      favicon: './assets/images/favicon.png'
    },
    plugins: [
      [
        '@stripe/stripe-react-native',
        {
          // merchantIdentifier: [
          //   'myregionalfood.com.stripe.react.native',
          //   'merchant.com.myregionalfood'
          // ],
          merchantIdentifier: 'merchant.com.myregionalfood',
          enableGooglePay: true
        }
      ],
      'sentry-expo'
    ],
    hooks: {
      postPublish: [
        {
          file: 'sentry-expo/upload-sourcemaps',
          config: {
            organization: 'myregionalfood',
            project: 'myregionalfood',
            authToken:
              'f3d0b3b3652a41918837f1d1a01c7e2019e1f859909243438b3307d31fd4b0bc'
          }
        }
      ]
    }
  }
}
