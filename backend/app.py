# using flask_restful
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin

# from pyECLAT import Example1, Example2
from pyECLAT import ECLAT
import pandas as pd
import numpy as np


# creating the flask app
app = Flask(__name__)
# app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_HEADERS'] = 'application/json'
CORS(app, support_credentials=True)
# creating an API object
api = Api(app)


class Eclat(Resource):

    eclat_data = []

    def put(self, category_name, id):
        data = request.get_json()
        eclat_data = data.copy()
        return {'data': data}, 201

    def get(self, category_name, id):
        # recommendation_data = pd.Dataframe(eclat_data)
        market = pd.read_csv('Market_Basket_Optimisation.csv', header=None)
        eclat_instance = ECLAT(market, verbose=True)
        get_ECLAT_indexes, get_ECLAT_supports = eclat_instance.fit(min_support=0.052,
                                                                   min_combination=2,
                                                                   max_combination=2,
                                                                   separator=' & ',
                                                                   verbose=False)
        rank = pd.DataFrame(get_ECLAT_supports, index=[0])
        final = rank.head(1)
        arr = final.columns.values.tolist()
        products_recommended = arr[0].replace(" ", "").split("&")
        return jsonify({"products": products_recommended, "category": category_name, "id": id})


api.add_resource(Eclat, '/category/<string:category_name>/<string:id>')


# driver function
if __name__ == '__main__':
    app.run(debug=True)


# in the single item page we get the array objects of products bought together ka id
# we then filter that to check ki kaunse kaunse products have the current product as well and make a dataset out of that
# then we post that dataset, will be quite big but no choice, will run it using eclat algorithm and send it via the api
#
