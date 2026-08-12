import requests

url = "https://jsonplaceholder.typicode.com/todos"

response = requests.get(url)

if response.status_code == 200:
    data = response.json()

    for user in data:
        print("Name:", user["title"])
else:
    print("Failed to fetch data")