CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"parent_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"post_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"parent_id" integer,
	"content" text NOT NULL,
	"upvotes" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "communities" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"name" text NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"subscribers" integer NOT NULL,
	"online_members" integer NOT NULL,
	"members" integer NOT NULL,
	"rules" text NOT NULL,
	"rank" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"icon_img" text,
	"banner_img" text,
	"public_description" text,
	"type" text NOT NULL,
	"over_18" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"avatar" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"message" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar(255) NOT NULL,
	"message" text NOT NULL,
	"post_title" varchar(255) NOT NULL,
	"post_link" varchar(255) NOT NULL,
	"comment_snippet" text,
	"created_at" timestamp DEFAULT now(),
	"is_read" boolean NOT NULL,
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"community_id" integer NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"image" text,
	"aspect_ratio" text,
	"votes" integer NOT NULL,
	"comments" integer NOT NULL,
	"is_awarded" boolean NOT NULL,
	"is_favourited" boolean NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"tags" jsonb,
	"flair" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"default_set" boolean NOT NULL,
	"user_is_contributor" boolean NOT NULL,
	"banner_img" text,
	"banner_width" integer[2],
	"user_is_banned" boolean NOT NULL,
	"community_icon" text,
	"show_media" boolean NOT NULL,
	"avatar" text NOT NULL,
	"display_name" text NOT NULL,
	"title" text,
	"coins" integer NOT NULL,
	"over_18" boolean NOT NULL,
	"description" text,
	"public_description" text,
	"subscribers" integer NOT NULL,
	"is_default_banner" boolean NOT NULL,
	"is_default_icon" boolean NOT NULL,
	"profile_type" text NOT NULL,
	"is_subscriber" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"link_karma" integer NOT NULL,
	"comment_karma" integer NOT NULL,
	"is_gold" boolean NOT NULL,
	"is_mod" boolean NOT NULL,
	"has_verified_email" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "communities" ADD CONSTRAINT "communities_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_community_id_communities_id_fk" FOREIGN KEY ("community_id") REFERENCES "public"."communities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
