const API = import.meta.env.VITE_BACKEND_URL;
import axios from "axios";
import humps from "humps";

export default {
  async createGame(newGame: NewGame): Promise<Game | null> {
    try {
      return (
        await axios.post<ResponseEntity<Game>>(
          API + "/api/v1/games/create",
          { game: humps.decamelizeKeys(newGame) },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
      ).data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // ✅ ensures a value is always returned
    }
  },

  async getGame(userId: string): Promise<Game | null> {
    try {
      return (
        await axios.get<ResponseEntity<Game>>(API + "/api/v1/games/" + userId, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
      ).data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // ✅ ensures a value is always returned
    }
  },

  async quitGame(gameId: string | undefined): Promise<Game | null> {
    try {
      return (
        await axios.delete<ResponseEntity<Game>>(
          API + "/api/v1/games/" + gameId,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
      ).data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // ✅ ensures a value is always returned
    }
  },
};
