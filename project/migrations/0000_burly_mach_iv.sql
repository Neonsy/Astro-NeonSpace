CREATE TABLE `author` (
	`name` text PRIMARY KEY NOT NULL,
	`icon` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `author_name_idx` ON `author` (`name`);--> statement-breakpoint
CREATE TABLE `post_tags` (
	`post_created_at` text NOT NULL,
	`tag_name` text NOT NULL,
	PRIMARY KEY(`post_created_at`, `tag_name`),
	FOREIGN KEY (`post_created_at`) REFERENCES `posts`(`created_at`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`tag_name`) REFERENCES `tags`(`name`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `post_tag_post_idx` ON `post_tags` (`post_created_at`);--> statement-breakpoint
CREATE INDEX `post_tag_tag_idx` ON `post_tags` (`tag_name`);--> statement-breakpoint
CREATE TABLE `posts` (
	`title` text NOT NULL,
	`description` text NOT NULL,
	`content` text NOT NULL,
	`created_at` text PRIMARY KEY NOT NULL,
	`updated_at` text NOT NULL,
	`author_name` text,
	FOREIGN KEY (`author_name`) REFERENCES `author`(`name`) ON UPDATE no action ON DELETE no action,
	CONSTRAINT "title_length" CHECK(LENGTH("posts"."title") BETWEEN 5 AND 100),
	CONSTRAINT "content_length" CHECK(LENGTH("posts"."content") BETWEEN 100 AND 10000)
);
--> statement-breakpoint
CREATE INDEX `post_author_idx` ON `posts` (`author_name`);--> statement-breakpoint
CREATE INDEX `post_created_idx` ON `posts` (`created_at`);--> statement-breakpoint
CREATE TABLE `tags` (
	`name` text PRIMARY KEY NOT NULL,
	CONSTRAINT "valid_tags" CHECK("tags"."name" IN ('javascript', 'typescript', 'webdev', 'tutorial', 'ai'))
);
--> statement-breakpoint
CREATE INDEX `tag_name_idx` ON `tags` (`name`);