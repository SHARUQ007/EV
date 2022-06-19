import json
from django.http import JsonResponse
from rest_framework.urlpatterns import format_suffix_patterns


import boto3,os
from boto3.dynamodb.conditions import Key
from dotenv import load_dotenv

load_dotenv()

def api_home(request,*args,**kwargs):
    # connecting to AWS production dynamodb service
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1',
                          aws_access_key_id=os.environ.get("ACCESS_KEY"),
                          aws_secret_access_key=os.environ.get("SECRET_KEY"))
    try:
        data_table = dynamodb.Table('OpenWeatherData')
        try:
            if id:
                query = data_table.query(
                    KeyConditionExpression=Key('project_id').eq(int(14)),
                )
                if query['Items']:
                    for q in query['Items']:
                        print(q)

        except:
            pass
    except:
        pass
 
    return JsonResponse(query)







