import random
import string
import json


x = ''.join(random.choice(string.ascii_uppercase +
                          string.ascii_lowercase + string.digits) for _ in range(10))

product_list = ["coffee maker", "frother", "gumboots", "umberalla", "raincoat", "bag cover",
                "milk frother", "clothes dryer", "windsheater", "crocs", "water proof phone dockets", "mosquito repellent", "heater", "generator", "french press"]
dict_products = {}

for i in range(200):
    key = ''.join(random.choice(string.ascii_uppercase +
                                string.ascii_lowercase + string.digits) for _ in range(10))
    value = []
    for i in range(3):
        n = random.randint(0, len(product_list)-1)
        value.append(product_list[n])
    dict_products[key] = value

print(dict_products)

# json_object = json.dumps(dict_products, indent=4)


with open('test.json', 'w', encoding='utf-8') as f:
    json.dump(dict_products, f, ensure_ascii=False, indent=4)
