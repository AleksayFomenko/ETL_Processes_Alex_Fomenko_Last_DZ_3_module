create table ods.event_logs(
	event_id TEXT primary key,
	timestamp TIMESTAMP,
	event_type TEXT
);
insert into ods.event_logs (event_id,timestamp,event_type)
select 
	event_id,
	timestamp,
	event_type 
from staging.event_logs_raw;
create table ods.event_details(
	event_id TEXT references ods.event_logs(event_id),
	page TEXT,
	primary key(event_id, page)
);
insert into ods.event_details(event_id, page)
select 
	event_id,
	details->>'page'
from staging.event_logs_raw
on conflict do nothing;

