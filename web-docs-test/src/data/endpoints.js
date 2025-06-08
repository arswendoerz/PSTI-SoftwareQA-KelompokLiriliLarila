import apiImage from "../assets/artists-api.png";
import sevArtImage from "../assets/several-artist-api.png";
import newRelease from "../assets/new-release.png";
import userSaveAlbums from "../assets/users-saved-albums.png";
import getAlbums from "../assets/get-album.png";
import checkUserSavedAlbums from "../assets/check-user-saved-Albums.png";
import svAlbumsForCurUser from "../assets/saved-albums-for-current-user.png";
import removeUserSvAlbums from "../assets/remove-user-saved-albums.png";
import createPlaylist from "../assets/create-playlist.png";
import getPlaylists from "../assets/get-playlists.png";
import addItemToPlaylists from "../assets/add-item-to-playlist.png";
import updatePlaylistItems from "../assets/update-playlist-items.png";
import changePlaylistItems from "../assets/change-playlist-items.png";
import removePlaylistItems from "../assets/remove-playlist-items.png";
import searchAlbum from "../assets/search-album.png";
import searchArtist from "../assets/search-artist.png";
import searchPlaylist from "../assets/search-playlist.png";
import searchTrack from "../assets/search-track.png";
import severalBrowseCategories from "../assets/several-browse-categories.png";
import singleBrowseCategory from "../assets/single-browse-category.png";
import checkIfCurUserFollowPlaylist from "../assets/check-if-current-user-follows-playlist.png";
import checkIfUserFollowArtistOrUser from "../assets/check-if-user-follow-artists-or-users.png";
import unfollowArtistOrUser from "../assets/unfollow-artist-or-user.png";
import followArtistOrUser from "../assets/follow-artist-or-user.png";
import followArtists from "../assets/follow-artists.png";
import followPlaylist from "../assets/unfollow-playlist.png";
import unfollowPlaylist from "../assets/follow-playlist.png";
import getCurUserProfile from "../assets/get-current-user-profile.png";
import performanceTest from "../assets/sheet.png";
import pytestSelenium from "../assets/pytest.jpg";

export const endpoints = [
  {
    id: 1,
    name: "Testing Performance",
    description: "Testing performance of various with Lighthouse Tools",
    image: performanceTest,
    category: "frontend",
    githubUrl:
      "https://github.com/arswendoerz/PSTI-SoftwareQA-KelompokLiriliLarila/blob/main/Performance/hasilPerformance.md",
  },
  {
    id: 2,
    name: "GET Artists API",
    description: "GET /v1/artists/{id}",
    image: apiImage,
    category: "backend",
    markdown: `
## 🎤 Get Artist Information

Retrieve **detailed information** about one or more artists from the **Spotify Catalog** using their unique IDs.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/artists?ids={ids}\`

---

### 📥 Request

#### Method
\`GET\`

#### Query Parameters
| Parameter | Type   | Required | Description                                                                          |
|-----------|--------|----------|--------------------------------------------------------------------------------------|
| \`ids\`     | string | ✅ Yes    | A comma-separated list of **Spotify Artist IDs**. Each must be a valid artist ID.   |

> Example: \`ids=1Xyo4u8uXC1ZmMpatF05PJ,6eUKZXaKkcviH0Ku9w2n3V\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns an array of artist objects, each containing:
- \`id\`: Artist ID
- \`name\`: Artist name
- \`genres\`: Array of genres
- \`images\`: Array of image objects
- \`followers\`: Total follower count
- and more...

---

### ✅ Example Response

\`\`\`json
{
  "artists": [
    {
      "id": "1Xyo4u8uXC1ZmMpatF05PJ",
      "name": "The Weeknd",
      "genres": ["canadian contemporary R&B", "pop"],
      "images": [...],
      "followers": {
        "total": 29847923
      }
    }
  ]
}
\`\`\`

---

### 📎 Notes
- Maximum of **50 IDs** per request.
- Requires a valid **access token** with proper scopes.
`,
  },
  {
    id: 3,
    name: "GET Several Artists API",
    description: "GET /v1/artists?ids=7Gy1PxqrgsiqWF6JNYPHeB",
    image: sevArtImage,
    category: "backend",
    markdown: `
## 🎤 Get Several Artists Information

Retrieve **detailed information** about multiple artists from the **Spotify Catalog** using their unique IDs.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/artists?ids={ids}\`

---

### 📥 Request

#### Method
\`GET\`

#### Query Parameters
| Parameter | Type   | Required | Description                                                                          |
|-----------|--------|----------|--------------------------------------------------------------------------------------|
| \`ids\`     | string | ✅ Yes    | A comma-separated list of **Spotify Artist IDs**. Each must be a valid artist ID.   |

> Example: \`ids=1Xyo4u8uXC1ZmMpatF05PJ,6eUKZXaKkcviH0Ku9w2n3V\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns an array of artist objects, each containing:
- \`id\`: Artist ID
- \`name\`: Artist name
- \`genres\`: Array of genres
- \`images\`: Array of image objects
- \`followers\`: Total follower count
- and more...

---

### ✅ Example Response

\`\`\`json
{
  "artists": [
    {
      "id": "1Xyo4u8uXC1ZmMpatF05PJ",
      "name": "The Weeknd",
      "genres": ["canadian contemporary R&B", "pop"],
      "images": [...],
      "followers": {
        "total": 29847923
      }
    }
  ]
}
\`\`\`

---

### 📎 Notes
- Maximum of **50 IDs** per request.
- Requires a valid **access token** with proper scopes.
`,
  },
  {
    id: 4,
    name: "PUT Check User Saved Albums",
    description: "PUT /v1/me/albums/contains?ids={ids}",
    image: checkUserSavedAlbums,
    category: "backend",
    markdown: `
## 🎤 Check User Saved Albums

Check if the current user has saved specific albums.

---

### 🔗 Endpoint
\`PUT https://api.spotify.com/v1/me/albums/contains?ids={ids}\`

---

### 📥 Request

#### Method
\`PUT\`

#### Query Parameters
| Parameter | Type   | Required | Description                                                                          |
|-----------|--------|----------|--------------------------------------------------------------------------------------|
| \`ids\`     | string | ✅ Yes    | A comma-separated list of **Spotify Album IDs**. Each must be a valid album ID.   |

> Example: \`ids=1A2GTWGt2Z2Z2Z2Z2Z2Z2Z2,2B3GTWGt2Z2Z2Z2Z2Z2Z2Z2\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns an array of boolean values indicating whether each album is saved by the user:
- \`true\`: Album is saved
- \`false\`: Album is not saved

---

### ✅ Example Response

\`\`\`json
[
  true,
  false
]
\`\`\`

---

### 📎 Notes
- Requires a valid **access token** with proper scopes.
`,
  },
  {
    id: 5,
    name: "GET New Releases",
    description: "GET /v1/albums/new-releases",
    image: newRelease,
    category: "backend",
    markdown: `
## 🎤 Get New Releases

Retrieve a list of new album releases from the **Spotify Catalog**.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/albums/new-releases\`

---

### 📥 Request

#### Method
\`GET\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns an array of album objects, each containing:
- \`id\`: Album ID
- \`name\`: Album name
- \`artists\`: Array of artist objects
- \`release_date\`: Release date
- \`images\`: Array of image objects
- and more...

---

### ✅ Example Response

\`\`\`json
{
  "albums": [
    {
      "id": "1A2GTWGt2Z2Z2Z2Z2Z2Z2Z2",
      "name": "New Album",
      "artists": [...],
      "release_date": "2023-01-01",
      "images": [...]
    }
  ]
}
\`\`\`

---

### 📎 Notes
- Requires a valid **access token** with proper scopes.
`,
  },
  {
    id: 6,
    name: "GET User Saved Albums",
    description: "GET /v1/me/albums",
    image: userSaveAlbums,
    category: "backend",
    markdown: `
## 🎤 Get User Saved Albums

Retrieve a list of albums saved in the current user's library.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/me/albums\`

---

### 📥 Request

#### Method
\`GET\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns an array of album objects, each containing:
- \`id\`: Album ID
- \`name\`: Album name
- \`artists\`: Array of artist objects
- \`release_date\`: Release date
- \`images\`: Array of image objects
- and more...

---

### ✅ Example Response

\`\`\`json
{
  "albums": [
    {
      "id": "1A2GTWGt2Z2Z2Z2Z2Z2Z2Z2",
      "name": "Saved Album",
      "artists": [...],
      "release_date": "2023-01-01",
      "images": [...]
    }
  ]
}
\`\`\`

---

### 📎 Notes
- Requires a valid **access token** with proper scopes.
`,
  },
  {
    id: 7,
    name: "GET Albums",
    description: "GET /v1/albums/{id}",
    image: getAlbums,
    category: "backend",
    markdown: `
## 🎤 Get Album Information

Retrieve detailed information about a specific album from the **Spotify Catalog** using its unique ID.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/albums/{id}\`

---

### 📥 Request

#### Method
\`GET\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns an album object, containing:
- \`id\`: Album ID
- \`name\`: Album name
- \`artists\`: Array of artist objects
- \`release_date\`: Release date
- \`images\`: Array of image objects
- and more...

---

### ✅ Example Response

\`\`\`json
{
  "id": "1A2GTWGt2Z2Z2Z2Z2Z2Z2Z2",
  "name": "Album Name",
  "artists": [...],
  "release_date": "2023-01-01",
  "images": [...]
}
\`\`\`

---

### 📎 Notes
- Requires a valid **access token** with proper scopes.
`,
  },
  {
    id: 8,
    name: "PUT Saved Albums for Current User",
    description: "PUT /v1/me/albums",
    image: svAlbumsForCurUser,
    category: "backend",
    markdown: `
## 🎤 Save Albums for Current User

Save one or more albums to the current user's library.

---

### 🔗 Endpoint
\`PUT https://api.spotify.com/v1/me/albums\`

---

### 📥 Request

#### Method
\`PUT\`

#### Body (JSON)
\`\`\`json
{
  "ids": ["1A2GTWGt2Z2Z2Z2Z2Z2Z2Z2", "2B3GTWGt2Z2Z2Z2Z2Z2Z2Z2"]
}
\`\`\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns an array of boolean values indicating whether each album was successfully saved:
- \`true\`: Album was saved
- \`false\`: Album was not saved

---

### ✅ Example Response

\`\`\`json
[
  true,
  false
]
\`\`\`

---

### 📎 Notes
- Requires a valid **access token** with proper scopes.
`,
  },
  {
    id: 9,
    name: "DELETE User Saved Albums",
    description: "DELETE /v1/me/albums",
    image: removeUserSvAlbums,
    category: "backend",
    markdown: `
## 🎤 Delete User Saved Albums

Remove one or more albums from the current user's library.

---

### 🔗 Endpoint
\`DELETE https://api.spotify.com/v1/me/albums\`

---

### 📥 Request

#### Method
\`DELETE\`

#### Body (JSON)
\`\`\`json
{
  "ids": ["1A2GTWGt2Z2Z2Z2Z2Z2Z2Z2", "2B3GTWGt2Z2Z2Z2Z2Z2Z2Z2"]
}
\`\`\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns an array of boolean values indicating whether each album was successfully removed:
- \`true\`: Album was removed
- \`false\`: Album was not removed

---

### ✅ Example Response

\`\`\`json
[
  true,
  false
]
\`\`\`

---

### 📎 Notes
- Requires a valid **access token** with proper scopes.
`,
  },
  {
    id: 10,
    name: "POST Create Playlist",
    description: "POST /v1/users/{user_id}/playlists",
    image: createPlaylist,
    category: "backend",
    markdown: `
## 🎤 Create Playlist

Create a new playlist for a user.

---

### 🔗 Endpoint
\`POST https://api.spotify.com/v1/users/{user_id}/playlists\`

---

### 📥 Request

#### Method
\`POST\`

#### Body (JSON)
\`\`\`json
{
  "name": "New Playlist",
  "description": "My new playlist",
  "public": false
}
\`\`\`

---

### 📤 Response

#### Status
\`201 Created\`

#### Body (JSON)
Returns the created playlist object, containing:
- \`id\`: Playlist ID
- \`name\`: Playlist name
- \`description\`: Playlist description
- \`public\`: Whether the playlist is public
- \`tracks\`: Array of track objects
- and more...

---

### ✅ Example Response

\`\`\`json
{
  "id": "3cEYpjA9oz9GiPac4AsH5",
  "name": "New Playlist",
  "description": "My new playlist",
  "public": false,
  "tracks": []
}
\`\`\`

---

### 📎 Notes
- Requires a valid **access token** with proper scopes.
`,
  },
  {
    id: 11,
    name: "GET Playlists",
    description: "GET /v1/users/{user_id}/playlists",
    image: getPlaylists,
    category: "backend",
    markdown: `
## 🎤 Get User Playlists

Retrieve a list of playlists owned or followed by the current user.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/users/{user_id}/playlists\`

---

### 📥 Request

#### Method
\`GET\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns an array of playlist objects, each containing:
- \`id\`: Playlist ID
- \`name\`: Playlist name
- \`description\`: Playlist description
- \`public\`: Whether the playlist is public
- \`tracks\`: Array of track objects
- and more...

---

### ✅ Example Response

\`\`\`json
[
  {
    "id": "3cEYpjA9oz9GiPac4AsH5",
    "name": "My Playlist",
    "description": "My favorite songs",
    "public": false,
    "tracks": []
  }
]
\`\`\`

---

### 📎 Notes
- Requires a valid **access token** with proper scopes.
`,
  },
  {
    id: 12,
    name: "POST Add Item to Playlists",
    description: "POST /v1/playlists/{playlist_id}/tracks",
    image: addItemToPlaylists,
    category: "backend",
    markdown: `
## 🎤 Add Item to Playlist

Add one or more tracks to a playlist.

---

### 🔗 Endpoint
\`POST https://api.spotify.com/v1/playlists/{playlist_id}/tracks\`

---

### 📥 Request

#### Method
\`POST\`

#### Path Parameters
| Parameter      | Type   | Required | Description                |
|----------------|--------|----------|----------------------------|
| \`playlist_id\` | string | ✅ Yes   | The Spotify ID for the playlist. |

#### Body (JSON)
\`\`\`json
{
  "uris": [
    "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    "spotify:track:1301WleyT98MSxVHPZCA6M"
  ],
  "position": 0
}
\`\`\`

- \`uris\`: Array of Spotify track URIs to add.
- \`position\` (optional): The position to insert the tracks.

---

### 📤 Response

#### Status
\`201 Created\`

#### Body (JSON)
Returns a snapshot ID for the playlist:
\`\`\`json
{
  "snapshot_id": "MTgsM2M4YjA2YjA0YjA2YjA0YjA2YjA0YjA2YjA0YjA2YjA0YjA2YjA0"
}
\`\`\`

---

### 📎 Notes
- Requires a valid **access token** with proper scopes.
- Maximum of 100 tracks per request.
`,
  },
  {
    id: 13,
    name: "PUT Update Playlist Items",
    description: "PUT /v1/playlists/{playlist_id}/tracks",
    image: updatePlaylistItems,
    category: "backend",
    markdown: `
## 🎤 Update Playlist Items

Replace all the items in a playlist with new tracks.

---

### 🔗 Endpoint
\`PUT https://api.spotify.com/v1/playlists/{playlist_id}/tracks\`

---

### 📥 Request

#### Method
\`PUT\`

#### Path Parameters
| Parameter     | Type   | Required | Description                      |
|---------------|--------|----------|----------------------------------|
| \`playlist_id\` | string | ✅ Yes    | The Spotify ID of the playlist. |

#### Body (JSON)

\`\`\`json
{
  "uris": [
    "spotify:track:7ouMYWpwJ422jRcDASZB7P",
    "spotify:track:4iV5W9uYEdYUVa79Axb7Rh"
  ]
}
\`\`\`
- \`uris\`: Array of Spotify track URIs to replace the current items in the playlist.`,
  },
  {
    id: 14,
    name: "PUT Change Playlist Items",
    description: "PUT /v1/playlists/{playlist_id}/tracks",
    image: changePlaylistItems,
    category: "backend",
    markdown: `## 🎤 Change Playlist Items

Change the order of items in a playlist.

---

### 🔗 Endpoint
\`PUT https://api.spotify.com/v1/playlists/{playlist_id}/tracks\`

---

### 📥 Request

#### Method
\`PUT\`

#### Path Parameters
| Parameter     | Type   | Required | Description                      |
|---------------|--------|----------|----------------------------------|
| \`playlist_id\` | string | ✅ Yes    | The Spotify ID of the playlist. |

#### Body (JSON)

\`\`\`json
{
  "uris": [
    "spotify:track:7ouMYWpwJ422jRcDASZB7P",
    "spotify:track:4iV5W9uYEdYUVa79Axb7Rh"
  ]
}
\`\`\`
- \`uris\`: Array of Spotify track URIs to change the order of the current items in the playlist.`,
  },
  {
    id: 15,
    name: "DELETE Remove Playlist Items",
    description: "DELETE /v1/playlists/{playlist_id}/tracks",
    image: removePlaylistItems,
    category: "backend",
    markdown: `## 🎤 Remove Playlist Items

Remove one or more tracks from a playlist.

---

### 🔗 Endpoint
\`DELETE https://api.spotify.com/v1/playlists/{playlist_id}/tracks\`

---

### 📥 Request

#### Method
\`DELETE\`

#### Path Parameters
| Parameter      | Type   | Required | Description                |
|----------------|--------|----------|----------------------------|
| \`playlist_id\` | string | ✅ Yes   | The Spotify ID for the playlist. |

#### Body (JSON)
\`\`\`json
{
  "tracks": [
    {
      "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh"
    },
    {
      "uri": "spotify:track:1301WleyT98MSxVHPZCA6M"
    }
  ]
}
\`\`\`

- \`tracks\`: Array of objects containing the Spotify track URIs to remove.

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns a snapshot ID for the playlist:
\`\`\`json
{
  "snapshot_id": "MTgsM2M4YjA2YjA0YjA2YjA0YjA2YjA0YjA2YjA0YjA2YjA0YjA2YjA0"
}
\`\`\`

---

### 📎 Notes
- Requires a valid **access token** with proper scopes.
- Maximum of 100 tracks per request.
`,
  },
  {
    id: 16,
    name: "GET Search Album",
    description: "GET /v1/search?type=album&q={query}",
    image: searchAlbum,
    category: "backend",
    markdown: `
## 🎤 Search Album

Search for an album by its name.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/search?type=album&q={query}\`

---

### 📥 Request

#### Method
\`GET\`

#### Query Parameters
| Parameter | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| \`q\`     | string | ✅ Yes   | The search query (album name). |

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns a list of albums matching the search query:
\`\`\`json
{
  "albums": {
    "items": [
      {
        "id": "1",
        "name": "Album 1",
        "artists": [
          {
            "id": "1",
            "name": "Artist 1"
          }
        ]
      }
    ]
  }
}
\`\`\`
`,
  },
  {
    id: 17,
    name: "GET Search Artist",
    description: "GET /v1/search?type=artist&q={query}",
    image: searchArtist,
    category: "backend",
    markdown: `
## 🎤 Search Artist

Search for an artist by their name.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/search?type=artist&q={query}\`

---

### 📥 Request

#### Method
\`GET\`

#### Query Parameters
| Parameter | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| \`q\`     | string | ✅ Yes   | The search query (artist name). |

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns a list of artists matching the search query:
\`\`\`json
{
  "artists": {
    "items": [
      {
        "id": "1",
        "name": "Artist 1",
        "albums": [
          {
            "id": "1",
            "name": "Album 1"
          }
        ]
      }
    ]
  }
}
\`\`\`
`,
  },
  {
    id: 18,
    name: "GET Search Playlist",
    description: "GET /v1/search?type=playlist&q={query}",
    image: searchPlaylist,
    category: "backend",
    markdown: `
## 🎤 Search Playlist

Search for a playlist by its name.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/search?type=playlist&q={query}\`

---

### 📥 Request

#### Method
\`GET\`

#### Query Parameters
| Parameter | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| \`q\`     | string | ✅ Yes   | The search query (playlist name). |

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns a list of playlists matching the search query:
\`\`\`json
{
  "playlists": {
    "items": [
      {
        "id": "1",
        "name": "Playlist 1",
        "owner": {
          "id": "1",
          "name": "User 1"
        }
      }
    ]
  }
}
\`\`\`
`,
  },
  {
    id: 19,
    name: "GET Search Track",
    description: "GET /v1/search?type=track&q={query}",
    image: searchTrack,
    category: "backend",
    markdown: `## 🎤 Search Track

Search for a track by its name.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/search?type=track&q={query}\`

---

### 📥 Request

#### Method
\`GET\`

#### Query Parameters
| Parameter | Type   | Required | Description                |
|-----------|--------|----------|----------------------------|
| \`q\`     | string | ✅ Yes   | The search query (track name). |

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns a list of tracks matching the search query:
\`\`\`json
{
  "tracks": {
    "items": [
      {
        "id": "1",
        "name": "Track 1",
        "artists": [
          {
            "id": "1",
            "name": "Artist 1"
          }
        ]
      }
    ]
  }
}
\`\`\`
`,
  },
  {
    id: 20,
    name: "GET Several Browse Categories",
    description: "GET /v1/browse/categories",
    image: severalBrowseCategories,
    category: "backend",
    markdown: `
## 🎤 Get Several Browse Categories

Get a list of categories used to tag items in Spotify (such as albums, artists, or playlists).

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/browse/categories\`

---

### 📥 Request

#### Method
\`GET\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns a list of categories:
\`\`\`json
{
  "categories": {
    "items": [
      {
        "id": "1",
        "name": "Category 1"
      }
    ]
  }
}
\`\`\`
`,
  },
  {
    id: 21,
    name: "GET Single Browse Category",
    description: "GET /v1/browse/categories/{category_id}",
    image: singleBrowseCategory,
    category: "backend",
    markdown: `
## 🎤 Get Single Browse Category

Get a single category used to tag items in Spotify (such as albums, artists, or playlists).

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/browse/categories/{category_id}\`

---

### 📥 Request

#### Method
\`GET\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns a single category:
\`\`\`json
{
  "category": {
    "id": "1",
    "name": "Category 1"
  }
}
\`\`\`
`,
  },
  {
    id: 22,
    name: "GET Check If Current User Follows Playlist",
    description: "GET /v1/playlists/{playlist_id}/followers/contains",
    image: checkIfCurUserFollowPlaylist,
    category: "backend",
    markdown: `
## 🎤 Check If Current User Follows Playlist

Check if the current user follows a specific playlist.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/playlists/{playlist_id}/followers/contains\`

---

### 📥 Request

#### Method
\`GET\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns a boolean indicating whether the current user follows the playlist:
\`\`\`json
{
  "is_following": true
}
\`\`\`
`,
  },
  {
    id: 23,
    name: "GET Check If User Follows Artist or User",
    description: "GET /v1/artists/{id}/followers/contains",
    image: checkIfUserFollowArtistOrUser,
    category: "backend",
    markdown: `
## 🎤 Check If User Follows Artist or User

Check if the current user follows a specific artist or user.

---

### 🔗 Endpoint
\`GET https://api.spotify.com/v1/artists/{id}/followers/contains\`

---

### 📥 Request

#### Method
\`GET\`

---

### 📤 Response

#### Status
\`200 OK\`

#### Body (JSON)
Returns a boolean indicating whether the current user follows the artist or user:
\`\`\`json
{
  "is_following": true
}
\`\`\`
`,
  },
  {
    id: 24,
    name: "DELETE Unfollow Artist or User",
    description: "DELETE /v1/me/following?type=artist&ids={ids}",
    image: unfollowArtistOrUser,
    category: "backend",
    markdown: `
## 🎤 Unfollow Artist or User

Unfollow a specific artist or user.

---
### 🔗 Endpoint
\`DELETE https://api.spotify.com/v1/me/following?type=artist&ids={ids}\`
---
### 📥 Request
#### Method
\`DELETE\`
---
### 📤 Response
#### Status
\`204 No Content\`
---
`,
  },
  {
    id: 25,
    name: "GET Follow Artist or User",
    description: "GET /v1/me/following?type=artist&ids={ids}",
    image: followArtistOrUser,
    category: "backend",
    markdown: `
## 🎤 Follow Artist or User

Follow a specific artist or user.

---
### 🔗 Endpoint
\`GET https://api.spotify.com/v1/me/following?type=artist&ids={ids}\`
---
### 📥 Request
#### Method
\`GET\`
---
### 📤 Response
#### Status
\`204 No Content\`
---
`,
  },
  {
    id: 26,
    name: "GET Follow Artists",
    description: "GET /v1/me/following?type=artist&after={after}&limit={limit}",
    image: followArtists,
    category: "backend",
    markdown: `
## 🎤 Get Follow Artists

Get a list of artists that the current user is following.

---
### 🔗 Endpoint
\`GET https://api.spotify.com/v1/me/following?type=artist&after={after}&limit={limit}\`
---
### 📥 Request
#### Method
\`GET\`
---
### 📤 Response
#### Status
\`200 OK\`
---
#### Body (JSON)
Returns a list of artists that the current user is following:
\`\`\`json
{
  "artists": {
    "items": [
      {
        "id": "1",
        "name": "Artist 1"
      }
    ]
  }
}
\`\`\`
`,
  },
  {
    id: 27,
    name: "DELETE Unfollow Playlist",
    description: "DELETE /v1/me/following?type=playlist&ids={ids}",
    image: unfollowPlaylist,
    category: "backend",
    markdown: `
## 🎤 Unfollow Playlist

Unfollow a specific playlist.

---
### 🔗 Endpoint
\`DELETE https://api.spotify.com/v1/me/following?type=playlist&ids={ids}\`
---
### 📥 Request
#### Method
\`DELETE\`
---
### 📤 Response
#### Status
\`204 No Content\`
---
`,
  },
  {
    id: 28,
    name: "GET Follow Playlists",
    description:
      "GET /v1/me/following?type=playlist&after={after}&limit={limit}",
    image: followPlaylist,
    category: "backend",
    markdown: `## 🎤 Get Follow Playlists

Get a list of playlists that the current user is following.

---
### 🔗 Endpoint
\`GET https://api.spotify.com/v1/me/following?type=playlist&after={after}&limit={limit}\`
---
### 📥 Request
#### Method
\`GET\`
---
### 📤 Response
#### Status
\`200 OK\`
---
#### Body (JSON)
Returns a list of playlists that the current user is following:
\`\`\`json
{
  "playlists": {
    "items": [
      {
        "id": "1",
        "name": "Playlist 1"
      }
    ]
  }
}
\`\`\``,
  },
  {
    id: 29,
    name: "GET Current User Profile",
    description: "GET /v1/me",
    image: getCurUserProfile,
    category: "backend",
    markdown: `
## 🎤 Get Current User Profile

Get the current user's profile information.

---
### 🔗 Endpoint
\`GET https://api.spotify.com/v1/me\`
---
### 📥 Request
#### Method
\`GET\`
---
### 📤 Response
#### Status
\`200 OK\`
---
#### Body (JSON)
Returns the current user's profile information:
\`\`\`json
{
  "id": "1",
  "name": "User 1"
}
\`\`\`
`,
  },
  {
    id: 30,
    name: "GET Several Browse Categories",
    description: "GET /v1/browse/categories",
    image: severalBrowseCategories,
    category: "backend",
    markdown: `
## 🎤 Get Several Browse Categories

Get a list of categories available for browsing.

---
### 🔗 Endpoint
\`GET https://api.spotify.com/v1/browse/categories\`
---
### 📥 Request
#### Method
\`GET\`
---
### 📤 Response
#### Status
\`200 OK\`
---
#### Body (JSON)
Returns a list of categories available for browsing:
\`\`\`json
{
  "categories": {
    "items": [
      {
        "id": "1",
        "name": "Category 1"
      }
    ]
  }
}
\`\`\`
`,
  },
  {
    id: 31,
    name: "GET Single Browse Category",
    description: "GET /v1/browse/categories/{category_id}",
    image: singleBrowseCategory,
    category: "backend",
    markdown: `
## 🎤 Get Single Browse Category

Get a single category available for browsing.

---
### 🔗 Endpoint
\`GET https://api.spotify.com/v1/browse/categories/{category_id}\`
---
### 📥 Request
#### Method
\`GET\`
---
### 📤 Response
#### Status
\`200 OK\`
---
#### Body (JSON)
Returns a single category available for browsing:
\`\`\`json
{
  "category": {
    "id": "1",
    "name": "Category 1"
  }
}
\`\`\`
`,
  },
  {
    id: 32,
    name: "PyTest Selenium",
    description: "PyTest tests for Selenium-based web applications.",
    image: pytestSelenium,
    category: "frontend",
    spreadsheetUrl:
      "https://docs.google.com/spreadsheets/u/1/d/1Xln0GNvyFPItPvKSPT5u2_59CsOZeyXE3aYpE7ZynkM/edit?gid=0#gid=0",
  },
];
