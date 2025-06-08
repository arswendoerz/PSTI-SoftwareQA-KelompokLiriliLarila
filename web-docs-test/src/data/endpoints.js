import loginImage from "../assets/artists-api.png";
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

export const endpoints = [
  {
    id: 1,
    name: "Login Page Test",
    description: "Test results for the login UI behavior.",
    image: loginImage,
    category: "frontend",
    markdown: `
## Hasil Uji Login Page

- 🟢 UI login berhasil tampil di semua ukuran layar.
- 🟢 Validasi email dan password bekerja dengan baik.
- 🔴 Tidak ada animasi transisi ketika berpindah halaman.

### Rekomendasi
Tambahkan animasi atau loading saat login untuk pengalaman pengguna yang lebih baik.
`,
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
  },
  {
    id: 4,
    name: "Auth Middleware Test",
    description:
      "PUT /auth Ensures authentication logic is enforced on secure routes.",
    image: checkUserSavedAlbums,
    category: "backend",
  },
  {
    id: 5,
    name: "GET New Releases",
    description: "GET /v1/albums/new-releases",
    image: newRelease,
    category: "backend",
  },
  {
    id: 6,
    name: "GET User Saved Albums",
    description: "GET /v1/me/albums",
    image: userSaveAlbums,
    category: "backend",
  },
  {
    id: 7,
    name: "GET Albums",
    description: "GET /v1/albums/{id}",
    image: getAlbums,
    category: "backend",
  },
  {
    id: 8,
    name: "PUT Saved Albums for Current User",
    description: "PUT /v1/me/albums",
    image: svAlbumsForCurUser,
    category: "backend",
  },
  {
    id: 9,
    name: "DELETE User Saved Albums",
    description: "DELETE /v1/me/albums",
    image: removeUserSvAlbums,
    category: "backend",
  },
  {
    id: 10,
    name: "POST Create Playlist",
    description: "POST /v1/users/{user_id}/playlists",
    image: createPlaylist,
    category: "backend",
  },
  {
    id: 11,
    name: "GET Playlists",
    description: "GET /v1/users/{user_id}/playlists",
    image: getPlaylists,
    category: "backend",
  },
  {
    id: 12,
    name: "POST Add Item to Playlists",
    description: "POST /v1/playlists/{playlist_id}/tracks",
    image: addItemToPlaylists,
    category: "backend",
  },
  {
    id: 13,
    name: "PUT Update Playlist Items",
    description: "PUT /v1/playlists/{playlist_id}/tracks",
    image: updatePlaylistItems,
    category: "backend",
  },
  {
    id: 14,
    name: "PUT Change Playlist Items",
    description: "PUT /v1/playlists/{playlist_id}/tracks",
    image: changePlaylistItems,
    category: "backend",
  },
  {
    id: 15,
    name: "Form Input Component",
    description: "Tests for input state, validation and error messages.",
    image: removePlaylistItems,
    category: "backend",
  },
  {
    id: 16,
    name: "Payment API Simulation",
    description:
      "DELETE /Simulated transactions and endpoint testing for /payments.",
    image: svAlbumsForCurUser,
    category: "backend",
  },
  {
    id: 17,
    name: "Search Feature Test",
    description: "UI response and result display for search interactions.",
    image: svAlbumsForCurUser,
    category: "frontend",
  },
  {
    id: 18,
    name: "User Controller Test",
    description: "Backend unit testing for user management logic.",
    image: createPlaylist,
    category: "backend",
  },
  {
    id: 19,
    name: "Theme Switcher Testing",
    description: "Tests for dark/light mode toggle behavior.",
    image: getPlaylists,
    category: "backend",
  },
  {
    id: 20,
    name: "Database Connection Test",
    description: "Ensures DB connections and failover logic.",
    image: addItemToPlaylists,
    category: "backend",
  },
  {
    id: 21,
    name: "Toast Notification UI",
    description: "Check notification trigger and display logic.",
    image: updatePlaylistItems,
    category: "frontend",
  },
  {
    id: 22,
    name: "JWT Token Handling",
    description: "Tests for generating and validating JWT tokens.",
    image: changePlaylistItems,
    category: "backend",
  },
  {
    id: 23,
    name: "Form Input Component",
    description: "Tests for input state, validation and error messages.",
    image: checkUserSavedAlbums,
    category: "frontend",
  },
];
