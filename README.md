# ETL_Processes_Alex_Fomenko_Last_DZ_3_module
Итоговое домашнее задание по курсу ETL (3 модуль)
Содержание .env (нужно создать после клонирования):
AIRFLOW_UID=1000
AIRFLOW_GID=0
# Структура проекта:
<pre>
etl_Processes_Alex_Fomenko_hw2/
├── dags/
│   ├──full_load_iot.py
│   ├──incremental_load_iot.py 
│   └──operate_IOT.py
├── config/
│   └── ..
├── logs/
│   └── ..
├── plugins/
│   └── ..
├── data/
│   └── ..
├── docker-compose.yaml
├── .env
└── README.md

Результат работы дага можно посмотреть через DBeaver(порт 5432, логин и пароль - postgres):

</pre>

#Запуск сервиса: <br/>
echo -e "AIRFLOW_UID=1000\nAIRFLOW_GID=0" > .env<br/>
docker compose up -d <br/>
Адрес http://localhost:8080/ <br/>
Логин и пароль - airflow <br/>
