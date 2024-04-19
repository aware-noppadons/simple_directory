# GET 
http://localhost:3000/tablename/id

# POST
```
curl -X POST -H "Content-Type: application/json" -d '{
    "recordId": "7890123456789012",
    "note": "This is note 3",
    "data1": "data1",
    "data2": "data2",
    "data3": "data3",
    "data4": "data4",
    "data5": "data5"
}' http://localhost:3000/record
```