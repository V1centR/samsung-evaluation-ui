### SAMSUNG Evaluation API | Vicente Carvalho

API currrency quotations:  SpringBoot 2.3.3 + Docker

##### Endpoint: GET http://ec2-18-191-133-109.us-east-2.compute.amazonaws.com/api/evaluation

```sh
[
    {
        "docNumber": "800002010",
        "docDate": "2020-01-01",
        "currencyCode": "USD",
        "currencyDesc": "Dolar",
        "docValue": "119.17",
        "valueUsd": "119.17",
        "valuePen": "419.48",
        "valueBrl": "616.11"
    },
    {
        "docNumber": "800002011",
        "docDate": "2020-01-01",
        "currencyCode": "PEN",
        "currencyDesc": "Soles Peruano",
        "docValue": "200.55",
        "valueUsd": "56.15",
        "valuePen": "200.55",
        "valueBrl": "292.80"
    }, ...
```
###### RESPONSE: HTTP.STATUS 200 CREATED

===================================================