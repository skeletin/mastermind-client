declare global {
  interface ResponseEntity<T> {
    data: T;
    message: string;
    status: "error" | "success";
    errors: "" | [];
  }
}
export {};
