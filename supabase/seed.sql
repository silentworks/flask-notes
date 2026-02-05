INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user") VALUES
('00000000-0000-0000-0000-000000000000', 'd0fc7e46-a8a5-4fd4-8ba7-af485013e6fa', 'authenticated', 'authenticated', 'up+rosamond_damore@example.com', crypt('password123', gen_salt('bf')), '2023-02-18 23:31:13.017218+00', NULL, '', '2023-02-18 23:31:12.757017+00', '', NULL, '', '', NULL, '2023-02-18 23:31:13.01781+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2023-02-18 23:31:12.752281+00', '2023-02-18 23:31:13.019418+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, 'f'),
('00000000-0000-0000-0000-000000000000', '4c6ed4d5-746c-4124-9d3e-b32e5f769476', 'authenticated', 'authenticated', 'up+christopher.larson63@example.org', crypt('password123', gen_salt('bf')), '2023-02-19 00:01:51.351735+00', NULL, '', '2023-02-19 00:01:51.147035+00', '', NULL, '', '', NULL, '2023-02-19 00:01:51.352369+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2023-02-19 00:01:51.142802+00', '2023-02-19 00:01:51.353896+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, 'f'),
('00000000-0000-0000-0000-000000000000', 'b4461135-6cc9-42e7-a2b1-450938500290', 'authenticated', 'authenticated', 'up+naomie.spencer49@example.net', crypt('password123', gen_salt('bf')), '2023-02-18 23:36:54.88495+00', NULL, '', '2023-02-18 23:36:54.67958+00', '', NULL, '', '', NULL, '2023-02-18 23:36:54.885592+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2023-02-18 23:36:54.674532+00', '2023-02-18 23:36:54.887312+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, 'f'),
('00000000-0000-0000-0000-000000000000', 'c1ef0aed-73c0-41f1-bf51-8c1d2fe3994e', 'authenticated', 'authenticated', 'up+camila.brakus@example.net', crypt('password123', gen_salt('bf')), '2023-02-18 23:36:56.08865+00', NULL, '', '2023-02-18 23:36:55.827566+00', '', NULL, '', '', NULL, '2023-02-18 23:48:04.159175+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2023-02-18 23:36:55.823901+00', '2023-02-18 23:48:04.16081+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, 'f'),
('00000000-0000-0000-0000-000000000000', 'ee111686-d4a9-4263-9735-445b60d53c8d', 'authenticated', 'authenticated', 'up+elmo50@example.com', crypt('password123', gen_salt('bf')), '2023-02-18 23:30:49.554834+00', NULL, '', '2023-02-18 23:30:49.330541+00', '', NULL, '', '', NULL, '2023-02-18 23:48:24.578005+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2023-02-18 23:30:49.322994+00', '2023-02-18 23:48:24.579303+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, 'f');

UPDATE "public"."profiles" SET 
    "display_name" = 'Damon Larkin', 
    "bio" = 'Reprehenderit et autem.'
WHERE id = 'd0fc7e46-a8a5-4fd4-8ba7-af485013e6fa';

UPDATE "public"."profiles" SET 
    "display_name" = 'Adam Grimes',
    "bio" = 'Ab perspiciatis accusamus temporibus perferendis porro ex blanditiis.'
WHERE id = '4c6ed4d5-746c-4124-9d3e-b32e5f769476';

UPDATE "public"."profiles_info" SET
    "first_name" = 'Jalon',
    "last_name" = 'Hegmann',
    "dob" = '1997-11-23',
    "profile_location" = 'Rempelhaven, Bouvet Island (Bouvetoya)'
WHERE profile_id = 'd0fc7e46-a8a5-4fd4-8ba7-af485013e6fa';

UPDATE "public"."profiles_info" SET
    "first_name" = 'Cameron',
    "last_name" = 'Kerluke',
    "dob" = '1999-02-18',
    "profile_location" = 'East Vivienneton, Jamaica'
WHERE profile_id = '4c6ed4d5-746c-4124-9d3e-b32e5f769476';

--
-- Data for Name: notes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."notes" ("id", "author_id", "title", "content", "featured_image", "is_public", "created_at", "updated_at") VALUES
	('b5ba00e1-4aa6-44a0-a6a5-225405a0bee5', 'd0fc7e46-a8a5-4fd4-8ba7-af485013e6fa', 'Winter Travel Tips: How to Stay Safe, Cozy, and Stress-Free on the Road', 'Winter travel has a special kind of magic—snow-covered landscapes, fewer crowds, and that cozy feeling of escaping the cold (or embracing it). But winter also brings delays, slippery roads, and weather that doesn’t care about your itinerary. A little planning goes a long way.

Whether you’re heading to a snowy mountain town or flying somewhere sunny, these winter travel tips will help you stay safe, comfortable, and sane.

## 1. Check the Weather (Then Check It Again)

Winter weather can change fast. A sunny forecast today can turn into a snowstorm tomorrow.

- Check the forecast a few days before departure and again the morning you leave  
- Look at conditions along your entire route, not just your destination  
- Sign up for flight or train alerts so you’re notified about delays early  

Flexibility is your best friend in winter.

## 2. Pack Smart, Not Heavy

Layering beats bulky packing every time. Aim for clothing you can mix, match, and adjust.

Essentials to consider:
- Thermal base layers  
- A waterproof outer layer (coat, boots, gloves)  
- Extra socks (more than you think you need)  
- A warm hat and scarf—even if you “never wear them”  

If you’re flying, pack at least one warm outfit in your carry-on in case your luggage is delayed.

## 3. Prepare for Travel Delays

Winter delays are common, especially at busy airports.

To stay comfortable during unexpected waits:
- Bring snacks and a refillable water bottle  
- Download movies, podcasts, or books ahead of time  
- Keep chargers and power banks easily accessible  

A calm mindset helps too—build buffer time into your plans whenever possible.

## 4. Winterize Your Road Trip

Driving in winter requires extra preparation.

Before you go:
- Check tire tread and tire pressure  
- Top off windshield washer fluid rated for freezing temperatures  
- Keep an emergency kit in your car (blanket, flashlight, snacks, jumper cables)  

And remember: slow down. Getting there safely always beats getting there fast.

## 5. Protect Your Skin and Health

Cold air and dry heat can be tough on your body.

Don’t forget to pack:
- Moisturizer and lip balm  
- Hand cream (especially for flights)  
- Any medications you may need if you get stuck traveling longer than planned  

Staying hydrated helps more than people realize—even in cold weather.

## 6. Embrace Seasonal Experiences

One upside of winter travel is access to experiences you won’t find other times of year.

Depending on where you’re going, look for:
- Winter festivals or holiday markets  
- Snowshoeing, skiing, or ice skating  
- Cozy cafés, hot springs, or scenic train rides  

Lean into the season instead of fighting it.

## 7. Get Travel Insurance

Winter travel comes with higher odds of cancellations and delays. Travel insurance can cover:
- Weather-related trip interruptions  
- Lost or delayed baggage  
- Emergency accommodations  

It’s one of those things you hope you won’t need—but are glad you have.

## Final Thoughts

Winter travel doesn’t have to be stressful. With a bit of planning, realistic expectations, and the right gear, it can be one of the most memorable times to explore somewhere new. Pack smart, stay flexible, and don’t forget to enjoy the slower pace that winter naturally brings.

Safe travels—and stay warm out there.', 'd0fc7e46-a8a5-4fd4-8ba7-af485013e6fa/hq7llejm_fi.png', true, '2025-12-28 21:43:37.398559+00', NULL),
	('f7fce10f-5cf4-4613-949c-a4b118e96a6d', 'd0fc7e46-a8a5-4fd4-8ba7-af485013e6fa', 'Summer Holidays: How to Plan the Perfect Sunny Escape', 'Summer holidays are all about longer days, lighter moods, and the freedom to slow down or speed up depending on your travel style. Whether you’re dreaming of beach lounging, cultural city breaks, or outdoor adventures, a little planning can turn a good summer trip into a great one.

Here’s how to make the most of your summer holidays without the stress.

## 1. Choose the Right Destination for Your Style

Not all summer trips are the same. Before booking, think about what you actually want to do.

Ask yourself:
- Do I want relaxation, adventure, or culture?
- Am I okay with crowds, or do I prefer quieter spots?
- Do I want heat, mild weather, or a mix of both?

Coastal towns, islands, and lakes are perfect for unwinding, while cities and national parks offer variety and energy.

## 2. Book Early (or Be Strategically Last-Minute)

Summer is peak travel season in many places, which means popular hotels and flights fill up fast.

- Book early for family travel and major tourist destinations  
- Look for shoulder-season dates in early June or late August  
- Be flexible with airports and travel days to find better deals  

A little flexibility can save you money—and headaches.

## 3. Pack Light, Smart, and Breathable

Hot weather calls for practical packing.

Summer essentials include:
- Lightweight, breathable clothing  
- Comfortable walking shoes or sandals  
- Sun protection: sunscreen, sunglasses, and a hat  
- A reusable water bottle  

Leave room in your bag for souvenirs and spontaneous finds.

## 4. Plan Around the Heat

Midday heat can drain your energy fast, especially in warm destinations.

To stay comfortable:
- Schedule sightseeing early in the morning or late afternoon  
- Take midday breaks for lunch, swimming, or rest  
- Choose accommodations with air conditioning or shaded outdoor spaces  

Traveling at a slower pace often leads to better experiences.

## 5. Embrace Local Summer Culture

Summer brings festivals, food, and outdoor life to the forefront.

Look for:
- Open-air markets and street food  
- Local festivals, concerts, or beach events  
- Sunset walks, evening cafés, and nighttime city energy  

These moments often become the highlights of a summer holiday.

## 6. Stay Safe in the Sun

It’s easy to underestimate how strong the sun can be when you’re having fun.

Remember to:
- Apply sunscreen regularly (especially after swimming)  
- Drink plenty of water throughout the day  
- Take shade breaks to avoid heat exhaustion  

Taking care of yourself means you can enjoy more of your trip.

## 7. Leave Room for Spontaneity

Some of the best summer memories come from unplanned moments.

- Say yes to last-minute boat trips or local recommendations  
- Wander without an agenda once in a while  
- Allow downtime to simply enjoy where you are  

A perfect itinerary still needs breathing room.

## Final Thoughts

Summer holidays are less about checking boxes and more about enjoying the feeling of being somewhere new. With smart planning, realistic expectations, and a relaxed mindset, your summer escape can be refreshing, memorable, and exactly what you need.

Here’s to sunshine, new places, and unforgettable summer days. ☀️
', 'd0fc7e46-a8a5-4fd4-8ba7-af485013e6fa/thaenzhx_fi.png', true, '2025-12-28 20:22:45.697065+00', NULL);


--
-- Data for Name: shortkeys; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."shortkeys" ("id", "created_at") VALUES
	('GM4kvUihM4Q', '2025-12-28 20:22:45.697065+00'),
	('PmVblrFXdX8', '2025-12-28 20:23:10.898893+00'),
	('HxHHG4KPFfM', '2025-12-28 21:43:37.398559+00'),
	('NUUwiu1oFMU', '2025-12-28 21:43:40.745445+00'),
	('Fn8TZZNUuQQ', '2025-12-28 21:47:49.837509+00'),
	('x6WhRsQp5Ek', '2025-12-28 21:48:15.192522+00'),
	('IM49MhCGogQ', '2025-12-28 21:51:47.971795+00'),
	('XFJ6_BLvgck', '2025-12-31 18:05:24.223385+00'),
	('9WD-1huwLCM', '2025-12-31 18:07:05.120053+00'),
	('6Ke2RyOcHKQ', '2025-12-31 18:09:19.882442+00'),
	('0Av9rxCkvjA', '2025-12-31 18:14:22.925978+00'),
	('SYhDvsQZbEk', '2025-12-31 18:15:05.759066+00'),
	('wVruOz66UuM', '2025-12-31 18:27:18.319267+00'),
	('MGJZYXzftuw', '2025-12-31 18:29:36.804977+00'),
	('SRuzxE-xto4', '2025-12-31 18:31:34.657098+00');


