import mysql.connector

try:
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="892004",  # ← Your new password
        database="carbon_sync"
    )
    print("Connection successful!")
except mysql.connector.Error as err:
    print(f"Error: {err}")
