-- CreateTable
CREATE TABLE "universoficcional" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "criador" TEXT,
    "midia" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "cronologia" TIMESTAMP(3) NOT NULL,
    "personagens" TEXT NOT NULL,
    "popularidade" DOUBLE PRECISION NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "universoficcional_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "universoficcional_nome_key" ON "universoficcional"("nome");
