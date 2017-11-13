/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import inflateTree from "./index"

test(({same, end}) => {
  same(
    inflateTree(
      "-"
    )(
      {
        "data-profile-name": "Kurtis Rainbolt-Greene",
        "data-profile-age": 24,
        "data-metadata-interval": "10s",
        "data-location": "http://api.example.com/profiles/24",
      }
    ),
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
  )

  end()
})
