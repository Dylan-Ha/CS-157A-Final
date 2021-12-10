from flask import Flask, render_template, request, redirect
import sqlite3


app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/api/",methods = ["POST", "GET"])

def databaseQuery():
    con = sqlite3.connect('test.db')
    cur = con.cursor()
    print(request.get_json())
    cur.execute("SELECT * FROM type")
    r = [dict((cur.description[i][0], value) \
               for i, value in enumerate(row)) for row in cur.fetchall()]
    con.close()
    print(r)
    return ""

if __name__ == '__main__':
    app.run(debug=True)