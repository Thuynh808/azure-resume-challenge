import azure.functions as func
import logging
from azure.cosmos import CosmosClient
import os 

endpoint = os.environ["COSMOS_ENDPOINT"]
key = os.environ["COSMOS_KEY"]
cosmos_client = CosmosClient(endpoint, key)
database_name = "streetrack-counter-db"
container_name = "VisitorCount"

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="CounterAPI")
def CounterAPI(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    database = cosmos_client.get_database_client(database_name)
    container = database.get_container_client(container_name)
    item = container.read_item("global", "visitorcount")
    visit_count = int(item.get("Counter", 0))
    
    visit_count += 1
    
    item["Counter"] = str(visit_count)
    container.upsert_item(item)
    
    return func.HttpResponse(f"{visit_count}")








import azure.functions as func
import logging

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="CounterAPI")
def CounterAPI(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return func.HttpResponse(f"Hello, {name}. This HTTP triggered function executed successfully.")
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )