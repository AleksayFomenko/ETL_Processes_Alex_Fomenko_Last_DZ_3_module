from airflow import DAG
from airflow.decorators import task
from airflow.providers.postgres.hooks.postgres import PostgresHook
from airflow.providers.mongo.hooks.mongo import MongoHook
from datetime import datetime as dt, timedelta
import logging
import json

default_args = {
    "owner": "Alex",
    "depends_on_past": False,
    "email_on_failure": True,
    "retries": 2,
    "retry_delay": timedelta(minutes=5)
}

with DAG(
    dag_id = "migration_mongo_psql",
    default_args=default_args,
    description="Миграция БД из mosngo в psql",
    schedule="3 3 * * *",
    start_date=dt(2026, 2, 1),
    catchup=False,
    tags=["postgres", "mongo"]
) as dag:

    log = logging.getLogger("airflow.task") 

    @task
    def transfer_data(table: str , table_to: str):
        mongo_conn = MongoHook(conn_id = "mongo_default")
        postgres_conn = PostgresHook(conn_id = "postgres_default")
        
        collection = mongo_conn.get_collection(table,"mongo_table")
        data = list(collection.find())

        if not data:
            log.info("No data in table %s", table)
            return f"No data in table {table}"

        conn = postgres_conn.get_conn()
        cursor = conn.cursor()

        for doc in data:
            doc.pop("_id", None)
            columns = list(doc.keys())
            values = []
            for value in doc.values():
                if isinstance(value, (dict, list)):
                    values.append(json.dumps(value, default=str))
                else:
                    values.append(value)
            placeholders = ", ".join(["%s"] * len(values))
            columns_sql = ", ".join(columns)
            query = f"""
                INSERT INTO {table_to}
                ({columns_sql})
                VALUES ({placeholders})
                ON CONFLICT DO NOTHING
            """
            cursor.execute(query, values)

        conn.commit()
        cursor.close()
        conn.close()
        log.info("Loaded into %s", table)
        return f"Loaded into {table}"

    load_user_sessions = transfer_data.override(task_id="load_user_sessions")(
        "UserSessions",
        "staging.user_sessions_raw"
    )

    load_event_logs = transfer_data.override(task_id="load_event_logs")(
        "EventLogs",
        "staging.event_logs_raw"
    )

    load_support_tickets = transfer_data.override(task_id="load_support_tickets")(
        "SupportTickets",
        "staging.support_tickets_raw"
    )

    load_user_recommendations = transfer_data.override(task_id="load_user_recommendations")(
        "UserRecommendations",
        "staging.user_recommendations_raw"
    )

    load_moderation_queue = transfer_data.override(task_id="load_moderation_queue")(
        "ModerationQueue",
        "staging.moderation_queue_raw"
    )