create table if not exists ods.moderation_queue(
	review_id TEXT primary key,
	user_id TEXT,
	product_id TEXT,
	review_text TEXT,
	rating numeric,
	moderation_status TEXT,
	submitted_at timestamp 
);
insert into ods.moderation_queue(review_id, user_id, product_id, review_text, rating,
	moderation_status,
	submitted_at)
select 
	review_id, user_id, product_id, review_text, rating,
	moderation_status, submitted_at
from staging.moderation_queue_raw
on conflict do nothing;

create table if not exists ods.moderation_flags(
	review_id TEXT references ods.moderation_queue(review_id),
	flag TEXT,
	primary key(review_id, flag)
);

insert into ods.moderation_flags(review_id, flag)
select 
	review_id,
	value as flag
from staging.moderation_queue_raw,
LATERAL jsonb_array_elements_text(flags)
on conflict do nothing;


