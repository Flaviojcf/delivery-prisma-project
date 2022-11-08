-- CreateTable
CREATE TABLE "Deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATETIME NOT NULL,
    "id_client" TEXT NOT NULL,
    "id_deliveryman" TEXT NOT NULL,
    "clientsId" TEXT NOT NULL,
    "deliverymanId" TEXT NOT NULL,
    CONSTRAINT "Deliveries_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "Clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deliveries_deliverymanId_fkey" FOREIGN KEY ("deliverymanId") REFERENCES "Deliveryman" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
