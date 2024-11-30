import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_hotels_category" AS ENUM('2-star', '3-star', '4-star', '5-star');
  CREATE TYPE "public"."enum_tours_currency" AS ENUM('USD', 'EUR', 'GBP', 'LKR');
  CREATE TYPE "public"."enum_activities_type" AS ENUM('adventure', 'fun', 'romantic');
  CREATE TYPE "public"."enum_activities_suitable_for" AS ENUM('kids', 'adults', 'elders', 'infants');
  CREATE TYPE "public"."enum_transports_type" AS ENUM('luxury', 'cheap', 'public_transport');
  CREATE TYPE "public"."enum_tour_itineraries_blocks_itinerary_details_day" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10');
  CREATE TYPE "public"."enum_tour_itineraries_blocks_flight_event_operator" AS ENUM('srilankan_airlines', 'cinnamon_air', 'fitsair', 'helitours', 'iraqi_airways', 'kuwait_airways', 'qatar_airways', 'saudi_arabian_airlines', 'singapore_airlines', 'turkish_airlines');
  CREATE TYPE "public"."enum_tour_itineraries_blocks_hotel_event_type" AS ENUM('checkin', 'checkout');
  CREATE TABLE IF NOT EXISTS "locations_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "hotels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"location_id" integer,
  	"address" varchar,
  	"description" varchar,
  	"category" "enum_hotels_category",
  	"thumbnail_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "hotels_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"hotel_facilities_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "tour_highlights" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar,
  	"icon" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "tour_themes" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "tours" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"customizable" boolean DEFAULT true,
  	"summary" varchar,
  	"description" jsonb,
  	"duration_nights" numeric NOT NULL,
  	"visa_included" boolean,
  	"visa_price" numeric,
  	"currency" "enum_tours_currency" DEFAULT 'LKR',
  	"base_price_child" numeric NOT NULL,
  	"base_price_adult" numeric NOT NULL,
  	"price_range" varchar,
  	"availability_start" timestamp(3) with time zone,
  	"availability_end" timestamp(3) with time zone,
  	"flight_included" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "tours_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tour_themes_id" integer,
  	"locations_id" integer,
  	"tour_highlights_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "activities_suitable_for" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_activities_suitable_for",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "activities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"summary" varchar,
  	"description" jsonb,
  	"location_id" integer,
  	"type" "enum_activities_type",
  	"duration" numeric,
  	"thumbnail_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "activities_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "transports" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"type" "enum_transports_type",
  	"thumbnail_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "transports_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "tour_itineraries_blocks_flight_event" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"operator" "enum_tour_itineraries_blocks_flight_event_operator" NOT NULL,
  	"departure_time" timestamp(3) with time zone,
  	"arrival_time" timestamp(3) with time zone,
  	"next_day_arrival" boolean DEFAULT false,
  	"check_baggage_allowance" numeric,
  	"hand_baggage_allowance" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "tour_itineraries_blocks_hotel_event_alternatives" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"additional_cost" numeric DEFAULT 0
  );
  
  CREATE TABLE IF NOT EXISTS "tour_itineraries_blocks_hotel_event" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"type" "enum_tour_itineraries_blocks_hotel_event_type",
  	"time" timestamp(3) with time zone,
  	"changeable" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "tour_itineraries_blocks_activity_event_alternatives" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"additional_cost" numeric DEFAULT 0
  );
  
  CREATE TABLE IF NOT EXISTS "tour_itineraries_blocks_activity_event" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"time" timestamp(3) with time zone,
  	"duration" numeric,
  	"changeable" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "tour_itineraries_blocks_transport_event_alternatives" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"additional_cost" numeric DEFAULT 0
  );
  
  CREATE TABLE IF NOT EXISTS "tour_itineraries_blocks_transport_event" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"time" timestamp(3) with time zone,
  	"changeable" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "tour_itineraries_blocks_itinerary_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"day" "enum_tour_itineraries_blocks_itinerary_details_day" NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "tour_itineraries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"tour_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "tour_itineraries_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"hotels_id" integer,
  	"activities_id" integer,
  	"transports_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "hotel_facilities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar,
  	"icon" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "locations" ADD COLUMN "thumbnail_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "hotels_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "tour_highlights_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "tour_themes_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "tours_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "activities_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "transports_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "tour_itineraries_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "hotel_facilities_id" integer;
  DO $$ BEGIN
   ALTER TABLE "locations_rels" ADD CONSTRAINT "locations_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "locations_rels" ADD CONSTRAINT "locations_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hotels" ADD CONSTRAINT "hotels_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hotels" ADD CONSTRAINT "hotels_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hotels_rels" ADD CONSTRAINT "hotels_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."hotels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hotels_rels" ADD CONSTRAINT "hotels_rels_hotel_facilities_fk" FOREIGN KEY ("hotel_facilities_id") REFERENCES "public"."hotel_facilities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hotels_rels" ADD CONSTRAINT "hotels_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tours_rels" ADD CONSTRAINT "tours_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."tours"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tours_rels" ADD CONSTRAINT "tours_rels_tour_themes_fk" FOREIGN KEY ("tour_themes_id") REFERENCES "public"."tour_themes"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tours_rels" ADD CONSTRAINT "tours_rels_locations_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tours_rels" ADD CONSTRAINT "tours_rels_tour_highlights_fk" FOREIGN KEY ("tour_highlights_id") REFERENCES "public"."tour_highlights"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "activities_suitable_for" ADD CONSTRAINT "activities_suitable_for_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "activities" ADD CONSTRAINT "activities_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "activities" ADD CONSTRAINT "activities_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "activities_rels" ADD CONSTRAINT "activities_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "activities_rels" ADD CONSTRAINT "activities_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "transports" ADD CONSTRAINT "transports_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "transports_rels" ADD CONSTRAINT "transports_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."transports"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "transports_rels" ADD CONSTRAINT "transports_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_blocks_flight_event" ADD CONSTRAINT "tour_itineraries_blocks_flight_event_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tour_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_blocks_hotel_event_alternatives" ADD CONSTRAINT "tour_itineraries_blocks_hotel_event_alternatives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tour_itineraries_blocks_hotel_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_blocks_hotel_event" ADD CONSTRAINT "tour_itineraries_blocks_hotel_event_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tour_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_blocks_activity_event_alternatives" ADD CONSTRAINT "tour_itineraries_blocks_activity_event_alternatives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tour_itineraries_blocks_activity_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_blocks_activity_event" ADD CONSTRAINT "tour_itineraries_blocks_activity_event_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tour_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_blocks_transport_event_alternatives" ADD CONSTRAINT "tour_itineraries_blocks_transport_event_alternatives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tour_itineraries_blocks_transport_event"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_blocks_transport_event" ADD CONSTRAINT "tour_itineraries_blocks_transport_event_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tour_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_blocks_itinerary_details" ADD CONSTRAINT "tour_itineraries_blocks_itinerary_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tour_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries" ADD CONSTRAINT "tour_itineraries_tour_id_tours_id_fk" FOREIGN KEY ("tour_id") REFERENCES "public"."tours"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_rels" ADD CONSTRAINT "tour_itineraries_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."tour_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_rels" ADD CONSTRAINT "tour_itineraries_rels_hotels_fk" FOREIGN KEY ("hotels_id") REFERENCES "public"."hotels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_rels" ADD CONSTRAINT "tour_itineraries_rels_activities_fk" FOREIGN KEY ("activities_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tour_itineraries_rels" ADD CONSTRAINT "tour_itineraries_rels_transports_fk" FOREIGN KEY ("transports_id") REFERENCES "public"."transports"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "locations_rels_order_idx" ON "locations_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "locations_rels_parent_idx" ON "locations_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "locations_rels_path_idx" ON "locations_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "locations_rels_media_id_idx" ON "locations_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "hotels_name_idx" ON "hotels" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "hotels_location_idx" ON "hotels" USING btree ("location_id");
  CREATE INDEX IF NOT EXISTS "hotels_thumbnail_idx" ON "hotels" USING btree ("thumbnail_id");
  CREATE INDEX IF NOT EXISTS "hotels_updated_at_idx" ON "hotels" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "hotels_created_at_idx" ON "hotels" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "hotels_rels_order_idx" ON "hotels_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "hotels_rels_parent_idx" ON "hotels_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "hotels_rels_path_idx" ON "hotels_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "hotels_rels_hotel_facilities_id_idx" ON "hotels_rels" USING btree ("hotel_facilities_id");
  CREATE INDEX IF NOT EXISTS "hotels_rels_media_id_idx" ON "hotels_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "tour_highlights_updated_at_idx" ON "tour_highlights" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "tour_highlights_created_at_idx" ON "tour_highlights" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "tour_themes_updated_at_idx" ON "tour_themes" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "tour_themes_created_at_idx" ON "tour_themes" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "tours_updated_at_idx" ON "tours" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "tours_created_at_idx" ON "tours" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "tours_rels_order_idx" ON "tours_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "tours_rels_parent_idx" ON "tours_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "tours_rels_path_idx" ON "tours_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "tours_rels_tour_themes_id_idx" ON "tours_rels" USING btree ("tour_themes_id");
  CREATE INDEX IF NOT EXISTS "tours_rels_locations_id_idx" ON "tours_rels" USING btree ("locations_id");
  CREATE INDEX IF NOT EXISTS "tours_rels_tour_highlights_id_idx" ON "tours_rels" USING btree ("tour_highlights_id");
  CREATE INDEX IF NOT EXISTS "activities_suitable_for_order_idx" ON "activities_suitable_for" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "activities_suitable_for_parent_idx" ON "activities_suitable_for" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "activities_name_idx" ON "activities" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "activities_location_idx" ON "activities" USING btree ("location_id");
  CREATE INDEX IF NOT EXISTS "activities_thumbnail_idx" ON "activities" USING btree ("thumbnail_id");
  CREATE INDEX IF NOT EXISTS "activities_updated_at_idx" ON "activities" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "activities_created_at_idx" ON "activities" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "activities_rels_order_idx" ON "activities_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "activities_rels_parent_idx" ON "activities_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "activities_rels_path_idx" ON "activities_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "activities_rels_media_id_idx" ON "activities_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "transports_name_idx" ON "transports" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "transports_thumbnail_idx" ON "transports" USING btree ("thumbnail_id");
  CREATE INDEX IF NOT EXISTS "transports_updated_at_idx" ON "transports" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "transports_created_at_idx" ON "transports" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "transports_rels_order_idx" ON "transports_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "transports_rels_parent_idx" ON "transports_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "transports_rels_path_idx" ON "transports_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "transports_rels_media_id_idx" ON "transports_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_flight_event_order_idx" ON "tour_itineraries_blocks_flight_event" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_flight_event_parent_id_idx" ON "tour_itineraries_blocks_flight_event" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_flight_event_path_idx" ON "tour_itineraries_blocks_flight_event" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_hotel_event_alternatives_order_idx" ON "tour_itineraries_blocks_hotel_event_alternatives" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_hotel_event_alternatives_parent_id_idx" ON "tour_itineraries_blocks_hotel_event_alternatives" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_hotel_event_order_idx" ON "tour_itineraries_blocks_hotel_event" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_hotel_event_parent_id_idx" ON "tour_itineraries_blocks_hotel_event" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_hotel_event_path_idx" ON "tour_itineraries_blocks_hotel_event" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_activity_event_alternatives_order_idx" ON "tour_itineraries_blocks_activity_event_alternatives" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_activity_event_alternatives_parent_id_idx" ON "tour_itineraries_blocks_activity_event_alternatives" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_activity_event_order_idx" ON "tour_itineraries_blocks_activity_event" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_activity_event_parent_id_idx" ON "tour_itineraries_blocks_activity_event" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_activity_event_path_idx" ON "tour_itineraries_blocks_activity_event" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_transport_event_alternatives_order_idx" ON "tour_itineraries_blocks_transport_event_alternatives" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_transport_event_alternatives_parent_id_idx" ON "tour_itineraries_blocks_transport_event_alternatives" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_transport_event_order_idx" ON "tour_itineraries_blocks_transport_event" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_transport_event_parent_id_idx" ON "tour_itineraries_blocks_transport_event" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_transport_event_path_idx" ON "tour_itineraries_blocks_transport_event" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_itinerary_details_order_idx" ON "tour_itineraries_blocks_itinerary_details" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_itinerary_details_parent_id_idx" ON "tour_itineraries_blocks_itinerary_details" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_blocks_itinerary_details_path_idx" ON "tour_itineraries_blocks_itinerary_details" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_tour_idx" ON "tour_itineraries" USING btree ("tour_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_updated_at_idx" ON "tour_itineraries" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_created_at_idx" ON "tour_itineraries" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_rels_order_idx" ON "tour_itineraries_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_rels_parent_idx" ON "tour_itineraries_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_rels_path_idx" ON "tour_itineraries_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_rels_hotels_id_idx" ON "tour_itineraries_rels" USING btree ("hotels_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_rels_activities_id_idx" ON "tour_itineraries_rels" USING btree ("activities_id");
  CREATE INDEX IF NOT EXISTS "tour_itineraries_rels_transports_id_idx" ON "tour_itineraries_rels" USING btree ("transports_id");
  CREATE INDEX IF NOT EXISTS "hotel_facilities_updated_at_idx" ON "hotel_facilities" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "hotel_facilities_created_at_idx" ON "hotel_facilities" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "locations" ADD CONSTRAINT "locations_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hotels_fk" FOREIGN KEY ("hotels_id") REFERENCES "public"."hotels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tour_highlights_fk" FOREIGN KEY ("tour_highlights_id") REFERENCES "public"."tour_highlights"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tour_themes_fk" FOREIGN KEY ("tour_themes_id") REFERENCES "public"."tour_themes"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tours_fk" FOREIGN KEY ("tours_id") REFERENCES "public"."tours"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_activities_fk" FOREIGN KEY ("activities_id") REFERENCES "public"."activities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_transports_fk" FOREIGN KEY ("transports_id") REFERENCES "public"."transports"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tour_itineraries_fk" FOREIGN KEY ("tour_itineraries_id") REFERENCES "public"."tour_itineraries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hotel_facilities_fk" FOREIGN KEY ("hotel_facilities_id") REFERENCES "public"."hotel_facilities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "locations_thumbnail_idx" ON "locations" USING btree ("thumbnail_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_hotels_id_idx" ON "payload_locked_documents_rels" USING btree ("hotels_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_tour_highlights_id_idx" ON "payload_locked_documents_rels" USING btree ("tour_highlights_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_tour_themes_id_idx" ON "payload_locked_documents_rels" USING btree ("tour_themes_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_tours_id_idx" ON "payload_locked_documents_rels" USING btree ("tours_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_activities_id_idx" ON "payload_locked_documents_rels" USING btree ("activities_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_transports_id_idx" ON "payload_locked_documents_rels" USING btree ("transports_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_tour_itineraries_id_idx" ON "payload_locked_documents_rels" USING btree ("tour_itineraries_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_hotel_facilities_id_idx" ON "payload_locked_documents_rels" USING btree ("hotel_facilities_id");
  ALTER TABLE "public"."locations" ALTER COLUMN "type" SET DATA TYPE text;
  DROP TYPE "public"."enum_locations_type";
  CREATE TYPE "public"."enum_locations_type" AS ENUM('city', 'country');
  ALTER TABLE "public"."locations" ALTER COLUMN "type" SET DATA TYPE "public"."enum_locations_type" USING "type"::"public"."enum_locations_type";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "locations_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hotels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hotels_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_highlights" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_themes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tours" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tours_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "activities_suitable_for" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "activities" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "activities_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "transports" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "transports_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_itineraries_blocks_flight_event" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_itineraries_blocks_hotel_event_alternatives" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_itineraries_blocks_hotel_event" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_itineraries_blocks_activity_event_alternatives" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_itineraries_blocks_activity_event" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_itineraries_blocks_transport_event_alternatives" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_itineraries_blocks_transport_event" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_itineraries_blocks_itinerary_details" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_itineraries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tour_itineraries_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hotel_facilities" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "locations_rels" CASCADE;
  DROP TABLE "hotels" CASCADE;
  DROP TABLE "hotels_rels" CASCADE;
  DROP TABLE "tour_highlights" CASCADE;
  DROP TABLE "tour_themes" CASCADE;
  DROP TABLE "tours" CASCADE;
  DROP TABLE "tours_rels" CASCADE;
  DROP TABLE "activities_suitable_for" CASCADE;
  DROP TABLE "activities" CASCADE;
  DROP TABLE "activities_rels" CASCADE;
  DROP TABLE "transports" CASCADE;
  DROP TABLE "transports_rels" CASCADE;
  DROP TABLE "tour_itineraries_blocks_flight_event" CASCADE;
  DROP TABLE "tour_itineraries_blocks_hotel_event_alternatives" CASCADE;
  DROP TABLE "tour_itineraries_blocks_hotel_event" CASCADE;
  DROP TABLE "tour_itineraries_blocks_activity_event_alternatives" CASCADE;
  DROP TABLE "tour_itineraries_blocks_activity_event" CASCADE;
  DROP TABLE "tour_itineraries_blocks_transport_event_alternatives" CASCADE;
  DROP TABLE "tour_itineraries_blocks_transport_event" CASCADE;
  DROP TABLE "tour_itineraries_blocks_itinerary_details" CASCADE;
  DROP TABLE "tour_itineraries" CASCADE;
  DROP TABLE "tour_itineraries_rels" CASCADE;
  DROP TABLE "hotel_facilities" CASCADE;
  ALTER TABLE "locations" DROP CONSTRAINT "locations_thumbnail_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_hotels_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_tour_highlights_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_tour_themes_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_tours_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_activities_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_transports_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_tour_itineraries_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_hotel_facilities_fk";
  
  DROP INDEX IF EXISTS "locations_thumbnail_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_hotels_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_tour_highlights_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_tour_themes_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_tours_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_activities_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_transports_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_tour_itineraries_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_hotel_facilities_id_idx";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "thumbnail_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "hotels_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "tour_highlights_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "tour_themes_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "tours_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "activities_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "transports_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "tour_itineraries_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "hotel_facilities_id";
  ALTER TABLE "public"."locations" ALTER COLUMN "type" SET DATA TYPE text;
  DROP TYPE "public"."enum_locations_type";
  CREATE TYPE "public"."enum_locations_type" AS ENUM('City', 'Country');
  ALTER TABLE "public"."locations" ALTER COLUMN "type" SET DATA TYPE "public"."enum_locations_type" USING "type"::"public"."enum_locations_type";
  DROP TYPE "public"."enum_hotels_category";
  DROP TYPE "public"."enum_tours_currency";
  DROP TYPE "public"."enum_activities_type";
  DROP TYPE "public"."enum_activities_suitable_for";
  DROP TYPE "public"."enum_transports_type";
  DROP TYPE "public"."enum_tour_itineraries_blocks_itinerary_details_day";
  DROP TYPE "public"."enum_tour_itineraries_blocks_flight_event_operator";
  DROP TYPE "public"."enum_tour_itineraries_blocks_hotel_event_type";`)
}
