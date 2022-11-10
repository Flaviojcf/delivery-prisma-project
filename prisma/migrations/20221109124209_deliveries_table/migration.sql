-- CreateTable
CREATE TABLE "Deliveryman" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATETIME,
    "id_client" TEXT NOT NULL,
    "id_deliveryman" TEXT,
    "clientsId" TEXT NOT NULL,
    "deliverymanId" TEXT NOT NULL,
    CONSTRAINT "Deliveries_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "Clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deliveries_deliverymanId_fkey" FOREIGN KEY ("deliverymanId") REFERENCES "Deliveryman" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Deliveryman_username_key" ON "Deliveryman"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Clients_username_key" ON "Clients"("username");
