# @app.route("/api/materials", methods=['GET'])
# def get_materials():
#     cursor.execute("SELECT * FROM materials")
#     materials = cursor.fetchall()
#     return jsonify(materials)

# @app.route("/api/calculate_footprint", methods=['POST'])
# def calculate_footprint():
#     data = request.json.get('items') 
#     total = 0
#     for item in data:
#         cursor.execute("SELECT * FROM materials WHERE name = %s", (item['material'],))
#         material = cursor.fetchone()
#         if material:
#             total += material["carbon_footprint_kg_co2e"] * int(item['quantity'])
#     return jsonify({"total_carbon_footprint": total})s