import sqlite3
con = sqlite3.connect('test.db')

cur = con.cursor()

cur.execute('''CREATE TABLE type (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30) NOT NULL)''')

cur.execute('''CREATE TABLE supplier (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name VARCHAR(30) NOT NULL, location VARCHAR(50) NOT NULL)''')

cur.execute('''CREATE TABLE product (id INTEGER NOT NULL PRIMARY KEY, type_id INTEGER NOT NULL, quantity INTEGER NOT NULL, supp_id INTEGER NOT NULL, FOREIGN KEY(type_id) REFERENCES type(id), FOREIGN KEY(supp_id) REFERENCES supplier(id))''')

cur.execute('''CREATE TABLE inventory (id INTEGER NOT NULL, prod_id INTEGER NOT NULL, PRIMARY KEY(id), FOREIGN KEY(prod_id) REFERENCES product(id))''')

con.commit()
con.close()