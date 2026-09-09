create extension if not exists "pgcrypto";

create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  duration text,
  short_description text,
  description text,
  start_time text,
  guest_capacity text,
  inclusions jsonb default '[]'::jsonb,
  image text,
  sort_order int default 0,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.rooms (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  bed_configuration text,
  bathroom text,
  max_guests int default 2,
  count_on_property int default 1,
  description text,
  image text,
  image_fallback text,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.room_amenities (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.rooms(id) on delete cascade,
  key text not null,
  label text not null,
  verified boolean default false
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  reference text unique not null,
  type text not null check (type in ('fishing', 'accommodation', 'combined')),
  experience_id text,
  room_id text,
  booking_date date,
  preferred_start_time text,
  check_in date,
  check_out date,
  guest_count int not null default 1,
  customer_name text not null,
  email text not null,
  phone text not null,
  country text,
  experience_level text,
  special_requests text,
  status text not null default 'NEW' check (
    status in ('NEW', 'CONTACTED', 'QUOTED', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'DECLINED')
  ),
  admin_notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.availability (
  id uuid primary key default gen_random_uuid(),
  room_id uuid references public.rooms(id) on delete cascade,
  date date not null,
  status text not null default 'open' check (status in ('open', 'held', 'booked', 'blocked')),
  notes text,
  unique (room_id, date)
);

create table if not exists public.fishing_reports (
  id uuid primary key default gen_random_uuid(),
  report_date date not null,
  title text,
  body text,
  river_conditions text,
  published boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  src text not null,
  fallback_src text,
  alt text not null,
  category text not null check (category in ('fishing', 'zambezi', 'mwenje', 'victoria-falls')),
  caption text,
  placeholder boolean default false,
  sort_order int default 0,
  published boolean default true
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  country text,
  rating numeric,
  body text not null,
  date date,
  source text,
  permission_noted boolean default false,
  published boolean default false
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  body text,
  cover_image text,
  published boolean default false,
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  category text check (category in ('fishing', 'stay', 'planning')),
  published boolean default true,
  sort_order int default 0
);

create table if not exists public.site_settings (
  id int primary key default 1 check (id = 1),
  fishing_brand text,
  stay_brand text,
  tagline text,
  location_label text,
  email text,
  phone text,
  whatsapp text,
  address text,
  instagram text,
  facebook text,
  check_in text,
  check_out text,
  updated_at timestamptz default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  status text default 'NEW',
  created_at timestamptz default now()
);

alter table public.experiences enable row level security;
alter table public.rooms enable row level security;
alter table public.room_amenities enable row level security;
alter table public.bookings enable row level security;
alter table public.availability enable row level security;
alter table public.fishing_reports enable row level security;
alter table public.gallery_items enable row level security;
alter table public.reviews enable row level security;
alter table public.blog_posts enable row level security;
alter table public.faqs enable row level security;
alter table public.site_settings enable row level security;
alter table public.contact_messages enable row level security;

create policy "public read published experiences" on public.experiences for select using (published = true);
create policy "public read published rooms" on public.rooms for select using (published = true);
create policy "public read amenities" on public.room_amenities for select using (true);
create policy "public read published gallery" on public.gallery_items for select using (published = true);
create policy "public read published reviews" on public.reviews for select using (published = true and permission_noted = true);
create policy "public read published posts" on public.blog_posts for select using (published = true);
create policy "public read published faqs" on public.faqs for select using (published = true);
create policy "public read settings" on public.site_settings for select using (true);
create policy "public read published reports" on public.fishing_reports for select using (published = true);

create policy "anon insert bookings" on public.bookings for insert to anon with check (status = 'NEW');
create policy "anon insert contact" on public.contact_messages for insert to anon with check (status = 'NEW');

