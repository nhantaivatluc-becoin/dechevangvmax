-- CreateTable
CREATE TABLE "WheelSpin" (
    "id" SERIAL NOT NULL,
    "telegramId" TEXT NOT NULL,
    "reward" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WheelSpin_pkey" PRIMARY KEY ("id")
);
