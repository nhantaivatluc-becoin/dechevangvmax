-- CreateTable
CREATE TABLE "WheelHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cost" DECIMAL(65,30) NOT NULL DEFAULT 0.01,
    "reward" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WheelHistory_pkey" PRIMARY KEY ("id")
);
