import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_locations_fk";
  
  DROP INDEX IF EXISTS "locations_email_idx";
  DROP INDEX IF EXISTS "payload_preferences_rels_locations_id_idx";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "email";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "reset_password_token";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "reset_password_expiration";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "salt";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "hash";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "login_attempts";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "lock_until";
  ALTER TABLE "payload_preferences_rels" DROP COLUMN IF EXISTS "locations_id";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "locations" ADD COLUMN "email" varchar NOT NULL;
  ALTER TABLE "locations" ADD COLUMN "reset_password_token" varchar;
  ALTER TABLE "locations" ADD COLUMN "reset_password_expiration" timestamp(3) with time zone;
  ALTER TABLE "locations" ADD COLUMN "salt" varchar;
  ALTER TABLE "locations" ADD COLUMN "hash" varchar;
  ALTER TABLE "locations" ADD COLUMN "login_attempts" numeric DEFAULT 0;
  ALTER TABLE "locations" ADD COLUMN "lock_until" timestamp(3) with time zone;
  ALTER TABLE "payload_preferences_rels" ADD COLUMN "locations_id" integer;
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_locations_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "locations_email_idx" ON "locations" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_locations_id_idx" ON "payload_preferences_rels" USING btree ("locations_id");`)
}
