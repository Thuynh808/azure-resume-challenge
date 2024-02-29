import azure.functions as func
from azure.cosmos import CosmosClient
import os
import json

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="CounterAPI")

def CounterAPI(req: func.HttpRequest) -> func.HttpResponse:
    try:
        endpoint = os.environ["COSMOS_ENDPOINT"]
        key = os.environ["COSMOS_KEY"]
        cosmos_client = CosmosClient(endpoint, key)       
        database_name = "AzureResume"
        container_name = "Counter"      
        database = cosmos_client.get_database_client(database_name)
        container = database.get_container_client(container_name)     
        item_id = "1"
        partition_key = "1"
        item = container.read_item(item_id, partition_key)      
        
        visit_count = int(item['count']) + 1
        item['count'] = visit_count
        container.replace_item(item=item, body=item)
      
        response_body = json.dumps({"visit_count": visit_count})
        return func.HttpResponse(response_body, mimetype="application/json")
    
    except Exception as e:
        print(f"ERROR: {str(e)}")
        return func.HttpResponse("Error occurred", status_code=500)
