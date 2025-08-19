const API = import.meta.env.VITE_BACKEND_URL;
import axios from "axios";

export default {
  async register(newUser: NewUser): Promise<string | null> {
    try {
      return (
        await axios.post<ResponseEntity<string>>(
          API + "/api/v1/auth/register",
          { user: newUser }
        )
      ).data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // ✅ ensures a value is always returned
    }
  },

  async login(credentials: Credentials): Promise<string | null> {
    try {
      return (
        await axios.post<ResponseEntity<string>>(API + "/api/v1/auth/login", {
          user: credentials,
        })
      ).data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // ✅ ensures a value is always returned
    }
  },

  async isLoggedIn(): Promise<AuthUser | null> {
    try {
      const data = (
        await axios.get<ResponseEntity<AuthUser>>(
          API + "/api/v1/auth/is_logged_in",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
      ).data.data;

      return data;
    } catch (error) {
      if (error.status === 403) {
        console.error("Not Authenticated");
      }
      return null; // ✅ ensures a value is always returned
    }
  },
};
