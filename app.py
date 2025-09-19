from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",          
    password="892004",    
    database="carbon_sync"
)
cursor = db.cursor(dictionary=True)
# @app.route("/", methods=['GET'])
# def hello():
#     return "Hello World"
# major difference for GET and POST: GET is used for retrieving or fetching the data  from server or database and POST is used for sending the data from server or database
@app.route("/api/materials",methods=['GET']) 
def get_materials():
    cursor.execute("SELECT * FROM materials")
    materials = cursor.fetchall()
    return jsonify(materials)
@app.route("/api/adding_task",methods=["POST"])
def adding_task():
    data = request.json
    name = data.get('name')
    quantity = data.get('quantity')
    carbon_footprint_kg_co2e = data.get("carbon_footprint_kg_co2e",0)
    # add = 0
    # for item in data:
    cursor.execute( "INSERT INTO materials (name, quantity, carbon_footprint_kg_co2e) VALUES (%s, %s, %s)", (name, quantity, carbon_footprint_kg_co2e))
    db.commit()
    return jsonify({"message": "New material added successfully"})
      #aterial = cursor.fetchone()
    #     if material:
    #         add += material["carbon_footprint_kg_co2e"]
    # return jsonify("Newly Added one":add)
    # db.commit()
    # return jsonify("Newly added material")
# @app.route("/api/deleting_task",methods=['DELETE'])
# const deleting_task():
#     data = request.jsonify
#     cursor.execute("DELETE FROM materials WHERE name = %s")
#     db.commit()
#     return jsonify("Deleted material")
@app.route("/api/deleting_task", methods=['DELETE'])
def deleting_task():
    data = request.json
    name = data.get('name')
    cursor.execute("DELETE FROM materials WHERE name = %s", (name,))
    db.commit()
    return jsonify({"message": "Material deleted successfully"})

if __name__ == '__main__':
    app.run(debug=True)


