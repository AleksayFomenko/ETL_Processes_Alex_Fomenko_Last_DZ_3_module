db = db.getSiblingDB('mongo_table')
db.createCollection("UserSessions")
db.createCollection("EventLogs")
db.createCollection("SupportTickets")
db.createCollection("UserRecommendations")
db.createCollection("ModerationQueue")

/* ------------------ UserSessions ------------------ */
db.UserSessions.insertOne({ session_id: "sess_001", user_id: "user_001", start_time: new Date("2024-01-10T09:00:00Z"), end_time: new Date("2024-01-10T09:30:00Z"), pages_visited: ["/home","/products","/products/1","/cart"], device: {type:"mobile", browser: "Safari"}, actions:["login","view_product","add_to_cart","logout"] });
db.UserSessions.insertOne({ session_id: "sess_002", user_id: "user_002", start_time: new Date("2024-01-10T10:10:00Z"), end_time: new Date("2024-01-10T10:50:00Z"), pages_visited: ["/home","/search","/products/2"], device: {type:"desktop", browser: "Google"}, actions:["login","search","view_product","logout"] });
db.UserSessions.insertOne({ session_id: "sess_003", user_id: "user_003", start_time: new Date("2024-01-10T11:05:00Z"), end_time: new Date("2024-01-10T11:35:00Z"), pages_visited: ["/home","/products/3","/cart"], device: {type:"tablet", browser: "Yandex"}, actions:["login","view_product","add_to_cart","logout"] });
db.UserSessions.insertOne({ session_id: "sess_004", user_id: "user_004", start_time: new Date("2024-01-10T12:15:00Z"), end_time: new Date("2024-01-10T12:45:00Z"), pages_visited: ["/home","/products","/products/4","/checkout"], device: {type:"desktop", browser: "Yandex"}, actions:["login","view_product","checkout","logout"] });
db.UserSessions.insertOne({ session_id: "sess_005", user_id: "user_005", start_time: new Date("2024-01-10T13:00:00Z"), end_time: new Date("2024-01-10T13:20:00Z"), pages_visited: ["/home","/products/5"], device: {type:"mobile", browser: "Safari"}, actions:["login","view_product","logout"] });
db.UserSessions.insertOne({ session_id: "sess_006", user_id: "user_006", start_time: new Date("2024-01-10T14:30:00Z"), end_time: new Date("2024-01-10T15:00:00Z"), pages_visited: ["/home","/blog","/products/6"], device: {type:"desktop", browser: "Google"}, actions:["login","read_blog","view_product","logout"] });
db.UserSessions.insertOne({ session_id: "sess_007", user_id: "user_007", start_time: new Date("2024-01-10T15:10:00Z"), end_time: new Date("2024-01-10T15:40:00Z"), pages_visited: ["/home","/products/7","/cart"], device: {type:"mobile", browser: "Opera"}, actions:["login","view_product","add_to_cart","logout"] });
db.UserSessions.insertOne({ session_id: "sess_008", user_id: "user_008", start_time: new Date("2024-01-10T16:00:00Z"), end_time: new Date("2024-01-10T16:50:00Z"), pages_visited: ["/home","/products/8","/checkout"], device: {type:"tablet", browser: "Google"}, actions:["login","view_product","checkout","logout"] });
db.UserSessions.insertOne({ session_id: "sess_009", user_id: "user_009", start_time: new Date("2024-01-10T17:05:00Z"), end_time: new Date("2024-01-10T17:35:00Z"), pages_visited: ["/home","/products/9"], device: {type:"desktop", browser: "Google"}, actions:["login","view_product","logout"] });
db.UserSessions.insertOne({ session_id: "sess_010", user_id: "user_010", start_time: new Date("2024-01-10T18:15:00Z"), end_time: new Date("2024-01-10T18:45:00Z"), pages_visited: ["/home","/products/10","/cart"], device: {type:"mobile", browser: "Safari"}, actions:["login","view_product","add_to_cart","logout"] });

/* ------------------ EventLogs ------------------ */
db.EventLogs.insertOne({ event_id: "evt_001", timestamp: new Date("2024-01-10T09:05:20Z"), event_type:"click", details:{page:"/products/1"} });
db.EventLogs.insertOne({ event_id: "evt_002", timestamp: new Date("2024-01-10T10:15:30Z"), event_type:"scroll", details:{page:"/products/2"} });
db.EventLogs.insertOne({ event_id: "evt_003", timestamp: new Date("2024-01-10T11:10:10Z"), event_type:"click", details:{page:"/products/3"} });
db.EventLogs.insertOne({ event_id: "evt_004", timestamp: new Date("2024-01-10T12:20:00Z"), event_type:"hover", details:{page:"/products/4"} });
db.EventLogs.insertOne({ event_id: "evt_005", timestamp: new Date("2024-01-10T13:05:50Z"), event_type:"click", details:{page:"/products/5"} });
db.EventLogs.insertOne({ event_id: "evt_006", timestamp: new Date("2024-01-10T14:35:30Z"), event_type:"scroll", details:{page:"/products/6"} });
db.EventLogs.insertOne({ event_id: "evt_007", timestamp: new Date("2024-01-10T15:15:15Z"), event_type:"click", details:{page:"/products/7"} });
db.EventLogs.insertOne({ event_id: "evt_008", timestamp: new Date("2024-01-10T16:05:05Z"), event_type:"hover", details:{page:"/products/8"} });
db.EventLogs.insertOne({ event_id: "evt_009", timestamp: new Date("2024-01-10T17:25:25Z"), event_type:"click", details:{page:"/products/9"} });
db.EventLogs.insertOne({ event_id: "evt_010", timestamp: new Date("2024-01-10T18:45:45Z"), event_type:"click", details:{page:"/products/10"} });

/* ------------------ SupportTickets ------------------ */
db.SupportTickets.insertOne({ ticket_id:"ticket_001", user_id:"user_001", status:"open", issue_type:"payment", messages:[{sender:"user",message:"Не могу оплатить заказ.",timestamp:new Date("2024-01-09T12:00:00Z")},{sender:"support",message:"Уточните способ оплаты.",timestamp:new Date("2024-01-09T13:00:00Z")}], created_at:new Date("2024-01-09T11:55:00Z"), updated_at:new Date("2024-01-09T13:00:00Z") });
db.SupportTickets.insertOne({ ticket_id:"ticket_002", user_id:"user_002", status:"closed", issue_type:"delivery", messages:[{sender:"user",message:"Заказ не пришёл.",timestamp:new Date("2024-01-09T10:00:00Z")},{sender:"support",message:"Мы отправили повторно.",timestamp:new Date("2024-01-09T12:00:00Z")}], created_at:new Date("2024-01-09T09:55:00Z"), updated_at:new Date("2024-01-09T12:00:00Z") });

/* ------------------ UserRecommendations ------------------ */
db.UserRecommendations.insertOne({ user_id:"user_001", recommended_products:["prod_101","prod_205","prod_333"], last_updated:new Date("2024-01-10T08:00:00Z") });
db.UserRecommendations.insertOne({ user_id:"user_002", recommended_products:["prod_102","prod_206","prod_334"], last_updated:new Date("2024-01-10T09:00:00Z") });

/* ------------------ ModerationQueue ------------------ */
db.ModerationQueue.insertOne({ review_id:"rev_001", user_id:"user_001", product_id:"prod_101", review_text:"Отличный товар!", rating:5, moderation_status:"pending", flags:["contains_images"], submitted_at:new Date("2024-01-08T10:20:00Z") });
db.ModerationQueue.insertOne({ review_id:"rev_002", user_id:"user_002", product_id:"prod_102", review_text:"Хорошо, но доставка медленная.", rating:4, moderation_status:"approved", flags:["contains_text"], submitted_at:new Date("2024-01-08T11:15:00Z") });
