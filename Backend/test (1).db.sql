BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "type" (
	"id"	INTEGER,
	"name"	VARCHAR(30) NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "supplier" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR(30) NOT NULL,
	"location"	VARCHAR(50) NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "product" (
	"id"	INTEGER NOT NULL,
	"type_id"	INTEGER NOT NULL,
	"quantity"	INTEGER NOT NULL,
	"supp_id"	INTEGER NOT NULL,
	PRIMARY KEY("id"),
	FOREIGN KEY("type_id") REFERENCES "type"("id"),
	FOREIGN KEY("supp_id") REFERENCES "supplier"("id")
);
CREATE TABLE IF NOT EXISTS "inventory" (
	"id"	INTEGER NOT NULL,
	"prod_id"	INTEGER NOT NULL,
	PRIMARY KEY("id"),
	FOREIGN KEY("prod_id") REFERENCES "product"("id")
);
INSERT INTO "type" ("id","name") VALUES (1,'Canned Beans'),
 (2,'Canned Peaches');
INSERT INTO "supplier" ("id","name","location") VALUES (1,'FreeFood','123 Fake Blvd., CA, 94412'),
 (2,'Private Donator','N/A');
INSERT INTO "product" ("id","type_id","quantity","supp_id") VALUES (1,1,5,1),
 (2,2,10,1),
 (3,1,15,1);
INSERT INTO "inventory" ("id","prod_id") VALUES (1,1),
 (2,3);
CREATE VIEW v_shipments
AS
SELECT
	product.id AS 'Shipment ID',
	type.name AS 'Product Name',
	product.quantity AS 'Product Quantity',
	supplier.name AS 'From'
FROM
	product
INNER JOIN supplier ON supplier.id = prod_id
INNER JOIN type ON type.id = product.type_id;
COMMIT;
