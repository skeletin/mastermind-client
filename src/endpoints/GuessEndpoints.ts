const API = import.meta.env.VITE_BACKEND_URL;
import axios from "axios";
import humps from "humps";

export default {
  async makeGuess(newGuess: NewGuess): Promise<Guess | null> {
    try {
      return (
        await axios.post<ResponseEntity<Guess>>(
          API + "/api/v1/guesses/create",
          { guess: humps.decamelizeKeys(newGuess) },
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
