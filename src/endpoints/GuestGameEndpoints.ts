const API = import.meta.env.VITE_BACKEND_URL;
import axios from "axios";

export default {
  async getOrCreateGame(): Promise<Game | null> {
    try {
      const sessionId = localStorage.getItem("sessionId");
      const data = (
        await axios.get<ResponseEntity<Game>>(
          API + "/api/v1/guest_games/find/" + sessionId
        )
      ).data.data;
      if (data.userId) localStorage.setItem("sessionId", data.userId);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // ✅ ensures a value is always returned
    }
  },

  async makeGuess(guess: NewGuess): Promise<Guess | null> {
    try {
      const sessionId = localStorage.getItem("sessionId");
      const data = (
        await axios.post<ResponseEntity<Guess>>(
          API + "/api/v1/guest_games/guess/" + sessionId,
          { guess }
        )
      ).data.data;

      return data;
    } catch (error) {
      console.error("Error posting data:", error);
      return null; // ✅ ensures a value is always returned
    }
  },

  async endGame(): Promise<boolean | null> {
    try {
      const sessionId = localStorage.getItem("sessionId");
      localStorage.removeItem("sessionId");
      return (
        await axios.delete<ResponseEntity<boolean>>(
          API + "/api/v1/guest_games/" + sessionId
        )
      ).data.data;
    } catch (error) {
      console.error("Error posting data:", error);
      return null; // ✅ ensures a value is always returned
    }
  },
};
