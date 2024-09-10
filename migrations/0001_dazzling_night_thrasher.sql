ALTER TABLE "comments" ALTER COLUMN "upvotes" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "comments" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN "downvotes" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "messages" ADD COLUMN "user_id" integer;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "upvotes" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "downvotes" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "messages" ADD CONSTRAINT "messages_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN IF EXISTS "votes";