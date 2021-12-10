BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "inventory" (
	"id"	INTEGER NOT NULL,
	"prod_id"	INTEGER NOT NULL,
	FOREIGN KEY("prod_id") REFERENCES "product"("id"),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "product" (
	"id"	INTEGER NOT NULL,
	"type_id"	INTEGER NOT NULL,
	"quantity"	INTEGER NOT NULL,
	"supp_id"	INTEGER NOT NULL,
	FOREIGN KEY("supp_id") REFERENCES "supplier"("id"),
	FOREIGN KEY("type_id") REFERENCES "type"("id"),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "supplier" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR(30) NOT NULL,
	"location"	VARCHAR(50) NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "type" (
	"id"	INTEGER,
	"name"	VARCHAR(30) NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
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
