CREATE TABLE "address_history" (
	"id" serial PRIMARY KEY NOT NULL,
	"address_text" text NOT NULL,
	"longitude" double precision NOT NULL,
	"latitude" double precision NOT NULL,
	"last_used" timestamp DEFAULT now() NOT NULL
);
