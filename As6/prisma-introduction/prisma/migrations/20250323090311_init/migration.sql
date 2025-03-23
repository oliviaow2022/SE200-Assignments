-- CreateTable
CREATE TABLE "ExpenseItem" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ExpenseItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExpenseItem_item_key" ON "ExpenseItem"("item");

-- CreateIndex
CREATE INDEX "ExpenseItem_description_idx" ON "ExpenseItem"("description");
