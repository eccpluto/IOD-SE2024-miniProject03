
# Design

## Base design

- MVC architecture will be used, except a view is not required due to being a pure backend service.
- .env alongside the dotenv package will be used to povide environment variables for Mongoose to connect to the MongoDB database.

## Models

- Models will provide schemas for documents into their respective collections in the MongoDB database.
    -   **example:** Model / Schema: "user"  -> enforces document in -> Collection / Table: "users"
- Models will define schemas based on the vendor api that we consume, including their relationships and data types.