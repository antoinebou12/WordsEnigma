-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);

-- CreateTable
CREATE TABLE "UserSettings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "UserSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "definition" TEXT,
    "example" TEXT,
    "languageId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "wordsBankId" INTEGER,
    CONSTRAINT "Word_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Word_wordsBankId_fkey" FOREIGN KEY ("wordsBankId") REFERENCES "WordsBank" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WordsBank" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "languageId" INTEGER NOT NULL,
    "source" TEXT NOT NULL,
    CONSTRAINT "WordsBank_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "wordId" INTEGER NOT NULL,
    "wordsBankId" INTEGER NOT NULL,
    "tries" INTEGER NOT NULL DEFAULT 0,
    "startedAt" DATETIME NOT NULL,
    "finishedAt" DATETIME,
    "correct" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "languageId" INTEGER,
    "statisticsId" INTEGER,
    CONSTRAINT "Game_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Game_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Game_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Game_wordsBankId_fkey" FOREIGN KEY ("wordsBankId") REFERENCES "WordsBank" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Game_statisticsId_fkey" FOREIGN KEY ("statisticsId") REFERENCES "Statistics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Letter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "letter" TEXT NOT NULL,
    "tryRowId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "Letter_tryRowId_fkey" FOREIGN KEY ("tryRowId") REFERENCES "TryRow" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TryRow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gameId" INTEGER NOT NULL,
    "tries" INTEGER NOT NULL DEFAULT 0,
    "rowSize" INTEGER NOT NULL DEFAULT 0,
    "correct" BOOLEAN NOT NULL,
    "letterId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "TryRow_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Statistics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "gamePlayed" INTEGER NOT NULL DEFAULT 0,
    "gameWon" INTEGER NOT NULL DEFAULT 0,
    "gameLost" INTEGER NOT NULL DEFAULT 0,
    "streak" INTEGER NOT NULL DEFAULT 0,
    "average" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "Statistics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserSettings_userId_key" ON "UserSettings"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Word_languageId_key" ON "Word"("languageId");

-- CreateIndex
CREATE UNIQUE INDEX "WordsBank_languageId_key" ON "WordsBank"("languageId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_userId_key" ON "Game"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_wordId_key" ON "Game"("wordId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_wordsBankId_key" ON "Game"("wordsBankId");

-- CreateIndex
CREATE UNIQUE INDEX "Letter_tryRowId_key" ON "Letter"("tryRowId");

-- CreateIndex
CREATE UNIQUE INDEX "TryRow_gameId_key" ON "TryRow"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "TryRow_letterId_key" ON "TryRow"("letterId");

-- CreateIndex
CREATE UNIQUE INDEX "Statistics_userId_key" ON "Statistics"("userId");
