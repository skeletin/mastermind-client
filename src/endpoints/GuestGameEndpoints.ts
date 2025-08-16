const API = "http://localhost:3000";
import axios from "axios";

export default {
  async getOrCreateGame(): Promise<Game | null> {
    try {
      const sessionId = localStorage.getItem("sessionId");
      const data = (
        await axios.get<ResponseEntity<Game>>(
          API + "/api/v1/guest_games/find_or_create/" + sessionId
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
};
