# @unction/inflateTree

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> string => Record<string | number | symbol, B> | Map<A, B> => RecordType<A, C>

Takes a flat record with a specific key pattern and turns it into a nested record.

``` javascript
inflateTree(
  "-"
)(
  {
    "data-profile-name": "Kurtis Rainbolt-Greene",
    "data-profile-age": 24,
    "data-metadata-interval": "10s",
    "data-location": "http://api.example.com/profiles/24",
  }
)
```

which returns

``` javascript
{
  data: {
    profile: {
      name: "Kurtis Rainbolt-Greene",
      age: 24,
    },
    metadata: {interval: "10s"},
    location: "http://api.example.com/profiles/24",
  },
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/inflateTree.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/inflateTree.svg?maxAge=2592000&style=flat-square
