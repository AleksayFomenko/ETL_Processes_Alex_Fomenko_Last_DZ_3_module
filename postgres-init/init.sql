CREATE SCHEMA IF NOT EXISTS staging;
CREATE SCHEMA IF NOT EXISTS dwh;
CREATE SCHEMA IF NOT EXISTS marts;

-- UserSessions
CREATE TABLE staging.user_sessions_raw (
    session_id TEXT PRIMARY KEY,
    user_id TEXT,
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    pages_visited JSONB,
    device JSONB,
    actions JSONB,
    loaded_at TIMESTAMP DEFAULT NOW()
);

-- EventLogs
CREATE TABLE staging.event_logs_raw (
    event_id TEXT PRIMARY KEY,
    timestamp TIMESTAMP,
    event_type TEXT,
    details JSONB,
    loaded_at TIMESTAMP DEFAULT NOW()
);

-- SupportTickets
CREATE TABLE staging.support_tickets_raw (
    ticket_id TEXT PRIMARY KEY,
    user_id TEXT,
    status TEXT,
    issue_type TEXT,
    messages JSONB,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    loaded_at TIMESTAMP DEFAULT NOW()
);

-- UserRecommendations
CREATE TABLE staging.user_recommendations_raw (
    user_id TEXT PRIMARY KEY,
    recommended_products JSONB,
    last_updated TIMESTAMP,
    loaded_at TIMESTAMP DEFAULT NOW()
);

-- ModerationQueue
CREATE TABLE staging.moderation_queue_raw (
    review_id TEXT PRIMARY KEY,
    user_id TEXT,
    product_id TEXT,
    review_text TEXT,
    rating INT,
    moderation_status TEXT,
    flags JSONB,
    submitted_at TIMESTAMP,
    loaded_at TIMESTAMP DEFAULT NOW()
);
